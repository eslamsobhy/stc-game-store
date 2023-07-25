import React from "react";
import { useForm } from "react-hook-form";

// icons
import { GrClose } from "react-icons/gr";

// styling
import "./login.scss";

const Login = ({ isLoginOpen, closeLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    console.log("logged in");
    // reset();
  };

  return (
    <article className={`login ${isLoginOpen ? "opened" : ""}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            {...register("username", {
              required: true,
              minLength: 8,
            })}
            aria-invalid={errors.username ? "true" : "false"}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            autoComplete="off"
          />
        </div>
        {errors.username?.type === "required" && (
          <p className="text-red-500" role="alert">
            Username is required
          </p>
        )}
        {errors.username?.type === "minLength" && (
          <p className="text-red-500" role="alert">
            Username must be at least 8 chars
          </p>
        )}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: true,
            })}
            aria-invalid={errors.password ? "true" : "false"}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        {errors.password?.type === "required" && (
          <p className="text-red-500" role="alert">
            Password is required
          </p>
        )}
        <button className="btn">Login</button>
      </form>
      <GrClose size={20} onClick={() => closeLogin()} />
    </article>
  );
};

export default Login;
