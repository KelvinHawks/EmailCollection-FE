import React, { useState } from "react";
//import Input from "../../shared/components/formelements/Input";
import Button from "../../shared/components/formelements/Button";
import "./Form.css";
//import { useForm } from "../../shared/hooks/form-hook";
import axios from "axios";
function Form() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    setFormState({
      username: "",
      email: "",
    });
    try {
      const url = "https://mycandidet.onrender.com/api/users/new/user";
      const response = await axios.post(url, formState);
      //console.log(response);
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }
  if (success) {
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  }
  return (
    <div className="container__page" onSubmit={submitHandler}>
      <h3>
        Subscribe now for <span>FREE</span>
      </h3>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}

      <form className="form-control">
        <label htmlFor="username">Username:</label>
        <input
          id="name"
          name="username"
          element="input"
          placeholder="Name"
          type="text"
          label="Name"
          value={formState.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          element="input"
          type="email"
          placeholder="Email"
          label="Email"
          value={formState.email}
          onChange={handleChange}
        />
        <Button className="form-btn">Submit</Button>
      </form>
    </div>
  );
}

export default Form;
