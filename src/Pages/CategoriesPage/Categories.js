import React from "react";
import style from "./Categories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import art from "../../assets/fontArt.jpeg";
import skinCare from "../../assets/skincareness.jpg";
import choco from "../../assets/choco.jpg";
import pottery from "../../assets/PotteryWheel.jpg";
import accessories from "../../assets/beadRings.jpg";
import backgroundImage from "../../assets/background.jpg";
import { Link } from "react-router-dom";
export const CategoryList = () =>{
    const {categoryTitle} = useParams();
   
    const categories= [
         {
            id: "1",
            title: "Art",
            description: "Let's dive into some interesting art projects!",
            imageUrl: art,
            link: "Art",
          },
          {
            id: "2",
            title: "Skin care products",
            description: "Looking for a clear skin , let's dive in !",
            imageUrl: skinCare,
            link: "Skin care products",
          },
          {
            id: "3",
            title: "Accessories",
            description:
              "Let's dive into aesthetic collections of handmade accessories!",
            imageUrl: accessories,
            link: "Accessories",
          },
          {
            id: "4",
            title: "Pottery",
            description: "If you interested in pottery , this is your right place!",
            imageUrl: pottery,
            link: "Pottery",
          },
    ];
    const selectedCategory = categories.find(category => category.title === categoryTitle);

    return (
      <div className={style.container}>
        {selectedCategory? (
          <div>
          <div className={style.element}>
          <div className={style.text}>
          <h2>{selectedCategory.title}</h2>
          <p>{selectedCategory.description}</p>
          </div>
          <img src={selectedCategory.imageUrl} className={style.image}></img>
          <button className={style.btn}>
            <Link to="/Projects">Read More</Link>
          </button>
        </div>
          </div>

        ) : (
          <p>No category found.</p>
        )}
      </div>
    );
  
} 
export default CategoryList