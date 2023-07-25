import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/header/Header";

// Pages
import Home from "./pages/home/Home";

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
