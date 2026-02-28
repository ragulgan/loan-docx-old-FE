import React, { useState } from "react";
import { Envelope, Lock } from "react-bootstrap-icons";
import { regexPattern, errorMessage } from "../../../utils/constant";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const resetPassword = () => {
    navigate('/forgotPassword')
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#f9fafb" }}
    >
      <div
        className="p-4"
        style={{
          width: "420px",
          background: "#fff",
          borderRadius: "14px",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 className="text-center p-color roboto-medium fs-24 mb-2">
          LoanDocx
        </h3>

        <p className="text-center s-text-color fs-16">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <label className="roboto-medium fs-16 mb-1">Email Address</label>
            <div className="position-relative">
              <Envelope size={18} className="login-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className={`form-control login-field f-14 ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: errorMessage.Email_Required,
                  pattern: {
                    value: regexPattern.email,
                    message: errorMessage.Invalid_Email,
                  },
                })}
              />
            </div>
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          <div className="mt-3">
            <label className="roboto-medium fs-16 mb-1">Password</label>
            <div className="position-relative">
              <Lock size={18} className="login-icon" />
              <input
                type="password"
                placeholder="Enter your password"
                className={`form-control login-field f-14 ${errors.password ? "is-invalid" : ""}`}
                {...register("password", {
                  required: errorMessage.Password_Required,
                  pattern: {
                    value: regexPattern.password,
                    message: errorMessage.Password_Criteria,
                  },
                })}
              />
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>

          {/* Login Button */}
          <button
            className="w-100 mt-4 login-button roboto-medium f-16"
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <span className="roboto-medium p-color cursor-pointer" onClick={resetPassword}>
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
