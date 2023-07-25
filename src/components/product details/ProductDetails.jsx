import React from "react";

// styling
import "./product-details.scss";

// icons
import { IoStar } from "react-icons/io5";

const ProductDetails = ({ product }) => {
  const [prod] = product;

  return (
    <section className="product-details">
      <img src={prod.thumbnail} alt={prod.title} />
      <div className="info">
        <div className="name">{prod.title}</div>
        <div className="description">{prod.description}</div>
        <div className="infos">
          <div>
            <IoStar />
            Discount percentage: {prod.discountPercentage}
          </div>
          <div>
            <IoStar />
            Rating: {prod.rating}
          </div>
        </div>
        <div className="read-more">Read more</div>
      </div>
      {prod.rating > 4.5 && <div className="top-rated">Top rated</div>}
    </section>
  );
};

export default ProductDetails;
