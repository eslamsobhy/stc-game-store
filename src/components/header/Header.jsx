import React from "react";

// icons
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <section className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
          <div className="title">Game Store</div>
        </div>
        <div className="actions">
          <AiOutlineSearch />
          <AiOutlineMore />
        </div>
      </section>
    </header>
  );
};

export default Header;
