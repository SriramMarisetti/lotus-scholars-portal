
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/content";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <div className="font-bold text-primary text-lg">Lotus High School</div>
              <div className="text-sm text-gray-600">Tadepalligudem</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-primary bg-beige"
                      : "text-gray-700 hover:text-primary hover:bg-beige"
                  }`}
                >
                  <span>{item.title}</span>
                  {item.children.length > 0 && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.children.length > 0 && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-beige hover:text-primary transition-colors duration-200"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className={`flex-1 block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-primary bg-beige"
                        : "text-gray-700 hover:text-primary hover:bg-beige"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="p-2 text-gray-700 hover:text-primary"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.children.length > 0 && activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-beige rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
