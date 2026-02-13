import React, { useState } from 'react';

const testimonials = [
    {
        quote: "I believe FOLLOW.ART is a bold initiative. A very needed one. I resonate with the idea that you must create a path that can be walked by many not only by few. I believe the idea that there is an art market and an art world that sometimes are two worlds apart. I follow the idea to create a path between them to dissipate the separation.",
        name: 'Teona Todorel',
        role: 'Visual Artist',
        country: 'Romania',
        flag: '🇷🇴',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    },
    {
        quote: "I find this project really useful, especially for getting an insight into different art scenes. It's nice to see that the platform facilitates the process of connecting with emerging curators and artists beyond my country.",
        name: 'Sabine Wrachtler',
        role: 'Art Historian, Curator',
        country: 'Austria',
        flag: '🇦🇹',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    },
    {
        quote: "Art is something that connects us all, and FOLLOW.ART makes that connection tangible. The platform brings artists and curators together in a way that feels organic, respectful, and truly collaborative.",
        name: 'Marco Bellini',
        role: 'Contemporary Curator',
        country: 'Italy',
        flag: '🇮🇹',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
];

const scatteredCards = [
    { img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&h=150&fit=crop', name: 'Sophie Werner', role: 'Art Historian, Curator' },
    { img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=150&fit=crop', name: 'Elena Rossi', role: 'Visual Artist' },
    { img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=200&h=150&fit=crop', name: 'David Kang', role: 'Installation Artist' },
    { img: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=200&h=150&fit=crop', name: 'Clara Johansson', role: 'Curator' },
];

const TestimonialsSection = () => {
    const [idx, setIdx] = useState(0);
    const cur = testimonials[idx];

    return (
        <section className="testimonials-section">
            <div className="testimonials-bg">TESTIMONIALS</div>

            <div className="testimonials-scribble">
                <svg width="90" height="55" viewBox="0 0 90 55" fill="none">
                    <ellipse cx="45" cy="27" rx="40" ry="22" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                    <ellipse cx="45" cy="27" rx="40" ry="22" stroke="white" strokeWidth="1" fill="none" transform="rotate(8 45 27)" />
                </svg>
            </div>

            <div className="testimonials-inner">
                <div>
                    <div className="testi-card" key={idx} style={{ animation: 'fadeSlide 0.35s ease' }}>
                        <p className="testi-quote">{cur.quote}</p>
                        <div className="testi-author">
                            <img className="testi-avatar" src={cur.avatar} alt={cur.name} />
                            <div className="testi-info">
                                <h4>{cur.name}</h4>
                                <p>{cur.role}</p>
                                <p>{cur.country}</p>
                            </div>
                            <span className="testi-flag">{cur.flag}</span>
                        </div>
                    </div>

                    <div className="testi-nav">
                        <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}>
                            <span className="circle-icon">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 1L3 5L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </span>
                            Prev
                        </button>
                        <button onClick={() => setIdx((idx + 1) % testimonials.length)}>
                            Next
                            <span className="circle-icon">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1L7 5L3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="scattered-wrap">
                    {scatteredCards.map((c, i) => (
                        <div className="s-card" key={i}>
                            <img src={c.img} alt={c.name} />
                            <div className="s-card-info">
                                <h5>{c.name}</h5>
                                <p>{c.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;
