import { useState } from "react";

const tcs = [
  {
    rollNo: "1234",
    year: "2024",
    batch: "A",
    dob: "2008-05-12",
    name: "Akash",
    file: "/downloads/tc-2024-Akash.pdf",
  },
  {
    rollNo: "5678",
    year: "2024",
    batch: "B",
    dob: "2009-02-18",
    name: "Shruti",
    file: "/downloads/tc-2024-Shruti.pdf",
  },
  {
    rollNo: "9012",
    year: "2023",
    batch: "A",
    dob: "2007-11-04",
    name: "Manish",
    file: "/downloads/tc-2023-Manish.pdf",
  },
];

const TransferCertificates = () => {
  const [form, setForm] = useState({
    rollNo: "",
    year: "",
    batch: "",
    dob: "",
  });

  const [matchedTC, setMatchedTC] = useState<null | typeof tcs[0]>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const found = tcs.find(
      (tc) =>
        tc.rollNo === form.rollNo &&
        tc.year === form.year &&
        tc.batch.toLowerCase() === form.batch.toLowerCase() &&
        tc.dob === form.dob
    );

    setMatchedTC(found || null);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold text-primary">Download Transfer Certificate</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        <div>
          <label className="block text-sm font-medium mb-1">Roll Number</label>
          <input
            type="text"
            value={form.rollNo}
            onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Academic Year</label>
          <input
            type="text"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            className="w-full border px-3 py-2 rounded-md"
            required
            placeholder="e.g. 2024"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Batch</label>
          <input
            type="text"
            value={form.batch}
            onChange={(e) => setForm({ ...form, batch: e.target.value })}
            className="w-full border px-3 py-2 rounded-md"
            required
            placeholder="e.g. A"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full py-2 rounded-md text-white font-medium"
        >
          Check TC
        </button>
      </form>

      {matchedTC ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
          ✅ Match found for <strong>{matchedTC.name}</strong> ({matchedTC.year}) <br />
          <a
            href={matchedTC.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Click here to download Transfer Certificate
          </a>
        </div>
      ) : (
        matchedTC === null ? null : (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
            ❌ No matching record found. Please check the details entered.
          </div>
        )
      )}
    </div>
  );
};

export default TransferCertificates;
