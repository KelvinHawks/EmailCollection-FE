import React, { useState } from "react";
//import ImageItem from "./ImageItem";
import axios from "axios";
import LoadingSpinner from "../../shared/UIelements/LoadingSpinner";
import "./ImagesNav.css";
function ImagesNav() {
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    username: "",
    phone: "",
    location: "",
    quantity: typeof Number,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
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
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formInputs);
    try {
      setIsLoading(true);
      const url = "http://localhost:5001/api/new/order";
      const response = await axios.post(url, formInputs);
      setOrderSuccess(response.data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response ? error.response.data.message : error.message);
      setIsLoading(false);
    }
    setFormInputs({
      username: "",
      phone: "",
      location: "",
      quantity: typeof Number,
    });
  };
  if (orderSuccess) {
    setTimeout(() => {
      setOrderSuccess(null);
    }, 3000);
  }
  return (
    <div className="image-nav__center">
      {showModal && (
        <form className="submit_Modal" onSubmit={submitHandler}>
          <i className="fa-solid fa-xmark" onClick={closeModalHandler}></i>
          {orderSuccess && <div className="success">{orderSuccess}</div>}
          <p>Please insert the details</p>
          {isLoading && <LoadingSpinner asOverlay />}
          <input
            name="username"
            type="text"
            placeholder="Name"
            value={formInputs.username}
            onChange={inputChangeHandler}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formInputs.phone}
            onChange={inputChangeHandler}
          />
          <input
            name="location"
            type="text"
            placeholder="Deliverly Location"
            value={formInputs.location}
            onChange={inputChangeHandler}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Number of Books"
            value={formInputs.quantity}
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
