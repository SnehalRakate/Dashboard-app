import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import "./InvoiceTable/InvoiceTable.css";

const KPI = () => {
    
  const invoices = [
      { id: 1, name: "Geodesic", User_Name: "Ramesh", orderId: "SD100037", invoiceId: "1234", date: "22-02-2222", amount: "₹12341233", department: "Accounts" },
      { id: 2, name: "Optipace Technology PVT", User_Name: "Kartik", orderId: "SD100038", invoiceId: "213", date: "22-02-2222", amount: "₹3141515", department: "Admin" },
      { id: 3, name: "Sony", User_Name: "Subu", orderId: "QW100037", invoiceId: "432", date: "22-02-2222", amount: "₹561514151", department: "Finance" },
      { id: 4, name: "IBM", User_Name: "Ramesh", orderId: "QSDR100037", invoiceId: "223", date: "22-02-2222", amount: "₹5424247", department: "Accounts" },
      { id: 5, name: "ITC Infotech India LTD", User_Name: "Kartik", orderId: "WE100037", invoiceId: "112234", date: "22-02-2222", amount: "₹43536334", department: "Admin" },
      { id: 6, name: "Tata Consultancy Services", User_Name: "Subu", orderId: "TCS12345", invoiceId: "67890", date: "15-05-2023", amount: "₹8923478", department: "IT" },
      { id: 7, name: "Infosys", User_Name: "Ramesh", orderId: "INF7890", invoiceId: "56789", date: "10-04-2023", amount: "₹23456789", department: "Finance" },
      { id: 8, name: "Wipro", User_Name: "Subu", orderId: "WIP4567", invoiceId: "34567", date: "01-03-2023", amount: "₹1234567", department: "HR" },
      { id: 9, name: "Reliance Industries", User_Name: "Ramesh", orderId: "REL12345", invoiceId: "98765", date: "25-01-2023", amount: "₹6789012", department: "Operations" },
      { id: 10, name: "Capgemini", User_Name: "Kartik", orderId: "CAP56789", invoiceId: "45678", date: "18-06-2023", amount: "₹8912345", department: "Admin" },
  ];

 

  return (
    <div className="dashboard-container">
      
      <div className="main-content">
        <div className="content">
          <h2>KPI</h2>
          <div className="actions-row">
            <div className="buttons">
              <button className="btn approve">AP User</button>
              <button className="btn reject">Bank Approve</button>
              <button className="btn pending">AP Team Lead</button>
              {/* <Calender/> */}
            </div>
            <div className="search-edit-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button className="edit-icon-btn">
              <MdOutlineEditNote/>
              </button>
            </div>
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
    </div>
    
  );
};

export default KPI;