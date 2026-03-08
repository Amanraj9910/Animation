import React, { useState } from 'react';

const PROJECTS = [
    {
        id: 1,
        title: 'AI-Powered Recruitment Intelligence Platform',
        year: '2025',
        description: 'An AI-driven hiring platform that analyzes GitHub repos, extracts tech stacks, scores candidates via LLM-based evaluation, and provides role-specific dashboards with multi-role RBAC.',
        impact: 'Reduced technical review time by 60% (30 min → 12 min/profile)',
        tech: ['Node.js', 'TypeScript', 'Azure OpenAI', 'GitHub API', 'React', 'RBAC'],
        image: '/img/1-Recrutement.png',
        link: 'https://perfect-fit-crecc9byamcjcsar.centralindia-01.azurewebsites.net/',
    },
    {
        id: 2,
        title: 'Autonomous AI Voice Task Agent',
        year: '2025',
        description: 'A voice-to-action AI pipeline that converts speech to structured intents and orchestrates tools to send emails, schedule meetings, and manage reminders autonomously.',
        impact: 'Eliminated manual effort for routine digital tasks via real-time voice-driven workflow orchestration',
        tech: ['Azure OpenAI', 'FastAPI', 'Speech-to-Text', 'TTS', 'Tool Calling', 'Outlook API'],
        image: '/img/2-Voice-agent.png',
        link: 'https://ashistanto-bhc0fpeugkd9fqft.eastus-01.azurewebsites.net/',
    },
    {
        id: 3,
        title: 'Agentic MS Documentation Intelligence Chatbot',
        year: '2025',
        description: 'Multi-agent ReAct architecture (Analyze → Retrieve → Validate → Answer) with a master agent delegating to a research agent via Microsoft Learn MCP.',
        impact: 'Reduced documentation lookup time by 80% (25 min → under 5 min)',
        tech: ['Azure OpenAI', 'FastAPI', 'Microsoft Learn MCP', 'ReAct Agent'],
        image: '/img/3-Microsoft learn.png',
        link: 'https://github.com/Amanraj9910/Microsoft-Expert-Agent',
        linkType: 'github',
    },
    {
        id: 4,
        title: 'SLD Component Detection Platform',
        year: '2025',
        description: 'Fine-tuned YOLO to detect electrical symbols in Single Line Diagrams with high precision. Built interactive UI for hover-based metadata and component detail extraction.',
        impact: 'Automated manual SLD inspection, significantly reducing engineering analysis time',
        tech: ['YOLO (Fine-Tuned)', 'OpenCV', 'Python', 'Interactive Web UI'],
        image: '/img/4-SLD.png',
        link: 'https://sld-d5fhdrdxendcdndb.australiacentral-01.azurewebsites.net/',
    },
    {
        id: 5,
        title: 'Document Intelligence RAG Chatbot',
        year: '2025',
        description: 'A RAG pipeline that processes uploaded documents into semantic vector chunks, enabling natural-language querying, summaries, and tone-adaptive responses.',
        impact: 'Reduced document information retrieval from hours to seconds',
        tech: ['Azure OpenAI', 'Vector DB', 'Python', 'FastAPI', 'RAG Architecture'],
        image: '/img/5-Rag.png',
        link: 'https://pdf-intelligent-scanner-dpdwhqc8hch4heau.eastus-01.azurewebsites.net/',
    },
];

const ConnectorySection = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="section projects-section" id="projects">
            <div className="projects-inner">
                <div className="projects-header reveal">
                    <h2 className="projects-title">PROJECTS</h2>
                    <p className="projects-subtitle">
                        A collection of AI-powered applications built with modern architectures
                        and deployed on Azure cloud infrastructure.
                    </p>
                </div>
                <div className="projects-grid">
                    {PROJECTS.map((project) => (
                        <div
                            className={`project-card reveal ${activeProject === project.id ? 'project-card--active' : ''}`}
                            key={project.id}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="project-card-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-card-overlay">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-link"
                                    >
                                        {project.linkType === 'github' ? (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                View on GitHub
                                            </>
                                        ) : (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                                                View Live Demo
                                            </>
                                        )}
                                    </a>
                                </div>
                            </div>
                            <div className="project-card-body">
                                <div className="project-card-top">
                                    <span className="project-card-year">{project.year}</span>
                                </div>
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-desc">{project.description}</p>
                                <div className="project-card-impact">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                    <span>{project.impact}</span>
                                </div>
                                <div className="project-card-tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-pill tech-pill--project">{t}</span>
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

export default ConnectorySection;
