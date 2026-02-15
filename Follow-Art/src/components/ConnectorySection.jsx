import React from 'react';

const ConnectorySection = () => (
    <section className="section connectory-section" id="connectory">
        <div className="connectory-bg">
            <span>THE</span>
            <span>CONNECTORY</span>
        </div>

        <span className="connectory-the">The</span>

        <div className="connectory-shot">
            <div className="app-mock">
                <div className="app-mock-header">
                    <span className="app-mock-header-logo">FOLLOW.ART</span>
                    <nav className="app-mock-nav">
                        <span>Nexus Card</span>
                        <span>Connectory</span>
                        <span>Community</span>
                        <span>Feed</span>
                    </nav>
                </div>
                <div className="app-mock-body">
                    <div className="app-mock-sidebar">
                        <div className="app-mock-tabs">
                            <span className="app-mock-tab active">All</span>
                            <span className="app-mock-tab inactive">Artists</span>
                            <span className="app-mock-tab inactive">Curators</span>
                        </div>
                        <div className="app-mock-filter"><span>Country</span><span>↓</span></div>
                        <div className="app-mock-filter"><span>Role</span><span>↓</span></div>
                        <div className="app-mock-filter"><span>Medium</span><span>↓</span></div>
                        <div className="app-mock-filter"><span>Status</span><span>↓</span></div>
                    </div>
                    <div className="app-mock-main">
                        <h2>Connectory</h2>
                        <p className="count">423 creatives</p>
                        <div className="app-mock-cards">
                            {[
                                { name: 'Anna Petrova', loc: 'Berlin, DE', imgs: ['photo-1541961017774-22349e4a1262', 'photo-1578301978693-85fa9c0320b9'] },
                                { name: 'Marcus Cole', loc: 'London, UK', imgs: ['photo-1579783902614-a3fb3927b6a5', 'photo-1547891654-e66ed7ebb968'] },
                                { name: 'Yuki Tanaka', loc: 'Tokyo, JP', imgs: ['photo-1549490349-8643362247b5', 'photo-1482160549825-59d1b23cb208'] },
                                { name: 'Sofia Reis', loc: 'Lisbon, PT', imgs: ['photo-1513364776144-60967b0f800f', 'photo-1544967082-d9d25d867d66'] },
                            ].map((c, i) => (
                                <div className="app-mock-card" key={i}>
                                    <div className="app-mock-card-head">
                                        <div>
                                            <div className="app-mock-card-name">{c.name}</div>
                                            <div className="app-mock-card-meta">{c.loc}</div>
                                        </div>
                                    </div>
                                    <div className="app-mock-card-imgs">
                                        {c.imgs.map((img, j) => (
                                            <img key={j} src={`https://images.unsplash.com/${img}?w=200&h=120&fit=crop`} alt="" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ConnectorySection;
