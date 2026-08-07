import { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  HeartHandshake,
  Check,
  Menu,
  X,
} from 'lucide-react';

/* ============================================================================
   Clínica Marfil — demo de sector: landing de captación de pacientes.

   PROCEDENCIA DEL DISEÑO
   Portado desde `01_PRODUCTOS/dental-core/src/components/PatientLanding.tsx`
   (diseño "Final MX" aprobado, ver docs/Landing Page - Captación de Pacientes).
   Las clases de utilidad se copiaron VERBATIM para no reabrir un diseño ya
   aprobado. Lo único que cambió respecto al original:

     1. Sin props: la clínica es una constante local (demo estática).
     2. `onNavigate('/valoracion')` → enlace de WhatsApp (no hay router aquí).
     3. `onNavigate('/planes')` → ancla `#paquetes`, sección nueva en esta misma
        página, en el mismo lenguaje visual.
     4. Se quitó el enlace "Acceso Administrativo": una demo de sector no debe
        exponer la puerta del panel clínico.
     5. La tarjeta del hero decía "Planes desde $8,500 MXN" — ese importe es el
        precio del SERVICIO de ASCK (PricingCards), no un precio de tratamiento.
        En una pieza que ve el paciente confunde, así que se cambió por
        "Financiamiento a 3 y 6 meses".
     6. Añadidos: skip-link, <main>, y el aviso de demo conceptual.

   Clínica ficticia. Nombres, testimonios, precios y horarios son ilustrativos.
   ========================================================================== */

const CLINIC = {
  name: 'Clínica Marfil',
  logoText: 'Marfil',
  tagline: 'Odontología que se te explica antes de tocarte',
  primaryColor: '#00346f',
  accentColor: '#00d4b4',
  phoneDisplay: '55-XXXX-XXXX (por confirmar)',
  address: 'Ciudad Satélite, Naucalpan, Edo. Méx. (Domicilio exacto por confirmar)',
  hours: 'Lunes a viernes: 9:00 – 19:00 · Sábado: 9:00 – 14:00 (horario por confirmar)',
  doctors: ['Dra. Regina Ávalos', 'Dr. Iván Pruneda'],
  treatments: [
    {
      id: 'general',
      name: 'Consulta y Diagnóstico',
      description: 'Revisión completa de salud oral con radiografía diagnóstica y plan de tratamiento por escrito.',
      priceRange: '$500 – $900 MXN',
    },
    {
      id: 'limpieza',
      name: 'Limpieza Dental Ultrasonido',
      description: 'Eliminación profunda de sarro y pulido dental. Es la cita que evita el tratamiento caro de después.',
      priceRange: '$600 – $1,200 MXN',
    },
    {
      id: 'ortodoncia',
      name: 'Ortodoncia y Alineadores',
      description: 'Brackets tradicionales o alineadores transparentes, con plan de pagos mensuales.',
      priceRange: 'Desde $X,XXX / mes',
    },
    {
      id: 'implantes',
      name: 'Implantes Dentales',
      description: 'Reposición de una o varias piezas con guía quirúrgica. Recuperas mordida y estética.',
      priceRange: 'Sujeto a valoración',
    },
    {
      id: 'endodoncia',
      name: 'Endodoncia',
      description: 'Tratamiento de conducto para salvar el diente en vez de extraerlo, con anestesia controlada.',
      priceRange: '$X,XXX MXN',
    },
    {
      id: 'sonrisa',
      name: 'Diseño de Sonrisa',
      description: 'Evaluación estética para carillas de resina o porcelana, con vista previa antes de decidir.',
      priceRange: 'Sujeto a valoración',
    },
  ],
  packages: [
    {
      id: 'valoracion',
      name: 'Primera valoración',
      price: '$0',
      unit: 'sin costo',
      note: 'Primera vez, sin compromiso.',
      featured: false,
      cta: 'Agendar valoración',
      message: 'Quiero agendar mi valoración sin costo.',
      includes: [
        'Revisión clínica completa',
        'Radiografía diagnóstica',
        'Plan de tratamiento por escrito',
      ],
    },
    {
      id: 'limpieza',
      name: 'Limpieza + valoración',
      price: '$XXX',
      unit: '/ sesión',
      note: 'Precio referencial, sujeto a valoración.',
      featured: true,
      cta: 'Quiero mi limpieza',
      message: 'Me interesa el paquete de limpieza más valoración.',
      includes: [
        'Limpieza con ultrasonido',
        'Pulido y aplicación de flúor',
        'Diagnóstico incluido',
      ],
    },
    {
      id: 'ortodoncia',
      name: 'Ortodoncia a meses',
      price: '$X,XXX',
      unit: '/ mes',
      note: 'Precio referencial, sujeto a valoración.',
      featured: false,
      cta: 'Ver mi caso',
      message: 'Me interesa el plan de ortodoncia a meses.',
      includes: [
        'Estudio y plan de alineación',
        'Citas de ajuste incluidas',
        'Brackets o alineadores',
      ],
    },
  ],
  reviews: [
    {
      author: 'Mariana Gómez',
      stars: 5,
      text: 'Me explicaron el plan completo con costos antes de empezar. Salí sabiendo exactamente qué me iban a hacer y cuánto.',
    },
    {
      author: 'Roberto Sánchez',
      stars: 5,
      text: 'Instalaciones muy limpias y la valoración fue clarísima. Nada de venderme tratamientos que no necesitaba.',
    },
    {
      author: 'Alejandra Ruiz',
      stars: 5,
      text: 'Traía miedo al dentista desde niña. La doctora se tomó el tiempo de explicarme cada paso y no sentí dolor.',
    },
    {
      author: 'Héctor Villalobos',
      stars: 5,
      text: 'Llevé a mi hijo para ortodoncia. El plan de pagos mensual fue lo que nos permitió empezar sin descapitalizarnos.',
    },
  ],
  heroTitle: 'Salud y estética dental con precisión profesional',
  heroSubtitle:
    'Agenda hoy tu consulta de valoración en Ciudad Satélite y da el primer paso hacia la sonrisa que mereces.',
};

