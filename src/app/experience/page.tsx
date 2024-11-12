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
        <div key={index} className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
            <p className="text-gray-300 mb-4">{exp.company} | {exp.period}</p>
            <ul className="list-disc pl-5 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-200">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}