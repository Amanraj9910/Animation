import React from 'react';

const NexusCardSection = () => (
    <section className="section nexuscard-section" id="nexuscard">
        <div className="nexuscard-header">
            {/* NEXUS CARD SVG title — actual follow.art paths */}
            <svg className="nexuscard-svg" width="1420" height="505" viewBox="0 0 1420 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1290 505V5H1354.69C1396.99 5 1420 31.4286 1420 79.2857V430.714C1420 478.571 1396.99 505 1354.69 505H1290ZM1342.87 447.143H1354.69C1362.78 447.143 1367.13 440 1367.13 427.143V83.5714C1367.13 70 1362.78 62.8572 1354.69 62.8572H1342.87V447.143Z" fill="black" />
                <path d="M1140 505V5H1204.88C1247.3 5 1270.39 31.4286 1270.39 79.2857V166.429C1270.39 213.571 1252.92 239.286 1220.48 239.286H1216.73V247.857H1253.54L1276 505H1222.97L1205.5 282.857H1193.65V505H1140ZM1193.65 229.286H1204.88C1212.99 229.286 1217.36 221.429 1217.36 208.571V83.5714C1217.36 70 1212.99 62.8572 1204.88 62.8572H1193.65V229.286Z" fill="black" />
                <path d="M1072.03 505L1065.15 340.714H1038.85L1031.97 505H980L1000.03 5H1104.59L1124 505H1072.03ZM1040.73 282.143H1063.27L1058.26 163.571L1057.01 61.4286H1046.99L1045.74 163.571L1040.73 282.143Z" fill="black" />
                <path d="M903.878 505C860.995 505 838 479.049 838 431.354V74.3472C838 25.9514 860.995 0 903.878 0C947.383 0 969.757 25.9514 967.892 74.3472L962.92 207.611H910.093L915.065 77.8542C915.687 64.5278 911.958 56.8125 903.878 56.8125C895.799 56.8125 891.448 64.5278 891.448 77.8542V427.146C891.448 440.472 895.799 448.187 903.878 448.187C911.336 448.187 915.065 440.472 915.065 427.146V286.868H967.892V431.354C967.892 479.049 945.518 505 903.878 505Z" fill="black" />
                <path d="M667.59 505C624.704 505 602 479.049 602 431.354V328.25H655.607V427.146C655.607 440.472 660.022 448.187 667.59 448.187C675.789 448.187 679.573 440.472 679.573 427.146V363.319C679.573 277.75 602 260.917 602 154.306V74.3472C602 25.9514 625.335 0 668.851 0C713.629 0 736.333 25.9514 733.81 74.3472L728.765 187.972H675.158L680.834 77.8542C681.465 64.5278 677.05 56.8125 668.851 56.8125C660.652 56.8125 656.238 64.5278 656.238 77.8542V148.694C656.238 232.861 733.81 252.5 733.81 357.708V431.354C733.81 479.049 711.106 505 667.59 505Z" fill="black" />
                <path d="M498.662 505C467.565 505 451.395 477.535 452.017 426.831L456.993 5H510.478L504.881 426.831C504.881 440.211 509.235 447.958 517.32 447.958C524.783 447.958 529.136 440.211 529.136 426.831V5H582V497.958H550.282L546.55 412.746H537.843C541.575 472.606 527.892 505 498.662 505Z" fill="black" />
                <path d="M296.172 505L304.188 345C306.038 296.429 320.22 272.857 344.884 272.857H356.6V264.286H311.587L299.872 5H352.284L360.916 225.714H364.616C372.015 225.714 375.715 219.286 376.332 205L383.731 5H436.143L429.361 161.429C427.511 210 413.329 234.286 388.664 234.286H376.332V242.857H420.111L436.143 505H383.115L372.015 281.429H368.316C360.916 281.429 357.217 288.571 356.6 303.571L348.584 505H296.172Z" fill="black" />
                <path d="M181 505V5H288V62.8572H233.878V219.286H281.779V277.143H233.878V447.143H288V505H181Z" fill="black" />
                <path d="M0 505V5H79.9367L104.917 447.143H113.66L111.162 346.429L104.292 5H158V505H78.0632L48.7115 62.8572H39.3439L43.0909 163.571L53.083 505H0Z" fill="black" />
            </svg>
            {/* "the" script decoration */}
            <img className="nexuscard-the" src="https://follow.art/_ipx/_/images/landing/common/the.svg" alt="the" />
        </div>
        <hr className="nexus-divider" style={{ borderColor: 'rgba(0,0,0,0.15)', margin: '0 0 30px' }} />
        <div className="nexuscard-content">
            <div className="nexuscard-left">
                <p className="nexuscard-desc">
                    Your <span className="uline">Digital Portfolio</span> Evolved. A new standard
                    for professional art presentation and discoverability.
                </p>
            </div>
            <div className="nexuscard-right">
                <div className="nexuscard-mockup">
                    <div className="nexuscard-mockup-title">Nexus Card</div>
                    <div className="nexuscard-mockup-subtitle">Portfolio • Bio • Exhibitions • Awards</div>
                    <img
                        className="nexuscard-mockup-photo"
                        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=250&fit=crop"
                        alt="Art piece"
                    />
                    <div className="nexuscard-mockup-meta">
                        Comprehensive, shareable snapshot of your creative identity
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default NexusCardSection;
