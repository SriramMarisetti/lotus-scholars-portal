
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
