import { useEffect } from "react";
import "./App.css";

// components
import Header from "./components/header/Header";
import Category from "./components/category slider/Category";

// global state
import { useGlobalContext } from "./context";

function App() {
  const { fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Category />
    </>
  );
}

export default App;
