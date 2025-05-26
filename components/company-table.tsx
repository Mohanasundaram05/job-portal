"use client"
import { motion } from "framer-motion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const companies = [
  {
    id: "1",
    name: "TechCorp",
    employees: "500-1000",
    industry: "Technology",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    name: "DesignHub",
    employees: "200-500",
    industry: "Design",
    location: "New York, NY",
  },
  {
    id: "3",
    name: "InnovateCo",
    employees: "100-200",
    industry: "Technology",
    location: "Austin, TX",
  },
  {
    id: "4",
    name: "DataSystems",
    employees: "500-1000",
    industry: "Technology",
    location: "Seattle, WA",
  },
  {
    id: "5",
    name: "GrowthLabs",
    employees: "50-100",
    industry: "Marketing",
    location: "Chicago, IL",
  },
]

export default function CompanyTable() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Table>
        <TableCaption>A list of companies in our database.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead className="text-right">Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell className="font-medium">{company.id}</TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.employees}</TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell className="text-right">{company.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}
