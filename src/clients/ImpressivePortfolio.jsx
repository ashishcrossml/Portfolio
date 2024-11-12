'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Download, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ImpressivePortfolio() {
  const [activeTab, setActiveTab] = useState('about')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "Python", "Django", "MySQL", "MongoDB", "GitHub", "GitLab", "Postman", 
    "Data Structures", "OOP", "Linux", "Debugging", "Deployment", "RESTful API", 
    "Backend Development"
  ]

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

  const projects = [
    {
      title: "Bill Parser",
      description: "A custom algorithm using AWS Tesseract within the Django framework for efficient bill parsing.",
      achievements: [
        "Achieved 90% accuracy in bill parsing.",
        "Reduced manual processing time by 70%.",
        "Implemented server-side scripts for hospital code validation and duplicate name checking.",
        "Led a team of quality analysts and established an accuracy metrics API.",
        "Enhanced the hospital configuration portal UI, integrating a configuration matrix."
      ]
    },
    {
      title: "Vendor Management System",
      description: "A comprehensive system built with Django and Django REST Framework for efficient vendor management.",
      achievements: [
        "Provided efficient vendor profile management.",
        "Added purchase order tracking for smooth updates and accountability.",
        "Incorporated performance metrics for data-driven vendor evaluations."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-500 to-teal-400 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12 relative">
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ashish Kumar Verma
          </motion.h1>
          <motion.p 
            className="text-2xl mb-6 text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineer | Python & Django Specialist
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="secondary" size="icon" asChild>
              <a href="mailto:ashish20301@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a href="https://www.linkedin.com/in/ashish-kumar-verma/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a href="https://github.com/ASHISH20301/ASHISH20301" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://drive.google.com/file/d/1csjvSXbYmBZiwM5AQT9xF9gRIZurJ2BN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </header>

        <Tabs defaultValue="about" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-white bg-opacity-20 rounded-lg p-1">
            <TabsTrigger value="about" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">About</TabsTrigger>
            <TabsTrigger value="experience" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Experience</TabsTrigger>
            <TabsTrigger value="projects" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Projects</TabsTrigger>
            <TabsTrigger value="skills" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Skills</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="about">
              <Card className="bg-white bg-opacity-10 border-none text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    I&apos;m a passionate Software Engineer with over 2 years of specialized experience in Python and Django development. My expertise lies in optimizing code efficiency and enhancing system performance for high-traffic applications, positively impacting over 50 million users. With a strong foundation in data structures, OOP, and API integration, I thrive on solving complex problems and delivering robust, scalable solutions.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-200">B.Tech in Computer Science</p>
                    <p className="text-gray-300">Chandigarh Group of Colleges, Landran, Mohali, India (July 2018 - June 2022)</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-200">
                      <li>Programming With Python: Hands-On Introduction to Beginners - Udemy</li>
                      <li>Programming for Everybody (Getting Started with Python) - Coursera (University of Michigan)</li>
                      <li>Python Data Structures - Coursera (University of Michigan)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
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
            </TabsContent>
            <TabsContent value="projects">
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-white bg-opacity-10 border-none text-white">
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-200">{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
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
            </TabsContent>
          </motion.div>
        </Tabs>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Let&apos;s Connect</h2>
          <Card className="bg-white bg-opacity-10 border-none text-white">
            <CardContent className="flex flex-col sm:flex-row justify-between items-center p-6">
              <p className="text-lg mb-4 sm:mb-0">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:ashish20301@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      <motion.div 
        className="fixed bottom-4 right-4 bg-white rounded-full p-2 cursor-pointer"
        style={{ opacity: scrollY > 100 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronRight className="h-6 w-6 text-purple-700 transform rotate-[-90deg]" />
      </motion.div>
    </div>
  )
}