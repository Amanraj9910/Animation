import { d as P, m as L, as as F, z as R, r as z, p as J, A as U, c as k, o as T, n as H, I as O, J as D, a as t, b as e, F as Z, w as d, H as C, t as f, P as W, i as Y, h as w, C as G, at as K, _ as X, D as $ } from "./1IpmvU-P.js";
import { _ as q } from "./D_tbSi2c.js";
import { _ as Q } from "./CCqX0zPQ.js";
import { _ as tt } from "./Cdl_Rkyk.js";
import { _ as nt, a as et } from "./BXi6XEiv.js";
import { u as it, a as st } from "./D2ndxb4t.js";
const N = 80
    , S = 90 / 700
    , ot = P({
        __name: "ImageTrail",
        setup(E) {
            const V = L("container")
                , v = L("elements")
                , j = ["/images/landing/10.join-us/trail-16.png", "/images/landing/10.join-us/trail-18.png", "/images/landing/10.join-us/trail-14.png", "/images/landing/10.join-us/trail-1.png", "/images/landing/10.join-us/trail-2.png", "/images/landing/10.join-us/trail-3.png", "/images/landing/10.join-us/trail-4.png", "/images/landing/10.join-us/trail-5.png", "/images/landing/10.join-us/trail-6.png", "/images/landing/10.join-us/trail-7.png", "/images/landing/10.join-us/trail-8.png", "/images/landing/10.join-us/trail-9.png", "/images/landing/10.join-us/trail-10.png", "/images/landing/10.join-us/trail-11.png", "/images/landing/10.join-us/trail-12.png", "/images/landing/10.join-us/trail-13.png", "/images/landing/10.join-us/trail-15.png", "/images/landing/10.join-us/trail-17.png"]
                , A = [[1 / 700 * 278, 1 / 582 * 360], [1 / 700 * 332, 1 / 582 * 293], [1 / 700 * 218, 1 / 582 * 215]]
                , _ = F(V)
                , { position: u } = R(V)
                , p = z(!1)
                , x = z(2)
                , c = new Array(18).fill({
                    x: 0,
                    y: 0,
                    index: 0,
                    isVisible: !1,
                    isSet: !1
                }).map((i, l) => ({
                    x: 0,
                    y: 0,
                    index: 0,
                    isVisible: l < 3,
                    isSet: !1
                }));
            function h(i) {
                const l = (i + c.length) % c.length;
                return c[l]
            }
            function n(i, l) {
                const s = (x.value + 1) % c.length
                    , o = h(s);
                o.x = i,
                    o.y = l,
                    o.index = 0,
                    o.isVisible = !0,
                    o.isSet = !0;
                let a = s - 1
                    , r = 1;
                for (; a !== s;) {
                    const m = h(a);
                    m.isVisible = r < 3,
                        m.index = r,
                        a = (a - 1 + c.length) % c.length,
                        r++
                }
                x.value = s,
                    I()
            }
            function I() {
                c.forEach((i, l) => {
                    const s = v.value[l];
                    i.isSet && (s.style.translate = `${i.x}px ${i.y}px`,
                        s.style.left = "0",
                        s.style.top = "0",
                        s.style.zIndex = (18 - i.index).toString()),
                        s.classList.toggle("image-trail__photo--active-1", i.isVisible && i.index === 0),
                        s.classList.toggle("image-trail__photo--active-2", i.isVisible && i.index === 1),
                        s.classList.toggle("image-trail__photo--active-3", i.isVisible && i.index === 2)
                }
                )
            }
            return J(() => {
                const i = matchMedia("(hover: none)").matches || matchMedia("(pointer: coarse)").matches
                    , l = {
                        x: 0,
                        y: 0
                    };
                let s = [];
                p.value = !i,
                    i || (U([_.xAbsolute, _.yAbsolute, u.width, u.height], ([o, a, r, m]) => {
                        if (_.isInside.value) {
                            const g = window.innerWidth / 1460 * 80
                                , y = r * S
                                , B = m * S
                                , b = o * (1 - S * 2) - g + y
                                , M = a * (1 - S * 2) - g + B;
                            Math.pow(b - l.x, 2) + Math.pow(M - l.y, 2) > N * N && _.isInside.value && (n(b, M),
                                l.x = b,
                                l.y = M)
                        }
                    }
                    ),
                        U([_.isInside], ([o]) => {
                            if (o)
                                s.forEach(clearTimeout),
                                    s = [];
                            else {
                                const a = window.innerWidth / 1460 * 80
                                    , r = u.width.value
                                    , m = u.height.value;
                                l.x = -1e3,
                                    l.y = -1e3,
                                    s.push(setTimeout(() => {
                                        A.forEach((g, y) => {
                                            s.push(setTimeout(() => {
                                                const B = r * g[0] - a
                                                    , b = m * g[1] - a;
                                                n(B, b)
                                            }
                                                , y * 60))
                                        }
                                        )
                                    }
                                        , 500))
                            }
                        }
                        ))
            }
            ),
                (i, l) => {
                    const s = Z;
                    return T(),
                        k("div", {
                            ref: "container",
                            class: H(["image-trail", {
                                "image-trail--active": p.value
                            }])
                        }, [(T(),
                            k(O, null, D(j, (o, a) => t("div", {
                                key: o,
                                ref_for: !0,
                                ref_key: "elements",
                                ref: v,
                                class: H(["image-trail__photo", {
                                    [`image-trail__photo--active-${a + 1}`]: a < 3,
                                    [`image-trail__photo--${a + 1}`]: a < 3,
                                    "is-hidden": a >= 3 && !p.value
                                }])
                            }, [e(s, {
                                class: "img-full",
                                format: "avif,webp",
                                src: o,
                                width: 160,
                                height: 160,
                                alt: " "
                            }, null, 8, ["src"])], 2)), 64))], 2)
                }
        }
    })
    , at = Object.assign(ot, {
        __name: "ImageTrail"
    })
    , lt = {
        ref: "section",
        class: "ui-orange wrapper-section-10",
        "data-page-header-theme": "orange"
    }
    , ct = {
        class: "section-10"
    }
    , rt = {
        class: "section-10__content row row--gx row--stretch"
    }
    , dt = {
        class: "col col-12 col--6:md pr-1:md section-10__content-col"
    }
    , _t = {
        class: "section-10__content-side col col-12 col--6:md col-divider__right:md mt-6.5 mt-0:md"
    }
    , mt = {
        class: "section-10__description text-box-trim"
    }
    , ut = {
        class: "section-10__btn-grid"
    }
    , gt = {
        class: "section-10__btn-wrapper mt-5.5 mt-7:md"
    }
    , pt = {
        class: "section-10__btn-icon"
    }
    , ht = {
        class: "section-10__footer text-smaller row row--gx row--stretch"
    }
    , ft = {
        class: "section-10__footer-side col col--12 col--6:md col--last:md mb-1 mb-0:md"
    }
    , vt = {
        class: "section-10__footer-nav"
    }
    , xt = {
        class: "text-box-trim"
    }
    , yt = {
        class: "text-box-trim"
    }
    , bt = {
        class: "text-box-trim"
    }
    , wt = {
        class: "text-box-trim"
    }
    , kt = {
        class: "text-box-trim"
    }
    , Tt = {
        class: "text-box-trim is-hidden:md-up"
    }
    , Vt = {
        class: "section-10__footer-side col col--12 col--6:md mt-2 mt-0:md is-hidden:sm-down"
    }
    , jt = {
        class: "text-box-trim"
    }
    , It = P({
        __name: "Landing10JoinUs",
        props: {
            signUpStub: {
                type: Boolean,
                default: !1
            },
            isFixedBtnHidden: {
                type: Boolean,
                default: !0
            }
        },
        setup(E, { expose: V }) {
            const v = L("section")
                , j = L("signUpBtnStub");
            V({
                signUpBtnStub: j
            });
            const { style: A } = it(v)
                , _ = new Date().getFullYear()
                , u = z(!1)
                , { relativePosition: p } = R(v);
            let x = !0;
            const { transformTitle: c } = st(p.top);
            return U(p.top, h => {
                const n = h <= 1;
                n === x && (x = !n,
                    setTimeout(() => {
                        u.value = n
                    }
                        , 200))
            }
            ),
                (h, n) => {
                    const I = Y
                        , i = W
                        , l = at
                        , s = q
                        , o = G
                        , a = X
                        , r = Q
                        , m = tt
                        , g = nt
                        , y = et;
                    return T(),
                        k("div", lt, [e(y, null, {
                            default: d(() => [e(g, {
                                sticky: "bottom",
                                "full-height": "",
                                class: "ui-background",
                                style: C(f(A))
                            }, {
                                default: d(() => [e(m, {
                                    sticky: {
                                        "sm-down": !1,
                                        "md-up": !0
                                    },
                                    "full-height": "",
                                    class: "px-1 pb-1 pt-promo-header"
                                }, {
                                    default: d(() => [t("div", ct, [t("div", rt, [t("div", dt, [e(i, {
                                        title: "Join Us"
                                    }, {
                                        default: d(() => [(T(),
                                            k("svg", {
                                                class: "section-10__title--desktop img-full is-hidden:sm-down svg-fix",
                                                style: C([f(c), {
                                                    overflow: "visible"
                                                }]),
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "680",
                                                height: "580",
                                                fill: "none",
                                                viewBox: "0 0 680 580"
                                            }, n[0] || (n[0] = [t("path", {
                                                fill: "#000",
                                                d: "M481 585V5h100.68l31.462 512.886h11.012l-3.146-116.829L612.356 5H680v580H579.32L542.352 72.114h-11.799l4.72 116.829L547.858 585z"
                                            }, null, -1), t("path", {
                                                "data-char": "",
                                                "data-scale-y": "0.744",
                                                fill: "#000",
                                                d: "M385 585V5h67v580z"
                                            }, null, -1), t("path", {
                                                "data-char": "",
                                                "data-scale-y": "0.8895",
                                                fill: "#000",
                                                d: "M274.5 585c-53.429 0-82.5-30.062-82.5-85.312V86.125C192 30.063 221.071 0 274.5 0S357 30.063 357 86.125v413.563c0 55.25-29.071 85.312-82.5 85.312m0-65.812c10.214 0 14.929-8.938 14.929-24.376V90.188c0-15.438-4.715-24.376-14.929-24.376s-15.714 8.938-15.714 24.376v404.624c0 15.438 5.5 24.376 15.714 24.376"
                                            }, null, -1), t("path", {
                                                "data-char": "",
                                                "data-scale-y": "0.765",
                                                fill: "#000",
                                                d: "M81.243 585C26.86 585-1.514 554.775.063 498.408L6.367 250.07H73.36l-7.093 244.254c-.788 15.521 4.729 24.507 14.975 24.507s14.975-8.986 14.975-24.507V74.437H.062V5H164v493.408C164 554.775 135.626 585 81.243 585"
                                            }, null, -1)]), 4)), (T(),
                                                k("svg", {
                                                    class: "img-full is-hidden:md-up svg-fix",
                                                    style: C(f(c)),
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "351",
                                                    height: "313",
                                                    fill: "none",
                                                    viewBox: "0 0 351 313"
                                                }, n[1] || (n[1] = [t("path", {
                                                    fill: "#000",
                                                    d: "M247.946 312.999V2.586h52.088l16.277 274.494h5.697l-1.628-62.526-4.476-211.968H350.9v310.413h-52.087L279.687 38.505h-6.104l2.442 62.526 6.51 211.968h-34.589Z"
                                                }, null, -1), t("path", {
                                                    fill: "#000",
                                                    d: "M199.281 235.396V2.586h34.663v232.81h-34.663Z"
                                                }, null, -1), t("path", {
                                                    fill: "#000",
                                                    d: "M142.112 279.372c-27.641 0-42.681-14.357-42.681-40.742V41.13C99.43 14.357 114.47 0 142.112 0c27.642 0 42.682 14.357 42.682 41.13v197.5c0 26.385-15.04 40.742-42.682 40.742Zm0-31.429c5.285 0 7.724-4.269 7.724-11.641V43.07c0-7.373-2.439-11.64-7.724-11.64-5.284 0-8.129 4.267-8.129 11.64v193.232c0 7.372 2.845 11.641 8.129 11.641Z"
                                                }, null, -1), t("path", {
                                                    fill: "#000",
                                                    d: "M42.13 241.606c-28.135 0-42.815-12.456-42-35.684l3.263-102.341h34.66l-3.67 100.657c-.408 6.397 2.446 10.1 7.747 10.1s7.748-3.703 7.748-10.1V31.203H.13V2.588h84.814v203.334c0 23.228-14.68 35.684-42.815 35.684Z"
                                                }, null, -1)]), 4)), e(I, {
                                                    src: "/images/landing/10.join-us/us-word.svg",
                                                    class: "section-10__title-decoration img-full",
                                                    alt: " "
                                                })]),
                                        _: 1
                                    }), e(l)]), t("div", _t, [t("p", mt, [n[3] || (n[3] = w(" Ready to take control of your creative journey? ")), e(s, {
                                        show: u.value
                                    }, {
                                        default: d(() => n[2] || (n[2] = [w(" Join now ")])),
                                        _: 1,
                                        __: [2]
                                    }, 8, ["show"]), n[4] || (n[4] = w(" and let’s shape the future of the art world together! "))]), t("div", ut, [t("div", gt, [t("div", pt, [e(I, {
                                        class: "icon-shake-reverse img-full",
                                        src: "/images/landing/common/promo-arrow.svg",
                                        alt: " "
                                    })]), t("div", {
                                        class: H({
                                            "section-10__signup-btn-wrapper--hidden": !h.isFixedBtnHidden
                                        })
                                    }, [e(o, {
                                        ref_key: "signUpBtnStub",
                                        ref: j,
                                        variant: "primary full accent",
                                        size: "large",
                                        icon: "step-next",
                                        title: "Join",
                                        href: "/signup",
                                        "analytics-event": {
                                            name: "join",
                                            params: {
                                                button_text: "Join",
                                                button_location: "Landing - Join Us"
                                            }
                                        }
                                    }, null, 512)], 2)])])])]), n[7] || (n[7] = t("hr", {
                                        class: "my-1"
                                    }, null, -1)), t("div", ht, [t("div", ft, [t("nav", null, [t("ul", vt, [t("li", xt, [e(o, {
                                        class: "section-10__footer-link",
                                        variant: "link block text-smaller accent",
                                        title: "Brand Kit",
                                        href: f(K),
                                        target: "_blank"
                                    }, null, 8, ["href"])]), t("li", yt, [e(o, {
                                        class: "section-10__footer-link",
                                        variant: "link block text-smaller accent",
                                        title: "Buy Gift Card",
                                        to: "/gift-card",
                                        target: "_blank"
                                    })]), t("li", bt, [e(o, {
                                        class: "section-10__footer-link",
                                        variant: "link block text-smaller accent",
                                        title: "Terms & Conditions",
                                        to: "/terms-and-conditions",
                                        target: "_blank"
                                    })]), t("li", wt, [e(o, {
                                        class: "section-10__footer-link",
                                        variant: "link block text-smaller accent",
                                        title: "Privacy Policy",
                                        to: "/privacy-policy",
                                        target: "_blank"
                                    })]), t("li", kt, [e(o, {
                                        class: "section-10__footer-link",
                                        variant: "link block text-smaller accent",
                                        title: "Cookie Policy",
                                        to: "/cookies-policy",
                                        target: "_blank"
                                    })])])]), e(r, {
                                        variant: "smaller",
                                        vertical: "center",
                                        class: "is-hidden:sm-down"
                                    }, {
                                        default: d(() => [e(o, {
                                            href: "https://videinfra.com/",
                                            target: !0,
                                            variant: "link block accent",
                                            "text-size": "smaller",
                                            "attr-title": "Award-winning digital product design agency",
                                            class: "section-10__made-by"
                                        }, {
                                            default: d(() => n[5] || (n[5] = [w(" Digital product development by Vide Infra ")])),
                                            _: 1,
                                            __: [5]
                                        }), e(a, {
                                            class: "section-10__made-by-icon is-hidden:sm-down",
                                            icon: "videinfra"
                                        })]),
                                        _: 1
                                    }), t("p", Tt, $(f(_)) + " © FOLLOW.ART ", 1)]), t("div", Vt, [t("p", jt, $(f(_)) + " © FOLLOW.ART ", 1)]), e(r, {
                                        variant: "smaller",
                                        vertical: "center",
                                        class: "mt-1 is-hidden:md-up"
                                    }, {
                                        default: d(() => [e(a, {
                                            class: "section-10__made-by-icon is-hidden:md-up",
                                            icon: "videinfra"
                                        }), e(o, {
                                            href: "https://videinfra.com/",
                                            target: !0,
                                            variant: "link block accent",
                                            "text-size": "smaller",
                                            "attr-title": "Award-winning digital product design agency",
                                            class: "section-10__made-by"
                                        }, {
                                            default: d(() => n[6] || (n[6] = [w(" Digital product development by Vide Infra ")])),
                                            _: 1,
                                            __: [6]
                                        }), e(a, {
                                            class: "section-10__made-by-icon is-hidden:sm-down",
                                            icon: "videinfra"
                                        })]),
                                        _: 1
                                    })])])]),
                                    _: 1
                                })]),
                                _: 1
                            }, 8, ["style"])]),
                            _: 1
                        })], 512)
                }
        }
    })
    , Ut = Object.assign(It, {
        __name: "Landing10JoinUs"
    });
export { Ut as _ };
