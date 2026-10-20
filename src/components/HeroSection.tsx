import React from 'react';
import {
  DoodleTooth,
  DoodleHeart,
  DoodleSmileFace,
  DoodleHeadphones,
  DoodleClock,
  DoodleSparkle,
  DoodleStarburst,
  DoodleVerifiedBadge,
  DoodleCalendar,
  DoodlePhone,
  DoodleWavyUnderline,
} from './DoodleIcons';

interface HeroProps {
  onOpenBooking: () => void;
  clinicName: string;
  doctorName: string;
  tagline: string;
  phone: string;
}

export const HeroSection: React.FC<HeroProps> = ({
  onOpenBooking,
  clinicName,
  doctorName,
  tagline,
  phone,
}) => {
  return (
    <section id="inicio" className="flex flex-col w-full pt-16">
      {/* Top Ambient Banner / Warm Welcome Notice (Sketchy Post-It Style) */}
      <div className="px-4 sm:px-6 pt-4 pb-2 max-w-4xl mx-auto w-full">
        <div className="relative bg-[#fff9ea] rounded-xl p-4 sketch-card overflow-hidden -rotate-0.5">
          {/* Tape sticker doodle top center */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 sketch-tape -rotate-2 flex items-center justify-center border border-[#1a1c1e]/20 z-10">
            <span className="w-16 h-0.5 bg-[#271900]/30 rounded-full"></span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2.5">
              <DoodleHeart className="w-6 h-6 text-[#a9371d] flex-shrink-0 animate-pulse" />
              <span className="font-patrick text-sm sm:text-base text-[#1a1c1e] font-semibold">
                ¿Primera visita? ¡Caja de bienvenida con cepillo eléctrico sónico de regalo!
              </span>
            </div>
            <span className="sketch-pill bg-[#fd7454] text-[#6b1200] font-patrick text-xs px-3 py-1 font-bold rotate-1 whitespace-nowrap">
              ★ Nuevo Paciente
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full relative">
        {/* Sketchy Starburst doodle top right */}
        <div className="absolute top-2 right-4 sm:right-10 text-[#fabc3f] select-none pointer-events-none animate-spin-slow">
          <DoodleStarburst className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>

        {/* Sticker Pill */}
        <div className="inline-flex self-start items-center gap-1.5 bg-[#f0f9f9] px-3.5 py-1 sketch-pill mb-4 -rotate-1">
          <DoodleVerifiedBadge className="w-4 h-4 text-[#00666f]" />
          <span className="font-patrick text-xs text-[#00666f] tracking-wider uppercase font-bold">
            ODONTOLOGÍA BOUTIQUE SIN ANSIEDAD
          </span>
        </div>

        {/* Main Headline with Hand-drawn Highlighter Swash */}
        <div className="relative">
          <h1 className="font-kalam text-3xl sm:text-5xl text-[#1a1c1e] tracking-tight leading-tight">
            Odontología con{' '}
            <span className="relative inline-block px-1">
              {/* Hand-drawn highlighter swash */}
              <svg
                className="absolute inset-0 w-full h-full -z-10 text-[#74d5e1]/40"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 30"
              >
                <path
                  d="M0 6 C20 2, 80 4, 98 8 C100 18, 85 26, 95 28 C75 27, 20 29, 2 24 C-2 16, 5 10, 0 6 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-[#00666f] font-extrabold">manos suaves</span>
              {/* Coral squiggly doodle underline */}
              <DoodleWavyUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#fd7454]" />
            </span>{' '}
            y{' '}
            <span className="relative inline-block">
              <span className="relative z-10">buena vibra.</span>
              <DoodleSparkle className="absolute -top-3 -right-6 w-7 h-7 text-[#fabc3f]" />
              <svg
                className="absolute bottom-0 left-0 w-full h-2 -z-10 text-[#ffdea8]/70"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 80 10"
              >
                <path d="M1 5 Q 40 1, 79 6" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-patrick text-base sm:text-lg text-[#3e494a] mt-4 max-w-2xl leading-relaxed">
          Dile adiós al miedo al dentista. En <strong className="text-[#00666f] font-bold">{clinicName}</strong> con la{' '}
          <strong className="text-[#1a1c1e]">{doctorName}</strong>, disfrutas de un cuidado dental tranquilo, cómodo y
          verdaderamente sin dolor en nuestro acogedor estudio bañado de sol.
        </p>

        {/* CTAs with Doodle pointer */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 relative max-w-xl">
          {/* Hand-drawn doodle indicator arrow & handwritten micro-copy */}
          <div className="absolute -top-9 right-4 hidden sm:flex items-center gap-1 text-[#a9371d] pointer-events-none select-none">
            <span className="font-hand text-xl text-[#a9371d] font-bold rotate-6 tracking-wide">
              ¡Reserva en 60s! ↘
            </span>
            <svg
              className="w-7 h-7 rotate-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 32 32"
            >
              <path d="M8 8 C 14 16, 20 20, 24 24"></path>
              <path d="M24 16 L 24 24 L 16 24"></path>
            </svg>
          </div>

          <button
            onClick={onOpenBooking}
            className="sketch-card w-full sm:w-auto flex-1 min-h-[52px] bg-[#00666f] text-white font-patrick text-base sm:text-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#00818c]"
          >
            <DoodleCalendar className="w-5 h-5 text-white" />
            <span className="font-bold tracking-wide">Reservar tu Cita Tranquila</span>
          </button>

          <a
            href={`tel:${phone}`}
            className="sketch-card w-full sm:w-auto min-h-[50px] bg-white text-[#1a1c1e] font-patrick text-sm sm:text-base flex items-center justify-center gap-2 px-5 cursor-pointer transition-all hover:bg-[#edeef0]"
          >
            <DoodlePhone className="w-5 h-5 text-[#00666f]" />
            <span className="font-bold">Llamar: {phone}</span>
          </a>
        </div>

        {/* Trust Stats in Sketchy Cards with hand-drawn circles */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
          {/* Stat 1 */}
          <div className="relative bg-white p-3 sketch-pill flex flex-col items-center text-center">
            <svg
              className="absolute inset-0 w-full h-full text-[#00666f]/30 pointer-events-none -rotate-3"
              fill="none"
              viewBox="0 0 100 70"
            >
              <ellipse cx="50" cy="35" rx="44" ry="28" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" />
            </svg>
            <span className="font-kalam text-xl sm:text-2xl text-[#00666f] font-extrabold relative">
              10k+
            </span>
            <span className="font-patrick text-xs sm:text-sm text-[#3e494a] font-medium">
              Sonrisas Felices
            </span>
          </div>

          {/* Stat 2 */}
          <div className="relative bg-white p-3 sketch-pill flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <span className="font-kalam text-xl sm:text-2xl text-[#a9371d] font-extrabold">4.9</span>
              <DoodleSparkle className="w-4 h-4 text-[#fabc3f]" />
            </div>
            <span className="font-patrick text-xs sm:text-sm text-[#3e494a] font-medium">
              +500 Reseñas
            </span>
          </div>

          {/* Stat 3 */}
          <div className="relative bg-white p-3 sketch-pill flex flex-col items-center text-center">
            <span className="font-kalam text-xl sm:text-2xl text-[#795500] font-extrabold relative">
              100%
              <svg
                className="absolute -top-1 -right-3 w-4 h-4 text-[#00666f]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox="0 0 16 16"
              >
                <path d="M3 8.5L6.5 12L13 4"></path>
              </svg>
            </span>
            <span className="font-patrick text-xs sm:text-sm text-[#3e494a] font-medium">
              Sin Miedos
            </span>
          </div>
        </div>

        {/* Comfort Ticker Tags with Wobbly Borders & Doodle Icons */}
        <div className="flex flex-wrap gap-2 mt-5">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sketch-pill">
            <DoodleHeadphones className="w-4 h-4 text-[#00666f]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-semibold">
              Auriculares con cancelación de ruido y Netflix en techo
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sketch-pill">
            <DoodleSmileFace className="w-4 h-4 text-[#a9371d]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-semibold">
              Garantía cero juicios
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sketch-pill">
            <DoodleClock className="w-4 h-4 text-[#795500]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-semibold">
              Urgencias el mismo día
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
