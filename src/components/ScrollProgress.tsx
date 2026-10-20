import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Background track */}
      <div className="w-full h-2 bg-[#1a1c1e]/10 backdrop-blur-sm relative">
        {/* Hand-drawn highlighter fill */}
        <div
          className="h-full bg-gradient-to-r from-[#00666f] via-[#74d5e1] to-[#fabc3f] transition-all duration-75 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Moving pencil icon tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#fbfaf7] border border-[#1a1c1e] rounded-full p-0.5 shadow-[1px_1px_0px_#1a1c1e] text-[10px] font-bold text-[#00666f] flex items-center justify-center w-5 h-5 -rotate-12">
            ✎
          </div>
        </div>
      </div>
    </div>
  );
};
