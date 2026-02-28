import React, { useState } from 'react'
import profileIcon from '../../assets/images/topbar-profile.svg'
import logoutIcon from '../../assets/images/topbar-logout.svg'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons'

const Topbar = ({ userName, userRole }) => {
  const [open, setOpen] = useState(false)


      
  return (
    <div className="topbar d-flex justify-content-end align-items-center">
      <div
        className="position-relative topbar-user"
        onClick={() => setOpen(!open)}
      >
        <div className="text-end d-flex align-items-center gap-2 me-5">
          <div>
            <div className="fs-16 roboto-regular">{userName}</div>
            <small className="fs-16 roboto-regular">{userRole}</small>
          </div>

          <span className="arrow">
            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </div>

        {open && (
          <div className="simple-dropdown mt-3 me-3">
            <div className="dropdown-item d-flex align-items-center gap-2">
              <img src={profileIcon} alt="Profile" width={18} />
              <span className="fs-16 roboto-regular">Profile</span>
            </div>

            <div className="dropdown-item d-flex align-items-center gap-2 mt-3">
              <img src={logoutIcon} alt="Logout" width={18} />
              <span className="fs-16 roboto-regular">Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Topbar
