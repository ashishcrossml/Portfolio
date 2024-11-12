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

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white bg-opacity-10 border-none text-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-200">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}