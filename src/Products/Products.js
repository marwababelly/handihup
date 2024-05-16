import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import style from "./Products.module.css";
import rings from "../assets/Rings.jpg";
import pottery from "../assets/PotteryPlates.jpg";
import skincare from "../assets/skinCareOil.jpg";
import { useParams } from "react-router-dom";
import neonArt from "../assets/neon.jpg";
import { Card, Button } from "react-bootstrap";
const productsList = [
  {
    id: 1,
    image: pottery,
    title: "Pottery Plates",
    description: "Beautiful and Colourful handmade pottery plates",
    link: "pottery",
  },
  {
    id: 2,
    image: skincare,
    title: "Essential Oil ",
    description: "Cosmetic and Natural oil for a better skin",
    link: "skinCare",
  },
  {
    id: 3,
    image: neonArt,
    title: "Neon Quotes Art",
    description: "Decorate your home with these amazing Neon Art",
    link: "fontArt",
  },
  {
    id: 4,
    image: rings,
    title: "Bead Rings",
    description: "Spacious amount of trendy bead rings ",
    link: "accessories",
  },
];

const Products = () => {
  const { productLink } = useParams();
  const product = productsList.find((p) => p.link === String(productLink));
  if (!product) return <div>Product not found</div>;
  {
    /*const filteredProducts = productsList.filter(product => product.id.toString() === productId);*/
  }
  // console.log("Extracted productId:", productId);
  // console.log(
  //   "Product IDs in list:",
  //   productsList.map((p) => p.id)
  // );
  return (
    <Card className={style.card}>
      <Card.Img className={style.img} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button className={style.btn}>View Details</Button>
      </Card.Body>
    </Card>
  );
};
export default Products;
