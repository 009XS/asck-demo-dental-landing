export interface DentalService {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  priceNote?: string;
  description: string;
  highlight: string;
  accentColor: 'teal' | 'coral' | 'gold' | 'red';
}

export interface SmileCaseStudy {
  id: string;
  title: string;
  badge: string;
  duration: string;
  monthlyCost: string;
  patientQuote: string;
  beforeNote: string;
  afterNote: string;
  beforeTeethStyle: 'misaligned' | 'stained' | 'chipped';
}

export interface InsuranceProvider {
  id: string;
  name: string;
  badge: string;
  coverageDetail: string;
  savingsNote: string;
  cleaningCost: string;
}

export interface VisitTimelineStep {
  minute: string;
  title: string;
  description: string;
  highlight: string;
  iconType: 'tea' | 'headphones' | 'scan' | 'screen' | 'gift';
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  image: string;
  quote?: string;
  badge?: string;
  rotation: string;
}

export interface Testimonial {
  name: string;
  service: string;
  timeAgo: string;
  quote: string;
  stars: number;
  initials: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ComfortAmenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProspectClinic {
  slug: string;
  nombre: string;
  whatsapp: string;
  rating: number;
  reviews: number;
  zona: string;
  doctorPrincipal: string;
  tagline: string;
  tipoModo: string;
}

export const PROSPECT_CLINICS: ProspectClinic[] = [
  {
    slug: 'smilecraft',
    nombre: 'SmileCraft Dental Studio',
    whatsapp: '525540001234',
    rating: 4.9,
    reviews: 512,
    zona: 'Roma Norte / Juárez, CDMX',
    doctorPrincipal: 'Dra. Maya Lin, DDS',
    tagline: 'Odontología con manos suaves y buena vibra ✎',
    tipoModo: 'MODO_FLAGSHIP'
  },
  {
    slug: 'leal-dental',
    nombre: 'Leal Dental',
    whatsapp: '525585703893',
    rating: 4.9,
    reviews: 58,
    zona: 'Naucalpan / Satélite',
    doctorPrincipal: 'Dr. Alejandro Leal',
    tagline: 'Tu sonrisa cuidada como en casa',
    tipoModo: 'MODO_2'
  },
  {
    slug: 'flores-herrera',
    nombre: 'Flores & Herrera Odontología Digital',
    whatsapp: '525519513813',
    rating: 5.0,
    reviews: 74,
    zona: 'Naucalpan Centro',
    doctorPrincipal: 'Dra. Sofía Flores',
    tagline: 'Tecnología 3D sin dolor',
    tipoModo: 'MODO_2'
  },
  {
    slug: 'sonrisa-integral',
    nombre: 'Sonrisa Integral Naucalpan',
    whatsapp: '525579085527',
    rating: 4.8,
    reviews: 110,
    zona: 'Lomas Verdes / Naucalpan',
    doctorPrincipal: 'Dr. Roberto Mendoza',
    tagline: 'Cuidado dental con calidez humana',
    tipoModo: 'MODO_2'
  },
  {
    slug: 'smile-dental-satelite',
    nombre: 'Smile Dental Satélite',
    whatsapp: '525562145327',
    rating: 4.9,
    reviews: 89,
    zona: 'Ciudad Satélite',
    doctorPrincipal: 'Dra. Mariana Garza',
    tagline: 'Diseño de sonrisa transparente y honesto',
    tipoModo: 'MODO_2'
  },
  {
    slug: 'bee-care',
    nombre: 'Bee Care Dentista Zona Esmeralda',
    whatsapp: '525539014523',
    rating: 5.0,
    reviews: 43,
    zona: 'Zona Esmeralda, Atizapán',
    doctorPrincipal: 'Dra. Regina Bee Care',
    tagline: 'Odontología amable para toda la familia',
    tipoModo: 'MODO_2'
  },
  {
    slug: 'denttify-polanco',
    nombre: 'Denttify Polanco',
    whatsapp: '525580004312',
    rating: 4.9,
    reviews: 134,
    zona: 'Polanco, CDMX',
    doctorPrincipal: 'Dr. Carlos Denttify',
    tagline: 'Estética y alineación invisible de alta gama',
    tipoModo: 'MODO_3'
  }
];

export const SERVICES: DentalService[] = [
  {
    id: 'limpieza-suave',
    title: 'Limpiezas y Exámenes de Rutina Suaves',
    category: 'Rutina y Prevención',
    duration: '✎ 45 min',
    price: '$89',
    priceNote: '(o 100% Cubierto por Seguro)',
    description: 'Eliminación ultrasónica suave de placa sin molestos sonidos de raspado, con pulido herbal a la menta y cero culpas.',
    highlight: 'Cero dolor con agua temperada',
    accentColor: 'teal'
  },
  {
    id: 'alineadores-3d',
    title: 'Alineadores Invisibles 3D',
    category: 'Ortodoncia Invisible',
    duration: '✎ Escaneo 3D',
    price: '$85',
    priceNote: '/mes (sin intereses)',
    description: 'Cero pastas pegajosas. Usamos una cámara intraoral 3D para previsualizar la transformación de tu nueva sonrisa en pantalla.',
    highlight: 'Previsualización 3D el día 1',
    accentColor: 'coral'
  },
  {
    id: 'aclaramiento-carillas',
    title: 'Aclaramiento y Carillas Cosméticas',
    category: 'Brillo y Resplandor',
    duration: '✎ 60 min',
    price: '$199',
    priceNote: 'Especial (Antes $350)',
    description: 'Blanqueamiento láser sin sensibilidad en clínica y carillas de porcelana ultrafinas hechas a mano para una belleza orgánica.',
    highlight: 'Fórmula 0% Sensibilidad',
    accentColor: 'gold'
  },
  {
    id: 'urgencias-restauracion',
    title: 'Odontología Restauradora y Urgencias el Mismo Día',
    category: 'Alivio Inmediato',
    duration: '✎ En 15 min',
    price: 'Triaje Prioritario',
    priceNote: 'Espacios reservados diarios',
    description: '¿Diente astillado o dolor repentino? Protocolos inmediatos para aliviar el dolor, resinas estéticas y sedación suave.',
    highlight: 'Alivio garantizado en la primera hora',
    accentColor: 'red'
  },
  {
    id: 'odontopediatria-amigable',
    title: 'Odontopediatría Amigable Cero Lágrimas',
    category: 'Para los Pequeños',
    duration: '✎ 35 min',
    price: '$65',
    priceNote: 'Incluye Kit Dental Infantil',
    description: 'Citas divertidas con gafas de sol coloridas, caricaturas en el techo y diploma de valentía para crear recuerdos felices.',
    highlight: 'Atención con pedagogía y amor',
    accentColor: 'teal'
  }
];

export const SMILE_CASES: SmileCaseStudy[] = [
  {
    id: 'case-1',
    title: 'Alineadores Invisibles 3D',
    badge: 'Sin moldes de pasta',
    duration: '5 meses',
    monthlyCost: '$85/mes',
    patientQuote: '«Nadie notó que los llevaba puestos y vi mi resultado en 3D desde el día 1.»',
    beforeNote: 'Antes: Apiñamiento leve y espacio central',
    afterNote: 'Después: Arco alineado y simétrico ★',
    beforeTeethStyle: 'misaligned'
  },
  {
    id: 'case-2',
    title: 'Aclaramiento Láser + 4 Carillas',
    badge: '0% Sensibilidad',
    duration: '2 sesiones',
    monthlyCost: '$199 esp.',
    patientQuote: '«Tenía pánico al dolor por sensibilidad. No sentí ni un cosquilleo y sonrío en todas las fotos.»',
    beforeNote: 'Antes: Manchas por café y tono apagado',
    afterNote: 'Después: Blanco natural orgánico (+5 tonos) ★',
    beforeTeethStyle: 'stained'
  },
  {
    id: 'case-3',
    title: 'Restauración Biomimética Express',
    badge: 'En 45 minutos',
    duration: '1 visita',
    monthlyCost: 'Cubierto 80%',
    patientQuote: '«Llegué con un diente frontal astillado de urgencia y salí sonriendo con seguridad el mismo día.»',
    beforeNote: 'Antes: Fractura en borde incisivo superior',
    afterNote: 'Después: Unión invisible de porcelana ★',
    beforeTeethStyle: 'chipped'
  }
];

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    id: 'delta',
    name: 'Delta Dental / GNP',
    badge: '100% Cubierto',
    coverageDetail: '$0 en Limpieza, Examen y Rayos X',
    savingsNote: 'Ahorro promedio de $240 en tu primera cita',
    cleaningCost: '$0 Copago'
  },
  {
    id: 'metlife',
    name: 'MetLife Dental',
    badge: '100% Preventivo',
    coverageDetail: '$0 en Limpieza + 80% en Resinas y Urgencias',
    savingsNote: 'Cobertura directa sin trámites engorrosos',
    cleaningCost: '$0 Copago'
  },
  {
    id: 'cigna',
    name: 'Cigna / Aetna / AXA',
    badge: 'Red Preferente',
    coverageDetail: '$0 en Visita Inicial + Escaneo 3D Digital',
    savingsNote: 'Descuento adicional en alineadores invisibles',
    cleaningCost: '$0 Copago'
  },
  {
    id: 'bluecross',
    name: 'BlueCross / Monterrey',
    badge: '100% Cubierto',
    coverageDetail: '$0 en Limpieza + $500 Bono en Alineadores',
    savingsNote: 'Plan preferencial para tratamientos estéticos',
    cleaningCost: '$0 Copago'
  },
  {
    id: 'smilecraft-plan',
    name: 'Sin Seguro (Plan SmileCraft)',
    badge: 'Ahorra 40%',
    coverageDetail: '$89 Todo Incluido (Limpieza + Diagnóstico + 3D)',
    savingsNote: '+ Caja de regalo con cepillo eléctrico ($120 valor) GRATIS',
    cleaningCost: '$89 Tarifa Única'
  }
];

