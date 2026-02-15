import { g as _, u as U, h as b, i as B, e as O, P as h, M as w } from "./DWj8ohPr.js"; import { e as A, a as j } from "./xAAeZd5K.js"; import { d as z, m as f, N as L, as as C, L as m, A as g, y as G, z as I, p as T, c as D, o as V, a as v, B as i } from "./1IpmvU-P.js"; import { u as N } from "./B7z7noOX.js"; import "./BgwFGjU6.js"; const k = `#ifndef PI
#define PI 3.141592653589
#endif

#define BUBBLE_AMOUNT 0.2
#define BUBBLE_RADIUS 0.9

uniform vec2 mousePos;
uniform float progressStart;
uniform float progressEnd;
uniform float radius;
varying vec2 vUv;


float scaleValue(float value, float valueMin, float valueMax, float targetMin, float targetMax) {
    return clamp(targetMin + (value - valueMin) / (valueMax - valueMin) * (targetMax - targetMin), min(targetMin, targetMax), max(targetMin, targetMax));
}

vec4 bend(vec4 coords, float progressStart, float progressEnd) {
    vec4 bentCoords = coords;
    float yAnimationOffset = 0.25;

    // Include Y into the progress
    float adjustedProgress = progressStart + (1.0 - coords.y) * yAnimationOffset;

    if (progressStart > 0.5) {
        float endProgressStart = scaleValue(progressStart, 0.5, 1.0, 0.0, 1.0);
        adjustedProgress = progressStart * endProgressStart + adjustedProgress * (1.0 - endProgressStart);
    }

    float angle = (1.0 - adjustedProgress) * PI;
    float zOffset = (2.0 - cos(angle) * 2.0);

    #if USE_MOUSE
        float yOffset = (1.0 - progressStart) * 0.25 + progressEnd * 2.25;
    #else
        float yOffset = (1.0 - progressStart) * 0.55 + progressEnd * 2.25;
    #endif

    bentCoords.y = bentCoords.y * cos(angle) + yOffset;
    bentCoords.z = bentCoords.z * sin(angle) - zOffset;

    return bentCoords;
}

void main() {
    vUv = uv;

    // Progress effect
    vec4 bentPosition = bend(vec4(position, 1.0), progressStart, progressEnd);

    // Mouse effect
    vec4 pos = modelViewMatrix * bentPosition;
    vec4 posScreen = projectionMatrix * pos;
    vec3 posScreenNormalized = posScreen.xyz / posScreen.w;

    #if USE_MOUSE
        float mouseDistance = length(mousePos.xy - posScreenNormalized.xy);
        float displacementStrength = 1.0 - smoothstep(0.0, BUBBLE_RADIUS, mouseDistance);
        float displacement = displacementStrength * BUBBLE_AMOUNT;

        pos.z += displacement;
    #endif

    gl_Position = projectionMatrix * pos;
}
`, R = `varying vec2 vUv;
uniform sampler2D imageTexture;

void main() {
    gl_FragColor = texture2D(imageTexture, vUv);
}
`, W = { ref: "video", crossOrigin: "anonymous", autoplay: "", loop: "", muted: "", playsinline: "", style: { display: "none" } }, Y = 1 / 460 * 540, X = z({ __name: "Landing2GetSeenWebGl", setup(q) { const s = f("container"), a = f("video"), S = L(() => s.value && s.value.closest(".js-get-seen-section") || ".js-get-seen-section"), { matches: l } = N({ query: "sm-down" }), c = C(s), M = m(c.x, { lerp: .2 }), y = m(c.y, { lerp: .2 }), d = { value: new _(.5, .5) }; l.value || g([M.value, y.value], ([n, e]) => { const t = n * 2 - 1, o = e * 2 - 1; d.value.set(t, o * -1) }); const { svh: E } = G(), P = I(S), u = { value: 0 }, p = { value: 0 }; return g([P.position.top, E], ([n, e]) => { const t = i(n / (e * 100), .75, 0, 0, 1, !0), o = i(n / (e * 100), 0, -2, 0, 1, !0), r = A(o), x = j(t - o); u.value = i(x, 0, 1, -.25, 1), p.value = r }), T(() => { var n; if (s.value) { const e = U({ container: s.value, camera: { fov: 28, near: 0, far: 200, position: [0, -.048, 2.04], rotation: [0, 0, 0] }, renderer: { transparent: !0 } }); if (a.value) { a.value.play(); const t = new b({ side: O, fragmentShader: R, vertexShader: k, uniforms: { imageTexture: { value: new B(a.value) }, mousePos: d, progressStart: u, progressEnd: p }, defines: { USE_MOUSE: l.value ? 0 : 1 } }), o = new h(1, Y, 20, 20), r = new w(o, t); (n = e.scene) == null || n.add(r) } e.start() } }), (n, e) => (V(), D("div", { ref_key: "container", ref: s, class: "landing-2-get-seen-webgl" }, [v("video", W, e[0] || (e[0] = [v("source", { src: "/uploads/fa_homepage_comp.mp4", type: "video/mp4" }, null, -1)]), 512)], 512)) } }), Z = Object.assign(X, { __name: "Landing2GetSeenWebGl" }); export { Z as default };
