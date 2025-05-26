import { BookOpen, FileText, Briefcase, Globe, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ResourceCategory {
  id: string
  name: string
  icon: LucideIcon
}

export interface Resource {
  id: string
  title: string
  description: string
  category: string
  publishedDate: string
  readTime: string
  author: string
  image: string
  slug: string
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: "all",
    name: "All Resources",
    icon: BookOpen,
  },
  {
    id: "resume",
    name: "Resume Tips",
    icon: FileText,
  },
  {
    id: "interview",
    name: "Interview Prep",
    icon: Briefcase,
  },
  {
    id: "career",
    name: "Career Growth",
    icon: TrendingUp,
  },
  {
    id: "remote",
    name: "Remote Work",
    icon: Globe,
  },
]

export const resources: Resource[] = [
  {
    id: "1",
    title: "10 Resume Tips to Get You Noticed by Recruiters",
    description:
      "Learn how to craft a resume that stands out from the crowd and catches the attention of hiring managers and recruiters.",
    category: "resume",
    publishedDate: "2023-04-15",
    readTime: "5 min read",
    author: "Emma Johnson",
    image: "mp1.png?height=200&width=400",
    slug: "10-resume-tips",
  },
  {
    id: "2",
    title: "How to Answer the 'Tell Me About Yourself' Interview Question",
    description:
      "Master the art of introducing yourself in job interviews with this comprehensive guide to the most common opening question.",
    category: "interview",
    publishedDate: "2023-05-22",
    readTime: "7 min read",
    author: "Michael Chen",
    image: "mp2.png?height=200&width=400",
    slug: "tell-me-about-yourself",
  },
  {
    id: "3",
    title: "Setting Career Goals: A 5-Year Plan Template",
    description:
      "Create a strategic career development plan with actionable steps to achieve your professional goals in the next five years.",
    category: "career",
    publishedDate: "2023-06-10",
    readTime: "10 min read",
    author: "Sarah Williams",
    image: "mp3.png?height=200&width=400",
    slug: "career-goals-template",
  },
  {
    id: "4",
    title: "Remote Work Productivity Hacks for 2023",
    description:
      "Boost your efficiency and maintain work-life balance with these proven productivity strategies for remote workers.",
    category: "remote",
    publishedDate: "2023-07-05",
    readTime: "6 min read",
    author: "David Rodriguez",
    image: "mp4.png?height=200&width=400",
    slug: "remote-productivity-hacks",
  },
  {
    id: "5",
    title: "Mastering Behavioral Interview Questions",
    description:
      "Learn the STAR method and prepare compelling stories to ace behavioral questions in your next job interview.",
    category: "interview",
    publishedDate: "2023-08-12",
    readTime: "8 min read",
    author: "Jennifer Lee",
    image: "mp5.png?height=200&width=400",
    slug: "behavioral-interview-questions",
  },
  {
    id: "6",
    title: "Building a Professional LinkedIn Profile",
    description:
      "Optimize your LinkedIn presence to attract recruiters and showcase your professional brand effectively.",
    category: "resume",
    publishedDate: "2023-09-03",
    readTime: "9 min read",
    author: "Robert Taylor",
    image: "mp6.png?height=200&width=400",
    slug: "linkedin-profile-tips",
  },
  {
    id: "7",
    title: "Negotiating Your Salary: What You Need to Know",
    description:
      "Learn effective strategies for salary negotiations to ensure you get compensated fairly for your skills and experience.",
    category: "career",
    publishedDate: "2023-10-18",
    readTime: "7 min read",
    author: "Alicia Garcia",
    image: "mp7.png?height=200&width=400",
    slug: "salary-negotiation",
  },
  {
    id: "8",
    title: "Setting Up the Perfect Home Office",
    description:
      "Create a productive and comfortable workspace at home with these essential tips and ergonomic recommendations.",
    category: "remote",
    publishedDate: "2023-11-09",
    readTime: "5 min read",
    author: "Thomas Wilson",
    image: "mp8.png?height=200&width=400",
    slug: "home-office-setup",
  },
  {
    id: "9",
    title: "Technical Interview Preparation Guide",
    description:
      "A comprehensive approach to preparing for technical interviews, including coding challenges and system design questions.",
    category: "interview",
    publishedDate: "2023-12-01",
    readTime: "12 min read",
    author: "Priya Patel",
    image: "mp9.png?height=200&width=400",
    slug: "technical-interview-prep",
  },
  {
    id: "10",
    title: "Creating an ATS-Friendly Resume",
    description:
      "Optimize your resume to pass through Applicant Tracking Systems and reach human recruiters with these formatting tips.",
    category: "resume",
    publishedDate: "2024-01-14",
    readTime: "6 min read",
    author: "Marcus Johnson",
    image: "mp10.png?height=200&width=400",
    slug: "ats-friendly-resume",
  },
  {
    id: "11",
    title: "Overcoming Imposter Syndrome in Your Career",
    description:
      "Practical strategies to recognize and overcome feelings of inadequacy and self-doubt in your professional life.",
    category: "career",
    publishedDate: "2024-02-08",
    readTime: "8 min read",
    author: "Sophia Martinez",
    image: "mp11.png?height=200&width=400",
    slug: "overcoming-imposter-syndrome",
  },
  {
    id: "12",
    title: "Managing Work-Life Balance in a Remote Environment",
    description:
      "Establish healthy boundaries and maintain wellbeing while working remotely with these practical tips.",
    category: "remote",
    publishedDate: "2024-03-22",
    readTime: "7 min read",
    author: "James Wilson",
    image: "mp12.png?height=200&width=400",
    slug: "remote-work-life-balance",
  },
]

export function getResourcesByCategory(category: string): Resource[] {
  if (category === "all") {
    return resources
  }
  return resources.filter((resource) => resource.category === category)
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug)
}
