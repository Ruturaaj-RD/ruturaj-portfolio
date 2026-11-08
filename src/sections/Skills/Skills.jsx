import SectionHeading from "../../components/SectionHeading/SectionHeading";

import SkillCard from "../../components/SkillCard/SkillCard";

import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-line px-5 pt-8 pb-16 sm:px-8 md:pt-10 md:pb-20"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}

        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Technologies I work with."
          description="A collection of technologies and tools I've studied and used while building practical web applications."
        />


        {/* Skill Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2">

          {skillCategories.map((category) => (

            <SkillCard
              key={category.id}
              number={category.number}
              category={category.category}
              description={category.description}
              skills={category.skills}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;