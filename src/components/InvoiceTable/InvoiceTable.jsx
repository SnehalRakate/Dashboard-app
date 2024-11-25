import React from "react";
import "../InvoiceTable/InvoiceTable.css";

const InvoiceTable = () => {
  const invoices = [
      { id: 1, name: "Geodesic", gst: "22AAAA0000A1Z5", orderId: "SD100037", invoiceId: "1234", date: "22-02-2222", amount: "₹12341233", department: "Accounts" },
      { id: 2, name: "Optipace Technology PVT", gst: "22AAAA0000A1Z5", orderId: "SD100038", invoiceId: "213", date: "22-02-2222", amount: "₹3141515", department: "Admin" },
      { id: 3, name: "Sony", gst: "22AAAA0000A1Z5", orderId: "QW100037", invoiceId: "432", date: "22-02-2222", amount: "₹561514151", department: "Finance" },
      { id: 4, name: "IBM", gst: "22AAAA0000A1Z5", orderId: "QSDR100037", invoiceId: "223", date: "22-02-2222", amount: "₹5424247", department: "Accounts" },
      { id: 5, name: "ITC Infotech India LTD", gst: "22AAAA0000A1Z5", orderId: "WE100037", invoiceId: "112234", date: "22-02-2222", amount: "₹43536334", department: "Admin" },
      { id: 6, name: "Tata Consultancy Services", gst: "29BBBB0000A1Z7", orderId: "TCS12345", invoiceId: "67890", date: "15-05-2023", amount: "₹8923478", department: "IT" },
      { id: 7, name: "Infosys", gst: "29CCCC0000A1Z6", orderId: "INF7890", invoiceId: "56789", date: "10-04-2023", amount: "₹23456789", department: "Finance" },
      { id: 8, name: "Wipro", gst: "33DDDD0000A1Z3", orderId: "WIP4567", invoiceId: "34567", date: "01-03-2023", amount: "₹1234567", department: "HR" },
      { id: 9, name: "Reliance Industries", gst: "27EEEE0000A1Z8", orderId: "REL12345", invoiceId: "98765", date: "25-01-2023", amount: "₹6789012", department: "Operations" },
      { id: 10, name: "Capgemini", gst: "24FFFF0000A1Z1", orderId: "CAP56789", invoiceId: "45678", date: "18-06-2023", amount: "₹8912345", department: "Admin" },
  ];

  return (
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
            <td>{invoice.gst}</td>
            <td>{invoice.orderId}</td>
            <td>{invoice.invoiceId}</td>
            <td>{invoice.date}</td>
            <td>{invoice.amount}</td>
            <td>{invoice.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
