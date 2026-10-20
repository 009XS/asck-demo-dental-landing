import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/dentalData';
import { DoodleSparkle, DoodleVerifiedBadge } from './DoodleIcons';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonios" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="bg-[#fffdf8] sketch-card-coral p-5 sm:p-7 relative max-w-2xl mx-auto">
        {/* Top sticky label */}
        <div className="absolute -top-3.5 left-6 sketch-tape px-3 py-0.5 border border-[#1a1c1e]/20 -rotate-2 z-10">
          <span className="font-hand text-sm font-bold text-[#271900]">
            nota real de paciente ✎
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          {/* Hand-drawn 5 stars */}
          <div className="flex items-center gap-1">
            {[...Array(active.stars)].map((_, i) => (
              <DoodleSparkle key={i} className="w-5 h-5 text-[#fd7454]" />
            ))}
          </div>
          <span className="sketch-pill bg-white font-patrick text-xs text-[#3e494a] px-2.5 py-0.5 font-bold flex items-center gap-1">
            <DoodleVerifiedBadge className="w-3.5 h-3.5 text-[#00666f]" />
            <span>{active.badge}</span>
          </span>
        </div>

        <div className="mt-3 relative">
          <span className="font-hand text-5xl text-[#fd7454]/25 absolute -top-5 -left-1 select-none leading-none">
            “
          </span>
          <p className="font-kalam text-lg sm:text-xl text-[#1a1c1e] font-medium leading-relaxed pl-4">
            {active.quote}
          </p>
        </div>

        <div className="flex items-center justify-between mt-5 pt-3 border-t border-dashed border-[#1a1c1e]/15">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#fd7454] text-white border-2 border-[#1a1c1e] flex items-center justify-center font-bold font-kalam text-sm shadow-[1px_1px_0px_#1a1c1e]">
              {active.initials}
            </div>
            <div>
              <span className="font-kalam text-sm sm:text-base text-[#1a1c1e] font-bold block leading-none">
                {active.name}
              </span>
              <span className="font-patrick text-xs text-[#3e494a]">
                {active.service}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-hand text-sm text-[#3e494a] font-bold hidden sm:inline">
              {active.timeAgo}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                className="w-7 h-7 rounded-full bg-white border border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#edeef0] transition-colors"
                title="Testimonio anterior"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveIdx((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                className="w-7 h-7 rounded-full bg-[#00666f] text-white border border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#00818c] transition-colors"
                title="Siguiente testimonio"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
