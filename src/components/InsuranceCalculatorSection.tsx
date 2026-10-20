import React, { useState } from 'react';
import { INSURANCE_PROVIDERS, InsuranceProvider } from '../data/dentalData';
import { DoodleVerifiedBadge, DoodleSparkle } from './DoodleIcons';
import { ArrowRight, Check } from 'lucide-react';

interface InsuranceProps {
  onApplyInsurance: (provider: InsuranceProvider) => void;
}

export const InsuranceCalculatorSection: React.FC<InsuranceProps> = ({ onApplyInsurance }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selected = INSURANCE_PROVIDERS[selectedIdx];

  return (
    <section id="seguro" className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
      <div className="bg-[#fffdf8] p-5 sm:p-7 sketch-card relative overflow-hidden shadow-[4px_5px_0px_#795500]">
        <div className="flex items-center gap-1.5 mb-1">
          <DoodleVerifiedBadge className="w-4 h-4 text-[#795500]" />
          <span className="font-patrick text-xs sm:text-sm uppercase tracking-wider text-[#795500] font-bold">
            TRANSPARENCIA 100% • CERO SORPRESAS
          </span>
        </div>

        <h3 className="font-kalam text-xl sm:text-3xl text-[#1a1c1e] font-bold">
          Calculadora de Seguro y Ahorro Instantáneo
        </h3>
        <p className="font-patrick text-sm sm:text-base text-[#3e494a] mt-1">
          Selecciona tu aseguradora o plan deslizando horizontalmente para ver tu costo estimado hoy:
        </p>

        {/* Horizontal Scrollable Providers */}
        <div className="flex gap-2.5 mt-4 overflow-x-auto no-scrollbar py-1">
          {INSURANCE_PROVIDERS.map((prov, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={prov.id}
                onClick={() => setSelectedIdx(idx)}
                className={`sketch-pill px-3.5 py-2 font-patrick text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#00666f] text-white shadow-[2px_2px_0px_#1a1c1e] scale-105'
                    : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-[#91f1fd]" />}
                <span>{prov.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-[#fabc3f] text-[#271900]' : 'bg-[#f0f9f9] text-[#00666f]'
                  }`}
                >
                  {prov.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Estimate Output Box */}
        <div className="mt-5 p-4 sm:p-5 bg-[#e0f5f6] sketch-card border-2 border-[#00666f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="font-patrick text-xs sm:text-sm text-[#00666f] font-bold">
              Con tu plan de {selected.name}:
            </span>
            <span className="font-kalam text-xl sm:text-2xl text-[#1a1c1e] font-extrabold mt-0.5">
              {selected.coverageDetail}
            </span>
            <span className="font-patrick text-xs sm:text-sm text-[#3e494a] mt-0.5">
              ✎ {selected.savingsNote}
            </span>
            <div className="flex items-center gap-1 text-[#a9371d] font-hand text-base sm:text-lg font-bold mt-1.5">
              <DoodleSparkle className="w-4 h-4 text-[#fabc3f]" />
              <span>+ Caja de bienvenida con cepillo eléctrico ($120 valor) GRATIS</span>
            </div>
          </div>

          <button
            onClick={() => onApplyInsurance(selected)}
            className="sketch-pill px-5 py-2.5 bg-[#fd7454] text-[#6b1200] font-patrick text-sm sm:text-base font-bold flex items-center justify-center gap-1.5 self-start sm:self-center cursor-pointer transition-all hover:bg-[#ff8a6f] active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#1a1c1e]"
          >
            <span>Aplicar Cobertura</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
