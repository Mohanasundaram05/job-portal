import {
  Laptop,
  PenTool,
  TrendingUp,
  DollarSign,
  Heart,
  BookOpen,
  Headphones,
  BarChart,
  Coffee,
  Clock,
  Plane,
  HomeIcon as Gym,
  Smartphone,
  Home,
  GraduationCap,
  Baby,
  type LucideIcon,
} from "lucide-react"

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  logo: string
  isRemote: boolean
  postedTime: string
  categoryId: string
  experienceLevel: string
  slug: string
}

export interface Category {
  id: string
  name: string
  count: number
  icon: LucideIcon
}

export interface JobType {
  id: string
  name: string
}

export interface ExperienceLevel {
  id: string
  name: string
}

export interface Company {
  id: string
  name: string
  logo: string
  industry: string
  location: string
  size: string
  type: string
  founded: number
  website: string
  description: string[]
  culture: { title: string; description: string }[]
  benefits: { title: string; description: string; icon: LucideIcon }[]
  revenue: string
  jobCount: number
  verified: boolean
  slug: string
  similarCompanies: {
    id: string
    name: string
    logo: string
    industry: string
    jobCount: number
    slug: string
  }[]
}

export interface CompanyReview {
  id: string
  author: string
  avatar: string
  position: string
  rating: number
  workLifeBalance: number
  compensation: number
  culture: number
  title: string
  content: string
  pros: string
  cons: string
  date: string
  helpfulCount: number
}

export const categories: Category[] = [
  {
    id: "tech",
    name: "Technology",
    count: 1243,
    icon: Laptop,
  },
  {
    id: "design",
    name: "Design",
    count: 857,
    icon: PenTool,
  },
  {
    id: "marketing",
    name: "Marketing",
    count: 623,
    icon: TrendingUp,
  },
  {
    id: "finance",
    name: "Finance",
    count: 428,
    icon: DollarSign,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    count: 512,
    icon: Heart,
  },
  {
    id: "education",
    name: "Education",
    count: 364,
    icon: BookOpen,
  },
  {
    id: "customer-service",
    name: "Customer Service",
    count: 298,
    icon: Headphones,
  },
  {
    id: "sales",
    name: "Sales",
    count: 476,
    icon: BarChart,
  },
]

export const jobTypes: JobType[] = [
  { id: "full-time", name: "Full-time" },
  { id: "part-time", name: "Part-time" },
  { id: "contract", name: "Contract" },
  { id: "freelance", name: "Freelance" },
  { id: "internship", name: "Internship" },
]

export const experienceLevels: ExperienceLevel[] = [
  { id: "entry", name: "Entry Level" },
  { id: "mid", name: "Mid Level" },
  { id: "senior", name: "Senior Level" },
  { id: "executive", name: "Executive" },
]

export const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    salary: "₹120k - ₹150k",
    logo: "/cmp1.png?height=80&width=80",
    isRemote: true,
    postedTime: "2 days ago",
    categoryId: "tech",
    experienceLevel: "senior",
    slug: "senior-frontend-developer",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "New York, NY",
    type: "full-time",
    salary: "₹90k - ₹120k",
    logo: "/cmp2.png?height=80&width=80",
    isRemote: true,
    postedTime: "1 day ago",
    categoryId: "design",
    experienceLevel: "mid",
    slug: "ux-ui-designer",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "InnovateCo",
    location: "Austin, TX",
    type: "full-time",
    salary: "₹110k - ₹140k",
    logo: "/cmp1.png?height=80&width=80",
    isRemote: false,
    postedTime: "3 days ago",
    categoryId: "tech",
    experienceLevel: "senior",
    slug: "product-manager",
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "Seattle, WA",
    type: "full-time",
    salary: "₹130k - ₹160k",
    logo: "/cmp2.png?height=80&width=80",
    isRemote: true,
    postedTime: "Just now",
    categoryId: "tech",
    experienceLevel: "senior",
    slug: "backend-engineer",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "GrowthLabs",
    location: "Chicago, IL",
    type: "full-time",
    salary: "₹80k - ₹100k",
    logo: "/cmp1.png?height=80&width=80",
    isRemote: false,
    postedTime: "1 week ago",
    categoryId: "marketing",
    experienceLevel: "mid",
    slug: "marketing-specialist",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "contract",
    salary: "₹100k - ₹130k",
    logo: "/cmp2.png?height=80&width=80",
    isRemote: true,
    postedTime: "3 days ago",
    categoryId: "tech",
    experienceLevel: "senior",
    slug: "devops-engineer",
  },
]

