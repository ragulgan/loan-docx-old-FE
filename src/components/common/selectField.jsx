import React from "react";

const RHFSelectField = ({
  label,
  name,
  options = [],
  register,
  errors,
  rules,
  showStar = false,
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
        {showStar && <span className="text-danger mx-1">*</span>}
      </label>
      <select
        className="form-select"
        {...register(name, rules)}
        disabled={disabled}
        value={value}
        onChange={(e) => {
          register(name).onChange(e);
          if (onChange) {
            onChange(e);
          }
        }}
      >
        <option value="">Select {label}</option>
        {options.map((op, i) => (
          <option key={i} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>

      {errors?.[name] && (
        <small className="text-danger">{errors[name]?.message}</small>
      )}
    </div>
  );
};

export default RHFSelectField;