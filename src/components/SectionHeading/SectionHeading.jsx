function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">

      <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-teal">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>

    </div>
  );
}

export default SectionHeading;

// The component accepts three props:
// <SectionHeading
//   eyebrow="ABOUT ME"
//   title="A little about me."
//   description="A short introduction..."
// />

// eyebrow: Small introductory label.
// title: Main section heading.
// description: Supporting text.