// Generate more jobs for the job listings page
export const allJobs: Job[] = [
  ...featuredJobs,
  {
    id: "7",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    type: "full-time",
    salary: "₹110k - ₹140k",
    logo: "/cmp1.png?height=80&width=80",
    isRemote: false,
    postedTime: "5 days ago",
    categoryId: "tech",
    experienceLevel: "mid",
    slug: "data-scientist",
  },
  {
    id: "8",
    title: "Content Writer",
    company: "MediaGroup",
    location: "Remote",
    type: "part-time",
    salary: "₹60k - ₹80k",
    logo: "/cmp2.png?height=80&width=80",
    isRemote: true,
    postedTime: "1 week ago",
    categoryId: "marketing",
    experienceLevel: "entry",
    slug: "content-writer",
  },
  {
    id: "9",
    title: "Financial Analyst",
    company: "CapitalFirm",
    location: "New York, NY",
    type: "full-time",
    salary: "₹90k - ₹110k",
    logo: "/cmp1.png?height=80&width=80",
    isRemote: false,
    postedTime: "2 weeks ago",
    categoryId: "finance",
    experienceLevel: "mid",
    slug: "financial-analyst",
  },
  {
    id: "10",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Chicago, IL",
    type: "full-time",
    salary: "₹85k - ₹105k",
    logo: "/cmp3.png?height=80&width=80",
    isRemote: false,
    postedTime: "3 days ago",
    categoryId: "customer-service",
    experienceLevel: "senior",
    slug: "hr-manager",
  },
  {
    id: "11",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "San Diego, CA",
    type: "full-time",
    salary: "₹100k - ₹130k",
    logo: "/cmp5.png?height=80&width=80",
    isRemote: true,
    postedTime: "4 days ago",
    categoryId: "tech",
    experienceLevel: "mid",
    slug: "mobile-app-developer",
  },
  {
    id: "12",
    title: "Sales Representative",
    company: "GrowthCorp",
    location: "Miami, FL",
    type: "full-time",
    salary: "₹70k - ₹90k + Commission",
    logo: "/cmp3.png?height=80&width=80",
    isRemote: false,
    postedTime: "1 week ago",
    categoryId: "sales",
    experienceLevel: "entry",
    slug: "sales-representative",
  },
  {
    id: "13",
    title: "Customer Success Manager",
    company: "ServicePro",
    location: "Denver, CO",
    type: "full-time",
    salary: "₹75k - ₹95k",
    logo: "/cmp4.png?height=80&width=80",
    isRemote: true,
    postedTime: "6 days ago",
    categoryId: "customer-service",
    experienceLevel: "mid",
    slug: "customer-success-manager",
  },
  {
    id: "14",
    title: "Graphic Designer",
    company: "CreativeStudio",
    location: "Portland, OR",
    type: "freelance",
    salary: "₹50 - ₹70/hour",
    logo: "/cmp3.png?height=80&width=80",
    isRemote: true,
    postedTime: "2 days ago",
    categoryId: "design",
    experienceLevel: "mid",
    slug: "graphic-designer",
  },
  {
    id: "15",
    title: "Project Manager",
    company: "BuildWell",
    location: "Atlanta, GA",
    type: "full-time",
    salary: "₹90k - ₹120k",
    logo: "/cmp5.png?height=80&width=80",
    isRemote: false,
    postedTime: "1 week ago",
    categoryId: "tech",
    experienceLevel: "senior",
    slug: "project-manager",
  },
  {
    id: "16",
    title: "Social Media Manager",
    company: "DigitalEdge",
    location: "Remote",
    type: "full-time",
    salary: "₹65k - ₹85k",
    logo: "/cmp4.png?height=80&width=80",
    isRemote: true,
    postedTime: "3 days ago",
    categoryId: "marketing",
    experienceLevel: "mid",
    slug: "social-media-manager",
  },
]

