'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await emailjs.send(
        'service_wfqgrbn',    // Your EmailJS service ID
        'template_78l1obp',   // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ashish.emailjs@gmail.com',
        },
        'GONrWpFNQUBn3y03G'  // Your public key (already in emailjs.js)
      )

      if (result.status === 200) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
      console.error('Email error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card className="bg-white bg-opacity-10 border-none text-white">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          
          <Button 
            type="submit" 
            size="lg" 
            variant="secondary" 
            className="w-full"
            disabled={loading}
          >
            <Mail className="mr-2 h-5 w-5" />
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
          
          {status && (
            <div className="mt-4">
              <p className={`text-center ${
                status.includes('success') ? 'text-green-400' : 'text-red-400'
              } mb-4`}>
                {status}
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
} 