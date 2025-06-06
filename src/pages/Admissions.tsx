
import { Routes, Route } from "react-router-dom";

const AdmissionsHome = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Admissions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Join our community of learners and leaders. We welcome students who are ready to embrace challenges and grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Admission Process</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Submit online application form</li>
                <li>• Entrance examination</li>
                <li>• Personal interview</li>
                <li>• Document verification</li>
                <li>• Fee payment</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Required Documents</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Birth certificate</li>
                <li>• Previous academic records</li>
                <li>• Transfer certificate</li>
                <li>• Passport size photographs</li>
                <li>• Medical certificate</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-6">Start your journey with Lotus High School today.</p>
            <button className="bg-accent hover:bg-accent/90 text-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Boarding = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Boarding Facilities</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1555854877-bab0e137e0c7?w=600&h=400&fit=crop" 
            alt="Boarding facilities"
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">World-Class Boarding</h2>
          <p className="text-gray-600 mb-6">
            Our boarding facilities provide a safe, comfortable, and nurturing environment for students from across the region.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>• Modern dormitories with attached bathrooms</li>
            <li>• 24/7 security and medical care</li>
            <li>• Nutritious meals and dietary accommodations</li>
            <li>• Study halls and recreational areas</li>
            <li>• Experienced residential staff</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Admissions = () => {
  return (
    <Routes>
      <Route index element={<AdmissionsHome />} />
      <Route path="boarding" element={<Boarding />} />
    </Routes>
  );
};

export default Admissions;
