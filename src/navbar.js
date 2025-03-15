import React, { useState } from 'react';
import './navbar.css';
import profileimage from './profile.jpg'
import aboutimage from './about.png'
import removeimage from './mathi.png'
import resumeimage from './resume.jpg'
import linkdin from './linkdin.png'
import mail from'./mail.avif'
import error from'./error.png'
import mmail from'./mmail.png'
import llii from'./llii.png'
import eerr from'./eerr.png'
import contactimg from'./contactimg.jpg'
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {

  const [formData, setFormData] = useState({
    from_name: '', 
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_f1gejk8';
    const templateID = 'template_tu0p34a';
    const userID = 'cnH2tmy4MSNyTKNv3';

    const dataToSend = {
      from_name: formData.from_name, 
      email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, dataToSend, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent!");
        setFormData({ from_name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert("Failed to send message.");
      });
  };

  return (

    
    <div>
    <div class='bg' >
        <div class="rig">
      
           <h1>MATHI.G</h1>
           <h2>BE CSE</h2>
        </div>
      <div>
      <ol class='center'>
       
        <li><a href="#home">HOME</a></li>
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#Skill">SKILL</a></li>
        <li><a href="#contact"></a>CONTACT</li>
        <li><a href="#resume">RESUME</a></li>
        <li>MEDIA</li>
        <li>PROJECT</li>
      </ol>
      </div>
     
      
      
    </div>
    <div class="aboutme" id="home">
    <div>
         <img src={profileimage} alt="image" height="300px" width="400px" class="rad"/>
    </div>
    <div class="move">
        <h1 align="center">Hi... I am Mathi</h1>
        <h1 align="center"> Third-year Computer Science and Engineering student</h1>
        <h1 align="center"> With a passion for front-end development,</h1>
    </div>
    </div>



    <div class="kad" id="About">

    <div>
      <h1 class="box">ABOUT ME</h1>
      <h2>Hi! I'm Mathi, a passionate third-year Computer Science and Engineering student<br></br>
       at Francis Xavier Engineering College. I have ainterest in front-end development,<br></br>
       
       and I love creating interactive and visually appealing websites.Currently,<br></br><br></br> 
       I’m expanding my skill set in JavaScript after completing an internship 
       
       at Bluescope, <br></br>where I worked on enhancing my understanding of front-end
       technologies. <br></br>
      
       I’m always eager to learn more and experiment with newa and tools and frameworks <br></br> <br></br>
      
      In the field of web development.Beyond coding and research to impactful projects<br></br> 
       I enjoy problem-solving and with like-minded individuals to bringcreative ideas<br></br> 
       to life. When  you can find me exploring new technologies <br></br></h2>
    </div>
    <div >
<img src={aboutimage} alt="image" height="500px" width="500px"></img>
</div></div>



<div class="kad">

<div id="Skill">
  <h1 class="box2">SKILLS</h1>
</div>
<div class="top">

</div></div>

<div class="whole">
<div class="sep">
<div class="tech">
  <h1>TECHNICAL SKILLS</h1>
  <h3>
    <li>Programming Languages</li>
    <li>Front end Development</li>
    <li>Python</li>
    <li>Java</li>
    <li>C</li>
  </h3>
</div>
<div class="web">
  <h1> Web Development</h1>
<h3>
    <li>HTML5,CSS3: Proficient in structured and styled web pages.</li>
    <li>React.js  : Experience building dynamic user interfaces.</li>
    <li>Node.js   : Knowledge of server-side JavaScript development.</li>
    <li>Bootstrap : Familiarity with responsive design frameworks</li>
    </h3>
</div>
</div>


<div class="sep2">
  <div class="tech">
<h1>Database Management: </h1>
<h3>
<li>SQL: Understanding of relational databases (e.g., MySQL, PostgreSQL).</li>
  <li>NoSQL: Basic knowledge of databases like MongoDB.</li>
  </h3>
  </div>
  <div class="web">
    <h1>Version Control:  </h1>
    <h3>
  <li>Git: Proficient in using Git for version control and collaboration.</li>
  <li>GitHub: Experience managing repositories and collaborating on projects.</li>
  </h3>
  </div>
 </div>
</div>

<div id="resume">
<h1 class="resume"><a href={resumeimage}>RESUME</a></h1>
</div>
<div id="project">
<h1 class="project"> LATEST PROJECT</h1>
<div class="mdop">
  <div class="dop">
     <a href={llii}>< img src={linkdin} alt="image" height="230" width="300"/></a>
     <figcaption><h3 class="h3">LINKDIN</h3></figcaption>
  </div>
  <div class="dop">
  <a href="https://mathig21003.github.io/mailalert/"><img src={mail} alt="image" height="230" width="300"/></a>
  <figcaption><h3 class="h3">MAIL ALERT</h3></figcaption>
  </div>
  <div class="dop">
<a href={eerr}><img src={error}alt="image" height="230" width="300"/></a>
<figcaption><h3 class="h3">ERROR PAGE</h3></figcaption>
  </div>
</div>
<br></br><br></br>
</div>


<div id="contact" class="contact">
<div class="contactimage">
<a href=""><img src={contactimg}alt="image" height="350" width="400" /></a>
</div>
<div class="move2" >
 
  <section id="contact-me">
  <h3 class="box3" align="center">CONTACT</h3>
      <p>Feel free to reach out to me at:</p>
      <form onSubmit={handleSubmit}>
        <div class="form">
        <div class="input">
          <label>Name:</label>
          <input
            type="text"
            name="from_name" 
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div class="input">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div class="input">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div class="btn">
        <button type="submit">Send Message</button>
        </div>
        </div>
      </form>
    </section>

</div>
</div>



      <footer>

        <div class="bg2 center2">
       <a href="https://chatgpt.com/c/66fb7529-db10-800a-97f3-c6956a310635" ><p><FontAwesomeIcon icon={faFacebook} />facebook</p></a>
        <p><FontAwesomeIcon icon={faInstagram} />instagram</p>
        <p><FontAwesomeIcon icon={faLinkedin} />linkdin</p>
        <p><FontAwesomeIcon icon={faGithub} />github</p>
        <p><FontAwesomeIcon icon={faTwitter} />twitter</p>
        </div>
       </footer>
       </div>

     
  );
};

export default Navbar;
