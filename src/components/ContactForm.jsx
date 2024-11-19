'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Store the submitted data
    setSubmittedData(formData)
    setStatus('Message sent successfully!')
    
    // Clear the form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card className="bg-white bg-opacity-10 border-none text-white">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-white bg-opacity-20 border-none text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md bg-white bg-opacity-20 border-none text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 rounded-md bg-white bg-opacity-20 border-none text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Your message"
            />
          </div>
          
          <Button type="submit" size="lg" variant="secondary" className="w-full">
            <Mail className="mr-2 h-5 w-5" /> Send Message
          </Button>
          
          {status && (
            <div className="mt-4">
              <p className="text-center text-green-400 mb-4">{status}</p>
              {submittedData && (
                <div className="bg-white bg-opacity-20 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Submitted Details:</h3>
                  <p><span className="font-medium">Name:</span> {submittedData.name}</p>
                  <p><span className="font-medium">Email:</span> {submittedData.email}</p>
                  <p><span className="font-medium">Message:</span> {submittedData.message}</p>
                </div>
              )}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
} 