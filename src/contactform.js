// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './navbar.css'


// const ContactForm= () => {
//   const [formData, setFormData] = useState({
//     from_name: '', 
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceID = 'service_f1gejk8';
//     const templateID = 'template_tu0p34a';
//     const userID = 'cnH2tmy4MSNyTKNv3';

//     const dataToSend = {
//       from_name: formData.from_name, 
//       email: formData.email,
//       message: formData.message
//     };

//     emailjs.send(serviceID, templateID, dataToSend, userID)
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert("Message sent!");
//         setFormData({ from_name: '', email: '', message: '' }); 
//       })
//       .catch((error) => {
//         console.error('FAILED...', error);
//         alert("Failed to send message.");
//       });
//   };

//   return (
   
//     <section id="contact">
//        <h2>Contact Me</h2>
//       <p>Feel free to reach out to me at:</p>
//       <form onSubmit={handleSubmit}>
//         <div class="form">
//         <div class="input">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="from_name" 
//             value={formData.from_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div class="input">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div class="input">
//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send Message</button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
