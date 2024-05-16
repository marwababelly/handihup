import { React, useState } from "react";
import style from "./Projects.module.css";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from "../../assets/necklace.jpg";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      projectName: "Pottery",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: pottery,
      link: "pottery",
    },
    {
      id: 2,
      projectName: "SkinCare",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: skinCare,
      link: "skinCare",
    },
    {
      id: 3,
      projectName: "FontArt",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: fontArt,
      link: "fontArt",
    },
    {
      id: 4,
      projectName: "Accessories",
      projectDescription:
        'This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on "Edit Text" or double click on the text box to start.',
      img: rings,
      link: "accessories",
    },
  ];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Projects</h2>
      <hr className={style.h2Hr} />
      <div className={style.projects}>
        {projects.map((project) => (
          <NavLink href={`Products/${project.link}`}>
            <div className={style.project}>
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
              <button className={style.button}>
                <NavLink href={`Products/${project.link}`}>
                  View Products
                </NavLink>
              </button>
              <hr className={style.hr} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
