import React from "react";
import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import style from "./Overview.module.css";
import wool from "../../assets/wool.jpg";
import sweet from "../../assets/sweet.jpg";
import pottery from "../../assets/pottery.jpg";
import White_Vases from "../../assets/white_Vases.jpg";
import Female_Jeweler from "../../assets/Female Jeweler.jpg";
import work_Hand from "../../assets/work_Hand.jpg";
import Knitting from "../../assets/Knitting.jpg";
import Pottery_Wheel from "../../assets/Pottery Wheel.jpg";
import Woven_Bag from "../../assets/Woven_Bag.jpg";

const Overview = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        variant="dark"
        interval={1000}
        className={style.overview}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item className={style.item}>
          <Container className={style.imgContainer}>
            <img
              src={pottery}
              alt="first img"
              className={style.imageOverview}
            />
            <img src={sweet} alt="second img" className={style.imageOverview} />
            <img src={wool} alt="third img" className={style.imageOverview} />
          </Container>
          <Container>
            <Carousel.Caption className={style.caption}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>

        <Carousel.Item className={style.item}>
          <Container className={style.imgContainer}>
            <img
              src={White_Vases}
              alt="fourth img"
              className={style.imageOverview}
            />
            <img
              src={Female_Jeweler}
              alt="fifth img"
              className={style.imageOverview}
            />
            <img
              src={work_Hand}
              alt="sixth img"
              className={style.imageOverview}
            />
          </Container>
          <Carousel.Caption className={style.caption}>
            <Container>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.item}>
          <Container className={style.imgContainer}>
            <img
              src={Knitting}
              alt="seventh img"
              className={style.imageOverview}
            />
            <img
              src={Pottery_Wheel}
              alt="eighth img"
              className={style.imageOverview}
            />
            <img
              src={Woven_Bag}
              alt="ninth img"
              className={style.imageOverview}
            />
          </Container>
          <Carousel.Caption className={style.caption}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Overview;
