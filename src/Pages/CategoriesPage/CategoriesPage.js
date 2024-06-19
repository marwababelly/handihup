import React, { useState } from "react";
<<<<<<< Updated upstream
import style from "./Categories.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import art from "../../assets/fontArt.jpeg";
import skinCare from "../../assets/skincareness.jpg";
import choco from "../../assets/choco.jpg";
import pottery from "../../assets/PotteryWheel.jpg";
import accessories from "../../assets/beadRings.jpg";
import backgroundImage from "../../assets/background.jpg";
import {
  Button,
  Form,
  Card,
  Col,
  Row,
  Image,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
=======
import style from './Categories.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import art from '../../assets/artboxes.jpg';
import knitting from '../../assets/knit.jpg';
import pastry from '../../assets/pastry.jpg';
import hamburger from '../../assets/hamburger.jpg';
import phonecase from '../../assets/mobile.jpg';
import stickers from '../../assets/stickers.jpg';
import beauty from '../../assets/beauty.jpg';
import accessories from '../../assets/Accessories.jpg'
import backgroundImage from '../../assets/background.jpg'
import {Button , Form , Col , Row , Image , Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
>>>>>>> Stashed changes
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
          <h2 style={{ color: "#88857c" }}>Categories</h2>
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
        <Card className={style.card}>
          <div className="card-body">
            <div role="tabpanel">
              <div className={style.listGroup} role="tablist">
                {filteredItems.map((item) => (
                  <a
                    key={item.id}
                    className={`${style.listGroupItem} ${style.cardLink}`}
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
          </div>
        </Card>
      )}

      <div className={style.container}>
        <div className={style.element}>
          <div className={style.text}>
            <h2>Art</h2>
            <h5>Let's dive into some interesting art projects!</h5>
          </div>
          <img src={art} className={style.image}></img>
          <button className={style.btn}>
            <Link to="/Projects">Read More</Link>
          </button>
        </div>
        <div className={style.element}>
          <div className={style.text}>
            <h2>Skin Care Products</h2>
            <h5>Looking for a clear skin , let's dive in !</h5>
          </div>
          <img src={skinCare} className={style.image}></img>
          <button className={style.btn}>
            <Link to="/Projects">Read More</Link>
          </button>
        </div>
        <div className={style.element}>
          <div className={style.text}>
            <h2>Accessories</h2>
            <h5>
              Let's dive into aesthetic collections <br /> of handmade
              accessories!
            </h5>
          </div>
          <img src={accessories} className={style.image}></img>
          <button className={style.btn}>
            <Link to="/Projects">Read More</Link>
          </button>
        </div>
        <div className={style.element}>
          <div className={style.text}>
            <h2>Pottery</h2>
            <h5>
              If you're interested in pottery , <br /> this is your right place!
            </h5>
          </div>
          <img src={pottery} className={style.image}></img>
          <button className={style.btn}>
            <Link to="/Projects">Read More</Link>
          </button>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
=======
      {filteredItems.length > 0 && (
        <div role="tabpanel">
          <div className='list-group' role="tablist">
            {filteredItems.map(item => (
              <a key={item.id} className={`list-group-item list-group-item-action`} data-bs-toggle="list" href={`#${item.id}`} role="tab"> 
                <h1>{item.title}</h1> 
                <h3>{item.description}</h3>
              </a>
            ))}
          </div>
        </div>
      )}
    <div>
  {showMore ? (
    items.map((item, index) => (
      <Container key={index} >
        <Col key={index} xs={12} sm={6} md={6} lg={6}>
          <Link to={`/Categories/${item.id}`}>
            <img className={style.imgContainer}
              src={item.imageUrl}
              alt={item.title}
              style={{ width: '200px', height: '200px' }}
            />
            <h2 className={style.caption} style={{ color: '#88857c' }}>{item.title}</h2>
            <h3 className={style.caption} style={{ color: '#88857c' }}>{item.description}</h3>
          </Link>
        </Col>
      </Container>
    )) 
  ) : (
    items.slice(0, 4).map((item, index) => (
      <Container key={index}>
        <Col key={index} xs={12} sm={6} md={6} lg={6}>
          <Link to={`/Categories/${item.id}`}>
            <img className={style.imgContainer}
              src={item.imageUrl}
              alt={item.title}
              style={{ width: '200px', height: '200px' }}
            />
            <h2 className={style.caption} style={{ color: '#88857c' }}>{item.title}</h2>
            <h3 className={style.caption} style={{ color: '#88857c' }}>{item.description}</h3>
          </Link>
        </Col>
      </Container>
    )) 
  ) }
<Button onClick={toggleShowMore} style={{ backgroundColor: '#88857c' }}>
  {showMore ? 'View Less' : 'View More'}
</Button>
    </div> 
    </div>
    </Container>
>>>>>>> Stashed changes
  );
};

export default CategoriesPage;
