import React from 'react'
import JobRecievedCard from '../../common/jobRecievedCard'
import TotalEarnings from '../../../assets/images/Total-earned.svg'
import PendingSettle from '../../../assets/images/Pending-settlement.svg'
import PaidAmount from '../../../assets/images/Paid-amount.svg'
import FilterCard from '../../common/filtercard'
import ReusableTable from '../../common/table'

const columns = [
    { key: "applicationId", label: "Application ID" },
    { key: "customer", label: "Customer" },
    { key: "loanType", label: "Loan Type" },
    { key: "reviewDate", label: "Review Date" },
    { key: "amountEarned", label: "Amount Earned" },
    { key: "paymentStatus", label: "Payment Status" },
    { key: "action", label: "Action" },
];
const data = [
    {
        id: 1,
        applicationId: "APP-2024-1238",
        customer: "Sunita Desai",
        loanType: "Home Loan",
        reviewDate: "2024-01-06",
        amountEarned: "₹2,500",
        paymentStatus: "Paid",
    },
    {
        id: 2,
        applicationId: "APP-2024-1235",
        customer: "Vikram Patel",
        loanType: "Car Loan",
        reviewDate: "2024-01-05",
        amountEarned: "₹1,500",
        paymentStatus: "Pending",
    },
    {
        id: 3,
        applicationId: "APP-2024-1232",
        customer: "Meera Shah",
        loanType: "Business Loan",
        reviewDate: "2024-01-04",
        amountEarned: "₹3,000",
        paymentStatus: "Paid",
    },
];

const Earnings = () => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-12">
                    <h4 className="roboto-medium fs-20">Earnings</h4>
                    <p className="roboto-regular fs-16 s-text-color">Track your legal review earnings and payment status</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-4">
                    <JobRecievedCard imgSrc={TotalEarnings} title="Total Earned" currncy="₹" amount="145,500" imgAlt="TotalLegalApplications" className="total-earings" />
                </div>
                <div className="col-lg-4">
                    <JobRecievedCard imgSrc={PendingSettle} title="Pending Settlement" currncy="₹" amount="45,000" imgAlt="PendingLegalReviews" className="pending-settle-earings" />
                </div>
                <div className="col-lg-4">
                    <JobRecievedCard imgSrc={PaidAmount} title="Paid Amount" currncy="₹" amount="100,500" imgAlt="CompletedReviews" className="paid-amount-earings" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <div className="filter-card">
                        <div className="d-flex align-items-center mb-3">
                            <span className="roboto-regular fs-16">Earnings History</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-3">
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

                            <div className="col-lg-4 col-md-6 mb-3">
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

                            <div className="col-lg-4 col-md-6 mb-3">
                                <FilterCard
                                    label="Payment Status"
                                    value="payment_status"
                                    options={[
                                        { label: 'All Status', value: 'all_Status' },
                                        { label: 'Paid', value: 'paid' },
                                        { label: 'Pending', value: 'pending' },
                                    ]}
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <div className="col-lg-12">
                        <ReusableTable columns={columns} data={data} tableName={"earningspage"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Earnings