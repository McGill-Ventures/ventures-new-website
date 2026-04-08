import React from 'react';
import Image from 'next/image';
import { TeamCardProps } from '@/types';
import { cn } from '@/lib/utils';
import { useStaggeredFadeIn } from '@/hooks/useOptimizedAnimation';

const TeamCard: React.FC<TeamCardProps> = React.memo(({ member, index, variant = 'executive' }) => {
  const animation = useStaggeredFadeIn(index);
  
  const sizeConfig = {
    executive: { image: 'w-48 h-48', card: 'p-10' },
    analyst: { image: 'w-32 h-32', card: 'p-8' },
    developer: { image: 'w-40 h-40', card: 'p-10' },
    head: { image: 'w-48 h-48', card: 'p-12 max-w-md' }
  };

  const titleConfig = {
    executive: 'text-3xl font-display text-purple-950 mb-3',
    analyst: 'text-2xl font-display text-purple-950 mb-2',
    developer: 'text-2xl font-display text-purple-950 mb-3',
    head: 'text-3xl font-display text-purple-950 mb-3'
  };

  const roleConfig = {
    executive: 'text-purple-600 font-heading font-semibold mb-4 text-xl',
    analyst: 'text-purple-600 font-heading font-semibold mb-3 text-lg',
    developer: 'text-purple-600 font-heading font-semibold mb-4 text-xl',
    head: 'text-purple-600 font-heading font-semibold mb-4 text-xl'
  };

  const renderImage = () => {
    if (member.image) {
      return (
        <div className={cn(
          sizeConfig[variant].image,
          "rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl"
        )}>
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      );
    }

    const gradientClasses = {
      executive: 'from-purple-200 to-purple-300',
      analyst: 'from-purple-300 to-purple-400',
      developer: 'from-purple-400 to-purple-500',
      head: 'from-purple-500 to-purple-600'
    };

    return (
      <div className={cn(
        sizeConfig[variant].image,
        `bg-gradient-to-br ${gradientClasses[variant]} rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl`
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  };

  const renderSkills = () => {
    if (!member.skills) return null;

    return (
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {member.skills.map((skill, skillIndex) => (
          <span 
            key={skillIndex} 
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-heading font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  };

  const renderSpecialization = () => {
    if (!member.specialization) return null;

    return (
      <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-xs font-heading font-semibold">
        {member.specialization}
      </div>
    );
  };

  const cardContent = (
    <>
      {member.linkedinUrl && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      )}
      {renderImage()}

      <h3 className={titleConfig[variant]}>{member.name}</h3>
      <p className={roleConfig[variant]}>{member.role}</p>

      {member.education && (
        <p className="text-purple-600 font-body mb-4 text-sm italic">{member.education}</p>
      )}

{member.bio && (
        <p className="text-purple-700 leading-relaxed font-body mb-6">{member.bio}</p>
      )}

      {renderSpecialization()}
      {renderSkills()}
    </>
  );

  const cardClass = cn(
    "text-center group glass rounded-3xl hover-lift relative block",
    sizeConfig[variant].card,
    animation.className
  );

  if (member.linkedinUrl) {
    return (
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
        style={animation.style}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={cardClass} style={animation.style}>
      {cardContent}
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

export { TeamCard };