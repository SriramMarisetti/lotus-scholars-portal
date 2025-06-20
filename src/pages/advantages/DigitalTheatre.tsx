import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film, Volume2 } from "lucide-react";

const DigitalTheatre = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Digital Theatre</h1>
      <p className="text-lg text-gray-600 mb-8">
        Blending education with technology to make learning immersive and interactive.
      </p>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle>Advanced Audio-Visual Learning</CardTitle>
              <CardDescription>
                Audio-visual learning from KG to Class X.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p>
                Digital Theatre at Lotus High School enhances understanding through CDs,
                PPTs, and visual storytelling. Lessons aligned with classroom topics are
                presented in a way that helps students easily grasp complex concepts.
              </p>
              <p>
                Children across all grades are scheduled term-wise for AV sessions, which
                boost their academic interest and conceptual clarity.
              </p>
              <div className="flex items-center">
                <Film className="w-6 h-6 text-primary mr-3" />
                <span>Curriculum-based AV content for enhanced learning.</span>
              </div>
              <div className="flex items-center">
                <Volume2 className="w-6 h-6 text-primary mr-3" />
                <span>Engaging sound and visuals to aid retention.</span>
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

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Computer Lab</CardTitle>
            <CardDescription>Technology for every learner</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Equipped with sufficient systems and high-speed internet, our computer lab
              provides students with hands-on training in digital skills.
            </p>
            <p>
              From accessing interactive tools to learning global technologies, the lab
              fosters computer literacy and confidence in the digital world.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>English Language Lab</CardTitle>
            <CardDescription>Phonetics and Communication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our interactive CDs help students refine their English diction and
              pronunciation. With guided audio-visual modules, children enhance their
              listening, speaking, and comprehension skills.
            </p>
            <p>
              This foundation in English communication prepares students for success in a
              globally competitive environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalTheatre;
