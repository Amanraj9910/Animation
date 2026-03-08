import React from 'react';

const NexusSection = () => {
    return (
        <section className="section about-section" id="about">
            <div className="about-inner">
                <div className="about-left">
                    <div className="about-photo-container reveal">
                        <img src="/img/profile.jpg" alt="Aman Raj" className="about-photo" />
                        <div className="about-photo-accent"></div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-title reveal">
                        <h2>ABOUT<br />ME</h2>
                    </div>
                    <hr className="about-divider reveal" />
                    <p className="about-desc reveal">
                        I'm a <span className="uline">passionate AI Engineer</span> and Full Stack Developer based in India,
                        currently working as a Jr Consultant at Hosho Digitals. I specialize in building
                        enterprise <span className="uline">AI systems and agentic chatbots</span> using Azure OpenAI,
                        Azure AI Foundry, and Copilot Studio.
                    </p>
                    <p className="about-desc reveal" style={{ marginTop: '16px' }}>
                        With a strong foundation in Python, Node.js, TypeScript, and React, I build
                        production AI services containerized with Docker and deployed on Azure cloud.
                        My work focuses on bridging the gap between cutting-edge AI research and
                        practical business solutions.
                    </p>
                    <div className="about-stats reveal">
                        <div className="about-stat-item">
                            <span className="about-stat-number">3+</span>
                            <span className="about-stat-text">Professional Roles</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="about-stat-number">5</span>
                            <span className="about-stat-text">AI Projects Built</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="about-stat-number">60%</span>
                            <span className="about-stat-text">Faster Reviews</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="about-stat-number">80%</span>
                            <span className="about-stat-text">Faster Lookups</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NexusSection;
