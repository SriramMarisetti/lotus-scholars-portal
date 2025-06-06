
import { Routes, Route } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { schoolInfo } from "@/data/content";

const ContactHome = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">{schoolInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">{schoolInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">{schoolInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Lotus High School has been a beacon of educational excellence in Tadepalligudem for over 25 years, nurturing young minds and shaping future leaders.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide holistic education that develops intellectual, emotional, social, and physical capabilities of every student, preparing them to be responsible global citizens and lifelong learners.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be recognized as a premier educational institution that inspires excellence, fosters innovation, and cultivates values-based leadership in our students.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Excellence in Academic Achievement</li>
              <li>Integrity and Ethical Conduct</li>
              <li>Respect for Diversity and Inclusion</li>
              <li>Innovation and Creative Thinking</li>
              <li>Community Service and Social Responsibility</li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="bg-beige rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Established</h4>
                <p className="text-gray-600">1999</p>
              </div>
              <div>
                <h4 className="font-medium">Students</h4>
                <p className="text-gray-600">1000+</p>
              </div>
              <div>
                <h4 className="font-medium">Faculty</h4>
                <p className="text-gray-600">50+</p>
              </div>
              <div>
                <h4 className="font-medium">Campus Area</h4>
                <p className="text-gray-600">15 Acres</p>
              </div>
            </div>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
            alt="School campus"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const RouteMap = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">Route Map</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">How to Reach Us</h2>
          
          <div className="space-y-6">
            <div className="bg-beige rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">By Road</h3>
              <p className="text-gray-600">
                Located on the main road connecting Tadepalligudem to Eluru. Well-connected by state and private bus services.
              </p>
            </div>
            
            <div className="bg-beige rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">By Train</h3>
              <p className="text-gray-600">
                Nearest railway station is Tadepalligudem Junction (2 km). Regular trains to Vijayawada, Visakhapatnam, and other major cities.
              </p>
            </div>
            
            <div className="bg-beige rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-3">By Air</h3>
              <p className="text-gray-600">
                Nearest airport is Rajahmundry Airport (85 km). Vijayawada Airport is 120 km away.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
          </div>
          
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-3">Landmarks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Near Government Hospital</li>
              <li>• Opposite to Municipal Office</li>
              <li>• 500m from Bus Stand</li>
              <li>• Adjacent to Public Library</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <Routes>
      <Route index element={<ContactHome />} />
      <Route path="about" element={<About />} />
      <Route path="map" element={<RouteMap />} />
    </Routes>
  );
};

export default Contact;
