const visualThemes = {
  indigo: "from-indigo-500/20 via-surface to-indigo-400/5",
  teal: "from-teal-500/20 via-surface to-emerald-400/5"
};

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-card border border-line bg-surface/60 transition duration-300 hover:-translate-y-1 hover:border-accent/40">

      {/* Project Preview */}

      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${visualThemes[project.visualTheme] || visualThemes.indigo}`}>

        {project.image ? (

          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

        ) : (

          /* Temporary visual preview */

          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-9">

            <div className="w-full max-w-md rounded-xl border border-white/15 bg-background/80 p-4 shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-[1.02] sm:p-5">

              {/* Preview Header */}

              <div className="flex items-center justify-between border-b border-white/10 pb-3">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-accent-teal" />

                  <span className="text-[10px] font-semibold tracking-widest text-muted">
                    {project.visualLabel}
                  </span>

                </div>

                <span className="text-xs text-muted">
                  {project.number}
                </span>

              </div>


              {/* Preview Content */}

              <h3 className="mt-5 font-display text-lg font-semibold text-foreground sm:text-2xl">
                {project.visualTitle}
              </h3>


              <div className="mt-5 grid grid-cols-3 gap-2">

                {[1, 2, 3].map((item) => (

                  <div
                    key={item}
                    className="h-14 rounded-lg border border-white/10 bg-white/[0.04] sm:h-20"
                  />

                ))}

              </div>


              <div className="mt-4 space-y-2">

                <div className="h-2 w-full rounded-full bg-white/10" />

                <div className="h-2 w-3/4 rounded-full bg-white/10" />

              </div>

            </div>

          </div>

        )}

        {/* Project Number */}

        <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
          PROJECT {project.number}
        </span>

      </div>


      {/* Project Information */}

      <div className="p-6 sm:p-7">

        {/* Category */}

        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-teal">
          {project.category}
        </p>


        {/* Project Title */}

        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>


        {/* Description */}

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>


        {/* Key Features */}

        <div className="mt-7">

          <p className="text-xs font-bold uppercase tracking-widest text-foreground">
            KEY FEATURES
          </p>

          <ul className="mt-4 grid gap-3">

            {project.highlights.map((highlight) => (

              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-muted"
              >

                <span className="mt-1 text-accent-teal">
                  ✓
                </span>

                {highlight}

              </li>

            ))}

          </ul>

        </div>


        {/* Technology Stack */}

        <div className="mt-7 border-t border-line pt-6">

          <p className="text-xs font-bold uppercase tracking-widest text-foreground">
            TECHNOLOGY STACK
          </p>


          <div className="mt-4 flex flex-wrap gap-2">

            {project.technologies.map((technology) => (

              <span
                key={technology}
                className="rounded-lg border border-line bg-background/70 px-3 py-2 text-xs font-medium text-muted transition hover:border-accent/40 hover:text-accent"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>


        {/* Project Links */}

        <div className="mt-7 flex flex-wrap items-center gap-4">

          {project.githubUrl && (

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-accent"
            >
              Source Code ↗
            </a>

          )}


          {project.liveUrl && (

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-indigo-200"
            >
              Live Demo ↗
            </a>

          )}
        </div>

      </div>

    </article>
  );
}

export default ProjectCard;