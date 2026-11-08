import SectionHeading from "../../components/SectionHeading/SectionHeading";

import EducationCard from "../../components/EducationCard/EducationCard";

import AchievementCard from "../../components/AchievementCard/AchievementCard";

import {
  education,
  achievements
} from "../../data/education";


function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-line px-5 pt-8 pb-16 sm:px-8 md:pt-10 md:pb-20"
    >

      <div className="mx-auto max-w-7xl">


        {/* Section Heading */}

        <SectionHeading
          eyebrow="MY BACKGROUND"
          title="Education & achievements."
          description="The academic journey, milestones and accomplishments that have shaped my foundation in computer science and software development."
        />


        {/* Two-Column Layout */}

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">


          {/* LEFT - EDUCATION */}

          <div>

            <div className="mb-7 flex items-center justify-between">

              <h3 className="font-display text-xl font-semibold text-foreground">
                Education
              </h3>

              <span className="text-xs tracking-widest text-accent-teal">
                ACADEMIC JOURNEY
              </span>

            </div>


            <div>

              {education.map((item, index) => (

                <EducationCard
                  key={item.id}
                  item={item}
                  isLast={index === education.length - 1}
                />

              ))}

            </div>

          </div>


          {/* RIGHT - ACHIEVEMENTS */}

          <div>

            <div className="mb-7 flex items-center justify-between gap-3">

              <h3 className="font-display text-xl font-semibold text-foreground">
                Achievements
              </h3>

              <span className="shrink-0 text-xs tracking-widest text-accent-teal">
                {String(achievements.length).padStart(2, "0")} MILESTONES
              </span>

            </div>


            <div className="grid gap-4">

              {achievements.map((achievement) => (

                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;