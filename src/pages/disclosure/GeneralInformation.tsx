import React from "react";

const generalInfo = [
  { no: 1, label: "Name of the School", value: "LOTUS HIGH SCHOOL (E.M)" },
  { no: 2, label: "Affiliation No (if applicable)", value: "130350" },
  { no: 3, label: "School Code (if applicable)", value: "57119" },
  {
    no: 4,
    label: "Complete Address with PIN Code",
    value: "LOTUS HIGH SCHOOL, PEDATADEPALLI, TADEPALLIGUDEM MANDAL - 534101, WG Dt.",
  },
  {
    no: 5,
    label: "Principal Name & Qualification",
    value: "Mrs. B. Devi Priya, B.Sc; B.Ed",
  },
  {
    no: 6,
    label: "School Email ID",
    value: "lotushighschools@gmail.com",
  },
  {
    no: 7,
    label: "Contact Details",
    value: "08818-284260, 9912283260",
  },
];

const GeneralInformation = () => {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-width">
        <h1 className="text-4xl font-bold text-primary mb-8">General Information</h1>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">S.No</th>
                <th className="px-4 py-3 text-left font-semibold">Information</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {generalInfo.map((info) => (
                <tr key={info.no}>
                  <td className="px-4 py-2">{info.no}</td>
                  <td className="px-4 py-2">{info.label}</td>
                  <td className="px-4 py-2">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
