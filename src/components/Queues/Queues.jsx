import React, { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { Offcanvas, Dropdown, DropdownButton } from "react-bootstrap";
import "../../components/InvoiceTable/InvoiceTable.css";
import "../../components/Queues/Queues.css";

const Queues = () => {
  
  const [showAddOffcanvas, setShowAddOffcanvas] = useState(false); // State for Add New Queue Offcanvas
  const [showEditOffcanvas, setShowEditOffcanvas] = useState(false); // State for Edit Queue Offcanvas
  const [queueStatus, setQueueStatus] = useState("Status");
  const [queueName, setQueueName] = useState("Name");

  const invoices = [
    { id: 1, name: "Geodesic", User_Name: "Ramesh", orderId: "SD100037", invoiceId: "1234", date: "22-02-2222", amount: "₹12341233", department: "Accounts" },
    { id: 2, name: "Optipace Technology PVT", User_Name: "Kartik", orderId: "SD100038", invoiceId: "213", date: "22-02-2222", amount: "₹3141515", department: "Admin" },
    // ... (Remaining invoices here)
  ];
   
  const handleQueueStatusChange = (status) => {
    setQueueStatus(status);
  };

  const handleQueueNameChange = (name) => {
    setQueueName(name);
  }

  // Handlers for Add New Queue
  const handleAddQueueClick = () => {
    setShowAddOffcanvas(true); // Show Add New Queue Offcanvas
  };

  const handleCloseAddOffcanvas = () => {
    setShowAddOffcanvas(false); // Hide Add New Queue Offcanvas
  };

  // Handlers for Edit Queue
  const handleListOfQueuesClick = () => {
    setShowEditOffcanvas(true); // Show Edit Queue Offcanvas
  };

  const handleCloseEditOffcanvas = () => {
    setShowEditOffcanvas(false); // Hide Edit Queue Offcanvas
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
      <h3>Queues</h3>
        <div className="actions-row">
          <div className="buttons">{/* Placeholder for additional buttons */}</div>
          <div className="search-edit-wrapper">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="edit-icon-btn" style={{ marginRight: "10px" }}>
              <MdOutlineEditNote />
            </button>
            <button className="AddQue" onClick={handleAddQueueClick}>
              Add New Queue
            </button>
          </div>
        </div>

        <div className="container">
          {/* Queue List */}
          <div className="queue-list" style={{ width: "150px" }}>
            <ul className="sidebar-list" style={{ width: "150px" }}>
              <li className="sidebar-list-item" style={{ backgroundColor: "white", color: "black" }}>
                <li className="queue-btn" onClick={handleListOfQueuesClick}>
                  List of Queues
                </li>
              </li>
              <li className="sidebar-list-item">
                <a href="">Processing Queue</a>
              </li>
              <li className="sidebar-list-item">
                <a href="">Exception Queue</a>
              </li>
              <li className="sidebar-list-item">
                <a href="">Duplicate Queue</a>
              </li>
              <li className="sidebar-list-item">
                <a href="">Missing PO Queue</a>
              </li>
              <li className="sidebar-list-item">
                <a href="">Receipt Hold Queue</a>
              </li>
              <li className="sidebar-list-item">
                <a href="">Supplier Portal Queue</a>
              </li>
            </ul>
          </div>

          {/* Invoice Table */}
          <table className="invoice-table" style={{ marginLeft: "20px" }}>
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

      {/* Add New Queue Offcanvas */}
      <Offcanvas show={showAddOffcanvas} onHide={handleCloseAddOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Queue</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="queueName" className="form-label">
                Queue ID
              </label>
              <input type="text" className="form-control" id="queueName" placeholder="Enter Queue Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="queueName" className="form-label">
                Queue Name
              </label>
              <input type="text" className="form-control" id="queueName" placeholder="Enter Queue Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="queueName" className="form-label">
                Queue Desc
              </label>
              <input type="text" className="form-control" id="queueName" placeholder="Enter Queue Name" />
            </div>
            <button type="button" style={{marginLeft:"10px",marginTop:"10px"}} className="btn btn-primary" onClick={handleCloseAddOffcanvas}>
              Cancel
            </button>
            <button type="button"  style={{marginLeft:"10px",marginTop:"10px"}} className="btn btn-primary" onClick={handleCloseAddOffcanvas}>
              Send
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Edit Queue Offcanvas */}
      <Offcanvas show={showEditOffcanvas} onHide={handleCloseEditOffcanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Queue</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form>
      {/* Queue Status Dropdown */}
      <div className="mb-3">
        <label htmlFor="queueStatus" className="form-label">
          Queue Status
        </label>
        <DropdownButton
          id="queueStatusDropdown"
          title={queueStatus}
          onSelect={handleQueueStatusChange}
        >
          <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
          <Dropdown.Item eventKey="Inactive">Inactive</Dropdown.Item>
          <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
        </DropdownButton>
      </div>

      {/* Queue Name Dropdown */}
      <div className="mb-3">
        <label htmlFor="queueName" className="form-label">
          Queue Name
        </label>
        <DropdownButton
          id="queueNameDropdown"
          title={queueName}
          onSelect={handleQueueNameChange}
        >
          <Dropdown.Item eventKey="Accounts">Accounts</Dropdown.Item>
          <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
          <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
          <Dropdown.Item eventKey="IT">IT</Dropdown.Item>
          <Dropdown.Item eventKey="HR">HR</Dropdown.Item>
          <Dropdown.Item eventKey="Operations">Operations</Dropdown.Item>
        </DropdownButton>
      </div>

      {/* Queue Description */}
      <div className="mb-3">
        <label htmlFor="queueDescription" className="form-label">
          Queue Description
        </label>
        <textarea
          className="form-control"
          id="queueDescription"
          rows="3"
          placeholder="Edit Queue Description"
        ></textarea>
      </div>

      {/* Save Button */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCloseEditOffcanvas}
      >
        Save
      </button>
    </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Queues;



