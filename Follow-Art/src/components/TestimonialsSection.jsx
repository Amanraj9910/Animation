import React from 'react';

const ACHIEVEMENTS = [
    {
        icon: '🏆',
        title: 'Shark Tank JEC',
        subtitle: 'Startup Pitching Competition — May 2023',
        desc: 'Won 1st place among 40+ teams, recognized for an innovative idea and compelling entrepreneurial pitch.',
        highlight: '1st Place',
    },
    {
        icon: '🎯',
        title: 'C-Cube Secretary',
        subtitle: 'Jabalpur Engineering College — 2023–2024',
        desc: 'Managed club events as Secretary & Overall Coordinator, strengthening organizational, leadership, and cross-team communication skills.',
        highlight: 'Leadership',
    },
];

const METRICS = [
    { value: '60%', label: 'Faster Technical Reviews', desc: 'AI Recruitment Platform' },
    { value: '80%', label: 'Faster Doc Lookups', desc: 'MS Documentation Chatbot' },
    { value: '30%', label: 'Engagement Boost', desc: 'Pankhuri Design Work' },
    { value: '25%', label: 'CTR Improvement', desc: 'Digital Content Design' },
];

const TestimonialsSection = () => {
    return (
        <section className="section achievements-section" id="achievements">
            <div className="achievements-inner">
                <div className="achievements-header reveal">
                    <h2 className="achievements-title">ACHIEVEMENTS</h2>
                </div>

                {/* Metrics Strip */}
                <div className="metrics-strip reveal">
                    {METRICS.map((m, i) => (
                        <div className="metric-item" key={i}>
                            <span className="metric-value">{m.value}</span>
                            <span className="metric-label">{m.label}</span>
                            <span className="metric-desc">{m.desc}</span>
                        </div>
                    ))}
                </div>

                {/* Achievement Cards */}
                <div className="achievements-cards">
                    {ACHIEVEMENTS.map((a, i) => (
                        <div className="achievement-card reveal" key={i}>
                            <div className="achievement-card-icon">{a.icon}</div>
                            <div className="achievement-card-content">
                                <div className="achievement-card-highlight">{a.highlight}</div>
                                <h3 className="achievement-card-title">{a.title}</h3>
                                <div className="achievement-card-subtitle">{a.subtitle}</div>
                                <p className="achievement-card-desc">{a.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
