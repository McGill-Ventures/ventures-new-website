import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface UseOptimizedAnimationProps {
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
}

interface AnimationConfig {
  style: React.CSSProperties;
  className: string;
}

export function useOptimizedAnimation(
  index: number, 
  { baseDelay = 0, staggerDelay = 0.1, className = 'animate-fade-in-up' }: UseOptimizedAnimationProps = {}
): AnimationConfig {
  return useMemo(() => ({
    style: {
      animationDelay: `${baseDelay + (index * staggerDelay)}s`,
    },
    className: cn(className, 'opacity-0')
  }), [index, baseDelay, staggerDelay, className]);
}

// Common animation presets
export const useStaggeredFadeIn = (index: number, baseDelay = 0) => 
  useOptimizedAnimation(index, { baseDelay, staggerDelay: 0.1, className: 'animate-fade-in-up' });

export const useStaggeredSlideIn = (index: number, baseDelay = 0) => 
  useOptimizedAnimation(index, { baseDelay, staggerDelay: 0.15, className: 'animate-slide-in-right' });

// Memoized style generators for better performance
export const getOptimizedStyles = {
  cardGrid: (columns: number) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: '1.5rem'
  }),
  
  responsiveGrid: {
    base: 'grid gap-6',
    sm: 'sm:grid-cols-2',
    md: 'md:grid-cols-3',
    lg: 'lg:grid-cols-4'
  }
};

// Performance-optimized component wrapper
export function withOptimizedAnimation<T extends object>(
  Component: React.ComponentType<T>
) {
  return React.memo(Component);
}