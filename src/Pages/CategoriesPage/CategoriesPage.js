import React, { useState } from "react";
import style from "./Categories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import art from '../../assets/fontArt.jpeg';
import skinCare from "../../assets/skincareness.jpg";
import choco from "../../assets/choco.jpg";
import pottery from '../../assets/PotteryWheel.jpg'
import accessories from "../../assets/Accessories.jpg";
import backgroundImage from "../../assets/background.jpg";
import { Button, Form, Col, Row, Image, Container } from "react-bootstrap";
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
      description: "Looking for clear skin , let's dive in !",
      imageUrl: skinCare,
    },
    {
      id: "3",
      title: "Accessories",
      description:'Let\'s dive into aesthetic collections of handmade accessories!',
      imageUrl: accessories,
    },
    {
      id: "4",
      title: "Pottery",
      description: "If you interested in pottery , this is your right place!",
      imageUrl: pottery,
    },
  ];


  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const results = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={style.container1}
      >
        <div className={style.content}>
          <h2 style={{color: '#88857c'}}>Categories</h2>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className={style.input}
              onChange={handleSearchChange}
            />
            <button type="submit" className={style.button}>
              Search
            </button>
          </form>
        </div>
      </div>
      {filteredItems.length > 0 && (
        <div role="tabpanel">
          <div className={style.listGroup} role="tablist">
            {filteredItems.map((item) => (
              <a
                key={item.id}
                className={style.listGroupItem}
                data-bs-toggle="list"
                href={`#${item.id}`}
                role="tab"
              >
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
              </a>
            ))}
          </div>
        </div>
      )}
          <div className={style.container}>
            <div className={style.element}>
              <div className={style.text}>
              <h5>Let's dive into some interesting art projects!</h5>
              <h2>Art</h2>
              </div>
              <img src= {art} className={style.image}></img>
              <button className={style.btn}><Link to="/Projects">Read More</Link></button>
            </div>
            <div className={style.element}><div className={style.text}>
              <h5>Looking for clear skin , let's dive in !</h5>
              <h2>Skin Care Product</h2>
              </div>
              <img src= {skinCare} className={style.image}></img>
              <button className={style.btn}><Link to="/Projects">Read More</Link></button>
              </div>
            <div className={style.element}><div className={style.text}>
              <h5>Let's dive into aesthetic collections <br/> of handmade accessories!</h5>
              <h2>Accessories</h2>
              </div>
              <img src= {accessories} className={style.image}></img>
              <button className={style.btn}><Link to="/Projects">Read More</Link></button>
              </div>
            <div className={style.element}><div className={style.text}>
              <h5>If you interested in pottery , <br/> this is your right place!</h5>
              <h2>Pottery</h2>
              </div>
              <img src= {pottery} className={style.image}></img>
              <button className={style.btn}><Link to="/Projects">Read More</Link></button>
              </div>
          </div>

    </div>
  );
};

export default CategoriesPage;
