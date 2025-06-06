
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import AdminPanel from "./pages/AdminPanel";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="admissions/*" element={<Admissions />} />
            <Route path="academics/*" element={<Academics />} />
            <Route path="advantages/*" element={<div className="min-h-screen pt-24 section-padding"><div className="container-width"><h1 className="text-4xl font-bold text-primary mb-8">Advantages</h1><p className="text-gray-600">Information about our school advantages will be displayed here.</p></div></div>} />
            <Route path="gallery/*" element={<Gallery />} />
            <Route path="notifications/*" element={<div className="min-h-screen pt-24 section-padding"><div className="container-width"><h1 className="text-4xl font-bold text-primary mb-8">Notifications</h1><p className="text-gray-600">School notifications and announcements will be displayed here.</p></div></div>} />
            <Route path="disclosure/*" element={<div className="min-h-screen pt-24 section-padding"><div className="container-width"><h1 className="text-4xl font-bold text-primary mb-8">Mandatory Public Disclosure</h1><p className="text-gray-600">Public disclosure information will be displayed here.</p></div></div>} />
            <Route path="contact/*" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
