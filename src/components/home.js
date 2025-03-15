import React from 'react';
import profileImage from './profile.jpg';
import aboutImage from './about.png';
import './home.css';

const About = () => {
  return (
    <div>
      {/* Profile section with image on the left and wording on the right */}
      <div className='aboutme' id='home'>
        <div className='image-left'>
          <img src={profileImage} alt='Profile' height='300px' width='300px' className='rad' />
        </div>
        <div className='text-right'>
          <h1>Hi... I am Mathi</h1>
          <h2>Third-year Computer Science and Engineering student</h2>
          <h3>With a passion for front-end development</h3>
        </div>
      </div>

      {/* About section with wording on the left and image on the right */}
      <div className='about-section' id='About'>
        <div className='text-left'>
          <h1 className='box'>ABOUT ME</h1>
          <p>Hi! I'm Mathi, a passionate third-year Computer Science and Engineering student<br></br>
       at Francis Xavier Engineering College. I have ainterest in front-end development,<br></br>
        and I love creating interactive and visually appealing websites.Currently,<br></br><br></br> 
                I’m expanding my skill set in JavaScript after completing an internship 
       
        at Bluescope, <br></br>where I worked on enhancing my understanding of front-end
        technologies. <br></br>
      
        I’m always eager to learn more and experiment with newa and tools and frameworks <br></br> <br></br>
      
       In the field of web development.Beyond coding and research to impactful projects<br></br> 
       I enjoy problem-solving and with like-minded individuals to bringcreative ideas<br></br> 
        to life. When  you can find me exploring new technologies <br></br></p>
        </div>
        <div className='image-right'>
          <img src={aboutImage} alt='About me' height='400px' width='400px' />
        </div>
      </div>
    </div>
  );
};

export default About;
