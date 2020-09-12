import React from "react";
import "./header2.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header2() {
  return (
    <div className="header2">
      <div className="header2__imageAndList">
        <div className="header2__locationContainer">
          <LocationOnIcon />
          <div className="header2__option">
            <span className="header2__optionLineOne">Deliver To</span>
            <span className="header2__optionLineTwo">Spain</span>
          </div>
        </div>

        <ul className="header2__ul">
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Gift Cards</li>
          <li>Registry</li>
          <li>Sell</li>
        </ul>
      </div>

      <p className="header2__final">Amazon's response to COVID-19</p>
    </div>
  );
}

export default Header2;
