import React, { useRef, useEffect } from "react";
import ScrollVelocity from "../ScrollVelocity";
import StatusBar from "../StatusBar";

const ScrollVelocityPage = () => {
  const containerRef = useRef(null);
  const velocity = 80;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
    >
      <StatusBar />
      <main className="flex flex-col items-center">
        <ScrollVelocity
          texts={[
            'FRONTEND DEVELOPER - TECH ENTHUSIAST - UI/UX DESIGNER',
            'FRONTEND DEVELOPER - TECH ENTHUSIAST - UI/UX DESIGNER'
          ]}
          velocity={velocity}
          className="custom-scroll-text text-black dark:text-white text-9xl"
          scrollContainerRef={containerRef}
          numCopies={100}
        />
        <div className="mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </main>
    </div>
  );
};

export default ScrollVelocityPage;
