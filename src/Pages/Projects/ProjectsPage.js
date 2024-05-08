import React from "react";
import style from "./Projects.module.css";
import chocolate from "../../assets/chocolate2.jpg";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      projectName: "pottery",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: pottery,
    },
    {
      id: 2,
      projectName: "skinCare",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: skinCare,
    },
    {
      id: 3,
      projectName: "fontArt",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: fontArt,
    },
    {
      id: 4,
      projectName: "chocolate",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: chocolate,
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {projects.map((project) => (
          <div className={style.project}>
            <hr className={style.hr} />
            <img
              className={style.img}
              src={project.img}
              alt={project.projectName}
            />
            <div className={style.content}>
              <h3>
                {"0"}
                {project.id}
              </h3>
              <h2>{project.projectName}</h2>
              <p>{project.projectDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
