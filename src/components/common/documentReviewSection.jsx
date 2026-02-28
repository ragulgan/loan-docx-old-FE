import React from "react";
import DocumentItem from "./documentReviewItem";

const DocumentReviewSection = ({ title, status, items }) => {
  const sectionStatusClass = 
    status === "Complete" ? "status-complete" : "status-incomplete";

  return (
    <div className="doc-section mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="section-title roboto-medium">{title}</span>
        <span className={`status-label ${sectionStatusClass}`}>{status}</span>
      </div>

      <div className="section-body">
        {items?.map((item, i) => (
          <DocumentItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DocumentReviewSection;
