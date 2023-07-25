import React from "react";

// icons
import { GrClose } from "react-icons/gr";

// styling
import "./login.scss";

const Login = ({ isLoginOpen, closeLogin }) => {
  return (
    <article className={`login ${isLoginOpen ? "opened" : ""}`}>
      <form action="">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <button className="btn">Login</button>
      </form>
      <GrClose size={20} onClick={() => closeLogin()} />
    </article>
  );
};

export default Login;
