import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ApplicationForm } from "@/components/ApplicationForm";

const AdmissionsHome = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-screen pt-2 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Admissions</h1>

          <p className="text-xl text-gray-600 mb-8">
            Admissions open for 2025–26 from LKG to Class XI at Lotus High School (Affiliated to CBSE - 130350). We welcome boarders and day-boarders for holistic education and growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-beige rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Admission Process</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Parent & child interaction session</li>
                <li>• Written test + child interview (Class I onwards)</li>
                <li>• Submission of required documents</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Documents Required</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Birth certificate</li>
                <li>• Transfer certificate</li>
                <li>• Marksheet</li>
                <li>• Aadhar Card</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Subjects Offered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">Class X</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>English Lang & Lit. (184)</li>
                  <li>Mathematics (041)</li>
                  <li>Science (086)</li>
                  <li>Social Science (087)</li>
                  <li>Telugu (007)</li>
                  <li>Sanskrit (122)</li>
                </ul>
              </div>
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">Class XII</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>English Core (301)</li>
                  <li>Mathematics (041)</li>
                  <li>Physics (042)</li>
                  <li>Chemistry (043)</li>
                  <li>Biology (044)</li>
                  <li>Computer Science (083)</li>
                  <li>Informatics Practices (065)</li>
                  <li>Economics (030)</li>
                  <li>Accountancy (055)</li>
                  <li>Business Studies (054)</li>
                  <li>Telugu (107)</li>
                  <li>Sanskrit Core (322)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Admission Test Pattern</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• LKG & UKG: Oral/personal interaction</li>
              <li>• Class I to X: Written test in English, Maths, Science, Social</li>
              <li>• Class XI: Based on subjects chosen (Maths, Physics, Chemistry, English)</li>
              <li>• Syllabus based on previous class level</li>
              <li>• Timings: 9:00 AM to 4:00 PM</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-4">Facilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>• Digital theatre</li>
              <li>• Science, Maths & Computer labs</li>
              <li>• English lab</li>
              <li>• Well-equipped library</li>
              <li>• Hostel accommodation</li>
              <li>• Music & Dance</li>
              <li>• Art & Craft</li>
              <li>• KG block activities</li>
              <li>• Purified drinking water</li>
              <li>• Advanced security system</li>
              <li>• Remedial coaching for slow learners</li>
            </ul>
          </div>

          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-6">Secure your child’s admission today!</p>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90 text-navy font-semibold">
                  Apply Now
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-full sm:max-w-lg">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="text-2xl font-bold text-primary">Admission Application</SheetTitle>
                  <SheetDescription>
                    Fill in the form and our admissions team will reach out to you.
                  </SheetDescription>
                </SheetHeader>
                <ApplicationForm setSheetOpen={setSheetOpen} />
              </SheetContent>
            </Sheet>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>📞 Contact: 08818-284260, 9912283260</p>
            <p>🌐 Website: www.lotushighschools.com</p>
            <p>📧 Email: uslotusschool@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boarding = () => (
  <div className="min-h-screen pt-24 section-padding">
    <div className="container-width">
      <h1 className="text-4xl font-bold text-primary mb-8">A Day in the Hostel</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e137e0c7?w=600&h=400&fit=crop"
            alt="Boarding facilities"
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
          />
        </div>
        <div>
          <p className="text-gray-600 mb-6">
            At Lotus High School, we offer a home away from home. Our hostel provides clean dormitories, personal lockers, hygienic meals, purified water, and a warm environment.
          </p>
          <p className="text-gray-600 mb-6">
            Residents benefit from round-the-clock care, in-campus staff, after-school support, and a strong sense of community and discipline.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Admissions = () => {
  return (
    <Routes>
      <Route index element={<AdmissionsHome />} />
      <Route path="boarding" element={<Boarding />} />
    </Routes>
  );
};

export default Admissions;
