import React, { useState, useEffect, useRef } from "react";
import ScrollVelocity from "./ScrollVelocity";

const ScrollVelocityPage = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Loading location...");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
      },
      () => {
        setLocation("Location permission denied");
      }
    );
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
      <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center bg-background text-foreground overflow-x-hidden">
        <div className="absolute top-4 left-4 text-sm font-mono">{location}</div>
        <div className="absolute top-4 right-16 text-sm font-mono">{formattedTime}</div>
        <ScrollVelocity
          texts={["Frontend Developer", "Backend Developer"]}
          className="text-6xl font-bold tracking-tight"
          numCopies={4}
          velocity={50}
          damping={50}
          stiffness={100}
          scrollerStyle={{ willChange: "transform" }}
          scrollContainerRef={containerRef}
        />
      </div>
  );
};

export default ScrollVelocityPage;
