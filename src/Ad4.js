import React from "react";
import "./ad4.css";
import service1 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service1.jpg";
import service2 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service2.jpg";
import service3 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service3.jpg";
import service4 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service4.jpg";
import service5 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service5.jpg";
import service6 from "/Users/stevenpayne/Desktop/amazon-clone/amazon-clone/src/images/services-bar-images/service6.png";

function Ad4() {
  return (
    <div className="ad4">
      <div className ="ad4__h2Container">
        <h2>Amazon's services</h2>
        <p>Click to learn more</p>
      </div>
      <div className ="ad4__imageContainer">
        <img src={service1}></img>
        <img src={service2}></img>
        <img src={service3}></img>
        <img src={service4}></img>
        <img src={service5}></img>
        <img src={service6}></img>
      </div>
    </div>
  );
}

export default Ad4;
