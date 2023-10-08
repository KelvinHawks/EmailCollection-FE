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
        <div>
          <h2>Contact Us</h2>

          <p>Tell:0793895180/0787646041</p>
        </div>
      </Modal>
      <Modal
        show={showAboutModal}
        header={About.header}
        footer={<Button onClick={closeAboutModal}>Close</Button>}
        onCancel={closeAboutModal}
      >
        <div>
          <p>
            Welcome to <b>MyCandidet</b> We will give you analytics on the
            candidates you elected to office and how they are doing so far,
            reforms they have made, contributions , legislations proposed ,
            completed , votes on various bills in parliament, their constituents
            development and more. Who needs to be re-elected and who does not.
            Stay updated everyday on such crucial information in order to make
            an informed decision come the general election.{" "}
            <b>Subscribe Now to MyCandidet for FREE</b>
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
