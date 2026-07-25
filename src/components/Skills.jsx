function Skills() {

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "FastAPI",
    "Git",
    "SQL",
    "Pandas"
  ];

  return (

    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skills">

        {skills.map((skill,index)=>(
          <div className="card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;