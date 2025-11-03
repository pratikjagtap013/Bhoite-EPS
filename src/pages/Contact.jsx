import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submit logic
    alert("Message sent (demo)");
  };

  return (
    <div className="services-container">
      {" "}
      {/* reuse services container styles for consistent look */}
      <div className="services">
        {/* Left card: contact details */}
        <div className="service-card">
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-details">
            <p className="email">
              <span className="cd-icon">✉️</span>
              <span className="cd-body">
                <strong>Email:</strong>
                <a href="mailto:info@bhoiteepstech.com">
                  info@bhoiteepstech.com
                </a>
              </span>
            </p>

            <p className="phone">
              <span className="cd-icon">📞</span>
              <span className="cd-body">
                <strong>Phone:</strong>
                <a href="tel:+919309957577">+91 9309957577</a>
              </span>
            </p>

            <p className="address">
              <span className="cd-icon">📍</span>
              <span className="cd-body">
                <strong>Address:</strong>
                <span className="cd-value">
                  102, Green Springs, Wai, Satara, Maharashtra
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Right card: send message form */}
        <div className="service-card">
          <h2 className="section-title">Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button type="submit" className="btn-send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
