import education from '../../data/education';

export default function Education() {
    return (
      <section id="education-section" className="education-section section">
            <h2 className="section-title">Education, Courses & Certifications</h2>
            <div className="row">
               {education.map((item, index) => (
                 <div className="item col-12 col-md-4" key={index}>
                  <div className="item-inner">
                      <h3 className="degree">{item.degree}</h3>
                      <div className="education-body">{item.institution}</div>
                      <div className="time">{item.duration}</div>
                      <div className="desc">
                        <p>{item.description}{" "}
                           {item.link && item.link.url && (
                           <a href={item.link.url}>{item.link.text}</a>
                           )}
                        </p>
                      </div>
                  </div>
                </div>
               ))}   
            </div>{/* row */}
        </section>
    );
}