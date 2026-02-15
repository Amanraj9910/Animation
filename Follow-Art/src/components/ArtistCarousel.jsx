import React from 'react';

const artists = [
    { name: 'Luna Kai', role: 'Artist', img: 'photo-1494790108377-be9c29b29330' },
    { name: 'Erik Holm', role: 'Curator', img: 'photo-1500648767791-00dcc994a43e' },
    { name: 'Miya Chen', role: 'Artist', img: 'photo-1534528741775-53994a69daeb' },
    { name: 'Jules Moreau', role: 'Artist', img: 'photo-1507003211169-0a1dd7228f2d' },
    { name: 'Ava Schmidt', role: 'Curator', img: 'photo-1438761681033-6461ffad8d80' },
    { name: 'Rio Nakamura', role: 'Artist', img: 'photo-1472099645785-5658abf4ff4e' },
    { name: 'Lena Bjork', role: 'Artist', img: 'photo-1544005313-94ddf0286df2' },
    { name: 'Omar Farah', role: 'Curator', img: 'photo-1506794778202-cad84cf45f1d' },
    { name: 'Zara Webb', role: 'Artist', img: 'photo-1531746020798-e6953c6e8e04' },
    { name: 'Paolo Venti', role: 'Artist', img: 'photo-1492562080023-ab3db95bfbce' },
];

const ArtistCarousel = () => (
    <section className="carousel-section" id="artists">
        <div className="carousel-strip">
            {/* Two identical groups for seamless loop */}
            {[0, 1].map((g) => (
                <div className="carousel-group" key={g}>
                    {artists.map((a, i) => (
                        <div className="carousel-card" key={`${g}-${i}`}>
                            <img src={`https://images.unsplash.com/${a.img}?w=250&h=250&fit=crop&crop=face`} alt={a.name} />
                            <div className="carousel-card-info">
                                <span className="carousel-card-name">{a.name}</span>
                                <span className="carousel-card-role">{a.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
);

export default ArtistCarousel;
