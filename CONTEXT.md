# JuanTech - Contexto del Proyecto y Guía de Desarrollo

Este archivo sirve como la **fuente única de verdad** para que cualquier Modelo de Lenguaje (LLM) o asistente de Inteligencia Artificial entienda la arquitectura, el diseño, la identidad y las reglas técnicas de **JuanTech**. 

---

## 🚀 1. Identidad del Proyecto
* **Nombre de la Marca:** JUAN**TECH**
* **Ubicación:** Bogotá, Colombia 🇨🇴
* **Propósito:** Ofrecer servicio técnico profesional de computadores y soluciones web de alto impacto a negocios y profesionales de forma directa, ágil y transparente.
* **Tono de Comunicación:** Cercano, profesional, directo y amigable. **Sin tecnicismos innecesarios (evitar hablar "en chino")**, enfocado en el valor real y la sencillez para el cliente.

---

## 🎨 2. Sistema de Diseño (Aesthetics & UI)
La interfaz es oscura, futurista y de aspecto premium, inspirada en las últimas tendencias de diseño digital (Glassmorphism, Neon/Cyberpunk y micro-animaciones).

### Paleta de Colores
* **Fondo Principal (Oscuro):** `#0a0a0a` (Fondo general), `#111111` (Tarjetas y componentes secundarios), `#050505` (Footer y FAQ).
* **Acentuación / Neón 1 (Cyan):** `#00f2ff` — Representa tecnología, soporte técnico profesional y modernidad.
* **Acentuación / Neón 2 (Lime/Yellow):** `#ccff00` — Representa éxito comercial, dinamismo e impulso.
* **Bordes / Separadores:** `border-white/5` o `border-white/10` para un efecto limpio y sutil.
* **Selección de texto:** Fondo `#ccff00` con texto `#000000`.

### Estilos Clave
* **Efectos de Brillo (Glows):** Sombras difusas y sutiles alrededor de elementos clave (`glow-cyan`, `glow-lime`).
* **Degradados:** Combinación suave desde `#00f2ff` hasta `#ccff00`.
* **Interactividad:** Efectos *hover* dinámicos con escala suave (`scale-105`) y transiciones de color de borde.

---

## ⚙️ 3. Pila Tecnológica (Tech Stack)
* **Framework:** React con Vite y TypeScript (`tsconfig.json`).
* **Estilos:** Tailwind CSS integrado directamente en las clases de los componentes.
* **Iconografía:** Lucide React (`lucide-react`).
* **Animaciones:** Framer Motion (`framer-motion`), utilizando transiciones suaves y `AnimatePresence` para menús y carruseles dinámicos.
* **Envíos / Correos:** EmailJS (`@emailjs/browser`).

---

## 📦 4. Servicios y Precios (Modelo de Negocio)

### A. Combo "Computador Como Nuevo"
* **ID Técnico:** `servicio-formateo` / `formateo-precio`
* **Precio:** `$90.000 COP`
* **Descripción:** Solución de formateo, limpieza profunda física y de software, instalación limpia del sistema operativo (Windows reciente), suite completa de Office y configuración de drivers para restablecer la velocidad original del PC. Cuentas con 15 días de soporte post-servicio.

### B. Combo "Mi Negocio en Internet" (Landing Page)
* **ID Técnico:** `servicio-webpro` / `webpro-precio`
* **Precio:** `$550.000 COP`
* **Descripción:** Desarrollo de una landing page premium, ultra-rápida, con diseño multi-pantalla responsivo, optimización SEO para buscadores locales, configuración de dominio (`.com`) y hosting por 1 año, botón integrado a WhatsApp y 1 mes de soporte post-entrega.

---

## 🛠️ 5. Arquitectura del Código (`src/App.tsx`)
El archivo principal contiene una estructura modular por componentes autocontenidos:

1. **`Header`**: Menú de navegación fijo con efecto backdrop-blur, dropdown animado para los servicios y menú responsive lateral para dispositivos móviles.
2. **`Hero`**: Sección principal con esferas difusas de color en el fondo, títulos grandes de alto impacto y llamadas a la acción directas.
3. **`WhyUs`**: Cuadrícula dinámica que muestra los pilares de valor (Sin tecnicismos, Seguridad, Rapidez, Soporte).
4. **`BentoServices`**: Carrusel interactivo y responsivo gobernado por eventos personalizados (`changeService`) para cambiar de manera fluida entre los dos servicios estrella.
5. **`PricingTable`**: Tabla de precios detallada con bordes de color neón interactivos y desglose de características por servicio.
6. **`FAQ`**: Acordeón dinámico con preguntas frecuentes (Tiempos de entrega, políticas de pago y cobertura de domicilios).
7. **`ContactForm`**: Formulario interactivo conectado a EmailJS con validación y ventana emergente (*modal*) de agradecimiento.
8. **`Footer`**: Datos oficiales de contacto, logo y redes de comunicación directa.
9. **`FloatingWhatsApp`**: Botón flotante persistente en forma de píldora en la parte inferior izquierda con el logo oficial, el texto "WhatsApp", una sutil animación de pulso y un tooltip inteligente en hover.

---

## 🔐 6. Datos de Contacto e Integraciones

### Enlaces de Mensajería y Soporte:
* **Email de la administración:** `administrator@juantech.com.co`
* **Enlace directo a WhatsApp:** `https://wa.me/573223471364` (Número: `+57 322 347 1364`)
* **Página oficial de Facebook:** `https://facebook.com/juantech.com.co`

### Configuración de EmailJS:
* **Service ID:** `service_or7glb8`
* **Template ID:** `template_vg59wyk`
* **Public Key:** `OglbpUuVnZu0BjLXF`
* **Campo oculto del destinatario:** `to_email` = `administrator@juantech.com.co`

---

## 📌 7. Instrucciones para la Inteligencia Artificial (LLM Instructions)
Cuando edites o agregues componentes a este proyecto, por favor sigue rigurosamente estas pautas:
1. **Mantén el Estilo de Diseño:** Usa fondos oscuros (`#0a0a0a`, `#111`), bordes transparentes y acentos con los colores exactos `#ccff00` y `#00f2ff`.
2. **Animaciones Fluidas:** No uses transiciones toscas. Utiliza `framer-motion` o transiciones CSS con `duration-300` o superiores.
3. **Responsividad:** Cada sección debe verse impecable desde pantallas de teléfonos móviles pequeños (320px) hasta monitores grandes.
4. **Textos Claros y Directos:** Si creas nuevos copies o descripciones, mantén el tono cercano, empático y orientado a la solución de problemas cotidianos de tecnología.
5. **Preserva las Integraciones:** No alteres las llaves de EmailJS ni los enlaces de contacto a menos que se te solicite explícitamente.
