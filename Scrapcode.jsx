import React, { useState } from "react";
import AddQueue from "./AddQueue";
import "bootstrap/dist/css/bootstrap.min.css";

const InvoiceRecived = () => {
  const [showInvoiceOffcanvas, setShowInvoiceOffcanvas] = useState(false); // Invoice Received
  const [showAddQueueOffcanvas, setShowAddQueueOffcanvas] = useState(false); // Add Queue
  const [showModal, setShowModal] = useState(false);

  const toggleInvoiceOffcanvas = () => {
    setShowInvoiceOffcanvas(!showInvoiceOffcanvas);
    setShowAddQueueOffcanvas(false); // Close Add Queue when Invoice is toggled
  };

  const toggleAddQueueOffcanvas = () => {
    setShowInvoiceOffcanvas(false); // Close Invoice when Add Queue is toggled
    setShowAddQueueOffcanvas(!showAddQueueOffcanvas);
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleInvoiceOffcanvas}>
        Open Invoice Details
      </button>

      {/* Invoice Received Offcanvas */}
      {showInvoiceOffcanvas && (
        <div
          className="offcanvas offcanvas-end show"
          style={{
            backgroundColor: "#F9FAFC",
            width: "475px",
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Invoice Received</h5>
            <button
              type="button"
              className="btn-close text-reset"
              onClick={toggleInvoiceOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Invoice Form */}
            <form>
              {/* Invoice Fields */}
              <div className="mb-3">
                <label htmlFor="gstNo" className="form-label">
                  GST No
                </label>
                <input type="text" className="form-control" id="gstNo" />
              </div>
              {/* Other fields omitted for brevity */}
              <div className="mt-4 d-flex justify-content-between">
                <button className="btn btn-primary" onClick={toggleAddQueueOffcanvas}>
                  Open Add Queue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Queue Offcanvas */}
      {showAddQueueOffcanvas && (
        <AddQueue toggleOffcanvas={toggleAddQueueOffcanvas} />
      )}

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Successfully sent back the invoice for approval.</p>
            <button className="btn btn-primary" onClick={handleModalClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceRecived;


