import React from "react";

// styling
import "./category.scss";

// global state
import { useGlobalContext } from "../../context";

const Category = () => {
  const { categories } = useGlobalContext();

  if (categories.length < 1) return;

  return (
    <section className="category">
      {categories.map((cat, index) => {
        return (
          <article className="item" key={index}>
            {cat}
          </article>
        );
      })}
    </section>
  );
};

export default Category;
