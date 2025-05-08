import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";
const experiences = [
  {
    title: "Software Developer Intern",
    company: "Think Next Technology Mohali",
    period: "Aug 2022 - Sept 2022",
    description: `Engineered a Covid Test Sampling Portal using PHP, MySQL, and JavaScript, automating test data management and reducing manual workload by 40%. 
    Implemented secure authentication and role-based access control, ensuring data privacy and compliance with healthcare standards. 
    Optimized database queries and server-side logic, improving test result processing speed by 30%. 
    Conducted rigorous testing and debugging, enhancing system reliability and reducing errors by 25%.`,
    skills: ["PHP", "MySQL", "JavaScript", "Authentication", "Database Optimization"],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
