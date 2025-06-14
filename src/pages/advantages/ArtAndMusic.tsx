
import { Paintbrush, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArtAndMusic = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Art and Music</h1>
      <p className="text-lg text-gray-600 mb-8">
        Nurturing creativity and self-expression.
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
            <p>Our art program encourages students to explore various mediums, from drawing and painting to sculpture and digital art. We provide a supportive environment for students to develop their artistic talents.</p>
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
            <p>The music department offers training in both vocal and instrumental music. Students have opportunities to perform in choirs, bands, and solo events, honing their musical skills and stage presence.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtAndMusic;
