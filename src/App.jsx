import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Error from "./pages/error/Error";

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
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
