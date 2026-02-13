import React from 'react';

const JoinSection = () => (
    <section className="join-section">
        <div className="join-content">
            {/* Left: Big "JOIN" + script "Us" + photos */}
            <div className="join-left">
                <div className="join-big-text">JOIN</div>
                <span className="join-script">Us</span>

                <div className="join-photos">
                    <img
                        className="join-photo"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=face"
                        alt="Artist"
                    />
                    <img
                        className="join-photo"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face"
                        alt="Artist"
                    />
                </div>
            </div>

            {/* Right: CTA text */}
            <div className="join-right">
                <p className="join-cta reveal">
                    Ready to take control of your
                    creative journey? <span className="ulink">Join now</span> and
                    let's shape the future of the art
                    world together!
                </p>

                <div className="join-arrow">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
                        <path d="M8 28H42M32 18L42 28L32 38" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>

        {/* Footer bar */}
        <div className="join-footer">
            <div>2026 © FOLLOW.ART</div>
            <div className="join-footer-center">
                <a href="#">Brand Kit</a>
                <a href="#">Buy Gift Card</a>
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="join-footer-right">
                Digital product development by Vide Infra
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" />
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </section>
);

export default JoinSection;
