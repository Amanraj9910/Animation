import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import DirectorySection from './components/DirectorySection';
import ArtWorldSection from './components/ArtWorldSection';
import ConnectorySection from './components/ConnectorySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import FloatingJoinButton from './components/FloatingJoinButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // --- Lenis smooth scroll ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // --- GSAP Animations ---

    // Reveal elements
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    });

    // Hero: giant text parallax (moves up slower)
    gsap.to('.hero-giant-text', {
      y: -100,
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1.5 },
    });

    // Hero: cards parallax
    gsap.to('.hero-cards', {
      y: -60,
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 },
    });

    // Hero: individual card rotations on scroll
    gsap.utils.toArray('.artist-card').forEach((card, i) => {
      const rotations = [-15, -6, 8];
      gsap.to(card, {
        rotation: rotations[i] || 0,
        y: -30 - i * 15,
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1.5 },
      });
    });

    // Join: big text parallax
    gsap.to('.join-big-text', {
      y: -80,
      scrollTrigger: { trigger: '.join-section', start: 'top top', end: 'bottom top', scrub: 1.5 },
    });

    // Join: photos parallax
    gsap.to('.join-photos', {
      y: -100,
      scrollTrigger: { trigger: '.join-section', start: 'top top', end: 'bottom top', scrub: 1 },
    });

    // Directory: tilted image entrance
    gsap.fromTo('.directory-tilted',
      { y: 250, rotation: -14, opacity: 0 },
      {
        y: 0, rotation: -8, opacity: 1,
        scrollTrigger: { trigger: '.directory-section', start: 'top 60%', end: 'center center', scrub: 1 },
      }
    );

    // Directory: bg text horizontal scroll
    gsap.to('.directory-bg-text', {
      x: -120,
      scrollTrigger: { trigger: '.directory-section', start: 'top bottom', end: 'bottom top', scrub: 2 },
    });

    // Art World: heading parallax
    gsap.to('.artworld-heading', {
      x: -60,
      scrollTrigger: { trigger: '.artworld-section', start: 'top bottom', end: 'bottom top', scrub: 2 },
    });

    // Connectory: bg text parallax
    gsap.to('.connectory-bg', {
      x: 80,
      scrollTrigger: { trigger: '.connectory-section', start: 'top bottom', end: 'bottom top', scrub: 2 },
    });

    // Connectory: screenshot entrance
    gsap.fromTo('.connectory-shot',
      { y: 120, opacity: 0, scale: 0.92 },
      {
        y: 0, opacity: 1, scale: 1,
        scrollTrigger: { trigger: '.connectory-section', start: 'top 55%', end: 'center center', scrub: 1 },
      }
    );

    // Testimonials: bg text parallax
    gsap.to('.testimonials-bg', {
      x: -100,
      scrollTrigger: { trigger: '.testimonials-section', start: 'top bottom', end: 'bottom top', scrub: 2 },
    });

    // Scattered cards stagger in
    gsap.utils.toArray('.s-card').forEach((card, i) => {
      gsap.fromTo(card,
        { y: 80 + i * 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-section', start: 'top 55%', toggleActions: 'play none none reverse' },
          delay: i * 0.12,
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <JoinSection />
      <DirectorySection />
      <ArtWorldSection />
      <ConnectorySection />
      <TestimonialsSection />
      <Footer />
      <FloatingJoinButton />
    </div>
  );
}

export default App;
