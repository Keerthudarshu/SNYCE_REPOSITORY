import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/general-hot-height-work-permit">General / Hot / Height Work Permit</Link></li>
          <li><Link to="/permit-cancellation">Permit Cancellation</Link></li>
          <li><Link to="/permit-closure">Permit Closure</Link></li>
          <li><Link to="/permit-listing">Permit Listing</Link></li>
          <li><Link to="/confined-space-entry-permit">Confined Space Entry Permit</Link></li>
          <li><Link to="/electrical-isolation-permit">Electrical Isolation Permit</Link></li>
          <li><Link to="/utilities-work-permit">Utilities Work Permit</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
