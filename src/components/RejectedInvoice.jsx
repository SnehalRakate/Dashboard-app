import React, { useState } from "react";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { MdOutlineEditNote } from "react-icons/md";
import Sidebar from "./Sidebar/Sidebar";
import { Offcanvas, Button } from "react-bootstrap";

const RejectedInvoice = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const data = [
      {
        "no": 1,
        "companyName": "TechFusion Solutions",
        "gstOrPan": "27BCAA1234C1Z8",
        "orderId": "TF100001",
        "invoiceId": 101,
        "issuedDate": "15-01-2022",
        "invoiceAmount": "523400",
        "department": "Finance",
        "remark": "Pending",
        "details": "Invoice for software development services, pending payment."
      },
      {
        "no": 3,
        "companyName": "Skyline Industries",
        "gstOrPan": "33AABCS4567D1Z0",
        "orderId": "SI100045",
        "invoiceId": 315,
        "issuedDate": "28-03-2022",
        "invoiceAmount": "762810",
        "department": "Procurement",
        "remark": "Paid",
        "details": "Content for Skyline Industries for product purchase."
      },
      {
        "no": 4,
        "companyName": "Global Enterprises",
        "gstOrPan": "11AAABG9876C1Z4",
        "orderId": "GE100076",
        "invoiceId": 408,
        "issuedDate": "05-04-2022",
        "invoiceAmount": "1500000",
        "department": "Sales",
        "remark": "Pending",
        "details": "Invoice for bulk sales of products to Global Enterprises."
      },
      {
        "no": 5,
        "companyName": "Innovative Systems",
        "gstOrPan": "19BCCPI1234A2Z1",
        "orderId": "IS100125",
        "invoiceId": 509,
        "issuedDate": "12-05-2022",
        "invoiceAmount": "985600",
        "department": "Engineering",
        "remark": "Paid",
        "details": "Payment received for maintenance and support services."
      },
      {
        "no": 6,
        "companyName": "TechnoCreations",
        "gstOrPan": "21XYZAB1234C1Z9",
        "orderId": "TC100198",
        "invoiceId": 601,
        "issuedDate": "19-06-2022",
        "invoiceAmount": "1234500",
        "department": "HR",
        "remark": "Pending",
        "details": "Invoice for HR services and employee training."
      },
      {
        "no": 7,
        "companyName": "Visionary Labs",
        "gstOrPan": "29AABKL9876E1Z3",
        "orderId": "VL100234",
        "invoiceId": 712,
        "issuedDate": "02-07-2022",
        "invoiceAmount": "245000",
        "department": "Operations",
        "remark": "Paid",
        "details": "Payment received for operational equipment purchase."
      },
      {
        "no": 8,
        "companyName": "Creative Minds",
        "gstOrPan": "40AABCQ1234F1Z8",
        "orderId": "CM100365",
        "invoiceId": 823,
        "issuedDate": "09-08-2022",
        "invoiceAmount": "788000",
        "department": "Marketing",
        "remark": "Paid",
        "details": "Payment for digital marketing services."
      }
    ]
    

  const handleRemarkClick = (invoiceId) => {
    setExpandedRow((prevRow) => (prevRow === invoiceId ? null : invoiceId)); // Toggle row details
  };

  const handleEditIconClick = () => {
    setShowOffcanvas(true); // Show the Offcanvas
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false); // Hide the Offcanvas
  };

  return (
    <div className="dashboard-container" style={{height:"100%"}}>
      <Sidebar />
      <div className="main-content">
        <div className="content">
          <h2>Invoice Received</h2>

          {/* Action Buttons and Search Bar */}
          <div className="actions-row">
            <div className="buttons">
              <button className="btn approve">Approve</button>
              <button className="btn reject">Rejected</button>
              <button className="btn pending">Pending</button>
            </div>
            <div className="search-edit-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button className="edit-icon-btn" onClick={handleEditIconClick}>
                <MdOutlineEditNote />
              </button>
            </div>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>No</th>
                <th>Company Name</th>
                <th>GST or PAN</th>
                <th>Order ID</th>
                <th>Invoice ID</th>
                <th>Issued Date</th>
                <th>Invoice Amount</th>
                <th>Department</th>
                <th>Remark</th>
              </tr>
            </thead>

            <tbody>
              {data.map((invoice) => (
                <React.Fragment key={invoice.invoiceId}>
                  <tr
                    onClick={() => handleRemarkClick(invoice.invoiceId)}
                    style={{
                      backgroundColor: expandedRow === invoice.invoiceId ? "#13255B" : "",
                      color: expandedRow === invoice.invoiceId ? "white" : "black",
                      cursor: "pointer",
                    }}
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{invoice.no}</td>
                    <td>{invoice.companyName}</td>
                    <td>{invoice.gstOrPan}</td>
                    <td>{invoice.orderId}</td>
                    <td>{invoice.invoiceId}</td>
                    <td>{invoice.issuedDate}</td>
                    <td>{invoice.invoiceAmount}</td>
                    <td>{invoice.department}</td>
                    <td>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        {invoice.remark}
                        <ExpandMoreIcon style={{ marginLeft: 5 }} />
                      </span>
                    </td>
                  </tr>

                  {/* Conditionally render the detail row when expanded */}
                  {expandedRow === invoice.invoiceId && (
                    <tr>
                      <td colSpan="10">
                        <div className="invoice-details">
                          <strong>Details: </strong>{invoice.details}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Offcanvas Component */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Send Back</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Remark</p>
          <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <button type="button" class="btn btn-light" style={{backgroundColor:"white",marginTop:"10px"}}>Cancel</button>
  <button type="button" class="btn btn-light" style={{backgroundColor:"white",marginLeft:"15px",marginTop:"10px"}}>Send</button>
</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default RejectedInvoice;


