import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ComfortScaleSection } from './components/ComfortScaleSection';
import { HorizontalServicesSection } from './components/HorizontalServicesSection';
import { SmileTransformationSection } from './components/SmileTransformationSection';
import { InsuranceCalculatorSection } from './components/InsuranceCalculatorSection';
import { VisitTimelineSection } from './components/VisitTimelineSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StudioLocationSection } from './components/StudioLocationSection';
import { FaqSection } from './components/FaqSection';
import { BookingSheetModal } from './components/BookingSheetModal';
import { ChameleonModal } from './components/ChameleonModal';
import {
  DentalService,
  InsuranceProvider,
  PROSPECT_CLINICS,
  ProspectClinic,
} from './data/dentalData';
import {
  DoodleTooth,
  DoodleSparkle,
  DoodlePencil,
  DoodleDivider,
  DoodleCalendar,
} from './components/DoodleIcons';
import { Home, Stethoscope, Users, MapPin } from 'lucide-react';

export const App: React.FC = () => {
  const [activeClinic, setActiveClinic] = useState<ProspectClinic>(PROSPECT_CLINICS[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isChameleonOpen, setIsChameleonOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceProvider | null>(null);
  const [clickCount, setClickCount] = useState(0);

  // Read URL query parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || params.get('p');
    if (id) {
      const match = PROSPECT_CLINICS.find((c) => c.slug.toLowerCase() === id.toLowerCase());
      if (match) {
        setActiveClinic(match);
      }
    } else {
      const clinica = params.get('clinica');
      const wa = params.get('wa');
      const zona = params.get('zona');
      const doc = params.get('doctor');
      if (clinica) {
        setActiveClinic({
          slug: 'custom',
          nombre: clinica,
          whatsapp: wa || '525540001234',
          rating: 4.9,
          reviews: 58,
          zona: zona || 'Zona Poniente',
          doctorPrincipal: doc || 'Especialista Dental',
          tagline: 'Cuidado dental con calidez y transparencia',
          tipoModo: 'PERSONALIZADO',
        });
      }
    }

    // Keyboard shortcut Alt + K for Chameleon modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsChameleonOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    document.title = `${activeClinic.nombre} — Odontología Boutique Sin Ansiedad (Inmersion Flow)`;
  }, [activeClinic]);

  const handleSparkleClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setIsChameleonOpen(true);
        return 0;
      }
      return next;
    });
  };

  const handleOpenBooking = (service?: DentalService) => {
    if (service) setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleApplyInsurance = (insurance: InsuranceProvider) => {
    setSelectedInsurance(insurance);
    setIsBookingOpen(true);
  };

  return (
    <div className="sketchbook-bg min-h-screen text-[#1a1c1e] flex flex-col relative selection:bg-[#74d5e1]/40 selection:text-[#001f23]">
      {/* Fixed Sticky Header */}
      <header className="fixed top-0 w-full z-40 bg-[#fbfaf7]/90 backdrop-blur-md border-b-2 border-dashed border-[#1a1c1e]/20 transition-all">
        <div className="max-w-5xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Clinic Name */}
          <div className="flex items-center gap-2.5">
            <div
              onClick={handleSparkleClick}
              className="relative cursor-pointer group"
              title="Tip: Toca 3 veces para abrir selector de clínicas (o presiona Alt + K)"
            >
              <div className="w-9 h-9 rounded-full bg-[#f0f9f9] border-2 border-[#1a1c1e] flex items-center justify-center shadow-[1px_1px_0px_#1a1c1e] group-hover:rotate-12 transition-transform">
                <DoodleTooth className="w-6 h-6 text-[#00666f]" />
              </div>
              <div className="absolute -top-1 -right-1">
                <DoodleSparkle className="w-3.5 h-3.5 text-[#fabc3f]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-kalam text-lg sm:text-xl text-[#00666f] font-extrabold tracking-tight leading-none relative">
                {activeClinic.nombre}
                <svg className="absolute -bottom-1 left-0 w-full h-1 text-[#00666f]/40" fill="none" viewBox="0 0 60 4">
                  <path d="M1 2C15 3.5 45 0.5 59 2.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                </svg>
              </span>
              <span className="font-hand text-xs sm:text-sm text-[#3e494a] leading-none -rotate-1 mt-0.5">
                {activeClinic.tagline}
              </span>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleOpenBooking()}
              className="sketch-pill min-h-[40px] px-3.5 sm:px-5 py-1.5 flex items-center justify-center gap-1.5 bg-[#fd7454] text-[#6b1200] font-patrick text-xs sm:text-sm font-bold cursor-pointer transition-all hover:bg-[#ff8a6f] active:translate-x-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_#1a1c1e]"
            >
              <DoodlePencil className="w-3.5 h-3.5" />
              <span>Reservar</span>
            </button>

            {/* Profile Avatar / Doctor Indicator */}
            <div
              onClick={() => setIsChameleonOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-dashed border-[#1a1c1e] p-0.5 relative rotate-3 cursor-pointer hover:scale-105 transition-transform"
              title="Cambiar clínica (Alt + K)"
            >
              <img
                alt="Doctor Profile"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXnhXBDULXcwEA0Ar5nv5VXmD6cJ1AJV0g6zMFznKlP8OYu27JNxPL3SwWmbzqecJfsaag5nymm5SCfJ_jx94m95P5gQoD92VM3zf6Hu08H43n1ng5-mvZ5VlOV8H2JPO-4d24AMQMgAJvk45Ub93HDtVzvknsm8xr3C9RKM5m_rBwidT1jgCALA2M38iGDbmD83Iyt9xrr1lzd1BWPnPRpj7XcQtPWM71TOrSuqfUdUHIhWBYwHrXkw"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pb-28">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          clinicName={activeClinic.nombre}
          doctorName={activeClinic.doctorPrincipal}
          tagline={activeClinic.tagline}
          phone={activeClinic.whatsapp}
        />

        <DoodleDivider color="#00666f33" />

        {/* Anxiety Comfort Quiz */}
        <ComfortScaleSection />

        <DoodleDivider color="#fd745433" />

        {/* Horizontal Scroll Services Carousel */}
        <HorizontalServicesSection onSelectService={(s) => handleOpenBooking(s)} />

        <DoodleDivider color="#00666f33" />

        {/* Interactive Before & After Smile Slider */}
        <SmileTransformationSection onOpenBooking={() => handleOpenBooking()} />

        <DoodleDivider color="#fabc3f44" />

        {/* Insurance & Savings Calculator */}
        <InsuranceCalculatorSection onApplyInsurance={handleApplyInsurance} />

        <DoodleDivider color="#00666f33" />

        {/* The 45-Min Gentle Visit Sequence Timeline */}
        <VisitTimelineSection />

        <DoodleDivider color="#fd745433" />

        {/* Meet the Team Polaroid */}
        <TeamSection />

        <DoodleDivider color="#00666f33" />

        {/* Verified Patient Notes / Testimonials */}
        <TestimonialsSection />

        {/* Downtown Studio Location & Illustrated Map */}
        <StudioLocationSection
          clinicName={activeClinic.nombre}
          phone={activeClinic.whatsapp}
          address="742 Evergreen Terrace, Suite 102"
          zona={activeClinic.zona}
        />

        <DoodleDivider color="#fabc3f44" />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Warm Booking Sticky Callout */}
        <section className="px-4 sm:px-6 py-6 max-w-4xl mx-auto w-full">
          <div className="bg-[#00666f] text-white sketch-card p-6 sm:p-8 relative overflow-hidden flex flex-col items-center text-center shadow-[4px_5px_0px_#1a1c1e]">
            {/* Top washi tape */}
            <div className="absolute -top-3 right-8 w-20 h-6 sketch-tape rotate-6 border border-[#1a1c1e]/20"></div>

            <h3 className="font-kalam text-2xl sm:text-3xl font-bold">
              ¿Listo para sonreír sin preocupaciones?
            </h3>
            <p className="font-patrick text-sm sm:text-base text-[#f6feff]/90 mt-2 max-w-md">
              Elige el horario que mejor te convenga con la {activeClinic.doctorPrincipal}. Cancela o
              reprograma en cualquier momento sin complicaciones.
            </p>

            <button
              onClick={() => handleOpenBooking()}
              className="sketch-card w-full sm:w-auto px-8 min-h-[50px] mt-6 bg-[#fd7454] text-[#6b1200] font-kalam text-lg font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#ff8a6f] active:translate-x-0.5 active:translate-y-0.5"
            >
              <DoodleCalendar className="w-5 h-5 text-[#6b1200]" />
              <span>Reclamar Próximo Turno Disponible</span>
            </button>

            <span className="font-hand text-base text-[#f6feff]/90 mt-3">
              Confirmación instantánea • Cero tarjeta requerida ✎
            </span>
          </div>
        </section>
      </main>

      {/* Bottom Sticky Mobile Navigation Bar */}
      <nav className="fixed bottom-0 w-full z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-t-2 border-[#1a1c1e] shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <div className="max-w-lg mx-auto h-18 px-3 flex justify-around items-center">
          <a
            href="#inicio"
            className="flex flex-col items-center justify-center text-[#00666f] font-bold py-1"
          >
            <Home className="w-5 h-5" />
            <span className="font-patrick text-xs mt-0.5">Inicio</span>
          </a>

          <a
            href="#servicios"
            className="flex flex-col items-center justify-center text-[#3e494a] hover:text-[#00666f] py-1"
          >
            <Stethoscope className="w-5 h-5" />
            <span className="font-patrick text-xs mt-0.5">Servicios</span>
          </a>

          <a
            href="#equipo"
            className="flex flex-col items-center justify-center text-[#3e494a] hover:text-[#00666f] py-1"
          >
            <Users className="w-5 h-5" />
            <span className="font-patrick text-xs mt-0.5">Equipo</span>
          </a>

          <a
            href="#estudio"
            className="flex flex-col items-center justify-center text-[#3e494a] hover:text-[#00666f] py-1"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-patrick text-xs mt-0.5">Visítanos</span>
          </a>
        </div>
      </nav>

      {/* Interactive Booking Sheet / Modal */}
      <BookingSheetModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedService={selectedService}
        selectedInsurance={selectedInsurance}
        clinicName={activeClinic.nombre}
        clinicWhatsapp={activeClinic.whatsapp}
      />

      {/* Chameleon Prospect Selector Modal */}
      <ChameleonModal
        isOpen={isChameleonOpen}
        onClose={() => setIsChameleonOpen(false)}
        onSelectClinic={(c) => setActiveClinic(c)}
        currentSlug={activeClinic.slug}
      />
    </div>
  );
};

export default App;
