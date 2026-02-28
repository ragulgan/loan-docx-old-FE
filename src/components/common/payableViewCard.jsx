import React from 'react'

const PayableViewCard = ({ imgSrc, title, amount, imgAlt = "payableDoller" }) => {
    return (
        <div className="p-4 profile-card">
            <div className="d-flex align-items-center gap-2 mb-1">
                <img src={imgSrc} alt={imgAlt} className='payment-status-card mt-1' />
                <p className='p-text-color roboto-regular fs-16 m-0'>{title}</p>
            </div>
            <div className="mt-2 roboto-regular fs-16">₹{amount.toLocaleString()}</div>
        </div>
    )
}

export default PayableViewCard;
