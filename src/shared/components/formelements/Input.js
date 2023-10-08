import React, { useReducer } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
      };
    default:
      return state;
  }
};
function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
    });
  };
  // const { id, onInput } = props;
  // const { value } = inputState;
  // useEffect(() => {
  //   onInput(id, value);
  // }, [id, value, onInput]);

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={handleChange}
      />
    ) : (
      <textarea
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={handleChange}
      />
    );
  return <div className="form-control">{element}</div>;
}

export default Input;
