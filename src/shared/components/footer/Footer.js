import React from "react";
import Form from "../../../form/components/Form";
import "./Footer.css";
function Footer({ setMessage }) {
  return (
    <footer className="footer-page">
      <Form setMessage={setMessage} />

      <h3>
        &copy; MYCANDIDET{" "}
        <span>
          <a href="https://twitter.com/mycandidet?t=_vovpHCKaeZmoJ4iI8zmYA&s=09">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </span>
      </h3>
    </footer>
  );
}

export default Footer;
