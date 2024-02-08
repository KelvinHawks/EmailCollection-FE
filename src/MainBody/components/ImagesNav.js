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
  const [orderError, setOrderError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setFormInputs({
      username: "",
      phone: "",
      location: "",
      quantity: typeof Number,
    });
    setFormErrors({});
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
    const errors = {};
    if (!formInputs.username) {
      errors.username = "Username is required";
    }
    if (!formInputs.phone) {
      errors.phone = "Phone Number is Required";
    }
    if (!formInputs.location) {
      errors.location = "Deliverly location is required";
    }
    if (formInputs.quantity <= 0) {
      errors.quantity = "Number of books required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsLoading(true);
      const url = "https://mycandidet.onrender.com/api/new/order";
      const response = await axios.post(url, formInputs);
      setOrderSuccess(response.data.message);
      setIsLoading(false);
    } catch (error) {
      setOrderError(
        error.response ? error.response.data.message : error.message
      );
      setIsLoading(false);
    }
    setFormInputs({
      username: "",
      phone: "",
      location: "",
      quantity: typeof Number,
    });
    setFormErrors({});
  };

  if (orderSuccess) {
    setTimeout(() => {
      setOrderSuccess(null);
    }, 4000);
  }
  if (orderError) {
    setTimeout(() => {
      setOrderError(null);
    }, 4000);
  }

  return (
    <div className="image-nav__center">
      {showModal && (
        <form className="submit_Modal" onSubmit={submitHandler}>
          <i className="fa-solid fa-xmark" onClick={closeModalHandler}></i>
          <p className="insert_title">Please insert the details</p>
          {orderSuccess && <p className="success">{orderSuccess}</p>}
          {orderError && <p className="error">{orderError}</p>}
          {isLoading && <LoadingSpinner asOverlay />}
          <p className="error_message">{formErrors.username}</p>
          <input
            name="username"
            type="text"
            placeholder="Name"
            value={formInputs.username}
            onChange={inputChangeHandler}
          />
          <p className="error_message">{formErrors.phone}</p>
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formInputs.phone}
            onChange={inputChangeHandler}
          />
          <p className="error_message">{formErrors.location}</p>
          <input
            name="location"
            type="text"
            placeholder="Delivery Location"
            value={formInputs.location}
            onChange={inputChangeHandler}
          />
          <p className="error_message">{formErrors.quantity}</p>
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

      <div className="banner_img-main">
        <img src="../../images/banner1.jpg" alt="banner" />
      </div>
      <div className="content-page">
        <button className="shop_button" onClick={openModalHandler}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default ImagesNav;
