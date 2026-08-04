function Hero() {
  return (
    <section className="hero">
      <div className="left">
        <h1>Hello 👋</h1>
        <h2>
          <span className="iam">I'm </span>
          <span className="name">Sumit Parmar</span>
        </h2>
        <h3>AI/ML Developer and Full Stack Developer</h3>
        <p>
          Passionate about Artificial Intelligence,
          Machine Learning, and Full Stack Web Development.
        </p>
        
        {/* Updated href to use public asset path */}
        <a href="/AI_ML_resume.pdf" download="AI_ML_resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>

      <div className="right">
        <img
          src="/sumit_image.jpeg"
          alt="Sumit Parmar"
        />
      </div>
    </section>
  );
}

export default Hero;