import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import profileImg from '../assets/images/tahir.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Mohammad Tahir" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/mohammad-tahir-057255402/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:tahirkhan161270@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon/></a>
            <a href="tel:+918091763200" rel="noreferrer" title="Phone"><PhoneIcon/></a>
          </div>
          <h1>Mohammad Tahir</h1>
          <p>Computer Science & Engineering Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/mohammad-tahir-057255402/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:tahirkhan161270@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon/></a>
            <a href="tel:+918091763200" rel="noreferrer" title="Phone"><PhoneIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;