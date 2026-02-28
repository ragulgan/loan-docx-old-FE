import React from 'react'
import FilterCard from '../../common/filtercard'
import JobRecievedCard from '../../common/jobRecievedCard'
import TotalApplications from '../../../assets/images/TotalApplications.svg'
import PendingAdminApproval from '../../../assets/images/PendingAdminApproval.svg'
import DispatchedtoBank from '../../../assets/images/DispatchedtoBank.svg'
import ReadyforDispatch from '../../../assets/images/ReadyforDispatch.svg'
import ReusableTable from '../../common/table'

const columns = [
    { key: "applicationId", label: "Application ID" },
    { key: "customerName", label: "Customer Name" },
    { key: "loanType", label: "Loan Type" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "assignedTo", label: "Assigned To" },
    { key: "submitted", label: "Submitted" },
    { key: "action", label: "Action" },
];
const data = [
    {
        id: 1,
        applicationId: "APP-2024-1245",
        customerName: "Rajesh Kumar",
        loanType: "Home Loan",
        amount: "₹45L",
        status: "Pending Review",
        assignedTo: "Amit Verma",
        submitted: "2024-01-08",
        isAlert: false,
    },
    {
        id: 2,
        applicationId: "APP-2024-1242",
        customerName: "Priya Singh",
        loanType: "Business Loan",
        amount: "₹32L",
        status: "Pending Review",
        assignedTo: "Kavita Iyer",
        submitted: "2024-01-07",
        isAlert: true,
    },
    {
        id: 3,
        applicationId: "APP-2024-1240",
        customerName: "Anil Mehta",
        loanType: "Personal Loan",
        amount: "₹8L",
        status: "In Review",
        assignedTo: "Amit Verma",
        submitted: "2024-01-07",
        isAlert: false,
    },
];


const Jobrecived = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-12">
                    <h4 className="roboto-medium fs-20">My Legal Reviews</h4>
                    <p className="roboto-regular fs-16 s-text-color">Manage your assigned legal review applications</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-3">
                    <JobRecievedCard imgSrc={TotalApplications} title="Total Legal Applications" count="156" imgAlt="TotalLegalApplications" className="jrc-legal-applications" />
                </div>
                <div className="col-lg-3">
                    <JobRecievedCard imgSrc={PendingAdminApproval} title="Pending Legal Reviews" count="28" imgAlt="PendingLegalReviews" className="jrc-pending-application" />
                </div>
                <div className="col-lg-3">
                    <JobRecievedCard imgSrc={DispatchedtoBank} title="Completed Reviews" count="115" imgAlt="CompletedReviews" className="jrc-complete-application" />
                </div>
                <div className="col-lg-3">
                    <JobRecievedCard imgSrc={ReadyforDispatch} title="Dispatched to Bank" count="89" imgAlt="DispatchedtoBank" className="jrc-dispatch-application" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <div className="filter-card">
                        <div className="d-flex align-items-center mb-3">
                            <span className="roboto-regular fs-16">Legal Review Management</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-3">
                                <FilterCard
                                    label="Date Range"
                                    value="date_range"
                                    options={[
                                        { label: 'All Time', value: 'all_time' },
                                        { label: 'Today', value: 'today' },
                                        { label: 'This Week', value: 'this_week' },
                                        { label: 'This Month', value: 'this_month' },
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
                                    label="Status"
                                    value="status"
                                    options={[
                                        { label: 'All Status', value: 'all_status' },
                                        { label: 'Pending Review', value: 'pending_review' },
                                        { label: 'In Review', value: 'in_review' },
                                        { label: 'Completed', value: 'completed' },
                                        { label: 'Dispatched', value: 'dis_patched' },
                                    ]}
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <FilterCard
                                    label="Assigned To"
                                    value="assigned_to"
                                    options={[
                                        { label: 'All Members', value: 'all_members' },
                                        { label: 'Amit Verma', value: 'amit' },
                                        { label: 'Kavita Iyer', value: 'kavita' },
                                        { label: 'Rajesh Kumar', value: 'rajesh' },
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
                        <ReusableTable columns={columns} data={data} tableName={"jobrecived"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobrecived