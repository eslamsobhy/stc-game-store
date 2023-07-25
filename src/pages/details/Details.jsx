import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// global state
import { useGlobalContext } from "../../context";

// styling
import "./details.scss";

const Details = () => {
  const { getProductById, products } = useGlobalContext();
  const { id } = useParams();
  let product = [];

  useEffect(() => {
    product = getProductById(id);
    console.log(product);
  }, [products]);

  return <section className="section details">details</section>;
};

export default Details;
