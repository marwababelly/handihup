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
import Pottery_Wheel from "../../assets/PotteryWheel.jpg";
import Woven_Bag from "../../assets/Woven_Bag.jpg";
import skin_moisturizer from "../../assets/alya skin.jpg"
import coffee_cups from "../../assets/coffee cups.jpg"
import neon_font from "../../assets/neon font.jpg"
import pottery_jar from "../../assets/jar and cups.jpg"
import bead_rings from "../../assets/ring.jpg"
import skin_care from "../../assets/skincare prod.jpg"
import cute_rings from "../../assets/cute rings.jpg"
import neon_art from "../../assets/girls neon art.jpg"

const Overview = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={style.container}>
      <h3 className={style.h3Overview}>Quick Overview</h3>
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
              src={pottery_jar}
              alt="first img"
              className={style.imageOverview}
            />
            <img src={bead_rings} alt="second img" className={style.imageOverview} />
            <img src={skin_moisturizer} alt="third img" className={style.imageOverview} />
          </Container>
          <Container>
            <Carousel.Caption className={style.caption}>
              <h3>Most Liked Products</h3>
              <p>Take a look at these most liked products.</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>

        <Carousel.Item className={style.item}>
          <Container className={style.imgContainer}>
            <img
              src={pottery}
              alt="fourth img"
              className={style.imageOverview}
            />
            <img
              src={skin_care}
              alt="fifth img"
              className={style.imageOverview}
            />
            <img
              src={neon_font}
              alt="sixth img"
              className={style.imageOverview}
            />
          </Container>
          <Carousel.Caption className={style.caption}>
            <Container>
              <h3>Most Famous Projects</h3>
              <p>Take a look at these best selling Projects.</p>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={style.item}>
          <Container className={style.imgContainer}>
            <img
              src={coffee_cups}
              alt="seventh img"
              className={style.imageOverview}
            />
            <img
              src={cute_rings}
              alt="eighth img"
              className={style.imageOverview}
            />
            <img
              src={neon_art}
              alt="ninth img"
              className={style.imageOverview}
            />
          </Container>
          <Carousel.Caption className={style.caption}>
            <h3>Featured Products</h3>
            <p>
              Take a look at these on sale products.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Overview;
