import { useEffect } from "react";
import "./App.css";

// components
import Header from "./components/header/Header";
import Category from "./components/category slider/Category";
import Featured from "./components/featured items/Featured";
import Listing from "./components/listing/Listing";

// global state
import { useGlobalContext } from "./context";

function App() {
  const { fetchData, mostRecommended, mostPopular } = useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Category />
      <Featured />
      <Listing title="Most Recommendation" products={mostRecommended} />
      <Listing title="Most Popular" products={mostPopular} />
    </>
  );
}

export default App;
