import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'City-Connect',
    description: 'Bridging the gap between citizens and authorities for smarter cities; reached prefinals of Smart India Hackathon.',
    image: '/assets/notesneo.png',
    link: 'https://smartcityconnect.netlify.app/',
    tags: ['React.js', 'Node.js', 'Express','MongoDB'], 
  },
  {
    title: 'Drowsiness Detection',
    description: 'AI-powered system that detects driver drowsiness in real time using facial landmarks.',
    image: '/assets/sleep.jpg',
    tags: ['Machine Learning', 'PostgreSQL','Opencv','Python'],


  },
  {
    title: 'Py-Game',
    description: 'An engaging Python-based game designed to spread autism awareness among kids.',
    image: '/assets/pygame.jpg',
    tags: ['Python','PY-Game'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}