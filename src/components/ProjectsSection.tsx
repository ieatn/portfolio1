import Image from 'next/image';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "/project1.jpg",
    link: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "/project2.jpg",
    link: "https://project2.com"
  },
  // Add more projects as needed
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
