import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="py-20 flex items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">A passionate software engineer specializing in [Your Specialties]</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Download CV
        </button>
      </div>
      <div className="flex-1">
        <Image
          src="/profile-picture.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
