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
        <img alt="logo1" src={service1}></img>
        <img alt="logo2" src={service2}></img>
        <img alt="logo3" src={service3}></img>
        <img alt="logo4" src={service4}></img>
        <img alt="logo5" src={service5}></img>
        <img alt="logo6" src={service6}></img>
      </div>
    </div>
  );
}

export default Ad4;
