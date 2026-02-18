import React, { useState } from 'react';

const testimonials = [
    {
        quote: "I believe collaboration makes artistic practice richer and more fulfilling. While the myth of the lone genius still lingers, art relies on support, connection and diverse perspectives. In the end, it's about community, collectivity and visibility.",
        name: 'Irene Sánchez Gómez',
        role: 'Independent Curator',
        loc: 'Germany',
        flag: '🇩🇪',
        img: 'photo-1494790108377-be9c29b29330',
    },
    {
        quote: "I'm curious about what FOLLOW.ART is trying to build because I like to see people aiming to innovate in the current professional art landscape.",
        name: 'Farouk Alari',
        role: 'Multidisciplinary Artist and Creative Director',
        loc: 'USA',
        flag: '🇺🇸',
        img: 'photo-1507003211169-0a1dd7228f2d',
    },
    {
        quote: "I checked out the platform and besides its fantastic layout it seems very groundbreaking and useful!",
        name: 'Matina Charalando',
        role: 'Independent Event Curator',
        loc: 'Greece',
        flag: '🇬🇷',
        img: 'photo-1531746020798-e6953c6e8e04',
    },
    {
        quote: "Whether I'm an artist, a curator, or a collector — but only the curators. Two years in FOLLOW.ART is changing the game.",
        name: 'Marcus Webb',
        role: 'Gallery Director',
        loc: 'London',
        flag: '🇬🇧',
        img: 'photo-1500648767791-00dcc994a43e',
    },
];

