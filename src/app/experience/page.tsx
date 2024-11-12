import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Engineer",
    company: "Vitraya Technologies",
    period: "July 2022 - Present",
    achievements: [
      "Optimized code for bill parsing, reducing claims approval time by over 80%.",
      "Led digital transformation projects for medical insurance claims, resulting in a 30% increase in processing speed.",
      "Successfully integrated the Vitraya OCR Solutions project with the Bill Parser project.",
      "Developed and deployed service suites using Python, Django, and MongoDB technologies."
    ]
  },
  {
    title: "R&D Intern",
    company: "Nokia Solutions & Networks India Pvt Ltd",
    period: "August 2021 - May 2022",
    achievements: [
      "Deployed 50+ virtual machines on Nokia Cloudbase.",
      "Conducted automated Cloudbase deployments with IPv4, IPv6, and dual-stack IP configurations."
    ]
  }
]

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-white bg-opacity-10 border-none text-white">
          <CardHeader>
            <CardTitle className="text-2xl">{exp.title}</CardTitle>
            <CardDescription className="text-gray-300">{exp.company} | {exp.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-200">{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}