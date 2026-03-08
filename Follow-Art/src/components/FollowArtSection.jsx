import React from 'react';

const SKILL_CATEGORIES = [
    {
        num: '01',
        title: 'Languages & Frameworks',
        front: 'Core Technologies',
        skills: ['Python', 'Node.js', 'TypeScript', 'FastAPI', 'ReactJS', 'C++', 'HTML/CSS', 'JavaScript'],
    },
    {
        num: '02',
        title: 'AI & Cloud',
        front: 'AI / ML / Cloud',
        skills: ['Azure OpenAI', 'Azure AI Foundry', 'Cognitive Services', 'Copilot Studio', 'Azure Bot Service', 'RAG', 'YOLO', 'LLM Fine-Tuning'],
    },
    {
        num: '03',
        title: 'DevOps & Deployment',
        front: 'DevOps & Cloud Infra',
        skills: ['Azure Container Apps', 'Azure App Service', 'Container Registry', 'Docker', 'CI/CD Pipelines'],
    },
    {
        num: '04',
        title: 'Tools & Concepts',
        front: 'Tools & Architecture',
        skills: ['Power Automate', 'Canvas Apps', 'Vector Databases', 'RBAC', 'ReAct Agent', 'OpenCV', 'MySQL', 'GitHub API'],
    },
];

const FollowArtSection = () => {
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
                        Hover to explore each category.
                    </p>
                </div>
                <div className="skills-grid">
                    {SKILL_CATEGORIES.map((cat) => (
                        <div className="flip-card reveal" key={cat.num}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <span className="flip-card-num">{cat.num}</span>
                                    <div className="flip-card-front-content">
                                        <span className="flip-card-label">{cat.front}</span>
                                        <div className="flip-card-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <span className="flip-card-num">{cat.num}</span>
                                    <h3 className="flip-card-back-title">{cat.title}</h3>
                                    <div className="flip-card-tags">
                                        {cat.skills.map((skill) => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FollowArtSection;
