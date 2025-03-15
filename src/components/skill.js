import React from 'react';
import './skill.css'; // Import the CSS file

const Skills = () => {
  return (
    <div className='skills-section' id='Skill'>
      <h1 className='skills-heading'>SKILLS</h1>
      <div className='skills-content'>
        <div className='tech'>
          <h1>TECHNICAL SKILLS</h1>
          <ul>
            <li>Programming Languages</li>
            <li>Front-end Development</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>
        <div className='web'>
          <h1>Web Development</h1>
          <ul>
            <li>HTML5, CSS3: Proficient in structured and styled web pages.</li>
            <li>React.js: Experience building dynamic user interfaces.</li>
            <li>Node.js: Knowledge of server-side JavaScript development.</li>
            <li>Bootstrap: Familiarity with responsive design frameworks.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
