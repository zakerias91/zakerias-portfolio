import experience from '../../data/experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
   return (
      <section id="experiences-section" className="experiences-section section">
         <h2 className="section-title">Work Experience</h2>
         <div className="timeline">

            {experience.map((item, index) => (
               <div key={index} className="item">
                  <div className="work-place">
                     <h3 className="place">{item.company}</h3>
                     <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" fixedWidth style={{ width: '1.25rem', height: '1rem', lineHeight: 1}} />{item.location}</div>
                  </div>
                  <div className="job-meta">
                     <div className="title">{item.role}</div>
                     <div className="time">{item.duration}</div>
                  </div>{/* job-meta */}
                  <div className="job-desc">
                     <ul>{item.description.map((description, i) => <li key={i}>{description}</li>)}</ul>
                  </div>{/* job-desc */}
               </div>
            ))}
         </div>{/* timeline */}
      </section>
   );
}