// Company data
export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "cmp1.png?height=80&width=80",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "500-1000",
    type: "Public Company",
    founded: 2010,
    website: "https://techcorp.example.com",
    description: [
      "TechCorp is a leading technology company specializing in cloud computing, artificial intelligence, and enterprise software solutions. Founded in 2010, we've grown from a small startup to a global organization with offices in 12 countries.",
      "Our mission is to empower businesses through innovative technology solutions that drive growth and efficiency. We believe in a collaborative work environment where creativity and problem-solving are valued above all else.",
      "At TechCorp, we're committed to pushing the boundaries of what's possible in technology while maintaining our core values of integrity, innovation, and customer success.",
    ],
    culture: [
      {
        title: "Innovation First",
        description:
          "We encourage bold thinking and experimentation. Our teams are empowered to explore new ideas and approaches to solving complex problems.",
      },
      {
        title: "Work-Life Balance",
        description:
          "We believe in working smarter, not harder. Flexible schedules and remote work options help our team members maintain a healthy balance.",
      },
      {
        title: "Continuous Learning",
        description:
          "We invest heavily in professional development, offering learning stipends, internal workshops, and opportunities to attend industry conferences.",
      },
    ],
    benefits: [
      {
        title: "Flexible Work Hours",
        description: "Set your own schedule within core hours",
        icon: Clock,
      },
      {
        title: "Remote Work Options",
        description: "Work from home or anywhere in the world",
        icon: Home,
      },
      {
        title: "Unlimited PTO",
        description: "Take time off when you need it",
        icon: Plane,
      },
      {
        title: "Gym Membership",
        description: "Stay fit with a company-sponsored membership",
        icon: Gym,
      },
      {
        title: "Free Lunch",
        description: "Catered meals in the office daily",
        icon: Coffee,
      },
      {
        title: "Education Stipend",
        description: "₹5,000 annual budget for learning",
        icon: GraduationCap,
      },
      {
        title: "Parental Leave",
        description: "16 weeks of paid leave for new parents",
        icon: Baby,
      },
      {
        title: "Phone Allowance",
        description: "Monthly stipend for your phone bill",
        icon: Smartphone,
      },
    ],
    revenue: "₹50M - ₹100M",
    jobCount: 24,
    verified: true,
    slug: "techcorp",
    similarCompanies: [
      {
        id: "2",
        name: "DataSystems",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Technology",
        jobCount: 18,
        slug: "datasystems",
      },
      {
        id: "3",
        name: "CloudTech",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Technology",
        jobCount: 12,
        slug: "cloudtech",
      },
      {
        id: "4",
        name: "InnovateCo",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Technology",
        jobCount: 9,
        slug: "innovateco",
      },
      {
        id: "5",
        name: "AppWorks",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Technology",
        jobCount: 7,
        slug: "appworks",
      },
    ],
  },
  {
    id: "2",
    name: "DesignHub",
    logo: "/cmp2.png?height=80&width=80",
    industry: "Design",
    location: "New York, NY",
    size: "200-500",
    type: "Private Company",
    founded: 2015,
    website: "https://designhub.example.com",
    description: [
      "DesignHub is a creative agency that combines design thinking with cutting-edge technology to deliver exceptional user experiences. Since our founding in 2015, we've partnered with brands across industries to create meaningful digital products and services.",
      "Our team of designers, developers, and strategists work collaboratively to solve complex problems and create intuitive, beautiful solutions. We believe that great design has the power to transform businesses and improve people's lives.",
      "At DesignHub, we foster a culture of creativity, experimentation, and continuous improvement. We're passionate about our craft and committed to delivering excellence in everything we do.",
    ],
    culture: [
      {
        title: "Creative Freedom",
        description:
          "We give our designers the space and resources they need to explore their creativity and push boundaries.",
      },
      {
        title: "Collaborative Environment",
        description:
          "Cross-functional teams work together seamlessly, sharing knowledge and expertise to create better outcomes.",
      },
      {
        title: "User-Centered Approach",
        description:
          "Everything we create is designed with the end user in mind, focusing on accessibility and usability.",
      },
    ],
    benefits: [
      {
        title: "Creative Workshops",
        description: "Regular sessions to explore new design trends",
        icon: PenTool,
      },
      {
        title: "Flexible Schedule",
        description: "Work when you're most creative",
        icon: Clock,
      },
      {
        title: "Remote Options",
        description: "Work from anywhere in the world",
        icon: Home,
      },
      {
        title: "Learning Budget",
        description: "₹3,000 annual stipend for courses",
        icon: GraduationCap,
      },
      {
        title: "Wellness Program",
        description: "Mental and physical health support",
        icon: Heart,
      },
      {
        title: "Equipment Allowance",
        description: "Budget for your perfect setup",
        icon: Laptop,
      },
    ],
    revenue: "₹10M - ₹50M",
    jobCount: 15,
    verified: true,
    slug: "designhub",
    similarCompanies: [
      {
        id: "6",
        name: "CreativeStudio",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Design",
        jobCount: 8,
        slug: "creativestudio",
      },
      {
        id: "7",
        name: "DigitalEdge",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Marketing",
        jobCount: 11,
        slug: "digitaledge",
      },
      {
        id: "8",
        name: "MediaGroup",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Marketing",
        jobCount: 6,
        slug: "mediagroup",
      },
      {
        id: "9",
        name: "UXPartners",
        logo: "/placeholder.svg?height=80&width=80",
        industry: "Design",
        jobCount: 4,
        slug: "uxpartners",
      },
    ],
  },
  // Add more companies as needed
]