const TestimonialsSection = () => {
    const [idx, setIdx] = useState(0);

    const handleNext = () => setIdx((p) => (p + 1) % testimonials.length);
    const handlePrev = () => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);

    const getCardClass = (i) => {
        const total = testimonials.length;
        let dist = (i - idx + total) % total;
        if (dist > total / 2) dist -= total;

        if (dist === 0) return 'testi-card-3d active';
        if (dist === -1 || dist === total - 1) return 'testi-card-3d prev';
        if (dist === 1) return 'testi-card-3d next';
        if (dist === -2 || dist === total - 2) return 'testi-card-3d far-prev';
        if (dist === 2) return 'testi-card-3d far-next';
        return 'testi-card-3d hidden';
    };

    return (
        <section className="section testimonials-section" id="testimonials">
            {/* SVG Title */}
            <div className="testimonials-header title">
                <h2 className="sr-only">Testimonials</h2>
                <div className="title-children-wrapper">
                    <svg className="section-9__title--desktop is-hidden:sm-down svg-fix" style={{ transform: 'scaleY(0.990262)', transformOrigin: 'center top' }} width="1420" height="465" viewBox="0 0 1420 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000" d="M1362.65 465c-37.04 0-56.65-23.896-56.65-67.813V302.25h46.3v91.063c0 12.27 3.81 19.374 10.35 19.374 7.08 0 10.34-7.104 10.34-19.374v-58.771c0-78.792-66.99-94.292-66.99-192.459V68.458C1306 23.896 1326.15 0 1363.74 0c38.67 0 58.27 23.896 56.1 68.458l-4.36 104.625h-46.3l4.9-101.395c.55-12.271-3.26-19.376-10.34-19.376-7.09 0-10.9 7.105-10.9 19.376v65.229c0 77.5 67 95.583 67 192.458v67.812c0 43.917-19.61 67.813-57.19 67.813" style={{ transform: 'scaleY(0.865687)' }} />
                        <path fill="#000" d="M1255.17 411.771H1297V465h-88V5h46.17z" style={{ transform: 'scaleY(0.93575)' }} />
                        <path fill="#000" d="m1150.89 465-5.98-151.143h-22.82L1116.11 465H1071l17.39-460h90.76L1196 465zm-27.17-205.029h19.56l-4.35-109.085-1.08-93.972h-8.7l-1.08 93.972z" style={{ transform: 'scaleY(0.757812)' }} />
                        <path fill="#000" d="M1011 465V5h47v460z" style={{ transform: 'scaleY(0.837875)' }} />
                        <path fill="#000" d="M854 465V5h69.818l21.818 406.771h7.637l-2.182-92.657-6-314.114H992v460h-69.818L896.545 58.229h-8.181l3.272 92.657L900.364 465z" style={{ transform: 'scaleY(1)' }} />
                        <path fill="#000" d="M777.5 465c-37.238 0-57.5-23.896-57.5-67.813V68.458C720 23.896 740.262 0 777.5 0S835 23.896 835 68.458v328.729C835 441.104 814.738 465 777.5 465m0-52.313c7.119 0 10.405-7.104 10.405-19.374V71.688c0-12.271-3.286-19.376-10.405-19.376s-10.952 7.105-10.952 19.376v321.625c0 12.27 3.833 19.374 10.952 19.374" style={{ transform: 'scaleY(0.924)' }} />
                        <path fill="#000" d="M522 465V5h75.857l9.823 398.229h7.64L622.96 5H701v460h-46.933l5.457-314.114 2.183-92.657h-8.186l-15.826 398.228h-52.936L568.933 58.229h-8.186l2.183 92.657L568.387 465z" style={{ transform: 'scaleY(0.734062)' }} />
                        <path fill="#000" d="M456 465V5h47v460z" style={{ transform: 'scaleY(0.814125)' }} />
                        <path fill="#000" d="M444 5v53.229h-27.273V465h-46.909V58.229H342V5z" style={{ transform: 'scaleY(0.982187)' }} />
                        <path fill="#000" d="M274.646 465C237.608 465 218 441.104 218 397.187V302.25h46.297v91.063c0 12.27 3.813 19.374 10.349 19.374 7.081 0 10.349-7.104 10.349-19.374v-58.771c0-78.792-66.995-94.292-66.995-192.459V68.458C218 23.896 238.153 0 275.735 0c38.672 0 58.28 23.896 56.101 68.458l-4.357 104.625h-46.297l4.902-101.395c.545-12.271-3.268-19.376-10.349-19.376s-10.893 7.105-10.893 19.376v65.229c0 77.5 66.994 95.583 66.994 192.458v67.812c0 43.917-19.608 67.813-57.19 67.813" style={{ transform: 'scaleY(0.72725)' }} />
                        <path fill="#000" d="M114 465V5h94v53.229h-47.547v143.914h42.082v53.228h-42.082v156.4H208V465z" style={{ transform: 'scaleY(0.882313)' }} />
                        <path fill="#000" d="M102 5v53.229H74.727V465H27.818V58.229H0V5z" style={{ transform: 'scaleY(0.790375)' }} />
                    </svg>
                    <svg className="img-full is-hidden:md-up svg-fix" style={{ transform: 'scaleY(0.990262)', transformOrigin: 'center top' }} xmlns="http://www.w3.org/2000/svg" width="350" height="354" fill="none" viewBox="0 0 350 354">
                        <path fill="#000" d="M305.427 154.146c-14.558 0-22.48-7.922-22.48-22.48V22.694C282.947 7.92 290.869 0 305.427 0s22.479 7.921 22.479 22.694v108.972c0 14.558-7.921 22.48-22.479 22.48Zm0-17.342c2.783 0 4.068-2.355 4.068-6.422V23.764c0-4.068-1.285-6.423-4.068-6.423-2.783 0-4.282 2.355-4.282 6.423v106.618c0 4.067 1.499 6.422 4.282 6.422Z" />
                        <path fill="#000" d="M205.177 152.005V2.141h29.758l3.854 129.739h2.997l2.998-129.74h30.615v149.865h-18.412l2.141-102.336.856-30.187h-3.211l-6.209 129.739h-20.767l-6.208-129.739h-3.212l.857 30.187 2.141 102.336h-18.198Z" />
                        <path fill="#000" d="M179.251 152.005V2.141h18.198v149.864h-18.198Z" />
                        <path fill="#000" d="M174.47 2.14v17.342h-10.705v132.523h-18.412V19.482h-10.918V2.141h40.035Z" />
                        <path fill="#000" d="M108.041 154.146c-14.558 0-22.266-7.922-22.266-22.48v-31.471h18.198v30.187c0 4.067 1.499 6.422 4.068 6.422 2.783 0 4.068-2.355 4.068-6.422v-19.483c0-26.119-26.334-31.257-26.334-63.799V22.694C85.775 7.92 93.697 0 108.47 0c15.201 0 22.908 7.921 22.051 22.694l-1.712 34.683H110.61l1.927-33.613c.214-4.068-1.285-6.423-4.068-6.423-2.783 0-4.282 2.355-4.282 6.423v21.623c0 25.691 26.333 31.686 26.333 63.8v22.479c0 14.558-7.707 22.48-22.479 22.48Z" />
                        <path fill="#000" d="M44.817 152.005V2.141h36.824v17.341H63.015v46.886H79.5V83.71H63.015v50.953h18.626v17.342H44.817Z" />
                        <path fill="#000" d="M40.035 2.14v17.342H29.331v132.523H10.919V19.482H0V2.141h40.035Z" />
                        <path fill="#000" d="M199.863 354.004c-14.295 0-21.863-9.456-21.863-26.833v-37.567h17.869v36.033c0 4.856 1.472 7.667 3.994 7.667 2.733 0 3.995-2.811 3.995-7.667v-23.255c0-31.178-25.858-37.311-25.858-76.156v-29.133c0-17.634 7.778-27.089 22.284-27.089 14.926 0 22.494 9.455 21.653 27.089l-1.682 41.4h-17.869l1.892-40.122c.21-4.856-1.261-7.667-3.994-7.667-2.733 0-4.205 2.811-4.205 7.667v25.811c0 30.666 25.858 37.822 25.858 76.155v26.834c0 17.377-7.568 26.833-22.074 26.833Z" />
                        <path fill="#000" d="M157.712 304.663h16.485v17.342h-34.682V172.141h18.197v132.522Z" />
                        <path fill="#000" d="m116.317 292.004-2.343-39.429h-8.948l-2.343 39.429H85l6.817-120h35.579l6.604 120h-17.683Zm-10.652-53.486h7.67l-1.705-28.457-.426-24.514h-3.408l-.426 24.514-1.705 28.457Z" />
                        <path fill="#000" d="M62 352.004v-180h18v180H62Z" />
                        <path fill="#000" d="M0 322.004v-150h27.32l8.538 132.643h2.988l-.854-30.215-2.348-102.428H54v150H26.68L16.648 189.361h-3.201l1.28 30.214 3.415 102.429H0Z" />
                    </svg>
                    <img
                        alt=" "
                        className="section-9__title-decoration icon-shake img-full"
                        src="/_ipx/_/images/landing/9.testimonials/speech-balloon.svg"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            </div>

            {/* 3D Carousel */}
            <div className="testi-carousel">
                <div className="testi-stage">
                    {testimonials.map((t, i) => (
                        <div key={i} className={getCardClass(i)} onClick={() => setIdx(i)}>
                            <p className="testi-quote-3d">"{t.quote}"</p>
                            <div className="testi-author-3d">
                                <img
                                    className="testi-avatar-3d"
                                    src={`https://images.unsplash.com/${t.img}?w=80&h=80&fit=crop&crop=face`}
                                    alt={t.name}
                                />
                                <div className="testi-info-3d">
                                    <h4>{t.name}</h4>
                                    <p>{t.role}</p>
                                    <p>{t.loc}</p>
                                </div>
                                <span className="testi-flag-3d">{t.flag}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testi-nav-3d">
                    <button className="testi-btn" onClick={handlePrev}>
                        <span className="circle-icon">←</span> Prev
                    </button>
                    <button className="testi-btn" onClick={handleNext}>
                        Next <span className="circle-icon">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
