import React from 'react';
import Navbar from './components/Navmenu';
import About from './components/home';
import Skill from './components/skill';
import Projects from './components/project';
import Contact from './components/contact';

// import ContactForm from './contactform';  // Ensure the file name matches this case

const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;

