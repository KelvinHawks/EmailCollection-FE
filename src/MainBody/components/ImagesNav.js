import React, { useEffect, useState } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [check, setCheck] = useState(true);
  // const [isSubmit, setIsSubmit] = useState(false);
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
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is Required";
    }
    if (!values.location) {
      errors.location = "Deliverly location if required";
    }
    if (!values.quantity) {
      errors.quantity = "Number of books required";
    }

    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formInputs));
    // setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      console.log(formInputs);
    }

    // try {

    //   setIsLoading(true);
    //   const url = "http://localhost:5001/api/new/order";
    //   const response = await axios.post(url, formInputs);
    //   setOrderSuccess(response.data.message);
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log(error.response ? error.response.data.message : error.message);
    //   setIsLoading(false);
    // }
    // setFormInputs({
    //   username: "",
    //   phone: "",
    //   location: "",
    //   quantity: typeof Number,
    // });
  };
  // useEffect(() => {
  //   if (Object.keys(formErrors).length > 0) {
  //     setCheck(false);
  //   }
  // }, [formErrors]);
  if (orderSuccess) {
    setTimeout(() => {
      setOrderSuccess(null);
    }, 3000);
  }
  if (formErrors.length > 0) {
    setTimeout(() => {
      setFormErrors({});
    }, 3000);
  }
  return (
    <div className="image-nav__center">
      {showModal && (
        <form className="submit_Modal" onSubmit={submitHandler}>
          <i className="fa-solid fa-xmark" onClick={closeModalHandler}></i>
          {orderSuccess && <div className="success">{orderSuccess}</div>}
          <p className="insert_title">Please insert the details</p>
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
            placeholder="Deliverly Location"
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
        <img src="../../images/banner.jpg" alt="banner" />
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
