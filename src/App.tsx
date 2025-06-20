
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
import Advantages from "./pages/Advantages";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/notifications/Notification";
import MandatoryDisclosureRoutes from "./pages/disclosure/MandatoryDisclosure";
import ScrollToTop from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="admissions/*" element={<Admissions />} />
            <Route path="academics/*" element={<Academics />} />
            <Route path="advantages/*" element={<Advantages />} />
            <Route path="gallery/*" element={<Gallery />} />
            <Route path="notifications/*" element={<Notifications />} />
            <Route path="disclosure/*" element={<MandatoryDisclosureRoutes/>} />
            <Route path="contact/*" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
