import { c as w } from "./XacFX72u.js";
import { u as O, V as p } from "./DWj8ohPr.js";
import { u } from "./D9e1apFB.js";
import { d as P, m as R, as as S, L as x, c9 as k, p as G, A, c as W, o as b, a as V, B as M } from "./1IpmvU-P.js";
import { e as D, a as X } from "./xAAeZd5K.js";
import { u as Y } from "./B7z7noOX.js";
import "./CRzV2p0b.js";
import "./BgwFGjU6.js";
const j = {
    class: "landing-5-nexus-webgl"
}
    , y = .4
    , i = 8
    , q = P({
        __name: "Landing5NexusWebGl",
        props: {
            position: {}
        },
        setup(E) {
            const I = E
                , o = R("container")
                , g = S()
                , v = x(g.x, {
                    inviewElement: o
                })
                , h = x(g.y, {
                    inviewElement: o
                })
                , { matches: c } = Y({
                    query: "sm-down"
                })
                , l = {
                    value: 0
                }
                , _ = k()
                , C = _("/images/landing/3.nexus/card-1.png", {
                    width: 1170,
                    format: "avif"
                })
                , L = _("/images/landing/3.nexus/card-2.png", {
                    width: 1170,
                    format: "avif"
                });
            return G(() => {
                var d, f;
                if (o.value) {
                    const s = O({
                        container: o.value,
                        camera: {
                            fov: c.value ? 28 : 30.65,
                            far: 69,
                            position: c.value ? [0, .75, 8.5] : [0, 0, 4],
                            rotation: [0, 0, 0]
                        },
                        renderer: {
                            transparent: !0
                        },
                        debug: !1
                    });
                    (d = u()) == null || d.ready.then(e => {
                        e.pane.addBinding(l, "value", {
                            label: "Progress debug",
                            min: -1.5,
                            max: 1.5
                        })
                    }
                    ),
                        Promise.all([w(s, C, {
                            offset: -.48,
                            progressScale: 1,
                            radius: 1.96,
                            position: new p(-.59, .4, .5),
                            rotation: new p(0, 2.6, .4),
                            scale: 1.3,
                            progressUniform: l
                        }).then(e => {
                            var a;
                            return (a = u()) == null || a.ready.then(t => {
                                t.card(e, "Card 1")
                            }
                            ),
                                e
                        }
                        ), w(s, L, {
                            offset: -1.04,
                            progressScale: 1,
                            radius: .87,
                            position: new p(-.3, 1.2, -3.5),
                            rotation: new p(0, -2.4, -.41),
                            scale: 1.8,
                            progressUniform: l
                        }).then(e => {
                            var a;
                            return (a = u()) == null || a.ready.then(t => {
                                t.card(e, "Card 2")
                            }
                            ),
                                e
                        }
                        )]).then(([e, a]) => {
                            window.cardA = e,
                                s.start();
                            const t = () => {
                                if (s.camera) {
                                    const n = c.value ? [0, .75, 6] : [0, 0, 4]
                                        , r = (v.value.value - .5) * y + Math.PI * .5
                                        , m = (h.value.value - .5) * y
                                        , N = n[0] + i * Math.cos(r)
                                        , T = n[1] + i * Math.sin(m)
                                        , B = n[2] + i * Math.sin(r) * Math.cos(m) - i;
                                    s.camera.position.set(N, T, B),
                                        s.camera.lookAt(0, 0, n[2] - i)
                                }
                            }
                                ;
                            A([v.value, h.value, c], t),
                                A([() => I.position], ([n]) => {
                                    const r = D(M(n, .8, 1, 0, 1, !0));
                                    e.position.y = .4 + r * 1.1,
                                        a.position.y = 1.2 + r * 1.1;
                                    const m = X(n);
                                    l.value = M(m, 0, 1, -.25, 1)
                                }
                                )
                        }
                        ),
                        (f = u()) == null || f.ready.then(e => {
                            e == null || e.grid(10),
                                e == null || e.axis()
                        }
                        )
                }
            }
            ),
                (d, f) => (b(),
                    W("div", j, [V("div", {
                        ref_key: "container",
                        ref: o,
                        class: "landing-5-nexus-webgl__content"
                    }, null, 512)]))
        }
    })
    , $ = Object.assign(q, {
        __name: "Landing5NexusWebGl"
    });
export { $ as default };
