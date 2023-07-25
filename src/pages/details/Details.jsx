import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// global state
import { useGlobalContext } from "../../context";

// styling
import "./details.scss";

// components
import ProductDetails from "../../components/product details/ProductDetails";
import Listing from "../../components/listing/Listing";

const Details = () => {
  const { getProductById, mostRecommended } = useGlobalContext();
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <section className="section details">
      <ProductDetails product={product} />
      <Listing title="Most Recommendation" products={mostRecommended} />
    </section>
  );
};

export default Details;
