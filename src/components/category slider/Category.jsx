import React from "react";

// icons
import { AiOutlineCheck } from "react-icons/ai";

// styling
import "./category.scss";

// global state
import { useGlobalContext } from "../../context";

const Category = () => {
  const { categories } = useGlobalContext();

  if (categories.length < 1) return;

  return (
    <section className="category">
      <article className="item active" name="all">
        all <AiOutlineCheck />
      </article>
      {categories.map((cat, index) => {
        return (
          <article className="item" name={cat} key={index}>
            {cat}
            <AiOutlineCheck />
          </article>
        );
      })}
    </section>
  );
};

export default Category;
