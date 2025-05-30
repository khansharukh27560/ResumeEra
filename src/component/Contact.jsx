import React, { memo, useEffect, useState } from 'react';
import '../css/contact.css'; // Import custom CSS
import { Helmet } from 'react-helmet';
import GoogleAd from './adFolder/GoogleAd';

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission using mailto
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:support@resumeera.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;

    // Trigger mail client
    window.location.href = mailtoLink;

    // Clear form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="aboutResumeEra">
       <Helmet>
      <link rel="canonical" href="https://resumeera.xyz/contact" />
      <title>Contact Us</title>
            <meta name="description" content="this page is releted to contact us to give query" />
            </Helmet>
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          >

          </textarea>
          <div>
  <GoogleAd/>
</div>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default memo(Contact);
