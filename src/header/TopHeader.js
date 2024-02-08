import React, { useState } from "react";
import "./TopHeader.css";
import Modal from "../shared/UIelements/Modal";
import Button from "../shared/components/formelements/Button";

const Contact = {
  header: "contact",
};
const About = {
  header: "About",
};
function TopHeader() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const openContactModal = () => {
    setShowContactModal(true);
  };
  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const openAboutModal = () => {
    setShowAboutModal(true);
  };
  const closeAboutModal = () => {
    setShowAboutModal(false);
  };
  return (
    <React.Fragment>
      <Modal
        show={showContactModal}
        header={Contact.header}
        footer={<Button onClick={closeContactModal}>Close</Button>}
        onCancel={closeContactModal}
      >
        <div className="email__div">
          <h2>Email Us</h2>

          <p>mycandidet@gmail.com</p>
        </div>
      </Modal>
      <Modal
        show={showAboutModal}
        header={About.header}
        footer={<Button onClick={closeAboutModal}>Close</Button>}
        onCancel={closeAboutModal}
      >
        <div className="about_p">
          <p>
            MyCandidet is a subscription newsletter that gets you updated on
            Legislative information from both houses of parliament through a
            newsletter that you will read within 2 minutes delivered to your
            Email EVERY SATURDAY at 7am. Subscribe to MyCandidet now. For Free.
            <hr />
            <br></br>To eliminate danger of living life not knowing what MPs and
            Senators are passing into law to govern you
          </p>
        </div>
      </Modal>
      <div className="button__div">
        <Button className="topheader__btn" id="about" onClick={openAboutModal}>
          About
        </Button>
        <Button
          className="topheader__btn"
          onClick={openContactModal}
          id="contact"
        >
          Contact
        </Button>
      </div>
    </React.Fragment>
  );
}

export default TopHeader;
