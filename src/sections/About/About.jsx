import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { aboutContent } from "../../data/about";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line px-5 pt-8 pb-16 sm:px-8 md:pt-10 md:pb-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* LEFT: INTRODUCTION */}

          <div>

            <SectionHeading
              eyebrow="GET TO KNOW ME"
              title="A little about me."
            />

            <div className="mt-7 space-y-5">

              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-muted"
                >
                  {paragraph}
                </p>
              ))}

            </div>

          </div>


          {/* RIGHT: PROFESSIONAL FOCUS */}

          <div className="rounded-card border border-line bg-surface/70 p-6 sm:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal">
              AREAS OF FOCUS
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Building across the stack.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              I enjoy working across different layers of web development,
              from creating user interfaces to developing backend services
              and designing relational databases.
            </p>


            <div className="mt-8 space-y-3">

              {aboutContent.focusAreas.map((area, index) => (

                <div
                  key={area}
                  className="flex items-center gap-4 rounded-xl border border-line bg-background/60 p-4 transition hover:border-accent/40"
                >

                  <span className="font-display text-sm font-bold text-accent-teal">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {area}
                  </span>

                  <span className="ml-auto text-muted">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;