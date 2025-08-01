import React, { useState, lazy, Suspense } from "react";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";

import Hero from "./pages/Hero/Hero";
// Lazy-loaded components
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Education = lazy(() => import("./pages/Education/Education"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      <Suspense fallback={<div>Loading...</div>}>
        {isOnePage ? (
          <>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
}
