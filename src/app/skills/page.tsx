import { Badge } from "@/components/ui/badge"

const skills = [
  "Python", "Django", "MySQL", "MongoDB", "GitHub", "GitLab", "Postman", 
  "Data Structures", "OOP", "Linux", "Debugging", "Deployment", "RESTful API", 
  "Backend Development"
]

export default function Skills() {
  return (
    <div className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg py-2 px-3 bg-white bg-opacity-20 text-white">{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}