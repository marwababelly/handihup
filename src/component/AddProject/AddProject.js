import React from "react";
import img1 from "../../assets/categoryBackground.jpg";
import img2 from "../../assets/AddProjectImage.jpg";
import { Row, Col, Button } from "react-bootstrap";
import style from "./AddProject.module.css";
import { Link } from "react-router-dom";
const AddProject = () => {
  return (
    <div className={style.container}>
      <Row className={style.Row}>
        <Col>
          <div className={style.imageContainer}>
            <img src={img1} className={style.backgroundImage} alt="" />
            <img src={img2} className={style.overlayImage} alt="" />
          </div>
        </Col>
        <Col>
          <h1 className="mb-2">Add Your Project</h1>
          <h3 className="mb-4">About Us</h3>
          <p>
            I recently completed a project that was both challenging and
            rewarding. I had to find the right tools and resources to make it
            happen. But with hard work and dedication, I was able to create
            something truly special. Check out my project and see what I
            accomplished.
          </p>
          <Button className={style.contactButton}>
            <Link to="/add-project-page">Add Project</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddProject;
