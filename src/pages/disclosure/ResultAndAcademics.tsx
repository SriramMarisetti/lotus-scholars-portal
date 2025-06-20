const ResultAndAcademics = () => {
  const documents = [
    {
      title: "FEE STRUCTURE OF THE SCHOOL",
      file: "/downloads/fee-structure.pdf",
    },
    {
      title: "ANNUAL ACADEMIC CALENDAR",
      file: "/downloads/academic-calendar.pdf",
    },
    {
      title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      file: "/downloads/smc-list.pdf",
    },
    {
      title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      file: "/downloads/pta-members.pdf",
    },
    {
      title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION",
      file: "/downloads/board-results.pdf",
    },
    {
      title: "Books Prescribed",
      file: "/downloads/books-prescribed.pdf",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">Result and Academics</h2>
        <ul className="list-disc list-inside text-blue-700 space-y-2">
          {documents.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                📁 {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          Last 3-Year Class X Board Results
        </h3>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Class X Pass %</th>
              <th className="border px-4 py-2">No. of Students</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2024</td>
              <td className="border px-4 py-2">100%</td>
              <td className="border px-4 py-2">78</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2023</td>
              <td className="border px-4 py-2">98%</td>
              <td className="border px-4 py-2">64</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2022</td>
              <td className="border px-4 py-2">96%</td>
              <td className="border px-4 py-2">59</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultAndAcademics;
