import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact"
];

function useActiveSection() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);


    const observer = new IntersectionObserver(

      (entries) => {

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );


        if (visibleSections.length > 0) {

          setActiveSection(
            visibleSections[0].target.id
          );

        }

      },

      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0
      }

    );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => {
      observer.disconnect();
    };

  }, []);


  return activeSection;

}

export default useActiveSection;