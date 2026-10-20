import React, { useState, useRef, useCallback } from 'react';
import { SMILE_CASES, SmileCaseStudy } from '../data/dentalData';
import { DoodleSparkle, DoodleVerifiedBadge } from './DoodleIcons';
import { ArrowRight } from 'lucide-react';

interface TransformationProps {
  onOpenBooking: () => void;
}

export const SmileTransformationSection: React.FC<TransformationProps> = ({ onOpenBooking }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(52); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = SMILE_CASES[selectedCaseIdx];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(88, Math.max(12, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section id="transformacion" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="bg-white p-5 sm:p-7 sketch-card-teal relative overflow-hidden shadow-[4px_5px_0px_#00666f]">
        {/* Header Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <DoodleVerifiedBadge className="w-4 h-4 text-[#00666f]" />
            <span className="font-patrick text-xs sm:text-sm uppercase tracking-wider text-[#00666f] font-bold">
              RESULTADOS REALES INTERACTIVOS
            </span>
          </div>
          <span className="sketch-pill bg-[#fabc3f] text-[#271900] font-hand text-sm sm:text-base font-bold px-3 py-0.5 rotate-1 self-start sm:self-auto">
            ↔ Desliza el comparador central
          </span>
        </div>

        <h3 className="font-kalam text-xl sm:text-3xl text-[#1a1c1e] font-bold">
          Transformaciones Suaves Antes y Después
        </h3>
        <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-1">
          Casos reales tratados con odontología digital 3D y mínima invasión:
        </p>

        {/* Horizontal Case Study Selector */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar py-1">
          {SMILE_CASES.map((item, idx) => {
            const isSelected = idx === selectedCaseIdx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseIdx(idx)}
                className={`sketch-pill px-3 py-1.5 font-patrick text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#00666f] text-white shadow-[2px_2px_0px_#1a1c1e] scale-105'
                    : 'bg-[#f5f3ee] text-[#1a1c1e] hover:bg-[#edeef0]'
                }`}
              >
                {idx + 1}. {item.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Before & After Comparison Slider */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-56 sm:h-64 mt-6 rounded-xl border-2 border-[#1a1c1e] overflow-hidden select-none cursor-ew-resize bg-[#e9f8f9]"
        >
          {/* Background: AFTER (Full radiant arch) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-gradient-to-b from-[#e9f8f9] to-[#d8f3f5]">
            {/* Upper Harmonious Smile Arch Illustration */}
            <div className="flex flex-col items-center">
              {/* Soft Gum Contour */}
              <div className="w-64 sm:w-80 h-10 bg-[#fd7454]/25 rounded-t-full border-t-2 border-[#1a1c1e]/40 flex items-end justify-center pb-1">
                {/* 6 Harmonious Teeth */}
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`bg-white border-2 border-[#1a1c1e] rounded-b-md shadow-[1px_2px_0px_rgba(0,0,0,0.15)] ${
                        i === 2 || i === 3 ? 'w-9 sm:w-11 h-14' : 'w-7 sm:w-9 h-12'
                      }`}
                    >
                      <div className="w-full h-1 bg-[#00666f]/20 rounded-full mt-1"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <DoodleSparkle className="w-5 h-5 text-[#fabc3f]" />
                <span className="font-hand text-base sm:text-lg text-[#00666f] font-bold">
                  Arco Dental Armónico &amp; Blanco Natural
                </span>
                <DoodleSparkle className="w-4 h-4 text-[#fabc3f]" />
              </div>
            </div>
          </div>

          {/* Foreground: BEFORE (Clipped on the left) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-b from-[#fff9ea] to-[#fef08a]/60 border-r-3 border-[#1a1c1e]"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-full flex items-center justify-center p-4" style={{ minWidth: '320px' }}>
              <div className="flex flex-col items-center">
                {/* Before gum contour with imperfections */}
                <div className="w-64 sm:w-80 h-10 bg-[#a9371d]/20 rounded-t-full border-t-2 border-[#1a1c1e]/40 flex items-end justify-center pb-1">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      let jitterClass = '';
                      let toothColor = 'bg-[#faf5e8]';

                      if (activeCase.beforeTeethStyle === 'misaligned') {
                        if (i === 1) jitterClass = '-rotate-6 translate-y-1';
                        if (i === 2) jitterClass = 'rotate-6 -translate-y-1.5';
                        if (i === 3) jitterClass = '-rotate-3 translate-x-1';
                      } else if (activeCase.beforeTeethStyle === 'stained') {
                        toothColor = 'bg-[#f6e7c1]';
                      } else if (activeCase.beforeTeethStyle === 'chipped' && i === 2) {
                        jitterClass = 'border-dashed border-red-500';
                      }

                      return (
                        <div
                          key={i}
                          className={`${toothColor} border-2 border-[#1a1c1e] rounded-b-md ${
                            i === 2 || i === 3 ? 'w-9 sm:w-11 h-14' : 'w-7 sm:w-9 h-12'
                          } ${jitterClass}`}
                        >
                          {activeCase.beforeTeethStyle === 'chipped' && i === 2 && (
                            <div className="w-full h-2 bg-[#a9371d] mt-8 rounded-b-sm"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="font-hand text-base sm:text-lg text-[#a9371d] font-bold">
                    {activeCase.beforeNote}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Drag Handle Circle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-[#fd7454] border-2 border-[#1a1c1e] rounded-full shadow-[2px_3px_0px_#1a1c1e] flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
            style={{ left: `${sliderPosition}%` }}
          >
            <span className="text-[#1a1c1e] font-bold text-xs">↔</span>
          </div>

          {/* Top-left "ANTES" pill */}
          <div className="absolute top-2.5 left-2.5 z-10 sketch-pill bg-white/95 px-2.5 py-0.5">
            <span className="font-patrick text-xs text-[#a9371d] font-bold">ANTES</span>
          </div>

          {/* Top-right "DESPUÉS ★" pill */}
          <div className="absolute top-2.5 right-2.5 z-10 sketch-pill bg-[#00666f] text-white px-2.5 py-0.5">
            <span className="font-patrick text-xs font-bold">DESPUÉS ★</span>
          </div>

          {/* Bottom comparison label banner */}
          <div className="absolute bottom-0 inset-x-0 bg-[#1a1c1e]/85 backdrop-blur-sm px-3 py-1.5 flex justify-between items-center text-xs font-patrick z-10">
            <span className="text-white/90">{activeCase.beforeNote}</span>
            <span className="text-[#91f1fd] font-bold">{activeCase.afterNote}</span>
          </div>
        </div>

        {/* Case Metrics Row */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="sketch-pill bg-[#f0f9f9] text-[#00666f] font-patrick text-xs sm:text-sm font-bold px-3 py-1">
            ⏱ {activeCase.duration}
          </span>
          <span className="sketch-pill bg-[#fff4f1] text-[#a9371d] font-patrick text-xs sm:text-sm font-bold px-3 py-1">
            ✦ {activeCase.badge}
          </span>
          <span className="sketch-pill bg-[#fff9ea] text-[#795500] font-kalam text-xs sm:text-sm font-bold px-3 py-1">
            {activeCase.monthlyCost}
          </span>
        </div>

        {/* Patient Quote */}
        <div className="mt-3 p-3 bg-[#fffdf8] sketch-card border border-[#1a1c1e]">
          <p className="font-patrick text-sm sm:text-base text-[#3e494a] italic leading-relaxed">
            {activeCase.patientQuote}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenBooking}
          className="sketch-card w-full mt-4 min-h-[46px] bg-[#00666f] text-white font-patrick text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#00818c] active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>Quiero Previsualizar mi Sonrisa 3D Gratis</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
