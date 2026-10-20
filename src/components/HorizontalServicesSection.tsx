import React, { useRef, useState } from 'react';
import { DentalService, SERVICES } from '../data/dentalData';
import {
  DoodleTooth,
  DoodleSmileFace,
  DoodleSparkle,
  DoodleHeart,
  DoodleWavyUnderline,
} from './DoodleIcons';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: DentalService) => void;
}

export const HorizontalServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clamped = Math.max(0, Math.min(SERVICES.length - 1, index));
    setCurrentIndex(clamped);
    const cardWidth = 320; // approximate card width + gap
    scrollContainerRef.current.scrollTo({
      left: clamped * cardWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const cardWidth = 320;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(SERVICES.length - 1, newIdx)));
  };

  return (
    <section id="servicios" className="py-8 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#a9371d] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wide">
              <span>MENÚ DE CUIDADOS SUAVES</span>
              <svg className="w-5 h-2" fill="none" viewBox="0 0 20 8">
                <path d="M1 4C5 2 12 7 19 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="font-kalam text-2xl sm:text-3xl text-[#1a1c1e] mt-0.5 relative inline-block">
              Servicios Suaves a tu Medida
              <DoodleWavyUnderline className="w-full h-2 text-[#00666f]/40 mt-0.5" />
            </h2>
          </div>

          {/* Horizontal Scroll Controls */}
          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <span className="font-hand text-base text-[#3e494a] mr-2">
              ↔ Desliza las tarjetas ({currentIndex + 1} de {SERVICES.length})
            </span>
            <button
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full border-2 border-[#1a1c1e] transition-all cursor-pointer ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-white'
                  : 'bg-white hover:bg-[#edeef0] active:translate-y-0.5 shadow-[2px_2px_0px_#1a1c1e]'
              }`}
              title="Anterior servicio"
            >
              <ArrowLeft className="w-4 h-4 text-[#1a1c1e]" />
            </button>
            <button
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === SERVICES.length - 1}
              className={`p-2 rounded-full border-2 border-[#1a1c1e] transition-all cursor-pointer ${
                currentIndex === SERVICES.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-white'
                  : 'bg-[#00666f] text-white hover:bg-[#00818c] active:translate-y-0.5 shadow-[2px_2px_0px_#1a1c1e]'
              }`}
              title="Siguiente servicio"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pinned Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 py-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollPaddingLeft: '2rem' }}
      >
        {SERVICES.map((serv, index) => {
          const isSelected = currentIndex === index;

          let cardBorderClass = 'sketch-card';
          if (serv.accentColor === 'teal') cardBorderClass = 'sketch-card-teal';
          if (serv.accentColor === 'coral') cardBorderClass = 'sketch-card-coral';

          return (
            <div
              key={serv.id}
              onClick={() => onSelectService(serv)}
              className={`min-w-[285px] sm:min-w-[340px] max-w-[360px] bg-white p-5 sm:p-6 ${cardBorderClass} relative flex flex-col justify-between snap-start group transition-all duration-300 cursor-pointer ${
                isSelected ? 'scale-[1.02] shadow-[5px_6px_0px_#1a1c1e]' : 'hover:scale-[1.01]'
              }`}
            >
              {/* Corner doodle icon */}
              <div className="absolute top-4 right-4">
                {serv.accentColor === 'teal' && <DoodleTooth className="w-7 h-7 text-[#00666f]" />}
                {serv.accentColor === 'coral' && <DoodleSmileFace className="w-7 h-7 text-[#a9371d]" />}
                {serv.accentColor === 'gold' && <DoodleSparkle className="w-7 h-7 text-[#fabc3f]" />}
                {serv.accentColor === 'red' && <DoodleHeart className="w-7 h-7 text-[#ba1a1a]" />}
              </div>

              <div>
                {/* Header tags */}
                <div className="flex items-center gap-2 mb-2 pr-10">
                  <span
                    className={`font-patrick text-xs px-2.5 py-0.5 sketch-pill font-bold ${
                      serv.accentColor === 'teal'
                        ? 'bg-[#f0f9f9] text-[#00666f] border-[#00666f]/40'
                        : serv.accentColor === 'coral'
                        ? 'bg-[#fff4f1] text-[#a9371d] border-[#a9371d]/40'
                        : serv.accentColor === 'gold'
                        ? 'bg-[#fff9e6] text-[#795500] border-[#795500]/40'
                        : 'bg-[#ffdad6] text-[#ba1a1a] border-[#ba1a1a]/40'
                    }`}
                  >
                    {serv.category}
                  </span>
                  <span className="text-[#3e494a] font-patrick text-xs font-semibold">
                    {serv.duration}
                  </span>
                </div>

                <h3 className="font-kalam text-lg sm:text-xl text-[#1a1c1e] font-bold leading-snug">
                  {serv.title}
                </h3>

                <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-2 leading-relaxed">
                  {serv.description}
                </p>

                {/* Highlight banner */}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-patrick font-bold text-[#00666f] bg-[#f0f9f9] px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#00666f]" />
                  <span>{serv.highlight}</span>
                </div>
              </div>

              {/* Price and Action Footer */}
              <div className="mt-6 pt-3 flex items-center justify-between border-t border-dashed border-[#1a1c1e]/15">
                <div className="flex flex-col">
                  <span className="font-kalam text-xl sm:text-2xl text-[#00666f] font-extrabold relative inline-block">
                    {serv.price}
                    <svg className="absolute -bottom-1 left-0 w-full h-1 text-[#00666f]/40" fill="none" viewBox="0 0 30 4">
                      <path d="M1 2C10 3.5 20 0.5 29 2" stroke="currentColor" strokeWidth="1.5"></path>
                    </svg>
                  </span>
                  {serv.priceNote && (
                    <span className="font-patrick text-xs text-[#6e797b]">
                      {serv.priceNote}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(serv);
                  }}
                  className="sketch-pill px-4 py-2 bg-[#00666f] text-white font-patrick text-sm font-bold flex items-center gap-1 cursor-pointer transition-all hover:bg-[#00818c] active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>Agendar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Track Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all cursor-pointer ${
              currentIndex === idx
                ? 'w-7 h-2.5 bg-[#00666f] rounded-full shadow-[1px_1px_0px_#1a1c1e]'
                : 'w-2.5 h-2.5 bg-[#d9dadc] rounded-full hover:bg-[#00666f]/50'
            }`}
            title={`Ir al servicio ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
