import React, { useState } from "react";
import style from "./Categories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import art from "../../assets/artboxes.jpg";
import skinCare from "../../assets/skincareness.jpg";
import choco from "../../assets/choco.jpg";
import hamburger from "../../assets/hamburger.jpg";
import phonecase from "../../assets/mobile.jpg";
import stickers from "../../assets/stickers.jpg";
import beauty from "../../assets/beauty.jpg";
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
      title: "Desserts",
      description: "This is the right place for your sweet tooth!",
      imageUrl: choco,
    },
    {
      id: "4",
      title: "Accessories",
      description:
        "Let's dive into aesthetic collections of handmade accessories!",
      imageUrl: accessories,
    },
  ];

  const uniqueItems = [
    ...new Set(items.map((item) => JSON.stringify(item))),
  ].map((item) => JSON.parse(item));

  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
        className={style.container}
      >
        <div className={style.content}>
          <h2>Categories</h2>
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
      <div>
        {showMore
          ? uniqueItems.map((item, index) => (
              <div className={style.categoryItem} key={item.id || index}>
                <div className={style.categoryImage}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={style.img1}
                  />
                  {index < uniqueItems.length - 1 && (
                    <img
                      src={uniqueItems[index + 1].imageUrl}
                      alt={uniqueItems[index + 1].title}
                      className={style.img1}
                    />
                  )}
                </div>
                <div className={style.categoryText}>
                  <div className={style.categoryText1}>
                    <h2>{item.title} </h2>
                    <h5>{item.description}</h5>
                  </div>
                  {index < uniqueItems.length - 1 && (
                    <div className={style.categoryText1}>
                      <h2>{uniqueItems[index + 1].title}</h2>
                      <h5>{uniqueItems[index + 1].description}</h5>
                    </div>
                  )}
                </div>
              </div>
            ))
          : uniqueItems.slice(0, 2).map((item, index) => (
              <div className={style.categoryItem} key={item.id || index}>
                <div className={style.categoryImage}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={style.img1}
                  />
                  {index < uniqueItems.slice(0, 2).length - 1 && (
                    <img
                      src={uniqueItems.slice(0, 2)[index + 1].imageUrl}
                      alt={uniqueItems.slice(0, 2)[index + 1].title}
                      className={style.img1}
                    />
                  )}
                </div>
                <div className={style.categoryText}>
                  <div className={style.categoryText1}>
                    <h2>{item.title}</h2>
                    <h5>{item.description}</h5>
                  </div>
                  {index < uniqueItems.slice(0, 2).length - 1 && (
                    <div className={style.categoryText1}>
                      <h2>{uniqueItems.slice(0, 2)[index + 1].title} </h2>
                      <h5>{uniqueItems.slice(0, 2)[index + 1].description}</h5>
                    </div>
                  )}
                </div>
              </div>
            ))}
        <Button className={style.btn} onClick={toggleShowMore}>
          {showMore ? "View Less" : "View More"}
        </Button>
      </div>
    </div>
  );
};

export default CategoriesPage;
