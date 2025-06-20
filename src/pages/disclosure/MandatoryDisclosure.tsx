import { Routes, Route } from "react-router-dom";
import GeneralInformation from "./GeneralInformation";
import DocumentsInformation from "./DocumentsInformation";
import ResultAndAcademics from "./ResultAndAcademics";
import TeachingStaff from "./TeachingStaff";
import Infrastructure from "./Infrastructure";

const MandatoryDisclosureRoutes = () => {
  return (
    <Routes>
      <Route path="general" element={<GeneralInformation />} />
      <Route path="documents" element={<DocumentsInformation />} />
      <Route path="results" element={<ResultAndAcademics />} />
      <Route path="staff" element={<TeachingStaff />} />
      <Route path="infrastructure" element={<Infrastructure />} />
    </Routes>
  );
};

export default MandatoryDisclosureRoutes;
