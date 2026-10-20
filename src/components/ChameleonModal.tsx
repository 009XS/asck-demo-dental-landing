import React, { useState } from 'react';
import { PROSPECT_CLINICS, ProspectClinic } from '../data/dentalData';
import { X, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';

interface ChameleonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClinic: (clinic: ProspectClinic) => void;
  currentSlug: string;
}

export const ChameleonModal: React.FC<ChameleonModalProps> = ({
  isOpen,
  onClose,
  onSelectClinic,
  currentSlug,
}) => {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyLink = (slug: string) => {
    const origin = window.location.origin;
    const url = `${origin}/?id=${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#fbfaf7] sketch-card p-5 sm:p-7 max-h-[85vh] overflow-y-auto no-scrollbar shadow-[6px_7px_0px_#1a1c1e]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#edeef0] transition-colors"
          title="Cerrar"
        >
          <X className="w-4 h-4 text-[#1a1c1e]" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-[#fabc3f]" />
          <span className="font-patrick text-xs sm:text-sm uppercase tracking-wider text-[#00666f] font-bold">
            MOTOR CHAMELEON ASCK • ATRIBUTOS DE VENTA RÁPIDA
          </span>
        </div>
        <h3 className="font-kalam text-2xl text-[#1a1c1e] font-bold">
          Selecciona una Clínica para Personalizar en Vivo
        </h3>
        <p className="font-patrick text-xs sm:text-sm text-[#3e494a] mb-4">
          Cambia al instante el nombre, WhatsApp, reseñas y zona para enviarle el link al doctor en llamada:
        </p>

        {/* Prospect List */}
        <div className="flex flex-col gap-2.5">
          {PROSPECT_CLINICS.map((clinic) => {
            const isCurrent = clinic.slug === currentSlug;
            const isCopied = copiedSlug === clinic.slug;

            return (
              <div
                key={clinic.slug}
                className={`p-3.5 sketch-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                  isCurrent
                    ? 'bg-[#e0f5f6] border-2 border-[#00666f] shadow-[2px_3px_0px_#00666f]'
                    : 'bg-white hover:bg-[#fbfaf7]'
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-kalam text-base font-bold text-[#1a1c1e]">
                      {clinic.nombre}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        clinic.tipoModo === 'MODO_FLAGSHIP'
                          ? 'bg-[#fabc3f] text-[#271900]'
                          : clinic.tipoModo === 'MODO_2'
                          ? 'bg-[#00666f] text-white'
                          : 'bg-[#a9371d] text-white'
                      }`}
                    >
                      {clinic.tipoModo}
                    </span>
                  </div>
                  <span className="font-patrick text-xs text-[#3e494a]">
                    ⭐ {clinic.rating} ({clinic.reviews} reseñas) • {clinic.zona}
                  </span>
                  <span className="font-hand text-xs text-[#00666f] font-bold">
                    WA: +{clinic.whatsapp} • {clinic.doctorPrincipal}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => copyLink(clinic.slug)}
                    className="sketch-pill px-3 py-1.5 bg-white text-xs font-patrick font-bold flex items-center gap-1 hover:bg-[#edeef0] cursor-pointer"
                    title="Copiar link con slug"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Link</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      onSelectClinic(clinic);
                      onClose();
                    }}
                    className={`sketch-pill px-3 py-1.5 text-xs font-patrick font-bold flex items-center gap-1 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#00666f] text-white'
                        : 'bg-[#fabc3f] text-[#271900] hover:bg-[#fabc3f]/80'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{isCurrent ? 'Activa' : 'Ver en Vivo'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
