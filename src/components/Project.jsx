function Projects() {

  const project = [

    {
      title:"AI Code Reviewer",
      desc:"React + FastAPI + OpenAI"
    },

    {
      title:"Face Recognition",
      desc:"Python + OpenCV"
    },

    {
      title:"Chatbot",
      desc:"LLM + LangChain"
    },

    {
      title:"Data Analysis Automation Platform",
      desc:"Django + Pandas + NumPy + Matplotlib + Scikit-learn"
    },

    {
      title:"E-Commerce Backend with User Authentication",
      desc:"Python + Django + SQL + JWT + Docker + Pytest"
    }

  ];

  return (

    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-grid">

        {project.map((p,index)=>(

          <div className="project-card" key={index}>

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;