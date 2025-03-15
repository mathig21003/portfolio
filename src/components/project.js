import React from 'react';
import linkedinImage from './linkdin.png';
import mailImage from './mail.avif';
import errorImage from './error.png';
import llii from './llii.png';
import eerr from './eerr.png';
import './project.css';

const Projects = () => {
  return (
    <div id='project'>
      <h1 className='projects'>LATEST PROJECT</h1>
      <div className='mdop'>
        <div className='dop'>
          <a href={llii}>
            <img src={linkedinImage} alt="LinkedIn" height="230" width="300" />
          </a>
          <figcaption>
            <h3 className='h3'>LINKEDIN</h3>
          </figcaption>
        </div>
        <div className='dop'>
          <a href="https://mathig21003.github.io/mailalert/">
            <img src={mailImage} alt="Mail Alert" height="230" width="300" />
          </a>
          <figcaption>
            <h3 className='h3'>MAIL ALERT</h3>
          </figcaption>
        </div>
        <div className='dop'>
          <a href={eerr}>
            <img src={errorImage} alt="Error Page" height="230" width="300" />
          </a>
          <figcaption>
            <h3 className='h3'>ERROR PAGE</h3>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Projects;
