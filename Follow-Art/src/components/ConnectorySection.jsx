import React from 'react';

const ConnectorySection = () => (
    <section className="connectory-section">
        <div className="connectory-bg">
            <span>THE</span>
            <span>CONNECT</span>
            <span>ORY</span>
        </div>

        <span className="connectory-the">The</span>

        <div className="connectory-shot">
            <div className="app-mock">
                {/* App header */}
                <div className="app-mock-header">
                    <span className="app-mock-header-logo">FOLLOW ART</span>
                    <div className="app-mock-nav">
                        <span>Connectory</span>
                        <span>Artworks & Projects</span>
                        <span>Community Board</span>
                        <span>Insights</span>
                    </div>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#C4929A', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
                </div>

                <div className="app-mock-body">
                    {/* Sidebar */}
                    <div className="app-mock-sidebar">
                        <div className="app-mock-tabs">
                            <span className="app-mock-tab active">Artists</span>
                            <span className="app-mock-tab inactive">Curators</span>
                        </div>
                        <div style={{ padding: '6px 8px', border: '1px solid #eee', borderRadius: 4, color: '#aaa', fontSize: 10, marginBottom: 10 }}>
                            🔍 Search by name
                        </div>
                        {['Country', 'City', 'Mediums', 'Themes & Topics', 'Years of Experience', 'Education', "Artwork's Price Range"].map((f, i) => (
                            <div className="app-mock-filter" key={i}>
                                {f} <span style={{ fontSize: 8 }}>›</span>
                            </div>
                        ))}
                    </div>

                    {/* Main content */}
                    <div className="app-mock-main">
                        <h2>The Connectory</h2>
                        <p className="count">1,199 Artists</p>
                        <div className="app-mock-cards">
                            {[
                                {
                                    name: 'Teona Todorel', role: 'Artist', loc: 'Italy, Rome', imgs: [
                                        'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=200&h=250&fit=crop',
                                        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&h=250&fit=crop',
                                    ]
                                },
                                {
                                    name: 'Erin J Coholan', role: 'Artist', loc: 'Canada, Toronto', imgs: [
                                        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=250&fit=crop',
                                        'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=200&h=250&fit=crop',
                                    ]
                                },
                            ].map((a, i) => (
                                <div className="app-mock-card" key={i}>
                                    <div className="app-mock-card-head">
                                        <div>
                                            <div className="app-mock-card-name">{a.name}</div>
                                            <div className="app-mock-card-meta">{a.role}<br />{a.loc}</div>
                                        </div>
                                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#ddd' }}></div>
                                    </div>
                                    <div className="app-mock-card-imgs">
                                        {a.imgs.map((img, j) => (
                                            <img key={j} src={img} alt={a.name} />
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
