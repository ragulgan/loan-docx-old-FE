import React from "react";

const RHFInputField = ({
    label,
    name,
    type = "text",
    placeholder,
    register,
    errors,
    rules,
    showStar = false,
}) => {
    return (
        <div className="mb-3">
            <label className="form-label">
                {label}
                {showStar && <span className="text-danger mx-1">*</span>}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="form-control"
                {...register(name, rules)}
            />

            {errors?.[name] && (
                <small className="text-danger">{errors[name]?.message}</small>
            )}
        </div>
    );
};

export default RHFInputField;
