import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Hi there! I'm Dennis Zhang, a passionate web developer with a keen eye for creating 
            engaging and user-friendly digital experiences. My journey in web development started 
            with a curiosity for how things work on the internet, and it has since grown into a 
            full-fledged career.
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            I specialize in front-end development, with expertise in technologies like React, 
            Next.js, and TypeScript. I'm also well-versed in back-end technologies and enjoy 
            working on full-stack projects. My goal is to build web applications that not only 
            look great but also provide seamless functionality and performance.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new web technologies, contributing to 
            open-source projects, or sharing my knowledge through blog posts and community events. 
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
