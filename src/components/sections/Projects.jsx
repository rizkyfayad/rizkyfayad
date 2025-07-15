import React, { memo } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const ComingSoonCard = () => (
  <div className="bg-card border border-purple-500/30 rounded-xl p-12 backdrop-blur-md flex flex-col items-center justify-center text-center max-w-md mx-auto animate-pulse">
    <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Coming Soon
    </h3>
    <p className="text-muted-foreground text-lg leading-relaxed">
      Exciting projects are on the way. Stay tuned!
    </p>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-background text-foreground py-12 sm:py-20 lg:py-28 px-4 sm:px-[5%] lg:px-[10%] overflow-hidden">
      <RevealOnScroll>
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <ComingSoonCard />
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default memo(Projects);
