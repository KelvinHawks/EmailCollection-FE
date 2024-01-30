import React from "react";
//import ImageItem from "./ImageItem";
import "./ImagesNav.css";
function ImagesNav() {
  return (
    <div className="image-nav__center">
      <div className="content-page">
        <p className="main_header">Get 70% off all design books</p>
        <p className="book_description">
          When it comes to selecting stellar book-club picks that lead to
          topical, engaging discussions, Good Morning America knows what they
          are doing. Their vibrant social community and exciting selections
          consistently create a fun space for discussions.
        </p>
        <button className="shop_button"> ORDER NOW</button>
      </div>
    </div>
  );
}

export default ImagesNav;
