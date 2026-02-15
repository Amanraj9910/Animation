import { T as B, h as N, g as L, e as O, P as V, M as W, u as b, V as _ } from "./DWj8ohPr.js";
import { v as D } from "./C4ipafMf.js";
import { f as Y } from "./si6jlswl.js";
import { u as M } from "./D9e1apFB.js";
import { d as j, m as X, N as S, as as q, L as T, z as x, y as H, c9 as U, p as F, A as C, c as J, o as K, B as Q } from "./1IpmvU-P.js";
import { u as Z } from "./B7z7noOX.js";
import "./BgwFGjU6.js";
function $(P, a, { rotation: i, position: c, scale: s, radius: v, offset: w, progress: u, progressScale: d } = {}) {
    return new B().loadAsync(a).then(h => {
        var g;
        const t = new N({
            side: O,
            fragmentShader: Y,
            vertexShader: D,
            uniforms: {
                alpha: {
                    value: 1
                },
                imageTexture: {
                    value: h
                },
                progress: u || {
                    value: new L(0, 0)
                },
                radius: {
                    value: v || 1
                },
                offset: {
                    value: w || 0
                },
                progressScale: {
                    value: d || 1
                }
            }
        })
            , m = new V(1, 1 / 1460 * 780, 30, 30)
            , r = new W(m, t);
        return r.frustumCulled = !1,
            c && r.position.set(c.x, c.y, c.z),
            i && r.rotation.set(i.x, i.y, i.z),
            s && r.scale.set(s, s, s),
            (g = P.scene) == null || g.add(r),
            r
    }
    )
}
const ee = .4
    , f = 18
    , ae = j({
        __name: "Landing7ConnectoryWebGl",
        setup(P) {
            const a = X("container")
                , i = S(() => {
                    var o;
                    return ((o = a.value) == null ? void 0 : o.closest(".section")) || a.value
                }
                )
                , c = S(() => {
                    var o;
                    return ((o = a.value) == null ? void 0 : o.closest(".section__layer")) || a.value
                }
                )
                , s = q()
                , v = T(s.x)
                , w = T(s.y)
                , { relativePosition: u } = x(i)
                , { relativePosition: d } = x(a, c)
                , { svh: h } = H()
                , { matches: t } = Z({
                    query: "sm-down"
                })
                , m = {
                    value: new L(0, 0)
                }
                , g = U()("/images/landing/7.connectory/image.png", {
                    width: 2920,
                    format: "avif"
                });
            return F(async () => {
                var o, A;
                if (a.value) {
                    const p = b({
                        container: a.value,
                        camera: {
                            fov: 28,
                            far: 69,
                            position: [0, 0, 4],
                            rotation: [0, 0, 0]
                        },
                        renderer: {
                            transparent: !0
                        },
                        debug: !1
                    });
                    (o = M()) == null || o.ready.then(e => {
                        e.pane.addBinding(m, "value", {
                            label: "Progress debug",
                            min: -1.5,
                            max: 1.5
                        })
                    }
                    );
                    const E = await $(p, g, {
                        offset: -5.4,
                        progressScale: t.value ? 0 : .87,
                        radius: (t.value,
                            6.3),
                        position: t.value ? new _(-13.32, -8, 9.56) : new _(-12.4, -3.6, 8.8),
                        rotation: t.value ? new _(1.09, 2.07, -1.01) : new _(.24, 1.95, -.04),
                        scale: 4,
                        progress: m
                    }).then(e => {
                        var n;
                        return (n = M()) == null || n.ready.then(l => {
                            l.card(e, "Card")
                        }
                        ),
                            e
                    }
                    );
                    (A = M()) == null || A.ready.then(e => {
                        e == null || e.grid(10),
                            e == null || e.axis()
                    }
                    ),
                        p.start();
                    const k = () => {
                        const e = Q(u.top.value + d.top.value, h.value * 100, h.value * -100, .5, -.5, !0)
                            , n = t.value ? -.3 : -1.5
                            , l = t.value ? 0 : 16
                            , y = t.value ? -8 : -3.6;
                        m.value.y = e * n,
                            E.position.y = e * l + y
                    }
                        , G = () => {
                            if (p.camera) {
                                const e = t.value ? 0 : ee
                                    , n = [0, 0, 4]
                                    , l = (v.value.value - .5) * e + Math.PI * .5
                                    , y = (w.value.value - .5) * e
                                    , I = n[0] + f * Math.cos(l)
                                    , R = n[1] + f * Math.sin(y)
                                    , z = n[2] + f * Math.sin(l) * Math.cos(y) - f;
                                p.camera.position.set(I, R, z),
                                    p.camera.lookAt(0, 0, n[2] - f)
                            }
                        }
                        ;
                    C([u.top, d.top], k),
                        C([u.height, v.value], G)
                }
            }
            ),
                (o, A) => (K(),
                    J("div", {
                        ref_key: "container",
                        ref: a,
                        class: "landing-7-connectory-webgl"
                    }, null, 512))
        }
    })
    , le = Object.assign(ae, {
        __name: "Landing7ConnectoryWebGl"
    });
export { le as default };
