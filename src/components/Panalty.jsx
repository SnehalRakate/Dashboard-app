import React, { useState } from "react";
import { Offcanvas, Dropdown, DropdownButton } from "react-bootstrap";
import { MdOutlineEditNote } from "react-icons/md";
import { FaRegUserCircle  } from "react-icons/fa";
import "./InvoiceTable/InvoiceTable.css";

const Panalty = () => {
  const [showReassignOffcanvas, setShowReassignOffcanvas] = useState(false);

  const handleOpenReassignOffcanvas = () => setShowReassignOffcanvas(true);
  const handleCloseReassignOffcanvas = () => setShowReassignOffcanvas(false);

  const invoices = [
    { id: 1, name: "Geodesic", User_Name: "Ramesh", orderId: "SD100037", invoiceId: "1234", date: "22-02-2222", amount: "₹12341233", department: "Accounts" },
    { id: 2, name: "Optipace Technology PVT", User_Name: "Kartik", orderId: "SD100038", invoiceId: "213", date: "22-02-2222", amount: "₹3141515", department: "Admin" },
    { id: 3, name: "Sony", User_Name: "Subu", orderId: "QW100037", invoiceId: "432", date: "22-02-2222", amount: "₹561514151", department: "Finance" },
  ];

  const users = [
    "User Name 1",
    "User Name 2",
    "User Name 3",
    "User Name 4",
    "User Name 5",
    "User Name 6",
    "User Name 7",
    "User Name 8",
  ];

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="content">
          <h2>Penalty</h2>
          <div className="search-edit-wrapper">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              style={{ marginLeft: "840px" }}
            />
            <button
              className="edit-icon-btn"
              onClick={handleOpenReassignOffcanvas}
              style={{ backgroundColor: "white", border: "1px solid #ccc" }}
            >
              <MdOutlineEditNote />
            </button>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>All</th>
                <th>No</th>
                <th>Company Name</th>
                <th>User Name</th>
                <th>Order ID</th>
                <th>Invoice ID</th>
                <th>Issued Date</th>
                <th>Invoice Amount</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{invoice.id}</td>
                  <td>{invoice.name}</td>
                  <td>{invoice.User_Name}</td>
                  <td>{invoice.orderId}</td>
                  <td>{invoice.invoiceId}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reassign Offcanvas */}
      <Offcanvas
        show={showReassignOffcanvas}
        onHide={handleCloseReassignOffcanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reassign</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            {/* Level Dropdown */}
            <div className="mb-3">
              <label htmlFor="levelDropdown" className="form-label">
                Level
              </label>
              <DropdownButton id="levelDropdown" title="Select Level">
                <Dropdown.Item eventKey="Level 1">Level 1</Dropdown.Item>
                <Dropdown.Item eventKey="Level 2">Level 2</Dropdown.Item>
                <Dropdown.Item eventKey="Level 3">Level 3</Dropdown.Item>
              </DropdownButton>
            </div>

            {/* Users in Vertical Column */}
            <div className="mb-3">
              <ul id="usersColumn" style={{ listStyle: "none", padding: 0,cursor:"pointer" }}>
                {users.map((user, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <FaRegUserCircle  size={24} style={{ marginRight: "10px" , fontSize:"2.5rem"}} />
                    {user}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-light"
              onClick={handleCloseReassignOffcanvas}
              style={{backgroundColor:"white", marginLeft:"10px"}}
            >
             Cancel
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={handleCloseReassignOffcanvas}
              style={{backgroundColor:"white",marginLeft:"10px"}}
            >
              Send
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Panalty;

