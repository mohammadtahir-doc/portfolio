import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Certifications</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug' 20 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology - Computer Science and Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Lovely Professional University — Phagwara, Punjab</h4>
            <p>
              CGPA: 7.78
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul '26"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faChalkboardUser} />}
          >
            <h3 className="vertical-timeline-element-title">Cybercrime Awareness Session — Community Development Program</h3>
            <h4 className="vertical-timeline-element-subtitle">Presenter & Educator</h4>
            <p>
              Independently delivered a classroom presentation to 33 students on cybercrime awareness and safety practices, drawing on training completed through the WNS Cares Foundation "Cyber Smart" program.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July' 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Cyber Smart Certification</h3>
            <h4 className="vertical-timeline-element-subtitle">WNS Cares Foundation</h4>
            <p>
              Certificate in cyber safety awareness and smart digital practices.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March' 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Introduction to Cyber Security</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys Springboard</h4>
            <p>
              Foundational certification covering essential cybersecurity principles and defensive practices.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January' 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">CS105: Introduction to Python</h3>
            <h4 className="vertical-timeline-element-subtitle">Saylor Academy</h4>
            <p>
              36 hours course | Grade: 80.36%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March'2023 - March'2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate (PCM)</h3>
            <h4 className="vertical-timeline-element-subtitle">Minerva Senior Secondary School — Ghumarvin, H.P.</h4>
            <p>
              Percentage: 86%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March'2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation</h3>
            <h4 className="vertical-timeline-element-subtitle">Bright Future Public School — Bilaspur, H.P.</h4>
            <p>
              Percentage: 89.2%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;