import React from "react";
import { Envelope, ArrowLeft } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { regexPattern, errorMessage } from "../../../utils/constant";

const ForgotPasswordPage = () => {
  const navigate = useNavigate()  
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password Submitted:", data);
  };

  const goBackToLogin = () => {
    navigate('/login/admin')
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
        <div className="d-flex align-items-center cursor-pointer mb-3">
          <ArrowLeft size={18} className="me-2 s-text-color" />
          <span className="roboto-medium s-text-color f-14" onClick={goBackToLogin}>Back to Login</span>
        </div>

        <h4 className="text-center roboto-medium fs-22 mb-2 p-text-color">
          Forgot Password?
        </h4>

        <p className="text-center s-text-color fs-16 mb-3">
          Enter your registered email to receive a password reset link
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <label className="roboto-medium fs-16 mb-1">Email Address</label>
            <div className="position-relative">
              <Envelope size={18} className="login-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className={`form-control login-field fs-14 ${errors.email ? "is-invalid" : ""}`}
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

          <button
            type="submit"
            className="w-100 mt-4 login-button roboto-medium fs-16"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
