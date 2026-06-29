import { useState } from "react";

export default function Service() {
  const servicesData = {
    "AI & DATA": [
      "Python",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "OpenAI",
      "LangChain",
      "Hugging Face",
    ],

    BACKEND: [
      "FastAPI",
      "Django",
      "Node.js",
      "Express",
      "Spring Boot",
      "GraphQL",
      "PostgreSQL API",
    ],

    FRONTEND: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],

    DATABASE: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
    ],

    CLOUD: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],

    "BI & ANALYTICS": [
      "Power BI",
      "Tableau",
      "Looker",
      "Apache Spark",
      "Apache Airflow",
      "Metabase",
    ],
  };

  const [activeService, setActiveService] = useState("AI & DATA");

  return (
    <section id="services" className="service_section">

      <div className="intro_about d-flex justify-content-between flex-wrap">
        <p className="number">02 / SERVICES</p>
        <p className="who">WHAT WE DO</p>
      </div>

      <div className="service_title">
        <h1 className="servi">TECHNOLOGIES</h1>
        <h1>WE WORK</h1>
        <h1 className="green">WITH.</h1>
      </div>

      <div className="row align-items-start mt-5 g-5">

        <div className="col-lg-4 col-md-12">

          <div className="service_left">

            {Object.keys(servicesData).map((service) => (

              <h2
                key={service}
                className={activeService === service ? "active_service" : ""}
                onClick={() => setActiveService(service)}
              >
                {service}
              </h2>

            ))}

          </div>

        </div>

        <div className="col-lg-8 col-md-12">

          <div key={activeService} className="service_card">

            {servicesData[activeService].map((tech, index) => (

              <button
                key={tech}
                className="tech_btn"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {tech}
              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}