export const VISIT_TIMELINE: VisitTimelineStep[] = [
  {
    minute: '00 min',
    title: 'Bienvenida Bañada de Sol',
    description: 'Te recibimos sin salas de espera estresantes con un té tibio de lavanda y toallitas aromatizadas.',
    highlight: 'Ambiente de café boutique',
    iconType: 'tea'
  },
  {
    minute: '05 min',
    title: 'Personalización de tu Confort',
    description: 'Eliges tu serie favorita de Netflix en la pantalla de techo, auriculares Bose y una manta con peso.',
    highlight: 'Menú de confort 100% gratis',
    iconType: 'headphones'
  },
  {
    minute: '15 min',
    title: 'Cuidado y Pulido Ultrasonido',
    description: 'Agua tibia temperada y tecnología ultrasónica sin ruidos metálicos ni raspados molestos.',
    highlight: 'Cero dolor comprobado',
    iconType: 'scan'
  },
  {
    minute: '35 min',
    title: 'Explicación Transparente 3D',
    description: 'La Dra. Maya te muestra tus dientes en la pantalla con honestidad total y sin presiones de venta.',
    highlight: 'Garantía Cero Juicios',
    iconType: 'screen'
  },
  {
    minute: '45 min',
    title: 'Sonrisa Renovada y Caja de Regalo',
    description: 'Sales con una sonrisa limpia, sensación fresca y tu cepillo sónico de regalo para nuevos pacientes.',
    highlight: '¡Lista/o para sonreír al mundo!',
    iconType: 'gift'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dra. Maya Lin, DDS',
    role: 'Fundadora & Especialista en Confort',
    specialty: 'Defensora contra la Ansiedad Dental',
    credentials: "Tufts '11 ✎",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXnhXBDULXcwEA0Ar5nv5VXmD6cJ1AJV0g6zMFznKlP8OYu27JNxPL3SwWmbzqecJfsaag5nymm5SCfJ_jx94m95P5gQoD92VM3zf6Hu08H43n1ng5-mvZ5VlOV8H2JPO-4d24AMQMgAJvk45Ub93HDtVzvknsm8xr3C9RKM5m_rBwidT1jgCALA2M38iGDbmD83Iyt9xrr1lzd1BWPnPRpj7XcQtPWM71TOrSuqfUdUHIhWBYwHrXkw',
    quote: '«Mi promesa es sencilla: Escuchamos primero. Nos movemos a tu propio ritmo y jamás te juzgaremos por tu historial dental.»',
    badge: 'Certificada Fear-Free™',
    rotation: '-rotate-1'
  },
  {
    name: 'Julian T., RDH',
    role: 'Higienista Dental Registrado',
    specialty: 'Pulido Suave & Cuidado Periodontal',
    credentials: '10+ Años',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm0CcQk1c9U2WFcTTwT63AZCLN0s0-7c01K-DuW7CrO7-OdEUDlnaauMitrhv-iCPQQDP1Wkq5RD_Z1fyOJVaiMQUWKmXcVW2wIzkYoq0VFKBmLFtRJ2HmNmVpOKeuSiq-7yyX6UQ1I690dyiKR1Vd1gY8IiAF6dQuVuIS6paUW76NcsdVHmkyjN04ghCgwyzlSq9H877Uv_K3jdli4hCvmKIOPfvusTNPLhO2OUUIzp_kcUbrhN5d-A',
    rotation: 'rotate-1'
  },
  {
    name: 'Chloe R.',
    role: 'Coordinadora de Pacientes',
    specialty: 'Apoyo Emocional & Menú de Confort',
    credentials: 'Guía Amiga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB841hDwURpRfVyYyigrkfkT3d8DS3dYu0yr39hkk2w_gBNO7YanCViumZq0TfD2r7oZQE0PD1506VoPPY-j3jWK225pw6jeP84k4T03Y0acz8T8l6qa-4fNnmKD7_yAE13bJLntfMmEGRhNLv54zrnvEOd73LNmZumG1nn2yeTxtSOAWE5zcaaFE7fYY58-8Hm_m949NJYTvGYSpMwxDG6bwmfEzbvcenpQvLIV8HQbG2KrVSs0tpjcA',
    rotation: '-rotate-2'
  },
  {
    name: 'Sam P.',
    role: 'Asistente Clínico',
    specialty: 'DJ de Playlists & Soporte Suave',
    credentials: 'Sonrisas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmQnBqJjA9NIbglKDaA8OZ19kWl262HH7FzltB4AFhlNd2o9JJvOJlmlO0mrSdABDKFe9E9xmTPEgPgUAXF-rOFnHJLhff8Cs3AOKhqnJ46KN_rf1RgLO-bTlwIEC-Wj7BWg9w5ifxjExGv0QkpeZ7uc6JTIHa1IrZYCV7kQoYh5kl-T4NlOtjeQaX03p5Zup6rAhM8bYgp0MsfsYBbcK7ddPFD4EAV_UJhDqVnS1qoclTOezKQy_nCw',
    rotation: 'rotate-2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah K.',
    service: 'Limpieza de Rutina y Aclaramiento',
    timeAgo: 'Hace 3 días ✎',
    quote: '«Literalmente solía llorar en mi auto antes de cada cita dental. El equipo aquí me dio auriculares cálidos, me preguntaban cómo estaba cada 2 minutos, ¡y hasta me hicieron reír!»',
    stars: 5,
    initials: 'SK',
    badge: 'Paciente Verificada'
  },
  {
    name: 'Marcus B.',
    service: 'Alineadores Invisibles 3D',
    timeAgo: 'Hace 1 semana ✎',
    quote: '«El escáner 3D tardó 2 minutos, nada de esas pastas asquerosas de antes. Mi sonrisa se ve perfecta y el plan mensual fue súper cómodo.»',
    stars: 5,
    initials: 'MB',
    badge: 'Caso Terminado'
  },
  {
    name: 'Elena V.',
    service: 'Urgencia por Diente Astillado',
    timeAgo: 'Hace 2 semanas ✎',
    quote: '«Me recibieron el mismo día en 20 minutos. No sentí absolutamente nada con la anestesia tópica de menta y salí feliz.»',
    stars: 5,
    initials: 'EV',
    badge: 'Atención en Urgencia'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿De verdad no sentiré dolor durante mi limpieza o tratamiento?',
    answer: '100% garantizado. Usamos gel adormecedor natural sabor menta, agua tibia temperada, ultrasonido silencioso sin raspado metálico y anestesia computarizada sin aguja (The Wand).'
  },
  {
    question: 'No he ido al dentista en más de 5 años y me da vergüenza, ¿qué hago?',
    answer: '¡Estás en el lugar correcto! Nuestra «Garantía Cero Juicios» es sagrada: nunca te regañaremos. Celebramos que hayas dado el primer paso hoy y avanzamos a tu propio ritmo.'
  },
  {
    question: '¿El menú de confort (Netflix, manta con peso, óxido) tiene costo extra?',
    answer: '¡Todo nuestro Menú de Confort es 100% gratuito! Desde auriculares Bose con cancelación de ruido y pantallas en el techo hasta almohadas térmicas y té de lavanda.'
  },
  {
    question: '¿Puedo cancelar o reprogramar si me siento nervioso el día de mi cita?',
    answer: 'Por supuesto. Puedes reprogramar desde tu teléfono en 10 segundos sin cargos ocultos ni penalizaciones.'
  }
];

export const COMFORT_AMENITIES: ComfortAmenity[] = [
  {
    id: 'netflix',
    name: 'Netflix en Pantalla de Techo',
    description: 'Elige tu serie favorita durante toda la cita',
    icon: 'tv'
  },
  {
    id: 'headphones',
    name: 'Auriculares Bose Cancelación de Ruido',
    description: 'Spotify, podcasts o silencio absoluto',
    icon: 'headphones'
  },
  {
    id: 'blanket',
    name: 'Manta Cálida con Peso Terapéutico',
    description: 'Reduce la ansiedad física de inmediato',
    icon: 'sparkles'
  },
  {
    id: 'nitrous',
    name: 'Óxido Nitroso ("Gas Dulce de la Risa")',
    description: 'Relajación profunda y despierta en minutos',
    icon: 'smile'
  },
  {
    id: 'tea',
    name: 'Té Orgánico Tibio de Lavanda & Manzanilla',
    description: 'Para comenzar la visita en calma',
    icon: 'coffee'
  }
];
