import React, { useState } from 'react';

const testimonials = [
    {
        quote: "FOLLOW.ART gave me the visibility I never had on other platforms. Within weeks, curators from three continents reached out for collaborations.",
        name: 'Elina Vasquez',
        role: 'Mixed-media artist',
        loc: 'Barcelona',
        flag: '🇪🇸',
        img: 'photo-1544005313-94ddf0286df2',
    },
    {
        quote: "As a curator, I was drowning in emails and portfolios. The Connectory changed everything — I can find exactly the artists I need, fast.",
        name: 'James Thornton',
        role: 'Independent Curator',
        loc: 'London',
        flag: '🇬🇧',
        img: 'photo-1507003211169-0a1dd7228f2d',
    },
    {
        quote: "The Nexus Card is brilliant. One link that shows my full practice — portfolio, exhibitions, press, statement. No more PDFs and broken websites.",
        name: 'Anika Bauer',
        role: 'Sculptor',
        loc: 'Vienna',
        flag: '🇦🇹',
        img: 'photo-1438761681033-6461ffad8d80',
    },
];

const sCards = [
    { name: 'Mei Wong', role: 'Ceramic Artist', loc: 'Taipei', img: 'photo-1531746020798-e6953c6e8e04' },
    { name: 'Tobias Graf', role: 'Curator', loc: 'Munich', img: 'photo-1500648767791-00dcc994a43e' },
    { name: 'Priya Mehta', role: 'Painter', loc: 'Mumbai', img: 'photo-1494790108377-be9c29b29330' },
    { name: 'Lucas Ngo', role: 'Installation', loc: 'Montreal', img: 'photo-1472099645785-5658abf4ff4e' },
];

const TestimonialsSection = () => {
    const [idx, setIdx] = useState(0);
    const t = testimonials[idx];

    return (
        <section className="section testimonials-section" id="testimonials">
            <span className="testimonials-bg">TESTIMONIALS</span>
            <div className="testimonials-inner">
                <div>
                    <div className="testi-card">
                        <p className="testi-quote">"{t.quote}"</p>
                        <div className="testi-author">
                            <img className="testi-avatar" src={`https://images.unsplash.com/${t.img}?w=90&h=90&fit=crop&crop=face`} alt={t.name} />
                            <div className="testi-info">
                                <h4>{t.name}</h4>
                                <p>{t.role} • {t.loc}</p>
                            </div>
                            <span className="testi-flag">{t.flag}</span>
                        </div>
                    </div>
                    <div className="testi-nav">
                        <button onClick={() => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}>
                            <span className="circle-icon">←</span> Prev
                        </button>
                        <button onClick={() => setIdx((p) => (p + 1) % testimonials.length)}>
                            Next <span className="circle-icon">→</span>
                        </button>
                    </div>
                </div>
                <div className="scattered-wrap">
                    {sCards.map((c, i) => (
                        <div className="s-card" key={i}>
                            <img src={`https://images.unsplash.com/${c.img}?w=220&h=140&fit=crop&crop=face`} alt={c.name} />
                            <div className="s-card-info">
                                <h5>{c.name}</h5>
                                <p>{c.role} • {c.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