// Helper functions to get data
export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug)
}

export function getJobsByCompany(companyId: string): Job[] {
  return allJobs.filter((job) => job.company === companies.find((c) => c.id === companyId)?.name)
}

export function getCompanyReviews(companyId: string): CompanyReview[] {
  // This would typically come from a database
  // For now, we'll generate some mock reviews
  const company = companies.find((c) => c.id === companyId)
  if (!company) return []

  return [
    {
      id: "1",
      author: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      position: "Senior Developer",
      rating: 4.5,
      workLifeBalance: 4,
      compensation: 5,
      culture: 4.5,
      title: "Great place to grow your career",
      content:
        "I've been with the company for 3 years and have had numerous opportunities to develop my skills and take on new challenges. The management team is supportive and genuinely cares about employee growth.",
      pros: "Excellent benefits, supportive management, opportunities for growth, cutting-edge projects",
      cons: "Can be fast-paced and demanding at times, occasional long hours during project deadlines",
      date: "2023-03-15",
      helpfulCount: 24,
    },
    {
      id: "2",
      author: "Sam Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
      position: "Product Manager",
      rating: 5,
      workLifeBalance: 5,
      compensation: 4.5,
      culture: 5,
      title: "Best company culture I've experienced",
      content:
        "The collaborative environment here is unmatched. Teams work together seamlessly, and there's a genuine sense of camaraderie. Leadership is transparent about company goals and challenges.",
      pros: "Amazing culture, work-life balance, competitive pay, collaborative teams",
      cons: "Some processes could be more streamlined, occasional communication gaps between departments",
      date: "2023-05-22",
      helpfulCount: 18,
    },
    {
      id: "3",
      author: "Jamie Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      position: "UX Designer",
      rating: 3.5,
      workLifeBalance: 3,
      compensation: 4,
      culture: 3.5,
      title: "Good company with some growing pains",
      content:
        "There are many positive aspects to working here, including talented colleagues and interesting projects. However, the rapid growth has led to some organizational challenges that can make work frustrating at times.",
      pros: "Talented team, interesting projects, good benefits, competitive salary",
      cons: "Growing pains, sometimes unclear direction, workload can be heavy",
      date: "2023-01-10",
      helpfulCount: 12,
    },
    {
      id: "4",
      author: "Morgan Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      position: "Marketing Specialist",
      rating: 2,
      workLifeBalance: 1.5,
      compensation: 3,
      culture: 2,
      title: "Challenging work environment",
      content:
        "While the company offers good compensation, the work-life balance is poor. Expectations are often unrealistic, and burnout is common among team members.",
      pros: "Good pay, prestigious clients, looks good on resume",
      cons: "Poor work-life balance, high pressure, high turnover in some departments",
      date: "2023-04-05",
      helpfulCount: 9,
    },
    {
      id: "5",
      author: "Taylor Wong",
      avatar: "/placeholder.svg?height=40&width=40",
      position: "Software Engineer",
      rating: 4,
      workLifeBalance: 4.5,
      compensation: 3.5,
      culture: 4,
      title: "Flexible and supportive workplace",
      content:
        "The flexibility here is amazing. Remote work options and flexible hours make it easy to maintain work-life balance. The team is supportive, and there's a strong emphasis on continuous learning.",
      pros: "Flexibility, supportive colleagues, learning opportunities, good work-life balance",
      cons: "Compensation could be more competitive, benefits are good but not great",
      date: "2023-02-18",
      helpfulCount: 15,
    },
  ]
}
