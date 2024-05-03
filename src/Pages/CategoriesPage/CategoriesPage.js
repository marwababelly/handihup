import React, { useState } from "react";
import './Categories.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import art from '../../assets/artboxes.jpg';
import knitting from '../../assets/knitting.jpg';
import pastry from '../../assets/pastry.jpg';
import hamburger from '../../assets/hamburger.jpg';
import phonecase from '../../assets/mobile.jpg';
import stickers from '../../assets/stickers.jpg';
import beauty from '../../assets/beauty.jpg';
import accessories from '../../assets/Accessories.jpg'
import backgroundImage from '../../assets/background.jpg'
import {Button , Form , Col , Row , Image , Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const CategoriesPage = () => {
  const items = [
    { id: '1', title: 'Art', description: 'Let\'s dive into some interesting art projects!' , imageUrl: art },
    { id: '2', title: 'Crochet and more', description: 'Let\'s dive into fabulous handmade crochet and knitting!' , imageUrl: knitting },
    { id: '3', title: 'Homemade Food', description: 'If you\'re hungry, this is your best destination!', imageUrl: hamburger },
    { id: '4', title: 'Desserts', description: 'This is the right place for your sweet tooth!' , imageUrl: pastry },
    { id: '5', title: 'Phone Accessories', description: 'Let\'s dive into some pretty handmade phone accessories!' , imageUrl: phonecase},
    { id: '6', title: 'Accessories' , description: 'Let\'s dive into aesthetic collections of handmade accessories!' , imageUrl: accessories} ,
    { id: '7', title: 'Aesthetic Stationery' , description: 'Looking for aesthetic and unique stationery ? here\'s your destination!' , imageUrl: stickers }
  ];

  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const results = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <Container>
    <div>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fef8e5', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2>Categories</h2>
        <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search..." style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', width: '100%', marginBottom: '10px' }} 
         onChange={handleSearchChange} />
        <button type='submit' style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Search</button>
        </form>
      </div>
    </div>
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
        <Row>
      {showMore? (
        items.map((item, index) => (
          <div key={index} className="category-item">
             <Col key={index} xs={12} sm={6} md={6} lg={6}>
            <Link to={`/Categories/${item.id}`}>
              <img src={item.imageUrl} alt={item.title} style={{width: '200px', height: '200px'}} />
              <h2>{item.title}</h2>
              <h3>{item.description}</h3>
            </Link>
             </Col>
          </div>
        ))
      ) : (
        items.slice(0, 4).map((item, index) => (
          <div key={index} className="category-item">
             <Col key={index} xs={12} sm={6} md={6} lg={6}>
            <Link to={`/Categories/${item.id}`}> 
            <img src={item.imageUrl} alt={item.title} style={{width: '200px' , height: '200px'}}/>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            </Link>
            </Col>
          </div>
        ))
      )}
      </Row>
      <Button onClick={toggleShowMore}>{showMore?'View Less': 'View More'}</Button>
    </div>
    </div>
    </Container>
  );
};

export default CategoriesPage;

