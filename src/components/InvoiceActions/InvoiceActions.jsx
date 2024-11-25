import React, { useState } from "react";
// import "../Sidebar/Sidebar.css";
// import "../InvoiceTable/InvoiceTable.css";
import "../InvoiceActions/InvoiceActions.css";
import { MdOutlineEditNote } from "react-icons/md";
import InvoiceReceived from "../InvoiceRecived"; 
import InvoiceTable from "../InvoiceTable/InvoiceTable"; 
import Sidebar from "../Sidebar/Sidebar";

const InvoiceActions = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false); // State to toggle offcanvas visibility

  const handleEditClick = () => {
    setShowOffCanvas(true); // Open the offcanvas when edit icon is clicked
  };

  const handleCloseOffcanvas = () => {
    setShowOffCanvas(false); // Close offcanvas
  };

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="main-content">
        <div className="content">
          <h2>Invoice Received</h2>
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
              <button className="edit-icon-btn" onClick={handleEditClick}>
                <MdOutlineEditNote />
              </button>
            </div>
          </div>
          <InvoiceTable />
        </div>
      </div>

      {/* Off-canvas Component */}
      {showOffCanvas && (
        <div
          className="offcanvas offcanvas-end show"
          tabIndex="-1"
          style={{
            visibility: showOffCanvas ? "visible" : "hidden",
            transition: "transform 0.3s ease-in-out",
            backgroundColor: "#F9FAFC",
            width: "475px",
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Invoice Received</h5>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                color: "black",
                marginLeft: "130px",
                width: "81px",
                height: "34px",
                backgroundColor: "#D5E3FF",
              }}
            >
              Reassign
            </button>
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Close"
              onClick={handleCloseOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <InvoiceReceived /> {/* Render the InvoiceReceived component to show the invoice form */}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceActions;
