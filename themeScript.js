! function(e) {
    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    var t = {};
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 8)
}([function(e, t, n) {
    e.exports = !n(7)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r, o;
    ! function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";

        function DOMEval(e, t, n) {
            t = t || s;
            var r, o = t.createElement("script");
            if (o.text = e, n)
                for (r in w) n[r] && (o[r] = n[r]);
            t.head.appendChild(o).parentNode.removeChild(o)
        }

        function toType(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
        }

        function isArrayLike(e) {
            var t = !!e && "length" in e && e.length,
                n = toType(e);
            return !x(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function nodeName(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function winnow(e, t, n) {
            return x(t) ? T.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? T.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? T.grep(e, function(e) {
                return p.call(t, e) > -1 !== n
            }) : T.filter(t, e, n)
        }

        function sibling(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function createOptions(e) {
            var t = {};
            return T.each(e.match(L) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function Identity(e) {
            return e
        }

        function Thrower(e) {
            throw e
        }

        function adoptValue(e, t, n, r) {
            var o;
            try {
                e && x(o = e.promise) ? o.call(e).done(t).fail(n) : e && x(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function completed() {
            s.removeEventListener("DOMContentLoaded", completed), n.removeEventListener("load", completed), T.ready()
        }

        function fcamelCase(e, t) {
            return t.toUpperCase()
        }

        function camelCase(e) {
            return e.replace(M, "ms-").replace(F, fcamelCase)
        }

        function Data() {
            this.expando = T.expando + Data.uid++
        }

        function getData(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : W.test(e) ? JSON.parse(e) : e)
        }

        function dataAttr(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(B, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = getData(n)
                    } catch (e) {}
                    R.set(e, t, n)
                } else n = void 0;
            return n
        }

        function adjustCSS(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return T.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                c = (T.cssNumber[t] || "px" !== l && +u) && U.exec(T.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2, l = l || c[3], c = +u || 1; a--;) T.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
                c *= 2, T.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
        }

        function getDefaultDisplay(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = Q[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = T.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Q[r] = o, o)
        }

        function showHide(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++) r = e[i], r.style && (n = r.style.display, t ? ("none" === n && (o[i] = I.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && G(r) && (o[i] = getDefaultDisplay(r))) : "none" !== n && (o[i] = "none", I.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e
        }

        function getAll(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t) ? T.merge([e], n) : n
        }

        function setGlobalEval(e, t) {
            for (var n = 0, r = e.length; n < r; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"))
        }

        function buildFragment(e, t, n, r, o) {
            for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === toType(i)) T.merge(p, i.nodeType ? [i] : i);
                    else if (ee.test(i)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (J.exec(i) || ["", ""])[1].toLowerCase(), u = Z[s] || Z._default, a.innerHTML = u[1] + T.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
                T.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
            } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; i = p[d++];)
                if (r && T.inArray(i, r) > -1) o && o.push(i);
                else if (l = T.contains(i.ownerDocument, i), a = getAll(f.appendChild(i), "script"), l && setGlobalEval(a), n)
                for (c = 0; i = a[c++];) K.test(i.type || "") && n.push(i);
            return f
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return s.activeElement
            } catch (e) {}
        }

        function on(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) on(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = returnFalse;
            else if (!o) return e;
            return 1 === i && (a = o, o = function(e) {
                return T().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = T.guid++)), e.each(function() {
                T.event.add(this, t, o, r, n)
            })
        }

        function manipulationTarget(e, t) {
            return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? T(e).children("tbody")[0] || e : e
        }

        function disableScript(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function restoreScript(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function cloneCopyEvent(e, t) {
            var n, r, o, i, a, s, u, l;
            if (1 === t.nodeType) {
                if (I.hasData(e) && (i = I.access(e), a = I.set(t, i), l = i.events)) {
                    delete a.handle, a.events = {};
                    for (o in l)
                        for (n = 0, r = l[o].length; n < r; n++) T.event.add(t, o, l[o][n])
                }
                R.hasData(e) && (s = R.access(e), u = T.extend({}, s), R.set(t, u))
            }
        }

        function fixInput(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Y.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function domManip(e, t, n, r) {
            t = c.apply([], t);
            var o, i, a, s, u, l, f = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                g = x(h);
            if (g || p > 1 && "string" == typeof h && !y.checkClone && se.test(h)) return e.each(function(o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), domManip(i, t, n, r)
            });
            if (p && (o = buildFragment(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (a = T.map(getAll(o, "script"), disableScript), s = a.length; f < p; f++) u = o, f !== d && (u = T.clone(u, !0, !0), s && T.merge(a, getAll(u, "script"))), n.call(e[f], u, f);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, T.map(a, restoreScript), f = 0; f < s; f++) u = a[f], K.test(u.type || "") && !I.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(u.src) : DOMEval(u.textContent.replace(ue, ""), l, u))
            }
            return e
        }

        function remove(e, t, n) {
            for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(getAll(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && setGlobalEval(getAll(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function curCSS(e, t, n) {
            var r, o, i, a, s = e.style;
            return n = n || ce(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), !y.pixelBoxStyles() && le.test(a) && fe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function addGetHookIf(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function vendorPropName(e) {
            if (e in ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = me.length; n--;)
                if ((e = me[n] + t) in ve) return e
        }

        function finalPropName(e) {
            var t = T.cssProps[e];
            return t || (t = T.cssProps[e] = vendorPropName(e) || e), t
        }

        function setPositiveNumber(e, t, n) {
            var r = U.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function boxModelAdjustment(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += T.css(e, n + X[a], !0, o)), r ? ("content" === n && (u -= T.css(e, "padding" + X[a], !0, o)), "margin" !== n && (u -= T.css(e, "border" + X[a] + "Width", !0, o))) : (u += T.css(e, "padding" + X[a], !0, o), "padding" !== n ? u += T.css(e, "border" + X[a] + "Width", !0, o) : s += T.css(e, "border" + X[a] + "Width", !0, o));
            return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))), u
        }

        function getWidthOrHeight(e, t, n) {
            var r = ce(e),
                o = curCSS(e, t, r),
                i = "border-box" === T.css(e, "boxSizing", !1, r),
                a = i;
            if (le.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return a = a && (y.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === T.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + boxModelAdjustment(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
        }

        function Tween(e, t, n, r, o) {
            return new Tween.prototype.init(e, t, n, r, o)
        }

        function schedule() {
            xe && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(schedule) : n.setTimeout(schedule, T.fx.interval), T.fx.tick())
        }

        function createFxNow() {
            return n.setTimeout(function() {
                ye = void 0
            }), ye = Date.now()
        }

        function genFx(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = X[r], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function createTween(e, t, n) {
            for (var r, o = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function defaultPrefilter(e, t, n) {
            var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && G(e),
                m = I.get(e, "fxshow");
            n.queue || (a = T._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (r in t)
                if (o = t[r], be.test(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    d[r] = m && m[r] || T.style(e, r)
                } if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = m && m.display, null == l && (l = I.get(e, "display")), c = T.css(e, "display"), "none" === c && (l ? c = l : (showHide([e], !0), l = e.style.display || l, c = T.css(e, "display"), showHide([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1;
                for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = I.access(e, "fxshow", {
                    display: l
                }), i && (m.hidden = !g), g && showHide([e], !0), p.done(function() {
                    g || showHide([e]), I.remove(e, "fxshow");
                    for (r in d) T.style(e, r, d[r])
                })), u = createTween(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
            }
        }

        function propFilter(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (r = camelCase(n), o = t[r], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = T.cssHooks[r]) && "expand" in a) {
                    i = a.expand(i), delete e[r];
                    for (n in i) n in e || (e[n] = i[n], t[n] = o)
                } else t[r] = o
        }

        function Animation(e, t, n) {
            var r, o, i = 0,
                a = Animation.prefilters.length,
                s = T.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (o) return !1;
                    for (var t = ye || createFxNow(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(i);
                    return s.notifyWith(e, [l, i, n]), i < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: T.extend({}, t),
                    opts: T.extend(!0, {
                        specialEasing: {},
                        easing: T.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ye || createFxNow(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (propFilter(c, l.opts.specialEasing); i < a; i++)
                if (r = Animation.prefilters[i].call(l, e, c, l.opts)) return x(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return T.map(c, createTween, l), x(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }

        function stripAndCollapse(e) {
            return (e.match(L) || []).join(" ")
        }

        function getClass(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function classesToArray(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(L) || [] : []
        }

        function buildParams(e, t, n, r) {
            var o;
            if (Array.isArray(t)) T.each(t, function(t, o) {
                n || qe.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            });
            else if (n || "object" !== toType(t)) r(e, t);
            else
                for (o in t) buildParams(e + "[" + o + "]", t[o], n, r)
        }

        function addToPrefiltersOrTransports(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(L) || [];
                if (x(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function inspectPrefiltersOrTransports(e, t, n, r) {
            function inspect(a) {
                var s;
                return o[a] = !0, T.each(e[a] || [], function(e, a) {
                    var u = a(t, n, r);
                    return "string" != typeof u || i || o[u] ? i ? !(s = u) : void 0 : (t.dataTypes.unshift(u), inspect(u), !1)
                }), s
            }
            var o = {},
                i = e === $e;
            return inspect(t.dataTypes[0]) || !o["*"] && inspect("*")
        }

        function ajaxExtend(e, t) {
            var n, r, o = T.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e
        }

        function ajaxHandleResponses(e, t, n) {
            for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        u.unshift(o);
                        break
                    } if (u[0] in n) i = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        i = o;
                        break
                    }
                    a || (a = o)
                }
                i = i || a
            }
            if (i) return i !== u[0] && u.unshift(i), n[i]
        }

        function ajaxConvert(e, t, n, r) {
            var o, i, a, s, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (i = c.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                    if ("*" === i) i = u;
                    else if ("*" !== u && u !== i) {
                if (!(a = l[u + " " + i] || l["* " + i]))
                    for (o in l)
                        if (s = o.split(" "), s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + i
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var a = [],
            s = n.document,
            u = Object.getPrototypeOf,
            l = a.slice,
            c = a.concat,
            f = a.push,
            p = a.indexOf,
            d = {},
            h = d.toString,
            g = d.hasOwnProperty,
            m = g.toString,
            v = m.call(Object),
            y = {},
            x = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            b = function(e) {
                return null != e && e === e.window
            },
            w = {
                type: !0,
                src: !0,
                noModule: !0
            },
            T = function(e, t) {
                return new T.fn.init(e, t)
            },
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.fn = T.prototype = {
            jquery: "3.3.1",
            constructor: T,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return T.each(this, e)
            },
            map: function(e) {
                return this.pushStack(T.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: f,
            sort: a.sort,
            splice: a.splice
        }, T.extend = T.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || x(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], r = e[t], a !== r && (l && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1, i = n && Array.isArray(n) ? n : []) : i = n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(l, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, T.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== h.call(e)) && (!(t = u(e)) || "function" == typeof(n = g.call(t, "constructor") && t.constructor) && m.call(n) === v)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                DOMEval(e)
            },
            each: function(e, t) {
                var n, r = 0;
                if (isArrayLike(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(C, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (isArrayLike(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : f.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : p.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (isArrayLike(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return c.apply([], a)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = a[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        });
        var S = function(e) {
            function Sizzle(e, t, r, o) {
                var i, s, l, c, f, h, v, y = t && t.ownerDocument,
                    T = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                    if (11 !== T && (f = J.exec(e)))
                        if (i = f[1]) {
                            if (9 === T) {
                                if (!(l = t.getElementById(i))) return r;
                                if (l.id === i) return r.push(l), r
                            } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                        } else {
                            if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(i)), r
                        } if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                        if (1 !== T) y = t, v = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), h = a(e), s = h.length; s--;) h[s] = "#" + c + " " + toSelector(h[s]);
                            v = h.join(","), y = K.test(e) && testContext(t.parentNode) || t
                        }
                        if (v) try {
                            return q.apply(r, y.querySelectorAll(v)), r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(R, "$1"), t, r, o)
            }

            function createCache() {
                function cache(t, n) {
                    return e.push(t + " ") > r.cacheLength && delete cache[e.shift()], cache[t + " "] = n
                }
                var e = [];
                return cache
            }

            function markFunction(e) {
                return e[b] = !0, e
            }

            function assert(e) {
                var t = d.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function addHandle(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
            }

            function siblingCheck(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function createDisabledPseudo(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function createPositionalPseudo(e) {
                return markFunction(function(t) {
                    return t = +t, markFunction(function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }

            function testContext(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function setFilters() {}

            function toSelector(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function addCombinator(e, t, n) {
                var r = t.dir,
                    o = t.next,
                    i = o || r,
                    a = n && "parentNode" === i,
                    s = C++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, u) {
                    var l, c, f, p = [T, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = c[i]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                    if (c[i] = p, p[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function elementMatcher(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function multipleContexts(e, t, n) {
                for (var r = 0, o = t.length; r < o; r++) Sizzle(e, t[r], n);
                return n
            }

            function condense(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                return a
            }

            function setMatcher(e, t, n, r, o, i) {
                return r && !r[b] && (r = setMatcher(r)), o && !o[b] && (o = setMatcher(o, i)), markFunction(function(i, a, s, u) {
                    var l, c, f, p = [],
                        d = [],
                        h = a.length,
                        g = i || multipleContexts(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !i && t ? g : condense(g, p, e, s, u),
                        v = n ? o || (i ? e : h || r) ? [] : a : m;
                    if (n && n(m, v, s, u), r)
                        for (l = condense(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(m[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (l = o ? H(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    } else v = condense(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : q.apply(a, v)
                })
            }

            function matcherFromTokens(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = addCombinator(function(e) {
                        return e === t
                    }, s, !0), f = addCombinator(function(e) {
                        return H(t, e) > -1
                    }, s, !0), p = [function(e, n, r) {
                        var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, o
                    }]; u < i; u++)
                    if (n = r.relative[e[u].type]) p = [addCombinator(elementMatcher(p), n)];
                    else {
                        if (n = r.filter[e[u].type].apply(null, e[u].matches), n[b]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                            return setMatcher(u > 1 && elementMatcher(p), u > 1 && toSelector(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(R, "$1"), n, u < o && matcherFromTokens(e.slice(u, o)), o < i && matcherFromTokens(e = e.slice(o)), o < i && toSelector(e))
                        }
                        p.push(n)
                    } return elementMatcher(p)
            }

            function matcherFromGroupMatchers(e, t) {
                var n = t.length > 0,
                    o = e.length > 0,
                    i = function(i, a, s, u, c) {
                        var f, h, m, v = 0,
                            y = "0",
                            x = i && [],
                            b = [],
                            w = l,
                            C = i || o && r.find.TAG("*", c),
                            S = T += null == w ? 1 : Math.random() || .1,
                            k = C.length;
                        for (c && (l = a === d || a || c); y !== k && null != (f = C[y]); y++) {
                            if (o && f) {
                                for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); m = e[h++];)
                                    if (m(f, a || d, s)) {
                                        u.push(f);
                                        break
                                    } c && (T = S)
                            }
                            n && ((f = !m && f) && v--, i && x.push(f))
                        }
                        if (v += y, n && y !== v) {
                            for (h = 0; m = t[h++];) m(x, b, a, s);
                            if (i) {
                                if (v > 0)
                                    for (; y--;) x[y] || b[y] || (b[y] = D.call(u));
                                b = condense(b)
                            }
                            q.apply(u, b), c && !i && b.length > 0 && v + t.length > 1 && Sizzle.uniqueSort(u)
                        }
                        return c && (T = S, l = w), x
                    };
                return n ? markFunction(i) : i
            }
            var t, n, r, o, i, a, s, u, l, c, f, p, d, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
                w = e.document,
                T = 0,
                C = 0,
                S = createCache(),
                k = createCache(),
                A = createCache(),
                E = function(e, t) {
                    return e === t && (f = !0), 0
                },
                N = {}.hasOwnProperty,
                j = [],
                D = j.pop,
                P = j.push,
                q = j.push,
                L = j.slice,
                H = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                F = "\\[" + O + "*(" + M + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + O + "*\\]",
                z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                I = new RegExp(O + "+", "g"),
                R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                W = new RegExp("^" + O + "*," + O + "*"),
                B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                $ = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                U = new RegExp(z),
                X = new RegExp("^" + M + "$"),
                G = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + _ + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                V = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                Y = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                re = function() {
                    p()
                },
                oe = addCombinator(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                q.apply(j = L.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
            } catch (e) {
                q = {
                    apply: j.length ? function(e, t) {
                        P.apply(e, L.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            n = Sizzle.support = {}, i = Sizzle.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = Sizzle.setDocument = function(e) {
                var t, o, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = assert(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = assert(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Y.test(d.getElementsByClassName), n.getById = assert(function(e) {
                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Y.test(d.querySelectorAll)) && (assert(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + _ + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), assert(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Y.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", z)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Y.test(h.compareDocumentPosition), x = t || Y.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? H(c, e) - H(c, t) : 0;
                    if (o === i) return siblingCheck(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? siblingCheck(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, d) : d
            }, Sizzle.matches = function(e, t) {
                return Sizzle(e, null, null, t)
            }, Sizzle.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace($, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return Sizzle(t, d, null, [e]).length > 0
            }, Sizzle.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t)
            }, Sizzle.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var o = r.attrHandle[t.toLowerCase()],
                    i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, Sizzle.escape = function(e) {
                return (e + "").replace(te, ne)
            }, Sizzle.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, Sizzle.uniqueSort = function(e) {
                var t, r = [],
                    o = 0,
                    i = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), f) {
                    for (; t = e[i++];) t === e[i] && (o = r.push(i));
                    for (; o--;) e.splice(r[o], 1)
                }
                return c = null, e
            }, o = Sizzle.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, r = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = Sizzle.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                x = !1;
                            if (m) {
                                if (i) {
                                    for (; g;) {
                                        for (p = t; p = p[g];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (p = m, f = p[b] || (p[b] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === T && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [T, d, x];
                                            break
                                        }
                                } else if (y && (p = t, f = p[b] || (p[b] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === T && l[1], x = d), !1 === x)
                                    for (;
                                        (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[b] || (p[b] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [T, x]), p !== t)););
                                return (x -= o) === r || x % r == 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--;) r = H(e, i[a]), e[r] = !(n[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: markFunction(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(R, "$1"));
                        return r[b] ? markFunction(function(e, t, n, o) {
                            for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, o, i) {
                            return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: markFunction(function(e) {
                        return function(t) {
                            return Sizzle(e, t).length > 0
                        }
                    }),
                    contains: markFunction(function(e) {
                        return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                    }),
                    lang: markFunction(function(e) {
                        return X.test(e || "") || Sizzle.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: createDisabledPseudo(!1),
                    disabled: createDisabledPseudo(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: createPositionalPseudo(function() {
                        return [0]
                    }),
                    last: createPositionalPseudo(function(e, t) {
                        return [t - 1]
                    }),
                    eq: createPositionalPseudo(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: createPositionalPseudo(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: createPositionalPseudo(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: createPositionalPseudo(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: createPositionalPseudo(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, r.pseudos.nth = r.pseudos.eq;
            for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(t);
            return setFilters.prototype = r.filters = r.pseudos, r.setFilters = new setFilters, a = Sizzle.tokenize = function(e, t) {
                var n, o, i, a, s, u, l, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = B.exec(s)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(R, " ")
                    }), s = s.slice(n.length));
                    for (a in r.filter) !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: a,
                        matches: o
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? Sizzle.error(e) : k(e, u).slice(0)
            }, s = Sizzle.compile = function(e, t) {
                var n, r = [],
                    o = [],
                    i = A[e + " "];
                if (!i) {
                    for (t || (t = a(e)), n = t.length; n--;) i = matcherFromTokens(t[n]), i[b] ? r.push(i) : o.push(i);
                    i = A(e, matcherFromGroupMatchers(o, r)), i.selector = e
                }
                return i
            }, u = Sizzle.select = function(e, t, n, o) {
                var i, u, l, c, f, p = "function" == typeof e && e,
                    d = !o && a(e = p.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (u = d[0] = d[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                    }
                    for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                        if ((f = r.find[c]) && (o = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && testContext(t.parentNode) || t))) {
                            if (u.splice(i, 1), !(e = o.length && toSelector(u))) return q.apply(n, o), n;
                            break
                        }
                }
                return (p || s(e, d))(o, t, !g, n, !t || K.test(e) && testContext(t.parentNode) || t), n
            }, n.sortStable = b.split("").sort(E).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = assert(function(e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
            }), assert(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || addHandle("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && assert(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || addHandle("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), assert(function(e) {
                return null == e.getAttribute("disabled")
            }) || addHandle(_, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), Sizzle
        }(n);
        T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
        var k = function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && T(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            A = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            E = T.expr.match.needsContext,
            N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        T.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, T.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (T.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
                return r > 1 ? T.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(winnow(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(winnow(this, e || [], !0))
            },
            is: function(e) {
                return !!winnow(this, "string" == typeof e && E.test(e) ? T(e) : e || [], !1).length
            }
        });
        var j, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || j, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), N.test(r[1]) && T.isPlainObject(t))
                        for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return o = s.getElementById(r[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
        }).prototype = T.fn, j = T(s);
        var P = /^(?:parents|prev(?:Until|All))/,
            q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        T.fn.extend({
            has: function(e) {
                var t = T(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (T.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && T(e);
                if (!E.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? p.call(T(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), T.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return k(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return k(e, "parentNode", n)
            },
            next: function(e) {
                return sibling(e, "nextSibling")
            },
            prev: function(e) {
                return sibling(e, "previousSibling")
            },
            nextAll: function(e) {
                return k(e, "nextSibling")
            },
            prevAll: function(e) {
                return k(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return k(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return k(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return nodeName(e, "iframe") ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
            }
        }, function(e, t) {
            T.fn[e] = function(n, r) {
                var o = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), this.length > 1 && (q[e] || T.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var L = /[^\x20\t\r\n\f]+/g;
        T.Callbacks = function(e) {
            e = "string" == typeof e ? createOptions(e) : T.extend({}, e);
            var t, n, r, o, i = [],
                a = [],
                s = -1,
                u = function() {
                    for (o = o || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                },
                l = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, a.push(n)), function add(t) {
                            T.each(t, function(t, n) {
                                x(n) ? e.unique && l.has(n) || i.push(n) : n && n.length && "string" !== toType(n) && add(n)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return T.each(arguments, function(e, t) {
                            for (var n;
                                (n = T.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? T.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return o = a = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = a = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, T.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return T.Deferred(function(n) {
                                T.each(t, function(t, r) {
                                    var o = x(e[r[4]]) && e[r[4]];
                                    i[r[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && x(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, r, o) {
                            function resolve(e, t, r, o) {
                                return function() {
                                    var a = this,
                                        s = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(e < i)) {
                                                if ((n = r.apply(a, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, x(u) ? o ? u.call(n, resolve(i, t, Identity, o), resolve(i, t, Thrower, o)) : (i++, u.call(n, resolve(i, t, Identity, o), resolve(i, t, Thrower, o), resolve(i, t, Identity, t.notifyWith))) : (r !== Identity && (a = void 0, s = [n]), (o || t.resolveWith)(a, s))
                                            }
                                        },
                                        l = o ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (r !== Thrower && (a = void 0, s = [n]), t.rejectWith(a, s))
                                            }
                                        };
                                    e ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            var i = 0;
                            return T.Deferred(function(n) {
                                t[0][3].add(resolve(0, n, x(o) ? o : Identity, n.notifyWith)), t[1][3].add(resolve(0, n, x(e) ? e : Identity)), t[2][3].add(resolve(0, n, x(r) ? r : Thrower))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? T.extend(e, o) : o
                        }
                    },
                    i = {};
                return T.each(t, function(e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                }), o.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = l.call(arguments),
                    i = T.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, o[e] = arguments.length > 1 ? l.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (adoptValue(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || x(o[n] && o[n].then))) return i.then();
                for (; n--;) adoptValue(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, T.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var _ = T.Deferred();
        T.fn.ready = function(e) {
            return _.then(e).catch(function(e) {
                T.readyException(e)
            }), this
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || _.resolveWith(s, [T]))
            }
        }), T.ready.then = _.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", completed), n.addEventListener("load", completed));
        var O = function(e, t, n, r, o, i, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === toType(n)) {
                    o = !0;
                    for (s in n) O(e, t, s, n[s], !0, i, a)
                } else if (void 0 !== r && (o = !0, x(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(T(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
            },
            M = /^-ms-/,
            F = /-([a-z])/g,
            z = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        Data.uid = 1, Data.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[camelCase(t)] = n;
                else
                    for (r in t) o[camelCase(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(camelCase) : (t = camelCase(t), t = t in r ? [t] : t.match(L) || []), n = t.length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var I = new Data,
            R = new Data,
            W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            B = /[A-Z]/g;
        T.extend({
            hasData: function(e) {
                return R.hasData(e) || I.hasData(e)
            },
            data: function(e, t, n) {
                return R.access(e, t, n)
            },
            removeData: function(e, t) {
                R.remove(e, t)
            },
            _data: function(e, t, n) {
                return I.access(e, t, n)
            },
            _removeData: function(e, t) {
                I.remove(e, t)
            }
        }), T.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = R.get(i), 1 === i.nodeType && !I.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = camelCase(r.slice(5)), dataAttr(i, r, o[r])));
                        I.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    R.set(this, e)
                }) : O(this, function(t) {
                    var n;
                    if (i && void 0 === t) {
                        if (void 0 !== (n = R.get(i, e))) return n;
                        if (void 0 !== (n = dataAttr(i, e))) return n
                    } else this.each(function() {
                        R.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    R.remove(this, e)
                })
            }
        }), T.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || Array.isArray(n) ? r = I.access(e, t, T.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = T._queueHooks(e, t),
                    a = function() {
                        T.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return I.get(e, n) || I.access(e, n, {
                    empty: T.Callbacks("once memory").add(function() {
                        I.remove(e, [t + "queue", n])
                    })
                })
            }
        }), T.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    T.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = T.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = I.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
            X = ["Top", "Right", "Bottom", "Left"],
            G = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
            },
            V = function(e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t) e.style[i] = a[i];
                return o
            },
            Q = {};
        T.fn.extend({
            show: function() {
                return showHide(this, !0)
            },
            hide: function() {
                return showHide(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    G(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var Y = /^(?:checkbox|radio)$/i,
            J = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            K = /^$|^module$|\/(?:java|ecma)script/i,
            Z = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Z.optgroup = Z.option, Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead, Z.th = Z.td;
        var ee = /<|&#?\w+;/;
        ! function() {
            var e = s.createDocumentFragment(),
                t = e.appendChild(s.createElement("div")),
                n = s.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var te = s.documentElement,
            ne = /^key/,
            re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            oe = /^([^.]*)(?:\.(.+)|)/;
        T.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, m = I.get(e);
                if (m)
                    for (n.handler && (i = n, n = i.handler, o = i.selector), o && T.find.matchesSelector(te, o), n.guid || (n.guid = T.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(L) || [""], l = t.length; l--;) s = oe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = T.event.special[d] || {}, c = T.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && T.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), T.event.global[d] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, l, c, f, p, d, h, g, m = I.hasData(e) && I.get(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(L) || [""], l = t.length; l--;)
                        if (s = oe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = T.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T.removeEvent(e, d, m.handle), delete u[d])
                        } else
                            for (d in u) T.event.remove(e, d + t[l], n, r, !0);
                    T.isEmptyObject(u) && I.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, a, s = T.event.fix(e),
                    u = new Array(arguments.length),
                    l = (I.get(this, "events") || {})[s.type] || [],
                    c = T.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = T.event.handlers.call(this, s, l), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (i = [], a = {}, n = 0; n < u; n++) r = t[n], o = r.selector + " ", void 0 === a[o] && (a[o] = r.needsContext ? T(o, this).index(l) > -1 : T.find(o, this, null, [l]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: x(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, T.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, T.Event = function(e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && ne.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && re.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            T.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return o && (o === r || T.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), T.fn.extend({
            on: function(e, t, n, r) {
                return on(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return on(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = returnFalse), this.each(function() {
                    T.event.remove(this, e, n, t)
                })
            }
        });
        var ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ae = /<script|<style|<link/i,
            se = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        T.extend({
            htmlPrefilter: function(e) {
                return e.replace(ie, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    u = T.contains(e.ownerDocument, e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                    for (a = getAll(s), i = getAll(e), r = 0, o = i.length; r < o; r++) fixInput(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || getAll(e), a = a || getAll(s), r = 0, o = i.length; r < o; r++) cloneCopyEvent(i[r], a[r]);
                    else cloneCopyEvent(e, s);
                return a = getAll(s, "script"), a.length > 0 && setGlobalEval(a, !u && getAll(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (z(n)) {
                        if (t = n[I.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                            n[I.expando] = void 0
                        }
                        n[R.expando] && (n[R.expando] = void 0)
                    }
            }
        }), T.fn.extend({
            detach: function(e) {
                return remove(this, e, !0)
            },
            remove: function(e) {
                return remove(this, e)
            },
            text: function(e) {
                return O(this, function(e) {
                    return void 0 === e ? T.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return domManip(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        manipulationTarget(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return domManip(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = manipulationTarget(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return domManip(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return domManip(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(getAll(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return T.clone(this, e, t)
                })
            },
            html: function(e) {
                return O(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ae.test(e) && !Z[(J.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (T.cleanData(getAll(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return domManip(this, arguments, function(t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(getAll(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            T.fn[e] = function(e) {
                for (var n, r = [], o = T(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), T(o[a])[t](n), f.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var le = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
            ce = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            fe = new RegExp(X.join("|"), "i");
        ! function() {
            function computeStyleTests() {
                if (u) {
                    a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", te.appendChild(a).appendChild(u);
                    var s = n.getComputedStyle(u);
                    e = "1%" !== s.top, i = 12 === roundPixelMeasures(s.marginLeft), u.style.right = "60%", o = 36 === roundPixelMeasures(s.right), t = 36 === roundPixelMeasures(s.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", te.removeChild(a), u = null
                }
            }

            function roundPixelMeasures(e) {
                return Math.round(parseFloat(e))
            }
            var e, t, r, o, i, a = s.createElement("div"),
                u = s.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(y, {
                boxSizingReliable: function() {
                    return computeStyleTests(), t
                },
                pixelBoxStyles: function() {
                    return computeStyleTests(), o
                },
                pixelPosition: function() {
                    return computeStyleTests(), e
                },
                reliableMarginLeft: function() {
                    return computeStyleTests(), i
                },
                scrollboxSize: function() {
                    return computeStyleTests(), r
                }
            }))
        }();
        var pe = /^(none|table(?!-c[ea]).+)/,
            de = /^--/,
            he = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ge = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            me = ["Webkit", "Moz", "ms"],
            ve = s.createElement("div").style;
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = curCSS(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = camelCase(t),
                        u = de.test(t),
                        l = e.style;
                    if (u || (t = finalPropName(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                    i = typeof n, "string" === i && (o = U.exec(n)) && o[1] && (n = adjustCSS(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = camelCase(t);
                return de.test(t) || (t = finalPropName(s)), a = T.cssHooks[t] || T.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = curCSS(e, t, r)), "normal" === o && t in ge && (o = ge[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), T.each(["height", "width"], function(e, t) {
            T.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !pe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : V(e, he, function() {
                        return getWidthOrHeight(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var o, i = ce(e),
                        a = "border-box" === T.css(e, "boxSizing", !1, i),
                        s = r && boxModelAdjustment(e, t, r, a, i);
                    return a && y.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - boxModelAdjustment(e, t, "border", !1, i) - .5)), s && (o = U.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), setPositiveNumber(e, n, s)
                }
            }
        }), T.cssHooks.marginLeft = addGetHookIf(y.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - V(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            T.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + X[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (T.cssHooks[e + t].set = setPositiveNumber)
        }), T.fn.extend({
            css: function(e, t) {
                return O(this, function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = ce(e), o = t.length; a < o; a++) i[t[a]] = T.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), T.Tween = Tween, Tween.prototype = {
            constructor: Tween,
            init: function(e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Tween.propHooks[this.prop];
                return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Tween.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, T.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, T.fx = Tween.prototype.init, T.fx.step = {};
        var ye, xe, be = /^(?:toggle|show|hide)$/,
            we = /queueHooks$/;
        T.Animation = T.extend(Animation, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return adjustCSS(n.elem, e, U.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    x(e) ? (t = e, e = ["*"]) : e = e.match(L);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(t)
                },
                prefilters: [defaultPrefilter],
                prefilter: function(e, t) {
                    t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
                }
            }), T.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? T.extend({}, e) : {
                    complete: n || !n && t || x(e) && e,
                    duration: e,
                    easing: n && t || t && !x(t) && t
                };
                return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    x(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
                }, r
            }, T.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(G).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = T.isEmptyObject(e),
                        i = T.speed(t, n, r),
                        a = function() {
                            var t = Animation(this, T.extend({}, e), i);
                            (o || I.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = T.timers,
                            a = I.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && we.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        !t && n || T.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = I.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = T.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), T.each(["toggle", "show", "hide"], function(e, t) {
                var n = T.fn[t];
                T.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, o)
                }
            }), T.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                T.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), T.timers = [], T.fx.tick = function() {
                var e, t = 0,
                    n = T.timers;
                for (ye = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || T.fx.stop(), ye = void 0
            }, T.fx.timer = function(e) {
                T.timers.push(e), T.fx.start()
            }, T.fx.interval = 13, T.fx.start = function() {
                xe || (xe = !0, schedule())
            }, T.fx.stop = function() {
                xe = null
            }, T.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, T.fn.delay = function(e, t) {
                return e = T.fx ? T.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = s.createElement("input"),
                    t = s.createElement("select"),
                    n = t.appendChild(s.createElement("option"));
                e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = n.selected, e = s.createElement("input"), e.value = "t", e.type = "radio", y.radioValue = "t" === e.value
            }();
        var Te, Ce = T.expr.attrHandle;
        T.fn.extend({
            attr: function(e, t) {
                return O(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    T.removeAttr(this, e)
                })
            }
        }), T.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? Te : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = T.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(L);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), Te = {
            set: function(e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Ce[t] || T.find.attr;
            Ce[t] = function(e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = Ce[a], Ce[a] = o, o = null != n(e, t, r) ? a : null, Ce[a] = i), o
            }
        });
        var Se = /^(?:input|select|textarea|button)$/i,
            ke = /^(?:a|area)$/i;
        T.fn.extend({
            prop: function(e, t) {
                return O(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[T.propFix[e] || e]
                })
            }
        }), T.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Se.test(e.nodeName) || ke.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || (T.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (x(e)) return this.each(function(t) {
                    T(this).addClass(e.call(this, t, getClass(this)))
                });
                if (t = classesToArray(e), t.length)
                    for (; n = this[u++];)
                        if (o = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            s = stripAndCollapse(r), o !== s && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s, u = 0;
                if (x(e)) return this.each(function(t) {
                    T(this).removeClass(e.call(this, t, getClass(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (t = classesToArray(e), t.length)
                    for (; n = this[u++];)
                        if (o = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            s = stripAndCollapse(r), o !== s && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : x(e) ? this.each(function(n) {
                    T(this).toggleClass(e.call(this, n, getClass(this), t), t)
                }) : this.each(function() {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = T(this), a = classesToArray(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = getClass(this), t && I.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : I.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Ae = /\r/g;
        T.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0]; {
                    if (arguments.length) return r = x(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, T(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
                }
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : stripAndCollapse(T.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? i + 1 : o.length;
                        for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                            if (n = o[r], (n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                                if (t = T(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function() {
            T.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                }
            }, y.checkOn || (T.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), y.focusin = "onfocusin" in n;
        var Ee = /^(?:focusinfocus|focusoutblur)$/,
            Ne = function(e) {
                e.stopPropagation()
            };
        T.extend(T.event, {
            trigger: function(e, t, r, o) {
                var i, a, u, l, c, f, p, d, h = [r || s],
                    m = g.call(e, "type") ? e.type : e,
                    v = g.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = d = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), p = T.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                    if (!o && !p.noBubble && !b(r)) {
                        for (l = p.delegateType || m, Ee.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                        u === (r.ownerDocument || s) && h.push(u.defaultView || u.parentWindow || n)
                    }
                    for (i = 0;
                        (a = h[i++]) && !e.isPropagationStopped();) d = a, e.type = i > 1 ? l : p.bindType || m, f = (I.get(a, "events") || {})[e.type] && I.get(a, "handle"), f && f.apply(a, t), (f = c && a[c]) && f.apply && z(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !z(r) || c && x(r[m]) && !b(r) && (u = r[c], u && (r[c] = null), T.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, Ne), r[m](), e.isPropagationStopped() && d.removeEventListener(m, Ne), T.event.triggered = void 0, u && (r[c] = u)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = T.extend(new T.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                T.event.trigger(r, null, t)
            }
        }), T.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    T.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0)
            }
        }), y.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        o = I.access(r, t);
                    o || r.addEventListener(e, n, !0), I.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        o = I.access(r, t) - 1;
                    o ? I.access(r, t, o) : (r.removeEventListener(e, n, !0), I.remove(r, t))
                }
            }
        });
        var je = n.location,
            De = Date.now(),
            Pe = /\?/;
        T.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
        };
        var qe = /\[\]$/,
            Le = /\r?\n/g,
            He = /^(?:submit|button|image|reset|file)$/i,
            _e = /^(?:input|select|textarea|keygen)/i;
        T.param = function(e, t) {
            var n, r = [],
                o = function(e, t) {
                    var n = x(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) buildParams(n, e[n], t, o);
            return r.join("&")
        }, T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && _e.test(this.nodeName) && !He.test(e) && (this.checked || !Y.test(e))
                }).map(function(e, t) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Le, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Le, "\r\n")
                    }
                }).get()
            }
        });
        var Oe = /%20/g,
            Me = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Re = /^(?:GET|HEAD)$/,
            We = /^\/\//,
            Be = {},
            $e = {},
            Ue = "*/".concat("*"),
            Xe = s.createElement("a");
        Xe.href = je.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: je.href,
                type: "GET",
                isLocal: Ie.test(je.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ajaxExtend(ajaxExtend(e, T.ajaxSettings), t) : ajaxExtend(T.ajaxSettings, e)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(Be),
            ajaxTransport: addToPrefiltersOrTransports($e),
            ajax: function(e, t) {
                function done(e, t, a, s) {
                    var l, p, d, b, w, C = t;
                    c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (b = ajaxHandleResponses(h, S, a)), b = ajaxConvert(h, b, S, l), l ? (h.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (T.lastModified[o] = w), (w = S.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, d = b.error, l = !d)) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || C) + "", l ? v.resolveWith(g, [p, C, S]) : v.rejectWith(g, [S, C, d]), S.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? p : d]), y.fireWith(g, [S, C]), f && (m.trigger("ajaxComplete", [S, h]), --T.active || T.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, u, l, c, f, p, d, h = T.ajaxSetup({}, t),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                    v = T.Deferred(),
                    y = T.Callbacks("once memory"),
                    x = h.statusCode || {},
                    b = {},
                    w = {},
                    C = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {}; t = ze.exec(i);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return c ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else
                                    for (t in e) x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return r && r.abort(t), done(0, t), this
                        }
                    };
                if (v.promise(S), h.url = ((e || h.url || je.href) + "").replace(We, je.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""], null == h.crossDomain) {
                    l = s.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = Xe.protocol + "//" + Xe.host != l.protocol + "//" + l.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), inspectPrefiltersOrTransports(Be, h, t, S), c) return S;
                f = T.event && h.global, f && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Re.test(h.type), o = h.url.replace(Me, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Oe, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Pe.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Fe, "$1"), d = (Pe.test(o) ? "&" : "?") + "_=" + De++ + d), h.url = o + d), h.ifModified && (T.lastModified[o] && S.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && S.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || c)) return S.abort();
                if (C = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = inspectPrefiltersOrTransports($e, h, t, S)) {
                    if (S.readyState = 1, f && m.trigger("ajaxSend", [S, h]), c) return S;
                    h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                        S.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, r.send(b, done)
                    } catch (e) {
                        if (c) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return S
            },
            getJSON: function(e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return T.get(e, void 0, t, "script")
            }
        }), T.each(["get", "post"], function(e, t) {
            T[t] = function(e, n, r, o) {
                return x(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, T.isPlainObject(e) && e))
            }
        }), T._evalUrl = function(e) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, T.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (x(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return x(e) ? this.each(function(t) {
                    T(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = T(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = x(e);
                return this.each(function(n) {
                    T(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function(e) {
            return !T.expr.pseudos.visible(e)
        }, T.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, T.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Ge = {
                0: 200,
                1223: 204
            },
            Ve = T.ajaxSettings.xhr();
        y.cors = !!Ve && "withCredentials" in Ve, y.ajax = Ve = !!Ve, T.ajaxTransport(function(e) {
            var t, r;
            if (y.cors || Ve && !e.crossDomain) return {
                send: function(o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ge[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), T.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return T.globalEval(e), e
                }
            }
        }), T.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), T.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, o) {
                        t = T("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), s.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Qe = [],
            Ye = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Qe.pop() || T.expando + "_" + De++;
                return this[e] = !0, e
            }
        }), T.ajaxPrefilter("json jsonp", function(e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ye, "$1" + o) : !1 !== e.jsonp && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return a || T.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === i ? T(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Qe.push(o)), a && x(i) && i(a[0]), a = i = void 0
            }), "script"
        }), y.createHTMLDocument = function() {
            var e = s.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), T.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var r, o, i;
            return t || (y.createHTMLDocument ? (t = s.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = s.location.href, t.head.appendChild(r)) : t = s), o = N.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = buildFragment([e], t, i), i && i.length && T(i).remove(), T.merge([], o.childNodes))
        }, T.fn.load = function(e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = stripAndCollapse(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && T.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            T.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), T.expr.pseudos.animated = function(e) {
            return T.grep(T.timers, function(t) {
                return e === t.elem
            }).length
        }, T.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, l, c = T.css(e, "position"),
                    f = T(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), i = T.css(e, "top"), u = T.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), x(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : f.css(p)
            }
        }, T.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    T.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (o = T(e).offset(), o.top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - T.css(r, "marginTop", !0),
                        left: t.left - o.left - T.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                    return e || te
                })
            }
        }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function(r) {
                return O(this, function(e, r, o) {
                    var i;
                    if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }, e, r, arguments.length)
            }
        }), T.each(["top", "left"], function(e, t) {
            T.cssHooks[t] = addGetHookIf(y.pixelPosition, function(e, n) {
                if (n) return n = curCSS(e, t), le.test(n) ? T(e).position()[t] + "px" : n
            })
        }), T.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            T.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                T.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return O(this, function(t, n, o) {
                        var i;
                        return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, s) : T.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            T.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), T.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), T.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), T.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = l.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(l.call(arguments)))
            }, o.guid = e.guid = e.guid || T.guid++, o
        }, T.holdReady = function(e) {
            e ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = nodeName, T.isFunction = x, T.isWindow = b, T.camelCase = camelCase, T.type = toType, T.now = Date.now, T.isNumeric = function(e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, r = [], void 0 !== (o = function() {
            return T
        }.apply(t, r)) && (e.exports = o);
        var Je = n.jQuery,
            Ke = n.$;
        return T.noConflict = function(e) {
            return n.$ === T && (n.$ = Ke), e && n.jQuery === T && (n.jQuery = Je), T
        }, i || (n.jQuery = n.$ = T), T
    })
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.6"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    var r = n(17),
        o = n(18),
        i = n(20),
        a = Object.defineProperty;
    t.f = n(0) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return a(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        o = n.n(r),
        i = n(3),
        a = n.n(i),
        s = n(9),
        u = n.n(s),
        l = function() {
            function Navigation(e) {
                a()(this, Navigation), this.header(), this.pagination(), this.backBtn()
            }
            return u()(Navigation, [{
                key: "header",
                value: function() {
                    var e = '<li><a class="back-btn js-back" href="../"><i class="glyphicon chevron-left"></i></a></li>',
                        t = '<li><a href="./?random=true" title="Random"><i class="glyphicon random"></i></a></li>',
                        n = '<li><a href="./?logout=true" title="Logout"><i class="glyphicon log-out"></i></a></li>',
                        r = "<li><a href=\"#\" title=\"Settings\" onclick=\"showHidePopupMenu('settingsbox','pageselector','searchbox','comicdetails');return false;\"><i class=\"glyphicon settings\"></i></a></li>",
                        i = '<li><a class="home-btn" href="' + window.location.href + '"><i class="glyphicon home"></i></a></li>',
                        a = "",
			cookie_script = "<script>function setCookie(name, value, options = {}) {options = {path: '/',...options};if (options.expires instanceof Date) {options.expires = options.expires.toUTCString();}let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);for (let optionKey in options) {updatedCookie += '; ' + optionKey;let optionValue = options[optionKey];if (optionValue !== true) {updatedCookie += '=' + optionValue;}}document.cookie = updatedCookie;}function deleteCookie(name) {setCookie(name, '', {'max-age': -1})}</script>";
                    this.template = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                        return '\n            <div class="navigation">\n                <ul class="nav nav-bar-nav">\n                    ' + e + "\n                    " + (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "") + '\n                </ul>\n\n                <form action="' + (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "") + '" method="post" class="nav-bar-search-container">\n                    <div class="QuickSearch-container-2PWkB">\n                        <div class="QuickSearchInput-container-R2-wn">\n                            <i class="plex-icon-search-560 QuickSearchInput-searchIcon-1f6m9" aria-hidden="true"></i>\n                            <input type="text" class="QuickSearchInput-searchInput-2HU6-" value="" autocomplete="off" spellcheck="false" name="searchstring">\n                            <input class="actionbutton" hidden type="submit" value="Search">\n                        </div>\n                    </div>\n                </form>\n\n                <ul class="nav nav-bar-nav nav-bar-right">\n                    ' + n + "\n                    " + t + "\n                    " + r + "\n                </ul>\n            </div>\n        "
                    };
                    var s = "";
                    if (o()("#banner").length ? (s = o()("#banner"), e = "", t = "", r = "", s.html(this.template())) : o()(".cellcontainer").length ? s = o()("#toppagebar") : o()("#toppagebar").length && (s = o()("#toppagebar")), o()("#userinfo").length || (n = ""), a = o()("#searchform").length ? o()("#searchform").attr("action") : "/?search=true", console.log(a), o()("#arrowup").length) {
                        var u = o()("#arrowup").attr("href");
                        u = u.split("/")[1] || "", i = '<li><a class="home-btn" href="/' + u + '"><i class="glyphicon home"></i></a></li>'
                    }
		    e = cookie_script + e;
		    o()(".sectiontitle").first().before(function() {
			return '<div class="sectiontitle">Click Book</div><label class="radiolabel"><input type="radio" id="click_book_open" name="clickbook" value="open" onclick="deleteCookie(\'clickbook\');setCookie(\'clickbook\', \'open\', {\'max-age\': 10000000});location.reload();"></input>Open</label><label class="radiolabel"><input type="radio" id="click_book_popup" name="clickbook" value="popup" onclick="deleteCookie(\'clickbook\');setCookie(\'clickbook\', \'popup\', {\'max-age\': 10000000});location.reload();" checked="true"></input>Popup</label></input><br/><br/><div class="sectiontitle">Page Navigation</div><label class="radiolabel"><input type="radio" id="navigation_top" name="pagenavigation" value="top" onclick="deleteCookie(\'navigation\');setCookie(\'navigation\', \'top\', {\'max-age\': 10000000});location.reload();"></input>Top</label><label class="radiolabel"><input type="radio" id="navigation_bottom" name="pagenavigation" value="bottom" onclick="deleteCookie(\'navigation\');setCookie(\'navigation\', \'bottom\', {\'max-age\': 10000000});location.reload();"></input>Bottom</label><label class="radiolabel"><input type="radio" id="navigation_both" name="pagenavigation" value="both" onclick="deleteCookie(\'navigation\');setCookie(\'navigation\', \'both\', {\'max-age\': 10000000});location.reload();" checked="true"></input>Both</label><br/><br/><hr>'
		    })
                    s.hide().after(this.template(e, t, r, n, i, a))
                }
            }, {
                key: "pagination",
                value: function() {
                    if (o()("#arrowright").length) {
                        var e = "",
                            t = "",
                            n = "",
                            r = o()("#pagelabel").text(),
                            i = !1;
                        o()("#topbarleft #arrowleft").hasClass("hidden") || (e = "", i = !0, o()("#topbarleft #arrowleft10").hasClass("hidden") || (e += '<a href="' + o()("#arrowleft10").prop("href") + '" class="btn-link btn-dark">First</a>'), e += '<a href="' + o()("#arrowleft").prop("href") + '" class="btn-link">Previous</a>'), o()("#topbarright #arrowright").hasClass("hidden") || (t = '<a href="' + o()("#arrowright").prop("href") + '" class="btn-link">Next</a>', i = !0, o()("#topbarright #arrowright10").hasClass("hidden") || (t += '<a href="' + o()("#arrowright10").prop("href") + '" class="btn-link btn-dark">Last</a>')), i || (n = "hidden"), o()("#group").after(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            return '\n                <div  id="pagination_bottom" style="display:visible" class="pagination" ' + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "") + ">\n                    " + t + " " + e + " " + n + "\n                </div>\n            "
                        }(r, e, t, n)) || (n = "hidden"), o()(".navigation").after(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            return '\n                <div  id="pagination_top" style="display:visible" class="pagination_top" ' + (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "") + ">\n                    " + t + " " + e + " " + n + "\n                </div>\n            "
                        }(r, e, t, n))
                    }
                }
            }, {
                key: "backBtn",
                value: function() {
                    o()(".navigation").on("click", ".js-back", function(e) {
                        e.preventDefault(), window.history.back()
                    })
                }
            }]), Navigation
        }(),
        c = l,
        f = function Search(e) {
            a()(this, Search);
            var t = o()(".QuickSearchInput-searchInput-2HU6-"),
                n = o()(".QuickSearchInput-container-R2-wn");
            t.on("focus", function() {
                n.addClass("QuickSearchInput-focused-2kpW8")
            }), t.on("blur", function() {
                n.removeClass("QuickSearchInput-focused-2kpW8")
            })
        },
        p = f;
    o()(function() {
        new c, new p, o()(".cellcontainer").each(function(e, t) {
            var n = o()(t).find(".label").text();
            o()(t).prop("title", n)
        })
    })
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(10),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = function() {
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
            }
        }
        return function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
        }
    }()
}, function(e, t, n) {
    e.exports = {
        default: n(11),
        __esModule: !0
    }
}, function(e, t, n) {
    n(12);
    var r = n(5).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}, function(e, t, n) {
    var r = n(13);
    r(r.S + r.F * !n(0), "Object", {
        defineProperty: n(6).f
    })
}, function(e, t, n) {
    var r = n(4),
        o = n(5),
        i = n(14),
        a = n(16),
        s = n(22),
        u = function(e, t, n) {
            var l, c, f, p = e & u.F,
                d = e & u.G,
                h = e & u.S,
                g = e & u.P,
                m = e & u.B,
                v = e & u.W,
                y = d ? o : o[t] || (o[t] = {}),
                x = y.prototype,
                b = d ? r : h ? r[t] : (r[t] || {}).prototype;
            d && (n = t);
            for (l in n)(c = !p && b && void 0 !== b[l]) && s(y, l) || (f = c ? b[l] : n[l], y[l] = d && "function" != typeof b[l] ? n[l] : m && c ? i(f, r) : v && b[l] == f ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(f) : g && "function" == typeof f ? i(Function.call, f) : f, g && ((y.virtual || (y.virtual = {}))[l] = f, e & u.R && x && !x[l] && a(x, l, f)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function(n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    var r = n(6),
        o = n(21);
    e.exports = n(0) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(2);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    e.exports = !n(0) && !n(7)(function() {
        return 7 != Object.defineProperty(n(19)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var r = n(2),
        o = n(4).document,
        i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(2);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}]);

window.Deduplicator = {}; // "The deduplicator" global Object container

window.Reading = {}; // "Currently reading" global Object container
Reading.mark = [];

///////////////////
//MODS
///////////////////
// Anonymous "self-invoking" function
(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
	
    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };
	
	function timeDistance(date1, date2) {
		let distance = Math.abs(date1 - date2);
		const hours = Math.floor(distance / 3600000);
		distance -= hours * 3600000;
		const minutes = Math.floor(distance / 60000);
		distance -= minutes * 60000;
		const seconds = Math.floor(distance / 1000);
		if(hours == 0 && minutes == 0) return `${seconds}s`;
		if(hours == 0 && minutes < 5) return `${minutes}mn ${seconds}s`;
		if(hours == 0) return `${minutes}mn`;
		if(hours < 5) return `${hours}h ${minutes}mn`;
		return `${hours}h`;
	}
	
	function getComicsPage(start,comics_per_page, last_page){
		$.get("/comics/?index=" + start, function( data_comics ) { // HTML response
			//console.log(data_comics);
			Reading.comics = data_comics; // just for the debug console
			$(data_comics).find(".cellcontainer img").each(function( index ) { // get all the comics numbers
				var img_url = $(this).attr("src")
				var book_number = img_url.slice(img_url.indexOf("/comics/")+8,);
				book_number = book_number.slice(0,book_number.indexOf("/"));
				console.log(book_number);
				Reading.comic_numbers.push(book_number);
			});
			start = start + comics_per_page;
			if(start < last_page)
				getComicsPage(start + comics_per_page, comics_per_page, last_page);
			else {
				$.post( "/comics/?settings=true&grouping=folder&sortingCriterion=date&sortingOrder=asc", function() {
					console.log("->folder"); // reverse change to FOLDER
				});
			}
		});
	}
	
	function isReading(){ // get all comics with bookmark > 0
		var status = window.location.search.match(/[a-z|-]+/g)[0]; // extract the status out of the url. reading / want-to-read / readd
		if(Reading.bookmarkedComicsListPosition){ // we use the cached comics list instead of scanning the entire Ubooquity database for quickness reason (it's a sort of cache)
			Reading.book_number = Reading.bookmarkedComicsList[Reading.bookmarkedComicsListPosition++];
		} else { // scan all database index (could be very long, depending of the database size. For me 15sec for 1500 comics)
			Reading.book_number ++;
		}
		var json_url = window.location.origin + "/user-api/bookmark?docId=" + Reading.book_number;
		//console.log("url: "+json_url);
		$("div[title*='loading'] .number").html("<div>DB index " + Reading.book_number + "</div><div>El. time " + Math.round((Date.now() - Reading.start)/1000) + " sec</div>");
		$.getJSON( json_url, function() { // Ubooquity Webservice "Bookmark"
		  }).done(function( data_bookmark ) {
			//console.log( "success" );
			if(data_bookmark){
				//console.log(data_bookmark.docId); // already opended comics (but not necessarily read)
				Reading.mark[data_bookmark.docId * 1] = data_bookmark.mark * 1; // *1 to cast to int
				if(data_bookmark.mark * 1 > 0){
					//console.log(data_bookmark);
					var html_url = window.location.origin + "/comicdetails/" + data_bookmark.docId;
					//console.log(html_url);
					$.get(html_url, function( data_comicdetails ) { // Ubooquity Webservice "comicdetails"
					// Response ok only if the comic still exists  (in case of "clear comics database" done by the owner)
						// console.log(data_comicdetails);
						let book_number = data_comicdetails.slice(data_comicdetails.indexOf("/comics/")+8,);
						book_number = book_number.slice(0,book_number.indexOf("/"));
						let book_name = $(data_comicdetails).find("#details_title").text();
						let nb_of_pages = $(data_comicdetails).find("#details_size").text().split("page")[0] * 1;
						let mark = Reading.mark[book_number * 1] * 1;
						console.log(book_number + " - " + book_name + " : " + (mark + 1) + " / " + nb_of_pages);
						// Storing list of comics with a valid bookmark (>0) to avoid scanning the whole database too often
						if(!Reading.bookmarkedComicsListPosition) { // If a total scan is in progress, rebuild the cache
							localStorage.setItem('Reading-bookmarkedComicsList',localStorage.getItem('Reading-bookmarkedComicsList') + ";" + book_number); // append comic number
						}
						// Displays comics the owner is reading
						if(status == 'reading' && mark < nb_of_pages - 1 && mark > 2){
							$("<div class='cellcontainer'><div class='cell'><div class='thumb'><a href='#' onclick='showHidePopupMenu(\"comicdetails\",\"searchbox\",\"pageselector\",\"settingsbox\");loadComicDetails(" + book_number + ",\"/\");return false;'><img src='/comics/" + book_number + "/?cover=true'></a><div class='numberblock reading' style='background-color:rgba(0,0,0,.7); line-height: normal;padding: unset;position: absolute;bottom: 0px;left: 0px;'><div style='bottom: 0px;padding-left: 0px;width: " + Math.round((mark+1) / nb_of_pages * 100) + "%;height: 17px;left: 0px;background: rgba(204, 123, 25, 1);'></div><span style='position: absolute;left: 0px;width: 100%;bottom: 0px;'>" + (mark+1) + " of " + nb_of_pages + "</span></div></div><div class='label'>" + book_name + "</div></div></div>").insertBefore("div[title*='loading']");
						}	
						// Displays comics the owner wants to read (mark should be at page 2)
						if(status == 'want-to-read' && mark < 3){
							$("<div class='cellcontainer'><div class='cell'><div class='thumb'><a href='#' onclick='showHidePopupMenu(\"comicdetails\",\"searchbox\",\"pageselector\",\"settingsbox\");loadComicDetails(" + book_number + ",\"/\");return false;'><img src='/comics/" + book_number + "/?cover=true'></a><div class='numberblock reading'><div class='number'><span>want to read</span></div></div></div><div class='label'>" + book_name + "</div></div></div>").insertBefore("div[title*='loading']");
						}
						// Displays comics read (Reading.mark should be at the last book page)
						if(status == 'readd' && mark >= nb_of_pages - 1){
							$("<div class='cellcontainer'><div class='cell'><div class='thumb'><a href='#' onclick='showHidePopupMenu(\"comicdetails\",\"searchbox\",\"pageselector\",\"settingsbox\");loadComicDetails(" + book_number + ",\"/\");return false;'><img src='/comics/" + book_number + "/?cover=true'></a><div class='numberblock reading'><div class='number'><span>read</span></div></div></div><div class='label'>" + book_name + "</div></div></div>").insertBefore("div[title*='loading']");
						}
					});
				}
			}
			// Last book reached ?
			Reading.temp = 1;
			if(Reading.bookmarkedComicsList) Reading.temp = Reading.bookmarkedComicsListPosition - Reading.bookmarkedComicsList.length; // case "use cache"
			if(Reading.book_number > Reading.last_comic_index || !Reading.temp) { // case "rebuilt the cache"
				const duration = Math.round((Date.now() - Reading.start)/1000);
				console.log("Total scan time : " + duration + "sec");
				console.log("comics (with bookmarks) scan terminated ");
				if(!Reading.bookmarkedComicsList) { // append duration at the very end of the cache variable (when rebuilding the cache only)
					$("div[title*='loading']").hide(); // hide the "loading" sign
					localStorage.setItem('Reading-bookmarkedComicsList-buildingTime',duration); // store scan time
					var stateObj = { foo: "bar" }; // remove the trailing "nocache" to avoid a rebuild after opening and closing a comic
					history.pushState(stateObj, "", "?" + status); // status : reading / want-to-read / readd
				}
			} else { // no ? Then continue...
				isReading();
			}
		});
		
	}
    // Start polling...
    checkReady(function($) {

	//Set 'clickbook' settings based on cookie
	var click_book_cookie = document.cookie.match('(^|;) ?' + "clickbook" + '=([^;]*)(;|$)');
	if (click_book_cookie != null){
		$("#click_book_" + click_book_cookie[2]).prop("checked", true);
	}

	//Set 'navigation' settings based on cookie AND apply navigation settings
	var navigation_cookie = document.cookie.match('(^|;) ?' + "navigation" + '=([^;]*)(;|$)');
	if (navigation_cookie != null){
		$("#navigation_" + navigation_cookie[2]).prop("checked", true);
		if (navigation_cookie[2] == "top") {
			$("#pagination_top").css("display","visible");
			$("#pagination_bottom").css("display","none");
		} else if (navigation_cookie[2] == "bottom"){
			$("#pagination_bottom").css("display","visible");
			$("#pagination_top").css("display","none");
		} else if (navigation_cookie[2] == "both"){
			$("#pagination_bottom").css("display","visible");
			$("#pagination_top").css("display","visible");
		}
	} else {
		//else show both top and bottom by default if no cookies present
		$("#pagination_top").css("display","visible");
		$("#pagination_bottom").css("display","visible");
	}
	    
        //////////////////////////////////
        //Add currently reading condition to comic
        //////////////////////////////////
		var last_book_name = ""; // Used by the de-duplicator
        var last_book_file_format = "";
        $('.thumb a img').each(function(){
          raw_src = $(this).attr('src')
          page_num = '0';
          //sort comics from folders
          if (raw_src.search("folder") >= 0){
            //console.log("raw_src: "+raw_src);
          } else {
          //extract Comic ID
            thing = $(this);          
            src = $(this).attr('src');
			// START of the de-duplicator (excepted line "last_book_name..." above)
				var book_file_format = src.slice(src.lastIndexOf(".")+1, src.lastIndexOf("?")); // CBZ, CBR and PDF or of the book : EPUB, MOBI, AZW, PDF and DJVU
				var book_name = src.slice(src.lastIndexOf("/")+1,src.lastIndexOf("."));
				// console.log(book_file_format + " / " + book_name)
				if(book_name == last_book_name) { // 2 books have the same name (but not the same format...)
					if(book_file_format == "pdf") { // PDF format is not welcome if a CBR or CBZ file exists for the same comic
						thing.parents('.cellcontainer').hide(); // hide the duplicate book if it is in pdf
						console.log('duplicate book file hidden : ' + decodeURI(book_name) + '.pdf');
					}
					if(last_book_file_format == "pdf") { // usefull when user watch the "latest comics" page
						thing.parents('.cellcontainer').prev().hide(); // hide the duplicate book if it is in pdf
						console.log('duplicate book file hidden : ' + decodeURI(book_name) + '.pdf');
					}
				}
				last_book_name = book_name // memorize the book name
				last_book_file_format = book_file_format // memorize the book format
			// END of the de-duplicator
            //console.log("source: "+src);
            $(this).closest('.thumb').append('<div class="numberblock"><div class="number"><span></span></div></div>');
            var comicid = src.split('/');
            console.log("Comic ID: "+comicid[2]);
            //get comic meta from server
            json_url = window.location.origin+"/user-api/bookmark?docId="+comicid[2];
            console.log("url: "+json_url);
		  
	    //Check cookie settings for clickng books and set to open book directly or show popup
	    var my_cookie = document.cookie;
	    if (my_cookie.match('(^|;) ?' + "clickbook" + '=([^;]*)(;|$)') != null){
		if  (my_cookie.match('(^|;) ?' + "clickbook" + '=([^;]*)(;|$)')[2] == "open"){
			var html_url = window.location.origin + "/comicdetails/" + comicid[2];
			$.get(html_url, function( data_comicdetails ) {
                var total_pages = $(data_comicdetails).find("#details_size").text().split("page")[0] * 1;
                var imageSelector = "img[src*='/comics/"+comicid[2]+"']";
				$(imageSelector).parent().prop("href","/comicreader/reader.html#?docId=" + comicid[2] + "&startIndex=0&type=comic&nbPages=" + total_pages + "&storeBookmarksInCookies=false");
                $(imageSelector).parent().prop("onclick",""); 
			});
		};
	    }

            $.getJSON( json_url, function() {
                console.log( "success" );
              }).done(function( data ) {
                current_this = thing;
                if (data != null){
                  var items = [];
                  var c_id = '';
                  $.each( data, function( key, val ) {
                    if (key == 'docId'){c_id = val;}
                    if (key == 'mark'){
                      page_num = val;
                      if (page_num == '1'){ // A améliorer : lu / en cours / terminé
                        $("img[src*='"+c_id+"']").closest('.thumb').find('.number').html("want to read");
                        $("img[src*='"+c_id+"']").closest('.thumb').find('.numberblock').addClass("reading");
                      } else {
						if (page_num != '0'){ // case readd or reading but we don't know the total number of pages of this comic 
							Reading.mark[c_id] = page_num * 1 + 1; // save bookmark
                            var html_url = window.location.origin + "/comicdetails/" + c_id;             
							$.get(html_url, function( data_comicdetails ) { // Ubooquity Webservice "comicdetails"
								let book_number = data_comicdetails.slice(data_comicdetails.indexOf("/comics/")+8,);
								book_number = book_number.slice(0,book_number.indexOf("/"));
								let nb_of_pages = $(data_comicdetails).find("#details_size").text().split("page")[0] * 1;
								let mark = Reading.mark[book_number * 1] * 1;
								$("img[src*='"+c_id+"']").closest('.thumb').find('.number').html(mark == nb_of_pages?"read":mark + " / " + nb_of_pages);
								$("img[src*='"+c_id+"']").closest('.thumb').find('.numberblock').addClass("reading");
							});
						}
					  }
                      //console.log("page_num "+page_num);
                    }
                  });
                }
            }).fail(function(){});
          }
          //console.log("triggered");
        });
		// ++++++++++++++++++++++++++++++++++++++++++++++++++
		// NEW MOD : "Currently reading" comics [starcrouz]
		// ++++++++++++++++++++++++++++++++++++++++++++++++++
		if(window.location.pathname.includes('comics')) // exclude ebooks
		// insert new buttons on the top menu
			setTimeout(function(){ // To let the DOM beeing populated
				$('<li><a title="reading" href="?reading"><i class="glyphicon eye"></i></a></li><li><a title="want-to-read" href="?want-to-read"><i class="glyphicon heart"></i></a></li><li><a title="read" href="?readd"><i class="glyphicon book-read"></i></a></li>').insertAfter('.navigation li:eq(2)');
			},100);
		// if one of the 3 "reading" buttons have been pushed
		var status = window.location.search?window.location.search.match(/[a-z|-]+/g)[0]:""; // extract the status out of the url. reading / want-to-read / readd
		console.log(window.location.search);
		if(status == 'reading' || status == 'readd' || status == 'want-to-read'){
			$(".rootlink").hide(); //clear all folders from page
			$(".cellcontainer").hide(); // clear all comics from page
			$(".pagination").hide(); // hide page navigation down the page
			$('#group').append("<div class='cellcontainer' title='loading'><div class='cell'><div class='thumb'><img src='/theme/loading.gif' /><div class='numberblock'><div class='number'><span></span></div></div></div>"); // Add a "loading" indicator
			Reading.start = Date.now(); // start the chrono
			if(window.location.search.includes('nocache')){
				localStorage.removeItem('Reading-bookmarkedComicsList'); // clear cached bookmarked comics list
			}
			if(localStorage.getItem('Reading-bookmarkedComicsList')) { // if it exists, get cached comics list
				$("div[title*='loading']").hide(); // hide the "loading" sign
				// This process consist of scanning only the comics in the cached list (on a particular device only, not on the server)
				Reading.bookmarkedComicsList = localStorage.getItem('Reading-bookmarkedComicsList').split(";"); // get cached comics list
				Reading.bookmarkedComicsListPosition = 1;
				
				$("#group").prepend("<div>List calculated " + timeDistance(Date.now(),localStorage.getItem('Reading-bookmarkedComicsList-date')) + " ago. <a href='" + window.location.href + "&nocache'>Update ?</a> (Last time, it took " + localStorage.getItem('Reading-bookmarkedComicsList-buildingTime') + "s)</div>");
				if(Reading.bookmarkedComicsList.length < 3){ // case : no bookmarks at all (new library, rebuild...)
					//$("#group").append("<div>No bookmark for the moment</div>");
				} else { // display bookmarked comics
					isReading();
				}
			} else {
				$("#group").prepend("<div>Generation of this list could be long, depending of the amount of comics you own (around 10s for 1000 comics). <a href='?" + status + "'>Next time</a>, it will be far quicker : it will be cached. You can also \"Clear comics database\" in the Ubooquity admin page to speed up this generation.</div>");
				if(Reading.bookmarkedComicsList){ // clear properties if they exist
					delete Reading.bookmarkedComicsList;
					delete Reading.bookmarkedComicsListPosition;
				}
				// This process consist of scanning the *whole* Ubooquity database comic by comic (at least one request by comic) because theres no Ubooquity webservice to get the list of bookmarked comics. Time consuming but efficient.
				
				// Look for the first & last comic index in the Ubooquity database by parsing first & last comic webpage (in flat list, sorted by date)
				$.post( "/comics/?settings=true&grouping=flat&sortingCriterion=date&sortingOrder=asc", function() {
					console.log("->flat"); // Change settings to FLAT to be able to get all comics numbers easily
					
					$.get("/comics/", function( data_comics ) { // 1st comic page
						//console.log(data_comics);
						Reading.comics = data_comics; // just for the debug console
						var img_url = $(data_comics).find(".cellcontainer img").attr("src"); // thumb img url of 1st comic number in the DB
						var book_number = img_url.slice(img_url.indexOf("/comics/")+8,);
						book_number = book_number.slice(0,book_number.indexOf("/"));
						console.log("1st book index : " + book_number);
						Reading.book_number = book_number * 1 - 1; // 1st comic number in the DB (integer)
						var last_comics_page = $(data_comics).find(".pagenumber").last().attr("href");
						//console.log(document.cookie.match('(^|;) ?' + "ComicSettings" + '=([^;]*)(;|$)')[2]);
						$.get(window.location.origin+"/comics/"+last_comics_page, function( data_comics ) { // last comic page
							var img_url = $(data_comics).find(".cellcontainer img").last().attr("src"); // thumb img url of last comic number in the DB
							console.log("img_url : " + img_url);
							var last_comic_index = img_url.slice(img_url.indexOf("/comics/")+8,);
							last_comic_index = last_comic_index.slice(0,last_comic_index.indexOf("/"));
							Reading.last_comic_index = last_comic_index * 1 - 1; // 1st comic number in the DB (integer)
							console.log("last book index : " + last_comic_index);
							if(Reading.last_comic_index < Reading.book_number) { // Abnormal. Means that the batabase needs to be rebuilt
								alert('Error. Please rebuild your Ubooquity database ("clear comics database" in the admin)');
								return;
							}
								
							$.post( "/comics/?settings=true&grouping=folder&sortingCriterion=date&sortingOrder=asc", function() {
								console.log("->folder"); // reverse settings to FOLDER
							});
							// With the first and last number we can fetch the status of all comics in the DB
							localStorage.setItem('Reading-bookmarkedComicsList',""); // init cached bookmarked comics list
							localStorage.setItem('Reading-bookmarkedComicsList-date',Date.now()); // store start date
							isReading();
						});

					});
				});
			}
		} else { // If normal page (not the 3 buttons)
			// add a link on every comic title. I use it to get french reviews 
			$('.label').each(function(){$(this).html("<a href=\"https://www.google.fr/search?q=site:https://www.bedetheque.com/ " + $(this).html() + "\" target=\"_blank\" style=\"color:white\">" + $(this).html() + "</a>")})
		}
    });
})();
// end Anonymous "self-invoking" function

