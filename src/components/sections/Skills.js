import skills from '../../data/skills';
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills-section" className="skills-section section text-center">
      <h2 className="section-title">Professional Skills</h2>
      <div className="top-skills">
        <h3 className="subtitle">Toolkit</h3>
        <div className="row">

          {skills.map((skill, index) => (
            <div key={index} className="item col-12 col-md-4">
              <div className="item-inner">
                <div className="devicon-size">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={256}
                    height={256}
                  />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="desc">
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}