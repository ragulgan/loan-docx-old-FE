import React from 'react'
import { useNavigate } from 'react-router'
import * as Icon from 'react-bootstrap-icons'
import payableDoller from '../../../assets/images/payableDoller.svg'
import PayableViewCard from '../../common/payableViewCard'
import ReusableTable from '../../common/table'

const PayableView = () => {
  const navigate = useNavigate()

  const columns = [
    { key: "role", label: "Role" },
    { key: "applicationID", label: "Application ID" },
    { key: "earnedAmount", label: "Earned Amount" },
    { key: "triggerEvent", label: "Trigger Event" },
    { key: "earnedDate", label: "Earned Date" },
    { key: "paymentStatus", label: "Payment Status" },
  ];

  const data = [
    {
      id: 1,
      role: "Customer Agent",
      applicationId: "APP-2024-1235",
      earnedAmt: "₹2,500",
      triggeredEvent: "Admin Approved",
      earnedDate: "2024-12-28",
      paymentStatus: "Unpaid"
    },
    {
      id: 2,
      role: "Legal Team",
      applicationId: "APP-2024-1236",
      earnedAmt: "₹2,500",
      triggeredEvent: "Admin Approved",
      earnedDate: "2024-12-28",
      paymentStatus: "Unpaid"
    },
    {
      id: 3,
      role: "Customer Agent",
      applicationId: "APP-2024-1235",
      earnedAmt: "₹2,500",
      triggeredEvent: "Admin Approved",
      earnedDate: "2024-12-28",
      paymentStatus: "Paid"
    },
  ];

  const agentProfile = {
    id: 1,
    name: "Priya Sharma",
    role: "Customer Agent",
    email: "priya.sharma@loandocx.com",
    region: "Mumbai Central",
    status: "Active",
    avatar: null,
    stats: {
      totalEarned: 17500,
      totalPaid: 9000,
      pendingPayable: 8500,
    }
  };

  return (
    <div className='container'>
      <div className="row">

        <div className="col-lg-12 d-flex align-items-center gap-2">
          <button className="btn btn-sm" onClick={() => navigate(-1)}>
            <Icon.ArrowLeft size={16} />
            <span className='roboto-regular fs-16 s-text-color mx-2'>Back to Payables</span>
          </button>
        </div>

        <div className="profile-card d-flex justify-content-between align-items-center mt-3 p-4">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                background: "#eef5ff",
                color: "#3f7be3",
                fontSize: "28px"
              }}
            >
              <Icon.Person />
            </div>
            <div>
              <h5 className="mb-1 roboto-medium p-text-color fs-18">{agentProfile.name}</h5>
              <div className="roboto-regular s-text-color fs-16">{agentProfile.role}</div>
              <div className="roboto-regular s-text-color fs-16">{agentProfile.email}</div>
              <div className="roboto-regular s-text-color fs-16">{agentProfile.region}</div>
            </div>
          </div>
          <span className="btn verified-badge rounded roboto-medium fs-16">
            {agentProfile.status}
          </span>
        </div>

        <div className="row mt-4">
          <div className="col-lg-4">
            <PayableViewCard imgSrc={payableDoller} title={"Total Earned"} amount={agentProfile.stats.totalEarned} imgAlt="totalEarned" />
          </div>
          <div className="col-lg-4">
            <PayableViewCard imgSrc={payableDoller} title={"Total Paid"} amount={agentProfile.stats.totalPaid} imgAlt="totalPaid" />
          </div>
          <div className="col-lg-4">
            <PayableViewCard imgSrc={payableDoller} title={"Pending Payable"} amount={agentProfile.stats.pendingPayable} imgAlt="pendingPayable" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="custom-card">
              <h5 className="mb-1 roboto-medium p-text-color fs-18">
                Ledger History
              </h5>
              <p className="mb-0 roboto-regular s-text-color fs-16">
                Complete payment history for this user (read-only)
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive">
            <ReusableTable columns={columns} data={data} tableName={"payablesListview"} />
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PayableView;
