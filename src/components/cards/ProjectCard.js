/*
 * Renders a single project card with front/back flip animation on click
 * Responsive layout with Bootstrap grid classes
 * Uses Framer Motion for smooth transitions
 */

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false); // State to track if the card is flipped
  const handleFlip = () => setFlipped(!flipped); // Toggle flipped state on click

  return (
    // Animate the project card with framer-motion
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`item ${project.category} col-lg-6 col-12`}
    >
      <div
        className={`card-container manual-flip ${flipped ? "hover" : ""}`}
        onClick={handleFlip}
      >
        <div className="card">
          {/* Front of the card */}
          <div className="item-inner">
            <figure className="figure">
              <img className="img-fluid" src={project.image} alt={project.title} />
            </figure>
            <div className="content text-start">
              <h3 className="sub-title">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {project.title}
                </a>
              </h3>
              <div className="meta">{project.tech}</div>
              <div className="action">View detail &rarr;</div>
            </div>
          </div>

          {/* Back of the card */}
          <div className="back">
            <div className="content">
              <div className="card-inner">
                <p>
                  {project.description}
                  {/* Render link if provided */}
                  {project.link && (
                    <>
                      {" "}
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View Link
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}