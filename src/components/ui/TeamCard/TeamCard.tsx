import React from 'react';
import Image from 'next/image';
import { TeamCardProps } from '@/types';
import { cn, getAnimationDelay } from '@/lib/utils';

export const TeamCard: React.FC<TeamCardProps> = ({ member, index, variant = 'executive' }) => {
  const renderImage = () => {
    if (member.image) {
      return (
        <div className="w-48 h-48 rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      );
    }

    const sizeClasses = {
      executive: 'w-48 h-48',
      analyst: 'w-32 h-32',
      developer: 'w-40 h-40',
      head: 'w-48 h-48'
    };

    const gradientClasses = {
      executive: 'from-purple-200 to-purple-300',
      analyst: 'from-purple-300 to-purple-400',
      developer: 'from-purple-400 to-purple-500',
      head: 'from-purple-500 to-purple-600'
    };

    return (
      <div className={cn(
        sizeClasses[variant],
        `bg-gradient-to-br ${gradientClasses[variant]} rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl`
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

  const containerClasses = {
    executive: 'text-center group animate-fade-in-up glass rounded-3xl p-10',
    analyst: 'text-center group animate-fade-in-up glass rounded-3xl p-8',
    developer: 'text-center group animate-fade-in-up glass rounded-3xl p-10',
    head: 'text-center group animate-fade-in-up glass rounded-3xl p-12 max-w-md'
  };

  const titleClasses = {
    executive: 'text-3xl font-display text-purple-950 mb-3',
    analyst: 'text-2xl font-display text-purple-950 mb-2',
    developer: 'text-2xl font-display text-purple-950 mb-3',
    head: 'text-3xl font-display text-purple-950 mb-3'
  };

  const roleClasses = {
    executive: 'text-purple-600 font-heading font-semibold mb-4 text-xl',
    analyst: 'text-purple-600 font-heading font-semibold mb-3 text-lg',
    developer: 'text-purple-600 font-heading font-semibold mb-4 text-xl',
    head: 'text-purple-600 font-heading font-semibold mb-4 text-xl'
  };

  return (
    <div 
      className={containerClasses[variant]}
      style={getAnimationDelay(index)}
    >
      {renderImage()}
      
      <h3 className={titleClasses[variant]}>{member.name}</h3>
      <p className={roleClasses[variant]}>{member.role}</p>
      <p className="text-purple-700 font-body text-lg mb-4">{member.experience}</p>
      
      {member.bio && (
        <p className="text-purple-800 leading-relaxed font-body mb-4">{member.bio}</p>
      )}
      
      {member.education && (
        <p className="text-purple-600 font-body text-sm">{member.education}</p>
      )}
      
      {renderSkills()}
      {renderSpecialization()}
    </div>
  );
};