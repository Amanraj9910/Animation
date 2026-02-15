import { r as l, b7 as f, b8 as c, O as n } from "./1IpmvU-P.js";
function t(e) {
    const r = l(!1);
    r.value = e.query === "xs" || e.query === "xs-up" || e.query.includes("-down");
    {
        const u = [f(e.query, a => {
            r.value = !0,
                e.enter && e.enter(a)
        }
        ), c(e.query, a => {
            r.value = !1,
                e.leave && e.leave(a)
        }
        )];
        n(() => {
            u.forEach(a => a())
        }
        )
    }
    return {
        matches: r
    }
}
export { t as u };
