import React from 'react';

const photos = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=260&fit=crop',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=260&fit=crop',
];

const ArtWorldSection = () => (
    <section className="artworld-section">
        <div className="artworld-heading">
            <span className="artworld-art">ART</span>
            <span className="artworld-the">the</span>
            <span className="artworld-world">WORLD</span>
        </div>

        <div className="artworld-body">
            <div className="artworld-text reveal">
                The Art World wasn't made for us —
                we're <span className="uline">building our own</span>.
                No hierarchies. No algorithms. Just curators
                and artists connecting and growing together.
            </div>
        </div>

        <div className="artworld-strip">
            <div className="artworld-strip-inner">
                {[...photos, ...photos].map((src, i) => (
                    <img key={i} src={src} alt="Artist" loading="lazy" />
                ))}
            </div>
        </div>
    </section>
);

export default ArtWorldSection;
