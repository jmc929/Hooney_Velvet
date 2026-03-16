// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Hooney Velvet - Lencería y Placer de Lujo",
  description: "Descubre un universo de elegancia, sensualidad y placer. Hooney Velvet ofrece lencería exclusiva, juguetes de lujo y experiencias íntimas únicas.",
  language: "es",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "HOONEY VELVET",
  items: [
    { label: "Colecciones", href: "#works" },
    { label: "Nosotros", href: "#about" },
    { label: "Experiencias", href: "#services" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "HOONEY VELVET",
  subtitle: "El Arte del Placer",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Lencería | Juguetes | Experiencias",
  copyright: "© 2025 Hooney Velvet",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Creemos que la sensualidad es un arte,",
  titleLine2: "y cada persona merece sentirse extraordinaria.",
  description: "Hooney Velvet nació de la pasión por crear experiencias que despierten los sentidos. Seleccionamos cuidadosamente cada pieza de nuestra colección, desde la lencería más exquisita hasta los juguetes más sofisticados, para ofrecerte solo lo mejor del mundo del placer.",
  image1: "/about-1.jpg",
  image1Alt: "Elegancia y sofisticación",
  image2: "/about-2.jpg",
  image2Alt: "Lujo en cada detalle",
  authorImage: "/photographer.jpg",
  authorName: "Isabella Monroe",
  authorBio: "Fundadora y curadora de experiencias. Apasionada por el lujo, el diseño y el empoderamiento femenino.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Colección Exclusiva",
  subtitle: "Piezas seleccionadas para despertar tus sentidos.",
  projects: [
    { 
      id: 1, 
      title: "Encaje Negro", 
      category: "Lencería", 
      image: "/work-1.jpg" 
    },
    { 
      id: 2, 
      title: "Seda Dorada", 
      category: "Sleepwear", 
      image: "/work-2.jpg" 
    },
    { 
      id: 3, 
      title: "Pasión Burdeos", 
      category: "Colección Premium", 
      image: "/work-3.jpg" 
    },
    { 
      id: 4, 
      title: "Esencias Íntimas", 
      category: "Bienestar", 
      image: "/work-4.jpg" 
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Nuestras Experiencias",
  subtitle: "Cada visita es una oportunidad de descubrir algo extraordinario.",
  services: [
    { 
      id: "01", 
      title: "Asesoría Personal", 
      description: "Nuestras expertas te guiarán para encontrar las piezas perfectas que realcen tu belleza única.", 
      image: "/service-1.jpg" 
    },
    { 
      id: "02", 
      title: "Envoltura de Regalos", 
      description: "Empaque de lujo para sorprender a esa persona especial con un detalle inolvidable.", 
      image: "/service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Talleres para Parejas", 
      description: "Experiencias íntimas diseñadas para fortalecer la conexión y explorar nuevos horizontes juntos.", 
      image: "/service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Fitting Privado", 
      description: "Salón exclusivo donde podrás probarte con total privacidad y comodidad.", 
      image: "/service-4.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Historias de Placer",
  testimonials: [
    { 
      id: 1, 
      name: "Valentina R.", 
      title: "Cliente VIP", 
      quote: "Hooney Velvet transformó mi relación con mi cuerpo. La calidad de sus productos y la atención personalizada son incomparables.", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Carmen S.", 
      title: "Miembro del Club", 
      quote: "Cada visita es una experiencia de lujo. Me encanta cómo hacen que sentirse sexy sea tan natural y elegante.", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Lucía & Marcos", 
      title: "Pareja Exploradora", 
      quote: "Los talleres para parejas nos acercaron de una manera que nunca imaginamos. Hooney Velvet es puro arte.", 
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Membresías Exclusivas",
  subtitle: "Únete a nuestro círculo íntimo y disfruta de beneficios únicos.",
  ctaButtonText: "Unirme Ahora",
  plans: [
    { 
      id: 1, 
      name: "Velvet Rose", 
      price: 49, 
      unit: "mes", 
      featured: false, 
      features: [
        "10% de descuento en todas las compras",
        "Acceso a colecciones exclusivas",
        "Newsletter mensual con consejos de seducción",
        "Envío gratuito en pedidos +100€"
      ] 
    },
    { 
      id: 2, 
      name: "Velvet Gold", 
      price: 99, 
      unit: "mes", 
      featured: true, 
      features: [
        "20% de descuento permanente",
        "Acceso prioritario a nuevas colecciones",
        "Asesoría personal mensual",
        "Regalo sorpresa trimestral",
        "Invitación a eventos privados"
      ] 
    },
    { 
      id: 3, 
      name: "Velvet Diamond", 
      price: 199, 
      unit: "mes", 
      featured: false, 
      features: [
        "30% de descuento VIP",
        "Acceso ilimitado al fitting privado",
        "Personal shopper dedicado",
        "Caja mensual curada",
        "Experiencias exclusivas para parejas"
      ] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Preguntas Frecuentes",
  faqs: [
    { 
      question: "¿Cómo garantizan la discreción en los envíos?", 
      answer: "Todos nuestros envíos se realizan en paquetes completamente neutros, sin logos ni referencias al contenido. Tu privacidad es nuestra prioridad absoluta." 
    },
    { 
      question: "¿Puedo devolver productos si no estoy satisfecha?", 
      answer: "Por higiene, la lencería y juguetes íntimos no tienen devolución. Sin embargo, si hay algún defecto de fábrica, te ofrecemos cambio inmediato o reembolso completo." 
    },
    { 
      question: "¿Ofrecen tallas grandes?", 
      answer: "Absolutamente. Creemos que la belleza no tiene talla. Nuestras colecciones van desde la XS hasta la 4XL, con opciones de ajuste personalizado." 
    },
    { 
      question: "¿Cómo funciona la asesoría personal?", 
      answer: "Puedes agendar una cita en nuestra boutique o recibir asesoría virtual. Nuestras expertas te ayudarán a encontrar las piezas perfectas según tu estilo y preferencias." 
    },
    { 
      question: "¿Los talleres para parejas son presenciales?", 
      answer: "Ofrecemos ambas modalidades. Los talleres presenciales se realizan en nuestra suite privada, y también contamos con versiones online para que disfrutes desde casa." 
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Diario de Seducción",
  subtitle: "Descubre secretos para despertar tu sensualidad.",
  allPostsLabel: "Ver Todo",
  readMoreLabel: "Leer Más",
  readTimePrefix: "Lectura: ",
  posts: [
    { 
      id: 1, 
      title: "El Arte de la Lencería: Más Allá de lo Visual", 
      excerpt: "Descubre cómo la lencería adecuada puede transformar no solo tu apariencia, sino tu confianza y la forma en que te relacionas con tu cuerpo.", 
      readTime: "5 min", 
      date: "15 Feb, 2025", 
      image: "/blog-1.jpg", 
      category: "Bienestar" 
    },
    { 
      id: 2, 
      title: "Rituales de Autocuidado para Reconectar Contigo", 
      excerpt: "Aprende a crear momentos íntimos de placer personal que nutran tu bienestar emocional y físico. La importancia de priorizarte.", 
      readTime: "7 min", 
      date: "10 Feb, 2025", 
      image: "/blog-2.jpg", 
      category: "Self-Care" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Hablemos de Placer",
  subtitle: "Estamos aquí para hacer realidad tus deseos más íntimos.",
  nameLabel: "Nombre *",
  emailLabel: "Email *",
  projectTypeLabel: "Motivo de Contacto",
  projectTypePlaceholder: "Selecciona...",
  projectTypeOptions: [
    { value: "asesoria", label: "Asesoría Personal" },
    { value: "membresia", label: "Información de Membresía" },
    { value: "talleres", label: "Talleres para Parejas" },
    { value: "eventos", label: "Eventos Privados" },
    { value: "otro", label: "Otro" },
  ],
  messageLabel: "Mensaje",
  submitButtonText: "Enviar Mensaje",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Despierta Tus Sentidos",
  marqueeHighlightChars: ["S"],
  navLinks1: [
    { label: "Inicio", href: "#hero" },
    { label: "Colecciones", href: "#works" },
    { label: "Nosotros", href: "#about" },
    { label: "Experiencias", href: "#services" },
  ],
  navLinks2: [
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "Pinterest", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  ctaText: "Contáctanos",
  ctaHref: "#contact",
  copyright: "© 2025 Hooney Velvet. Todos los derechos reservados.",
  tagline: "El arte del placer, en cada detalle.",
};
