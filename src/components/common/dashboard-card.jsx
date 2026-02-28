import React from "react";

const DashboardCard = ({ title, value, imgSrc, imgAlt = "dashboard icon" }) => {
  return (
    <div className="dashboard-card mb-3 d-flex justify-content-between align-items-center">
      <div>
        <p className="fs-16 roboto-regular s-text-color">
          {title}
        </p>
        <h4 className="fs-20 roboto-medium">
          {value}
        </h4>
      </div>

      <div className="icon-box">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="dashboard-card-icon d-flex align-items-center justify-content-center"
        />
      </div>
    </div>
  );
};

export default DashboardCard;
