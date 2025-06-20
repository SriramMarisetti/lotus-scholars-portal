import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, Dumbbell, Trophy } from "lucide-react";

const sports = [
  { name: "Cricket", image: "https://images.unsplash.com/photo-1595295396235-35352b57a876?w=400&h=300&fit=crop" },
  { name: "Basketball", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop" },
  { name: "Athletics", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop" },
  { name: "Volleyball", image: "https://images.unsplash.com/photo-1593341646647-75b34b15c7a3?w=400&h=300&fit=crop" },
];

const Sports = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Sports</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sports are the ideal way of releasing energy creatively. At Lotus High School, we emphasize sports activities for the overall physical development of every child.
        Activities like volleyball, basketball, and athletics help tone muscles, improve coordination, and build team spirit, while games like chess sharpen mental ability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center">
          <CardHeader><Medal className="mx-auto w-12 h-12 text-primary" /></CardHeader>
          <CardContent>
            <CardTitle>Excellent Coaching</CardTitle>
            <p className="text-gray-600 mt-2">An efficient sports master manages all activities with skill and dedication, making sports a favorite among students.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader><Dumbbell className="mx-auto w-12 h-12 text-primary" /></CardHeader>
          <CardContent>
            <CardTitle>Top-Notch Facilities</CardTitle>
            <p className="text-gray-600 mt-2">Well-maintained courts, grounds, and indoor spaces ensure students enjoy and benefit from their physical activities.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader><Trophy className="mx-auto w-12 h-12 text-primary" /></CardHeader>
          <CardContent>
            <CardTitle>Competitive Spirit</CardTitle>
            <p className="text-gray-600 mt-2">Students regularly participate in inter-house and inter-school competitions, fostering confidence and discipline.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Sports Offerings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sports.map((sport) => (
          <div key={sport.name} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={sport.image} alt={sport.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
