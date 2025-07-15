"use client";
import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Saat elemen terlihat, aktifkan animasi
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Saat elemen keluar dari layar, reset animasi
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};
