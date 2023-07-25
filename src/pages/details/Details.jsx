import React from "react";
import { useParams } from "react-router-dom";

// global state
import { useGlobalContext } from "../../context";

// styling
import "./details.scss";

const Details = () => {
  const { getProductById } = useGlobalContext();
  const { id } = useParams();
  const product = getProductById(id);
  console.log(product);

  return <section className="section details">details</section>;
};

export default Details;
