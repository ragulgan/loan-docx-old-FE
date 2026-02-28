import React from 'react'

const PaymentStatusCard = ({ icon, status, amount, txnId, date, method }) => {
    return (
        <div className="service-payment-card p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
                {icon}
                <span className="roboto-medium fs-16">Service Charge Payment Status</span>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-2 col-sm-6 mb-2">
                    <div className="roboto-regular fs-16 s-text-color">Status</div>
                    <div className="verified-badge roboto-medium fs-16 mt-1 d-inline-block">{status}</div>
                </div>

                <div className="col-lg-2 col-sm-6 mb-2">
                    <div className="roboto-regular fs-16 s-text-color">Amount</div>
                    <div className="roboto-medium fs-16">{amount}</div>
                </div>

                <div className="col-lg-3 col-sm-6 mb-2">
                    <div className="roboto-regular fs-16 s-text-color">Transaction ID</div>
                    <div className="roboto-medium fs-16">{txnId}</div>
                </div>

                <div className="col-lg-3 col-sm-6 mb-2">
                    <div className="roboto-regular fs-16 s-text-color">Payment Date</div>
                    <div className="roboto-medium fs-16">{date}</div>
                </div>

                <div className="col-lg-2 col-sm-6 mb-2">
                    <div className="roboto-regular fs-16 s-text-color">Method</div>
                    <div className="roboto-medium fs-16">{method}</div>
                </div>
            </div>
        </div>
    )
}
export default PaymentStatusCard;