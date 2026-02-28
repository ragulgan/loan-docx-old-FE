import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router'
import FilterCard from '../../common/filtercard';
import ReusableTable from '../../common/table';
// tables
const columns = [
    { key: "applicationId", label: "Application ID" },
    { key: "applicantName", label: "Applicant" },
    { key: "loanType", label: "Loan Type" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
];
const data = [
    {
        applicationId: "APP-2024-1234",
        applicantName: "Rajesh Kumar",
        loanType: "Home Loan",
        amount: "₹25,00,000",
        status: "Approved",
        date: "2024-12-28",
    },
    {
        applicationId: "APP-2024-1189",
        applicantName: "Suresh Reddy",
        loanType: "Personal Loan",
        amount: "₹5,00,000",
        status: "Pending Review",
        date: "2024-12-27",
    },
    {
        applicationId: "APP-2024-1145",
        applicantName: "Kavita Deshmukh",
        loanType: "Business Loan",
        amount: "₹40,00,000",
        status: "Approved",
        date: "2024-12-26",
    },
    {
        applicationId: "APP-2024-1102",
        applicantName: "Amit Verma",
        loanType: "Car Loan",
        amount: "₹7,50,000",
        status: "Approved",
        date: "2024-12-25",
    },
    {
        applicationId: "APP-2024-1067",
        applicantName: "Pooja Singh",
        loanType: "Home Loan",
        amount: "₹32,00,000",
        status: "Rejected",
        date: "2024-12-24",
    },
];
// tables end

const agentProfile = {
    name: "Priya Sharma",
    email: "priya.sharma@loandocx.com",
    region: "Mumbai Central",
    joined: "2023-06-15",
    status: "Active",
};
const performanceSummary = [
    { title: "Applications Collected", value: "156" },
    { title: "Admin Approved", value: "142" },
    { title: "Approval Rate", value: "91%" },
    { title: "Avg Processing Time", value: "3.2 days" },
];


const AgentspageViewPage = () => {
    // const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="row mb-3">
                <div className="col-lg-12 d-flex align-items-center gap-2">
                    <button className="btn btn-sm" onClick={() => navigate(-1)}>
                        <Icon.ArrowLeft size={16} />
                        <span className='roboto-regular fs-16 s-text-color mx-2'>Back to User</span>
                    </button>
                </div>

                <div className="profile-card p-4 d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <h5 className="mb-2 roboto-regular fs-16">{agentProfile.name}</h5>
                        <div className="d-flex flex-wrap gap-4 text-muted small align-items-center">
                            <span className="d-flex align-items-center gap-2 roboto-regular fs-16">
                                <i className="bi bi-envelope"></i>
                                {agentProfile.email}
                            </span>

                            <span className="d-flex align-items-center gap-2 roboto-regular fs-16">
                                <i className="bi bi-geo-alt"></i>
                                {agentProfile.region}
                            </span>

                            <span className="d-flex align-items-center gap-2 roboto-regular fs-16">
                                <i className="bi bi-calendar"></i>
                                Joined {agentProfile.joined}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex gap-3">
                        <button className="btn verified-badge px-4 rounded-pill roboto-medium fs-16">
                            {agentProfile.status}
                        </button>
                        {/* <button className="btn  mandatory-badge px-4 rounded-pill roboto-medium fs-16">Deactivate
                        </button> */}
                    </div>
                </div>
                {/* <div className="performance-wrapper mt-3">
                    <h5 className="roboto-medium fs-18 mb-4">Performance Summary</h5>
                    <div className="row g-3 ">
                        {performanceSummary.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div
                                    className={`summary-card p-3 rounded-3 ${index === 0 ? "send-bank-btn" :
                                        index === 1 ? "verified-badge" :
                                            index === 2 ? "pending-legal-btn" :
                                                "status-missing"
                                        }`}
                                >
                                    <p className="mb-2 roboto-regular fs-16">{item.title}</p>
                                    <h6 className="mb-0 roboto-regular fs-16">{item.value}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="mt-4 p-0">
                    <div className="col-lg-12 m-0">
                        <div className="filter-card">
                            <div className="d-flex align-items-center mb-3">
                                <Icon.Funnel size={18} className="me-2" width={18} height={18} />
                                <span className="roboto-regular fs-16">Filters</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-3">
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <label className="form-label mb-2">Start Date</label>
                                            <input type="date" className="form-control" name="startDate" />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label mb-2">End Date</label>
                                            <input type="date" className="form-control" name="endDate" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mb-3">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 p-0 mt-3">
                    <div className="custom-card">
                        <h5 className="mb-1 roboto-medium p-text-color fs-18">
                            Applications by User
                        </h5>
                        <p className="mb-0 roboto-regular s-text-color fs-16">
                            Recent applications submitted by this User
                        </p>
                    </div>
                </div>
                <div className="table-responsive p-0">
                    <div className="col-lg-12">
                        <ReusableTable columns={columns} data={data} tableName={"agentsview-table"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentspageViewPage