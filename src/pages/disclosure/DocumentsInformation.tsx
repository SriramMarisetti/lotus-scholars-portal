const documents = [
  {
    title: "COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION",
    file: "/downloads/affiliation-letter.pdf",
  },
  {
    title: "COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE",
    file: "/downloads/society-registration.pdf",
  },
  {
    title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE BY THE STATE GOVT / UT",
    file: "/downloads/noc.pdf",
  },
  {
    title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT 2009, AND ITS RENEWAL IF APPLICABLE",
    file: "/downloads/recognition-certificate.pdf",
  },
  {
    title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    file: "/downloads/building-safety.pdf",
  },
  {
    title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    file: "/downloads/fire-safety.pdf",
  },
  {
    title:
      "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION / UPGRADATION / EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
    file: "/downloads/deo-certificate.pdf",
  },
  {
    title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    file: "/downloads/water-health-sanitation.pdf",
  },
  {
    title: "CORRECTION IN OASIS",
    file: "/downloads/oasis-correction.pdf",
  },
];

const DocumentsInformation = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Documents & Information</h2>
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
      <p className="text-sm text-gray-500">* Click on any item to download the respective document.</p>
    </div>
  );
};

export default DocumentsInformation;
