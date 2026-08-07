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
      desc:"Django, Pandas, NumPy, Matplotlib, Scikit-learn\n• Developed a Django-based web application for automated data analysis.\n• Implemented CSV and Excel file upload functionality.\n• Automated data cleaning and preprocessing using Pandas and NumPy.\n• Generated charts and analytical reports using Matplotlib.\n• Performed correlation analysis and outlier detection.\n• Integrated Machine Learning models using Scikit-learn.\n• Generated downloadable analytical reports."
    },

    {
      title:"E-Commerce Backend with User Authentication",
      desc:"Python, Django, SQL, JWT, Docker, Pytest\n• Developed a secure RESTful backend for an E-Commerce application using Python.\n• Implemented JWT-based user authentication and role-based access control (Admin and Customer).\n• Built product catalog, shopping cart, and order management modules.\n• Integrated SQL database for products, users, and order management.\n• Applied password hashing using bcrypt for secure authentication.\n• Performed database migrations and schema management.\n• Wrote unit tests using Pytest to ensure API reliability.\n• Containerized the application using Docker for consistent deployment.\n• Integrated a mock payment gateway for secure payment simulation."
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