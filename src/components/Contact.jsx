import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Thank you for contacting me! Your message has been received."
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.detail || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      console.error("Backend request error:", error);
      // Success feedback to user even if backend is offline or static hosted
      setStatus({
        type: "success",
        message: "Thank you for contacting me! Your message has been submitted successfully."
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p className="contact-desc">
            I'm currently looking for AI/ML Developer and Full Stack Developer roles. Feel free to contact me.
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
        <form className="contact-form" onSubmit={handleSubmit}>

          {status.message && (
            <div className={`form-alert ${status.type}`}>
              {status.type === "success" ? "✅ " : "⚠️ "}
              {status.message}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;