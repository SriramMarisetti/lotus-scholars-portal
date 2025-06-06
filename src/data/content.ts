
export const bannerContent = {
  heading: "Welcome to Lotus High School",
  subheading: "Where Excellence Begins",
  imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
};

export const schoolInfo = {
  name: "Lotus High School",
  location: "Tadepalligudem",
  phone: "+91 8123456789",
  email: "info@lotushighschool.edu.in",
  address: "123 Education Street, Tadepalligudem, West Godavari, Andhra Pradesh 534101"
};

export const navigationItems = [
  {
    title: "Home",
    href: "/",
    children: []
  },
  {
    title: "Admissions",
    href: "/admissions",
    children: [
      { title: "Boarding", href: "/admissions/boarding" }
    ]
  },
  {
    title: "Academics",
    href: "/academics",
    children: [
      { title: "Faculty", href: "/academics/faculty" },
      { title: "School Management Committee", href: "/academics/management" },
      { title: "Corps System", href: "/academics/corps" }
    ]
  },
  {
    title: "Advantages",
    href: "/advantages",
    children: [
      { title: "Lab Resources", href: "/advantages/labs" },
      { title: "Projects and Field Trips", href: "/advantages/projects" },
      { title: "Digital Theatre", href: "/advantages/theatre" },
      { title: "Library", href: "/advantages/library" },
      { title: "Art and Music", href: "/advantages/arts" },
      { title: "Sports", href: "/advantages/sports" },
      { title: "Transport", href: "/advantages/transport" }
    ]
  },
  {
    title: "Gallery",
    href: "/gallery",
    children: [
      { title: "Photos", href: "/gallery/photos" },
      { title: "Videos", href: "/gallery/videos" }
    ]
  },
  {
    title: "Notifications",
    href: "/notifications",
    children: [
      { title: "TC's", href: "/notifications/tcs" },
      { title: "Events & News", href: "/notifications/events" }
    ]
  },
  {
    title: "Mandatory Public Disclosure",
    href: "/disclosure",
    children: [
      { title: "PDF Download", href: "/disclosure/pdf" },
      { title: "General Information", href: "/disclosure/general" },
      { title: "Documents & Information", href: "/disclosure/documents" },
      { title: "Result and Academics", href: "/disclosure/results" },
      { title: "Staff (Teaching)", href: "/disclosure/staff" },
      { title: "Infrastructure", href: "/disclosure/infrastructure" }
    ]
  },
  {
    title: "Contact",
    href: "/contact",
    children: [
      { title: "About Us", href: "/contact/about" },
      { title: "Route Map", href: "/contact/map" }
    ]
  }
];

export const galleryContent = {
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      title: "School Building",
      description: "Our beautiful campus"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      title: "Library",
      description: "State-of-the-art library facility"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      title: "Science Lab",
      description: "Modern laboratory equipment"
    }
  ],
  videos: [
    {
      id: 1,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "School Tour",
      description: "Virtual tour of our campus"
    }
  ]
};

export const facultyContent = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    position: "Principal",
    qualification: "Ph.D in Education",
    experience: "25 years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2e5f0b3?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Mr. Rajesh Kumar",
    position: "Vice Principal",
    qualification: "M.A, B.Ed",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
  }
];
