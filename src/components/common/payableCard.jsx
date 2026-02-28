import React from "react";

const PayableCard = ({ imgSrc, title, amount, imgAlt = "dashboard icon" }) => {
  return (
    <div
      className="p-3"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        background: "#fff",
        minWidth: "240px",
      }}
    >
      <div className="mb-2" style={{ color: "#9ca3af" }}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="payment-status-card s-text-color d-flex align-items-center justify-content-center"
        />
      </div>
      <div className="roboto-medium s-text-color fs-16 mb-1">
        {title}
      </div>
      <div className="roboto-regular fs-16 p-text-color">
        ₹{amount}
      </div>
    </div>
  );
};

export default PayableCard;
