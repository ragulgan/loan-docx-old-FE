import React from "react";
import DocumentReviewSection from "./documentReviewSection";
import downloadImg from '../../assets/images/download.svg'

const DocumentReviewContainer = ({ sections }) => {
  return (
    <div className="doc-container p-3">
      <div className="d-flex justify-content-between mb-3">
        <p className="roboto-medium fs-16">Document Review</p>
        
        <button className="download-all p-color roboto-regular fs-14 cursor-pointer d-flex align-items-center gap-1">
         <img src={downloadImg} alt={"downloadImg"} width={15} height={15}/> Download All
        </button>
      </div>

      {sections?.map((sec, idx) => (
        <DocumentReviewSection key={idx} {...sec} />
      ))}
    </div>
  );
};

export default DocumentReviewContainer;
