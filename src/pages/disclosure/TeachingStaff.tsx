const TeachingStaff = () => {
  const staff = [
    { name: "Mrs. B. Devi Priya", subject: "Science", qualification: "B.Sc, B.Ed", experience: "12 years" },
    { name: "Mr. Kiran Kumar", subject: "Mathematics", qualification: "M.Sc, B.Ed", experience: "10 years" },
    { name: "Mrs. S. Lakshmi", subject: "English", qualification: "M.A, B.Ed", experience: "8 years" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Teaching Staff</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Qualification</th>
            <th className="border px-4 py-2">Experience</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((s, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.subject}</td>
              <td className="border px-4 py-2">{s.qualification}</td>
              <td className="border px-4 py-2">{s.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachingStaff;
