import React, { useState } from 'react';
import { FAQS } from '../data/dentalData';

export const FaqSection: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-patrick text-xs sm:text-sm uppercase tracking-wider text-[#00666f] font-bold">
          RESPUESTAS CLARAS SIN MIEDO
        </span>
        <span className="font-hand text-base text-[#a9371d] font-bold">
          ✎ toca cualquier pregunta
        </span>
      </div>

      <h2 className="font-kalam text-2xl sm:text-3xl text-[#1a1c1e] mb-4">
        Preguntas Frecuentes de Pacientes Nerviosos
      </h2>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              onClick={() => toggleFaq(idx)}
              className={`p-4 sm:p-5 sketch-card transition-all cursor-pointer ${
                isExpanded
                  ? 'bg-[#fff9ea] border-2 border-[#00666f] shadow-[3.5px_4px_0px_#00666f]'
                  : 'bg-white hover:bg-[#fbfaf7]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-kalam text-base sm:text-lg text-[#1a1c1e] font-bold leading-snug">
                  {faq.question}
                </h4>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-transform ${
                    isExpanded
                      ? 'bg-[#00666f] text-white rotate-180'
                      : 'bg-[#edeef0] text-[#1a1c1e]'
                  }`}
                >
                  {isExpanded ? '−' : '+'}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-dashed border-[#1a1c1e]/20 transition-all duration-300">
                  <p className="font-patrick text-sm sm:text-base text-[#3e494a] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
