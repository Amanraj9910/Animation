import { d as u, m, N as o, a9 as p, y as f, c as y, o as _, e as k, H as d, n as h } from "./1IpmvU-P.js";
import { u as v } from "./BgwFGjU6.js";
import { u as g } from "./BXi6XEiv.js";
const S = u({
    __name: "Sticky",
    props: {
        sticky: {
            type: [Boolean, String],
            default: "top"
        },
        fullHeight: {
            type: Boolean,
            default: !1
        }
    },
    setup(l) {
        const t = l
            , { sticky: e } = g(t, {
                sticky: "top",
                fullHeight: !1
            })
            , s = m("stickyElement")
            , n = o(() => p({
                sticky: !0,
                "sticky--sticky": !!(e != null && e.value),
                "sticky--full-height": t.fullHeight
            }))
            , { height: a } = v(s)
            , { svh: r } = f()
            , i = o(() => (e == null ? void 0 : e.value) === "bottom" && a.value > 0 ? `${r.value * 100 - a.value}px` : "0px");
        return (c, B) => (_(),
            y("div", {
                ref_key: "stickyElement",
                ref: s,
                class: h(n.value),
                style: d({
                    top: i.value
                })
            }, [k(c.$slots, "default")], 6))
    }
})
    , H = Object.assign(S, {
        __name: "Sticky"
    });
export { H as _ };
