import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { List } from 'react-bootstrap-icons'

import dashboardIcon from '../../assets/images/Dashboard.svg'
import applicationsIcon from '../../assets/images/Applications.svg'
import agentsIcon from '../../assets/images/Agents.svg'
import loanSetupIcon from '../../assets/images/loan-setup.svg'
import legalIcon from '../../assets/images/Legal.svg'
import engineerIcon from '../../assets/images/engineer.svg'
import rolesIcon from '../../assets/images/roles-access.svg'
import settingsIcon from '../../assets/images/Settings.svg'
import payablesIcon from '../../assets/images/sidebar-payables.svg'
import notificationIcon from '../../assets/images/sidebar-notification.svg'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 768
  )

  const menuItems = [
    // { label: 'Dashboard', path: '/dashboard', icon: dashboardIcon },
    { label: 'Applications', path: '/loanapp', icon: applicationsIcon },
    { label: 'User Creation', path: '/user', icon: agentsIcon },
    { label: 'Loan Setup', path: '/loans', icon: loanSetupIcon },
    { label: 'Legal Review', path: '/legal', icon: legalIcon },
    { label: 'Engineer Review', path: '/engineer', icon: engineerIcon },
    { label: 'Roles & Access', path: '/roles', icon: rolesIcon },
    { label: 'Payables', path: '/payable', icon: payablesIcon },
    // { label: 'Notifications', path: '/notifications', icon: notificationIcon},
    // { label: 'Settings', path: '/settings', icon: settingsIcon },
    // { label: 'Job Received', path: '/job-received', icon: dashboardIcon },
    // { label: 'Earnings', path: '/earnings', icon: payablesIcon }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // auto collapse ONLY when entering small screen
  useEffect(() => {
    if (isSmallScreen) {
      setCollapsed(true)
    }
  }, [isSmallScreen])

  return (
    <div
      className={`sidebar ${collapsed ? 'collapsed' : 'expanded'
        }`}
    >
      {/* Header */}
      <div className="d-flex align-items-center header-index justify-content-between">
        {!collapsed && (
          <h4 className="p-color roboto-medium fs-24 left mb-0">
            LoanDocx Admin
          </h4>
        )}

        {/* Hamburger – always visible */}
        <button
          className="btn p-2"
          onClick={() => setCollapsed(!collapsed)}
        >
          <List size={20} />
        </button>
      </div>
      <hr className='m-0'></hr>
      {/* Menu */}
      <ul className="list-unstyled sidebar-content d-flex flex-column gap-2">
        {menuItems.map((item) => {
          const active = location.pathname === item.path

          return (
            <li key={item.label}>
              <button
                onClick={() => navigate(item.path)}
                className={`sidebar-btn d-flex align-items-center gap-3 ${active ? 'active' : ''
                  }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
                {!collapsed && item.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
