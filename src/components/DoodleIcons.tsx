import React from 'react';

export const DoodleTooth: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 2C9 2 7 4 7 7C7 9.5 8 11.5 8 14C8 17 6 18 6 22H10C10.5 19 11 16 12 16C13 16 13.5 19 14 22H18C18 18 16 17 16 14C16 11.5 17 9.5 17 7C17 4 15 2 12 2Z" fill="#91f1fd" fillOpacity="0.3" />
    <path d="M9 7 C 10 5, 14 5, 15 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const DoodleHeart: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#fd7454" fillOpacity="0.3" />
  </svg>
);

export const DoodleSmileFace: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="currentColor" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <circle cx="9" cy="9" fill="currentColor" r="1" />
    <circle cx="15" cy="9" fill="currentColor" r="1" />
  </svg>
);

export const DoodleHeadphones: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="#74d5e1" fillOpacity="0.3" />
  </svg>
);

export const DoodleClock: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

export const DoodleSparkle: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-[#fabc3f]' }) => (
  <svg className={className} fill="none" stroke="#1a1c1e" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 2L14 8L20 9L15 14L17 20L12 16L7 20L9 14L4 9L10 8L12 2Z" fill="currentColor" />
  </svg>
);

export const DoodleStarburst: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="#1a1c1e" strokeWidth="1.8" viewBox="0 0 42 42">
    <path d="M21 2C21.8 11.5 29.5 19.2 39 20C29.5 20.8 21.8 29.5 21 39C20.2 29.5 12.5 20.8 3 20C12.5 19.2 20.2 11.5 21 2Z" fill="#fabc3f" fillOpacity="0.5" />
    <path d="M14 14L28 28M28 14L14 28" stroke="#795500" strokeDasharray="2 2" strokeWidth="1" />
  </svg>
);

export const DoodleVerifiedBadge: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 2l3 2 3-1 1 3 3 2-1 3 2 3-2 3 1 3-3 2-1 3-3-1-3 2-3-2-3 1-1-3-3-2 1-3-2-3 2-3-1-3 3-2 1-3 3 1z" fill="#74d5e1" fillOpacity="0.35" />
    <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
  </svg>
);

export const DoodlePencil: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 21l3.5-0.5L20 7l-3-3L3.5 17.5L3 21z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 6.5l3 3" strokeLinecap="round" />
  </svg>
);

export const DoodleCalendar: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
    <rect height="18" rx="2" stroke="currentColor" width="18" x="3" y="4" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <circle cx="12" cy="15" fill="currentColor" r="1.5" />
  </svg>
);

export const DoodlePhone: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const DoodleMapPin: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="#fd7454" stroke="#1a1c1e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" fill="#ffffff" r="2.5" />
  </svg>
);

export const DoodleWavyUnderline: React.FC<{ className?: string }> = ({ className = 'w-full h-3' }) => (
  <svg className={className} fill="none" preserveAspectRatio="none" viewBox="0 0 160 12">
    <path d="M2 7C38 3 75 11 115 5C135 2 150 9 158 6" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5" />
  </svg>
);

export const DoodleDivider: React.FC<{ color?: string }> = ({ color = 'rgba(0, 102, 111, 0.25)' }) => (
  <div className="px-4 my-6 flex items-center justify-center select-none">
    <svg className="w-full max-w-[340px] h-3" fill="none" viewBox="0 0 300 12">
      <path d="M2 6 C 50 1, 100 11, 150 6 C 200 1, 250 11, 298 6" stroke={color} strokeDasharray="6 4" strokeLinecap="round" strokeWidth="2" />
    </svg>
  </div>
);

export const DoodleFaceSuperAnxious: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 36 36">
    <circle cx="18" cy="18" fill="#fff4f1" r="15" strokeDasharray="100 2" strokeLinecap="round" strokeWidth="2" />
    <circle cx="12.5" cy="14" fill="#ffffff" r="3.5" strokeWidth="1.8" />
    <circle cx="12.5" cy="14" fill="#1a1c1e" r="1.5" />
    <circle cx="23.5" cy="14" fill="#ffffff" r="3.5" strokeWidth="1.8" />
    <circle cx="23.5" cy="14" fill="#1a1c1e" r="1.5" />
    <path d="M9 10 Q 13 8 16 11" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M27 10 Q 23 8 20 11" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M11 25 Q 14 21, 18 25 T 25 24" strokeLinecap="round" strokeWidth="2.2" />
    <path d="M29 11 C 32 14, 32 17, 30 18 C 28 19, 27 17, 28 14 Z" fill="#74d5e1" strokeWidth="1.2" />
  </svg>
);

export const DoodleFaceNervous: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 36 36">
    <circle cx="18" cy="18" fill="#fff9ea" r="15" strokeLinecap="round" strokeWidth="2" />
    <ellipse cx="12" cy="14.5" fill="#1a1c1e" rx="1.8" ry="2.2" />
    <ellipse cx="24" cy="14.5" fill="#1a1c1e" rx="1.8" ry="2.2" />
    <path d="M10 11 L 15 12" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M26 11 L 21 12" strokeLinecap="round" strokeWidth="1.8" />
    <rect fill="#ffffff" height="6" rx="3" strokeWidth="1.8" width="14" x="11" y="21" />
    <path d="M14 21 v 6 M 18 21 v 6 M 22 21 v 6" strokeWidth="1.4" />
  </svg>
);

export const DoodleFaceZen: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 36 36">
    <circle cx="18" cy="18" fill="#f0f9f9" r="15" strokeLinecap="round" strokeWidth="2" />
    <path d="M10 14 Q 13 10 16 14" strokeLinecap="round" strokeWidth="2.2" />
    <path d="M20 14 Q 23 10 26 14" strokeLinecap="round" strokeWidth="2.2" />
    <circle cx="9.5" cy="18.5" fill="#fd7454" fillOpacity="0.4" r="2.5" stroke="none" />
    <circle cx="26.5" cy="18.5" fill="#fd7454" fillOpacity="0.4" r="2.5" stroke="none" />
    <path d="M11 20 Q 18 29 25 20" strokeLinecap="round" strokeWidth="2.2" />
  </svg>
);
