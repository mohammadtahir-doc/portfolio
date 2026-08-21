import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer" title="GitHub"><GitHubIcon/></a>
        <a href="http://www.linkedin.com/in/mohammad-tahir-057255402/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedInIcon/></a>
        <a href="mailto:tahirkhan161270@gmail.com" target="_blank" rel="noreferrer" title="Email"><EmailIcon/></a>
      </div>
      <p>Designed & built by <a href="https://github.com/mohammadtahir-doc" target="_blank" rel="noreferrer">Mohammad Tahir</a></p>
    </footer>
  );
}

export default Footer;