/* Enlace de WhatsApp con mensaje pre-llenado. Mismo patrón que las demos ya
   publicadas (forza-fitness, taller-rodriguez): el prospecto que escribe cae en
   la bandeja de ASCK identificando de qué demo viene. */
const WA_NUMBER = '525525268475';
const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hola, vengo de la demo de ${CLINIC.name} creada por ASCK Software. ${message}`,
  )}`;

const WA_VALORACION = waLink('Quiero agendar una cita de valoración.');
const WA_INFO = waLink('Quiero más información.');

const NAV_LINKS = [
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Opiniones' },
];

export default function App() {
  const primaryBgStyle = { backgroundColor: CLINIC.primaryColor };
  const primaryTextStyle = { color: CLINIC.primaryColor };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-teal-100 selection:text-teal-900">
      <a className="skip-link" href="#main">
        Saltar al contenido principal
      </a>

      {/* Navbar Pública */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60">
        <nav className="px-4 py-3 md:px-8 flex justify-between items-center gap-3" aria-label="Navegación principal">
          <a href="#main" className="flex items-center gap-2" aria-label={`${CLINIC.name} — ir al inicio`}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={primaryBgStyle}
              aria-hidden="true"
            >
              {CLINIC.logoText[0]}
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100">{CLINIC.name}</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 hover:text-teal-700 dark:hover:text-emerald-400 transition-colors text-slate-600 dark:text-slate-300"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={WA_VALORACION}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-2 px-4 rounded-lg cursor-pointer transition-colors shadow-xs"
            >
              Valoración Gratis
            </a>
            <a
              href={WA_VALORACION}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a6b5e] hover:bg-[#075e54] text-white p-2 rounded-lg flex items-center justify-center transition-colors shadow-xs touch-target"
              title="WhatsApp de la clínica"
              aria-label="Escribir a la clínica por WhatsApp"
            >
              <Phone className="w-4 h-4 fill-current" aria-hidden="true" />
            </a>
            {/* Menú móvil: el tráfico llega desde WhatsApp, o sea desde el teléfono */}
            <button
              type="button"
              className="md:hidden grid place-items-center w-11 h-11 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="menu-movil"
            className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 px-4 pb-4 pt-1"
            onKeyDown={(e) => { if (e.key === 'Escape') setMenuOpen(false); }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-semibold text-sm text-slate-700 dark:text-slate-200 border-b border-slate-200/60 dark:border-slate-800/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_VALORACION}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-[#0a6b5e] hover:bg-[#075e54] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg transition-colors"
            >
              Agendar valoración por WhatsApp
            </a>
          </div>
        )}
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-700 border border-teal-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/40">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Consulta y Diagnóstico Profesional
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
                {CLINIC.heroTitle}
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {CLINIC.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={WA_VALORACION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 font-bold py-3.5 px-8 rounded-xl cursor-pointer text-sm shadow-md transition-all flex items-center justify-center gap-2 group active:scale-98"
                  style={primaryBgStyle}
                >
                  Agendar Mi Valoración
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={WA_INFO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold py-3.5 px-8 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Escribir por WhatsApp
                </a>
              </div>
              {/* Etiquetas de datos por confirmar */}
              <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                * Tratamientos sujetos a valoración. Dirección, horarios y precios por confirmar.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              {/* Visual Card Decorator */}
              <div className="relative mx-auto max-w-xs md:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">Clínica Dental</span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">{CLINIC.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center">
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" aria-hidden="true"></div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Mapeado de Diagnóstico</span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" aria-hidden="true"></div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Financiamiento a 3 y 6 meses</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Tecnología de punta</span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 dark:text-emerald-400 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">Demo Conceptual</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de Tratamientos */}
        <section id="tratamientos" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Tratamientos a tu Medida</h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Escribe por WhatsApp para pre-agendar tu valoración gratuita de inmediato.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLINIC.treatments.map((t) => (
                <a
                  key={t.id}
                  href={waLink(`Me interesa el tratamiento: ${t.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pre-agendar valoración de ${t.name} por WhatsApp`}
                  className="bg-slate-50 hover:bg-slate-100/80 dark:bg-slate-800/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 transition-all cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-800" style={primaryTextStyle}>
                      <HeartHandshake className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition-colors">{t.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.description}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Desde</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{t.priceRange}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Paquetes — sección nueva, en el mismo lenguaje visual del original */}
        <section id="paquetes" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Paquetes y Formas de Pago</h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Sabes el costo antes de sentarte en el sillón. Nada se cobra sin valoración previa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLINIC.packages.map((p) => (
                <div
                  key={p.id}
                  className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-6 flex flex-col shadow-xs ${
                    p.featured
                      ? 'border-teal-400 dark:border-emerald-500/60 shadow-md'
                      : 'border-slate-200/80 dark:border-slate-800/80'
                  }`}
                >
                  {p.featured && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap"
                      style={primaryBgStyle}
                    >
                      Más solicitado
                    </span>
                  )}
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base tracking-tight">{p.name}</h3>
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <strong className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{p.price}</strong>
                    <small className="text-xs font-semibold text-slate-400 dark:text-slate-500">{p.unit}</small>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-1">{p.note}</p>

                  <ul className="mt-5 space-y-2.5 grow">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-teal-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(p.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center transition-colors ${
                      p.featured
                        ? 'text-white hover:opacity-90'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-emerald-500'
                    }`}
                    style={p.featured ? primaryBgStyle : undefined}
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nosotros / Doctores */}
        <section id="nosotros" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Nuestro Equipo Médico</h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Contamos con especialistas de alta reputación académica y calidez humana dedicados a transformar tu sonrisa con las mejores prácticas éticas e higiénicas.
              </p>
              <div className="space-y-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0" aria-hidden="true">✓</div>
                  <span>Especialistas certificados en Ortodoncia y Cirugía</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0" aria-hidden="true">✓</div>
                  <span>Materiales de grado clínico premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0" aria-hidden="true">✓</div>
                  <span>Protocolo de esterilización por paciente</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CLINIC.doctors.map((doc, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800/80 p-5 rounded-2xl shadow-xs text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mx-auto flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-bold text-xl" aria-hidden="true">
                    {doc.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-950 dark:text-slate-100 text-sm">{doc}</h4>
                    <span className="text-xs text-teal-600 font-semibold bg-teal-50 dark:text-emerald-400 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full inline-block">Cirujano Dentista</span>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                    Comprometido con darte un diagnóstico seguro y libre de dolor.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Opiniones de Pacientes</h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Testimonios ilustrativos para esta demo. Los reales los aporta la clínica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {CLINIC.reviews.map((r, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800/80 p-6 rounded-2xl shadow-xs space-y-4">
                  <div className="flex gap-1 text-amber-400" role="img" aria-label={`${r.stars} de 5 estrellas`}>
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{r.text}"
                  </p>
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-600 dark:text-slate-300" aria-hidden="true">
                      {r.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs">{r.author}</h4>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Paciente · ilustrativo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA de cierre — pitch de ASCK */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Tu clínica puede verse así
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Esta es una demo conceptual de ASCK Software: una landing de captación de pacientes
              para clínicas dentales, con tratamientos, paquetes y agenda directa por WhatsApp.
              Se adapta a tu nombre, tus especialidades y tus precios reales.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a
                href={WA_INFO}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a6b5e] hover:bg-[#075e54] text-white font-bold py-3.5 px-8 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                Hablar con ASCK
              </a>
              <a
                href="#tratamientos"
                className="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold py-3.5 px-8 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-xs text-sm flex items-center justify-center gap-2 transition-all"
              >
                Ver la demo otra vez
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contacto */}
      <footer className="bg-slate-900 text-slate-400 py-16 font-sans text-xs">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-md" style={primaryBgStyle} aria-hidden="true">
                {CLINIC.logoText[0]}
              </div>
              <span className="font-bold text-md tracking-tight text-white">{CLINIC.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              {CLINIC.tagline}. Soluciones odontológicas confiables, limpias y profesionales.
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
              <strong className="text-slate-300">Demo conceptual.</strong> Clínica Marfil es una
              clínica ficticia creada por ASCK Software para mostrar una propuesta de presencia
              digital del sector dental. Nombres, testimonios, precios y horarios son ilustrativos
              y no corresponden a un negocio real.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Contacto e Información</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CLINIC.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>{CLINIC.phoneDisplay}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CLINIC.hours}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Secciones</h4>
              <ul className="space-y-2">
                <li><a href="#tratamientos" className="inline-block py-1.5 hover:text-white transition-colors">Tratamientos</a></li>
                <li><a href="#paquetes" className="inline-block py-1.5 hover:text-white transition-colors">Paquetes y pagos</a></li>
                <li><a href="#nosotros" className="inline-block py-1.5 hover:text-white transition-colors">Equipo médico</a></li>
                <li><a href="#testimonios" className="inline-block py-1.5 hover:text-white transition-colors">Opiniones</a></li>
                <li>
                  <a href={WA_VALORACION} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white transition-colors">
                    Agendar por WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[10px]">
          <span>Demo conceptual de presencia digital · ASCK Software</span>
          <span>Información referencial para propósitos de demostración.</span>
        </div>
      </footer>
    </div>
  );
}
