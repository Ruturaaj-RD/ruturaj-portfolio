import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import profileImage from "../../../public/images/Ruturaj_Pic.png";

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Tailwind CSS"
];

function Hero() {

  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
   <section className="hero-enter relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pt-20 pb-12 sm:px-8 md:pt-12 md:pb-16 lg:grid-cols-[1.15fr_0.85fr]">


      {/* LEFT SIDE - INTRODUCTION */}

      <div className="relative z-10">

        {/* Intro Badge */}

        <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-accent-teal shadow-[0_0_12px_#5eead4]"></span>

          <span className="text-xs font-semibold tracking-wider text-muted">
            FULL-STACK DEVELOPER
          </span>

        </div>


        {/* Main Heading */}

        <h1 className="mt-9 max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">

          I build

          <span className="mt-2 block bg-gradient-to-r from-accent via-indigo-300 to-accent-teal bg-clip-text text-transparent">
            digital experiences.
          </span>

        </h1>


        {/* Introduction */}

        <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">

          I'm <span className="font-semibold text-foreground">
            {siteConfig.name}
          </span>, an MCA graduate from SPIT Mumbai, focused on building full-stack web applications using modern technologies.

        </p>


        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">

          I enjoy turning ideas into functional applications, creating thoughtful user interfaces and continuously improving my development skills.

        </p>


        {/* Action Buttons */}

        <div className="mt-10 flex flex-wrap items-center gap-4">

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-1 hover:bg-indigo-200"
          >

            View My Projects

            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>

          </a>


          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/70 px-7 py-4 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
          >

            Download Resume

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3" />
            </svg>

          </a>

        </div>


        {/* Technology Tags */}

        <div className="mt-12">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Technologies I work with
          </p>


          <div className="flex max-w-xl flex-wrap gap-3">

            {technologies.map((technology) => (

              <span
                key={technology}
                className="rounded-lg border border-line bg-surface/60 px-3 py-2 text-xs font-medium text-muted transition hover:border-accent/40 hover:text-foreground"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </div>


      {/* RIGHT SIDE - PROFILE PHOTO */}

      <div className="relative mx-auto w-full max-w-[360px] lg:ml-auto">

        {/* Decorative Border */}

        <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-accent/20 transition-transform duration-500 hover:rotate-6"></div>


        {/* Image Container */}

        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-line bg-gradient-to-br from-indigo-500/20 via-surface to-teal-400/10 shadow-2xl shadow-indigo-950/40">

          {photoAvailable ? (

            <img
              src={profileImage}
              alt={`Portrait of ${siteConfig.name}`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => setPhotoAvailable(false)}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

          ) : (

            /* Temporary fallback when no photo is available */

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-400/10"></div>

              <span className="relative font-display text-8xl font-bold tracking-tight text-accent">
                RD
              </span>

              <p className="relative mt-4 text-xs tracking-[0.2em] text-muted">
                ADD YOUR PROFILE PHOTO
              </p>

            </div>

          )}


          {/* Image Bottom Overlay */}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent px-7 pb-7 pt-20">

            <p className="text-sm font-semibold text-white">
              {siteConfig.name}
            </p>

            <p className="mt-1 text-xs text-slate-300">
              {siteConfig.role}
            </p>

          </div>

        </div>


        {/* Floating Education Badge */}

        <div className="absolute -left-8 top-14 rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-12">

          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
            Education
          </p>

          <p className="mt-1 text-sm font-bold text-foreground">
            MCA · SPIT Mumbai
          </p>

        </div>


        {/* Floating Location Badge */}

        <div className="absolute -bottom-5 -right-5 rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-xl">

          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
            Based in
          </p>

          <p className="mt-1 text-sm font-bold text-foreground">
            Pune, India 🇮🇳
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;