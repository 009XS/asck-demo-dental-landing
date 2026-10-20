import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { VISIT_TIMELINE } from '../data/dentalData';
import { DoodleClock, DoodleWavyUnderline } from './DoodleIcons';
import { Coffee, Headphones, Scan, Monitor, Gift, Clock, Sparkles } from 'lucide-react';

export const VisitTimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Physical spring for the timeline translation across all 5 steps
  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);
  const smoothX = useSpring(rawX, { stiffness: 85, damping: 24, restDelta: 0.001 });
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getIcon = (type: string) => {
    switch (type) {
      case 'tea':
        return <Coffee className="w-6 h-6 text-[#00666f]" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 text-[#a9371d]" />;
      case 'scan':
        return <Scan className="w-6 h-6 text-[#795500]" />;
      case 'screen':
        return <Monitor className="w-6 h-6 text-[#00666f]" />;
      case 'gift':
        return <Gift className="w-6 h-6 text-[#fd7454]" />;
      default:
        return <DoodleClock className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="metodo"
      ref={containerRef}
      className="relative h-[300vh] sm:h-[340vh] bg-[#fbfaf7] text-[#1a1c1e]"
    >
      {/* Sticky Fullscreen Pinned Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-8 max-w-7xl mx-auto z-20">
        {/* Top Header of the Timeline Walkthrough */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-dashed border-[#1a1c1e]/20 z-30">
          <div>
            <div className="inline-flex items-center gap-2 text-[#00666f] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span className="font-kalam text-[#a9371d] text-base">06</span>
              <span>EL MÉTODO TRANQUILO ASCK</span>
              <DoodleClock className="w-4 h-4 text-[#00666f]" />
            </div>
            <h2 className="font-kalam text-xl sm:text-3xl text-[#1a1c1e] leading-tight">
              Tu Cita Minuto a Minuto (45 Minutos Reales)
              <DoodleWavyUnderline className="w-full h-2 text-[#fd7454]/40" />
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 text-xs font-patrick text-[#3e494a]">
                <Clock className="w-3.5 h-3.5 text-[#00666f]" />
                <span>Desplaza para recorrer la cita en orden cronológico</span>
              </div>
              <div className="w-36 sm:w-48 h-2 bg-[#1a1c1e]/10 rounded-full overflow-hidden mt-1 border border-[#1a1c1e]/30">
                <motion.div
                  style={{ width: progressPercent }}
                  className="h-full bg-gradient-to-r from-[#fd7454] via-[#fabc3f] to-[#00666f]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Central Moving Timeline Track */}
        <div className="flex-1 flex items-center overflow-hidden my-auto w-full py-4">
          <motion.div
            style={{ x: smoothX }}
            className="flex gap-6 sm:gap-10 items-stretch will-change-transform pl-2 sm:pl-4"
          >
            {VISIT_TIMELINE.map((step, idx) => (
              <div
                key={idx}
                className="w-[82vw] sm:w-[48vw] md:w-[38vw] lg:w-[32vw] max-w-[420px] shrink-0 bg-white p-5 sm:p-7 sketch-card relative flex flex-col justify-between group transition-all duration-300 shadow-[4.5px_5.5px_0px_#1a1c1e] hover:shadow-[6px_7px_0px_#1a1c1e] hover:-translate-y-1"
              >
                {/* Washi tape header */}
                <div className="absolute -top-3.5 left-6 sketch-tape px-3 py-0.5 border border-[#1a1c1e]/20 -rotate-1 z-10">
                  <span className="font-hand text-xs font-bold text-[#271900]">
                    Paso {idx + 1} de {VISIT_TIMELINE.length} ✎
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3 pt-2">
                    <div className="w-12 h-12 rounded-full bg-[#f0f9f9] border-2 border-[#1a1c1e] flex items-center justify-center shadow-[1px_1px_0px_#1a1c1e]">
                      {getIcon(step.iconType)}
                    </div>
                    <span className="font-kalam text-sm sm:text-base font-bold text-[#00666f] bg-[#e0f5f6] border border-[#00666f]/30 px-3 py-1 rounded-full">
                      {step.minute}
                    </span>
                  </div>

                  <h3 className="font-kalam text-xl sm:text-2xl text-[#1a1c1e] font-bold leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-dashed border-[#1a1c1e]/20 flex items-center justify-between">
                  <span className="font-hand text-sm sm:text-base text-[#a9371d] font-bold">
                    ✎ {step.highlight}
                  </span>
                  <span className="text-xs font-kalam text-[#00666f] font-bold">
                    Paso 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Guide */}
        <div className="w-full flex items-center justify-between pt-3 border-t-2 border-dashed border-[#1a1c1e]/20 text-xs font-patrick text-[#3e494a] z-30">
          <span className="flex items-center gap-1.5 text-[#00666f] font-bold">
            <Sparkles className="w-4 h-4 text-[#fd7454]" />
            Garantía Cero Juicios • Avanzamos a tu propio ritmo
          </span>
          <span className="hidden sm:inline">
            Continúa desplazando para conocer a la Dra. Maya y al equipo ↓
          </span>
        </div>
      </div>
    </section>
  );
};
