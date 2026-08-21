import React from "react";
import smartClassroomImg from '../assets/images/smart-classroom.png';
import libraryManagementImg from '../assets/images/library-management.jpg';
import Chip from '@mui/material/Chip';
import '../assets/styles/Project.scss';

function Project() {
    const projectOneTech = ["ESP32", "INMP441", "Node.js", "Express", "Google Speech-to-Text API", "MongoDB"];
    const projectTwoTech = ["PHP", "MySQL", "HTML", "CSS"];

    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer">
                    <img src={smartClassroomImg} className="zoom" alt="AI-Integrated Smart Classroom Microphone System" width="100%"/>
                </a>
                <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer">
                    <h2>AI-Integrated Smart Classroom Microphone System</h2>
                </a>
                <p className="project-date">May '26</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {projectOneTech.map((tech, idx) => (
                        <Chip key={idx} className="chip" label={tech} size="small" />
                    ))}
                </div>
                <ul>
                    <li>Engineered ESP32 firmware to capture classroom audio via an INMP441 MEMS microphone and transmit it over Wi-Fi to a Node.js/Express backend, enabling real-time audio streaming from hardware to server.</li>
                    <li>Integrated Google Speech-to-Text API within a 4-member team to automatically convert recorded lectures into digital text notes, streamlining the manual note-taking process.</li>
                    <li>Collaborated on a MongoDB-backed system for storing and retrieving digitized lecture notes, resulting in a fully deployed solution used for classroom note capture.</li>
                </ul>
            </div>

            <div className="project">
                <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer">
                    <img src={libraryManagementImg} className="zoom" alt="Library Management System" width="100%"/>
                </a>
                <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer">
                    <h2>Library Management System</h2>
                </a>
                <p className="project-date">June’2026</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {projectTwoTech.map((tech, idx) => (
                        <Chip key={idx} className="chip" label={tech} size="small" />
                    ))}
                </div>
                <ul>
                    <li>Developed a web-based library management system using PHP and MySQL, enabling librarians to add, search, and manage book records digitally.</li>
                    <li>Implemented borrowing and return tracking functionality, replacing manual logbooks with a centralized digital record.</li>
                    <li>Designed user login functionality to differentiate access between admin and student/user roles, improving data security and accountability.</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Project;