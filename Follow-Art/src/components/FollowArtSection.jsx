import React, { useState } from 'react';

const SKILL_CATEGORIES = [
    {
        num: '01',
        title: 'Languages & Frameworks',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        color: 'var(--accent)',
        skills: ['Python', 'Node.js', 'TypeScript', 'FastAPI', 'ReactJS', 'C++', 'HTML/CSS', 'JavaScript'],
    },
    {
        num: '02',
        title: 'AI & Cloud',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4c3.31 0 6 2.69 6 6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6c0-3.31 2.69-6 6-6a4 4 0 0 1 4-4z" />
                <path d="M8 18v2m4-2v2m4-2v2" />
            </svg>
        ),
        color: 'var(--blue)',
        skills: ['Azure OpenAI', 'Azure AI Foundry', 'Cognitive Services', 'Copilot Studio', 'Azure Bot Service', 'RAG', 'YOLO', 'LLM Fine-Tuning'],
    },
    {
        num: '03',
        title: 'DevOps & Deployment',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        color: 'var(--purple)',
        skills: ['Azure Container Apps', 'Azure App Service', 'Container Registry', 'Docker', 'CI/CD Pipelines'],
    },
    {
        num: '04',
        title: 'Tools & Architecture',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        color: 'var(--teal)',
        skills: ['Power Automate', 'Canvas Apps', 'Vector Databases', 'RBAC', 'ReAct Agent', 'OpenCV', 'MySQL', 'GitHub API'],
    },
];

const FollowArtSection = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <section className="section skills-section" id="skills">
            <div className="skills-inner">
                <div className="skills-header">
                    <div className="skills-title reveal">
                        <h2>TECH<br />SKILLS</h2>
                    </div>
                    <p className="skills-desc reveal">
                        A diverse toolkit spanning <span className="uline">AI/ML engineering</span>,
                        full-stack development, and <span className="uline">cloud infrastructure</span>.
                    </p>
                </div>
                <div className="skills-grid">
                    {SKILL_CATEGORIES.map((cat, idx) => (
                        <div
                            className={`skill-card reveal ${expanded === idx ? 'skill-card--expanded' : ''}`}
                            key={cat.num}
                            onMouseEnter={() => setExpanded(idx)}
                            onMouseLeave={() => setExpanded(null)}
                            style={{ '--card-color': cat.color, animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-card-icon-wrap">
                                    {cat.icon}
                                </div>
                                <span className="skill-card-num">{cat.num}</span>
                            </div>
                            <h3 className="skill-card-title">{cat.title}</h3>
                            <div className="skill-card-tags">
                                {cat.skills.map((skill, i) => (
                                    <span
                                        key={skill}
                                        className="skill-tag"
                                        style={{ animationDelay: `${i * 0.04}s` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="skill-card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FollowArtSection;
