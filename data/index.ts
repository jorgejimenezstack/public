export const navItems = [
  { name: "Nosotros", link: "#about" },
  { name: "Projectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizamos las ideas de los clientes ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Digitalizando ideas ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Stacks",
    description: "Aprendemos y mejoramos cada dia",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Somos apasionados de la tecnologia.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Construyendo Soluciones Digitales de Alto Impacto",
    description: "Potenciado con Typescript",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Quieres empezar un proyecto?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stack-AI saas ",
    des: "Explora nuestra plataforma de herramientas con IA y maximiza tu tiempo.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://stack-ai.app",
  },
  {
    id: 2,
    title: "Plura - Saas Reservaciones",
    des: "Sistema de reservaciones de citas, landing page + estadisticas + ajenda.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Dashboard Empresarial - Next JS",
    des: "Dashboards empresariales con Next.js para ofrecerte una gestión eficiente y en tiempo real de tu negocio. Potencia tu toma de decisiones con nuestras soluciones rápidas, escalables y adaptadas a tus necesidades.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "ALPHATECH - Landing Astro JS",
    des: " Landing Pages de alto rendimiento con Astro.js. Optimiza tu presencia online con nuestras soluciones rápidas, eficientes y diseñadas para captar la atención de tus usuarios desde el primer momento.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Increíble servicio de desarrollo web. ALPAHETCH transformó nuestra visión en una realidad digital impactante y funcional. ¡Altamente recomendados!.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "ALPAHETCH ha sido nuestro socio clave en el desarrollo web. Su enfoque meticuloso y orientado al cliente nos ha permitido no solo alcanzar, sino superar nuestros objetivos digitales. Desde la fase inicial de consultoría hasta la implementación final, su equipo ha mostrado un nivel excepcional de profesionalismo y conocimiento técnico. Estamos realmente impresionados con el diseño intuitivo y la funcionalidad de nuestro nuevo sitio, que refleja perfectamente nuestra marca y valores.",
    name: "Michael Johnson",
    title: "Director of ALPHATECH Technologies",
  },
  {
    quote:
      "Trabajar con ALPHATECH ha sido una experiencia increíble. Su equipo de desarrollo web superó nuestras expectativas, creando un sitio web que es tanto funcional como visualmente impresionante. Recomiendo encarecidamente sus servicios.",
    name: "Laura M.",
    title: "Director de AlphaStream",
  },
  {
    quote:
      "La colaboración con ALPHATECH ha sido fundamental para nuestro éxito. Su dominio en backend y frontend, junto con su sólido servicio de alojamiento web, nos ha proporcionado soluciones robustas y confiables.",
    name: "Juan Pérez",
    title: "Director de Tecnología en Empresa Corporativa",
  },
  {
    quote:
      "ALPHATECH ha transformado nuestra visión en realidad digital. Su expertise en desarrollo web, SaaS y inteligencia artificial nos ha permitido escalar nuestro producto de manera excepcional.",
    name: "María Sánchez",
    title: "CEO Startup",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Digital Ocean",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo Backend & Frontend",
    desc: "Ofrecemos soluciones completas de desarrollo web, especializándonos en frontend y backend para crear experiencias digitales innovadoras y funcionales",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desarrollo Web - SAAS",
    desc: "Proporcionamos soluciones SaaS eficientes y escalables, diseñadas para optimizar tus procesos y mejorar la productividad de tu negocio..",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Transformación Digital",
    desc: "Impulsa tu negocio al siguiente nivel con nuestras estrategias de transformación digital adaptadas a tus necesidades.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Ciberseguridad Integral",
    desc: "Protege tu negocio con nuestras soluciones avanzadas de ciberseguridad, diseñadas para salvaguardar tus datos y sistemas.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
