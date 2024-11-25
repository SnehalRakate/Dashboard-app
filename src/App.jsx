import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InvoiceActions from "./components/InvoiceActions/InvoiceActions";
import "./App.css";
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import RejectedInvoice from "./components/RejectedInvoice";
import InvoiceRecived from "./components/InvoiceRecived";
import "bootstrap/dist/css/bootstrap.min.css";
import KPI from "./components/KPI";
import Panalty from "./components/Panalty";
import Queues from "./components/Queues/Queues";
import Report from "./pages/Report/Report";


const App = () => {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      {/* <Breadcrumb/> */}
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/invoice-received" element={<InvoiceActions />} />
        <Route path="/KPI" element={<KPI />} />
        <Route path="/Queues" element={<Queues/>} />
        <Route path="/Panalty" element={<Panalty/>} />
        <Route path="/Report" element={<Report/>} />
        <Route path="/" element={<InvoiceRecived />} />
        <Route path="/invoice-recived" element={<RejectedInvoice />} />
      </Routes>
    </Router>
  );
};

export default App;
