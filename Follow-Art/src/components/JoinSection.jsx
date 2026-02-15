import React from 'react';

const JoinSection = () => (
    <section className="section join-section" id="join">
        <div className="join-content">
            <div className="join-left">
                <div className="join-big-text">
                    JOIN
                </div>
                <span className="join-script">Us</span>
                <div className="join-photos">
                    <img
                        className="join-photo"
                        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&h=250&fit=crop"
                        alt="Art 1"
                    />
                    <img
                        className="join-photo"
                        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=180&h=220&fit=crop"
                        alt="Art 2"
                    />
                </div>
            </div>
            <div className="join-right">
                <p className="join-cta">
                    Join our global community of contemporary curators and artists.{' '}
                    <span className="ulink">No gatekeepers</span>, no algorithms — just community,
                    visibility, and real opportunities.
                </p>
                <div className="join-arrow">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>
            </div>
        </div>
        <footer className="footer">
            <span>© 2024 FOLLOW.ART</span>
            <div className="footer-center">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="footer-right">
                <a href="#">Instagram</a>
                <span>·</span>
                <a href="#">Twitter</a>
            </div>
        </footer>
    </section>
);

export default JoinSection;
