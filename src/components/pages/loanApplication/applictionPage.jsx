import React from 'react'
import FilterCard from '../../common/filtercard';
import * as Icon from 'react-bootstrap-icons'
import ReusableTable from '../../common/table';

const columns = [
  { key: "applicationId", label: "Application ID" },
  { key: "applicantName", label: "Applicant Name" },
  { key: "loanType", label: "Loan Type" },
  { key: "agentName", label: "Agent Name" },
  { key: "paymentStatus", label: "Payment Status" },
  { key: "currentStatus", label: "Current Status" },
  { key: "date", label: "Submitted Date" },
  { key: "actions", label: "Actions" },
];

const data = [
  {
    id: 1,
    applicationId: "APP-2024-1234",
    applicantName: "Rajesh Kumar",
    loanType: "Home Loan",
    agentName: "Priya Sharma",
    paymentStatus: "Pending",
    currentStatus: "Pending Admin Review",
    date: "2024-12-28",
  },
  {
    id: 2,
    applicationId: "APP-2024-1235",
    applicantName: "Anita Desai",
    loanType: "Personal Loan",
    agentName: "Rahul Mehta",
    paymentStatus: "Verified",
    currentStatus: "Approved by Admin",
    date: "2024-12-28",
  },
  {
    id: 3,
    applicationId: "APP-2024-1236",
    applicantName: "Vijay Singh",
    loanType: "Business Loan",
    agentName: "Priya Sharma",
    paymentStatus: "Verified",
    currentStatus: "Pending Legal Review",
    date: "2024-12-27",
  },
  {
    id: 4,
    applicationId: "APP-2024-1237",
    applicantName: "Meera Patel",
    loanType: "Car Loan",
    agentName: "Arun Kumar",
    paymentStatus: "Verified",
    currentStatus: "Pending Engineer Review",
    date: "2024-12-27",
  },
  {
    id: 5,
    applicationId: "APP-2024-1238",
    applicantName: "Suresh Reddy",
    loanType: "Home Loan",
    agentName: "Rahul Mehta",
    paymentStatus: "Verified",
    currentStatus: "Sent to Bank",
    date: "2024-12-26",
  },
  {
    id: 6,
    applicationId: "APP-2024-1239",
    applicantName: "Kavita Joshi",
    loanType: "Personal Loan",
    agentName: "Priya Sharma",
    paymentStatus: "Not Paid",
    currentStatus: "Pending Payment",
    date: "2024-12-26",
  },
  {
    id: 7,
    applicationId: "APP-2024-1240",
    applicantName: "Arjun Nair",
    loanType: "Home Loan",
    agentName: "Arun Kumar",
    paymentStatus: "Verified",
    currentStatus: "Approved by Admin",
    date: "2024-12-25",
  },
  {
    id: 8,
    applicationId: "APP-2024-1241",
    applicantName: "Deepa Menon",
    loanType: "Business Loan",
    agentName: "Vikram Singh",
    paymentStatus: "Verified",
    currentStatus: "Pending Legal Review",
    date: "2024-12-25",
  },
];


const LoanAppliction = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-12">
          <h2 className='roboto-medium fs-20'>Application Review Queue</h2>
          <p className='roboto-regular fs-16 s-text-color'>Review and process loan applications</p>
        </div>
      </div>
      <div className="row justify-content-start align-items-center search-bar-transparent">
        <div className="col-lg-12 col-md-12">
          <div className="position-relative">
            <Icon.Search size={18} className="search-icon" />
            <input
              type="text"
              className="form-control search-input fs-14"
              placeholder="Search by Application ID or Applicant Name..."
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="filter-card">
            <div className="d-flex align-items-center mb-3">
              <Icon.Funnel size={18} className="me-2" width={18} height={18} />
              <span className="roboto-regular fs-16">Filters</span>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-3">
                <FilterCard
                  label="Status"
                  value="all_status"
                  options={[
                    { label: 'All Statuses', value: 'all_status' },
                    { label: 'Pending Admin Review', value: 'pending-admin-review' },
                    { label: 'Approved by Admin', value: 'approved-by-admin' },
                    { label: 'Pending Legal Review', value: 'pending-legal-review' },
                    { label: 'Pending Engineer Review', value: 'pending-engineer-review' },
                    { label: 'Sent to Bank', value: 'sent-to-bank' },
                  ]}
                  onChange={() => { }}
                />
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <FilterCard
                  label="Payment Status"
                  value="all_payments"
                  options={[
                    { label: 'All Payment Status', value: 'all_payments' },
                    { label: 'Verified', value: 'verified' },
                    { label: 'Pending', value: 'pending' },
                    { label: 'Not Paid', value: 'not_paid' },
                  ]}
                  onChange={() => { }}
                />
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <FilterCard
                  label="Loan Type"
                  value="all_loans"
                  options={[
                    { label: 'All Types', value: 'all_loans' },
                    { label: 'Home Loan', value: 'home_loan' },
                    { label: 'Personal Loan', value: 'personal_loan' },
                    { label: 'Business Loan', value: 'business_loan' },
                    { label: 'Car Loan', value: 'car_loan' },
                  ]}
                  onChange={() => { }}
                />
              </div>

              <div className="col-lg-3 col-md-6 mb-3">
                <FilterCard
                  label="Agent"
                  value="all_agents"
                  options={[
                    { label: 'All Agents', value: 'all_agents' },
                    { label: 'Agent A', value: 'a' },
                    { label: 'Agent B', value: 'b' },
                  ]}
                  onChange={() => { }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="table-responsive">
          <div className="col-lg-12">
            <ReusableTable columns={columns} data={data} tableName={"loanApplication"} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoanAppliction;
