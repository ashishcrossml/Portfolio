import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="space-y-6">
      {/* About Me Box */}
      <div className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I&apos;m a passionate Software Engineer with over 2 years of specialized experience in Python and Django development. My expertise lies in optimizing code efficiency and enhancing system performance for high-traffic applications, positively impacting over 50 million users. With a strong foundation in data structures, OOP, and API integration, I thrive on solving complex problems and delivering robust, scalable solutions.
          </p>
        </div>
      </div>

      {/* Education Box */}
      <div className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-lg text-gray-200">B.Tech in Computer Science</p>
          <p className="text-gray-300">Chandigarh Group of Colleges, Landran, Mohali, India (July 2018 - June 2022)</p>
        </div>
      </div>

      {/* Certifications Box */}
      <div className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>Programming With Python: Hands-On Introduction to Beginners - Udemy</li>
            <li>Programming for Everybody (Getting Started with Python) - Coursera (University of Michigan)</li>
            <li>Python Data Structures - Coursera (University of Michigan)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}