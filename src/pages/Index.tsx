
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, MapPin } from "lucide-react";
import { bannerContent, schoolInfo } from "@/data/content";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerContent.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-navy bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {bannerContent.heading}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {bannerContent.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-primary inline-flex items-center justify-center">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
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
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Lotus High School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class education with a focus on holistic development, modern facilities, and experienced faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <BookOpen className="w-10 h-10 text-primary group-hover:text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Academic Excellence</h3>
              <p className="text-gray-600">Comprehensive curriculum designed to challenge and inspire students at every level.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <Users className="w-10 h-10 text-primary group-hover:text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Expert Faculty</h3>
              <p className="text-gray-600">Highly qualified and experienced teachers dedicated to student success.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <Award className="w-10 h-10 text-primary group-hover:text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Achievements</h3>
              <p className="text-gray-600">Consistent track record of academic and co-curricular achievements.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <MapPin className="w-10 h-10 text-primary group-hover:text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Prime Location</h3>
              <p className="text-gray-600">Strategically located in Tadepalligudem with excellent connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-beige">
        <div className="container-width section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Take the first step towards your child's bright future with Lotus High School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-accent hover:bg-accent/90 text-navy px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Application
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
