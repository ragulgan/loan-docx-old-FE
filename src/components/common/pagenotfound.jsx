import React from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="pnf-wrapper d-flex flex-column align-items-center justify-content-center text-center px-3">
            <h1 className="pnf-code text-primary fw-bold mb-2">
                404
            </h1>
            <h5 className="mb-2">
                Oops! Page not found
            </h5>
            <p className="text-muted mb-4">The page you're looking for doesn't exist or has been moved.</p>
            <button
                className="btn btn-primary px-4"
                onClick={() => navigate('/dashboard')}>
                Go to Home
            </button>
        </div>
    )
}

export default PageNotFound
