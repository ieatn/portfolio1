import dynamic from 'next/dynamic';
import IntroSection from "../components/IntroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

const AnimatedSection = dynamic(() => import('../components/AnimatedSection'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <main className="container mx-auto px-4 py-8 space-y-16">
        <AnimatedSection initialDelay={0} animateOnce={true}>
          <IntroSection />
        </AnimatedSection>
        <AnimatedSection initialDelay={0.2}>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection initialDelay={0.4}>
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection initialDelay={0.6}>
          <ContactSection />
        </AnimatedSection>
      </main>
    </div>
  );
}
