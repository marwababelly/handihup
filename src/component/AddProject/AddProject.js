import React from "react";
import img1 from "../../assets/categoryBackground.jpg";
import img2 from "../../assets/AddProjectImage.jpg";
import { Row, Col, Button } from "react-bootstrap";
import style from "./AddProject.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink , Nav} from "react-bootstrap";

const AddProject = () => {
  const { token, user, userRole, isAuth } = useSelector((state) => state.auth);

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
            { !isAuth && (
              <Link to="/signUp">Join Us!</Link>
            ) }
            { userRole === "user" && (
              <Link to="/signUp">Join Us!</Link>
            ) }
            { isAuth && userRole === "owner" && (
               <Nav.Link href="/add-project-page">Add Project</Nav.Link>
            )}
           
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddProject;
