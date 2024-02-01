import React, { useState } from "react";
//import ImageItem from "./ImageItem";
import "./ImagesNav.css";
function ImagesNav() {
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    username: "",
    phone: "",
    location: "",
    quantity: typeof Number,
  });
  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };
  return (
    <div className="image-nav__center">
      {showModal && (
        <form className="submit_Modal" onSubmit={submitHandler}>
          <i class="fa-solid fa-xmark" onClick={closeModalHandler}></i>

          <p>Please insert the details</p>
          <input
            name="username"
            type="text"
            placeholder="Name"
            // value={formInputs.name}
            onChange={inputChangeHandler}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            //value={formInputs.phone}
            onChange={inputChangeHandler}
          />
          <input
            name="location"
            type="text"
            placeholder="Deliverly Location"
            // value={formInputs.location}
            onChange={inputChangeHandler}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Number of Books"
            // value={formInputs.quantity}
            onChange={inputChangeHandler}
          />

          <button type="submit">Submit</button>
        </form>
      )}
      <div className="content-page">
        <p className="main_header">Get 70% off all design books</p>
        <p className="book_description">
          When it comes to selecting stellar book-club picks that lead to
          topical, engaging discussions, Good Morning America knows what they
          are doing. Their vibrant social community and exciting selections
          consistently create a fun space for discussions.
        </p>
        <button className="shop_button" onClick={openModalHandler}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default ImagesNav;
