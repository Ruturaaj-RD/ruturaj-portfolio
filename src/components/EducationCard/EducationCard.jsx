function EducationCard({ item, isLast }) {
  return (
    <article className="relative flex gap-5">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">

          <span className="h-2.5 w-2.5 rounded-full bg-accent" />

        </div>


        {!isLast && (
          <div className="mt-2 min-h-8 w-px flex-1 bg-gradient-to-b from-accent/40 to-line" />
        )}

      </div>


      {/* Education Details */}

      <div className="mb-8 min-w-0 flex-1 rounded-card border border-line bg-surface/70 p-5 transition duration-300 hover:border-accent/40 hover:bg-surface-soft sm:p-6">

        {/* Year and Degree Type */}

        <div className="flex flex-wrap items-center justify-between gap-3">

          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            {item.year}
          </span>

          <span className="text-xs tracking-widest text-accent-teal">
            {item.abbreviation}
          </span>

        </div>


        {/* Degree */}

        <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
          {item.degree}
        </h3>

        {/* CGPA */}

        <p className="mt-3 text-sm font-medium leading-6 text-muted">
         CGPA - {item.cgpa}
        </p>


        {/* Institution */}

        <p className="mt-3 text-sm font-medium leading-6 text-muted">
          {item.institution}
        </p>


        {/* University (if applicable) */}

        {item.university && (

          <p className="mt-2 text-xs leading-6 text-muted">
            Affiliated university: {item.university}
          </p>

        )}


        {/* Location */}

        <p className="mt-3 flex items-center gap-2 text-xs text-muted">

          <span className="text-accent-teal">⌖</span>

          {item.location}

        </p>

      </div>

    </article>
  );
}

export default EducationCard;