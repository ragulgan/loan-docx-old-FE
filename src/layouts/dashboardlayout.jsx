import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/sidebarPage'
import Topbar from '../components/topbar/topbar'


const DashboardLayout = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            
            <div className="flex-grow-1 d-flex flex-column">

                <Topbar userName="Admin User" userRole="Admin" />

                <div
                    className="flex-grow-1 p-4 main-content"
                    style={{ backgroundColor: '#F4F6F8' }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
