import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const LabResources = () => {
  const features = [
    "State-of-the-art Physics, Chemistry, and Biology labs.",
    "Modern computer labs with latest software.",
    "High-speed internet access for all students.",
    "Regular workshops and practical sessions.",
  ];

  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Lab Resources</h1>
      <p className="text-lg text-gray-600 mb-6">
        Teachers cannot be with them always. Labs and library (vast books, reference materials etc.) are the logical extension of classroom learning as sound practical training develops theoretical expressions. It is ready to sow the seeds of scientific temper and mathematical skills in the mind of the students right from the impressionable age.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
            alt="Science Lab"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LabResources;
