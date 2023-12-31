const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_DATA":
      return { ...state, loading: false };
    case "PREPARE_DATA":
      const mostRec = state.products.products.filter(
        (prod) => prod.price < 500
      );
      const mostPop = state.products.products.filter(
        (prod) => prod.rating > 4.5
      );
      return { ...state, mostRecommended: mostRec, mostPopular: mostPop };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      const newRecommended = state.products.products.filter(
        (prod) => prod.category === action.payload && prod.price < 500
      );
      const newPopular = state.products.products.filter(
        (prod) => prod.category === action.payload && prod.rating > 4.5
      );
      return {
        ...state,
        mostRecommended: newRecommended,
        mostPopular: newPopular,
      };
    default:
      return state;
  }
};

export default reducer;
