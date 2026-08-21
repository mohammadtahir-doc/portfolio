import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsLanguages = [
    "C++",
    "Python",
    "C",
    "DBMS",
    "HTML",
    "CSS",
    "Javascript"
];

const labelsTools = [
    "GitHub",
    "Hacker Earth"
];

const labelsSoftSkills = [
    "Problem-Solving",
    "Team Player",
    "Project Management",
    "Adaptability"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Languages</h3>
                    <p>Proficient in foundational and modern programming languages, database management systems, and core web development technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsLanguages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Tools & Platforms</h3>
                    <p>Experienced in utilizing industry-standard developer platforms for source code management, version control, and competitive coding.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Platforms:</span>
                        {labelsTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Soft Skills</h3>
                    <p>Demonstrated capability in collaborative team projects, analytical problem-solving, project management, and adaptability in fast-paced environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Competencies:</span>
                        {labelsSoftSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;