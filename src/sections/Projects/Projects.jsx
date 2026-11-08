import SectionHeading from "../../components/SectionHeading/SectionHeading";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-line px-5 pt-8 pb-16 sm:px-8 md:pt-10 md:pb-20"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've built."
            description="A selection of applications where I've put my development knowledge into practice, explored real-world problems and built functional solutions."
          />

          <div className="shrink-0">

            <span className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold tracking-wider text-muted">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </span>

          </div>

        </div>


        {/* Project Cards */}

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;