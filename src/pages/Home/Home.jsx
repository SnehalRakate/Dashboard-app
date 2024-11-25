import React from "react";
import { useNavigate } from "react-router-dom";
import Invoice_Received_Image from "../../assets/Images/Invoice_Received_Image.svg";
import Department_Image from "../../assets/Images/Department_Image.svg";
import Dispute_Image from "../../assets/Images/Dispute_Image.svg";
import Overdue_Image from "../../assets/Images/Overdue_Image.svg";
import Paid_amount_Image from "../../assets/Images/Paid_amount_Image.svg";
import Payable_amount_Image from "../../assets/Images/Payable_amount_Image.svg";
import Rejected_Image from "../../assets/Images/Rejected_Image.svg";
import Vendors_Image from "../../assets/Images/Vendors_Image.svg";
import {
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Home() {
  const navigate = useNavigate();
   
  const goToKPI = () => {
    navigate('/KPI');
  };

  const GoToPan = () =>{
    navigate('/Panalty')
  }
  const GoToQueues = () =>{
    navigate('/Queues')
  }
  const GoToRejected = () =>{
    navigate('/invoice-recived')
  }

  const queueData = [
    { name: "Processing Queue", value: 300 },
    { name: "Exception Queue", value: 600 },
    { name: "Duplicate Queue", value: 200 },
    { name: "Missing PO Queue", value: 100 },
    { name: "Receipt Hold Queue", value: 200 },
    { name: "Supplier Portal Queue", value: 300 },
  ];

  const kpiData = [
    { name: "Role", value: 300 },
    { name: "Person Responsible", value: 500 },
    { name: "Triggers Alert", value: 200 },
  ];

  const COLORS = ["#EE7777", "#4BAAB4", "#1F2439", "#F5B461", "#F9C480", "#EA5455"];


  return (
    <main className="main-container">
      <div className="dashboard-header">
        <h3 className="dashboard-title">Dashboard</h3>
        <div className="outstanding-row">
          <p className="outstanding-text">Overall Outstanding</p>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
      
      </div>
      {/* Cards Section */}
      <div className="main-cards">
        <div
          className="card"
          onClick={() => navigate("/invoice-received")} // Navigation on click
        >
          <div className="card-inner">
            <img src={Invoice_Received_Image} alt="Categories" className="card-icon" />
            <h3>Invoice Received</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Payable_amount_Image} alt="Categories" className="card-icon" />
            <h3>Payable amount</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Overdue_Image} alt="Categories" className="card-icon" />
            <h3>Overdue</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Paid_amount_Image} alt="Categories" className="card-icon" />
            <h3>Paid amount</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner" onClick={GoToRejected}>
            <img src={Rejected_Image} alt="Categories" className="card-icon" />
            <h3>Rejected</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Dispute_Image} alt="Categories" className="card-icon" />
            <h3>Dispute</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Department_Image} alt="Categories" className="card-icon" />
            <h3>Department</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <img src={Vendors_Image} alt="Categories" className="card-icon" />
            <h3>Vendors</h3>
          </div>
          <div className="card-total">
            <p>Total</p>
            <h1>2123</h1>
          </div>
          <div className="card-rupee">
            <span>&#8377;</span>
            <h2>12341233</h2>
          </div>
        </div>
      </div>



      {/* Pie Charts Section */}
      <div className="chart-card-container">
        {/* Card 1: Queues */}
        <div className="chart-cards">
          {/* Card for Queues */}
          <div className="chart-card">
            <div className="chart-content">
              {/* Queue PieChart */}
              <div className="chart-item"  onClick={GoToQueues}>
                <h4>Queues</h4>
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={queueData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      fill="#8884d8"
                    >
                      {queueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Queue Data */}
              <div className="chart-data">
                {queueData.map((item, index) => (
                  <div key={index} className="chart-data-item">
                    <div
                      className="data-color-box"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card for KPI */}
          <div className="chart-card">
            <div className="chart-content">
              {/* KPI PieChart */}
              <div className="chart-item"  onClick={goToKPI} >
                <h4>KPI</h4>
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={kpiData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      fill="#82ca9d"
                    // paddingAngle={0}
                    >
                      {kpiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* KPI Data */}
              <div className="chart-data">
                {kpiData.map((item, index) => (
                  <div key={index} className="chart-data-item">
                    <div
                      className="data-color-box"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>



      </div>
      {/* Due by Age Summary Section */}
      <div className="due-by-age-container" onClick={GoToPan}>
        <div className="due-header-row"  onClick={GoToPan}>
          <div>
            <h4 className="due-title">Due by Age Summary</h4>
            <p className="due-description">Payment due days</p>
          </div>
          <div className="penalty-saved">
            <span>Penalty Saved Amount </span>
            <span className="penalty-amount">&#8377; 12344</span>
          </div>
        </div>
        <div className="due-cards-row">
          {["7 Days", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days", "180 Days+"].map(
            (label, index) => (
              <div className="due-card" key={index}>
                <p className="due-card-label">{label}</p>
                <div className="due-card-amount">
                  <span>&#8377; {Math.floor(Math.random() * 1000000)}</span>

                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>

  );
}

export default Home;

