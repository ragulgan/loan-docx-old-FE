import React from 'react'
import DashboardCard from '../../common/dashboard-card'
import totalImg from '../../../assets/images/dash-total.svg'
import pendingImg from '../../../assets/images/pending.svg'
import approvedImg from '../../../assets/images/dash-admin.svg'
import engnieerImg from '../../../assets/images/dash-eng.svg'
import LegalImg from '../../../assets/images/dash-legal.svg'
import BankImg from '../../../assets/images/dash-bank.svg'
import FilterCard from '../../common/filtercard';
import { Funnel } from 'react-bootstrap-icons';
import creditCardImg from '../../../assets/images/applications-icon.svg'
import ReusableTable from '../../common/table'


const columns = [
  { key: "applicationId", label: "Application ID" },
  { key: "applicantName", label: "Applicant" },
  { key: "loanType", label: "Loan Type" },
  { key: "amount", label: "Amount" },
  { key: "agentName", label: "Agent" },
  { key: "submittedDate", label: "Submitted" },
  { key: "action", label: "Action" },
];


const data = [
  {
    applicationId: "APP-2024-1234",
    applicantName: "Rajesh Kumar",
    loanType: "Home Loan",
    amount: "₹25,00,000",
    agentName: "Priya Sharma",
    submittedDate: "2024-12-28",
    action: "Review",
  },
  {
    applicationId: "APP-2024-1235",
    applicantName: "Anita Desai",
    loanType: "Personal Loan",
    amount: "₹5,00,000",
    agentName: "Rahul Mehta",
    submittedDate: "2024-12-28",
    action: "Review",
  },
  {
    applicationId: "APP-2024-1236",
    applicantName: "Vijay Singh",
    loanType: "Business Loan",
    amount: "₹50,00,000",
    agentName: "Priya Sharma",
    submittedDate: "2024-12-27",
    action: "Review",
  },
];


const Dashboard = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <h2 className='roboto-medium fs-20'>Admin Dashboard</h2>
                    <p className='roboto-regular fs-16 s-text-color'>Overview of all loan applications and their status</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Total Applications"
                        value="1,247"
                        imgSrc={totalImg}
                        imgAlt="Total applications"
                    />
                </div>

                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Pending Admin Review"
                        value="43"
                        imgSrc={pendingImg}
                        imgAlt="Pending review"
                    />
                </div>

                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Approved by Admin"
                        value="892"
                        imgSrc={approvedImg}
                        imgAlt="Approved applications"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Pending Legal Review"
                        value="28"
                        imgSrc={LegalImg}
                        imgAlt="Pending Legal Review"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Pending Engineer Review"
                        value="15"
                        imgSrc={engnieerImg}
                        imgAlt="Pending Engineer Review"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <DashboardCard
                        title="Sent to Bank"
                        value="734"
                        imgSrc={BankImg}
                        imgAlt="Sent to Bank"
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <div className="filter-card">
                        <div className="d-flex align-items-center mb-3">
                            <Funnel size={18} className="me-2" width={18} height={18} />
                            <span className="roboto-regular fs-16">Filters</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-3">
                                <FilterCard
                                    label="Date Range"
                                    value="all"
                                    options={[
                                        { label: 'All Time', value: 'all' },
                                        { label: 'Today', value: 'today' },
                                        { label: 'Last 7 Days', value: '7days' },
                                        { label: 'Last 30 Days', value: '30days' },
                                    ]}
                                    onChange={() => { }}
                                />
                            </div>

                            <div className="col-lg-4 col-md-6 mb-3">
                                <FilterCard
                                    label="Loan Type"
                                    value="all"
                                    options={[
                                        { label: 'All Types', value: 'all' },
                                        { label: 'Home Loan', value: 'home' },
                                        { label: 'Personal Loan', value: 'personal' },
                                        { label: 'Business Loan', value: 'business' },
                                    ]}
                                    onChange={() => { }}
                                />
                            </div>

                            <div className="col-lg-4 col-md-6 mb-3">
                                <FilterCard
                                    label="Agent"
                                    value="all"
                                    options={[
                                        { label: 'All Agents', value: 'all' },
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
            <div className="row mt-4">
                <div className="col-lg-12">
                    <div className="custom-card">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-start gap-3">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={creditCardImg} alt="creditCardImg" className='icon-box mt-1' />
                                </div>
                                <div>
                                    <h5 className="mb-1 roboto-medium fs-18">
                                        Applications Pending Payment Verification
                                    </h5>
                                    <p className="mb-0 roboto-regular fs-16">
                                        Service charges awaiting confirmation
                                    </p>
                                </div>
                            </div>
                            <span className="dash-pending-badge ">
                                5 pending
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ReusableTable columns={columns} data={data} tableName={"dashboard-table"} />
                </div>
            </div>
        </div>
    )
}
export default Dashboard; 