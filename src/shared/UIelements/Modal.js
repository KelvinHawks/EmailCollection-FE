import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import Backdrop from "./Backdrop";
//import Button from '../components/formelements/Button'

const ModalOverlay = (props) => {
  const Content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className="modal__header">
        <h2>{props.header}</h2>
      </header>
      <div className="content__div">{props.children}</div>
      <footer className="modal__footer">{props.footer}</footer>
    </div>
  );
  return ReactDOM.createPortal(Content, document.getElementById("modal-hook"));
};

function Modal(props) {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
}

export default Modal;
