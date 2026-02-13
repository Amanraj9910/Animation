import React from 'react';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <span className="header-logo-title">FOLLOW ART</span>
            <span className="header-logo-sub">Nexus of Curators and Artists</span>
        </div>

        <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#nexus">Nexus Card</a>
            <a href="#community">Community Board</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
            <a href="#login">Login</a>
            <a href="#join">Join</a>
        </div>
    </header>
);

export default Header;
