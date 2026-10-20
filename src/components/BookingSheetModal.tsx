import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  DentalService,
  SERVICES,
  COMFORT_AMENITIES,
  TEAM_MEMBERS,
  InsuranceProvider,
} from '../data/dentalData';
import {
  DoodleTooth,
  DoodleHeart,
  DoodleCalendar,
  DoodleSparkle,
  DoodleVerifiedBadge,
} from './DoodleIcons';
import { X, Check, Gift, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: DentalService | null;
  selectedInsurance: InsuranceProvider | null;
  clinicName: string;
  clinicWhatsapp: string;
}

const TIME_SLOTS = [
  'Hoy • 11:30 am',
  'Hoy • 4:00 pm',
  'Mañana • 10:00 am',
  'Mañana • 2:30 pm',
  'Mañana • 5:15 pm',
  'Sábado • 11:00 am',
];

export const BookingSheetModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  selectedInsurance,
  clinicName,
  clinicWhatsapp,
}) => {
  const [currentServiceId, setCurrentServiceId] = useState<string>(
    selectedService?.id || SERVICES[0].id
  );
  const [selectedDoctor, setSelectedDoctor] = useState(TEAM_MEMBERS[0].name);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    'netflix',
    'headphones',
    'blanket',
  ]);
  const [includeGiftBox, setIncludeGiftBox] = useState(true);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');

  if (!isOpen) return null;

  const currentService =
    SERVICES.find((s) => s.id === currentServiceId) || selectedService || SERVICES[0];

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00666f', '#74d5e1', '#fd7454', '#fabc3f'],
    });

    const amenityNames = selectedAmenities
      .map((id) => COMFORT_AMENITIES.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `¡Hola ${clinicName}! Me gustaría agendar mi Cita Tranquila sin dolor:\n\n` +
        `🦷 Tratamiento: ${currentService.title}\n` +
        `👩‍⚕️ Doctor: ${selectedDoctor}\n` +
        `📅 Horario preferido: ${selectedSlot}\n` +
        `☕ Menú de confort: ${amenityNames || 'Estándar'}\n` +
        (selectedInsurance ? `🛡️ Seguro: ${selectedInsurance.name}\n` : '') +
        (includeGiftBox ? `🎁 Incluye: Caja de bienvenida con cepillo eléctrico gratis\n` : '') +
        (patientName ? `👤 Paciente: ${patientName}\n` : '') +
        (patientPhone ? `📱 Teléfono: ${patientPhone}\n` : '') +
        `\n¿Tienen disponible este espacio? ¡Gracias!`
    );

    const waUrl = `https://wa.me/${clinicWhatsapp}?text=${text}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#fbfaf7] sketch-card p-5 sm:p-7 my-8 max-h-[90vh] overflow-y-auto no-scrollbar shadow-[6px_7px_0px_#1a1c1e]">
        {/* Top Washi Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 sketch-tape -rotate-1 flex items-center justify-center border border-[#1a1c1e]/20 z-10">
          <span className="font-hand text-xs font-bold text-[#271900]">
            reserva en 60 segundos ✎
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white border border-[#1a1c1e] flex items-center justify-center cursor-pointer hover:bg-[#edeef0] transition-colors"
          title="Cerrar"
        >
          <X className="w-4 h-4 text-[#1a1c1e]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-1 pt-1">
          <DoodleCalendar className="w-5 h-5 text-[#00666f]" />
          <span className="font-patrick text-xs sm:text-sm uppercase tracking-wider text-[#00666f] font-bold">
            HOJA DE CITA TRANQUILA
          </span>
        </div>
        <h3 className="font-kalam text-2xl text-[#1a1c1e] font-bold">
          Agenda con la Dra. Maya y Equipo
        </h3>
        <p className="font-patrick text-xs sm:text-sm text-[#3e494a]">
          Cero anticipos con tarjeta • Confirmación directa a WhatsApp
        </p>

        {/* Step 1: Select Service */}
        <div className="mt-4">
          <label className="font-kalam text-sm font-bold text-[#1a1c1e] block mb-1">
            1. Tratamiento que buscas:
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {SERVICES.map((s) => {
              const isSelected = s.id === currentServiceId;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentServiceId(s.id)}
                  className={`sketch-pill px-3 py-1 font-patrick text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#00666f] text-white shadow-[1px_2px_0px_#1a1c1e]'
                      : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
                  }`}
                >
                  {s.title.split(' ')[0]} {s.title.split(' ')[1]} ({s.price})
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Doctor */}
        <div className="mt-3">
          <label className="font-kalam text-sm font-bold text-[#1a1c1e] block mb-1">
            2. Especialista preferido:
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {TEAM_MEMBERS.map((m) => {
              const isSelected = m.name === selectedDoctor;
              return (
                <button
                  key={m.name}
                  onClick={() => setSelectedDoctor(m.name)}
                  className={`sketch-pill px-3 py-1 font-patrick text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#fd7454] text-[#6b1200] shadow-[1px_2px_0px_#1a1c1e]'
                      : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
                  }`}
                >
                  {m.name.split(',')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Select Time Slot */}
        <div className="mt-3">
          <label className="font-kalam text-sm font-bold text-[#1a1c1e] block mb-1">
            3. Horario conveniente:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelected = slot === selectedSlot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`sketch-pill p-2 font-patrick text-xs font-bold text-center cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#fabc3f] text-[#271900] shadow-[1px_2px_0px_#1a1c1e] scale-102'
                      : 'bg-white text-[#1a1c1e] hover:bg-[#edeef0]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Comfort Menu Amenities */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <label className="font-kalam text-sm font-bold text-[#1a1c1e]">
              4. Tu Menú de Confort Gratuito:
            </label>
            <span className="font-hand text-xs text-[#00666f] font-bold">100% Incluido ★</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {COMFORT_AMENITIES.map((amenity) => {
              const isChecked = selectedAmenities.includes(amenity.id);
              return (
                <button
                  key={amenity.id}
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`p-2 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-[#f0f9f9] border-[#00666f]'
                      : 'bg-white border-[#1a1c1e]/20 hover:bg-[#fbfaf7]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${
                      isChecked
                        ? 'bg-[#00666f] text-white border-[#00666f]'
                        : 'border-[#1a1c1e]'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                  <span className="font-patrick text-xs text-[#1a1c1e] font-semibold">
                    {amenity.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 5: Gift Box Checkbox */}
        <div className="mt-4 p-3 bg-[#fff9ea] sketch-card flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#fd7454] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-kalam text-xs sm:text-sm font-bold text-[#1a1c1e]">
                Caja de bienvenida con cepillo eléctrico gratis
              </span>
              <span className="font-patrick text-[11px] text-[#3e494a]">
                Para nuevos pacientes en su primera cita
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={includeGiftBox}
            onChange={(e) => setIncludeGiftBox(e.target.checked)}
            className="w-5 h-5 accent-[#00666f] cursor-pointer"
          />
        </div>

        {/* Step 6: Patient Info Inputs */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="font-patrick text-xs text-[#1a1c1e] font-bold block mb-1">
              Tu Nombre:
            </label>
            <input
              type="text"
              placeholder="Ej. Sofía Martínez"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-3 py-2 bg-white border-2 border-[#1a1c1e] rounded-lg font-patrick text-sm focus:outline-none focus:border-[#00666f]"
            />
          </div>
          <div>
            <label className="font-patrick text-xs text-[#1a1c1e] font-bold block mb-1">
              WhatsApp / Teléfono:
            </label>
            <input
              type="tel"
              placeholder="Ej. 55 1234 5678"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              className="w-full px-3 py-2 bg-white border-2 border-[#1a1c1e] rounded-lg font-patrick text-sm focus:outline-none focus:border-[#00666f]"
            />
          </div>
        </div>

        {/* Confirm WhatsApp Button */}
        <button
          onClick={handleConfirm}
          className="sketch-card w-full mt-5 min-h-[50px] bg-[#00666f] text-white font-kalam text-lg font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-[#00818c] active:translate-x-0.5 active:translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>Confirmar y Enviar al WhatsApp del Consultorio →</span>
        </button>

        <span className="font-hand text-xs text-[#3e494a] block text-center mt-2">
          Te atenderá directamente el equipo de recepción de {clinicName} ✎
        </span>
      </div>
    </div>
  );
};
