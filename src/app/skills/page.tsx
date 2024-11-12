import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Python", "Django", "MySQL", "MongoDB", "GitHub", "GitLab", "Postman", 
  "Data Structures", "OOP", "Linux", "Debugging", "Deployment", "RESTful API", 
  "Backend Development"
]

export default function Skills() {
  return (
    <Card className="bg-white bg-opacity-10 border-none text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg py-2 px-3 bg-white bg-opacity-20 text-white">{skill}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}