
import { Routes, Route } from "react-router-dom";
import LabResources from "./advantages/LabResources";
import ProjectsAndFieldTrips from "./advantages/ProjectsAndFieldTrips";
import DigitalTheatre from "./advantages/DigitalTheatre";
import Library from "./advantages/Library";
import ArtAndMusic from "./advantages/ArtAndMusic";
import Sports from "./advantages/Sports";
import Transport from "./advantages/Transport";

const Advantages = () => {
  return (
    <Routes>
      <Route path="labs" element={<LabResources />} />
      <Route path="projects" element={<ProjectsAndFieldTrips />} />
      <Route path="theatre" element={<DigitalTheatre />} />
      <Route path="library" element={<Library />} />
      <Route path="arts" element={<ArtAndMusic />} />
      <Route path="sports" element={<Sports />} />
      <Route path="transport" element={<Transport />} />
    </Routes>
  );
};

export default Advantages;
