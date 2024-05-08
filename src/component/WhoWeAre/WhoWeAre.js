import React from "react";
import handMade from "../../assets/Handmade.jpg";
import whitevases from "../../assets/white_Vases.jpg";
import { Row, Col, Button } from "react-bootstrap";
import style from "./WhoWeAre.module.css";
import { Link } from "react-router-dom";
const WhoWeAre = () => {
  return (
    <div className={style.container}>
      <Row className={style.Row}>
        <Col>
          <div className={style.imageContainer}>
            <img src={handMade} className={style.backgroundImage} />
            <img src={whitevases} className={style.overlayImage} />
          </div>
        </Col>
        <Col>
          <h1 className="mb-2">Who We Are</h1>
          <h3 className="mb-4">My Approach</h3>
          <p>
            I recently completed a project that was both challenging and
            rewarding. I had to find the right tools and resources to make it
            happen. But with hard work and dedication, I was able to create
            something truly special. Check out my project and see what I
            accomplished.
          </p>
          <Button className={style.contactButton}>
            <Link to="/add-project">Contact us</Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default WhoWeAre;
