const Infrastructure = () => {
  const infrastructureDetails = [
    { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", value: "10845 sq Mtrs" },
    { label: "NO AND SIZE OF THE CLASS ROOMS (IN SQ FT)", value: "500 sq ft" },
    { label: "SIZE OF LIBRARY (IN SQ FT)", value: "1237 sq ft" },
    { label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ FT)", value: "600 sq ft" },
    { label: "INTERNET FACILITY", value: "YES" },
    { label: "NO. OF GIRLS TOILETS", value: "20" },
    { label: "NO. OF BOYS TOILETS", value: "10" },
    {
      label: "LAND CERTIFICATE",
      value: <a href="/downloads/land-certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click Here</a>
    },
    {
      label: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE",
      value: <a href="https://www.youtube.com/watch?v=dummy-link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click Here</a>
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-primary">School Infrastructure</h2>
      
      <table className="table-auto w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">S.No</th>
            <th className="border px-4 py-2">Information</th>
            <th className="border px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {infrastructureDetails.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.label}</td>
              <td className="border px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-primary mb-2">Highlights</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Spacious Classrooms with Smart Boards</li>
          <li>Fully Equipped Science and Computer Labs</li>
          <li>Library with 3000+ Books</li>
          <li>Playground and Sports Equipment</li>
          <li>Safe Drinking Water and Clean Washrooms</li>
          <li>CCTV Surveillance across campus</li>
          <li>Inverter backup for uninterrupted learning</li>
        </ul>
      </div>
    </div>
  );
};

export default Infrastructure;
