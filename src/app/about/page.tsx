import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <Card className="bg-white bg-opacity-10 border-none text-white">
      <CardHeader>
        <CardTitle className="text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed mb-6">
          I&apos;m a passionate Software Engineer with over 2 years of specialized experience in Python and Django development. My expertise lies in optimizing code efficiency and enhancing system performance for high-traffic applications, positively impacting over 50 million users. With a strong foundation in data structures, OOP, and API integration, I thrive on solving complex problems and delivering robust, scalable solutions.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-200">B.Tech in Computer Science</p>
          <p className="text-gray-300">Chandigarh Group of Colleges, Landran, Mohali, India (July 2018 - June 2022)</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Programming With Python: Hands-On Introduction to Beginners - Udemy</li>
            <li>Programming for Everybody (Getting Started with Python) - Coursera (University of Michigan)</li>
            <li>Python Data Structures - Coursera (University of Michigan)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}