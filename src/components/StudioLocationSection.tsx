import React from 'react';
import { DoodleMapPin } from './DoodleIcons';
import { MessageSquare, Phone, Navigation } from 'lucide-react';

interface LocationProps {
  clinicName: string;
  phone: string;
  address: string;
  zona: string;
}

export const StudioLocationSection: React.FC<LocationProps> = ({
  clinicName,
  phone,
  address,
  zona,
}) => {
  return (
    <section id="estudio" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#00666f] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wide">
          <span>ENCUENTRA NUESTRO REFUGIO</span>
          <DoodleMapPin className="w-4 h-4 text-[#00666f]" />
        </div>
        <h2 className="font-kalam text-2xl sm:text-3xl text-[#1a1c1e]">
          Visita Nuestro Estudio Bañado de Sol
        </h2>
      </div>

      {/* Map Container Card */}
      <div className="bg-white sketch-card p-5 sm:p-6 flex flex-col gap-4">
        {/* Hand-Drawn Style Illustrated Map */}
        <div className="w-full h-48 sm:h-56 rounded-xl border-2 border-[#1a1c1e] relative overflow-hidden bg-[#f4f7f6]">
          {/* Hand-drawn sketchy road grid SVG inside map container */}
          <svg className="w-full h-full text-[#bdc9ca]" fill="none" viewBox="0 0 320 180">
            {/* Grid pattern / sketched streets */}
            <path d="M-10 60 Q 80 55 160 62 T 340 58" stroke="currentColor" strokeLinecap="round" strokeWidth="12" />
            <path d="M-10 130 Q 90 135 180 128 T 340 132" stroke="currentColor" strokeLinecap="round" strokeWidth="10" />
            <path d="M120 -10 Q 115 70 125 120 T 118 190" stroke="currentColor" strokeLinecap="round" strokeWidth="12" />
            <path d="M220 -10 Q 225 60 215 110 T 225 190" stroke="currentColor" strokeLinecap="round" strokeWidth="8" />
            {/* River doodle line */}
            <path d="M0 20 Q 90 10 170 30 T 320 20" opacity="0.6" stroke="#74d5e1" strokeDasharray="8 4" strokeWidth="6" />
            {/* Little trees doodles */}
            <g fill="#e2f5f3" stroke="#00666f" strokeWidth="1.5">
              <circle cx="60" cy="95" r="9" />
              <line x1="60" x2="60" y1="104" y2="112" />
              <circle cx="260" cy="90" r="11" />
              <line x1="260" x2="260" y1="101" y2="114" />
            </g>
          </svg>

          {/* Sketchy Pin overlay badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3.5 py-1.5 sketch-pill flex items-center gap-2 -rotate-2 shadow-[2px_3px_0px_#1a1c1e]">
            <DoodleMapPin className="w-5 h-5 text-[#fd7454]" />
            <div className="flex flex-col">
              <span className="font-kalam text-xs sm:text-sm text-[#1a1c1e] font-extrabold leading-none">
                {clinicName}
              </span>
              <span className="font-patrick text-[11px] text-[#00666f] font-bold">
                {zona}
              </span>
            </div>
          </div>
        </div>

        {/* Address & Live Status */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h3 className="font-kalam text-lg sm:text-xl text-[#1a1c1e] font-bold">
                {clinicName}
              </h3>
              <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-0.5">
                {address}
              </p>
              <p className="font-patrick text-xs sm:text-sm text-[#6e797b] font-medium">
                (Estacionamiento gratuito reservado para pacientes detrás)
              </p>
            </div>

            {/* Live Status Badge */}
            <div className="sketch-pill bg-[#e0f5f6] text-[#00666f] px-3 py-1 flex items-center gap-1.5 self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00666f] animate-pulse"></span>
              <span className="font-patrick text-xs sm:text-sm font-bold">
                Abierto hoy hasta las 6 PM
              </span>
            </div>
          </div>

          {/* Hours Box */}
          <div className="bg-[#f5f3ee] p-3 sketch-pill flex items-center justify-between mt-1">
            <span className="font-patrick text-xs sm:text-sm text-[#1a1c1e] font-semibold">
              Lun – Vie: 8:00 am – 6:00 pm • Sábado: 9:00 am – 2:00 pm
            </span>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          <a
            href={`sms:${phone}`}
            className="sketch-pill min-h-[46px] bg-[#f5f3ee] p-2 flex flex-col items-center justify-center text-center hover:bg-[#edeef0] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#00666f]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-bold mt-0.5">
              Escribirnos
            </span>
          </a>

          <a
            href={`tel:${phone}`}
            className="sketch-pill min-h-[46px] bg-[#f5f3ee] p-2 flex flex-col items-center justify-center text-center hover:bg-[#edeef0] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#a9371d]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-bold mt-0.5">
              Llamar
            </span>
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${clinicName} ${zona}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-pill min-h-[46px] bg-[#f5f3ee] p-2 flex flex-col items-center justify-center text-center hover:bg-[#edeef0] transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#795500]" />
            <span className="font-patrick text-xs text-[#1a1c1e] font-bold mt-0.5">
              Cómo Llegar
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
