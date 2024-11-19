import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Feel free to reach out! I&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}