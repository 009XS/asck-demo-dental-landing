import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { DentalService, SERVICES } from '../data/dentalData';
import {
  DoodleTooth,
  DoodleSmileFace,
  DoodleSparkle,
  DoodleHeart,
  DoodleWavyUnderline,
} from './DoodleIcons';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: DentalService) => void;
}

export const HorizontalServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth physical spring for the horizontal translation
  // Moves from 0% to -72% to reveal all 5 cards comfortably
  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', '-72%']);
  const smoothX = useSpring(rawX, { stiffness: 85, damping: 24, restDelta: 0.001 });
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Manual scroll helper
  const scrollToRelative = (direction: 'next' | 'prev') => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollAmount = window.innerHeight * 0.7;
    window.scrollBy({
      top: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="relative h-[320vh] sm:h-[360vh] bg-[#fbfaf7] text-[#1a1c1e]"
    >
      {/* Sticky Fullscreen Pinned Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 max-w-7xl mx-auto z-20">
        {/* Top Header of the Horizontal Showcase */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-dashed border-[#1a1c1e]/20 z-30">
          <div>
            <div className="inline-flex items-center gap-2 text-[#a9371d] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span className="font-kalam text-[#00666f] text-base">03</span>
              <span>MENÚ DE CUIDADOS SUAVES</span>
              <svg className="w-5 h-2" fill="none" viewBox="0 0 20 8">
                <path d="M1 4C5 2 12 7 19 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="font-kalam text-xl sm:text-3xl text-[#1a1c1e] leading-tight">
              Servicios Suaves a tu Medida
              <DoodleWavyUnderline className="w-full h-2 text-[#00666f]/40" />
            </h2>
          </div>

          {/* Scroll Guide & Progress Track */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-xs font-patrick text-[#3e494a] hidden sm:inline">
                Desplaza hacia abajo para avanzar la galería horizontal
              </span>
              <div className="w-36 sm:w-48 h-2 bg-[#1a1c1e]/10 rounded-full overflow-hidden mt-1 border border-[#1a1c1e]/30">
                <motion.div
                  style={{ width: progressPercent }}
                  className="h-full bg-gradient-to-r from-[#00666f] via-[#74d5e1] to-[#fabc3f]"
                />
              </div>
            </div>

            {/* Manual Jump Buttons */}
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={() => scrollToRelative('prev')}
                className="w-8 h-8 rounded-full bg-white border-2 border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#edeef0] transition-colors shadow-[1px_1px_0px_#1a1c1e]"
                title="Desplazar hacia atrás"
              >
                <ArrowLeft className="w-4 h-4 text-[#1a1c1e]" />
              </button>
              <button
                onClick={() => scrollToRelative('next')}
                className="w-8 h-8 rounded-full bg-[#00666f] text-white border-2 border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#00818c] transition-colors shadow-[1px_1px_0px_#1a1c1e]"
                title="Desplazar hacia adelante"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Moving Horizontal Track */}
        <div className="flex-1 flex items-center overflow-hidden my-auto w-full py-4">
          <motion.div
            style={{ x: smoothX }}
            className="flex gap-6 sm:gap-10 items-stretch will-change-transform pl-2 sm:pl-4"
          >
            {SERVICES.map((serv, index) => {
              let cardBorderClass = 'sketch-card';
              if (serv.accentColor === 'teal') cardBorderClass = 'sketch-card-teal';
              if (serv.accentColor === 'coral') cardBorderClass = 'sketch-card-coral';

              return (
                <div
                  key={serv.id}
                  onClick={() => onSelectService(serv)}
                  className={`w-[82vw] sm:w-[48vw] md:w-[38vw] lg:w-[32vw] max-w-[420px] shrink-0 bg-white p-5 sm:p-7 ${cardBorderClass} relative flex flex-col justify-between group transition-all duration-300 cursor-pointer shadow-[4.5px_5.5px_0px_#1a1c1e] hover:shadow-[6px_7px_0px_#1a1c1e] hover:-translate-y-1`}
                >
                  {/* Top tape sticker accent */}
                  <div className="absolute -top-3 left-6 sketch-tape px-2.5 py-0.5 border border-[#1a1c1e]/20 -rotate-2 z-10">
                    <span className="font-hand text-xs font-bold text-[#271900]">
                      {index + 1} de {SERVICES.length} ✎
                    </span>
                  </div>

                  {/* Corner doodle icon */}
                  <div className="absolute top-4 right-4">
                    {serv.accentColor === 'teal' && <DoodleTooth className="w-8 h-8 text-[#00666f]" />}
                    {serv.accentColor === 'coral' && <DoodleSmileFace className="w-8 h-8 text-[#a9371d]" />}
                    {serv.accentColor === 'gold' && <DoodleSparkle className="w-8 h-8 text-[#fabc3f]" />}
                    {serv.accentColor === 'red' && <DoodleHeart className="w-8 h-8 text-[#ba1a1a]" />}
                  </div>

                  <div>
                    {/* Header tags */}
                    <div className="flex items-center gap-2 mb-2 pr-10 pt-1">
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

                    <h3 className="font-kalam text-xl sm:text-2xl text-[#1a1c1e] font-bold leading-snug">
                      {serv.title}
                    </h3>

                    <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-2.5 leading-relaxed">
                      {serv.description}
                    </p>

                    {/* Highlight banner */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-patrick font-bold text-[#00666f] bg-[#f0f9f9] px-3 py-1.5 rounded-lg border border-[#00666f]/20">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#00666f]" />
                      <span>{serv.highlight}</span>
                    </div>
                  </div>

                  {/* Price and Action Footer */}
                  <div className="mt-6 pt-3 flex items-center justify-between border-t border-dashed border-[#1a1c1e]/15">
                    <div className="flex flex-col">
                      <span className="font-kalam text-2xl sm:text-3xl text-[#00666f] font-extrabold relative inline-block">
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
                      className="sketch-pill px-4 py-2 bg-[#00666f] text-white font-patrick text-sm sm:text-base font-bold flex items-center gap-1.5 cursor-pointer transition-all hover:bg-[#00818c] active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#1a1c1e]"
                    >
                      <span>Agendar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Navigation Guide */}
        <div className="w-full flex items-center justify-between pt-3 border-t-2 border-dashed border-[#1a1c1e]/20 text-xs font-patrick text-[#3e494a] z-30">
          <span className="flex items-center gap-1.5 text-[#00666f] font-bold">
            <Sparkles className="w-4 h-4 text-[#fabc3f]" />
            SmileCraft · Cuidados Odontológicos Sin Dolor
          </span>
          <span className="hidden sm:inline">
            Continúa desplazando para entrar a la transformación de sonrisas ↓
          </span>
        </div>
      </div>
    </section>
  );
};
