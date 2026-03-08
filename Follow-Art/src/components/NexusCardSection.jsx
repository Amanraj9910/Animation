import React from 'react';

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
    },
];

const NexusCardSection = () => {
    return (
        <section className="section experience-section" id="experience">
            <div className="experience-inner">
                <div className="experience-header reveal">
                    <h2 className="experience-title">EXPERIENCE</h2>
                </div>
                <div className="experience-timeline">
                    {EXPERIENCES.map((exp, i) => (
                        <div className={`experience-card reveal ${exp.type === 'current' ? 'experience-card--current' : ''}`} key={i}>
                            <div className="experience-card-dot">
                                <div className={`dot-inner ${exp.type === 'current' ? 'dot-inner--pulse' : ''}`}></div>
                            </div>
                            <div className="experience-card-content">
                                <div className="experience-card-header">
                                    <div>
                                        <h3 className="experience-card-role">{exp.role}</h3>
                                        <div className="experience-card-company">{exp.company}</div>
                                    </div>
                                    <div className="experience-card-meta">
                                        <span className="experience-card-period">{exp.period}</span>
                                        <span className="experience-card-location">{exp.location}</span>
                                    </div>
                                </div>
                                <ul className="experience-card-points">
                                    {exp.points.map((point, j) => (
                                        <li key={j}>{point}</li>
                                    ))}
                                </ul>
                                <div className="experience-card-tech">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="tech-pill">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NexusCardSection;
