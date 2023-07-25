import React from "react";

// icons
import { AiOutlineCheck } from "react-icons/ai";

// styling
import "./category.scss";

// global state
import { useGlobalContext } from "../../context";

const Category = () => {
  const { categories, category, setCategory } = useGlobalContext();

  if (categories.length < 1) return;

  return (
    <section className="category">
      <article
        className={`item ${category === "all" ? "active" : ""}`}
        name="all"
        onClick={() => setCategory("all")}
      >
        all <AiOutlineCheck />
      </article>
      {categories.map((cat, index) => {
        return (
          <article
            className={`item ${category === cat ? "active" : ""}`}
            name={cat}
            key={index}
            onClick={() => setCategory(cat)}
          >
            {cat}
            <AiOutlineCheck />
          </article>
        );
      })}
    </section>
  );
};

export default Category;
