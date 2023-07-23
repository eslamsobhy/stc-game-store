import React from "react";

// styling
import "./featured.scss";

const Featured = () => {
  return (
    <section className="section featured">
      <img src="/assets/featured.png" alt="" />
      <article className="info">
        <div className="name">Subway Surfers</div>
        <div className="infos">
          <div>SYBO Games</div>
          <div>SURF the urban wave!</div>
          <div>DODGE the oncoming trains!</div>
        </div>
        <div className="downloads">300k Dlownloads</div>
        <div className="btn">more info</div>
      </article>
    </section>
  );
};

export default Featured;
