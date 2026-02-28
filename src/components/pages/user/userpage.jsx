import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons'
import ReusableTable from '../../common/table';
import { useNavigate } from 'react-router';

const columns = [
  { key: "user_id", label: "User ID" },
  { key: "user_name", label: "User Name" },
  { key: "email_id", label: "Email ID" },
  { key: "upi_id", label: "UPI ID" },
  { key: "mobile_number", label: "MobileNumber" },
  { key: "user_active", label: "Status" },
  { key: "Actions", label: "Actions" },
];

const apiresponse = 
{
    "code": 200,
    "messageCode": "1003",
    "data": [
        {
            "id": 3,
            "user_id": "LDX02",
            "user_name": "Ragul",
            "user_type": 2,
            "role": {
                "id": 2,
                "role_code": "AT",
                "role_name": "Agent",
                "role_active": "Y"
            },
            "upi_id": "ragul007@okaxis",
            "address1": "test1",
            "address2": "test2",
            "mobile_number": "9789391156",
            "email_id": "ragul001.r@shenll.com",
            "aadhar_number": "7457 7874 7458",
            "user_active": "Y",
            "created_at": "2026-01-24T11:28:19.942Z",
            "updated_at": "2026-01-24T11:51:36.000Z"
        },
        {
            "id": 1,
            "user_id": "LDX01",
            "user_name": "Jesus Christ",
            "user_type": 1,
            "role": {
                "id": 1,
                "role_code": "AD",
                "role_name": "Admin",
                "role_active": "Y"
            },
            "upi_id": "jesus0010@okaxis",
            "address1": "test1",
            "address2": "test2",
            "mobile_number": "9789391155",
            "email_id": "ragul.r@shenll.com",
            "aadhar_number": "7457 7874 7457",
            "user_active": "Y",
            "created_at": "2026-01-23T10:58:11.907Z",
            "updated_at": "2026-01-24T11:50:44.000Z"
        }
    ],
    "count": 2,
    "message": "Record(s) found."
};



const Agentspage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <h4 className="roboto-medium fs-20">User Management</h4>
            <p className="roboto-regular fs-16 s-text-color">Manage user onboarding and status</p>
          </div>
          <button className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
            onClick={() => navigate("/useradd")}>
            <i className="bi bi-plus-lg"></i>
            Add New User
          </button>
        </div>
        <div className="col-lg-12 col-md-12 search-bar-transparent">
          <div className="position-relative">
            <Icon.Search size={18} className="search-icon" />
            <input
              type="text"
              className="form-control search-input fs-14"
              placeholder="Search users by name or email..."
            />
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="table-responsive">
            <ReusableTable columns={columns} data={apiresponse}  itemsPerPage={10}  tableName={"user-table"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agentspage