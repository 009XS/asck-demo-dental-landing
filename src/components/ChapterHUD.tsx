import React, { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  number: string;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'inicio', number: '01', label: 'Inicio' },
  { id: 'confort', number: '02', label: 'Confort' },
  { id: 'servicios', number: '03', label: 'Servicios' },
  { id: 'transformacion', number: '04', label: 'Antes & Después' },
  { id: 'seguro', number: '05', label: 'Seguros' },
  { id: 'metodo', number: '06', label: 'El Método' },
  { id: 'equipo', number: '07', label: 'Equipo' },
  { id: 'testimonios', number: '08', label: 'Reseñas' },
  { id: 'estudio', number: '09', label: 'Estudio' },
  { id: 'faq', number: '10', label: 'Preguntas' },
];

export const ChapterHUD: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('inicio');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);

      const sectionElements = CHAPTERS.map((ch) => ({
        id: ch.id,
        el: document.getElementById(ch.id),
      })).filter((s) => s.el !== null);

      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveChapter(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  const currentCh = CHAPTERS.find((c) => c.id === activeChapter) || CHAPTERS[0];

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] transition-all duration-300">
      <div className="sketch-pill bg-[#fbfaf7]/95 backdrop-blur-md px-3 py-1 flex items-center gap-2 shadow-[2px_3px_0px_#1a1c1e] border-2 border-[#1a1c1e]">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {CHAPTERS.map((ch) => {
            const isActive = ch.id === activeChapter;
            return (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className={`text-xs px-2.5 py-0.5 rounded-full whitespace-nowrap transition-all font-bold cursor-pointer ${
                  isActive
                    ? 'bg-[#00666f] text-white shadow-[1px_1px_0px_#1a1c1e] scale-105'
                    : 'text-[#3e494a] hover:text-[#00666f] hover:bg-[#edeef0]'
                }`}
                title={ch.label}
              >
                <span className="opacity-70 mr-0.5">{ch.number}</span> {ch.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
