import React, { memo } from 'react';
import { Code, Database, Wind, Palette } from 'lucide-react';
import ProfileCard from '../ProfileCard/ProfileCard';
import { RevealOnScroll } from '../RevealOnScroll';

// Logo mapping untuk mencocokkan nama skill dengan file logo
const LOGO_MAPPING = {
  "React": "react.svg",
  "Next.js": "nextjs.png",
  "JavaScript": "javascript.svg",
  "HTML5": "html5.svg",
  "TailwindCSS": "tailwindcss-tailwind-css-logo-blue-wave-symbol-design-1.png",
  "Framer Motion": "framer-motion.svg",
  "GitHub": "25231.png",
  "VS Code": "visual-studio-code-1.svg",
  "Figma": "Figma-logo.svg.png",
  "MySQL": "images.png",
  "Laravel": "Laravel.svg.png",
  "Git": "Git_icon.svg.png",
};

// Constants
const SKILLS = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    items: ["React", "Next.js", "JavaScript", "HTML5"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-green-400" />,
    color: "green",
    items: ["MySQL","Laravel"]
  },
  {
    category: "Styling",
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    color: "pink",
    items: ["TailwindCSS", "Framer Motion"]
  },
  {
    category: "Tools",
    icon: <Wind className="w-6 h-6 text-yellow-400" />,
    color: "yellow",
    items: ["Git", "GitHub", "VS Code", "Figma"]
  }
];

// Memoized Components
const SectionTitle = memo(() => (
  <h2
    className="text-4xl sm:text-5xl font-bold tracking-tight text-center"
  >
    <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
      About Me
    </span>
  </h2>
));

const AboutText = memo(() => (
  <p
    className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto text-center"
  >
    Fresh Graduate yang memiliki ketertarikan dalam pengembangan web, terutama di bidang Front End. Saya memiliki pengalaman dalam menggunakan berbagai teknologi seperti React, Next.js, dan TailwindCSS.
  </p>
));

const SkillCard = memo(({ skill, index }) => {
  return (
    <div
      className={`bg-card border border-border rounded-xl p-8 backdrop-blur-sm transition-all duration-400 hover:border-${skill.color}-500/70 hover:-translate-y-3 hover:shadow-lg hover:shadow-${skill.color}-400/30 h-full flex flex-col`}
      role="region"
      aria-labelledby={`skill-category-${index}`}
    >
      <div className="flex items-center gap-4 mb-5">
        {skill.icon}
        <h3 id={`skill-category-${index}`} className={`text-2xl font-semibold text-${skill.color}-600 dark:text-${skill.color}-300`}>{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-start items-start">
        {skill.items.map((item, index) => {
          const logoFile = LOGO_MAPPING[item];
          return (
            <span key={index} className={`text-sm bg-${skill.color}-100/90 dark:bg-${skill.color}-500/20 text-${skill.color}-800 dark:text-${skill.color}-300 py-2 px-4 rounded-full flex items-center gap-3 shadow-sm min-w-[90px] justify-center`}>
              {logoFile ? (
                <img 
                  src={`/assets/logos/${logoFile}`} 
                  alt={item} 
                  className="w-5 h-5"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-5 h-5 bg-gray-400 rounded-full flex-shrink-0"></div>
              )}
              <span className="text-xs font-medium">{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
});

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-background text-foreground py-12 sm:py-20 lg:py-28 px-4 sm:px-[5%] lg:px-[10%] overflow-hidden"
    >
      <RevealOnScroll>
        <div className="container mx-auto max-w-7xl">
          <SectionTitle />
          <AboutText />
          <div className="mt-12 sm:mt-16 lg:mt-20">
            {/* Mobile Layout - Stack vertically */}
            <div className="block lg:hidden space-y-12">
              {/* Skills Grid for Mobile */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:gap-8">
                {SKILLS.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
              
               <div className="flex justify-center items-center px-4">
                <div className="w-full max-w-sm mx-auto">
                  <ProfileCard
                    name="Rizky Fayad"
                    title="Front End Developer"
                    contactText="Contact Me"
                    avatarUrl="/assets/fayad.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
              {/* Skills Grid for Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
              
              {/* ProfileCard for Desktop - with proper sizing */}
              <div className="flex justify-center items-start pt-8">
                <div className="w-full max-w-md">
                  <ProfileCard
                    name="Rizky Fayad"
                    title="Front End Developer"
                    contactText="Contact Me"
                    avatarUrl="/assets/fayad.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

