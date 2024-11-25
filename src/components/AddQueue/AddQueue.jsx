import React from "react";
import "./AddQueue.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddQueue = ({ showOffcanvas, toggleOffcanvas }) => {
  return (
    <div>
      {/* Offcanvas component */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        style={{
          visibility: showOffcanvas ? "visible" : "hidden",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title">Add Queue</h4>
          <button
            type="button"
            className="btn-close text-reset"
            aria-label="Close"
            onClick={toggleOffcanvas} // Close the Offcanvas
          ></button>
        </div>
        <div className="offcanvas-body">
          <input type="text" id="canvasinput" placeholder="Processing Queue" />
          <input type="text" id="canvasinput" placeholder="Exception Queue" />
          <input type="text" id="canvasinput" placeholder="Duplicate Queue" />
          <input type="text" id="canvasinput" placeholder="Missing PO Queue" />
          <input type="text" id="canvasinput" placeholder="Receipt Hold Queue" />
          <input
            type="text"
            id="canvasinput"
            placeholder="Supplier Portal Queue"
          />
          <div className="addquebtn">
            <button
              className="btn btn-secondary"
              id="QueueBtn"
              onClick={toggleOffcanvas} // Close on Cancel
            >
              Cancel
            </button>
            <button
              className="btn btn-secondary"
              id="QueueBtn"
              onClick={toggleOffcanvas} // Close on Done
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueue;
