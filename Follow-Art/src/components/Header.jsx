import React from 'react';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <span className="header-logo-title">FOLLOW. ART</span>
            <span className="header-logo-sub">Nexus of Curators and Artists</span>
        </div>
        <nav className="header-nav">
            <a href="#nexus">About</a>
            <a href="#nexuscard">Nexus Card</a>
            <a href="#connectory">Community Board</a>
            <a href="#followart">Pricing</a>
            <a href="#testimonials">FAQ</a>
        </nav>
        <div className="header-actions">
            <a href="#">Login</a>
            <a href="#join">Join</a>
        </div>
    </header>
);

export default Header;
