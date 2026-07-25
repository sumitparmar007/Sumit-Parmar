function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm currently looking for AI/ML Developer and
            
            AI Engineer. Feel free to contact me.
          </p>

          <p>📧 Email: parmarsumit06830@gmail.com</p>

          <p>📱 Phone: +91 9173720875</p>

          <p>📍 Bhavnagar, Gujarat, India</p>

        </div>

        {/* Right Side */}
        <form className="contact-form">

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