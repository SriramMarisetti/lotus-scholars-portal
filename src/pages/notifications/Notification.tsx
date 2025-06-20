import { Routes, Route, Link, Outlet } from "react-router-dom";
import Events from "./Events";
import TransferCertificates from "./TransferCertificates";

const Notifications = () => {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-width">
        {/* Define Internal Routes */}
        <Routes>
          <Route path="/" element={<div className="text-gray-600">Please select a notification category.</div>} />
          <Route path="events" element={<Events />} />
          <Route path="tcs" element={<TransferCertificates />} />
        </Routes>
      </div>
    </div>
  );
};

export default Notifications;
