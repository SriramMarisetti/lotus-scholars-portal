
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { schoolInfo } from "@/data/content";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-28">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-lg">L</span>
              </div>
              <div>
                <div className="font-bold text-lg">{schoolInfo.name}</div>
                <div className="text-sm text-gray-300">{schoolInfo.location}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing young minds with excellence in education, character building, and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/admissions" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Admissions</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Academics</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-gray-300 text-sm">{schoolInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-gray-300 text-sm">{schoolInfo.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-gray-300 text-sm">{schoolInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent hover:text-navy transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent hover:text-navy transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent hover:text-navy transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent hover:text-navy transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 {schoolInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
