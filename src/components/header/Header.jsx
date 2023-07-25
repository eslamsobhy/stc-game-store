import React, { useState } from "react";
import { Link } from "react-router-dom";

// styling
import "./header.scss";

// icons
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";

// components
import Login from "../login/Login";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <header>
      <section className="section header">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png" alt="" />
          </Link>
          <div className="title">Game Store</div>
        </div>
        <div className="actions">
          <AiOutlineSearch color="var(--primary-color)" size={25} />
          <AiOutlineMore
            color="var(--primary-color)"
            size={25}
            onClick={() => setIsLoginOpen(!isLoginOpen)}
          />
        </div>
      </section>
      <Login isLoginOpen={isLoginOpen} closeLogin={closeLogin} />
    </header>
  );
};

export default Header;
