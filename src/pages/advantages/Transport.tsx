
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, MapPin, ShieldCheck } from "lucide-react";

const Transport = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Transport</h1>
      <p className="text-lg text-gray-600 mb-8">
        Safe, reliable, and convenient transportation for our students.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1570123516241-2092d19a2ee7?w=800&h=600&fit=crop" 
            alt="School Bus"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bus className="mr-3 text-primary" /> Modern Fleet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We operate a fleet of modern, well-maintained buses to ensure the comfort and safety of our students.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><MapPin className="mr-3 text-primary" /> Wide Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our buses cover an extensive network of routes throughout Tadepalligudem and surrounding areas, ensuring convenient pick-up and drop-off points.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><ShieldCheck className="mr-3 text-primary" /> Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All buses are equipped with GPS tracking and are managed by experienced and trained staff to ensure student safety is our top priority.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transport;
