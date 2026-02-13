import React from 'react';

const FloatingJoinButton = () => {
    return (
        <button className="floating-join" aria-label="Join Follow Art">
            <span className="floating-join-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M8 4L11 7L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className="floating-join-text">Join</span>
        </button>
    );
};

export default FloatingJoinButton;
