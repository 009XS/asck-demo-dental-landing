import React from 'react';
import { TEAM_MEMBERS } from '../data/dentalData';
import { DoodleHeart, DoodleVerifiedBadge } from './DoodleIcons';

export const TeamSection: React.FC = () => {
  const drMaya = TEAM_MEMBERS[0];
  const hygienists = TEAM_MEMBERS.slice(1);

  return (
    <section id="equipo" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#00666f] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wide">
          <span>LOS HUMANOS DETRÁS DE LAS SONRISAS</span>
          <span className="font-hand text-base text-[#a9371d] -rotate-3 ml-1">♥ primero amigos</span>
        </div>
        <h2 className="font-kalam text-2xl sm:text-3xl text-[#1a1c1e]">
          Conoce a la Dra. Maya y al Equipo de Cuidado
        </h2>
      </div>

      {/* Polaroid Card Frame for Dr. Maya Lin */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl sketch-card relative -rotate-1 max-w-xl mx-auto">
        {/* Tape sticker accent on top */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 sketch-tape rotate-1 flex items-center justify-center border border-[#1a1c1e]/20 z-10">
          <span className="font-hand text-base text-[#271900] font-bold tracking-wider">
            ★ ALMA SUAVE ★
          </span>
        </div>

        {/* Doctor Image Photo in Sketchy Polaroid Inner Frame */}
        <div className="w-full aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden bg-[#edeef0] border-2 border-[#1a1c1e] shadow-[2px_2px_0px_#1a1c1e] relative">
          <img
            alt="Dra. Maya Lin sonriendo cálidamente"
            className="w-full h-full object-cover"
            src={drMaya.image}
          />
          {/* Scribble badge over corner */}
          <div className="absolute bottom-2.5 right-2.5 bg-white/95 px-3 py-1 sketch-pill flex items-center gap-1 shadow-sm">
            <DoodleHeart className="w-4 h-4 text-[#a9371d]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-bold">
              {drMaya.badge}
            </span>
          </div>
        </div>

        {/* Handwritten-style quote & credentials */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-kalam text-xl sm:text-2xl text-[#1a1c1e] font-extrabold">
                {drMaya.name}
              </h3>
              <p className="font-patrick text-xs sm:text-sm text-[#00666f] font-semibold">
                {drMaya.role}
              </p>
            </div>
            <div className="sketch-pill bg-[#fff9ea] px-3 py-1 text-[#795500] font-hand text-base font-bold rotate-2">
              {drMaya.credentials}
            </div>
          </div>

          {/* Quote Box with Speech Tail */}
          <div className="mt-3 p-3 bg-[#fffdfa] sketch-card relative">
            <p className="font-patrick text-sm sm:text-base text-[#3e494a] italic leading-relaxed">
              {drMaya.quote}
            </p>
          </div>

          {/* Credentials Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            <span className="sketch-pill bg-[#f5f3ee] text-[#3e494a] font-patrick text-xs px-2.5 py-0.5">
              12+ Años de Experiencia
            </span>
            <span className="sketch-pill bg-[#f5f3ee] text-[#3e494a] font-patrick text-xs px-2.5 py-0.5">
              Defensora contra la Ansiedad Dental
            </span>
            <span className="sketch-pill bg-[#f5f3ee] text-[#3e494a] font-patrick text-xs px-2.5 py-0.5">
              Invisalign Platinum Provider
            </span>
          </div>
        </div>
      </div>

      {/* Care Team Avatars Row */}
      <div className="mt-6 bg-[#f5f3ee] p-4 sm:p-5 sketch-card max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-kalam text-base sm:text-lg text-[#1a1c1e] font-bold">
            El Equipo de Higiene y Confort
          </h4>
          <span className="font-hand text-base text-[#00666f] font-bold -rotate-1">
            ¡siempre a tu lado!
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {hygienists.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className={`relative ${member.rotation}`}>
                <img
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#1a1c1e] shadow-[2px_2px_0px_#1a1c1e]"
                  alt={member.name}
                  src={member.image}
                />
              </div>
              <span className="font-kalam text-xs sm:text-sm text-[#1a1c1e] font-bold mt-1.5">
                {member.name}
              </span>
              <span className="font-patrick text-[11px] sm:text-xs text-[#3e494a] leading-tight">
                {member.specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
