import React from "react";
import style from "./ProjectDetails.module.css";
import chocolate from "../../assets/chocolate2.jpg";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from '../../assets/Rings.jpg'
const ProjectDetails = () => {
  const projectsDetails = [
    {
      dProjectName: "Pottery",
      dProjectImg: pottery,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: {
        a1: "1",
        a2: "2",
      },
      dProjectReviews:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start",
    },
    {
      dProjectName: "SkinCare",
      dProjectImg: skinCare,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: {
        a1: "1",
        a2: "2",
      },
      dProjectReviews:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start",
    },
    {
      dProjectName: "FontArt",
      dProjectImg: fontArt,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: {
        a1: "1",
        a2: "2",
      },
      dProjectReviews:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start",
    },
    {
      dProjectName: "Chocolate",
      dProjectImg: chocolate,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: {
        a1: "1",
        a2: "2",
      },
      dProjectReviews:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start",
    },
    {
      dProjectName: "Accessories",
      dProjectImg: rings,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: {
        a1: "1",
        a2: "2",
      },
      dProjectReviews:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start",
    },
  ];

  return (
    <div className={style.content}>
      {projectsDetails.map((projectDetails) => (
        <div className={style.container}>
          <img src={projectDetails.dProjectImg} />
          <h2>{projectDetails.dProjectName}</h2>
          <p>{projectDetails.dProjectDescription}</p>
          <ul>
            {projectsDetails.map((ProjectContent) => (
              <div>
                <li>{ProjectContent.dProjectContents.a1}</li>
                <li>{ProjectContent.dProjectContents.a2}</li>
              </div>
            ))}
          </ul>
          <div className={style.review}>{projectDetails.dProjectReviews}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
