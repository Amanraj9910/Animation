import React from 'react';

const FollowArtSection = () => (
    <section className="section followart-section" id="followart">
        <div className="followart-inner">
            <div className="followart-left">
                <div className="followart-title">
                    <h2>
                        FOLLOW.ART
                        <img src="/img/star.svg" className="followart-star" alt="" />
                    </h2>
                </div>
                <hr className="nexus-divider" style={{ borderColor: 'rgba(0,0,0,0.2)', margin: '24px 0' }} />
                <p className="followart-desc">
                    FOLLOW.ART is the <span className="uline">first</span> and only{' '}
                    <span className="uline">network</span> made for curators and artists,
                    combining tools for professional presentation, visibility, connection
                    and knowledge sharing.
                </p>
            </div>
            <div className="followart-right">
                <div className="followart-cross-bg">
                    <img src="/img/cross.svg" alt="" />
                </div>
                <div className="flip-cards">
                    {[
                        { n: 1, front: 'Professional\npresentation', back: 'Share your creative identity via the Nexus Card' },
                        { n: 2, front: 'Visibility', back: 'Get discovered easily and without algorithms' },
                        { n: 3, front: 'Connection', back: 'Build a network for collaborations with fellow creatives in the Connectory' },
                        { n: 4, front: 'Knowledge\nexchange', back: 'Give and get – support, skills, guidance, and good vibes' },
                    ].map((c) => (
                        <div className="flip-card" key={c.n}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <span className="flip-card-num">{c.n}</span>
                                    <span className="flip-card-label" style={{ whiteSpace: 'pre-line' }}>{c.front}</span>
                                </div>
                                <div className="flip-card-back">
                                    <span className="flip-card-num">{c.n}</span>
                                    <span className="flip-card-label">{c.back}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default FollowArtSection;
