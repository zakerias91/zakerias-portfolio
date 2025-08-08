import skills from '../../data/skills';

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
                  <img src={skill.icon} alt={skill.name} />
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