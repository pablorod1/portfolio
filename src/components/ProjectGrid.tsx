import projectsData from "../lib/projects.json";
const { projects } = projectsData;
import React from "react";
import { Icons } from "../icons/Icons";

// Utilidad para obtener proyectos o fallback vacío
const getProject = (idx: number) =>
  projects[idx] || {
    title: "",
    description: "",
    image: "",
    href: "#",
    technologies: [],
  };

const BentoProjectCard: React.FC<{
  project: (typeof projects)[0];
  className?: string;
  highlight?: boolean;
}> = ({ project, className = "", highlight = false }) => (
  <a
    href={project.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      relative flex flex-col overflow-hidden rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800 h-full
      group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white/90 dark:bg-neutral-900/90
      ${highlight ? "row-span-2 col-span-2" : ""}
      ${className}
    `}
  >
    <div className="relative w-full h-40 md:h-48 lg:h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {highlight && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-1 rounded-full font-bold shadow-lg">
          Destacado
        </span>
      )}
    </div>
    <div className="flex-1 flex flex-col gap-2 p-5">
      <h3
        className={`font-bold ${
          highlight ? "text-2xl" : "text-lg"
        } text-neutral-900 dark:text-white`}
      >
        {project.title}
      </h3>
      <p
        className={`text-neutral-700 dark:text-neutral-300 ${
          highlight ? "text-base" : "text-sm"
        } line-clamp-3`}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((icon: string, idx: number) => (
          <span
            key={idx}
            className="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg p-1 shadow-sm"
            style={{ minWidth: 28, minHeight: 28 }}
          >
            {Icons[icon] ? (
              Icons[icon]({
                className: "size-5 md:size-6 text-blue-700 dark:text-blue-200",
              })
            ) : (
              <img
                src="/images/nodejs.webp"
                alt=""
                className="size-5 md:size-6"
              />
            )}
          </span>
        ))}
      </div>
    </div>
    <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow font-semibold text-xs md:text-sm hover:scale-105 transition-transform">
        Ver proyecto
      </button>
    </span>
  </a>
);

const ProjectGrid: React.FC = () => {
  // Índices según prioridad:
  // 0: Negoco Cloud (P1)
  // 1: Asesoría MSL (P1)
  // 2: Beenergy (P2)
  // 3: Realty Market (P2)
  // 4: Negoco (P2)
  // 5: PMDB (P2)
  // 6: Angular Template (P3)
  // 7: Angular Dashboard (P3)
  return (
    <section className="w-full py-12 ">
      {/* <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">
          Mis Proyectos
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg max-w-2xl">
          Un vistazo a mis trabajos recientes, presentados en un bento grid
          único y moderno.
        </p>
      </div> */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          grid-rows-3
          gap-6
          auto-rows-[180px]
          md:auto-rows-[220px]
          lg:auto-rows-[200px]
          max-w-7xl
          mx-auto
          px-2
        "
        style={{ gridAutoFlow: "dense" }}
      >
        {/* Prioridad 1: Negoco Cloud (grande, destacado) */}
        <div className="row-span-1 col-span-3">
          <BentoProjectCard project={getProject(0)} highlight />
        </div>
        <div>
          <BentoProjectCard project={getProject(5)} />
        </div>

        {/* Prioridad 2: Beenergy (mediano) */}
        <div className="row-span-1 col-span-1">
          <BentoProjectCard project={getProject(2)} />
        </div>

        {/* Prioridad 1: Asesoría MSL (grande, destacado) */}
        <div className="row-span-1 col-span-3 col-start-2">
          <BentoProjectCard project={getProject(1)} highlight />
        </div>
        {/* Prioridad 2: Realty Market (mediano) */}
        <div className="row-span-1 col-span-1">
          <BentoProjectCard project={getProject(3)} />
        </div>
        {/* Prioridad 2: Negoco (mediano) */}
        <div className="row-span-1 col-span-1">
          <BentoProjectCard project={getProject(4)} />
        </div>
        {/* Prioridad 2: PMDB (mediano) */}

        {/* Prioridad 3: Angular Template (pequeño) */}
        <div className="row-span-1 col-span-1">
          <BentoProjectCard project={getProject(6)} />
        </div>
        {/* Prioridad 3: Angular Dashboard (pequeño) */}
        <div className="row-span-1 col-span-1">
          <BentoProjectCard project={getProject(7)} />
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
