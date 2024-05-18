import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "./ProjectDetails.module.css";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from "../../assets/accessoriesRing.jpg";
import { useParams } from "react-router";
const ProjectDetails = () => {
  const projectsDetails = [
    {
      id: 1,
      dProjectName: "Pottery",
      dProjectImg: pottery,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "Pottery",
    },
    {
      id: 2,
      dProjectName: "SkinCare",
      dProjectImg: skinCare,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "SkinCare",
    },
    {
      id: 3,
      dProjectName: "FontArt",
      dProjectImg: fontArt,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "FontArt",
    },
    {
      id: 4,
      dProjectName: "Accessories",
      dProjectImg: rings,
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "Accessories",
    },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { projectLink, productLink } = useParams();
  const productsDetailPage =
    projectsDetails.find((p) => p.link === String(projectLink)) &&
    projectsDetails.find((p) => p.link === String(productLink));

  if (!productsDetailPage) return <div>Product Detail not found</div>;

  return (
    <div className={style.allContent}>
      <div className={style.container}>
        <div className={style.backgroundContainer}>
          <h2>{productsDetailPage.dProjectName}</h2>
          <img src={productsDetailPage.dProjectImg} alt="product Img" />
        </div>
        <p className={style.description}>
          {productsDetailPage.dProjectDescription}
        </p>
        <div className={style.contentDiv}>
          <h3>project contents:</h3>
          <div className={style.content}>
            {productsDetailPage.dProjectContents.map((detail, detailIndex) => (
              <div className={style.element}>
                <p className={style.numberP}>
                  {"0"}
                  {detailIndex}
                  {":"}
                </p>
                <p className={style.detailP}>{detail}</p>
                <hr className={style.hrContents} />
              </div>
            ))}
          </div>
        </div>
        <Carousel
          className={style.carousel}
          activeIndex={index}
          variant="dark"
          interval={2500}
          onSelect={handleSelect}
        >
          {productsDetailPage.dProjectReviews.map((review) => (
            <Carousel.Item className={style.carouselItem}>
              <p>{review}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectDetails;
