import React from "react";

// icon
import { FaChevronRight } from "react-icons/fa";

// styling
import "./listing.scss";

const Listing = ({ title, products }) => {
  return (
    <section className="section listing">
      <div className="header">
        <div className="title">{title}</div>
        <div className="see-all">
          see all
          <FaChevronRight size={13} />
        </div>
      </div>
      <div className="items">
        {products.map((prod, index) => {
          if (index < 5) {
            return (
              <div className="item" key={index}>
                <img src={prod.thumbnail} alt={prod.title} />
                <div className="name">{prod.title}</div>
                <div className="info">{prod.brand}</div>
                <div className="btn">more info</div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Listing;
