import React from "react";

// styling
import "./header.scss";

// icons
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <section className="section header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
          <div className="title">Game Store</div>
        </div>
        <div className="actions">
          <AiOutlineSearch color="var(--primary-color)" size={25} />
          <AiOutlineMore color="var(--primary-color)" size={25} />
        </div>
      </section>
    </header>
  );
};

export default Header;
