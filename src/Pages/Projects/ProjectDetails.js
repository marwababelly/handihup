import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "./ProjectDetails.module.css";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from "../../assets/accessoriesRing.jpg";
const ProjectDetails = () => {
  const projectsDetails = [
    {
      id: 1,
      dProjectName: "Pottery",
      dProjectImg: pottery,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews:
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
    },
    {
      id: 2,
      dProjectName: "SkinCare",
      dProjectImg: skinCare,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews:
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
    },
    {
      id: 3,
      dProjectName: "FontArt",
      dProjectImg: fontArt,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews:
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
    },
    {
      id: 4,
      dProjectName: "Accessories",
      dProjectImg: rings,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews:
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.allContent}>
      {projectsDetails.map((projectDetails, index) => (
        <div className={style.container} key={index}>
          <div className={style.backgroundContainer}>
            <h2>{projectDetails.dProjectName}</h2>
            <img src={projectDetails.dProjectImg} alt="alt" />
          </div>
          <p className={style.description}>
            {projectDetails.dProjectDescription}
          </p>
          <div className={style.contentDiv}>
            <h3>project contents:</h3>
            <div className={style.content}>
              {projectDetails.dProjectContents.map((detail, detailIndex) => (
                <div key={detailIndex} className={style.element}>
                  <p>
                    {"0"}
                    {detailIndex}
                    {":"}
                  </p>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <Carousel
            className={style.carousel}
            variant="dark"
            interval={2500}
            onSelect={handleSelect}
          >
            {projectsDetails.map((review) => (
              <Carousel.Item className={style.carouselItem}>
                <p>{review.dProjectReviews}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
