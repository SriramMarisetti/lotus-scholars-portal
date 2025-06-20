import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { facultyContent, committeeContent } from "@/data/content";

const AcademicsHome = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Academics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-primary mb-4">Academic Excellence</h2>
          <p className="text-gray-600 mb-6">
            Our comprehensive academic program is designed to challenge students and prepare them for success in higher education and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-beige rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Primary Education</h3>
              <p className="text-gray-600">Classes I-V with focus on foundational skills and creativity.</p>
            </div>
            <div className="bg-beige rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Secondary Education</h3>
              <p className="text-gray-600">Classes VI-X following CBSE curriculum with emphasis on critical thinking.</p>
            </div>
            <div className="bg-beige rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Senior Secondary</h3>
              <p className="text-gray-600">Classes XI-XII with specialized streams in Science, Commerce, and Humanities.</p>
            </div>
            <div className="bg-beige rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Co-curricular</h3>
              <p className="text-gray-600">Sports, arts, music, and leadership development programs.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Academic Calendar</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="border-b pb-2">
                <h4 className="font-medium">April - June</h4>
                <p className="text-sm text-gray-600">First Term</p>
              </div>
              <div className="border-b pb-2">
                <h4 className="font-medium">July - September</h4>
                <p className="text-sm text-gray-600">Second Term</p>
              </div>
              <div className="border-b pb-2">
                <h4 className="font-medium">October - December</h4>
                <p className="text-sm text-gray-600">Third Term</p>
              </div>
              <div>
                <h4 className="font-medium">January - March</h4>
                <p className="text-sm text-gray-600">Fourth Term</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Faculty = () => {
  const [viewCommittee, setViewCommittee] = useState(false);

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-width">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Faculty</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Each faculty member at Lotus High School is a subject expert and a mentor. Teachers form strong bonds with students, encourage development across disciplines, and regularly update their pedagogical skills to provide meaningful learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyContent.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.position}</p>
                <p className="text-gray-600">{member.qualification}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <button
            onClick={() => setViewCommittee(!viewCommittee)}
            className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            {viewCommittee ? "Hide" : "View"} School Management Committee
          </button>
        </div>

        {viewCommittee && (
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-primary mb-4">School Management Committee</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border text-sm text-left">
                <thead className="bg-beige text-primary font-semibold">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Qualification</th>
                    <th className="px-4 py-2">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeContent.map((member) => (
                    <tr key={member.id} className="border-t">
                      <td className="px-4 py-2">{member.name}</td>
                      <td className="px-4 py-2">{member.role}</td>
                      <td className="px-4 py-2">{member.qualification}</td>
                      <td className="px-4 py-2">{member.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Management = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">School Management Committee</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-600 mb-8">
          Our School Management Committee comprises experienced educators, administrators, and community leaders dedicated to maintaining the highest standards of education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Committee Members</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold">Dr. Rajesh Patel</h3>
                <p className="text-gray-600">Chairman</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold">Mrs. Sunita Sharma</h3>
                <p className="text-gray-600">Secretary</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold">Mr. Anil Kumar</h3>
                <p className="text-gray-600">Treasurer</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Responsibilities</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Academic policy development</li>
              <li>• Budget planning and approval</li>
              <li>• Infrastructure development</li>
              <li>• Faculty recruitment and development</li>
              <li>• Student welfare initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Corps = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Corps System</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Building Character & Leadership</h2>
          <p className="text-gray-600 mb-6">
            Our Corps System is designed to instill discipline, leadership qualities, and a sense of responsibility among students through structured activities and training.
          </p>

          <div className="space-y-4">
            <div className="bg-beige rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">NCC (National Cadet Corps)</h3>
              <p className="text-sm text-gray-600">Military training and character development program.</p>
            </div>
            <div className="bg-beige rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">NSS (National Service Scheme)</h3>
              <p className="text-sm text-gray-600">Community service and social awareness initiatives.</p>
            </div>
            <div className="bg-beige rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">Scouts & Guides</h3>
              <p className="text-sm text-gray-600">Adventure activities and skill development programs.</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
            alt="Corps activities"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const Academics = () => {
  return (
    <Routes>
      <Route index element={<AcademicsHome />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="management" element={<Management />} />
      <Route path="corps" element={<Corps />} />
    </Routes>
  );
};

export default Academics;
