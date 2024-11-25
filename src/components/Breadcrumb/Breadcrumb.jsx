import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../components/Breadcrumb/Breadcrumb.css'

const Breadcrumb = () => {
  const location = useLocation();
  
  // Split the current path into parts
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        {pathnames.map((value, index) => {
          // Create a path up to the current part
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <span>&gt;</span>
              <Link to={to}>{value.replace(/-/g, ' ')}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
