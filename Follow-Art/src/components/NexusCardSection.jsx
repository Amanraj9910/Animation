import React, { useState } from 'react';

const EXPERIENCES = [
    {
        role: 'Jr Consultant',
        company: 'Hosho Digitals',
        location: 'Indore, Madhya Pradesh',
        period: 'July 2025 — Present',
        type: 'current',
        points: [
            'Design and develop enterprise AI systems and agentic chatbots using Azure OpenAI, Azure AI Foundry, and Copilot Studio',
            'Build multi-step reasoning workflows with tool integration for business automation',
            'Build and deploy production AI services using FastAPI, containerized with Docker and hosted on Azure Container Apps and App Service',
        ],
        tech: ['Azure OpenAI', 'AI Foundry', 'Copilot Studio', 'FastAPI', 'Docker'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
        ),
        color: 'var(--accent)',
    },
    {
        role: 'Junior Consultant Intern',
        company: 'Hosho Digitals',
        location: 'Indore, Madhya Pradesh',
        period: 'Jan 2025 — June 2025',
        type: 'past',
        points: [
            'Delivered low-code solutions (Canvas Apps, Model-Driven Apps, Power Automate) reducing client delivery cycles',
            'Built AI chatbots using Microsoft Copilot Studio, automating repetitive workflows and enhancing customer experience',
        ],
        tech: ['Canvas Apps', 'Power Automate', 'Copilot Studio'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        color: 'var(--blue)',
    },
    {
        role: 'Graphic Designer Intern',
        company: 'Pankhuri',
        location: 'Jhansi, Uttar Pradesh',
        period: 'June 2023 — Aug 2023',
        type: 'past',
        points: [
            'Designed high-performing digital content using Adobe Illustrator & Canva',
            'Boosted engagement by 30%, CTR by 25%, and social media reach by 25%',
        ],
        tech: ['Adobe Illustrator', 'Canva', 'Digital Marketing'],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
            </svg>
        ),
        color: 'var(--purple)',
    },
];

const NexusCardSection = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="section experience-section" id="experience">
            <div className="experience-inner">
                <div className="experience-header reveal">
                    <h2 className="experience-title">EXPERIENCE</h2>
                    <p className="experience-subtitle">
                        Professional journey across <span className="uline">AI engineering</span>,
                        cloud development, and <span className="uline">creative design</span>.
                    </p>
                </div>

                <div className="experience-layout">
                    {/* Tab Navigation */}
                    <div className="experience-tabs reveal">
                        {EXPERIENCES.map((exp, i) => (
                            <button
                                key={i}
                                className={`experience-tab ${i === activeIdx ? 'experience-tab--active' : ''}`}
                                onClick={() => setActiveIdx(i)}
                                style={{ '--tab-color': exp.color }}
                            >
                                <div className="experience-tab-icon">{exp.icon}</div>
                                <div className="experience-tab-info">
                                    <span className="experience-tab-role">{exp.role}</span>
                                    <span className="experience-tab-company">{exp.company}</span>
                                </div>
                                {exp.type === 'current' && <span className="experience-tab-live">CURRENT</span>}
                            </button>
                        ))}
                    </div>

                    {/* Detail Panel */}
                    <div className="experience-detail reveal" key={activeIdx}>
                        <div className="experience-detail-header">
                            <div>
                                <h3 className="experience-detail-role">{EXPERIENCES[activeIdx].role}</h3>
                                <div className="experience-detail-company">
                                    <span className="experience-detail-company-name">{EXPERIENCES[activeIdx].company}</span>
                                    <span className="experience-detail-sep">·</span>
                                    <span className="experience-detail-location">{EXPERIENCES[activeIdx].location}</span>
                                </div>
                            </div>
                            <div className="experience-detail-period-badge" style={{ '--tab-color': EXPERIENCES[activeIdx].color }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                {EXPERIENCES[activeIdx].period}
                            </div>
                        </div>

                        <div className="experience-detail-divider" style={{ '--tab-color': EXPERIENCES[activeIdx].color }}></div>

                        <ul className="experience-detail-points">
                            {EXPERIENCES[activeIdx].points.map((point, j) => (
                                <li key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                                    <span className="experience-point-icon" style={{ color: EXPERIENCES[activeIdx].color }}>▹</span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="experience-detail-tech">
                            {EXPERIENCES[activeIdx].tech.map((t) => (
                                <span key={t} className="experience-tech-chip" style={{ '--tab-color': EXPERIENCES[activeIdx].color }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NexusCardSection;
