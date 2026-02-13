import React from 'react';

const DirectorySection = () => (
    <section className="directory-section">
        <div className="directory-grid">
            <div className="directory-text reveal">
                A <span className="uline">dynamic directory</span> to
                find who you need and get found by those who matter.
            </div>
            <div className="directory-text reveal">
                Think of it as the Yellow Pages for curators and
                artists. No algorithms, no paywalls, no limits. It's an{' '}
                <span className="uline">open space</span> for organic,
                community-driven networking.
            </div>
        </div>

        {/* Tilted blue newspaper clipping */}
        <div className="directory-tilted">
            <div className="directory-tilted-inner">
                <div className="directory-tilted-blocks">
                    {['TESTI', 'MO', 'NI', 'ALS'].map((w, i) => (
                        <span className="directory-tilted-block" key={i}>{w}</span>
                    ))}
                </div>
            </div>
        </div>

        <div className="directory-bg-text">TESTIMONIALS</div>
    </section>
);

export default DirectorySection;
