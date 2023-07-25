import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";

// The initial state
const initialState = {
  loading: true,
  category: "all",
  products: [],
  mostRecommended: [],
  mostPopular: [],
  categories: [],
};

// create the context
export const AppContext = createContext();

// create the context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch data from APIs
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    await axios.get("https://dummyjson.com/products").then((res) => {
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    });
    await axios.get("https://dummyjson.com/products/categories").then((res) => {
      dispatch({ type: "SET_CATEGORIES", payload: res.data });
    });
    dispatch({ type: "PREPARE_DATA" });
    dispatch({ type: "DISPLAY_DATA" });
  };

  // get product by id
  const getProductById = (id) => {
    return state.products.products?.filter((prod) => prod.id == id);
  };

  // set category
  const setCategory = (cat) => {
    if (cat === "all") {
      dispatch({ type: "PREPARE_DATA" });
    } else {
      dispatch({ type: "FILTER_BY_CATEGORY", payload: cat });
    }
    dispatch({ type: "SET_CATEGORY", payload: cat });
  };

  return (
    <AppContext.Provider
      value={{ ...state, fetchData, getProductById, setCategory }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
