import React from "react";

const ApplicationDetailsCard = ({ icon, title, fields, iconColor }) => {
  return (
    <div className="details-card p-3 mb-3">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span style={{ color: iconColor }}>{icon}</span>
        <span className="roboto-medium p-text-color fs-16">{title}</span>
      </div>

      {fields.map((item, i) => (
        <div key={i} className="mb-2">
          <div className="roboto-regular fs-16 s-text-color">{item.label}</div>
          <div className="roboto-regular fs-16 p-text-color">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationDetailsCard;
