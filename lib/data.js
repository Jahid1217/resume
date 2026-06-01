export const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/jahid.hasan1217/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jahid-hasan-8a4234292/" },
  { label: "GitHub", href: "https://github.com/Jahid1217" }
];

export const stats = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Certifications" }
];

export const expertise = [
  {
    icon: "WEB",
    title: "Web Development",
    items: ["HTML5 & CSS3", "JavaScript & TypeScript", "React & Node.js", "MongoDB & MySQL"]
  },
  {
    icon: "AI",
    title: "AI & Data Science",
    items: ["Python Programming", "Machine Learning", "TensorFlow & PyTorch", "Data Analysis"]
  },
  {
    icon: "QA",
    title: "Software Testing",
    items: ["Manual Testing", "Automation Testing", "Selenium & Cypress", "Test Case Design"]
  }
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 }
    ]
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    title: "Testing & QA",
    items: [
      { name: "Selenium", level: 85 },
      { name: "Manual Testing", level: 90 },
      { name: "Test Case Design", level: 88 },
      { name: "Bug Tracking", level: 85 }
    ]
  }
];

export const education = [
  {
    school: "American International University - Bangladesh (AIUB)",
    logo: "/assets/aiub.jpg",
    details: ["BSc in Computer Science and Engineering", "Faculty of Science and Technology"],
    duration: "2021 - Present"
  },
  {
    school: "Dhaka Commerce College",
    logo: "/assets/dcc.png",
    details: ["Higher Secondary Certificate (HSC) in Science", "Group: Science"],
    duration: "2019 - 2021"
  },
  {
    school: "Harimohan Gov't High School",
    logo: "/assets/harimohan.png",
    details: ["Secondary School Certificate (SSC) in Science", "Group: Science"],
    duration: "2013 - 2019"
  },
  {
    school: "Collectorate Green View High School",
    logo: "/assets/green_view.jpg",
    details: ["Primary School Certificate (PSC)", "Elementary Education"],
    duration: "2007 - 2013"
  }
];

export const projects = [
  {
    title: "Restaurants",
    category: "Desktop Application",
    image: "/assets/project1.png",
    description:
      "A desktop restaurant management solution built with C# and MySQL, covering authentication, product catalog, cart workflows, payments, and admin operations.",
    tags: ["C#", "MySQL"],
    href: "https://github.com/Jahid1217/Restaurants-Applications"
  },
  {
    title: "DocLab",
    category: "Web Development",
    image: "/assets/Project-2.png",
    description:
      "Hospital management web application with .NET, JavaScript, HTML, CSS, and C# for managing clinical and administrative workflows.",
    tags: [".NET", "JavaScript", "HTML", "C#", "CSS"],
    href: "https://github.com/Jahid1217/Hospital_Management_System/tree/main/WebApplicationDocLab"
  },
  {
    title: "Railway Reservation System",
    category: "Desktop Application",
    image: "/assets/Project-3.png",
    description:
      "Reservation management desktop application with booking flows, train data, user records, and MySQL-backed persistence.",
    tags: ["C#", "MySQL"],
    href: "https://github.com/Jahid1217/Railway-Applications"
  },
  {
    title: "Bank Loan System",
    category: "Desktop Application",
    image: "/assets/Project-4.png",
    description:
      "Loan processing dashboard for customer records, loan applications, status tracking, and internal review flows.",
    tags: ["C#", "MySQL"],
    href: "#"
  },
  {
    title: "Kiron Finance",
    category: "Desktop Application",
    image: "/assets/Project-5.png",
    description:
      "Finance management application focused on responsive operations, account tracking, reporting, and admin workflows.",
    tags: ["C#", "MySQL"],
    href: "#"
  },
  {
    title: "Modern Dashboard",
    category: "Desktop Application",
    image: "/assets/Project-6.png",
    description:
      "Desktop dashboard concept with analytics-focused screens, structured tables, and fast access to business metrics.",
    tags: ["C#", "MySQL"],
    href: "#"
  }
];

export const posts = [
  {
    title: "The Transformative Role of AI in Image Processing",
    date: "Dec 02, 2024",
    readTime: "5 min read",
    image: "/assets/ai1.jpeg",
    excerpt:
      "AI-powered image processing uses algorithms and learning models to analyze, interpret, and manipulate visual data with impressive accuracy and speed.",
    tags: ["AI", "Image Processing", "Technology"],
    likes: 24,
    comments: 5
  },
  {
    title: "Modern Web Development Trends in 2024",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    image: "/assets/ai2.jpeg",
    excerpt:
      "The web development landscape continues to evolve through new frameworks, sharper performance expectations, and more polished user experiences.",
    tags: ["Web Development", "Trends", "JavaScript"],
    likes: 42,
    comments: 12
  },
  {
    title: "Data Science for Beginners: A Comprehensive Guide",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    image: "/assets/ai3.jpeg",
    excerpt:
      "A practical introduction to data collection, cleaning, machine learning algorithms, and visualization techniques for new data science learners.",
    tags: ["Data Science", "Machine Learning", "Python"],
    likes: 38,
    comments: 8
  }
];
