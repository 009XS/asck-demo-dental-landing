import React, { useState } from 'react';
import { VISIT_TIMELINE } from '../data/dentalData';
import { DoodleClock, DoodleWavyUnderline } from './DoodleIcons';
import { Coffee, Headphones, Scan, Monitor, Gift } from 'lucide-react';

export const VisitTimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (type: string) => {
    switch (type) {
      case 'tea':
        return <Coffee className="w-5 h-5 text-[#00666f]" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-[#a9371d]" />;
      case 'scan':
        return <Scan className="w-5 h-5 text-[#795500]" />;
      case 'screen':
        return <Monitor className="w-5 h-5 text-[#00666f]" />;
      case 'gift':
        return <Gift className="w-5 h-5 text-[#fd7454]" />;
      default:
        return <DoodleClock className="w-5 h-5" />;
    }
  };

  return (
    <section id="metodo" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#00666f] font-patrick text-xs sm:text-sm font-bold uppercase tracking-wide">
          <span>EL MÉTODO TRANQUILO ASCK</span>
          <DoodleClock className="w-4 h-4 text-[#00666f]" />
        </div>
        <h2 className="font-kalam text-2xl sm:text-3xl text-[#1a1c1e] mt-0.5 relative inline-block">
          Tu Primera Cita de 45 Minutos, Paso a Paso
          <DoodleWavyUnderline className="w-full h-2 text-[#fd7454]/40 mt-0.5" />
        </h2>
        <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-1">
          Exactamente lo que sucederá desde que entras hasta que sales sonriendo:
        </p>
      </div>

      {/* Horizontal step selector for mobile / desktop */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 mb-4">
        {VISIT_TIMELINE.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`sketch-pill px-3 py-1.5 font-patrick text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all ${
              activeStep === idx
                ? 'bg-[#00666f] text-white scale-105 shadow-[2px_2px_0px_#1a1c1e]'
                : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
            }`}
          >
            <span>{step.minute}</span> • <span>{step.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Timeline Card Display */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {VISIT_TIMELINE.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`bg-white p-3.5 sketch-card flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                isActive
                  ? 'border-2 border-[#00666f] shadow-[3.5px_4px_0px_#00666f] bg-[#f0f9f9]/50 scale-[1.02]'
                  : 'hover:bg-[#fbfaf7]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#f5f3ee] border border-[#1a1c1e] flex items-center justify-center">
                    {getIcon(step.iconType)}
                  </div>
                  <span className="font-kalam text-xs font-bold text-[#00666f] bg-[#e0f5f6] px-2 py-0.5 rounded-full">
                    {step.minute}
                  </span>
                </div>
                <h4 className="font-kalam text-sm font-bold text-[#1a1c1e] leading-snug">
                  {step.title}
                </h4>
                <p className="font-patrick text-xs text-[#3e494a] mt-1 leading-snug">
                  {step.description}
                </p>
              </div>
              <div className="mt-3 pt-1 border-t border-dashed border-[#1a1c1e]/15">
                <span className="font-hand text-xs text-[#a9371d] font-bold block">
                  ✎ {step.highlight}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
