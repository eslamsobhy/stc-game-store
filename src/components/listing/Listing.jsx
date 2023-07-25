import React from "react";
import { Link } from "react-router-dom";

// icon
import { FaChevronRight, FaStar } from "react-icons/fa";

// styling
import "./listing.scss";

// components
import Loading from "../loading/Loading";

// global state
import { useGlobalContext } from "../../context";

const Listing = ({ title, products }) => {
  const { loading } = useGlobalContext();

  if (loading) return <Loading />;

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
                <Link to={`/details/${prod.id}`}>
                  <div className="btn">more info</div>
                </Link>
                <div className="rating">
                  <FaStar color="var(--primary-color)" />
                  {prod.rating}
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Listing;
