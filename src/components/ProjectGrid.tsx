import projectsData from "../lib/projects.json";
const { projects } = projectsData;
import React from "react";
import Glide from "@glidejs/glide";
import { Icons } from "../icons/Icons";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icons: string[];
}

const Project = ({ title, description, image, link, icons }: ProjectProps) => {
  return (
    <a
      href={link}
      className="relative overflow-hidden group rounded-lg flex flex-col h-full w-full shadow-[2px_4px_12px_rgba(0,0,0,0.14)]  hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] transition-all duration-300 cubic-bezier(0,0,0.5,1)"
    >
      <img
        className="w-full h-full rounded-lg object-cover group-hover:blur-[1px] group-hover:brightness-50 transition-all duration-300 cubic-bezier(0,0,0.5,1)"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black/90 to-transparent p-4 pt-8 pb-0 group-hover:pb-6 flex flex-col transition-all duration-300 cubic-bezier(0,0,0.5,1)">
        {/* Título siempre visible */}

        <h3 className="text-white text-lg md:text-3xl font-semibold text-balance mb-4 group-hover:mb-0 transition-all duration-300 cubic-bezier(0,0,0.5,1)">
          {title}
        </h3>

        {/* Información adicional que aparece al hacer hover */}
        <div className="h-transition flex items-center justify-between h-0 overflow-hidden group-hover:h-auto transition-all duration-400 ease-in">
          <p className="text-white text-sm md:text-lg text-balance">
            {description}
          </p>
          <div className="flex items-center gap-6">
            {icons.map((icon, index) => (
              <div key={index} className="w-8 h-8">
                {icon === "nodejs" ? (
                  <img
                    className="size-8"
                    src="/images/nodejs.webp"
                    alt="Node.js"
                  />
                ) : (
                  Icons[icon]
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectGrid: React.FC = () => {
  const glideRef = React.useRef<Glide | null>(null);
  React.useEffect(() => {
    const initializeGlide = () => {
      if (glideRef.current) {
        glideRef.current.destroy();
      }

      const glideInstance = new Glide(".glide", {
        type: "slider",
        perView: 2,
        focusAt: 0,
        startAt: 0,
        gap: 30,
        breakpoints: {
          1024: { perView: 1 },
        },
      });

      requestAnimationFrame(() => {
        glideInstance.mount();
        glideRef.current = glideInstance;
      });
    };

    initializeGlide();

    return () => {
      if (glideRef.current) {
        glideRef.current.destroy();
        glideRef.current = null;
      }
    };
  }, []);

  return (
    <div className="glide group/glide !overflow-visible pe-44">
      <div className="glide__track !overflow-visible" data-glide-el="track">
        <ul className="glide__slides !overflow-visible  !items-stretch md:!py-8">
          {projects.map((project, index) => (
            <li className="glide__slide" key={index}>
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.href}
                icons={project.technologies}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="
        glide__arrow glide__arrow--left absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white opacity-10 text-black shadow-md  group-hover/glide:opacity-100 transition-opacity duration-300 ease-in-out"
          data-glide-dir="<"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
        <button
          className="glide__arrow glide__arrow--right  absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white opacity-10 text-black shadow-md group-hover/glide:opacity-100 transition-opacity duration-300 ease-in-out"
          data-glide-dir=">"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default ProjectGrid;
