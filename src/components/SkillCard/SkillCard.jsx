function SkillCard({ number, category, description, skills }) {

  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-soft sm:p-7">


      {/* Card Header */}

      <div className="flex items-center justify-between">

        <span className="text-xs font-bold tracking-[0.2em] text-accent-teal">
          {number}
        </span>

        <span className="text-muted transition group-hover:translate-x-1 group-hover:text-accent">
          ↗
        </span>

      </div>


      {/* Category */}

      <h3 className="mt-7 font-display text-xl font-semibold text-foreground">
        {category}
      </h3>


      {/* Description */}

      <p className="mt-3 text-sm leading-7 text-muted">
        {description}
      </p>


      {/* Skill Tags */}

      <div className="mt-7 flex flex-wrap gap-2">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-lg border border-line bg-background/70 px-3 py-2 text-xs font-medium text-foreground/80 transition hover:border-accent/40 hover:text-accent"
          >
            {skill}
          </span>

        ))}

      </div>

    </article>
  );
}

export default SkillCard;