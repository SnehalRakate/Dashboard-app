import React from "react";
import "../../components/InvoiceTable/InvoiceTable.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { FaRegFilePdf } from "react-icons/fa";
import "../../components/Queues/Queues.css";

const Report = () => {
    const invoices = [
        { 
          No: 1, 
          Requisition_type: "Geodesic", 
          Category_name: "Ramesh", 
          Requisition_title: "Title Name 1", 
          Business_Unit: "1213", 
          Total_value: "₹1,234,123", 
          Status: "Approved" 
        },
        { 
          No: 2, 
          Requisition_type: "Cylindrical", 
          Category_name: "Suresh", 
          Requisition_title: "Title Name 2", 
          Business_Unit: "1456", 
          Total_value: "₹1,045,600", 
          Status: "Pending" 
        },
        { 
          No: 3, 
          Requisition_type: "Rectangular", 
          Category_name: "Mahesh", 
          Requisition_title: "Title Name 3", 
          Business_Unit: "1890", 
          Total_value: "₹2,010,000", 
          Status: "Rejected" 
        },
        { 
          No: 4, 
          Requisition_type: "Linear", 
          Category_name: "Rajesh", 
          Requisition_title: "Title Name 4", 
          Business_Unit: "1432", 
          Total_value: "₹3,200,000", 
          Status: "Approved" 
        },
        { 
          No: 5, 
          Requisition_type: "Circular", 
          Category_name: "Kailash", 
          Requisition_title: "Title Name 5", 
          Business_Unit: "1560", 
          Total_value: "₹980,450", 
          Status: "In Progress" 
        },
        { 
          No: 6, 
          Requisition_type: "Elliptical", 
          Category_name: "Ganesh", 
          Requisition_title: "Title Name 6", 
          Business_Unit: "1742", 
          Total_value: "₹1,340,600", 
          Status: "Pending" 
        },
        { 
          No: 7, 
          Requisition_type: "Trapezoidal", 
          Category_name: "Naresh", 
          Requisition_title: "Title Name 7", 
          Business_Unit: "1203", 
          Total_value: "₹560,000", 
          Status: "Approved" 
        },
        { 
          No: 8, 
          Requisition_type: "Hexagonal", 
          Category_name: "Paresh", 
          Requisition_title: "Title Name 8", 
          Business_Unit: "1678", 
          Total_value: "₹1,876,000", 
          Status: "In Progress" 
        },
        { 
          No: 9, 
          Requisition_type: "Parabolic", 
          Category_name: "Dinesh", 
          Requisition_title: "Title Name 9", 
          Business_Unit: "1310", 
          Total_value: "₹450,000", 
          Status: "Rejected" 
        },
        { 
          No: 10, 
          Requisition_type: "Octagonal", 
          Category_name: "Mukesh", 
          Requisition_title: "Title Name 10", 
          Business_Unit: "1980", 
          Total_value: "₹2,670,000", 
          Status: "Approved" 
        }
      ];
  return (
    <div className="dashboard-container">
    <div className="main-content" >
    <div className="actions-row">
        <h2>Report</h2>
            <div className="buttons">
              {/* <Calender/> */}
            </div>
            <div className="search-edit-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button className="edit-icon-btn" style={{marginRight:"5px"}}>
              <MdOutlineEditNote/>
              </button>
              <button className="edit-icon-btn" style={{marginRight:"5px"}}>
              <FaRegFilePdf/>
              </button>
              <button className="edit-icon-btn" style={{marginRight:"5px"}}>
              <CgFileDocument/>
              </button>
            </div>
          </div>
    <div className="container">
    
      {/* Queue List */}
      <div className="queue-list" style={{width:"150px",}}>
        <ul className='sidebar-list' style={{width:"150px"}}>
        <li className='sidebar-list-item' style={{backgroundColor:"white",color:"black"}}>
      <a href="" >
      List of Queues
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Requisition Status
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Requisition Ageing
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Requisition Volume
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Purchase Order Details
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Purchase Order Volume
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Invoice Aging
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Exception detail
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Invoice Detailed
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Invoice Lifecycle
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Contract information
      </a>
    </li>
    <li className='sidebar-list-item'>
      <a href="">
      Supplier compliance to contract
      </a>
    </li>
  </ul>
      </div>

      {/* Invoice Table */}
      <table className="invoice-table" style={{marginLeft:"20px"}}>
      <thead>
        <tr>
          <th>All</th>
          <th>No</th>
          <th>Requisition_type</th>
          <th>Category_name</th>
          <th>Requisition_title</th>
          <th>Business_Unit</th>
          <th>Total_value</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{invoice.No}</td>
            <td>{invoice.Requisition_type}</td>
            <td>{invoice.Category_name}</td>
            <td>{invoice.Requisition_title}</td>
            <td>{invoice.Business_Unit}</td>
            <td>{invoice.Total_value}</td>
            <td className={`status ${invoice.Status.toLowerCase().replace(" ", "-")}`}>
                {invoice.Status}
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    </div>
  );
};

export default Report;
