/*
 * Displays a filterable, animated grid of project cards.
 * Uses React state to filter projects by category (All, University, College)
 * Uses <AnimatePresence> from Framer Motion to animate enter/exit transitions
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import projects from '../../data/projects';
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Filter projects based on the active filter
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === '*') return true;
    return `.${project.category}` === activeFilter;
  });

  return (
    <section id="portfolio-section" className="portfolio-section section">
      <h2 className="section-title">Portfolio</h2>

      <ul id="filters" className="filters clearfix">
        <li className={`type ${activeFilter === '*' ? 'active' : ''}`} onClick={() => handleFilterClick('*')}>All</li>
        <li className={`type ${activeFilter === '.university' ? 'active' : ''}`} onClick={() => handleFilterClick('.university')}>University</li>
        <li className={`type ${activeFilter === '.college' ? 'active' : ''}`} onClick={() => handleFilterClick('.college')}>College</li>
      </ul>

      <div className="items-wrapper row g-4">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}