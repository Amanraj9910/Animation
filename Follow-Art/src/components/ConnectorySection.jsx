import React, { useState, useEffect, useCallback, useRef } from 'react';

const PROJECTS = [
    {
        id: 1,
        title: 'AI-Powered Recruitment Intelligence Platform',
        year: '2025',
        description: 'AI-driven hiring platform analyzing GitHub repos, scoring candidates via LLM evaluation with role-specific dashboards and multi-role RBAC.',
        impact: '60% faster reviews',
        tech: ['Node.js', 'TypeScript', 'Azure OpenAI', 'GitHub API', 'React', 'RBAC'],
        image: '/img/1-Recrutement.png',
        link: 'https://perfect-fit-crecc9byamcjcsar.centralindia-01.azurewebsites.net/',
        color: 'var(--accent)',
    },
    {
        id: 2,
        title: 'Autonomous AI Voice Task Agent',
        year: '2025',
        description: 'Voice-to-action AI pipeline converting speech to structured intents, orchestrating emails, meetings, and reminders autonomously.',
        impact: 'Zero manual effort',
        tech: ['Azure OpenAI', 'FastAPI', 'Speech-to-Text', 'TTS', 'Tool Calling'],
        image: '/img/2-Voice-agent.png',
        link: 'https://ashistanto-bhc0fpeugkd9fqft.eastus-01.azurewebsites.net/',
        color: 'var(--blue)',
    },
    {
        id: 3,
        title: 'Agentic MS Documentation Intelligence',
        year: '2025',
        description: 'Multi-agent ReAct architecture with master agent delegating to research agent via Microsoft Learn MCP for intelligent doc lookup.',
        impact: '80% faster lookups',
        tech: ['Azure OpenAI', 'FastAPI', 'Microsoft Learn MCP', 'ReAct Agent'],
        image: '/img/3-Microsoft learn.png',
        link: 'https://github.com/Amanraj9910/Microsoft-Expert-Agent',
        linkType: 'github',
        color: 'var(--purple)',
    },
    {
        id: 4,
        title: 'SLD Component Detection Platform',
        year: '2025',
        description: 'Fine-tuned YOLO detecting electrical symbols in Single Line Diagrams with interactive hover-based metadata extraction.',
        impact: 'Automated inspection',
        tech: ['YOLO', 'OpenCV', 'Python', 'Interactive Web UI'],
        image: '/img/4-SLD.png',
        link: 'https://sld-d5fhdrdxendcdndb.australiacentral-01.azurewebsites.net/',
        color: 'var(--teal)',
    },
    {
        id: 5,
        title: 'Document Intelligence RAG Chatbot',
        year: '2025',
        description: 'RAG pipeline processing documents into semantic vector chunks, enabling natural-language querying with tone-adaptive responses.',
        impact: 'Hours to seconds',
        tech: ['Azure OpenAI', 'Vector DB', 'Python', 'FastAPI', 'RAG'],
        image: '/img/5-Rag.png',
        link: 'https://pdf-intelligent-scanner-dpdwhqc8hch4heau.eastus-01.azurewebsites.net/',
        color: 'var(--blue)',
    },
];

const ConnectorySection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('next');
    const timerRef = useRef(null);
    const total = PROJECTS.length;

    const goTo = useCallback((index, dir) => {
        setDirection(dir || (index > current ? 'next' : 'prev'));
        setCurrent(index);
    }, [current]);

    const goNext = useCallback(() => {
        goTo((current + 1) % total, 'next');
    }, [current, total, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + total) % total, 'prev');
    }, [current, total, goTo]);

    // Auto-advance
    useEffect(() => {
        timerRef.current = setInterval(goNext, 5000);
        return () => clearInterval(timerRef.current);
    }, [goNext]);

    // Reset timer on manual navigation
    const handleNav = (fn) => {
        clearInterval(timerRef.current);
        fn();
        timerRef.current = setInterval(goNext, 5000);
    };

    const project = PROJECTS[current];

    return (
        <section className="section projects-section" id="projects">
            <div className="projects-inner">
                <div className="projects-header reveal">
                    <h2 className="projects-title">PROJECTS</h2>
                    <p className="projects-subtitle">
                        AI-powered applications built with modern architectures
                        and deployed on Azure cloud infrastructure.
                    </p>
                </div>

                {/* Carousel */}
                <div className="project-carousel reveal">
                    <div className="project-carousel-viewport">
                        <div
                            key={project.id}
                            className={`project-carousel-slide slide-${direction}`}
                            style={{ '--card-color': project.color }}
                        >
                            <div className="project-carousel-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-carousel-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-btn">
                                        {project.linkType === 'github' ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                View on GitHub
                                            </>
                                        ) : (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                                                View Live
                                            </>
                                        )}
                                    </a>
                                </div>
                            </div>
                            <div className="project-carousel-info">
                                <div className="project-carousel-meta">
                                    <span className="project-badge">{project.year}</span>
                                    <span className="project-impact-badge">⚡ {project.impact}</span>
                                </div>
                                <h3 className="project-carousel-card-title">{project.title}</h3>
                                <p className="project-carousel-desc">{project.description}</p>
                                <div className="project-tech-row">
                                    {project.tech.map(t => (
                                        <span key={t} className="project-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="project-carousel-controls">
                        <button className="carousel-arrow carousel-arrow--prev" onClick={() => handleNav(goPrev)} aria-label="Previous project">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>

                        <div className="carousel-dots">
                            {PROJECTS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
                                    onClick={() => handleNav(() => goTo(i))}
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button className="carousel-arrow carousel-arrow--next" onClick={() => handleNav(goNext)} aria-label="Next project">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    {/* Progress bar */}
                    <div className="carousel-progress">
                        <div className="carousel-progress-label">
                            <span>{String(current + 1).padStart(2, '0')}</span>
                            <span className="carousel-progress-sep">/</span>
                            <span>{String(total).padStart(2, '0')}</span>
                        </div>
                        <div className="carousel-progress-track">
                            <div
                                className="carousel-progress-fill"
                                style={{ width: `${((current + 1) / total) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectorySection;
