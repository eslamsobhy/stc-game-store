import React from "react";

// styling
import "./error.scss";

const Error = () => {
  return (
    <section className="section error">
      <div className="status">404!</div>
      <div className="message">Error: Page Not Found!</div>
    </section>
  );
};

export default Error;
