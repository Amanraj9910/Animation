import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NexusSection from './components/NexusSection';
import FollowArtSection from './components/FollowArtSection';
import NexusCardSection from './components/NexusCardSection';
import ConnectorySection from './components/ConnectorySection';
import ArtistCarousel from './components/ArtistCarousel';
import TestimonialsSection from './components/TestimonialsSection';
import JoinSection from './components/JoinSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Reveal animations for each section
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      });
    });

    // Parallax on hero cards
    const heroCards = document.querySelectorAll('.artist-card');
    heroCards.forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 },
        y: -60 - i * 25, ease: 'none',
      });
    });

    // Parallax on hero bottom text
    gsap.to('.hero-bottom-text', {
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 },
      y: -40, ease: 'none',
    });

    // Connectory shot perspective
    gsap.fromTo('.connectory-shot', { y: 80, opacity: 0.3 }, {
      scrollTrigger: { trigger: '.connectory-section', start: 'top 70%', end: 'center center', scrub: 1 },
      y: 0, opacity: 1, ease: 'power2.out',
    });

    // Join big text parallax
    gsap.to('.join-big-text', {
      scrollTrigger: { trigger: '.join-section', start: 'top 80%', end: 'center center', scrub: 1 },
      y: -30, ease: 'none',
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <NexusSection />
      <FollowArtSection />
      <NexusCardSection />
      <ConnectorySection />
      <ArtistCarousel />
      <TestimonialsSection />
      <JoinSection />

      {/* Floating Join button */}
      <a className="floating-join" href="#join">
        <div className="floating-join-top">
          <span className="floating-join-icon">↗</span>
        </div>
        <span className="floating-join-text">Join</span>
      </a>
    </>
  );
}

export default App;
