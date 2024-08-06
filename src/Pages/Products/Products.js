import React, { useState, useEffect } from "react";
import style from "./Products.module.css";
import rings from "../../assets/Accessories.jpg";
import pottery from "../../assets/PotteryPlates.jpg";
import skincare from "../../assets/skinCareOil.jpg";
import { useParams } from "react-router-dom";
import neonArt from "../../assets/neon.jpg";
import { Card, Button, NavLink } from "react-bootstrap";
import axios from "axios";
const productsList = [
  {
    id: 1,
    projectName: "Pottery",
    image: pottery,
    title: "Pottery Plates",
    description: "Beautiful and Colourful handmade pottery plates",
    link: "Pottery",
  },
  {
    id: 2,
    projectName: "SkinCare",
    image: skincare,
    title: "Essential Oil ",
    description: "Cosmetic and Natural oil for a better skin",
    link: "SkinCare",
  },
  {
    id: 3,
    projectName: "FontArt",
    image: neonArt,
    title: "Neon Quotes Art",
    description: "Decorate your home with these amazing Neon Art",
    link: "FontArt",
  },
  {
    id: 4,
    projectName: "Accessories",
    image: rings,
    title: "Bead Rings",
    description: "Spacious amount of trendy bead rings ",
    link: "Accessories",
  },
];

const Products = () => {
  const [getProduct, setGetProduct] = useState([]);
  const { projectId } = useParams();
  const product = productsList.find((p) => p.id === Number(projectId));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/Projects/${projectId}/product`
        );
        setGetProduct(response.data);
      } catch (error) {
        console.error("Error featching Products: ", error);
      }
    };
    fetchProduct();
  }, []);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      {getProduct.map((product) => (
        <Card className={style.card}>
          <Card.Body>
            <Card.Img className={style.img} variant="top" src={product.image} />
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <NavLink href={`/Projects/${product.id}/product/${product.id}`}>
              <Button className={style.btn}>View Details</Button>
            </NavLink>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default Products;
