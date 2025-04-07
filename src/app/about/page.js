"use client";

import React, { useState, useRef, useEffect } from "react";
import HeroSection from "./HeroSection";
import BlogInfoSection from "./BlogInfoSection";
import AboutSection from "./AboutSection";
import ContentSection from "./ContentSection";
import SocialSection from "./SocialSection";
import FinalSection from "./FinalSection";

const sections = [
  HeroSection,
  BlogInfoSection,
  AboutSection,
  ContentSection,
  SocialSection,
  FinalSection,
];

export default function About() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = sections.length;

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; 

    return () => {
      document.body.style.overflow = originalOverflow; 
    };
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const next = currentSection + direction;

    if (next >= 0 && next < totalSections) {
      setCurrentSection(next);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 100);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection]);

  const CurrentComponent = sections[currentSection];

  return (
    <div ref={containerRef} className="fullPageContainer">
      <CurrentComponent />
    </div>
  );
}
