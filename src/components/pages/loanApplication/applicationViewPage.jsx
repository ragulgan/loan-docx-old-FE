import React from 'react'
import { useParams, useNavigate } from 'react-router'
import * as Icon from 'react-bootstrap-icons'
import ApplicationDetailsCard from '../../common/applicationViewCard'
import PaymentStatusCard from '../../common/paymentStatusCard'
import creditCardImg from '../../../assets/images/applications-icon.svg'
import payableDoller from '../../../assets/images/payableDoller.svg'
import DocumentReviewContainer from '../../common/documentReviewContainer'
import ApplicationApproveCard from '../../common/approveRejectCard'
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";



const ApplicationViewPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [showRejectModal, setShowRejectModal] = useState(false);
    const [rejectReason, setRejectReason] = useState("");
    const [showApproveModal, setShowApproveModal] = useState(false);

    const handleRejectOpen = () => setShowRejectModal(true);
    const handleRejectClose = () => {
        setShowRejectModal(false);
        setRejectReason("");
    };

    const handleConfirmReject = () => {
        handleRejectClose();
    };

    //    approval
    const [reviewTeams, setReviewTeams] = useState({
        legalTeamHead: "",
        legalTeamMember: "",
        engineeringTeam: "",
    });

    const handleApproveOpen = () => setShowApproveModal(true);

    const handleApproveClose = () => {
        setShowApproveModal(false);
        setReviewTeams({
            legalTeamHead: "",
            legalTeamMember: "",
            engineeringTeam: "",
        });
    };

    const legalHeads = [
        { value: "1", label: "Arun - Legal Head" },
        { value: "2", label: "Karthik - Legal Head" },
    ];

    const legalMembers = [
        { value: "11", label: "Siva - Legal Member" },
        { value: "12", label: "Hari - Legal Member" },
    ];

    const engineeringTeams = [
        { value: "21", label: "Engineer Team A" },
        { value: "22", label: "Engineer Team B" },
    ];


    const applicationTitle = {
        title: "Applicant Details",
        icon: <Icon.Person size={22} />,
        iconColor: "#0d6efd",
    };

    const loanDataTitle = {
        title: "Loan Details",
        icon: <Icon.Briefcase size={22} />,
        iconColor: "#28a745",
    };

    const agentDataTitle = {
        title: "Agent Information",
        icon: <Icon.Person size={22} />,
        iconColor: "#8b3eff",
    };

    const applicantData = {
        appliation_fields: [
            { label: "Name", value: "Rajesh Kumar" },
            { label: "Email", value: "rajesh.kumar@email.com" },
            { label: "Phone", value: "+91 98765 43210" },
            { label: "Address", value: "123, MG Road, Mumbai, Maharashtra - 400001" },
        ],
        loan_fields: [
            { label: "Loan Type", value: "Home Loan" },
            { label: "Loan Amount", value: "₹25,00,000" },
            { label: "Tenure", value: "20 years" },
            { label: "Purpose", value: "Purchase of residential property" },
        ],
        agent_fields: [
            { label: "Agent Name", value: "Priya Sharma" },
            { label: "Email", value: "priya.sharma@loandocx.com" },
            { label: "Region", value: "Mumbai Central" },
        ],
    };

    const documentSections = [
        {
            title: "Identity Proof",
            status: "Complete",
            items: [
                { name: "Aadhaar Card", isMandatory: true, status: "Uploaded", showDownload: true },
                { name: "PAN Card", isMandatory: true, status: "Uploaded", showDownload: true },
            ],
        },
        {
            title: "Address Proof",
            status: "Complete",
            items: [
                { name: "Utility Bill", isMandatory: true, status: "Uploaded", showDownload: true },
            ],
        },
        {
            title: "Income Documents",
            status: "Complete",
            items: [
                { name: "Salary Slips (3 months)", isMandatory: true, status: "Uploaded", showDownload: true },
                { name: "Bank Statements (6 months)", isMandatory: true, status: "Uploaded", showDownload: true },
            ],
        },
        {
            title: "Property Documents",
            status: "Incomplete",
            items: [
                { name: "Sale Agreement", isMandatory: true, status: "Uploaded", showDownload: true },
                { name: "Property Valuation", isMandatory: true, status: "Missing", showDownload: false },
            ],
        },
    ];

    const statusTimeline = [
        {
            title: "Application Submitted",
            date: "2024-12-28 09:30 AM",
            by: "Agent - Priya Sharma",
        },
        {
            title: "Payment Received",
            date: "2024-12-28 09:35 AM",
            by: "System",
        },
        {
            title: "Payment Verified",
            date: "2024-12-28 10:15 AM",
            by: "Admin - System",
        },
        {
            title: "Pending Admin Review",
            date: "2024-12-28 10:15 AM",
            by: "System",
        }
    ];

    const payables = [
        {
            role: "Customer Agent",
            person: "Priya Sharma",
            amount: "₹3,500",
            status: "Unpaid",
        },
        {
            role: "Legal Team",
            person: "Awaiting Legal Review",
            amount: "-",
            status: "Not Yet Earned",
        },
        {
            role: "Engineering Team",
            person: "Awaiting Engineering Review",
            amount: "-",
            status: "Not Yet Earned",
        },
        {
            role: "Legal Head",
            person: "Awaiting Legal Head Approval",
            amount: "₹2,500",
            status: "Paid",
        }
    ]

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-lg-12 d-flex align-items-center gap-2">
                    <button className="btn btn-sm" onClick={() => navigate(-1)}>
                        <Icon.ArrowLeft size={16} />
                        <span className='roboto-regular fs-16 s-text-color mx-2'>Back to Applications</span>
                    </button>
                </div>
            </div>
            <div className='row mb-1'>
                <div className='col-lg-12'>
                    <h2 className='p-text-color roboto-medium fs-20 mb-2'>Application Details</h2>
                    <p className='roboto-medium p-color fs-16'>{id}</p>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-4">
                    <ApplicationDetailsCard icon={applicationTitle.icon} title={applicationTitle.title} iconColor={applicationTitle.iconColor} fields={applicantData.appliation_fields} />
                </div>
                <div className="col-lg-4">
                    <ApplicationDetailsCard icon={loanDataTitle.icon} title={loanDataTitle.title} iconColor={loanDataTitle.iconColor} fields={applicantData.loan_fields} />
                </div>
                <div className="col-lg-4">
                    <ApplicationDetailsCard icon={agentDataTitle.icon} title={agentDataTitle.title} iconColor={agentDataTitle.iconColor} fields={applicantData.agent_fields} />
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-lg-12'>
                    <PaymentStatusCard
                        icon={<img src={creditCardImg} alt="creditCardImg" className='payment-status-card mt-1' />}
                        status="Verified"
                        amount="₹5,000"
                        txnId="TXN20241228093045"
                        date="2024-12-28"
                        method="UPI"
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <DocumentReviewContainer sections={documentSections} />
                </div>
            </div>
            {/* <div className='row mt-4'>
                <div className="col-lg-12">
                    <div className="doc-container p-3">
                        <p className="p-text-color roboto-regular fs-16 mb-3">Status & Audit Trail</p>
                        <p className='roboto-regular fs-16 s-text-color'>Complete history of status changes and actions</p>

                        {statusTimeline.map((item, index) => (
                            <div key={index} className="d-flex mb-3">
                                <div>
                                    <div className='timeline-dot'></div>
                                    {index !== statusTimeline.length - 1 && (
                                        <div className='timeline-line'></div>
                                    )}
                                </div>
                                <div className="ms-3">
                                    <p className='p-text-color roboto-regular fs-16 m-0'>{item.title}</p>
                                    <p className='s-text-color roboto-regular fs-16 m-0'>{item.date}</p>
                                    <p className='s-text-color roboto-regular fs-16 m-0'>by {item.by}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className="doc-container p-3">
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <img src={payableDoller} alt="payableDoller" className='payment-status-card mt-1' />
                            <p className="p-text-color roboto-medium fs-16 m-0">Payables</p>
                        </div>
                        <p className="roboto-regular fs-16 s-text-color">
                            Service charges payable for this application (view only)
                        </p>
                        {payables.map((item, idx) => (
                            <div key={idx} className="d-flex justify-content-between align-items-center py-2 doc-list mt-3">
                                <div>
                                    <p className="p-text-color roboto-regular fs-16 m-0">{item.role}</p>
                                    <p className="s-text-color roboto-regular fs-16 m-0">{item.person}</p>
                                </div>
                                <div>
                                    <p className="p-text-color roboto-regular fs-16 m-0 text-end">{item.amount}</p>
                                    <div className={`s-text-color roboto-regular fs-16 payable-badge ${item.status.replace(/\s+/g, '').toLowerCase()}`}>
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <ApplicationApproveCard
                        title="Admin Actions"
                        approveLabel="Approve Application"
                        rejectLabel="Reject Application"
                        onApprove={handleApproveOpen}
                        onReject={handleRejectOpen}
                    />
                </div>
            </div>
            <Modal show={showRejectModal} onHide={handleRejectClose} centered>
                <Modal.Body className="p-4">
                    <h5 className="mb-3">Reject Application</h5>
                    <p className="mb-2">Please provide a reason for rejection:</p>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter rejection reason..."
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                    />
                    <div className="d-flex justify-content-between gap-3 mt-4">
                        <button
                            className="btn btn-danger w-50 py-2"
                            onClick={handleConfirmReject}
                        >
                            Confirm Rejection
                        </button>

                        <button
                            className="btn btn-outline-secondary w-50 py-2"
                            onClick={handleRejectClose}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showApproveModal} onHide={handleApproveClose} centered>
                <Modal.Body className="p-4">
                    <h5 className="mb-2 roboto-regular">Assign Review Teams</h5>
                    <Form.Group className="mb-3">
                        <Form.Label className="roboto-medium">
                            Legal Team Head <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                            value={reviewTeams.legalTeamHead}
                            onChange={(e) =>
                                setReviewTeams((prev) => ({ ...prev, legalTeamHead: e.target.value }))
                            }
                        >
                            <option value="">Select Legal Team Head</option>
                            {legalHeads.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="roboto-medium">
                            Legal Team Member <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                            value={reviewTeams.legalTeamMember}
                            onChange={(e) =>
                                setReviewTeams((prev) => ({
                                    ...prev,
                                    legalTeamMember: e.target.value,
                                }))
                            }
                        >
                            <option value="">Select Legal Team Member</option>
                            {legalMembers.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="roboto-medium">
                            Engineering Team <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                            value={reviewTeams.engineeringTeam}
                            onChange={(e) =>
                                setReviewTeams((prev) => ({
                                    ...prev,
                                    engineeringTeam: e.target.value,
                                }))
                            }
                        >
                            <option value="">Select Engineering Team</option>
                            {engineeringTeams.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <div className="d-flex justify-content-between gap-3">
                        <button
                            className="btn btn-success w-50 py-2"
                            disabled={
                                !reviewTeams.legalTeamHead ||
                                !reviewTeams.legalTeamMember ||
                                !reviewTeams.engineeringTeam
                            }
                            onClick={() => {
                                handleApproveClose();
                            }}
                        >
                            Assign & Approve
                        </button>

                        <button
                            className="btn btn-outline-secondary w-50 py-2"
                            onClick={handleApproveClose}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ApplicationViewPage;
