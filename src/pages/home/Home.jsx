import React, { useEffect } from "react";

// Components
import Category from "../../components/category slider/Category";
import Featured from "../../components/featured items/Featured";
import Listing from "../../components/listing/Listing";

// GLobal state
import { useGlobalContext } from "../../context";

const Home = () => {
  const { mostRecommended, mostPopular } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Category />
      <Featured />
      <Listing title="Most Recommendation" products={mostRecommended} />
      <Listing title="Most Popular" products={mostPopular} />
    </>
  );
};

export default Home;
