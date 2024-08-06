import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Carousel, Form, Button } from "react-bootstrap";
import style from "./ProjectDetails.module.css";
import fontArt from "../../assets/fontArt4.jpg";
import skinCare from "../../assets/skinCare.jpg";
import pottery from "../../assets/pottery3.jpg";
import rings from "../../assets/accessoriesRing.jpg";
import { useParams } from "react-router";
import axios from "axios";

const ProjectDetails = () => {
  const projectsDetails = [
    {
      id: 1,
      dProjectName: "Pottery",
      dProjectImg: [pottery, skinCare, fontArt, rings],
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "Pottery",
      dPrice: "500$",
      available: true,
    },
    {
      id: 2,
      dProjectName: "SkinCare",
      dProjectImg: [pottery, skinCare, fontArt, rings],
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "SkinCare",
      dPrice: "500$",
      available: false,
    },
    {
      id: 3,
      dProjectName: "FontArt",
      dProjectImg: [pottery, skinCare, fontArt, rings],
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "FontArt",
      dPrice: "500$",
      available: true,
    },
    {
      id: 4,
      dProjectName: "Accessories",
      dProjectImg: [pottery, skinCare, fontArt, rings],
      dProjectDescription:
        "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start This is your Project description. Provide a brief summary to help visitors understand the context and background of your work. Click on or double click on the text box to start.",
      dProjectContents: ["pottery", "pen", "ink", "clay"],
      dProjectReviews: [
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
        "Nulla vitae elit libero, a pharetra augue mollis interdum Null vitae elit libero, a pharetra augue mollis interdum Nulla vitae elitlibero, a pharetra augue mollis interdum Nulla vitae elit libero, apharetra augue mollis interdum.",
      ],
      link: "Accessories",
      dPrice: "500$",
      available: false,
    },
  ];

  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [report, setReport] = useState();
  const [getProductDetails, setGetProductDetails] = useState([]);

  const reportRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/Projects/${projectId}/product/${productId}`
        );
        setGetProductDetails(response.data);
      } catch (error) {
        console.error("Error featching Products: ", error);
      }
    };
    fetchProduct();
  }, []);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    reportRef.current.value = "";
  };

  const handleReport = (e) => {
    setReport(e.target.value);
  };
  const reviewRef = useRef(null);

  const handleAddReview = (event) => {
    event.preventDefault();
    const newReview = reviewRef.current.value.trim();
    if (newReview) {
      setReviews([...reviews, newReview]);
      reviewRef.current.value = "";
    }
  };

  const reviewSlides = reviews.map((review, index) => (
    <Carousel.Item key={index} className={style.carouselItem}>
      <p className={style.par}>{review}</p>
    </Carousel.Item>
  ));

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { projectId, productId } = useParams();
  const productsDetailPage =
    projectsDetails.find((p) => p.id === Number(projectId)) &&
    projectsDetails.find((p) => p.id === Number(productId));

  if (!productsDetailPage) return <div>Product Detail not found</div>;

  return (
    <div className={style.allContent}>
      <div className={style.container}>
        <div className={style.backgroundContainer}>
          <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
            {productsDetailPage.getProductDetails.dProjectName}
          </h2>
          <Carousel
            className={style.carouselImg}
            activeIndex={index}
            variant="dark"
            interval={2500}
            onSelect={handleSelect}
          >
            {" "}
            {productsDetailPage.getProductDetails.dProjectImg.length > 0 &&
              productsDetailPage.getProductDetails.dProjectImg.map(
                (img, index) => (
                  <Carousel.Item className={style.carouselItemImg}>
                    <img
                      className={style.img}
                      key={index}
                      src={img}
                      alt="alt img"
                    />
                  </Carousel.Item>
                )
              )}
          </Carousel>
          <div className={style.pIcon}>
            <p className={style.price}>
              The price per piece is:{" "}
              {productsDetailPage.getProductDetails.dPrice}
            </p>
            <div className={style.availableIcon}>
              {productsDetailPage.getProductDetails.available ? (
                <>
                  <p>Available</p>
                  <FontAwesomeIcon
                    className={style.iconEnable}
                    icon={faCircleCheck}
                    size="3x"
                  />
                </>
              ) : (
                <>
                  <p>Not Available</p>
                  <FontAwesomeIcon
                    className={style.iconDisable}
                    icon={faCircleCheck}
                    size="3x"
                  />{" "}
                </>
              )}
            </div>
          </div>
        </div>
        <p className={style.description}>
          {productsDetailPage.getProductDetails.dProjectDescription}
        </p>
        <div className={style.contentDiv}>
          <h3 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
            project contents:
          </h3>
          <div className={style.content}>
            {productsDetailPage.getProductDetails.dProjectContents.map(
              (detail, detailIndex) => (
                <div className={style.element}>
                  <p className={style.numberP}>
                    {"0"}
                    {detailIndex}
                    {":"}
                  </p>
                  <p className={style.detailP}>{detail}</p>
                  <hr className={style.hrContents} />
                </div>
              )
            )}
          </div>
        </div>
        <h3 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
          Reviews
        </h3>
        <Carousel
          className={style.carousel}
          activeIndex={index}
          variant="dark"
          interval={2500}
          onSelect={handleSelect}
        >
          {productsDetailPage.getProductDetails.dProjectReviews.length > 0 &&
            productsDetailPage.getProductDetails.dProjectReviews.map(
              (review, index) => (
                <Carousel.Item className={style.carouselItem}>
                  <p key={index} className={style.par}>
                    {review}
                  </p>
                </Carousel.Item>
              )
            )}
          {reviewSlides}
        </Carousel>

        <Form onSubmit={handleAddReview}>
          <Form.Group className="mb-3" controlId="addReview">
            <Form.Label className={style.label}>Add Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="description"
              className={style.customInput}
              ref={reviewRef}
              required
            />
          </Form.Group>
          <div className={style.divBtn}>
            <Button className={style.button} type="submit">
              Add
            </Button>
          </div>
        </Form>
        <div className={style.reportSession}>
          <h5 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
            If anything happens that is illegal or not beneficial to the site's
            desires, please report it{" "}
          </h5>
          <Form onSubmit={handleSubmitReport} className={style.reportForm}>
            <Form.Group className="mb-3" controlId="addReport">
              <Form.Control
                type="text"
                className={style.customInput}
                value={report}
                onChange={handleReport}
                ref={reportRef}
                required
              />
            </Form.Group>
            <Button className={style.button} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
