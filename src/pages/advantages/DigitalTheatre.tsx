
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Volume2 } from "lucide-react";

const DigitalTheatre = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Digital Theatre</h1>
      <p className="text-lg text-gray-600 mb-8">
        An immersive audio-visual learning experience.
      </p>
      
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle>State-of-the-Art AV Room</CardTitle>
              <CardDescription>Enhancing education with technology.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p>
                Our digital theatre is equipped with a high-definition projector, surround sound system, and comfortable seating, creating an engaging environment for educational films, presentations, and virtual field trips.
              </p>
              <div className="flex items-center">
                <Film className="w-6 h-6 text-primary mr-3" />
                <span>High-resolution projection system.</span>
              </div>
              <div className="flex items-center">
                <Volume2 className="w-6 h-6 text-primary mr-3" />
                <span>Professional-grade surround sound.</span>
              </div>
            </CardContent>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop" 
              alt="Digital Theatre"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DigitalTheatre;
