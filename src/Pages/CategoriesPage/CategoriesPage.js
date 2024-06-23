import React, { useState } from "react";
import style from "./Categories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import art from "../../assets/fontArt.jpeg";
import skinCare from "../../assets/skincareness.jpg";
import pottery from "../../assets/PotteryWheel.jpg";
import accessories from "../../assets/beadRings.jpg";
import backgroundImage from "../../assets/background.jpg";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const items = [
    {
      id: "1",
      title: "Art",
      description: "Let's dive into some interesting art projects!",
      imageUrl: art,
    },
    {
      id: "2",
      title: "Skin care products",
      description: "Looking for a clear skin , let's dive in !",
      imageUrl: skinCare,
    },
    {
      id: "3",
      title: "Accessories",
      description:
        "Let's dive into aesthetic collections of handmade accessories!",
      imageUrl: accessories,
    },
    {
      id: "4",
      title: "Pottery",
      description: "If you interested in pottery , this is your right place!",
      imageUrl: pottery,
    },
  ];

  const [filteredItems, setFilteredItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredItems(items); 
    } else {
      const results = items.filter(item => 
        item.title.toLowerCase() === searchTerm.toLowerCase() || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setFilteredItems(results);
    }
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={style.container1}
      >
        <div className={style.content}>
          <h2 style={{ color: "#88857c" }}>Categories</h2>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search by Category..."
              className={style.input}
              onChange={handleSearchChange}
            />
            <button type="submit" className={style.button}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className={style.container}>
        {filteredItems.map(item => (
          <div key={item.id} className={style.element}>
            <div className={style.text}>
              <h2>{item.title}</h2>
              <h5>{item.description}</h5>
            </div>
            <img src={item.imageUrl} className={style.image} alt="Category Image" />
            <button className={style.btn}>
              <Link to={`/Projects/${item.title}`}>Read More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
