import { useState } from "react";

const experiences = [
  {
    date: "Dic 2024 - Actualidad",
    title: "Desarrollador FullStack en Negoco Cloud",
    description:
      "Responsable del diseño, desarrollo e implementación del CRM de Negoco Cloud, una plataforma SaaS orientada a la gestión integral de clientes y ventas para consultorías energéticas. Lideré la arquitectura fullstack utilizando Next.js, Bun y Turso, integrando soluciones de autenticación con Better Auth y almacenamiento segmentado por cliente mediante Firebase Storage. Automatización del alta de nuevos clientes a través de un CLI personalizado, con creación dinámica de bases de datos y subdominios. También desarrollé la landing page corporativa, optimizada para SEO y rendimiento, siguiendo principios de diseño centrado en conversión.",
  },
  {
    date: "Mayo 2024 - Actualidad",
    title: "Desarrollador Web FrontEnd en SkyT3L",
    description:
      "Responsable del mantenimiento evolutivo y correctivo de la plataforma web corporativa. Implementación de mejoras de rendimiento, accesibilidad y diseño responsive, garantizando una experiencia de usuario optimizada y alineada con los objetivos de negocio.",
  },
  {
    date: "Nov 2024 - Feb 2025",
    title: "Desarrollador FullStack en Beenergy",
    description:
      "Diseño y desarrollo de la landing page y el CRM interno de Beenergy, enfocados en la captación de leads y la gestión operativa de clientes. Stack tecnológico: Next.js, Turso y Firebase, con arquitectura modular orientada a escalabilidad y mantenimiento.",
  },
  {
    date: "Sep 2024 - Nov 2024",
    title: "Desarrollador FrontEnd en Asesoría Mari Carmen Sánchez Lucas",
    description:
      "Diseño e implementación de una plataforma web para la gestión de clientes y servicios, desarrollada con Astro y TailwindCSS. Foco en la creación de una interfaz intuitiva, moderna y adaptada a dispositivos móviles.",
  },
  {
    date: "May 2024 - Sep 2024",
    title: "Desarrollador FrontEnd en Negoco",
    description:
      "Desarrollo de la plataforma web de Negoco para la comparación de servicios de telecomunicaciones y energía. Utilización de Angular en el frontend y Node.js con Express en el backend, bajo un enfoque centrado en rendimiento, modularidad y mantenibilidad.",
  },
  {
    date: "Feb 2024 - Jul 2024",
    title: "Desarrollador Frontend en Prácticas en LucentiaLab",
    description:
      "Diseño y desarrollo de plantillas web reutilizables en Angular con Bootstrap y Angular Material, incluyendo dashboards interactivos. Participación activa en el desarrollo de una aplicación móvil para el Concello de Santiago, colaborando en un entorno ágil multidisciplinar.",
  },
];

const ExperienceItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-sky-200/70">
        {date}
      </time>
      <h3 className="text-xl font-semibold text-yellow-200 mt-2">{title}</h3>
      <p className="mb-4 text-lg font-normal text-gray-200 text-pretty">
        {description}
      </p>
    </>
  );
};

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const VISIBLE_COUNT = 3;
  const hasMore = experiences.length > VISIBLE_COUNT;
  const visibleExperiences = isExpanded
    ? experiences
    : experiences.slice(0, VISIBLE_COUNT);

  return (
    <div className="flex flex-col items-center w-full">
      <ol className="relative border-s border-gray-200 ml-2 lg:w-[778px] w-full animate-size transition-all duration-300">
        {visibleExperiences.map((experience, idx) => (
          <li className="mb-24 ms-4" key={experience.title + idx}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
      {hasMore && (
        <button
          className="mt-2 bg-gray-800 text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}
