import React from 'react'

const JobRecievedCard = ({ imgSrc, title, count, currncy, amount, imgAlt = "dashboard icon", className }) => {
  return (
    <div className={`${className}`}>
      <div className="mb-4">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="payment-status-card d-flex align-items-center justify-content-center"
        />
      </div>
      <div className="roboto-regular fs-16 p-text-color mb-2">
        {count}
      </div>
      <div className="roboto-regular fs-16 p-text-color mb-2">
         {currncy}{amount}
      </div>
      <div className="roboto-regular s-text-color fs-16">
        {title}
      </div>
    </div>
  )
}
export default JobRecievedCard;