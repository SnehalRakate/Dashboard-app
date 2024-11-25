import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "bootstrap/dist/css/bootstrap.min.css";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{message}</p>
        <button onClick={onClose} style={styles.button}>OK</button>
      </div>
    </div>
  );
};

const InvoiceRecived = () => {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAddQueueOffcanvas, setShowAddQueueOffcanvas] = useState(false); // State for AddQueue offcanvas
  const [showSendBackOffcanvas, setShowSendBackOffcanvas] = useState(false); // State for Send Back End Offcanvas
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAcceptClick = () => {
    setShowConfirmMessage(true); // Show confirmation message when accept is clicked
  };

  const handleCloseConfirmMessage = () => {
    setShowConfirmMessage(false); // Close the confirmation message
  };

  const handleAccept = () => {
    setShowConfirmMessage(false); // Hide the confirmation box
    setShowModal(true); // Show success modal
  };

  const handleReject = () => {
    navigate('/rejectedinvoice'); // Navigate to rejected invoice page
  };

  const handleSendBack = () => {
    setShowSendBackOffcanvas(true); // Show Send Back End Offcanvas
  };

  // Toggle AddQueue Offcanvas visibility
  const toggleAddQueueOffcanvas = () => {
    setShowAddQueueOffcanvas(!showAddQueueOffcanvas);
  };

  // Toggle SendBack Offcanvas visibility
  const toggleSendBackOffcanvas = () => {
    setShowSendBackOffcanvas(!showSendBackOffcanvas);
  };

  // Handle Done button click inside SendBack Offcanvas
  const handleDone = () => {
    setShowSendBackOffcanvas(false); // Hide SendBack Offcanvas
    setShowSuccessMessage(true); // Show success message
  };

  return (
    <div>
      {/* Form for Invoice Details */}
      <form>
        <div className="mb-3">
          <label htmlFor="gstNo" className="form-label">GST No</label>
          <input type="text" className="form-control" id="gstNo" />
        </div>

        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="companyName" />
        </div>

        <div className="mb-3">
          <label htmlFor="invoiceNo" className="form-label">Invoice No</label>
          <input type="text" className="form-control" id="invoiceNo" />
        </div>

        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" id="viewInvoice" />
          <label className="form-check-label" htmlFor="viewInvoice">View the uploaded invoice</label>
        </div>
        
        {/* Send Back Button */}
        <button 
          type="button" 
          className="btn btn-light" 
          style={{ backgroundColor: "white" }} 
          onClick={handleSendBack}
        >
          Send back
        </button>

        {/* Action Buttons */}
        <div className="justify-content-between mt-4">
          <button onClick={handleAcceptClick} type="button" className="btn btn-light" style={{ backgroundColor: "white" }}>Accept</button>
          <button onClick={handleReject} type="button" className="btn btn-light" style={{ backgroundColor: "white" }}>Reject</button>
          <button type="button" className="btn btn-light" style={{ backgroundColor: "white" }}>Dispute</button>
          <button type="button" className="btn btn-light"  style={{ backgroundColor: "white" }} onClick={toggleAddQueueOffcanvas}>Queue</button>
        </div>

        {/* AddQueue Offcanvas */}
        {showAddQueueOffcanvas && (
          <div
            className={`offcanvas offcanvas-end ${showAddQueueOffcanvas ? "show" : ""}`}
            tabIndex="-1"
            style={{
              visibility: showAddQueueOffcanvas ? "visible" : "hidden",
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#F9FAFC",
              width: "475px",
            }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Add Queue</h5>
              <button
                type="button"
                className="btn-close text-reset"
                aria-label="Close"
                onClick={toggleAddQueueOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* AddQueue Form Fields */}
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="queueName" placeholder="Processing Queue" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exceptionQueue" placeholder="Exception Queue" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="duplicateQueue" placeholder="Duplicate Queue" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="missingPoQueue" placeholder="Missing PO Queue" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="receiptHoldQueue" placeholder="Receipt Hold Queue" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="supplierPortalQueue" placeholder="Supplier Portal Queue" />
                </div>

                {/* Action Buttons inside AddQueue Offcanvas */}
                <div className="addquebtn d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    id="QueueBtn"
                    onClick={toggleAddQueueOffcanvas} // Close on Cancel
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    id="QueueBtn"
                    onClick={toggleAddQueueOffcanvas}
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Send Back End Offcanvas */}
        {showSendBackOffcanvas && (
          <div
            className={`offcanvas offcanvas-end ${showSendBackOffcanvas ? "show" : ""}`}
            tabIndex="-1"
            style={{
              visibility: showSendBackOffcanvas ? "visible" : "hidden",
              transition: "transform 0.3s ease-in-out",
              backgroundColor: "#F9FAFC",
              width: "475px",
            }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Send Back Details</h5>
              <button
                type="button"
                className="btn-close text-reset"
                aria-label="Close"
                onClick={toggleSendBackOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Send Back Form Fields */}
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="sendBackReason" placeholder="Reason for Sending Back" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="sendBackNotes" placeholder="Additional Notes"></textarea>
                </div>

                {/* Action Buttons inside SendBack Offcanvas */}
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleSendBackOffcanvas} // Close on Cancel
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleDone} // Show success message on Done
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Confirmation Box */}
        {showConfirmMessage && (
  <div style={styles.confirmationBox}>
    <h4>Are you sure you want to accept this invoice?</h4>
    <div className="d-flex justify-content-between mt-3">
      <button onClick={handleAccept} type="button" className="btn btn-light" style={{ backgroundColor: "white" }}>
        Yes
      </button>
      <button onClick={handleCloseConfirmMessage} type="button" className="btn btn-light" style={{ backgroundColor: "white" }}>
        No
      </button>
    </div>
  </div>
)}
      </form>

      {/* Success Modal */}
      {showModal && (
        <SuccessModal message="Successfully sent back the invoice for approve" onClose={() => setShowModal(false)} />
      )}

      {/* Success Message after Done in Send Back */}
      {showSuccessMessage && (
        <SuccessModal message="Successfully sent back the invoice for approve" onClose={() => setShowSuccessMessage(false)} />
      )}
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  confirmationBox: {
    position: "fixed",
    top: "80%",
    left: "80.5%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    backgroundColor:"#9F9F9F",
    textAlign: "center",
    padding: "20px",
    zIndex: 10000,
  },
};

export default InvoiceRecived;

