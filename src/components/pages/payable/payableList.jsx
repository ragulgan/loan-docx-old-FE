import React from 'react'
import Legal from '../../../assets/images/Legal.svg'
import payables from '../../../assets/images/sidebar-payables.svg'
import Agents from '../../../assets/images/Agents.svg'
import engineer from '../../../assets/images/engineer.svg'
import PayableCard from '../../common/payableCard';
import * as Icon from 'react-bootstrap-icons'
import FilterCard from '../../common/filtercard';
import ReusableTable from '../../common/table';

const PayableList = () => {

    const payableData = [
        { imgSrc: payables, imgAlt: "", title: "Total Payable", amount: "29,500" },
        { imgSrc: Agents, imgAlt: "", title: "Customer Agent Payable", amount: "8,500" },
        { imgSrc: Legal, imgAlt: "", title: "Legal Team Payable", amount: "8,000" },
        { imgSrc: engineer, imgAlt: "", title: "Engineering Team Payable", amount: "3,000" },
        { imgSrc: Agents, imgAlt: "", title: "Legal Head Payable", amount: "10,000" },
    ];

    const columns = [
        { key: "userName", label: "User Name" },
        { key: "role", label: "Role" },
        { key: "applicationID", label: "Application ID" },
        { key: "loanType", label: "Loan Type" },
        { key: "amountSlab", label: "Amount Slab" },
        { key: "earnedAmount", label: "Earned Amount" },
        { key: "triggerEvent", label: "Trigger Event" },
        { key: "earnedDate", label: "Earned Date" },
        { key: "paymentStatus", label: "Payment Status" },
        { key: "action", label: "Action" },
    ];

    const data = [
        {
            id: 1,
            userName: "Priya Sharma",
            role: "Customer Agent",
            applicationId: "APP-2024-1235",
            loanType: "Personal Loan",
            amountSlab: "0-10L",
            earnedAmt: "₹2,500",
            triggeredEvent: "Admin Approved",
            earnedDate: "2024-12-28",
            paymentStatus: "Unpaid"
        },
        {
            id: 2,
            userName: "Amit Verma",
            role: "Legal Team",
            applicationId: "APP-2024-1236",
            loanType: "Personal Loan",
            amountSlab: "0-10L",
            earnedAmt: "₹2,500",
            triggeredEvent: "Admin Approved",
            earnedDate: "2024-12-28",
            paymentStatus: "Unpaid"
        },
        {
            id: 3,
            userName: "Rahul Mehta",
            role: "Customer Agent",
            applicationId: "APP-2024-1235",
            loanType: "Personal Loan",
            amountSlab: "0-10L",
            earnedAmt: "₹2,500",
            triggeredEvent: "Admin Approved",
            earnedDate: "2024-12-28",
            paymentStatus: "Paid"
        },
    ];

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <h2 className='roboto-medium fs-20'>Payables</h2>
                    <p className='roboto-regular fs-16 s-text-color'>This section tracks service charges payable based on completed workflow stages. Payments are settled offline.</p>
                </div>
            </div>
            <div className="row mb-4">
                {payableData.map((item, index) => (
                    <div key={index} className="col-lg-auto col-md-6 col-sm-12">
                        <PayableCard {...item} />
                    </div>
                ))}
            </div>
            <div className='payable-filter p-4 rounded-3 mb-4'>
                <div className='row mb-3'>
                    <div className="col-lg-12">
                        <div className="filter-card border-0 p-0">
                            <div className="d-flex align-items-center mb-3">
                                <Icon.Funnel size={18} className="me-2" width={18} height={18} />
                                <span className="roboto-regular fs-16">Filters & Search</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start align-items-center mb-3">
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
                <div className='row'>
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
            <div className="row">
                <div className="col-lg-12">
                    <div className="custom-card">
                        <h5 className="mb-1 roboto-medium p-text-color fs-18">
                            Payables Ledger
                        </h5>
                        <p className="mb-0 roboto-regular s-text-color fs-16">
                            Complete record of all service charges
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <ReusableTable columns={columns} data={data} tableName={"payablesList"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayableList;