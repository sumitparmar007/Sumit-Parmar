function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p className="contact-desc">
            I'm currently looking for AI/ML Developer and AI Engineer roles. Feel free to contact me.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-icon">📧</span>
              <span className="contact-text">
                Email: <a href="mailto:parmarsumit06830@gmail.com">parmarsumit06830@gmail.com</a>
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-icon">📱</span>
              <span className="contact-text">
                Phone: <a href="tel:+919173720875">+91 9173720875</a>
              </span>
            </div>

            <div className="contact-detail-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">Bhavnagar, Gujarat, India</span>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;