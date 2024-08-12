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
import { useSelector } from "react-redux";

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
  const { projectLink, productLink } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [index, setIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [report, setReport] = useState();
  const [getProductDetails, setGetProductDetails] = useState([]);
  const [postReport, setPostReport] = useState({
    description: "",
    product_id: productLink,
    user_id: user.id,
  });
  const [postReview, setPostReview] = useState({
    description: "",
    product_id: productLink,
    user_id: user.id,
  });

  const reportRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    reportRef.current.focus();
    reviewRef.current.focus();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/Projects/${projectLink}/product/${productLink}`
        );
        setGetProductDetails(response.data);
      } catch (error) {
        console.error("Error featching Products: ", error);
      }
    };
    fetchProduct();
  }, []);

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Projects/${productLink}/report`,
        postReport
      );
      console.log("form is ", postReport, "response is: ", response);
    } catch (error) {
      console.log("error is ", error);
    }
    alert("Form submitted successfully!");
    reportRef.current.value = "";
    setReport("");
  };

  const handleReportChange = (e) => {
    e.preventDefault();
    setPostReport({ ...postReport, [e.target.name]: e.target.value });
  };

  const handleReviewChange = (e) => {
    e.preventDefault();
    setPostReview({ ...postReview, [e.target.name]: e.target.value });
  };

  const handleAddReview = async (event) => {
    event.preventDefault();
    const newReview = reviewRef.current.value.trim();
    if (newReview) {
      setReviews([...reviews, newReview]);
      reviewRef.current.value = "";
    }
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/Projects/${productLink}/review`,
        postReview
      );
      console.log("form is ", postReview, "response is: ", response);
    } catch (error) {
      console.log("error is ", error);
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

  const productsDetailPage =
    projectsDetails.find((p) => p.id === Number(projectLink)) &&
    projectsDetails.find((p) => p.id === Number(productLink));

  if (!productsDetailPage) return <div>Product Detail not found</div>;

  return (
    <div className={style.allContent}>
      <div className={style.container}>
        <div className={style.backgroundContainer}>
          <h2 className="fw-bold mb-2 text-center text-uppercase text-secondary">
            {getProductDetails.name}
          </h2>
          {/* <Carousel
            className={style.carouselImg}
            activeIndex={index}
            variant="dark"
            interval={2500}
            onSelect={handleSelect}
          >
            {" "}
            {projectsDetails.dProjectImg.length > 0 &&
              projectsDetails.dProjectImg.map((img, index) => (
                <Carousel.Item className={style.carouselItemImg}>
                  <img
                    className={style.img}
                    key={index}
                    src={img}
                    alt="alt img"
                  />
                </Carousel.Item>
              ))}
          </Carousel> */}
          <div className={style.pIcon}>
            <p className={style.price}>
              The price per piece is: {getProductDetails.price}
            </p>
            <div className={style.availableIcon}>
              {getProductDetails.available ? (
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
          {getProductDetails.dProjectDescription}
        </p>
        <div className={style.contentDiv}>
          <h3 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
            project contents:
          </h3>
          {/* <div className={style.content}>
            {getProductDetails.dProjectContents.map((detail, detailIndex) => (
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
          </div> */}
        </div>
        <h3 className="fw-bold mb-2 text-center text-uppercase text-secondary mt-3">
          Reviews
        </h3>
        {/* <Carousel
          className={style.carousel}
          activeIndex={index}
          variant="dark"
          interval={2500}
          onSelect={handleSelect}
        >
          {getProductDetails.dProjectReviews.length > 0 &&
            getProductDetails.dProjectReviews.map((review, index) => (
              <Carousel.Item className={style.carouselItem}>
                <p key={index} className={style.par}>
                  {review}
                </p>
              </Carousel.Item>
            ))}
          {reviewSlides}
        </Carousel> */}

        <Form onSubmit={handleAddReview}>
          <Form.Group className="mb-3" controlId="addReview">
            <Form.Label className={style.label}>Add Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="description"
              name="review"
              onChange={handleReviewChange}
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
                name="report"
                type="text"
                className={style.customInput}
                value={postReport.report}
                onChange={handleReportChange}
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
