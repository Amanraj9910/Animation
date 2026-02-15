import { d as o, N as r, a9 as n, q as l, o as u, w as p, e as c, n as i, ap as m } from "./1IpmvU-P.js";
const d = o({
    __name: "Group",
    props: {
        is: {
            default: "div"
        },
        variant: {
            default: () => []
        },
        horizontal: {
            default: ""
        },
        vertical: {
            default: ""
        }
    },
    setup(s) {
        const a = s
            , t = r(() => n({
                group: !0,
                "group--": a.variant,
                "group--h-": a.horizontal,
                "group--v-": a.vertical
            }));
        return (e, _) => (u(),
            l(m(e.is), {
                class: i(t.value)
            }, {
                default: p(() => [c(e.$slots, "default")]),
                _: 3
            }, 8, ["class"]))
    }
})
    , v = Object.assign(d, {
        __name: "Group"
    });
export { v as _ };
