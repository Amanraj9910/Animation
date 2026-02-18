import React, { useRef, useEffect } from 'react';
import useSvgHoverStretch from '../hooks/useSvgHoverStretch';

const JOIN_BASE_SCALES = [0.702, 0.869, 0.765, 0.986];

// Trail images — using Unsplash art photos as stand-ins for the original trail PNGs
const TRAIL_IMGS = [
    'photo-1494790108377-be9c29b29330',
    'photo-1500648767791-00dcc994a43e',
    'photo-1534528741775-53994a69daeb',
    'photo-1507003211169-0a1dd7228f2d',
    'photo-1438761681033-6461ffad8d80',
    'photo-1472099645785-5658abf4ff4e',
    'photo-1544005313-94ddf0286df2',
    'photo-1506794778202-cad84cf45f1d',
    'photo-1531746020798-e6953c6e8e04',
    'photo-1492562080023-ab3db95bfbce',
    'photo-1494790108377-be9c29b29330',
    'photo-1500648767791-00dcc994a43e',
    'photo-1534528741775-53994a69daeb',
    'photo-1507003211169-0a1dd7228f2d',
    'photo-1438761681033-6461ffad8d80',
    'photo-1472099645785-5658abf4ff4e',
];

const TRAIL_SIZE = 160; // px
const TRAIL_COUNT = 16;
const TRAIL_DELAY = 120; // ms between each image appearing

