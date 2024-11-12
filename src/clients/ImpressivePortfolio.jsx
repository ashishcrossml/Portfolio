'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Download, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from 'next/link'

import aboutData from '@/data/about.json'
import experiencesData from '@/data/experiences.json'
import projectsData from '@/data/projects.json'
import skillsData from '@/data/skills.json'

export default function ImpressivePortfolio() {
  const [activeTab, setActiveTab] = useState('about')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            {aboutData.name}
          </motion.h1>
          <motion.p 
            className="text-2xl mb-6 text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {aboutData.title}
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={`mailto:${aboutData.email}`}>
              <Button variant="secondary" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={aboutData.github} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={aboutData.cvLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
            </Link>
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
                    {aboutData.aboutMe}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-200">{aboutData.education.degree}</p>
                    <p className="text-gray-300">{aboutData.education.institution} ({aboutData.education.period})</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-200">
                      {aboutData.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <div className="space-y-6">
                {experiencesData.map((exp, index) => (
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
                {projectsData.map((project, index) => (
                  <Card key={index} className="bg-white bg-opacity-10 border-none text-white">
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.company}</CardDescription>
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
                    {skillsData.map((skill) => (
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
              <Link href={`mailto:${aboutData.email}`}>
                <Button size="lg" variant="secondary">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </Button>
              </Link>
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