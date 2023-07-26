import React from "react";
import { Link } from "react-router-dom";

// styling
import "./footer.scss";

// icons
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <section className="section footer">
        <div className="icons">
          <BsFacebook size={25} color="#ffffff" />
          <BsTwitter size={25} color="#ffffff" />
          <BsInstagram size={25} color="#ffffff" />
          <BsLinkedin size={25} color="#ffffff" />
        </div>
        <div className="links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <div>About</div>
          <div>Services</div>
          <div>Team</div>
          <div>Contact</div>
        </div>
        <div className="copy-rights">
          ©2023 STC - Game Store | All Rights Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
