import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bus, MapPin, ShieldCheck } from "lucide-react";

const routes = [
  {
    routeNumber: 1,
    area: "Pentapadu Road, Bhimavaram Bypass",
    busNumber: "AP 37 X 1001",
  },
  {
    routeNumber: 2,
    area: "Narasimhapuram, Vinayaka Temple Area",
    busNumber: "AP 37 X 1002",
  },
  {
    routeNumber: 3,
    area: "Satyavathi Nagar, SBI Colony",
    busNumber: "AP 37 X 1003",
  },
  {
    routeNumber: 4,
    area: "Railway Station Road, Old Bus Stand",
    busNumber: "AP 37 X 1004",
  },
  {
    routeNumber: 5,
    area: "Bypass Road, Teachers Colony",
    busNumber: "AP 37 X 1005",
  },
];

const Transport = () => {
  return (
    <div className="container-width section-padding animate-fade-in">
      <h1 className="text-4xl font-bold text-primary mb-4">Transport</h1>
      <p className="text-lg text-gray-600 mb-8">
        Safe, reliable, and convenient transportation for our students.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1570123516241-2092d19a2ee7?w=800&h=600&fit=crop" 
            alt="School Bus"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Bus className="mr-3 text-primary" /> Modern Fleet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We operate a fleet of modern, well-maintained buses to ensure the comfort and safety of our students.
                Each bus seats 40 students and meets all Government safety standards, with first aid kits and trained attenders onboard.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><MapPin className="mr-3 text-primary" /> Wide Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our routes span major residential areas across Tadepalligudem, ensuring easy and convenient access for all.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><ShieldCheck className="mr-3 text-primary" /> Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                All buses are driven by trained professionals, and bus attendants ensure proper seating and safe travel for children throughout the journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Bus Routes in Tadepalligudem</h2>
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Route No.</TableHead>
                <TableHead>Areas Covered</TableHead>
                <TableHead className="text-right">Bus No.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes.map((route) => (
                <TableRow key={route.routeNumber}>
                  <TableCell className="font-medium">{route.routeNumber}</TableCell>
                  <TableCell>{route.area}</TableCell>
                  <TableCell className="text-right">{route.busNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Transport;
