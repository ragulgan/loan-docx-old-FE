import React from "react";
import * as Icon from "react-bootstrap-icons";

const ApplicationApproveCard = ({ title, approveLabel, rejectLabel, onApprove, onReject }) => {
  return (
    <div className="doc-container p-3">
      <p className="p-text-color roboto-medium fs-16 mb-3">{title}</p>
      <div className="d-flex gap-3 flex-wrap">
        <button className="btn btn-approve-action" onClick={onApprove}>
          <Icon.CheckCircleFill size={18} className="me-2" />
          <span className="roboto-regular fs-16">{approveLabel}</span>
        </button>
        <button className="btn btn-reject-action" onClick={onReject}>
          <Icon.XCircleFill size={18} className="me-2" />
          <span className="roboto-regular fs-16">{rejectLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default ApplicationApproveCard;
