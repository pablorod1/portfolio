import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`max-w-2xl mx-auto flex justify-center items-center rounded-xl py-5 px-10 w-full sticky top-0 z-10 backdrop-blur-lg transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "border border-white/10 top-4"
            : "border-[var(--background-color)]"
        }
        `}
    >
      <nav className="flex flex-row flex-wrap gap-x-10 gap-y-5 text-white">
        <a href="#top">Inicio</a>
        <a href="#experience">Experiencia</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
