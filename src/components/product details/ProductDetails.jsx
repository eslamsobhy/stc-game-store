import React, { useEffect, useState } from "react";

// styling
import "./product-details.scss";

// icons
import { IoStar } from "react-icons/io5";

// global context
import { useGlobalContext } from "../../context";

// components
import Loading from "../loading/Loading";

const ProductDetails = ({ product }) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const { loading } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading />;

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
          <div className={`more ${isReadMoreOpen ? "open" : ""}`}>
            <div>
              <IoStar />
              Brand: {prod.brand}
            </div>
            <div>
              <IoStar />
              Stock: {prod.stock}
            </div>
            <div>
              <IoStar />
              Price: {prod.price}$
            </div>
          </div>
        </div>
        <div
          className="read-more"
          onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
        >
          {isReadMoreOpen ? "Read less" : "Read more"}
        </div>
      </div>
      {prod.rating > 4.5 && <div className="top-rated">Top rated</div>}
    </section>
  );
};

export default ProductDetails;
