import { b5 as u, b6 as d, b7 as B, b8 as y, O, b9 as S, aN as x, aT as c, d as m, m as E, N as f, a9 as p, y as N, c as _, o as h, e as b, H as w, n as v } from "./1IpmvU-P.js";
import { u as H } from "./BgwFGjU6.js";
function j(a) {
    return u(a) ? Object.keys(a).filter(e => u(a[e])).map(e => ({
        key: e,
        breakpoints: Object.keys(a[e]).filter(t => S.includes(t))
    })).filter(e => !!(e != null && e.breakpoints.length)) : []
}
function i(a, e, t, o) {
    t.forEach(({ key: s, breakpoints: l }) => {
        let n;
        e && s in e && (n = e[s]),
            l.forEach(r => {
                x(r) && (n = a[s][r])
            }
            ),
            o[s] ? o[s].value !== n && (o[s].value = n) : o[s] = c(n)
    }
    )
}
function z(a, e) {
    if (!u(a))
        throw new Error("Responsive config must be an object");
    const t = j(a)
        , o = d(a, (s, l) => t.find(({ key: n }) => l !== n) ? c(s) : c(s));
    if (t.length) {
        const l = t.map(({ breakpoints: n }) => n).flat().map(n => [B(n, () => i(a, e, t, o)), y(n, () => i(a, e, t, o))]).flat();
        i(a, e, t, o),
            O(() => {
                l.forEach(n => n())
            }
            )
    }
    return o
}
const L = m({
    __name: "SectionLayer",
    props: {
        sticky: {
            type: [Boolean, String],
            default: !1
        },
        fullHeight: {
            type: Boolean,
            default: !1
        },
        above: {
            type: Boolean,
            default: !1
        }
    },
    setup(a) {
        const e = a
            , { sticky: t } = z(e, {
                sticky: !1
            })
            , o = E("layer")
            , s = f(() => p({
                section__layer: !0,
                "section__layer--sticky": typeof (t == null ? void 0 : t.value) == "string" ? !!(t != null && t.value) : t == null ? void 0 : t.value,
                "section__layer--above": e.above,
                "section__layer--full-height": e.fullHeight
            }))
            , { height: l } = H(o)
            , { svh: n } = N()
            , r = f(() => (t == null ? void 0 : t.value) === "bottom" && l.value > 0 && l.value > n.value * 100 ? `${n.value * 100 - l.value}px` : "0px");
        return (g, A) => (h(),
            _("div", {
                ref: "layer",
                class: v(s.value),
                style: w({
                    top: r.value
                })
            }, [b(g.$slots, "default")], 6))
    }
})
    , M = Object.assign(L, {
        __name: "SectionLayer"
    })
    , $ = m({
        __name: "Section",
        props: {
            underPrevious: {
                type: Boolean,
                default: !1
            },
            underNext: {
                type: Boolean,
                default: !1
            },
            fullHeight: {
                type: Boolean,
                default: !1
            },
            noOverflow: {
                type: Boolean,
                default: !1
            },
            above: {
                type: Boolean,
                default: !1
            }
        },
        setup(a) {
            const e = a
                , t = f(() => p({
                    section: !0,
                    "section--under-previous": e.underPrevious,
                    "section--under-next": e.underNext,
                    "section--full-height": e.fullHeight,
                    "section--no-overflow": e.noOverflow,
                    "section--above": e.above
                }));
            return (o, s) => (h(),
                _("div", {
                    class: v(t.value)
                }, [b(o.$slots, "default")], 2))
        }
    })
    , W = Object.assign($, {
        __name: "Section"
    });
export { M as _, W as a, z as u };