const JoinSection = () => {
    const trailRef = useRef(null);
    const svgTitleRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const lastPos = useRef({ x: 0, y: 0 });
    const imgIndex = useRef(0);
    const lastTime = useRef(0);

    useSvgHoverStretch(svgTitleRef, {
        baseScales: JOIN_BASE_SCALES,
        selector: 'path[data-char]',
    });

    useEffect(() => {
        const section = trailRef.current;
        if (!section) return;

        const imgs = section.querySelectorAll('.trail-photo');

        const onMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };

            const now = Date.now();
            const dx = mousePos.current.x - lastPos.current.x;
            const dy = mousePos.current.y - lastPos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 40 && now - lastTime.current > TRAIL_DELAY) {
                lastTime.current = now;
                lastPos.current = { ...mousePos.current };

                const img = imgs[imgIndex.current % TRAIL_COUNT];
                imgIndex.current++;

                img.style.left = `${mousePos.current.x - TRAIL_SIZE / 2}px`;
                img.style.top = `${mousePos.current.y - TRAIL_SIZE / 2}px`;
                img.style.zIndex = imgIndex.current;
                img.classList.add('trail-photo--visible');

                setTimeout(() => {
                    img.classList.remove('trail-photo--visible');
                }, 700);
            }
        };

        section.addEventListener('mousemove', onMouseMove);
        return () => section.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <section className="section join-section" id="join">
            <div className="join-content">

                {/* Left col — SVG title + image trail */}
                <div className="join-left">
                    <div className="join-title title" ref={trailRef}>
                        <h2 className="sr-only">Join Us</h2>
                        <div className="title-children-wrapper" ref={svgTitleRef}>
                            {/* Desktop SVG */}
                            <svg
                                className="section-10__title--desktop img-full is-hidden:sm-down svg-fix"
                                style={{ transform: 'scaleY(0.986214)', transformOrigin: 'center top', overflow: 'visible' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="680" height="580" fill="none" viewBox="0 0 680 580"
                            >
                                <path data-char="J" fill="#000" d="M81.243 585C26.86 585-1.514 554.775.063 498.408L6.367 250.07H73.36l-7.093 244.254c-.788 15.521 4.729 24.507 14.975 24.507s14.975-8.986 14.975-24.507V74.437H.062V5H164v493.408C164 554.775 135.626 585 81.243 585" style={{ transform: 'scaleY(0.702188)' }} />
                                <path data-char="O" fill="#000" d="M274.5 585c-53.429 0-82.5-30.062-82.5-85.312V86.125C192 30.063 221.071 0 274.5 0S357 30.063 357 86.125v413.563c0 55.25-29.071 85.312-82.5 85.312m0-65.812c10.214 0 14.929-8.938 14.929-24.376V90.188c0-15.438-4.715-24.376-14.929-24.376s-15.714 8.938-15.714 24.376v404.624c0 15.438 5.5 24.376 15.714 24.376" style={{ transform: 'scaleY(0.868563)' }} />
                                <path data-char="I" fill="#000" d="M385 585V5h67v580z" style={{ transform: 'scaleY(0.764938)' }} />
                                <path data-char="N" fill="#000" d="M481 585V5h100.68l31.462 512.886h11.012l-3.146-116.829L612.356 5H680v580H579.32L542.352 72.114h-11.799l4.72 116.829L547.858 585z" />
                            </svg>

                            {/* Mobile SVG */}
                            <svg
                                className="img-full is-hidden:md-up svg-fix"
                                style={{ transform: 'scaleY(0.986214)', transformOrigin: 'center top' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="351" height="313" fill="none" viewBox="0 0 351 313"
                            >
                                <path fill="#000" d="M247.946 312.999V2.586h52.088l16.277 274.494h5.697l-1.628-62.526-4.476-211.968H350.9v310.413h-52.087L279.687 38.505h-6.104l2.442 62.526 6.51 211.968h-34.589Z" />
                                <path fill="#000" d="M199.281 235.396V2.586h34.663v232.81h-34.663Z" />
                                <path fill="#000" d="M142.112 279.372c-27.641 0-42.681-14.357-42.681-40.742V41.13C99.43 14.357 114.47 0 142.112 0c27.642 0 42.682 14.357 42.682 41.13v197.5c0 26.385-15.04 40.742-42.682 40.742Zm0-31.429c5.285 0 7.724-4.269 7.724-11.641V43.07c0-7.373-2.439-11.64-7.724-11.64-5.284 0-8.129 4.267-8.129 11.64v193.232c0 7.372 2.845 11.641 8.129 11.641Z" />
                                <path fill="#000" d="M42.13 241.606c-28.135 0-42.815-12.456-42-35.684l3.263-102.341h34.66l-3.67 100.657c-.408 6.397 2.446 10.1 7.747 10.1s7.748-3.703 7.748-10.1V31.203H.13V2.588h84.814v203.334c0 23.228-14.68 35.684-42.815 35.684Z" />
                            </svg>

                            {/* "Us" word decoration */}
                            <img
                                alt="Us"
                                className="join-us-word img-full"
                                src="/img/us-word.svg"
                            />
                        </div>

                        {/* Mouse trail photos — inside title so they appear on hover */}
                        {TRAIL_IMGS.map((id, i) => (
                            <div
                                key={i}
                                className="trail-photo"
                                style={{ width: TRAIL_SIZE, height: TRAIL_SIZE }}
                            >
                                <img
                                    src={`https://images.unsplash.com/${id}?w=160&h=160&fit=crop`}
                                    alt=""
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right col — CTA + button */}
                <div className="join-right">
                    <p className="join-description">
                        Ready to take control of your creative journey?{' '}
                        <span className="join-underline">Join now</span>{' '}
                        and let's shape the future of the art world together!
                    </p>

                    <div className="join-btn-area">
                        <div className="join-arrow-icon">
                            <img
                                src="/img/promo-arrow.svg"
                                alt=""
                                className="icon-shake-reverse"
                            />
                        </div>
                        {/* <a href="/signup" className="join-btn">
                            <span>Join</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="join-divider" />

            {/* Footer */}
            {/* <footer className="join-footer"> */}
            {/* <div className="join-footer-right">
                        <p>2026 © FOLLOW.ART</p>
                    </div>
                <div className="join-footer-left">
                    <nav className="join-footer-nav">
                        <a href="#">Brand Kit</a>
                        <a href="#">Buy Gift Card</a>
                        <a href="#">Terms &amp; Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                    </nav>
                    <p className="join-footer-credit">Digital product development by Vide Infra</p>
                </div>
            </footer> */}
        </section>
    );
};

export default JoinSection;
