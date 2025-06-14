
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
    area: "K.N. Road, Housing Board Colony",
    busNumber: "AP 37 A 1234",
  },
  {
    routeNumber: 2,
    area: "Jubilee Road, Ayyappa Nagar",
    busNumber: "AP 37 B 5678",
  },
  {
    routeNumber: 3,
    area: "Ganesh Nagar, S.N. Puram",
    busNumber: "AP 37 C 9012",
  },
  {
    routeNumber: 4,
    area: "Town Hall, Weavers Colony",
    busNumber: "AP 37 D 3456",
  },
  {
    routeNumber: 5,
    area: "Penta Road, Subba Rao Peta",
    busNumber: "AP 37 E 7890",
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
              <p>We operate a fleet of modern, well-maintained buses to ensure the comfort and safety of our students.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><MapPin className="mr-3 text-primary" /> Wide Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our buses cover an extensive network of routes throughout Tadepalligudem and surrounding areas, ensuring convenient pick-up and drop-off points.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><ShieldCheck className="mr-3 text-primary" /> Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All buses are equipped with GPS tracking and are managed by experienced and trained staff to ensure student safety is our top priority.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Bus Routes & Details</h2>
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
