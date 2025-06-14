
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Microscope } from "lucide-react";

const ProjectsAndFieldTrips = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Projects and Field Trips</h1>
      <p className="text-lg text-gray-600 mb-8">
        Extending learning beyond the classroom walls.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop" 
            alt="Field Trip"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Microscope className="mr-2" /> Hands-On Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We believe in learning by doing. Our curriculum integrates various projects that encourage students to apply theoretical knowledge to real-world problems, fostering critical thinking and creativity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Map className="mr-2" /> Educational Field Trips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Regular field trips to historical sites, museums, and industrial centers provide students with invaluable experiences, broadening their horizons and deepening their understanding of various subjects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndFieldTrips;
