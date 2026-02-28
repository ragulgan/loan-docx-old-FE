import React, { useState } from 'react'
import { getBadgeClass } from '../../utils/constant'
import * as Icon from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router'
import ActionMenu from './action'

const ReusableTable = ({ columns, data, tableName, itemsPerPage = 5 }) => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)

  // Handle different data structures
  const isCountBased = data?.count !== undefined
  const totalRecords = isCountBased ? data?.count : data?.length || 0
  const records = isCountBased ? data?.data : data
  
  // Calculate pagination
  const totalPages = Math.ceil(totalRecords / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  const paginatedData = records?.slice(startIdx, endIdx) || []

  // Navigation handlers
  const handleView = (id) => {
    navigate(`/loanapp/${id}`)
  }
  const handleAgentView = (id) => {
    navigate(`/user/${id}`)
  }
  const payablehandleView = (id) => {
    navigate(`/payable/${id}`)
  }

  // Pagination handlers
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum)
  }

  // Generate page numbers for pagination display
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages, start + maxVisible - 1)
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div>
      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c.label}</th>
            ))}
          </tr>
        </thead>

        {/* Loan Application Table */}
        {tableName === "loanApplication" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.applicationId||"-"}</td>
                  <td>{item.applicantName}</td>
                  <td>{item.loanType}</td>
                  <td>{item.agentName}</td>
                  <td>
                    <span className={getBadgeClass(item.paymentStatus)}>
                      {item.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <span className={getBadgeClass(item.currentStatus)}>
                      {item.currentStatus}
                    </span>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <ActionMenu onView={() => handleView(item.id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Dashboard Table */}
        {tableName === "dashboard-table" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.applicationId}</td>
                  <td>{item.applicantName}</td>
                  <td>{item.loanType}</td>
                  <td>{item.amount}</td>
                  <td>{item.agentName}</td>
                  <td>{item.submittedDate}</td>
                  <td>{item.action}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Payables List */}
        {tableName === "payablesList" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <Link to={`/payable/${item.id}`} className="text-decoration-none">
                      {item.userName}
                    </Link>
                  </td>
                  <td>{item.role}</td>
                  <td>{item.applicationId}</td>
                  <td>{item.loanType}</td>
                  <td>{item.amountSlab}</td>
                  <td>{item.earnedAmt}</td>
                  <td>{item.triggeredEvent}</td>
                  <td>{item.earnedDate}</td>
                  <td>
                    <span className={getBadgeClass(item.paymentStatus)}>
                      {item.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm send-bank-btn"
                      onClick={() => payablehandleView(item.id)}
                    >
                      Mark as Paid
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Payables List View */}
        {tableName === "payablesListview" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.applicationId}</td>
                  <td>{item.role}</td>
                  <td>{item.earnedAmt}</td>
                  <td>{item.triggeredEvent}</td>
                  <td>{item.earnedDate}</td>
                  <td>
                    <span className={getBadgeClass(item.paymentStatus)}>
                      {item.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* User Table */}
        {tableName === "user-table" && (
          <tbody>
            {totalRecords > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.user_id|| "-"}</td>
                  <td>{item.user_name}</td>
                  <td>{item.email_id}</td>
                  <td>{item.upi_id}</td>
                  <td>{item.mobile_number}</td>
                  <td>
                    <span
                      className={`fs-16 rounded-pill px-3 py-2 ${
                        item.user_active === "Y"
                          ? "bg-success-subtle text-success"
                          : "bg-light text-dark"
                      }`}
                    >
                      {item.user_active === "Y" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <ActionMenu onView={() => handleAgentView(item.user_id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Agents View Table */}
        {tableName === "agentsview-table" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.applicationId}</td>
                  <td>{item.applicantName}</td>
                  <td>{item.loanType}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span className={getBadgeClass(item.status)}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Jobs Received Table */}
        {tableName === "jobrecived" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx} className="align-middle">
                  <td>{item.applicationId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.loanType}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span className={getBadgeClass(item.status)}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.assignedTo}</td>
                  <td>{item.submitted}</td>
                  <td>Review</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}

        {/* Earnings Page Table */}
        {tableName === "earningspage" && (
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx} className="align-middle">
                  <td>{item.applicationId}</td>
                  <td>{item.customer}</td>
                  <td>{item.loanType}</td>
                  <td>{item.reviewDate}</td>
                  <td>{item.amountEarned}</td>
                  <td>
                    <span className={getBadgeClass(item.paymentStatus)}>
                      {item.paymentStatus}
                    </span>
                  </td>
                  <td>View Details</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-3 text-muted">
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>

      {/* Pagination Controls */}
      {totalRecords > itemsPerPage && (
        <nav aria-label="Page navigation" className="mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Showing {totalRecords === 0 ? 0 : startIdx + 1} to {Math.min(endIdx, totalRecords)} of {totalRecords} records
            </small>

            <ul className="pagination mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>

              {getPageNumbers().map((pageNum) => (
                <li
                  key={pageNum}
                  className={`page-item ${currentPage === pageNum ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  )
}

export default ReusableTable