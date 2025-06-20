import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Music, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const bannerContent = {
  imageUrl: "/images/school-campus.jpg", // Replace with actual path
  heading: "Lotus High School, Tadepalligudem",
  subheading: "Think of quality education, think of Lotus High School.",
};

const Index = () => {
  const [admissionsDialogOpen, setAdmissionsDialogOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenAdmissionPopup");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setAdmissionsDialogOpen(true);
        sessionStorage.setItem("hasSeenAdmissionPopup", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Dialog open={admissionsDialogOpen} onOpenChange={setAdmissionsDialogOpen}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Admissions Are Open!</DialogTitle>
            <DialogDescription className="pt-2">
              Enroll now for the 2025–26 academic year at Lotus High School.
            </DialogDescription>
          </DialogHeader>
          <p className="text-gray-600">
            Empowering young minds with academic excellence, creativity, and values since 2010.
          </p>
          <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2 mt-4">
            <Button variant="outline" onClick={() => setAdmissionsDialogOpen(false)} className="w-full sm:w-auto">
              Close
            </Button>
            <Link to="/admissions" className="w-full sm:w-auto" onClick={() => setAdmissionsDialogOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                <ArrowRight className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerContent.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto animate-fade-in m-7">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">{bannerContent.heading}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{bannerContent.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-primary inline-flex items-center justify-center">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/gallery" className="btn-secondary inline-flex items-center justify-center">
              Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Makes Lotus Special?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A blend of academics, arts, values, and physical fitness for holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Library</h3>
              <p className="text-gray-600">
                A well-ventilated and spacious library with reference books, magazines, newspapers, and digital access.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Art & Music</h3>
              <p className="text-gray-600">
                Encouraging creativity without bounds. Expression through sound, color, and imagination.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Events & Recognition</h3>
              <p className="text-gray-600">
                Celebrating Pariksha Pe Charcha, Children’s Day, Independence Day, and more with pride and purpose.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Play & Fitness</h3>
              <p className="text-gray-600">
                Dedicated playgrounds. Fit India movement. Sports for strength, coordination, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-width section-padding max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Leadership Message</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Mrs. B. Devi Priya, Principal</h3>
              <p className="text-gray-600">
                "It is a pleasure to lead Lotus High School, where education awakens the genius in every child.
                We strive to nurture integrity, responsibility, and excellence in a stimulating learning environment."
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Mr. Bolisetty Rajesh, Secretary</h3>
              <p className="text-gray-600">
                "Our goal is lifelong learning and academic excellence. With a balanced curriculum and committed faculty,
                we offer a unique educational experience."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Holistic Education</h2>
          <p className="text-xl mb-8 text-gray-200">
            From academics to art, from awareness programs to achievements — your child belongs here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-accent hover:bg-accent/90 text-navy px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Application
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
