import { motion, AnimatePresence } from 'framer-motion';
import { Check, Menu, X, Mail, MessageSquare, Send, User, Phone, Info, ChevronLeft, ChevronRight, ShieldCheck, Zap, HeartHandshake, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import logo from './image/LogoSinInfo.png';
import comboFormateo from './image/ComboFormateo.png';
import comboLanding from './image/ComboLandingPage.png';

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-20 h-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
            <img src={logo} alt="JuanTech Logo" className="w-full h-full object-contain scale-125" />
          </div>
          <span className="text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-[#ccff00] flex items-center">
            <GlitchText text="JUAN" autoGlitch={true} />
            <span className="text-[#00f2ff]"><GlitchText text="TECH" autoGlitch={true} /></span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-gray-400 font-bold">
          <a href="#" className="hover:text-[#ccff00] transition-colors">Inicio</a>

          {/* Dropdown de Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="hover:text-[#ccff00] transition-colors flex items-center gap-1 py-4">
              Servicios
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl"
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('changeService', { detail: 0 }));
                      setShowServices(false);
                    }}
                    className="w-full text-left block p-3 hover:bg-[#ccff00]/10 rounded-xl hover:text-[#ccff00] transition-all"
                  >
                    Combo "Computador Como Nuevo"
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('servicios');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('changeService', { detail: 1 }));
                      setShowServices(false);
                    }}
                    className="w-full text-left block p-3 hover:bg-[#00f2ff]/10 rounded-xl hover:text-[#00f2ff] transition-all"
                  >
                    Combo "Mi Negocio en Internet" (Landing Page)
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#precios" className="hover:text-[#ccff00] transition-colors">Precios</a>
          <a href="#faq" className="hover:text-[#ccff00] transition-colors whitespace-nowrap">Preguntas Frecuentes</a>
          <a href="#nosotros" className="hover:text-[#ccff00] transition-colors">¿Por qué nosotros?</a>
          <a href="#contacto" className="hover:text-[#ccff00] transition-colors">Contacto</a>
          <a href="#ubicacion" className="hover:text-[#00f2ff] transition-colors flex items-center gap-1">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            Ubicación
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/5 px-6 py-8 flex flex-col gap-6 overflow-y-auto max-h-[80vh]">
          <a href="#" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>Inicio</a>
          <div className="flex flex-col gap-4 border-l-2 border-[#ccff00]/30 pl-4">
            <span className="text-gray-500 text-sm uppercase tracking-widest">Servicios</span>
            <a href="#servicio-formateo" className="text-lg font-bold text-white hover:text-[#ccff00]" onClick={() => setIsOpen(false)}>Combo "Computador Como Nuevo"</a>
            <a href="#servicio-webpro" className="text-lg font-bold text-white hover:text-[#00f2ff]" onClick={() => setIsOpen(false)}>Combo "Mi Negocio en Internet"</a>
          </div>
          <a href="#precios" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>Precios</a>
          <a href="#faq" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>Preguntas Frecuentes</a>
          <a href="#nosotros" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>¿Por qué nosotros?</a>
          <a href="#contacto" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>Contacto</a>
          <a href="#ubicacion" className="text-xl font-bold text-[#00f2ff] flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            Ubicación
          </a>
        </div>
      )}
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0], y: [0, -50, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-20 w-72 h-72 bg-[#00f2ff]/10 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2], x: [0, -50, 0], y: [0, 50, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-[120px]"
    />
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block py-1 px-4 rounded-full border border-[#00f2ff]/30 text-[#00f2ff] text-sm font-medium mb-6">Tecnología al Siguiente Nivel</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-tight uppercase flex flex-col items-center">
          <GlitchText text="TECNOLOGÍA QUE" autoGlitch={true} />
          <GlitchText
            text="IMPULSA TU VIDA Y TU NEGOCIO"
            autoGlitch={true}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ccff00]"
            textClassName="bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ccff00] text-transparent"
          />
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">
          Servicio técnico profesional y soluciones web en Bogotá y Colombia. <br className="hidden md:block" />
          Sin complicaciones, sin lenguaje enredado y con resultados garantizados.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#servicios" className="px-8 py-4 bg-[#00f2ff] text-black font-bold rounded-xl w-full sm:w-auto text-center hover:scale-105 transition-all">Comenzar Ahora</a>
          <a href="#contacto" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl w-full sm:w-auto flex items-center justify-center hover:bg-white/5 transition-all">Contáctanos</a>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- WhyUs Component ---
const WhyUs = () => {
  const reasons = [
    {
      title: 'Sin hablar en "chino"',
      desc: 'Te explico qué le pasa a tu equipo de forma sencilla, sin tecnicismos enredados.',
      icon: <MessageCircle className="w-8 h-8 text-[#ccff00]" />,
    },
    {
      title: 'Seguridad Primero',
      desc: 'Tus fotos, documentos y datos son sagrados. Siempre hacemos copia de seguridad.',
      icon: <ShieldCheck className="w-8 h-8 text-[#00f2ff]" />,
    },
    {
      title: 'Rapidez de respuesta',
      desc: 'Atiendo tus dudas por WhatsApp de forma directa. Sin intermediarios ni esperas.',
      icon: <Zap className="w-8 h-8 text-[#ccff00]" />,
    },
    {
      title: 'Soporte Real',
      desc: 'No desaparezco después de entregarte el trabajo. Estoy para lo que necesites.',
      icon: <HeartHandshake className="w-8 h-8 text-[#00f2ff]" />,
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#ccff00]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            ¿Por qué confiar en <span className="text-[#ccff00]">JuanTech</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f2ff] to-[#ccff00] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#ccff00]/30 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/40 inline-block group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{r.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const BentoServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleServiceChange = (e: any) => {
      setCurrentIndex(e.detail);
    };
    window.addEventListener('changeService', handleServiceChange);
    return () => window.removeEventListener('changeService', handleServiceChange);
  }, []);

  const services = [
    {
      id: "servicio-formateo",
      priceId: "formateo-precio",
      title: 'Combo "Computador Como Nuevo"',
      image: comboFormateo,
      color: "border-[#00f2ff]/30",
      marketing: {
        hook: "¿Sientes que tu computador está lento, se calienta o tiene mensajes raros?",
        intro: "En JuanTech lo dejamos volando. Olvídate de los virus y las esperas eternas.",
        benefits: [
          { title: "Limpieza Total", desc: "Borramos todo lo malo (virus y basura) y reinstalamos el último Windows para que sea ultra rápido." },
          { title: "Kit de Trabajo", desc: "Te entregamos Word, Excel y PowerPoint listos para usar." },
          { title: "Programas a tu Gusto", desc: "¿Necesitas Zoom, Chrome, Photoshop o Spotify? Nosotros los dejamos instalados." },
          { title: "Internet sin Fallas", desc: "Revisamos tu Wi-Fi para que no se te caiga la señal en mitad de una reunión o clase." }
        ],
        ideal: 'Ideal si: "Tu PC se demora 10 minutos en prender", "Te salen anuncios raros" o "Quieres actualizarte al Windows más reciente".'
      }
    },
    {
      id: "servicio-webpro",
      priceId: "webpro-precio",
      title: 'Combo "Mi Negocio en Internet" (Landing Page)',
      image: comboLanding,
      color: "border-[#ccff00]/30",
      marketing: {
        hook: "¿Crees que una web es un lujo? Es tu mejor herramienta de ventas 24/7.",
        intro: "Transformamos tu negocio físico en una máquina digital. Mira cómo ayudamos a otros:",
        benefits: [
          { title: "💇‍♀️ Salones & Barberías", desc: "Botón de citas directo a WhatsApp. No pierdas clientes por no contestar el teléfono." },
          { title: "🍕 Restaurantes", desc: "Menú digital con QR. Recibe pedidos organizados sin gastar en menús físicos." },
          { title: "🛍️ Almacenes", desc: "Ubicación en Maps y productos estrella. Que te encuentren antes que a la competencia." },
          { title: "⚖️ Profesionales", desc: "Presentación premium y formulario. Da la confianza necesaria para cobrar lo que vales." }
        ],
        ideal: 'Ideal para: Negocios que quieren dejar de ser "invisibles" en internet y empezar a vender por WhatsApp.'
      }
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Nuestros <span className="text-[#00f2ff]">Servicios</span></h2>

        <div className="relative group px-12">
          {/* Botones de Navegación */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-[#ccff00] text-white hover:text-black rounded-full border border-white/10 transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-[#ccff00] text-white hover:text-black rounded-full border border-white/10 transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative min-h-[600px] md:min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.a
                key={currentIndex}
                id={services[currentIndex].id}
                href={`#${services[currentIndex].priceId}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-3xl border border-white/10 bg-[#111] text-left overflow-hidden hover:border-white/20 transition-all flex flex-col scroll-mt-24 shadow-2xl"
              >
                <div className="p-8 bg-[#111]">
                  <h3 className="text-3xl font-black text-white">{services[currentIndex].title}</h3>
                </div>

                {services[currentIndex].marketing && (
                  <div className="p-8 bg-[#151515] border-y border-white/5 space-y-6">
                    <div className="space-y-2">
                      <p className="text-[#ccff00] font-bold text-lg italic">{services[currentIndex].marketing.hook}</p>
                      <p className="text-white text-base opacity-80">{services[currentIndex].marketing.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services[currentIndex].marketing.benefits.map((b: any, idx: number) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-[#00f2ff] font-black text-sm uppercase tracking-wider">{b.title}</p>
                          <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <p className="text-gray-500 text-sm italic">{services[currentIndex].marketing.ideal}</p>
                    </div>
                  </div>
                )}

                <div className="w-full flex-grow flex items-center justify-center bg-black/10 p-6">
                  <img
                    src={services[currentIndex].image}
                    alt={services[currentIndex].title}
                    className="max-h-[400px] md:max-h-[500px] w-auto object-contain"
                  />
                </div>

                <div className="p-6 bg-black/40 text-center text-[#00f2ff] font-bold text-sm tracking-widest">
                  HAZ CLIC PARA VER PRECIOS
                </div>
              </motion.a>
            </AnimatePresence>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-[#ccff00] w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Timeline Component ---
const Timeline = () => {
  const steps = [
    {
      number: "01",
      title: "Contacto instantáneo",
      desc: "Escríbenos por WhatsApp y cuéntanos tu caso. Te respondemos de inmediato, de forma directa y sin intermediarios.",
      icon: <MessageSquare className="w-8 h-8 text-[#00f2ff]" />,
      color: "#00f2ff",
      textColorClass: "text-[#00f2ff]"
    },
    {
      number: "02",
      title: "Diagnóstico y Cotización Clara",
      desc: "Analizamos tu necesidad y te damos una cotización con precio cerrado y sin sorpresas. Sin cobrar de más.",
      icon: <Zap className="w-8 h-8 text-[#ccff00]" />,
      color: "#ccff00",
      textColorClass: "text-[#ccff00]"
    },
    {
      number: "03",
      title: "Ejecución y Respaldo Seguro",
      desc: "Mantenimiento o desarrollo web ágil. Cuidamos tu información y datos personales con copias de seguridad de alta seguridad.",
      icon: <ShieldCheck className="w-8 h-8 text-[#00f2ff]" />,
      color: "#00f2ff",
      textColorClass: "text-[#00f2ff]"
    },
    {
      number: "04",
      title: "Entrega y Soporte Post-Venta",
      desc: "Probamos los resultados juntos. Tu satisfacción está garantizada y cuentas con soporte real ante cualquier duda.",
      icon: <HeartHandshake className="w-8 h-8 text-[#ccff00]" />,
      color: "#ccff00",
      textColorClass: "text-[#ccff00]"
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background cyber grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,242,255,0.03),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full border border-[#ccff00]/30 text-[#ccff00] text-sm font-medium mb-6 uppercase tracking-wider">
            NUESTRO PROCESO
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            CÓMO <span className="text-[#00f2ff]">TRABAJAMOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f2ff] to-[#ccff00] mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20">
          {/* Central Vertical Line (hidden on small screens, centered on large screens) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px]" />

          {/* Glowing active scroll indicator inside the line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#00f2ff] via-[#ccff00] to-[#00f2ff] -translate-x-[1px] origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">

                  {/* Timeline Node/Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
                      className="w-5 h-5 rounded-full bg-[#111] border-2 flex items-center justify-center"
                      style={{ borderColor: step.color, boxShadow: `0 0 15px ${step.color}80` }}
                    >
                      {/* Innermost pulsing dot */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Step Card Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -60 : 60,
                        y: 20,
                        rotate: isEven ? -2 : 2
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.1
                      }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="relative p-8 rounded-3xl bg-[#111]/80 backdrop-blur-md border border-white/5 hover:border-white/15 transition-all shadow-2xl overflow-hidden group cursor-default"
                    >
                      {/* Robotic/HUD border corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderColor: step.color }} />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderColor: step.color }} />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderColor: step.color }} />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ borderColor: step.color }} />

                      {/* Glowing back-light */}
                      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Content structure */}
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'} gap-4`}>
                        {/* Icon and Digital Number */}
                        <div className="flex items-center gap-4">
                          {isEven ? (
                            <>
                              <span className={`text-4xl font-black ${step.textColorClass} font-mono tracking-widest`}>
                                {step.number}
                              </span>
                              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: `0 0 10px ${step.color}20` }}>
                                {step.icon}
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: `0 0 10px ${step.color}20` }}>
                                {step.icon}
                              </div>
                              <span className={`text-4xl font-black ${step.textColorClass} font-mono tracking-widest`}>
                                {step.number}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-gray-400 text-base leading-relaxed ${isEven ? 'md:text-right' : 'text-left'} group-hover:text-gray-300 transition-colors`}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PricingTable Component ---
const PricingTable = () => {
  const plans = [
    {
      id: "formateo-precio",
      name: 'Combo "Computador Como Nuevo"',
      price: "$90.000",
      description: "La solución definitiva para que tu equipo recupere su velocidad original.",
      features: [
        { title: "Formateo y Limpieza Profunda", desc: "Eliminamos virus, archivos basura y errores del sistema para un inicio desde cero." },
        { title: "Instalación del Sistema Operativo", desc: "Instalamos la versión más estable y reciente de Windows, configurada para el mejor rendimiento." },
        { title: "Paquete de Drivers Inteligente", desc: "Actualizamos todos los controladores (audio, video, Wi-Fi) para que tus periféricos funcionen sin errores." },
        { title: "Optimización de Velocidad Pro", desc: "Ajustamos los procesos internos del PC para que encienda en segundos y no se trabe al abrir programas." },
        { title: "Microsoft Office y Programas", desc: "Dejamos listo Word, Excel, PowerPoint y las aplicaciones que necesites para tu día a día." },
        { title: "Garantía de Confianza JuanTech", desc: "Cuentas con 15 días de soporte técnico post-servicio para resolver cualquier duda o ajuste adicional." }
      ],
      color: "border-[#00f2ff] glow-cyan",
      button: "bg-[#00f2ff] text-black",
      badges: [
        { icon: <ShieldCheck className="w-4 h-4 text-[#00f2ff]" />, text: "Garantía de 15 días" },
        { icon: <Zap className="w-4 h-4 text-[#00f2ff]" />, text: "Atención Rápida" },
        { icon: <ShieldCheck className="w-4 h-4 text-[#00f2ff]" />, text: "Datos 100% Seguros" }
      ]
    },
    {
      id: "webpro-precio",
      name: 'Combo "Mi Negocio en Internet" (Landing Page)',
      price: "$350.000",
      description: "Tu marca disponible en Google las 24 horas del día.",
      features: [
        { title: "Landing Page de Alto Impacto", desc: "Diseñamos una página moderna y profesional enfocada en que tus clientes te contacten de inmediato." },
        { title: 'Diseño "Multi-Pantalla" (Responsive)', desc: "Tu sitio se verá perfecto y cargará ultra rápido en celulares, tablets y computadores." },
        { title: "Posicionamiento SEO Local", desc: "Configuramos tu negocio para que aparezca en Google Maps y los vecinos de tu zona te encuentren primero." },
        { title: "Todo Incluido (Hosting y Dominio)", desc: "Nos encargamos de tu dirección web (.com) y espacio en la nube por un año; cero preocupaciones técnicas." },
        { title: 'Botón de WhatsApp "Oro"', desc: "Conectamos tu web a tu WhatsApp Business para que recibas pedidos y consultas al instante." },
        { title: "Acompañamiento JuanTech", desc: "Incluimos 1 mes de mantenimiento y capacitación para gestionar tus nuevos clientes." }
      ],
      color: "border-[#ccff00] glow-lime",
      button: "bg-[#ccff00] text-black",
      badges: [
        { icon: <ShieldCheck className="w-4 h-4 text-[#ccff00]" />, text: "Soporte de 1 mes" },
        { icon: <Zap className="w-4 h-4 text-[#ccff00]" />, text: "Servidores Rápidos" },
        { icon: <HeartHandshake className="w-4 h-4 text-[#ccff00]" />, text: "Acompañamiento" }
      ]
    }
  ];

  return (
    <section id="precios" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PLANES DE <span className="text-[#ccff00]">ÉXITO</span>
          </h2>
          <p className="text-gray-400">Selecciona el servicio que impulsará tu tecnología.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              id={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative p-8 md:p-12 rounded-3xl border-2 ${plan.color} transition-all duration-500 flex flex-col bg-[#111] scroll-mt-24 shadow-2xl`}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{plan.price}</span>
                </div>
                <p className="text-gray-400 text-xl leading-relaxed">{plan.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-10">
                {plan.features.map((feature: any, i: number) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ccff00]/10 flex items-center justify-center mt-1">
                      <Check className="w-5 h-5 text-[#ccff00]" />
                    </div>
                    <div>
                      <p className="text-[#00f2ff] font-black text-lg uppercase tracking-tight mb-1">
                        {typeof feature === 'string' ? feature : feature.title}
                      </p>
                      {feature.desc && (
                        <p className="text-gray-400 text-base leading-relaxed">
                          {feature.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-6 mt-2">
                {plan.badges.map((badge: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                    {badge.icon}
                    {badge.text}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className={`w-full py-5 rounded-2xl font-black text-center text-xl transition-all duration-300 ${plan.button} hover:scale-105 shadow-xl`}
              >
                Solicitar Servicio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ContactForm Component ---
const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // Nota para el usuario: Debes configurar tus propios IDs de EmailJS aquí
    // Por ahora, mostraremos un éxito simulado si no hay claves
    emailjs.sendForm('service_or7glb8', 'template_vg59wyk', form.current, 'OglbpUuVnZu0BjLXF')
      .then(() => {
        setStatus('success');
        form.current?.reset();
      }, (error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            CUÉNTANOS TU <span className="text-[#00f2ff]">PROYECTO</span>
          </h2>
          <p className="text-gray-400 text-lg">Elige la opción que prefieras para comunicarte con nosotros.</p>
        </div>

        {/* WhatsApp Option */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-col items-center">
          <p className="text-[#ccff00] mb-6 font-bold text-lg text-center uppercase tracking-widest">Opción 1: Respuesta Inmediata</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/573223471364"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] transition-all"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.13.67 4.103 1.81 5.73L2.03 23l5.44-1.424A9.92 9.92 0 0 0 12.004 22c5.49 0 9.986-4.5 9.986-10S17.49 2 12.004 2zm0 18.25a8.21 8.21 0 0 1-4.177-1.135l-.3-.178-3.1 3.1.812-3.118-.196-.312a8.2 8.2 0 0 1-1.258-4.38c0-4.542 3.69-8.234 8.219-8.234 4.53 0 8.22 3.692 8.22 8.234 0 4.542-3.69 8.234-8.22 8.234zM16.48 14.65c-.244-.122-1.445-.713-1.67-.795-.223-.08-.386-.122-.548.122-.162.245-.63.795-.772.957-.14.163-.284.183-.528.061a6.65 6.65 0 0 1-1.956-1.206 7.34 7.34 0 0 1-1.353-1.684c-.244-.407-.026-.628.178-.83l.534-.622c.162-.244.203-.408.305-.672.102-.265.05-.49-.025-.673-.075-.183-.63-1.527-.864-2.087-.228-.548-.48-.47-.66-.48h-.56a1.079 1.079 0 0 0-.783.366c-.264.285-1.006 1.002-1.006 2.443 0 1.44 1.047 2.839 1.19 3.033.14.193 2.06 3.167 4.99 4.43.697.3 1.242.48 1.666.615.7.223 1.338.192 1.843.117.562-.08 1.446-.59 1.65-1.16.203-.57.203-1.058.142-1.16-.06-.1-.223-.163-.467-.285z" />
            </svg>
            Contactar por WhatsApp
          </motion.a>
        </div>

        {/* Separator */}

        <div className="flex items-center gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <span className="text-[#ccff00] fmb-6 font-bold text-lg text-center uppercase tracking-widest px-2">Opción 2: Déjanos tus datos en el formulario; un asesor te brindará una respuesta oportuna.</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-3xl rounded-full" />

          <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
            {/* Form fields remain the same */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#00f2ff]" /> Nombre Completo
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#00f2ff] outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00f2ff]" /> Correo Electrónico
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#00f2ff] outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ccff00]" /> Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#ccff00] outline-none transition-all"
                  placeholder="+57 300 000 0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#ccff00]" /> Servicio de Interés
                </label>
                <select
                  name="service_type"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#ccff00] outline-none transition-all appearance-none"
                >
                  <option value="soporte">Soporte & Sistemas</option>
                  <option value="web">Desarrollo Web Pro</option>
                  <option value="consultoria">Consultoría IT</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00f2ff]" /> Detalles del Requerimiento
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#00f2ff] outline-none transition-all resize-none"
                placeholder="Cuéntanos más sobre lo que necesitas..."
              />
            </div>

            <input type="hidden" name="to_email" value="administrator.juantech@gmail.com" />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              type="submit"
              className="w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-to-r from-[#00f2ff] to-[#ccff00] text-black"
            >
              {status === 'sending' ? 'Enviando...' : (
                <>Enviar Formulario <Send className="w-5 h-5" /></>
              )}
            </motion.button>

            {status === 'error' && (
              <p className="text-red-500 text-center text-sm font-bold">Ocurrió un error. Intenta de nuevo.</p>
            )}
          </form>
        </motion.div>

        {/* Location / Map Block */}
        <motion.div
          id="ubicacion"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 scroll-mt-24"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#00f2ff]/10 border border-[#00f2ff]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#00f2ff] fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Nuestra Ubicación</p>
              <p className="text-white font-bold text-lg">Reserva Del Portal — Torre 4, Apto 103</p>
              <p className="text-gray-400 text-sm">Bogotá, Colombia 🇨🇴</p>
            </div>
          </div>

          {/* Map iframe */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ height: '360px' }}>
            {/* Neon glow corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f2ff] z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f2ff] z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ccff00] z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ccff00] z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3526329800748!2d-74.12006412432392!3d4.53035594310931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa218d6805395%3A0xdcfca4202d812e1a!2sReserva%20Del%20Portal!5e0!3m2!1ses!2sco!4v1779743524131!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación JuanTech - Reserva Del Portal, Torre 4 Apto 103"
            />
          </div>
        </motion.div>
      </div>

      {/* Pop-up de Éxito */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#111] border border-[#ccff00]/30 p-8 md:p-12 rounded-3xl max-w-lg w-full text-center shadow-[0_0_50px_rgba(204,255,0,0.1)]"
            >
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">¡MENSAJE RECIBIDO!</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Gracias por confiar en <span className="text-[#00f2ff] font-bold">JuanTech</span>. En la brevedad de lo posible nos comunicaremos contigo para potenciar tu proyecto. <br /><br />
                <span className="text-white font-medium">¡Que tengas un excelente día!</span>
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:scale-105 transition-all"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-[#050505] py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
          <img src={logo} alt="JuanTech" className="w-full h-full object-contain" />
        </div>
        <span className="text-2xl font-black text-white tracking-tighter">JUAN<span className="text-[#00f2ff]">TECH</span></span>
        <p className="text-gray-500 text-sm font-medium">Bogotá, Colombia 🇨🇴</p>
      </div>

      <div className="flex flex-col gap-6 text-gray-400">
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00f2ff]/20 transition-all">
            <Mail className="w-5 h-5 group-hover:text-[#00f2ff]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">Correo</p>
            <a href="mailto:administrator.juantech@gmail.com" className="text-white hover:text-[#00f2ff] transition-colors">
              administrator.juantech@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ccff00]/20 transition-all">
            <Phone className="w-5 h-5 group-hover:text-[#ccff00]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">WhatsApp / Teléfono</p>
            <a href="https://wa.me/573223471364" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ccff00] transition-colors">
              +57 322 347 1364
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00f2ff]/20 transition-all">
            <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-[#00f2ff] transition-colors" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">Facebook</p>
            <a href="https://facebook.com/juantech.com.co" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00f2ff] transition-colors">
              facebook.com/juantech.com.co
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4 border-t md:border-t-0 border-white/5 pt-8 md:pt-0 w-full md:w-auto">
        <p className="text-[#00f2ff] font-bold text-sm tracking-wide">JuanTech - Soluciones Tecnológicas Profesionales</p>
        <p className="text-gray-600 text-xs text-center md:text-right">
          © 2026 JuanTech.com.co. <br />
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

// --- FAQ Component ---
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cuánto tiempo tardas?",
      a: "Para servicios de Computador (Formateo/Optimización) tardamos entre 3 y 5 horas. Para proyectos Web (Landing Page), el tiempo de entrega es de entre 5 y 7 días hábiles."
    },
    {
      q: "¿Tengo que pagar todo por adelantado?",
      a: "Para servicios Web pedimos el 50% al inicio para asegurar tu dominio/hosting y el 50% al finalizar. Para mantenimiento de equipos, pagas al recibir tu equipo totalmente listo."
    },
    {
      q: "¿Haces domicilios en Bogotá?",
      a: "¡Claro que sí! Cuéntame en qué zona de la ciudad estás y coordinamos la visita para recoger o trabajar en tu equipo."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PREGUNTAS <span className="text-[#00f2ff]">FRECUENTES</span>
          </h2>
          <p className="text-gray-400">Resolvemos tus dudas en segundos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-[#111]">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-[#ccff00] transition-transform ${activeIndex === i ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Floating WhatsApp Button Component ---
const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      {/* Pulse ring matching the pill shape */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

      <motion.a
        href="https://wa.me/573223471364"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] transition-all duration-300 group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.13.67 4.103 1.81 5.73L2.03 23l5.44-1.424A9.92 9.92 0 0 0 12.004 22c5.49 0 9.986-4.5 9.986-10S17.49 2 12.004 2zm0 18.25a8.21 8.21 0 0 1-4.177-1.135l-.3-.178-3.1 3.1.812-3.118-.196-.312a8.2 8.2 0 0 1-1.258-4.38c0-4.542 3.69-8.234 8.219-8.234 4.53 0 8.22 3.692 8.22 8.234 0 4.542-3.69 8.234-8.22 8.234zM16.48 14.65c-.244-.122-1.445-.713-1.67-.795-.223-.08-.386-.122-.548.122-.162.245-.63.795-.772.957-.14.163-.284.183-.528.061a6.65 6.65 0 0 1-1.956-1.206 7.34 7.34 0 0 1-1.353-1.684c-.244-.407-.026-.628.178-.83l.534-.622c.162-.244.203-.408.305-.672.102-.265.05-.49-.025-.673-.075-.183-.63-1.527-.864-2.087-.228-.548-.48-.47-.66-.48h-.56a1.079 1.079 0 0 0-.783.366c-.264.285-1.006 1.002-1.006 2.443 0 1.44 1.047 2.839 1.19 3.033.14.193 2.06 3.167 4.99 4.43.697.3 1.242.48 1.666.615.7.223 1.338.192 1.843.117.562-.08 1.446-.59 1.65-1.16.203-.57.203-1.058.142-1.16-.06-.1-.223-.163-.467-.285z" />
        </svg>
        <span className="font-extrabold text-base tracking-wide pr-1">WhatsApp</span>

        {/* Tooltip on hover */}
        <span className="absolute left-full ml-4 px-4 py-2 bg-[#111] text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 whitespace-nowrap pointer-events-none shadow-2xl">
          ¿En qué te puedo ayudar? 💬
        </span>
      </motion.a>
    </div>
  );
};

// --- Particle Trail & Cursor Component ---
const ParticleTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const mouse = { x: -100, y: -100 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;

      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 3 + 1; // tamaño entre 1 y 4
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        // Alternar entre cyan y lima
        this.color = Math.random() > 0.5 ? 'rgba(0, 242, 255, 0.8)' : 'rgba(204, 255, 0, 0.8)';
        this.life = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.05;
        this.life -= 0.02;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color.replace('0.8', Math.max(0, this.life).toString());
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Generar 2 partículas por cada movimiento de ratón
      for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle());
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.1 || particlesArray[i].life <= 0) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] hidden md:block"
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.4)' : 'rgba(0, 242, 255, 0.4)',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className="w-full h-full rounded-full blur-[8px]" />
      </motion.div>
    </>
  );
};

// --- GlitchText Component ---
const GlitchText = ({ text, className = "", textClassName = "", autoGlitch = false }: { text: string, className?: string, textClassName?: string, autoGlitch?: boolean }) => {
  const [isGlitching, setIsGlitching] = useState(autoGlitch);

  useEffect(() => {
    if (autoGlitch) {
      setIsGlitching(true);

      const t1 = setTimeout(() => setIsGlitching(false), 800);
      const t2 = setTimeout(() => setIsGlitching(true), 1500);
      const t3 = setTimeout(() => setIsGlitching(false), 2100);
      const t4 = setTimeout(() => setIsGlitching(true), 3200);
      const t5 = setTimeout(() => setIsGlitching(false), 3600);
      const t6 = setTimeout(() => setIsGlitching(true), 4500);
      const t7 = setTimeout(() => setIsGlitching(false), 5000);

      return () => {
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
        clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7);
      };
    }
  }, [autoGlitch]);

  return (
    <span
      className={`glitch-wrapper ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <span className={`glitch-text ${isGlitching ? 'is-glitching' : ''} ${textClassName}`} data-text={text}>
        {text}
      </span>
    </span>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ccff00] selection:text-black font-sans cursor-default">
      <ParticleTrail />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <BentoServices />
        <Timeline />
        <PricingTable />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
