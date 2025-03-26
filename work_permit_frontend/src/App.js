import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import GeneralHotHeightWorkPermit from './pages/GeneralHotHeightWorkPermit';
import PermitCancellation from './pages/PermitCancellation';
import PermitClosure from './pages/PermitClosure';
import PermitListing from './pages/PermitListing';
import ConfinedSpaceEntryPermit from './pages/ConfinedSpaceEntryPermit';
import ElectricalIsolationPermit from './pages/ElectricalIsolationPermit';
import UtilitiesWorkPermit from './pages/UtilitiesWorkPermit';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/general-hot-height-work-permit" element={<GeneralHotHeightWorkPermit />} />
              <Route path="/permit-cancellation" element={<PermitCancellation />} />
              <Route path="/permit-closure" element={<PermitClosure />} />
              <Route path="/permit-listing" element={<PermitListing />} />
              <Route path="/confined-space-entry-permit" element={<ConfinedSpaceEntryPermit />} />
              <Route path="/electrical-isolation-permit" element={<ElectricalIsolationPermit />} />
              <Route path="/utilities-work-permit" element={<UtilitiesWorkPermit />} />
              <Route path="/" element={<h1>Welcome to the Work Permit App</h1>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
