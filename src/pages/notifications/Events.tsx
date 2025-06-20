import { CalendarDays, User } from "lucide-react";

const events = [
  {
    title: "Pariksha Pe Charcha Live Webcast",
    date: "February 10, 2025",
    author: "chmmraju",
  },
  {
    title: "Children’s Day Celebrations",
    date: "November 30, 2024",
    author: "chmmraju",
  },
  {
    title: "Field Visit: Geological Expedition to Jeelakarragudem Buddha Caves",
    date: "November 2, 2024",
    author: "chmmraju",
  },
  {
    title: "Independence Day Celebrations",
    date: "August 17, 2024",
    author: "chmmraju",
  },
  {
    title: "Child Abuse & Physical Awareness Programme",
    date: "July 26, 2024",
    author: "chmmraju",
  },
];

const Events = () => {
  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
          <div className="text-sm text-gray-600 flex gap-4 items-center">
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {event.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
