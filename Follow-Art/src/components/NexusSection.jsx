import React from 'react';

const NexusSection = () => (
    <section className="section nexus-section" id="nexus">
        <div className="nexus-inner">
            <div className="nexus-left">
                <div className="nexus-video-wrap">
                    <span>▶</span>
                </div>
            </div>
            <div className="nexus-right">
                <div className="nexus-title">
                    <h2>
                        <span>Your </span>
                        <span>Nexus</span>
                    </h2>
                </div>
                <hr className="nexus-divider" />
                <p className="nexus-desc">
                    Join Nexus of Curators &amp; Artists, built on{' '}
                    <span className="uline">collaboration.</span>
                    <br />
                    No gatekeeping and competition.
                </p>
            </div>
        </div>
    </section>
);

export default NexusSection;
