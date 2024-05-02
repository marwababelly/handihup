import React from "react";
import 'bootstrap'
import art from '../../assets/artboxes.jpg'
import knitting from '../../assets/knitting.jpg'
import pastry from '../../assets/pastry.jpg'
import hamburger from '../../assets/hamburger.jpg'
import phonecase from '../../assets/mobile.jpg'
const CategoriesPage = () => {
  return (
  <div role="tabpanel" >
  <div class="list-group" id="myList" role="tablist">  
    <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">
      <img src={art} width='200' height='200' /> 
      <h1>Art</h1> 
       <h3>Let's dive into some interesting art projects !</h3></a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">
      <img src={knitting} width='200' height='200'/>
      <h1>Crochet and more</h1>
      <h3>Let's dive into fabulous handmade crochet and knitting!</h3>
    </a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">
    <img src={hamburger} width='200' height='200'/>
      <h1>Homemade Food</h1>
      <h3>If you're hungry , this is your best destination!</h3>
      </a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">
    <img src={pastry} width='200' height='200'/>
      <h1>Desserts</h1>
      <h3>This is the right place for your sweet tooth!</h3>
      </a>
      <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">
    <img src={phonecase} width='200' height='200'/>
      <h1>Phone Accessories</h1>
      <h3>Let's dive into some pretty handmade phone acessories!</h3>
      </a>
  </div>
  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel">...</div>
    <div class="tab-pane" id="profile" role="tabpanel">...</div>
    <div class="tab-pane" id="messages" role="tabpanel">...</div>
    <div class="tab-pane" id="settings" role="tabpanel">...</div>
  </div>
</div>
)
};

export default CategoriesPage;
