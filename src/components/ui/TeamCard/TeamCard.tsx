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

  return (
    <div 
      className={cn(
        "text-center group glass rounded-3xl hover-lift",
        sizeConfig[variant].card,
        animation.className
      )}
      style={animation.style}
    >
      {renderImage()}
      
      <h3 className={titleConfig[variant]}>{member.name}</h3>
      <p className={roleConfig[variant]}>{member.role}</p>
      
      {member.experience && (
        <p className="text-purple-500 font-body mb-4 text-sm">{member.experience}</p>
      )}
      
      {member.education && (
        <p className="text-purple-600 font-body mb-4 text-sm italic">{member.education}</p>
      )}
      
      {member.bio && (
        <p className="text-purple-700 leading-relaxed font-body mb-6">{member.bio}</p>
      )}
      
      {renderSpecialization()}
      {renderSkills()}
    </div>
  );
});

TeamCard.displayName = 'TeamCard';

export { TeamCard };