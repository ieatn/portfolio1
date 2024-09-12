import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiFlask, SiTypescript, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'Flask', icon: SiFlask, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Git', icon: FaGit, color: 'text-red-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`text-5xl mb-4 ${skill.color}`}>
                <skill.icon />
              </div>
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
