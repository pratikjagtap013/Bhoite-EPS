import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Founder Info */}
      <div className="my-name-box">
        <h2>John Doe</h2>
        <p>Founder & CEO</p>
      </div>

      {/* Contact Info */}
      <div className="my-info">
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +91 1234567890</p>
        <p><strong>Address:</strong> 123, React Street, Web City</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message:</label>
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
