
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-beige py-3 mt-16">
      <div className="container-width section-padding">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/" className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200">
            <Home className="w-4 h-4" />
          </Link>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');

            return (
              <div key={pathname} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-primary font-medium">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {displayName}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
