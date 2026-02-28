import React from "react";
import * as Icon from "react-bootstrap-icons";
import downloadImg from '../../assets/images/download.svg'

const DocumentItem = ({ name, isMandatory, status, showDownload }) => {
  const statusClass = {
    Uploaded: "status-uploaded",
    Missing: "status-missing",
    Incomplete: "status-incomplete",
    Complete: "status-complete",
  }[status];

  return (
    <div className="doc-item d-flex justify-content-between align-items-center py-2 doc-list mt-2">
      <div className="d-flex align-items-center gap-2 mt-2">
        <span className="doc-name roboto-regular">{name}</span>
        {isMandatory && <span className="mandatory-badge fs-12">Mandatory</span>}
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className={`status-label ${statusClass}`}>{status}</span>
        {showDownload && <img src={downloadImg} alt={"downloadImg"} width={15} height={15}/>}
      </div>
    </div>
  );
};

export default DocumentItem;
