import { Paintbrush, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArtAndMusic = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Art and Music</h1>
      <p className="text-lg text-gray-600 mb-8">
        Creative expression is at the heart of holistic education at Lotus High School.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center">
              <Paintbrush className="w-8 h-8 text-primary mr-3" />
              <CardTitle>Visual Arts</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop" 
              alt="Art Class"
              className="rounded-lg shadow-md mb-4 w-full h-48 object-cover"
            />
            <p>
              Our art sessions stimulate an entirely different part of the student’s intellect. Children are encouraged to explore their imagination with no bounds, using various mediums such as sketching, painting, clay modeling, and crafts.
              Art offers a powerful outlet for self-expression and creative exploration.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center">
              <Music className="w-8 h-8 text-primary mr-3" />
              <CardTitle>Music</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <img 
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop" 
              alt="Music Class"
              className="rounded-lg shadow-md mb-4 w-full h-48 object-cover"
            />
            <p>
              Music lessons are structured to enhance both amateur interest and professional training. Students receive one-on-one or group instruction in vocal and instrumental music. Emphasis is placed on posture, breathing, tone, and coordination. 
              Through structured sessions, students gain confidence and refine their talent, preparing for performances and competitions.
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-xl text-primary mt-12 font-semibold">
        Think of quality education, think of Lotus High School.
      </p>
    </div>
  );
};

export default ArtAndMusic;
