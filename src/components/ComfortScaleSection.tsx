import React, { useState } from 'react';
import {
  DoodleFaceSuperAnxious,
  DoodleFaceNervous,
  DoodleFaceZen,
  DoodleHeart,
  DoodleHeadphones,
  DoodleSmileFace,
} from './DoodleIcons';

type MoodType = 'super-anxious' | 'a-bit-nervous' | 'totally-fine';

interface MoodResponse {
  title: string;
  text: string;
  highlight: string;
  icon: 'heart' | 'headphones' | 'smile';
}

const RESPONSES: Record<MoodType, MoodResponse> = {
  'super-anxious': {
    title: '¡Cero preocupaciones ni vergüenza!',
    text: 'Almohadas térmicas para el cuello, mantas con peso, óxido nitroso relajante ("gas de la risa") y señales manuales de "pausa cuando quieras" están 100% listas para ti.',
    highlight: 'Avanzamos a tu propio ritmo, sin prisas ni juicios.',
    icon: 'heart',
  },
  'a-bit-nervous': {
    title: '¡Te escuchamos con total empatía!',
    text: '¡La mayoría de nuestros pacientes empiezan aquí! Ponte nuestros auriculares Bose con cancelación de ruido con tu lista favorita de Spotify o tu serie favorita de Netflix en la pantalla de techo.',
    highlight: 'El 98% nos dice que se les pasó volando.',
    icon: 'headphones',
  },
  'totally-fine': {
    title: '¡Genial! Todo listo para brillar.',
    text: 'Te atenderemos sin demoras con toallitas tibias de lavanda, limpiezas ultrasónicas suaves con agua temperada y una sonrisa radiante y pulida.',
    highlight: '¡Directo a tu día con una sonrisa fresca!',
    icon: 'smile',
  },
};

export const ComfortScaleSection: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('super-anxious');

  const current = RESPONSES[selectedMood];

  return (
    <section id="confort" className="px-4 sm:px-6 py-6 max-w-4xl mx-auto w-full">
      <div className="bg-[#f5f3ee] p-5 sm:p-6 sketch-card-teal relative overflow-hidden">
        {/* Sketchy star in corner */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#ffdad2] border-2 border-[#1a1c1e] rounded-full flex items-center justify-center -rotate-12 shadow-[2px_2px_0px_#1a1c1e]">
          <span className="text-[#a9371d] font-bold text-xl">✦</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-patrick text-xs uppercase tracking-wider text-[#00666f] font-bold">
            ESCALA DE CONFORT SUAVE
          </span>
          <svg className="w-6 h-2 text-[#fd7454]" fill="none" viewBox="0 0 24 6">
            <path d="M1 3 Q 6 1, 12 3 T 23 3" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>

        <h3 className="font-kalam text-xl sm:text-2xl text-[#1a1c1e] mt-1">
          ¿Cómo te sientes hoy respecto al dentista?
        </h3>
        <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-0.5">
          Toca una opción y adaptaremos tu protocolo de atención al instante:
        </p>

        {/* 3 Mood Buttons */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-5">
          {/* Button 1 */}
          <button
            type="button"
            onClick={() => setSelectedMood('super-anxious')}
            className={`p-3 sketch-pill text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              selectedMood === 'super-anxious'
                ? 'bg-[#74d5e1] text-[#001f23] scale-105 shadow-[3px_4px_0px_#1a1c1e]'
                : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
            }`}
          >
            <DoodleFaceSuperAnxious className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-patrick text-xs sm:text-sm font-bold leading-tight">
              Aterrorizado/a
            </span>
          </button>

          {/* Button 2 */}
          <button
            type="button"
            onClick={() => setSelectedMood('a-bit-nervous')}
            className={`p-3 sketch-pill text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              selectedMood === 'a-bit-nervous'
                ? 'bg-[#fabc3f] text-[#271900] scale-105 shadow-[3px_4px_0px_#1a1c1e]'
                : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
            }`}
          >
            <DoodleFaceNervous className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-patrick text-xs sm:text-sm font-bold leading-tight">
              Un poco nervioso/a
            </span>
          </button>

          {/* Button 3 */}
          <button
            type="button"
            onClick={() => setSelectedMood('totally-fine')}
            className={`p-3 sketch-pill text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
              selectedMood === 'totally-fine'
                ? 'bg-[#91f1fd] text-[#001f23] scale-105 shadow-[3px_4px_0px_#1a1c1e]'
                : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
            }`}
          >
            <DoodleFaceZen className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-patrick text-xs sm:text-sm font-bold leading-tight">
              Listo/a y Zen
            </span>
          </button>
        </div>

        {/* Dynamic Response Box */}
        <div className="mt-5 p-4 bg-white sketch-card flex items-start gap-3 transition-all duration-300">
          {current.icon === 'heart' && <DoodleHeart className="w-7 h-7 text-[#00666f] flex-shrink-0 mt-0.5" />}
          {current.icon === 'headphones' && <DoodleHeadphones className="w-7 h-7 text-[#00666f] flex-shrink-0 mt-0.5" />}
          {current.icon === 'smile' && <DoodleSmileFace className="w-7 h-7 text-[#00666f] flex-shrink-0 mt-0.5" />}

          <div className="flex flex-col">
            <h4 className="font-kalam text-base sm:text-lg text-[#00666f] font-bold">
              {current.title}
            </h4>
            <p className="font-patrick text-sm sm:text-base text-[#1a1c1e] leading-snug mt-1">
              {current.text}
            </p>
            <span className="font-hand text-sm sm:text-base text-[#a9371d] font-bold mt-1">
              ✎ {current.highlight}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
