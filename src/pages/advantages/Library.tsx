import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Library as LibraryIcon, BookOpen, Clock } from "lucide-react";

const Library = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <div className="flex items-center mb-4">
        <LibraryIcon className="w-10 h-10 text-primary mr-4" />
        <h1 className="text-4xl font-bold text-primary">Library</h1>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        A well-ventilated, spacious sanctuary of books and knowledge, thoughtfully curated for curious minds.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" 
            alt="School Library"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Well-Organized Sections</CardTitle>
            </CardHeader>
            <CardContent className="flex items-start">
              <BookOpen className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <p>
                Books are systematically arranged under categories including subject books, reference books (100+), specimen books, magazines (50+), and competitive exam guides. 
                Students can also access 10 periodicals and 8 daily newspapers like The Hindu, India Today, Frontline, and Chandamama.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reading Culture & Access</CardTitle>
            </CardHeader>
            <CardContent className="flex items-start">
              <Clock className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
              <p>
                With classroom distribution of The Hindu from Grades VI to X, our aim is to keep students informed and improve their reading habits. The library nurtures a love for learning and encourages independent research.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Library;
