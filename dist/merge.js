(function(e, t) {
    "use strict";
    function n(e) {
        var t = vt[e] = {};
        return et.each(e.split(it), function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i(e, n, i, r) {
        if (et.acceptData(e)) {
            var o, s, a = et.expando, l = "string" == typeof n, u = e.nodeType, c = u ? et.cache : e, h = u ? e[a] : e[a] && a;
            if (h && c[h] && (r || c[h].data) || !l || i !== t) return h || (u ? e[a] = h = rt.pop() || et.guid++ : h = a), 
            c[h] || (c[h] = {}, u || (c[h].toJSON = et.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[h] = et.extend(c[h], n) : c[h].data = et.extend(c[h].data, n)), 
            o = c[h], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[et.camelCase(n)] = i), 
            l ? (s = o[n], null == s && (s = o[et.camelCase(n)])) : s = o, s;
        }
    }
    function r(e, t, n) {
        if (et.acceptData(e)) {
            var i, r, o, a = e.nodeType, l = a ? et.cache : e, u = a ? e[et.expando] : et.expando;
            if (l[u]) {
                if (t && (i = n ? l[u] : l[u].data)) {
                    et.isArray(t) || (t in i ? t = [ t ] : (t = et.camelCase(t), t = t in i ? [ t ] : t.split(" ")));
                    for (r = 0, o = t.length; o > r; r++) delete i[t[r]];
                    if (!(n ? s : et.isEmptyObject)(i)) return;
                }
                (n || (delete l[u].data, s(l[u]))) && (a ? et.cleanData([ e ], !0) : et.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null);
            }
        }
    }
    function o(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(bt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : yt.test(i) ? et.parseJSON(i) : i;
                } catch (o) {}
                et.data(e, n, i);
            } else i = t;
        }
        return i;
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !et.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function a() {
        return !1;
    }
    function l() {
        return !0;
    }
    function u(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType;
    }
    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function h(e, t, n) {
        if (t = t || 0, et.isFunction(t)) return et.grep(e, function(e, i) {
            var r = !!t.call(e, i, e);
            return r === n;
        });
        if (t.nodeType) return et.grep(e, function(e) {
            return e === t === n;
        });
        if ("string" == typeof t) {
            var i = et.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (Ot.test(t)) return et.filter(t, i, !n);
            t = et.filter(t, i);
        }
        return et.grep(e, function(e) {
            return et.inArray(e, t) >= 0 === n;
        });
    }
    function f(e) {
        var t = It.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function p(e, t) {
        if (1 === t.nodeType && et.hasData(e)) {
            var n, i, r, o = et._data(e), s = et._data(t, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a) for (i = 0, r = a[n].length; r > i; i++) et.event.add(t, n, a[n][i]);
            }
            s.data && (s.data = et.extend({}, s.data));
        }
    }
    function g(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), 
        n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
        et.support.html5Clone && e.innerHTML && !et.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
        t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), 
        t.removeAttribute(et.expando));
    }
    function m(e) {
        return e.getElementsByTagName !== t ? e.getElementsByTagName("*") : e.querySelectorAll !== t ? e.querySelectorAll("*") : [];
    }
    function v(e) {
        Jt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function y(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = xn.length; r--; ) if (t = xn[r] + n, 
        t in e) return t;
        return i;
    }
    function b(e, t) {
        return e = t || e, "none" === et.css(e, "display") || !et.contains(e.ownerDocument, e);
    }
    function x(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (r[o] = et._data(n, "olddisplay"), 
        t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && b(n) && (r[o] = et._data(n, "olddisplay", T(n.nodeName)))) : (i = on(n, "display"), 
        r[o] || "none" === i || et._data(n, "olddisplay", i)));
        for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
        return e;
    }
    function w(e, t, n) {
        var i = dn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function C(e, t, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += et.css(e, n + bn[r], !0)), 
        i ? ("content" === n && (o -= parseFloat(on(e, "padding" + bn[r])) || 0), "margin" !== n && (o -= parseFloat(on(e, "border" + bn[r] + "Width")) || 0)) : (o += parseFloat(on(e, "padding" + bn[r])) || 0, 
        "padding" !== n && (o += parseFloat(on(e, "border" + bn[r] + "Width")) || 0));
        return o;
    }
    function k(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight, r = !0, o = et.support.boxSizing && "border-box" === et.css(e, "boxSizing");
        if (0 >= i || null == i) {
            if (i = on(e, t), (0 > i || null == i) && (i = e.style[t]), pn.test(i)) return i;
            r = o && (et.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + C(e, t, n || (o ? "border" : "content"), r) + "px";
    }
    function T(e) {
        if (mn[e]) return mn[e];
        var t = et("<" + e + ">").appendTo(z.body), n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (sn = z.body.appendChild(sn || et.extend(z.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), an && sn.createElement || (an = (sn.contentWindow || sn.contentDocument).document, 
        an.write("<!doctype html><html><body>"), an.close()), t = an.body.appendChild(an.createElement(e)), 
        n = on(t, "display"), z.body.removeChild(sn)), mn[e] = n, n;
    }
    function S(e, t, n, i) {
        var r;
        if (et.isArray(t)) et.each(t, function(t, r) {
            n || Cn.test(e) ? i(e, r) : S(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i);
        }); else if (n || "object" !== et.type(t)) i(e, t); else for (r in t) S(e + "[" + r + "]", t[r], n, i);
    }
    function E(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r, o, s = t.toLowerCase().split(it), a = 0, l = s.length;
            if (et.isFunction(n)) for (;l > a; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), 
            r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n);
        };
    }
    function _(e, n, i, r) {
        function o(l) {
            var u;
            return s[l] = !0, et.each(e[l] || [], function(e, l) {
                var c = l(n, i, r);
                return "string" != typeof c || a || s[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), 
                o(c), !1);
            }), u;
        }
        var s = {}, a = e === In;
        return o(n.dataTypes[0]) || !s["*"] && o("*");
    }
    function N(e, n) {
        var i, r, o = et.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        r && et.extend(!0, e, r);
    }
    function $(e, n, i) {
        var r, o, s, a, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (o in c) o in i && (n[c[o]] = i[o]);
        for (;"*" === u[0]; ) u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r) for (o in l) if (l[o] && l[o].test(r)) {
            u.unshift(o);
            break;
        }
        if (u[0] in i) s = u[0]; else {
            for (o in i) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    s = o;
                    break;
                }
                a || (a = o);
            }
            s = s || a;
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : t;
    }
    function A(e, t) {
        var n, i, r, o, s = e.dataTypes.slice(), a = s[0], l = {}, u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1]) for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
        for (;r = s[++u]; ) if ("*" !== r) {
            if ("*" !== a && a !== r) {
                if (n = l[a + " " + r] || l["* " + r], !n) for (i in l) if (o = i.split(" "), o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                    n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], s.splice(u--, 0, r));
                    break;
                }
                if (n !== !0) if (n && e["throws"]) t = n(t); else try {
                    t = n(t);
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: n ? c : "No conversion from " + a + " to " + r
                    };
                }
            }
            a = r;
        }
        return {
            state: "success",
            data: t
        };
    }
    function j() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function D() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function H() {
        return setTimeout(function() {
            Jn = t;
        }, 0), Jn = et.now();
    }
    function M(e, t) {
        et.each(t, function(t, n) {
            for (var i = (ni[t] || []).concat(ni["*"]), r = 0, o = i.length; o > r; r++) if (i[r].call(e, t, n)) return;
        });
    }
    function L(e, t, n) {
        var i, r = 0, o = ti.length, s = et.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            for (var t = Jn || H(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(i);
            return s.notifyWith(e, [ l, i, n ]), 1 > i && o ? n : (s.resolveWith(e, [ l ]), 
            !1);
        }, l = s.promise({
            elem: e,
            props: et.extend({}, t),
            opts: et.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Jn || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = et.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i), i;
            },
            stop: function(t) {
                for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [ l, t ]) : s.rejectWith(e, [ l, t ]), this;
            }
        }), u = l.props;
        for (F(u, l.opts.specialEasing); o > r; r++) if (i = ti[r].call(l, e, u, l.opts)) return i;
        return M(l, u), et.isFunction(l.opts.start) && l.opts.start.call(e, l), et.fx.timer(et.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function F(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = et.camelCase(n), r = t[i], o = e[n], et.isArray(o) && (r = o[1], 
        o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = et.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
    }
    function O(e, t, n) {
        var i, r, o, s, a, l, u, c, h = this, f = e.style, d = {}, p = [], g = e.nodeType && b(e);
        n.queue || (u = et._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, 
        c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c();
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, et.queue(e, "fx").length || u.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === et.css(e, "display") && "none" === et.css(e, "float") && (et.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", et.support.shrinkWrapBlocks || h.done(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (i in t) if (o = t[i], Kn.exec(o)) {
            if (delete t[i], o === (g ? "hide" : "show")) continue;
            p.push(i);
        }
        if (s = p.length) for (a = et._data(e, "fxshow") || et._data(e, "fxshow", {}), g ? et(e).show() : h.done(function() {
            et(e).hide();
        }), h.done(function() {
            var t;
            et._removeData(e, "fxshow");
            for (t in d) et.style(e, t, d[t]);
        }), i = 0; s > i; i++) r = p[i], l = h.createTween(r, g ? a[r] : 0), d[r] = a[r] || et.style(e, r), 
        r in a || (a[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0));
    }
    function B(e, t, n, i, r) {
        return new B.prototype.init(e, t, n, i, r);
    }
    function R(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = bn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function I(e) {
        return et.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    var P, q, z = e.document, V = e.location, W = e.navigator, U = e.jQuery, X = e.$, Q = Array.prototype.push, G = Array.prototype.slice, J = Array.prototype.indexOf, Y = Object.prototype.toString, K = Object.prototype.hasOwnProperty, Z = String.prototype.trim, et = function(e, t) {
        return new et.fn.init(e, t, P);
    }, tt = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, nt = /\S/, it = /\s+/, rt = [], ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, st = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, lt = /^[\],:{}\s]*$/, ut = /(?:^|:|,)(?:\s*\[)+/g, ct = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ht = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ft = /^-ms-/, dt = /-([\da-z])/gi, pt = function(e, t) {
        return (t + "").toUpperCase();
    }, gt = function() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", gt, !1), et.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", gt), 
        et.ready());
    }, mt = {};
    et.fn = et.prototype = {
        constructor: et,
        init: function(e, n, i) {
            var r, o, s;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : st.exec(e), 
                !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) return n = n instanceof et ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : z, 
                e = et.parseHTML(r[1], s, !0), at.test(r[1]) && et.isPlainObject(n) && this.attr.call(e, n, !0), 
                et.merge(this, e);
                if (o = z.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = z, this.selector = e, this;
            }
            return et.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), et.makeArray(e, this));
        },
        selector: "",
        jquery: "1.8.3pre",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return G.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e, t, n) {
            var i = et.merge(this.constructor(), e);
            return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), 
            i;
        },
        each: function(e, t) {
            return et.each(this, e, t);
        },
        ready: function(e) {
            return et.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(et.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Q,
        sort: [].sort,
        splice: [].splice
    }, et.fn.init.prototype = et.fn, et.extend = et.fn.extend = function() {
        var e, n, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || et.isFunction(a) || (a = {}), 
        u === l && (a = this, --l); u > l; l++) if (null != (e = arguments[l])) for (n in e) i = a[n], 
        r = e[n], a !== r && (c && r && (et.isPlainObject(r) || (o = et.isArray(r))) ? (o ? (o = !1, 
        s = i && et.isArray(i) ? i : []) : s = i && et.isPlainObject(i) ? i : {}, a[n] = et.extend(c, s, r)) : r !== t && (a[n] = r));
        return a;
    }, et.extend({
        noConflict: function(t) {
            return e.$ === et && (e.$ = X), t && e.jQuery === et && (e.jQuery = U), et;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? et.readyWait++ : et.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--et.readyWait : !et.isReady) {
                if (!z.body) return setTimeout(et.ready, 1);
                et.isReady = !0, e !== !0 && --et.readyWait > 0 || (q.resolveWith(z, [ et ]), et.fn.trigger && et(z).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === et.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === et.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : mt[Y.call(e)] || "object";
        },
        isPlainObject: function(e) {
            if (!e || "object" !== et.type(e) || e.nodeType || et.isWindow(e)) return !1;
            try {
                if (e.constructor && !K.call(e, "constructor") && !K.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var i;
            for (i in e) ;
            return i === t || K.call(e, i);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            var i;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || z, 
            (i = at.exec(e)) ? [ t.createElement(i[1]) ] : (i = et.buildFragment([ e ], t, n ? null : []), 
            et.merge([], (i.cacheable ? et.clone(i.fragment) : i.fragment).childNodes))) : null;
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = et.trim(n), 
            n && lt.test(n.replace(ct, "@").replace(ht, "]").replace(ut, ""))) ? Function("return " + n)() : (et.error("Invalid JSON: " + n), 
            t);
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (r = new DOMParser(), i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), 
                i.async = "false", i.loadXML(n));
            } catch (o) {
                i = t;
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || et.error("Invalid XML: " + n), 
            i;
        },
        noop: function() {},
        globalEval: function(t) {
            t && nt.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(ft, "ms-").replace(dt, pt);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, n, i) {
            var r, o = 0, s = e.length, a = s === t || et.isFunction(e);
            if (i) if (a) {
                for (r in e) if (n.apply(e[r], i) === !1) break;
            } else for (;s > o && n.apply(e[o++], i) !== !1; ) ; else if (a) {
                for (r in e) if (n.call(e[r], r, e[r]) === !1) break;
            } else for (;s > o && n.call(e[o], o, e[o++]) !== !1; ) ;
            return e;
        },
        trim: Z && !Z.call("﻿ ") ? function(e) {
            return null == e ? "" : Z.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(ot, "");
        },
        makeArray: function(e, t) {
            var n, i = t || [];
            return null != e && (n = et.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || et.isWindow(e) ? Q.call(i, e) : et.merge(i, e)), 
            i;
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (J) return J.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var i = n.length, r = e.length, o = 0;
            if ("number" == typeof i) for (;i > o; o++) e[r++] = n[o]; else for (;n[o] !== t; ) e[r++] = n[o++];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            var i, r = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
            return r;
        },
        map: function(e, n, i) {
            var r, o, s = [], a = 0, l = e.length, u = e instanceof et || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || et.isArray(e));
            if (u) for (;l > a; a++) r = n(e[a], a, i), null != r && (s[s.length] = r); else for (o in e) r = n(e[o], o, i), 
            null != r && (s[s.length] = r);
            return s.concat.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            return "string" == typeof n && (i = e[n], n = e, e = i), et.isFunction(e) ? (r = G.call(arguments, 2), 
            o = function() {
                return e.apply(n || this, r.concat(G.call(arguments)));
            }, o.guid = e.guid = e.guid || et.guid++, o) : t;
        },
        access: function(e, n, i, r, o, s, a) {
            var l, u = null == i, c = 0, h = e.length;
            if (i && "object" == typeof i) {
                for (c in i) et.access(e, n, c, i[c], 1, s, r);
                o = 1;
            } else if (r !== t) {
                if (l = a === t && et.isFunction(r), u && (l ? (l = n, n = function(e, t, n) {
                    return l.call(et(e), n);
                }) : (n.call(e, r), n = null)), n) for (;h > c; c++) n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, a);
                o = 1;
            }
            return o ? e : u ? n.call(e) : h ? n(e[0], i) : s;
        },
        now: function() {
            return new Date().getTime();
        }
    }), et.ready.promise = function(t) {
        if (!q) if (q = et.Deferred(), "complete" === z.readyState) setTimeout(et.ready, 1); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", gt, !1), 
        e.addEventListener("load", et.ready, !1); else {
            z.attachEvent("onreadystatechange", gt), e.attachEvent("onload", et.ready);
            var n = !1;
            try {
                n = null == e.frameElement && z.documentElement;
            } catch (i) {}
            n && n.doScroll && function r() {
                if (!et.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(r, 50);
                    }
                    et.ready();
                }
            }();
        }
        return q.promise(t);
    }, et.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        mt["[object " + t + "]"] = t.toLowerCase();
    }), P = et(z);
    var vt = {};
    et.Callbacks = function(e) {
        e = "string" == typeof e ? vt[e] || n(e) : et.extend({}, e);
        var i, r, o, s, a, l, u = [], c = !e.once && [], h = function(t) {
            for (i = e.memory && t, r = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++) if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break;
            }
            o = !1, u && (c ? c.length && h(c.shift()) : i ? u = [] : f.disable());
        }, f = {
            add: function() {
                if (u) {
                    var t = u.length;
                    (function n(t) {
                        et.each(t, function(t, i) {
                            var r = et.type(i);
                            "function" === r ? e.unique && f.has(i) || u.push(i) : i && i.length && "string" !== r && n(i);
                        });
                    })(arguments), o ? a = u.length : i && (s = t, h(i));
                }
                return this;
            },
            remove: function() {
                return u && et.each(arguments, function(e, t) {
                    for (var n; (n = et.inArray(t, u, n)) > -1; ) u.splice(n, 1), o && (a >= n && a--, 
                    l >= n && l--);
                }), this;
            },
            has: function(e) {
                return et.inArray(e, u) > -1;
            },
            empty: function() {
                return u = [], this;
            },
            disable: function() {
                return u = c = i = t, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = t, i || f.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !u || r && !c || (o ? c.push(t) : h(t)), 
                this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return f;
    }, et.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", et.Callbacks("once memory"), "resolved" ], [ "reject", "fail", et.Callbacks("once memory"), "rejected" ], [ "notify", "progress", et.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return et.Deferred(function(n) {
                        et.each(t, function(t, i) {
                            var o = i[0], s = e[t];
                            r[i[1]](et.isFunction(s) ? function() {
                                var e = s.apply(this, arguments);
                                e && et.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [ e ]);
                            } : n[o]);
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? et.extend(e, i) : i;
                }
            }, r = {};
            return i.pipe = i.then, et.each(t, function(e, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = s.fire, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), e && e.call(r, r), r;
        },
        when: function(e) {
            var t, n, i, r = 0, o = G.call(arguments), s = o.length, a = 1 !== s || e && et.isFunction(e.promise) ? s : 0, l = 1 === a ? e : et.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                };
            };
            if (s > 1) for (t = Array(s), n = Array(s), i = Array(s); s > r; r++) o[r] && et.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
            return a || l.resolveWith(i, o), l.promise();
        }
    }), et.support = function() {
        var n, i, r, o, s, a, l, u, c, h, f, d = z.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        i = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !i || !r || !i.length) return {};
        o = z.createElement("select"), s = o.appendChild(z.createElement("option")), a = d.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", n = {
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: s.selected,
            getSetAttribute: "t" !== d.className,
            enctype: !!z.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === z.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, n.noCloneChecked = a.cloneNode(!0).checked, o.disabled = !0, 
        n.optDisabled = !s.disabled;
        try {
            delete d.test;
        } catch (p) {
            n.deleteExpando = !1;
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function() {
            n.noCloneEvent = !1;
        }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = z.createElement("input"), 
        a.value = "t", a.setAttribute("type", "radio"), n.radioValue = "t" === a.value, 
        a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), 
        l = z.createDocumentFragment(), l.appendChild(d.lastChild), n.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        n.appendChecked = a.checked, l.removeChild(a), l.appendChild(d), !d.addEventListener) for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) u = "on" + c, h = u in d, h || (d.setAttribute(u, "return;"), h = "function" == typeof d[u]), 
        n[c + "Bubbles"] = h;
        return et(function() {
            var i, r, o, s, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = z.getElementsByTagName("body")[0];
            l && (i = z.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", 
            l.insertBefore(i, l.firstChild), r = z.createElement("div"), i.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            o = r.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            h = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", 
            n.reliableHiddenOffsets = h && 0 === o[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            n.boxSizing = 4 === r.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, 
            e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, 
            n.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width, s = z.createElement("div"), s.style.cssText = r.style.cssText = a, s.style.marginRight = s.style.width = "0", 
            r.style.width = "1px", r.appendChild(s), n.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)), 
            r.style.zoom !== t && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", 
            n.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", 
            r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== r.offsetWidth, 
            i.style.zoom = 1), l.removeChild(i), i = r = o = s = null);
        }), l.removeChild(d), i = r = o = s = a = l = d = null, n;
    }();
    var yt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, bt = /([A-Z])/g;
    et.extend({
        cache: {},
        expando: "jQuery" + (et.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? et.cache[e[et.expando]] : e[et.expando], !!e && !s(e);
        },
        data: function(e, t, n) {
            return i(e, t, n, !1);
        },
        removeData: function(e, t) {
            return r(e, t, !1);
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return r(e, t, !0);
        },
        acceptData: function(e) {
            var t = e.nodeName && et.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), et.fn.extend({
        data: function(e, n) {
            var i, r, s, a, l, u = this[0], c = 0, h = null;
            if (e === t) {
                if (this.length && (h = et.data(u), 1 === u.nodeType && !et._data(u, "parsedAttrs"))) {
                    for (s = u.attributes, l = s.length; l > c; c++) a = s[c].name, a.indexOf("data-") || (a = et.camelCase(a.substring(5)), 
                    o(u, a, h[a]));
                    et._data(u, "parsedAttrs", !0);
                }
                return h;
            }
            return "object" == typeof e ? this.each(function() {
                et.data(this, e);
            }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", r = i[1] + "!", et.access(this, function(n) {
                return n === t ? (h = this.triggerHandler("getData" + r, [ i[0] ]), h === t && u && (h = et.data(u, e), 
                h = o(u, e, h)), h === t && i[1] ? this.data(i[0]) : h) : (i[1] = n, this.each(function() {
                    var t = et(this);
                    t.triggerHandler("setData" + r, i), et.data(this, e, n), t.triggerHandler("changeData" + r, i);
                }), t);
            }, null, n, arguments.length > 1, null, !1));
        },
        removeData: function(e) {
            return this.each(function() {
                et.removeData(this, e);
            });
        }
    }), et.extend({
        queue: function(e, n, i) {
            var r;
            return e ? (n = (n || "fx") + "queue", r = et._data(e, n), i && (!r || et.isArray(i) ? r = et._data(e, n, et.makeArray(i)) : r.push(i)), 
            r || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = et.queue(e, t), i = n.length, r = n.shift(), o = et._queueHooks(e, t), s = function() {
                et.dequeue(e, t);
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return et._data(e, n) || et._data(e, n, {
                empty: et.Callbacks("once memory").add(function() {
                    et._removeData(e, t + "queue"), et._removeData(e, n);
                })
            });
        }
    }), et.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? et.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = et.queue(this, e, n);
                et._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && et.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                et.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = et.fx ? et.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var i, r = 1, o = et.Deferred(), s = this, a = this.length, l = function() {
                --r || o.resolveWith(s, [ s ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--; ) i = et._data(s[a], e + "queueHooks"), 
            i && i.empty && (r++, i.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var xt, wt, Ct, kt = /[\t\r\n]/g, Tt = /\r/g, St = /^(?:button|input)$/i, Et = /^(?:button|input|object|select|textarea)$/i, _t = /^a(?:rea|)$/i, Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $t = et.support.getSetAttribute;
    et.fn.extend({
        attr: function(e, t) {
            return et.access(this, et.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                et.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return et.access(this, et.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = et.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, i, r, o, s, a;
            if (et.isFunction(e)) return this.each(function(t) {
                et(this).addClass(e.call(this, t, this.className));
            });
            if (e && "string" == typeof e) for (t = e.split(it), n = 0, i = this.length; i > n; n++) if (r = this[n], 
            1 === r.nodeType) if (r.className || 1 !== t.length) {
                for (o = " " + r.className + " ", s = 0, a = t.length; a > s; s++) 0 > o.indexOf(" " + t[s] + " ") && (o += t[s] + " ");
                r.className = et.trim(o);
            } else r.className = e;
            return this;
        },
        removeClass: function(e) {
            var n, i, r, o, s, a, l;
            if (et.isFunction(e)) return this.each(function(t) {
                et(this).removeClass(e.call(this, t, this.className));
            });
            if (e && "string" == typeof e || e === t) for (n = (e || "").split(it), a = 0, l = this.length; l > a; a++) if (r = this[a], 
            1 === r.nodeType && r.className) {
                for (i = (" " + r.className + " ").replace(kt, " "), o = 0, s = n.length; s > o; o++) for (;i.indexOf(" " + n[o] + " ") >= 0; ) i = i.replace(" " + n[o] + " ", " ");
                r.className = e ? et.trim(i) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, i = "boolean" == typeof t;
            return et.isFunction(e) ? this.each(function(n) {
                et(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var r, o = 0, s = et(this), a = t, l = e.split(it); r = l[o++]; ) a = i ? a : !s.hasClass(r), 
                s[a ? "addClass" : "removeClass"](r); else ("undefined" === n || "boolean" === n) && (this.className && et._data(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : et._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(kt, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, i, r, o = this[0];
            {
                if (arguments.length) return r = et.isFunction(e), this.each(function(i) {
                    var o, s = et(this);
                    1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : et.isArray(o) && (o = et.map(o, function(e) {
                        return null == e ? "" : e + "";
                    })), n = et.valHooks[this.type] || et.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o));
                });
                if (o) return n = et.valHooks[o.type] || et.valHooks[o.nodeName.toLowerCase()], 
                n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(Tt, "") : null == i ? "" : i);
            }
        }
    }), et.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], 
                    !(!n.selected && l !== r || (et.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && et.nodeName(n.parentNode, "optgroup"))) {
                        if (t = et(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n = et.makeArray(t);
                    return et(e).find("option").each(function() {
                        this.selected = et.inArray(et(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attr: function(e, n, i, r) {
            var o, s, a, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return r && et.isFunction(et.fn[n]) ? et(e)[n](i) : e.getAttribute === t ? et.prop(e, n, i) : (a = 1 !== l || !et.isXMLDoc(e), 
            a && (n = n.toLowerCase(), s = et.attrHooks[n] || (Nt.test(n) ? wt : xt)), i !== t ? null === i ? (et.removeAttr(e, n), 
            t) : s && "set" in s && a && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), 
            i) : s && "get" in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), 
            null === o ? t : o));
        },
        removeAttr: function(e, t) {
            var n, i, r, o, s = 0;
            if (t && 1 === e.nodeType) for (i = t.split(it); i.length > s; s++) r = i[s], r && (n = et.propFix[r] || r, 
            o = Nt.test(r), o || et.attr(e, r, ""), e.removeAttribute($t ? r : n), o && n in e && (e[n] = !1));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (St.test(e.nodeName) && e.parentNode) et.error("type property can't be changed"); else if (!et.support.radioValue && "radio" === t && et.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return xt && et.nodeName(e, "button") ? xt.get(e, t) : t in e ? e.value : null;
                },
                set: function(e, n, i) {
                    return xt && et.nodeName(e, "button") ? xt.set(e, n, i) : (e.value = n, t);
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !et.isXMLDoc(e), s && (n = et.propFix[n] || n, 
            o = et.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Et.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), wt = {
        get: function(e, n) {
            var i, r = et.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? et.removeAttr(e, n) : (i = et.propFix[n] || n, i in e && (e[i] = !0), 
            e.setAttribute(n, n.toLowerCase())), n;
        }
    }, $t || (Ct = {
        name: !0,
        id: !0,
        coords: !0
    }, xt = et.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (Ct[n] ? "" !== i.value : i.specified) ? i.value : t;
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = e.ownerDocument.createAttribute(n), e.setAttributeNode(i)), i.value = t + "";
        }
    }, et.each([ "width", "height" ], function(e, n) {
        et.attrHooks[n] = et.extend(et.attrHooks[n], {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(n, "auto"), i) : t;
            }
        });
    }), et.attrHooks.contenteditable = {
        get: xt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), xt.set(e, t, n);
        }
    }), et.support.hrefNormalized || et.each([ "href", "src", "width", "height" ], function(e, n) {
        et.attrHooks[n] = et.extend(et.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i;
            }
        });
    }), et.support.style || (et.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), et.support.optSelected || (et.propHooks.selected = et.extend(et.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), et.support.enctype || (et.propFix.enctype = "encoding"), et.support.checkOn || et.each([ "radio", "checkbox" ], function() {
        et.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }
        };
    }), et.each([ "radio", "checkbox" ], function() {
        et.valHooks[this] = et.extend(et.valHooks[this], {
            set: function(e, n) {
                return et.isArray(n) ? e.checked = et.inArray(et(e).val(), n) >= 0 : t;
            }
        });
    });
    var At = /^(?:textarea|input|select)$/i, jt = /^([^\.]*|)(?:\.(.+)|)$/, Dt = /^key/, Ht = /^(?:mouse|contextmenu)|click/, Mt = /^(?:focusinfocus|focusoutblur)$/;
    et.event = {
        add: function(e, n, i, r, o) {
            var s, a, l, u, c, h, f, d, p, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = et._data(e))) {
                for (i.handler && (p = i, i = p.handler, o = p.selector), i.guid || (i.guid = et.guid++), 
                l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e) {
                    return et === t || e && et.event.triggered === e.type ? t : et.event.dispatch.apply(a.elem, arguments);
                }, a.elem = e), n = et.trim(n).split(" "), u = 0; n.length > u; u++) c = jt.exec(n[u]) || [], 
                h = c[1], f = (c[2] || "").split(".").sort(), m = et.event.special[h] || {}, h = (o ? m.delegateType : m.bindType) || h, 
                m = et.event.special[h] || {}, d = et.extend({
                    type: h,
                    origType: c[1],
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && et.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, p), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, f, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), 
                m.add && (m.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), 
                et.event.global[h] = !0;
                e = null;
            }
        },
        global: {},
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, f, d, p, g, m = et.hasData(e) && et._data(e);
            if (m && (f = m.events)) {
                for (t = et.trim(t).split(" "), o = 0; t.length > o; o++) if (s = jt.exec(t[o]) || [], 
                a = l = s[1], u = s[2], a) {
                    for (d = et.event.special[a] || {}, a = (i ? d.delegateType : d.bindType) || a, 
                    p = f[a] || [], c = p.length, u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    h = 0; p.length > h; h++) g = p[h], !r && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (p.splice(h--, 1), 
                    g.selector && p.delegateCount--, d.remove && d.remove.call(e, g));
                    0 === p.length && c !== p.length && (d.teardown && d.teardown.call(e, u, m.handle) !== !1 || et.removeEvent(e, a, m.handle), 
                    delete f[a]);
                } else for (a in f) et.event.remove(e, a + t[o], n, i, !0);
                et.isEmptyObject(f) && (delete m.handle, et._removeData(e, "events"));
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, r, o) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var s, a, l, u, c, h, f, d, p, g, m = n.type || n, v = n.namespace ? n.namespace.split(".") : [];
                if (!Mt.test(m + et.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), 
                a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), r && !et.event.customEvent[m] || et.event.global[m])) if (n = "object" == typeof n ? n[et.expando] ? n : new et.Event(m, n) : new et.Event(m), 
                n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                h = 0 > m.indexOf(":") ? "on" + m : "", r) {
                    if (n.result = t, n.target || (n.target = r), i = null != i ? et.makeArray(i) : [], 
                    i.unshift(n), f = et.event.special[m] || {}, !f.trigger || f.trigger.apply(r, i) !== !1) {
                        if (p = [ [ r, f.bindType || m ] ], !o && !f.noBubble && !et.isWindow(r)) {
                            for (g = f.delegateType || m, u = Mt.test(g + m) ? r : r.parentNode, c = r; u; u = u.parentNode) p.push([ u, g ]), 
                            c = u;
                            c === (r.ownerDocument || z) && p.push([ c.defaultView || c.parentWindow || e, g ]);
                        }
                        for (l = 0; p.length > l && !n.isPropagationStopped(); l++) u = p[l][0], n.type = p[l][1], 
                        d = (et._data(u, "events") || {})[n.type] && et._data(u, "handle"), d && d.apply(u, i), 
                        d = h && u[h], d && et.acceptData(u) && d.apply && d.apply(u, i) === !1 && n.preventDefault();
                        if (n.type = m, !(o || n.isDefaultPrevented() || f._default && f._default.apply(r.ownerDocument, i) !== !1 || "click" === m && et.nodeName(r, "a") || !et.acceptData(r) || !h || !r[m] || et.isWindow(r))) {
                            c = r[h], c && (r[h] = null), et.event.triggered = m;
                            try {
                                r[m]();
                            } catch (y) {}
                            et.event.triggered = t, c && (r[h] = c);
                        }
                        return n.result;
                    }
                } else {
                    s = et.cache;
                    for (l in s) s[l].events && s[l].events[m] && et.event.trigger(n, i, s[l].handle.elem, !0);
                }
            }
        },
        dispatch: function(e) {
            e = et.event.fix(e);
            var n, i, r, o, s, a, l, u, c, h = (et._data(this, "events") || {})[e.type] || [], f = h.delegateCount, d = G.call(arguments), p = !e.exclusive && !e.namespace, g = et.event.special[e.type] || {}, m = [];
            if (d[0] = e, e.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, e) !== !1) {
                if (f && (!e.button || "click" !== e.type)) for (r = e.target; r != this; r = r.parentNode || this) if (r.disabled !== !0 || "click" !== e.type) {
                    for (s = {}, l = [], n = 0; f > n; n++) u = h[n], c = u.selector, s[c] === t && (s[c] = u.needsContext ? et(c, this).index(r) >= 0 : et.find(c, this, null, [ r ]).length), 
                    s[c] && l.push(u);
                    l.length && m.push({
                        elem: r,
                        matches: l
                    });
                }
                for (h.length > f && m.push({
                    elem: this,
                    matches: h.slice(f)
                }), n = 0; m.length > n && !e.isPropagationStopped(); n++) for (a = m[n], e.currentTarget = a.elem, 
                i = 0; a.matches.length > i && !e.isImmediatePropagationStopped(); i++) u = a.matches[i], 
                (p || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) && (e.data = u.data, 
                e.handleObj = u, o = ((et.event.special[u.origType] || {}).handle || u.handler).apply(a.elem, d), 
                o !== t && (e.result = o, o === !1 && (e.preventDefault(), e.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, e), e.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || z, 
                r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), 
                e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), 
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                e;
            }
        },
        fix: function(e) {
            if (e[et.expando]) return e;
            var t, n, i = e, r = et.event.fixHooks[e.type] || {}, o = r.props ? this.props.concat(r.props) : this.props;
            for (e = et.Event(i), t = o.length; t; ) n = o[--t], e[n] = i[n];
            return e.target || (e.target = i.srcElement || z), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = et.extend(new et.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? et.event.trigger(r, null, t) : et.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault();
        }
    }, et.event.handle = et.event.dispatch, et.removeEvent = z.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, n, i) {
        var r = "on" + n;
        e.detachEvent && (e[r] === t && (e[r] = null), e.detachEvent(r, i));
    }, et.Event = function(e, n) {
        return this instanceof et.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : a) : this.type = e, 
        n && et.extend(this, n), this.timeStamp = e && e.timeStamp || et.now(), this[et.expando] = !0, 
        t) : new et.Event(e, n);
    }, et.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = l;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = l;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation();
        },
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a
    }, et.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        et.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !et.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), et.support.submitBubbles || (et.event.special.submit = {
        setup: function() {
            return et.nodeName(this, "form") ? !1 : (et.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, i = et.nodeName(n, "input") || et.nodeName(n, "button") ? n.form : t;
                i && !et._data(i, "_submit_attached") && (et.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), et._data(i, "_submit_attached", !0));
            }), t);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && et.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return et.nodeName(this, "form") ? !1 : (et.event.remove(this, "._submit"), t);
        }
    }), et.support.changeBubbles || (et.event.special.change = {
        setup: function() {
            return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (et.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), et.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), et.event.simulate("change", this, e, !0);
            })), !1) : (et.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                At.test(t.nodeName) && !et._data(t, "_change_attached") && (et.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || et.event.simulate("change", this.parentNode, e, !0);
                }), et._data(t, "_change_attached", !0));
            }), t);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },
        teardown: function() {
            return et.event.remove(this, "._change"), !At.test(this.nodeName);
        }
    }), et.support.focusinBubbles || et.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, i = function(e) {
            et.event.simulate(t, e.target, et.event.fix(e), !0);
        };
        et.event.special[t] = {
            setup: function() {
                0 === n++ && z.addEventListener(e, i, !0);
            },
            teardown: function() {
                0 === --n && z.removeEventListener(e, i, !0);
            }
        };
    }), et.fn.extend({
        on: function(e, n, i, r, o) {
            var s, l;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (l in e) this.on(l, n, i, e[l], o);
                return this;
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, 
            i = t) : (r = i, i = n, n = t)), r === !1) r = a; else if (!r) return this;
            return 1 === o && (s = r, r = function(e) {
                return et().off(e), s.apply(this, arguments);
            }, r.guid = s.guid || (s.guid = et.guid++)), this.each(function() {
                et.event.add(this, e, r, i, n);
            });
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1);
        },
        off: function(e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, et(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = a), 
            this.each(function() {
                et.event.remove(this, e, i, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        live: function(e, t, n) {
            return et(this.context).on(e, this.selector, t, n), this;
        },
        die: function(e, t) {
            return et(this.context).off(e, this.selector || "**", t), this;
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                et.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            return this[0] ? et.event.trigger(e, n, this[0], !0) : t;
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), et.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        et.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        }, Dt.test(t) && (et.event.fixHooks[t] = et.event.keyHooks), Ht.test(t) && (et.event.fixHooks[t] = et.event.mouseHooks);
    }), function(e, t) {
        function n(e, t, n, i) {
            n = n || [], t = t || D;
            var r, o, s, a, l = t.nodeType;
            if (!e || "string" != typeof e) return n;
            if (1 !== l && 9 !== l) return [];
            if (s = w(t), !s && !i && (r = it.exec(e))) if (a = r[1]) {
                if (9 === l) {
                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                    if (o.id === a) return n.push(o), n;
                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t, o) && o.id === a) return n.push(o), 
                n;
            } else {
                if (r[2]) return O.apply(n, B.call(t.getElementsByTagName(e), 0)), n;
                if ((a = r[3]) && dt && t.getElementsByClassName) return O.apply(n, B.call(t.getElementsByClassName(a), 0)), 
                n;
            }
            return g(e.replace(K, "$1"), t, n, i, s);
        }
        function i(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function o(e) {
            return I(function(t) {
                return t = +t, I(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function s(e, t) {
            if (e && t) for (var n = e.nextSibling; n; ) {
                if (n === t) return -1;
                n = n.nextSibling;
            }
            return e ? 1 : -1;
        }
        function a(e, t) {
            var i, r, o, s, a, l, u, c = z[A][e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = b.preFilter; a; ) {
                (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), 
                i = !1, (r = tt.exec(a)) && (o.push(i = new j(r.shift())), a = a.slice(i.length), 
                i.type = r[0].replace(K, " "));
                for (s in b.filter) !(r = lt[s].exec(a)) || u[s] && !(r = u[s](r)) || (o.push(i = new j(r.shift())), 
                a = a.slice(i.length), i.type = s, i.matches = r);
                if (!i) break;
            }
            return t ? a.length : a ? n.error(e) : z(e, l).slice(0);
        }
        function l(e, t, n) {
            var i = t.dir, r = n && "parentNode" === t.dir, o = L++;
            return t.first ? function(t, n, o) {
                for (;t = t[i]; ) if (r || 1 === t.nodeType) return e(t, n, o);
            } : function(t, n, s) {
                if (s) {
                    for (;t = t[i]; ) if ((r || 1 === t.nodeType) && e(t, n, s)) return t;
                } else for (var a, l = M + " " + o + " ", u = l + v; t = t[i]; ) if (r || 1 === t.nodeType) {
                    if ((a = t[A]) === u) return t.sizset;
                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                        if (t.sizset) return t;
                    } else {
                        if (t[A] = u, e(t, n, s)) return t.sizset = !0, t;
                        t.sizset = !1;
                    }
                }
            };
        }
        function u(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function c(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++) (o = e[a]) && (!n || n(o, i, r)) && (s.push(o), 
            u && t.push(a));
            return s;
        }
        function h(e, t, n, i, r, o) {
            return i && !i[A] && (i = h(i)), r && !r[A] && (r = h(r, o)), I(function(o, s, a, l) {
                var u, h, f, d = [], g = [], m = s.length, v = o || p(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !o && t ? v : c(v, d, e, a, l), b = n ? r || (o ? e : m || i) ? [] : s : y;
                if (n && n(y, b, a, l), i) for (u = c(b, g), i(u, [], a, l), h = u.length; h--; ) (f = u[h]) && (b[g[h]] = !(y[g[h]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (u = [], h = b.length; h--; ) (f = b[h]) && u.push(y[h] = f);
                            r(null, b = [], u, l);
                        }
                        for (h = b.length; h--; ) (f = b[h]) && (u = r ? R.call(o, f) : d[h]) > -1 && (o[u] = !(s[u] = f));
                    }
                } else b = c(b === s ? b.splice(m, b.length) : b), r ? r(null, s, b, l) : O.apply(s, b);
            });
        }
        function f(e) {
            for (var t, n, i, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, c = l(function(e) {
                return e === t;
            }, s, !0), d = l(function(e) {
                return R.call(t, e) > -1;
            }, s, !0), p = [ function(e, n, i) {
                return !o && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
            } ]; r > a; a++) if (n = b.relative[e[a].type]) p = [ l(u(p), n) ]; else {
                if (n = b.filter[e[a].type].apply(null, e[a].matches), n[A]) {
                    for (i = ++a; r > i && !b.relative[e[i].type]; i++) ;
                    return h(a > 1 && u(p), a > 1 && e.slice(0, a - 1).join("").replace(K, "$1"), n, i > a && f(e.slice(a, i)), r > i && f(e = e.slice(i)), r > i && e.join(""));
                }
                p.push(n);
            }
            return u(p);
        }
        function d(e, t) {
            var i = t.length > 0, r = e.length > 0, o = function(s, a, l, u, h) {
                var f, d, p, g = [], m = 0, y = "0", x = s && [], w = null != h, C = E, k = s || r && b.find.TAG("*", h && a.parentNode || a), T = M += null == C ? 1 : Math.E;
                for (w && (E = a !== D && a, v = o.el); null != (f = k[y]); y++) {
                    if (r && f) {
                        for (d = 0; p = e[d]; d++) if (p(f, a, l)) {
                            u.push(f);
                            break;
                        }
                        w && (M = T, v = ++o.el);
                    }
                    i && ((f = !p && f) && m--, s && x.push(f));
                }
                if (m += y, i && y !== m) {
                    for (d = 0; p = t[d]; d++) p(x, g, a, l);
                    if (s) {
                        if (m > 0) for (;y--; ) x[y] || g[y] || (g[y] = F.call(u));
                        g = c(g);
                    }
                    O.apply(u, g), w && !s && g.length > 0 && m + t.length > 1 && n.uniqueSort(u);
                }
                return w && (M = T, E = C), x;
            };
            return o.el = 0, i ? I(o) : o;
        }
        function p(e, t, i) {
            for (var r = 0, o = t.length; o > r; r++) n(e, t[r], i);
            return i;
        }
        function g(e, t, n, i, r) {
            var o, s, l, u, c, h = a(e);
            if (!i && 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !r && b.relative[s[1].type]) {
                    if (t = b.find.ID(l.matches[0].replace(at, ""), t, r)[0], !t) return n;
                    e = e.slice(s.shift().length);
                }
                for (o = lt.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o], !b.relative[u = l.type]); o--) if ((c = b.find[u]) && (i = c(l.matches[0].replace(at, ""), rt.test(s[0].type) && t.parentNode || t, r))) {
                    if (s.splice(o, 1), e = i.length && s.join(""), !e) return O.apply(n, B.call(i, 0)), 
                    n;
                    break;
                }
            }
            return k(e, h)(i, t, r, n, rt.test(e)), n;
        }
        function m() {}
        var v, y, b, x, w, C, k, T, S, E, _ = "undefined", N = 1 << 31, $ = !0, A = ("sizcache" + Math.random()).replace(".", ""), j = String, D = e.document, H = D.documentElement, M = 0, L = 0, F = [].pop, O = [].push, B = [].slice, R = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, I = function(e, t) {
            return e[A] = null == t || t, e;
        }, P = function() {
            var e = {}, t = [];
            return I(function(n, i) {
                return t.push(n) > b.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }, e);
        }, q = P(), z = P(), V = P(), W = "[\\x20\\t\\r\\n\\f]", U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", X = U.replace("w", "w#"), Q = "([*^$|!~]?=)", G = "\\[" + W + "*(" + U + ")" + W + "*(?:" + Q + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + W + "*\\]", J = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", K = RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"), Z = RegExp("^" + W + "*," + W + "*"), tt = RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"), nt = RegExp(J), it = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, rt = /[\x20\t\r\n\f]*[+~]/, ot = /h\d/i, st = /input|select|textarea|button/i, at = /\\(?!\\)/g, lt = {
            ID: RegExp("^#(" + U + ")"),
            CLASS: RegExp("^\\.(" + U + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"),
            TAG: RegExp("^(" + U.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + G),
            PSEUDO: RegExp("^" + J),
            POS: RegExp(Y, "i"),
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
            needsContext: RegExp("^" + W + "*[>+~]|" + Y, "i")
        }, ut = function(e) {
            var t = D.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }, ct = ut(function(e) {
            return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length;
        }), ht = ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== _ && "#" === e.firstChild.getAttribute("href");
        }), ft = ut(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t;
        }), dt = ut(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 
            2 === e.getElementsByClassName("e").length) : !1;
        }), pt = ut(function(e) {
            e.id = A + 0, e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", 
            H.insertBefore(e, H.firstChild);
            var t = D.getElementsByName && D.getElementsByName(A).length === 2 + D.getElementsByName(A + 0).length;
            return y = !D.getElementById(A), H.removeChild(e), t;
        });
        try {
            B.call(H.childNodes, 0)[0].nodeType;
        } catch (gt) {
            B = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n;
            };
        }
        n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            return n(t, null, null, [ e ]).length > 0;
        }, x = n.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i]; i++) n += x(t);
            return n;
        }, w = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, C = n.contains = H.contains ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
            return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
        } : H.compareDocumentPosition ? function(e, t) {
            return t && !!(16 & e.compareDocumentPosition(t));
        } : function(e, t) {
            for (;t = t.parentNode; ) if (t === e) return !0;
            return !1;
        }, n.attr = function(e, t) {
            var n, i = w(e);
            return i || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : i || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t), 
            n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null);
        }, b = n.selectors = {
            cacheLength: 50,
            createPseudo: I,
            match: lt,
            attrHandle: ht ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            find: {
                ID: y ? function(e, t, n) {
                    if (typeof t.getElementById !== _ && !n) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [ i ] : [];
                    }
                } : function(e, n, i) {
                    if (typeof n.getElementById !== _ && !i) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== _ && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                    }
                },
                TAG: ct ? function(e, n) {
                    return typeof n.getElementsByTagName !== _ ? n.getElementsByTagName(e) : t;
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                        return r;
                    }
                    return n;
                },
                NAME: pt && function(e, n) {
                    return typeof n.getElementsByName !== _ ? n.getElementsByName(name) : t;
                },
                CLASS: dt && function(e, n, i) {
                    return typeof n.getElementsByClassName === _ || i ? t : n.getElementsByClassName(e);
                }
            },
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
                    return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), 
                    e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n;
                    return lt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (nt.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), 
                    e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3));
                }
            },
            filter: {
                ID: y ? function(e) {
                    return e = e.replace(at, ""), function(t) {
                        return t.getAttribute("id") === e;
                    };
                } : function(e) {
                    return e = e.replace(at, ""), function(t) {
                        var n = typeof t.getAttributeNode !== _ && t.getAttributeNode("id");
                        return n && n.value === e;
                    };
                },
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(at, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = q[A][e + " "];
                    return t || (t = RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && q(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== _ && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, i) {
                    return function(r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, i) {
                    return "nth" === e ? function(e) {
                        var t, r, o = e.parentNode;
                        if (1 === n && 0 === i) return !0;
                        if (o) for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling) ;
                        return r -= i, r === n || 0 === r % n && r / n >= 0;
                    } : function(t) {
                        var n = t;
                        switch (e) {
                          case "only":
                          case "first":
                            for (;n = n.previousSibling; ) if (1 === n.nodeType) return !1;
                            if ("first" === e) return !0;
                            n = t;

                          case "last":
                            for (;n = n.nextSibling; ) if (1 === n.nodeType) return !1;
                            return !0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[A] ? r(t) : r.length > 1 ? (i = [ e, e, "", t ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? I(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; ) i = R.call(e, o[s]), e[i] = !(n[i] = o[s]);
                    }) : function(e) {
                        return r(e, 0, i);
                    }) : r;
                }
            },
            pseudos: {
                not: I(function(e) {
                    var t = [], n = [], i = k(e.replace(K, "$1"));
                    return i[A] ? I(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop();
                    };
                }),
                has: I(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: I(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;
                    };
                }),
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                empty: function(e) {
                    var t;
                    for (e = e.firstChild; e; ) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling;
                    }
                    return !0;
                },
                header: function(e) {
                    return ot.test(e.nodeName);
                },
                text: function(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t);
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: r("submit"),
                reset: r("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                input: function(e) {
                    return st.test(e.nodeName);
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement;
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: o(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: o(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: o(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: o(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: o(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i; ) e.push(i);
                    return e;
                })
            }
        }, T = H.compareDocumentPosition ? function(e, t) {
            var n, i;
            return e === t ? (S = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 1 & (n = e.compareDocumentPosition(t)) || (i = e.parentNode) && 11 === i.nodeType ? e === D || C(D, e) ? -1 : t === D || C(D, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
        } : function(e, t) {
            if (e === t) return S = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || N) - (C(D, e) && ~e.sourceIndex || N);
            var n = 0, i = [ e ], r = [ t ], o = e.parentNode, a = t.parentNode, l = o;
            if (e === D) return -1;
            if (t === D) return 1;
            if (!o && !a) return 0;
            if (!a) return -1;
            if (!o) return 1;
            if (o === a) return s(e, t);
            for (;l; ) i.unshift(l), l = l.parentNode;
            for (l = a; l; ) r.unshift(l), l = l.parentNode;
            for (;i[n] === r[n]; ) n++;
            return 0 === n ? i[0] === D || C(D, i[0]) ? -1 : r[0] === D || C(D, r[0]) ? 1 : 0 : s(i[n], r[n]);
        }, [ 0, 0 ].sort(T), $ = !S, n.uniqueSort = function(e) {
            var t, n = [], i = 1, r = 0;
            if (S = $, e.sort(T), S) {
                for (;t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, k = n.compile = function(e, t) {
            var n, i = [], r = [], o = V[A][e + " "];
            if (!o) {
                for (t || (t = a(e)), n = t.length; n--; ) o = f(t[n]), o[A] ? i.push(o) : r.push(o);
                o = V(e, d(r, i));
            }
            return o;
        }, D.querySelectorAll && function() {
            var e, t = g, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [ ":focus" ], s = [ ":active" ], l = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector;
            ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                e.querySelectorAll(":checked").length || o.push(":checked");
            }), ut(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + W + "*(?:\"\"|'')"), 
                e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
            }), o = RegExp(o.join("|")), g = function(e, n, r, s, l) {
                if (!s && !l && !o.test(e)) {
                    var u, c, h = !0, f = A, d = n, p = 9 === n.nodeType && e;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (u = a(e), (h = n.getAttribute("id")) ? f = h.replace(i, "\\$&") : n.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", c = u.length; c--; ) u[c] = f + u[c].join("");
                        d = rt.test(e) && n.parentNode || n, p = u.join(",");
                    }
                    if (p) try {
                        return O.apply(r, B.call(d.querySelectorAll(p), 0)), r;
                    } catch (g) {} finally {
                        h || n.removeAttribute("id");
                    }
                }
                return t(e, n, r, s, l);
            }, l && (ut(function(t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), s.push("!=", J);
                } catch (n) {}
            }), s = RegExp(s.join("|")), n.matchesSelector = function(t, i) {
                if (i = i.replace(r, "='$1']"), !w(t) && !s.test(i) && !o.test(i)) try {
                    var a = l.call(t, i);
                    if (a || e || t.document && 11 !== t.document.nodeType) return a;
                } catch (u) {}
                return n(i, null, null, [ t ]).length > 0;
            });
        }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m(), 
        n.attr = et.attr, et.find = n, et.expr = n.selectors, et.expr[":"] = et.expr.pseudos, 
        et.unique = n.uniqueSort, et.text = n.getText, et.isXMLDoc = n.isXML, et.contains = n.contains;
    }(e);
    var Lt = /Until$/, Ft = /^(?:parents|prev(?:Until|All))/, Ot = /^.[^:#\[\.,]*$/, Bt = et.expr.match.needsContext, Rt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    et.fn.extend({
        find: function(e) {
            var t, n, i, r, o, s, a = this;
            if ("string" != typeof e) return et(e).filter(function() {
                for (t = 0, n = a.length; n > t; t++) if (et.contains(a[t], this)) return !0;
            });
            for (s = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++) if (i = s.length, 
            et.find(e, this[t], s), t > 0) for (r = i; s.length > r; r++) for (o = 0; i > o; o++) if (s[o] === s[r]) {
                s.splice(r--, 1);
                break;
            }
            return s;
        },
        has: function(e) {
            var t, n = et(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++) if (et.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(h(this, e, !1), "not", e);
        },
        filter: function(e) {
            return this.pushStack(h(this, e, !0), "filter", e);
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Bt.test(e) ? et(e, this.context).index(this[0]) >= 0 : et.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = Bt.test(e) || "string" != typeof e ? et(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                if (s ? s.index(n) > -1 : et.find.matchesSelector(n, e)) {
                    o.push(n);
                    break;
                }
                n = n.parentNode;
            }
            return o = o.length > 1 ? et.unique(o) : o, this.pushStack(o, "closest", e);
        },
        index: function(e) {
            return e ? "string" == typeof e ? et.inArray(this[0], et(e)) : et.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? et(e, t) : et.makeArray(e && e.nodeType ? [ e ] : e), i = et.merge(this.get(), n);
            return this.pushStack(et.unique(i));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), et.fn.andSelf = et.fn.addBack, et.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return et.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return et.dir(e, "parentNode", n);
        },
        next: function(e) {
            return c(e, "nextSibling");
        },
        prev: function(e) {
            return c(e, "previousSibling");
        },
        nextAll: function(e) {
            return et.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return et.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return et.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return et.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return et.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return et.sibling(e.firstChild);
        },
        contents: function(e) {
            return et.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : et.merge([], e.childNodes);
        }
    }, function(e, t) {
        et.fn[e] = function(n, i) {
            var r = et.map(this, t, n);
            return Lt.test(e) || (i = n), i && "string" == typeof i && (r = et.filter(i, r)), 
            r = this.length > 1 && !Rt[e] ? et.unique(r) : r, this.length > 1 && Ft.test(e) && (r = r.reverse()), 
            this.pushStack(r, e, G.call(arguments).join(","));
        };
    }), et.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? et.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : et.find.matches(e, t);
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !et(o).is(i)); ) 1 === o.nodeType && r.push(o), 
            o = o[n];
            return r;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Pt = / jQuery\d+="(?:null|\d+)"/g, qt = /^\s+/, zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Vt = /<([\w:]+)/, Wt = /<tbody/i, Ut = /<|&#?\w+;/, Xt = /<(?:script|style|link)/i, Qt = /<(?:script|object|embed|option|style)/i, Gt = RegExp("<(?:" + It + ")[\\s/>]", "i"), Jt = /^(?:checkbox|radio)$/, Yt = /checked\s*(?:[^=]|=\s*.checked.)/i, Kt = /\/(java|ecma)script/i, Zt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, en = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, tn = f(z), nn = tn.appendChild(z.createElement("div")), rn = function(e) {
        return e;
    };
    en.optgroup = en.option, en.tbody = en.tfoot = en.colgroup = en.caption = en.thead, 
    en.th = en.td, et.support.htmlSerialize || (en._default = [ 1, "X<div>", "</div>" ], 
    en.param = [ 1, "X<object>", "</object>" ], rn = function(e) {
        return e.replace(/<param([^>]*)>/gi, function(e, t, n) {
            var i = t.match(/name=["']([^"']*)["']/i);
            return i ? i[1].length ? "<param" + t + ">" : "<param" + t.replace(i[0], "name='_" + n + "'") + ">" : "<param name='_" + n + "' " + t + ">";
        });
    }), et.fn.extend({
        text: function(e) {
            return et.access(this, function(e) {
                return e === t ? et.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (et.isFunction(e)) return this.each(function(t) {
                et(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = et(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return et.isFunction(e) ? this.each(function(t) {
                et(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = et(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = et.isFunction(e);
            return this.each(function(n) {
                et(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                et.nodeName(this, "body") || et(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                u(this) || this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                u(this) || this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++) (!e || et.filter(e, [ n ]).length) && (t || 1 !== n.nodeType || (et.cleanData(n.getElementsByTagName("*")), 
            et.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && et.cleanData(e.getElementsByTagName("*")); e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return et.clone(this, e, t);
            });
        },
        html: function(e) {
            return et.access(this, function(e) {
                var n = this[0] || {}, i = 0, r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Pt, "") : t;
                if (!("string" != typeof e || Xt.test(e) || !et.support.htmlSerialize && Gt.test(e) || !et.support.leadingWhitespace && qt.test(e) || en[(Vt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(zt, "<$1></$2>");
                    try {
                        for (;r > i; i++) n = this[i] || {}, 1 === n.nodeType && (et.cleanData(n.getElementsByTagName("*")), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            var n = this, i = et.isFunction(e);
            return i || "string" == typeof e || (e = et(e).detach()), this.each(function(r) {
                var o = this.nextSibling, s = this.parentNode, a = i ? e.call(this, r, this) : e;
                return u(this) ? (n[r] = et(a).clone()[0], t) : (et(this).remove(), o ? et(o).before(a) : et(s).append(a), 
                t);
            }), this;
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, i) {
            e = [].concat.apply([], e);
            var r, o, s, a, l = 0, u = e[0], c = [], h = this.length;
            if (!et.support.checkClone && h > 1 && "string" == typeof u && Yt.test(u)) return this.each(function() {
                et(this).domManip(e, n, i);
            });
            if (et.isFunction(u)) return this.each(function(r) {
                var o = et(this);
                e[0] = u.call(this, r, n ? o.html() : t), o.domManip(e, n, i);
            });
            if (this[0]) {
                if (r = et.buildFragment(e, this, c), s = r.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), 
                o) for (n = n && et.nodeName(o, "tr"), a = r.cacheable || h - 1; h > l; l++) i.call(n && et.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === a ? s : et.clone(s, !0, !0));
                s = o = null, c.length && et.each(c, function(e, t) {
                    t.src ? et.ajax ? et.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : et.error("no ajax") : et.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Zt, "")), 
                    t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
        }
    }), et.buildFragment = function(e, n, i) {
        var r, o, s, a = e[0];
        return n = n || z, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof a && 512 > a.length && n === z && "<" === a.charAt(0)) || Qt.test(a) || !et.support.checkClone && Yt.test(a) || !et.support.html5Clone && Gt.test(a) || (o = !0, 
        r = et.fragments[a], s = r !== t), r || (r = n.createDocumentFragment(), et.clean(e, n, r, i), 
        o && (et.fragments[a] = s && r)), {
            fragment: r,
            cacheable: o
        };
    }, et.fragments = {}, et.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        et.fn[e] = function(n) {
            var i, r = 0, o = [], s = et(n), a = s.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[t](this[0]), 
            this;
            for (;a > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), et(s[r])[t](i), o = o.concat(i);
            return this.pushStack(o, e, s.selector);
        };
    }), et.extend({
        clone: function(e, t, n) {
            var i, r, o, s;
            if (et.support.html5Clone || et.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (nn.innerHTML = e.outerHTML, 
            nn.removeChild(s = nn.firstChild)), !(et.support.noCloneEvent && et.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || et.isXMLDoc(e))) for (g(e, s), 
            i = m(e), r = m(s), o = 0; i[o]; ++o) r[o] && g(i[o], r[o]);
            if (t && (p(e, s), n)) for (i = m(e), r = m(s), o = 0; i[o]; ++o) p(i[o], r[o]);
            return i = r = null, s;
        },
        clean: function(e, n, i, r) {
            var o, s, a, l, u, c, h, d, p, g, m, y = n === z && tn, b = [];
            for (n && n.createDocumentFragment !== t || (n = z), o = 0; null != (a = e[o]); o++) if ("number" == typeof a && (a += ""), 
            a) {
                if ("string" == typeof a) if (Ut.test(a)) {
                    for (y = y || f(n), h = n.createElement("div"), y.appendChild(h), a = a.replace(zt, "<$1></$2>"), 
                    l = (Vt.exec(a) || [ "", "" ])[1].toLowerCase(), u = en[l] || en._default, c = u[0], 
                    h.innerHTML = u[1] + rn(a) + u[2]; c--; ) h = h.lastChild;
                    if (!et.support.tbody) for (d = Wt.test(a), p = "table" !== l || d ? "<table>" !== u[1] || d ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes, 
                    s = p.length - 1; s >= 0; --s) et.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
                    !et.support.leadingWhitespace && qt.test(a) && h.insertBefore(n.createTextNode(qt.exec(a)[0]), h.firstChild), 
                    a = h.childNodes, h.parentNode.removeChild(h);
                } else a = n.createTextNode(a);
                a.nodeType ? b.push(a) : et.merge(b, a);
            }
            if (h && (a = h = y = null), !et.support.appendChecked) for (o = 0; null != (a = b[o]); o++) et.nodeName(a, "input") ? v(a) : a.getElementsByTagName !== t && et.grep(a.getElementsByTagName("input"), v);
            if (i) for (g = function(e) {
                return !e.type || Kt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : t;
            }, o = 0; null != (a = b[o]); o++) et.nodeName(a, "script") && g(a) || (i.appendChild(a), 
            a.getElementsByTagName !== t && (m = et.grep(et.merge([], a.getElementsByTagName("script")), g), 
            b.splice.apply(b, [ o + 1, 0 ].concat(m)), o += m.length));
            return b;
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = et.expando, l = et.cache, u = et.support.deleteExpando, c = et.event.special; null != (r = e[s]); s++) if ((t || et.acceptData(r)) && (i = r[a], 
            n = i && l[i])) {
                if (n.events) for (o in n.events) c[o] ? et.event.remove(r, o) : et.removeEvent(r, o, n.handle);
                l[i] && (delete l[i], u ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, 
                rt.push(i));
            }
        }
    });
    var on, sn, an, ln = /alpha\([^)]*\)/i, un = /opacity=([^)]*)/, cn = /^(top|right|bottom|left)$/, hn = /^(none|table(?!-c[ea]).+)/, fn = /^margin/, dn = RegExp("^(" + tt + ")(.*)$", "i"), pn = RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"), gn = RegExp("^([-+])=(" + tt + ")", "i"), mn = {
        BODY: "block"
    }, vn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, yn = {
        letterSpacing: 0,
        fontWeight: 400
    }, bn = [ "Top", "Right", "Bottom", "Left" ], xn = [ "Webkit", "O", "Moz", "ms" ];
    et.fn.extend({
        css: function(e, n) {
            return et.access(this, function(e, n, i) {
                return i !== t ? et.style(e, n, i) : et.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return x(this, !0);
        },
        hide: function() {
            return x(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : b(this)) ? et(this).show() : et(this).hide();
            });
        }
    }), et.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = on(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": et.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = et.camelCase(n), u = e.style;
                if (n = et.cssProps[l] || (et.cssProps[l] = y(u, l)), a = et.cssHooks[n] || et.cssHooks[l], 
                i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
                if (s = typeof i, "string" === s && (o = gn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(et.css(e, n)), 
                s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || et.cssNumber[l] || (i += "px"), 
                a && "set" in a && (i = a.set(e, i, r)) === t))) try {
                    u[n] = i;
                } catch (c) {}
            }
        },
        css: function(e, n, i, r) {
            var o, s, a, l = et.camelCase(n);
            return n = et.cssProps[l] || (et.cssProps[l] = y(e.style, l)), a = et.cssHooks[n] || et.cssHooks[l], 
            a && "get" in a && (o = a.get(e, !0, r)), o === t && (o = on(e, n)), "normal" === o && n in yn && (o = yn[n]), 
            i || r !== t ? (s = parseFloat(o), i || et.isNumeric(s) ? s || 0 : o) : o;
        },
        swap: function(e, t, n) {
            var i, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            i = n.call(e);
            for (r in t) e.style[r] = o[r];
            return i;
        }
    }), e.getComputedStyle ? on = function(t, n) {
        var i, r, o, s, a = e.getComputedStyle(t, null), l = t.style;
        return a && (i = a.getPropertyValue(n) || a[n], "" !== i || et.contains(t.ownerDocument, t) || (i = et.style(t, n)), 
        pn.test(i) && fn.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, 
        i = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), i;
    } : z.documentElement.currentStyle && (on = function(e, t) {
        var n, i, r = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == r && o && o[t] && (r = o[t]), pn.test(r) && !cn.test(t) && (n = o.left, 
        i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), 
        o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), 
        "" === r ? "auto" : r;
    }), et.each([ "height", "width" ], function(e, n) {
        et.cssHooks[n] = {
            get: function(e, i, r) {
                return i ? 0 === e.offsetWidth && hn.test(on(e, "display")) ? et.swap(e, vn, function() {
                    return k(e, n, r);
                }) : k(e, n, r) : t;
            },
            set: function(e, t, i) {
                return w(e, t, i ? C(e, n, i, et.support.boxSizing && "border-box" === et.css(e, "boxSizing")) : 0);
            }
        };
    }), et.support.opacity || (et.cssHooks.opacity = {
        get: function(e, t) {
            return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, i = e.currentStyle, r = et.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === et.trim(o.replace(ln, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            i && !i.filter) || (n.filter = ln.test(o) ? o.replace(ln, r) : o + " " + r);
        }
    }), et(function() {
        et.support.reliableMarginRight || (et.cssHooks.marginRight = {
            get: function(e, n) {
                return et.swap(e, {
                    display: "inline-block"
                }, function() {
                    return n ? on(e, "marginRight") : t;
                });
            }
        }), !et.support.pixelPosition && et.fn.position && et.each([ "top", "left" ], function(e, t) {
            et.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var i = on(e, t);
                        return pn.test(i) ? et(e).position()[t] + "px" : i;
                    }
                }
            };
        });
    }), et.expr && et.expr.filters && (et.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !et.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || on(e, "display"));
    }, et.expr.filters.visible = function(e) {
        return !et.expr.filters.hidden(e);
    }), et.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        et.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [ n ], o = {};
                for (i = 0; 4 > i; i++) o[e + bn[i] + t] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, fn.test(e) || (et.cssHooks[e + t].set = w);
    });
    var wn = /%20/g, Cn = /\[\]$/, kn = /\r?\n/g, Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Sn = /^(?:select|textarea)/i;
    et.fn.extend({
        serialize: function() {
            return et.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? et.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Sn.test(this.nodeName) || Tn.test(this.type));
            }).map(function(e, t) {
                var n = et(this).val();
                return null == n ? null : et.isArray(n) ? et.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(kn, "\r\n")
                };
            }).get();
        }
    }), et.param = function(e, n) {
        var i, r = [], o = function(e, t) {
            t = et.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = et.ajaxSettings && et.ajaxSettings.traditional), et.isArray(e) || e.jquery && !et.isPlainObject(e)) et.each(e, function() {
            o(this.name, this.value);
        }); else for (i in e) S(i, e[i], n, o);
        return r.join("&").replace(wn, "+");
    };
    var En, _n, Nn = et.now(), $n = /#.*$/, An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, jn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Dn = /^(?:GET|HEAD)$/, Hn = /^\/\//, Mn = /\?/, Ln = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Fn = /([?&])_=[^&]*/, On = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bn = et.fn.load, Rn = {}, In = {}, Pn = [ "*/" ] + [ "*" ];
    try {
        _n = V.href;
    } catch (qn) {
        _n = z.createElement("a"), _n.href = "", _n = _n.href;
    }
    En = On.exec(_n.toLowerCase()) || [], et.fn.load = function(e, n, i) {
        if ("string" != typeof e && Bn) return Bn.apply(this, arguments);
        if (!this.length) return this;
        var r, o, s, a = this, l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), et.isFunction(n) ? (i = n, 
        n = t) : n && "object" == typeof n && (o = "POST"), et.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                i && a.each(i, s || [ e.responseText, t, e ]);
            }
        }).done(function(e) {
            s = arguments, a.html(r ? et("<div>").append(e.replace(Ln, "")).find(r) : e);
        }), this;
    }, et.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        et.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), et.each([ "get", "post" ], function(e, n) {
        et[n] = function(e, i, r, o) {
            return et.isFunction(i) && (o = o || r, r = i, i = t), et.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: o
            });
        };
    }), et.extend({
        getScript: function(e, n) {
            return et.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return et.get(e, t, n, "json");
        },
        ajaxSetup: function(e, t) {
            return t ? N(e, et.ajaxSettings) : (t = e, e = et.ajaxSettings), N(e, t), e;
        },
        ajaxSettings: {
            url: _n,
            isLocal: jn.test(En[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Pn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": et.parseJSON,
                "text xml": et.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: E(Rn),
        ajaxTransport: E(In),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                var u, h, y, b, w, k = n;
                2 !== x && (x = 2, l && clearTimeout(l), a = t, o = s || "", C.readyState = e > 0 ? 4 : 0, 
                i && (b = $(f, C, i)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), 
                w && (et.lastModified[r] = w), w = C.getResponseHeader("Etag"), w && (et.etag[r] = w)), 
                304 === e ? (k = "notmodified", u = !0) : (u = A(f, b), k = u.state, h = u.data, 
                y = u.error, u = !y)) : (y = k, (!k || e) && (k = "error", 0 > e && (e = 0))), C.status = e, 
                C.statusText = (n || k) + "", u ? g.resolveWith(d, [ h, k, C ]) : g.rejectWith(d, [ C, k, y ]), 
                C.statusCode(v), v = t, c && p.trigger("ajax" + (u ? "Success" : "Error"), [ C, f, u ? h : y ]), 
                m.fireWith(d, [ C, k ]), c && (p.trigger("ajaxComplete", [ C, f ]), --et.active || et.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, s, a, l, u, c, h, f = et.ajaxSetup({}, n), d = f.context || f, p = d !== f && (d.nodeType || d instanceof et) ? et(d) : et.event, g = et.Deferred(), m = et.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!x) {
                        var n = e.toLowerCase();
                        e = b[n] = b[n] || e, y[e] = t;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null;
                },
                getResponseHeader: function(e) {
                    var n;
                    if (2 === x) {
                        if (!s) for (s = {}; n = An.exec(o); ) s[n[1].toLowerCase()] = n[2];
                        n = s[e.toLowerCase()];
                    }
                    return n === t ? null : n;
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e), this;
                },
                abort: function(e) {
                    return e = e || w, a && a.abort(e), i(0, e), this;
                }
            };
            if (g.promise(C), C.success = C.done, C.error = C.fail, C.complete = m.add, C.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > x) for (t in e) v[t] = [ v[t], e[t] ]; else t = e[C.status], C.always(t);
                }
                return this;
            }, f.url = ((e || f.url || _n) + "").replace($n, "").replace(Hn, En[1] + "//"), 
            f.dataTypes = et.trim(f.dataType || "*").toLowerCase().split(it), null == f.crossDomain && (u = On.exec(f.url.toLowerCase()), 
            f.crossDomain = !(!u || u[1] === En[1] && u[2] === En[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (En[3] || ("http:" === En[1] ? 80 : 443)))), 
            f.data && f.processData && "string" != typeof f.data && (f.data = et.param(f.data, f.traditional)), 
            _(Rn, f, n, C), 2 === x) return C;
            if (c = f.global, f.type = f.type.toUpperCase(), f.hasContent = !Dn.test(f.type), 
            c && 0 === et.active++ && et.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (Mn.test(f.url) ? "&" : "?") + f.data, 
            delete f.data), r = f.url, f.cache === !1)) {
                var k = Nn++, T = f.url.replace(Fn, "$1_=" + k);
                f.url = T + (T === f.url ? (Mn.test(f.url) ? "&" : "?") + "_=" + k : "");
            }
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), 
            f.ifModified && (r = r || f.url, et.lastModified[r] && C.setRequestHeader("If-Modified-Since", et.lastModified[r]), 
            et.etag[r] && C.setRequestHeader("If-None-Match", et.etag[r])), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pn + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) C.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (f.beforeSend.call(d, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) C[h](f[h]);
            if (a = _(In, f, n, C)) {
                C.readyState = 1, c && p.trigger("ajaxSend", [ C, f ]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout");
                }, f.timeout));
                try {
                    x = 1, a.send(y, i);
                } catch (S) {
                    if (!(2 > x)) throw S;
                    i(-1, S);
                }
            } else i(-1, "No Transport");
            return C;
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var zn = [], Vn = /\?/, Wn = /(=)\?(?=&|$)|\?\?/, Un = et.now();
    et.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zn.pop() || et.expando + "_" + Un++;
            return this[e] = !0, e;
        }
    }), et.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, l = n.data, u = n.url, c = n.jsonp !== !1, h = c && Wn.test(u), f = c && !h && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
        return "jsonp" === n.dataTypes[0] || h || f ? (o = n.jsonpCallback = et.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        s = e[o], h ? n.url = u.replace(Wn, "$1" + o) : f ? n.data = l.replace(Wn, "$1" + o) : c && (n.url += (Vn.test(u) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return a || et.error(o + " was not called"), a[0];
        }, n.dataTypes[0] = "json", e[o] = function() {
            a = arguments;
        }, r.always(function() {
            e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, zn.push(o)), a && et.isFunction(s) && s(a[0]), 
            a = s = t;
        }), "script") : t;
    }), et.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return et.globalEval(e), e;
            }
        }
    }), et.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), et.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function(r, o) {
                    n = z.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"));
                    }, i.insertBefore(n, i.firstChild);
                },
                abort: function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var Xn, Qn = e.ActiveXObject ? function() {
        for (var e in Xn) Xn[e](0, 1);
    } : !1, Gn = 0;
    et.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && j() || D();
    } : j, function(e) {
        et.extend(et.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        });
    }(et.ajaxSettings.xhr()), et.support.ajax && et.ajaxTransport(function(n) {
        if (!n.crossDomain || et.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), 
                    n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r) l.setRequestHeader(a, r[a]);
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), i = function(e, r) {
                        var a, u, c, h, f;
                        try {
                            if (i && (r || 4 === l.readyState)) if (i = t, s && (l.onreadystatechange = et.noop, 
                            Qn && delete Xn[s]), r) 4 !== l.readyState && l.abort(); else {
                                a = l.status, c = l.getAllResponseHeaders(), h = {}, f = l.responseXML, f && f.documentElement && (h.xml = f), 
                                "string" == typeof l.responseText && (h.text = l.responseText);
                                try {
                                    u = l.statusText;
                                } catch (d) {
                                    u = "";
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404;
                            }
                        } catch (p) {
                            r || o(-1, p);
                        }
                        h && o(a, u, h, c);
                    }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Gn, Qn && (Xn || (Xn = {}, 
                    et(e).unload(Qn)), Xn[s] = i), l.onreadystatechange = i) : i();
                },
                abort: function() {
                    i && i(0, 1);
                }
            };
        }
    });
    var Jn, Yn, Kn = /^(?:toggle|show|hide)$/, Zn = RegExp("^(?:([-+])=|)(" + tt + ")([a-z%]*)$", "i"), ei = /queueHooks$/, ti = [ O ], ni = {
        "*": [ function(e, t) {
            var n, i, r = this.createTween(e, t), o = Zn.exec(t), s = r.cur(), a = +s || 0, l = 1, u = 20;
            if (o) {
                if (n = +o[2], i = o[3] || (et.cssNumber[e] ? "" : "px"), "px" !== i && a) {
                    a = et.css(r.elem, e, !0) || n || 1;
                    do l = l || ".5", a /= l, et.style(r.elem, e, a + i); while (l !== (l = r.cur() / s) && 1 !== l && --u);
                }
                r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n;
            }
            return r;
        } ]
    };
    et.Animation = et.extend(L, {
        tweener: function(e, t) {
            et.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ni[n] = ni[n] || [], ni[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? ti.unshift(e) : ti.push(e);
        }
    }), et.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (et.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? et.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = et.css(e.elem, e.prop, !1, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                et.fx.step[e.prop] ? et.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[et.cssProps[e.prop]] || et.cssHooks[e.prop]) ? et.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, et.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = et.fn[t];
        et.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r);
        };
    }), et.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var r = et.isEmptyObject(e), o = et.speed(t, n, i), s = function() {
                var t = L(this, et.extend({}, e), o);
                r && t.stop(!0);
            };
            return r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(i);
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = et.timers, s = et._data(this);
                if (n) s[n] && s[n].stop && r(s[n]); else for (n in s) s[n] && s[n].stop && ei.test(n) && r(s[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), 
                t = !1, o.splice(n, 1));
                (t || !i) && et.dequeue(this, e);
            });
        }
    }), et.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
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
        et.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), et.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? et.extend({}, e) : {
            complete: n || !n && t || et.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !et.isFunction(t) && t
        };
        return i.duration = et.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in et.fx.speeds ? et.fx.speeds[i.duration] : et.fx.speeds._default, 
        (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            et.isFunction(i.old) && i.old.call(this), i.queue && et.dequeue(this, i.queue);
        }, i;
    }, et.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, et.timers = [], et.fx = B.prototype.init, et.fx.tick = function() {
        for (var e, t = et.timers, n = 0; t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || et.fx.stop();
    }, et.fx.timer = function(e) {
        e() && et.timers.push(e) && !Yn && (Yn = setInterval(et.fx.tick, et.fx.interval));
    }, et.fx.interval = 13, et.fx.stop = function() {
        clearInterval(Yn), Yn = null;
    }, et.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, et.fx.step = {}, et.expr && et.expr.filters && (et.expr.filters.animated = function(e) {
        return et.grep(et.timers, function(t) {
            return e === t.elem;
        }).length;
    });
    var ii = /^(?:body|html)$/i;
    et.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            et.offset.setOffset(this, e, t);
        });
        var n, i, r, o, s, a, l, u = {
            top: 0,
            left: 0
        }, c = this[0], h = c && c.ownerDocument;
        if (h) return (i = h.body) === c ? et.offset.bodyOffset(c) : (n = h.documentElement, 
        et.contains(n, c) ? (c.getBoundingClientRect !== t && (u = c.getBoundingClientRect()), 
        r = I(h), o = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, 
        a = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
            top: u.top + a - o,
            left: u.left + l - s
        }) : u);
    }, et.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return et.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(et.css(e, "marginTop")) || 0, 
            n += parseFloat(et.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            };
        },
        setOffset: function(e, t, n) {
            var i = et.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = et(e), a = s.offset(), l = et.css(e, "top"), u = et.css(e, "left"), c = ("absolute" === i || "fixed" === i) && et.inArray("auto", [ l, u ]) > -1, h = {}, f = {};
            c ? (f = s.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), 
            et.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + r), 
            null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : s.css(h);
        }
    }, et.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === et.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), ii.test(e[0].nodeName) || (n = e.offset()), n.top += parseFloat(et.css(e[0], "borderTopWidth")) || 0, 
                n.left += parseFloat(et.css(e[0], "borderLeftWidth")) || 0), {
                    top: t.top - n.top - (parseFloat(et.css(i, "marginTop")) || 0),
                    left: t.left - n.left - (parseFloat(et.css(i, "marginLeft")) || 0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || z.body; e && !ii.test(e.nodeName) && "static" === et.css(e, "position"); ) e = e.offsetParent;
                return e || z.body;
            });
        }
    }), et.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        et.fn[e] = function(r) {
            return et.access(this, function(e, r, o) {
                var s = I(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? et(s).scrollLeft() : o, i ? o : et(s).scrollTop()) : e[r] = o, 
                t);
            }, e, r, arguments.length, null);
        };
    }), et.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        et.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            et.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
                return et.access(this, function(n, i, r) {
                    var o;
                    return et.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? et.css(n, i, r, a) : et.style(n, i, r, a);
                }, n, s ? r : t, s, null);
            };
        });
    }), function() {
        var e, t, n, i, r = et.fn.toggle, o = /(?:^|\s)hover(\.\S+|)\b/, s = function(e) {
            return et.event.special.hover ? e : e.replace(o, "mouseenter$1 mouseleave$1");
        };
        et.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            };
        }, e = et.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), 
        t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), et.browser = t, et.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n);
            }
            et.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, 
            e.sub = this.sub, e.fn.init = function(n, i) {
                return i && i instanceof et && !(i instanceof e) && (i = e(i)), et.fn.init.call(this, n, i, t);
            }, e.fn.init.prototype = e.fn;
            var t = e(z);
            return e;
        }, et.fn.toggle = function(e, t) {
            if (!et.isFunction(e) || !et.isFunction(t)) return r.apply(this, arguments);
            var n = arguments, i = e.guid || et.guid++, o = 0, s = function(t) {
                var i = (et._data(this, "lastToggle" + e.guid) || 0) % o;
                return et._data(this, "lastToggle" + e.guid, i + 1), t.preventDefault(), n[i].apply(this, arguments) || !1;
            };
            for (s.guid = i; n.length > o; ) n[o++].guid = i;
            return this.click(s);
        }, n = et.event.add, et.event.add = function(e, t, i, r, o) {
            t && (t = s(t)), n.call(this, e, t, i, r, o);
        }, i = et.event.remove, et.event.remove = function(e, t, n, r, o) {
            t && (t = s(t)), i.call(this, e, t, n, r, o);
        }, et.attrFn = {};
    }(), e.jQuery = e.$ = et, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return et;
    });
})(window), function() {
    var e = this, t = e._, n = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, s = i.push, a = i.slice, l = i.concat, u = (i.unshift, 
    r.toString), c = r.hasOwnProperty, h = i.forEach, f = i.map, d = i.reduce, p = i.reduceRight, g = i.filter, m = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, x = Array.isArray, w = Object.keys, C = o.bind, k = function(e) {
        return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0) : new k(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), 
    exports._ = k) : e._ = k, k.VERSION = "1.4.2";
    var T = k.each = k.forEach = function(e, t, i) {
        if (null != e) if (h && e.forEach === h) e.forEach(t, i); else if (e.length === +e.length) {
            for (var r = 0, o = e.length; o > r; r++) if (t.call(i, e[r], r, e) === n) return;
        } else for (var s in e) if (k.has(e, s) && t.call(i, e[s], s, e) === n) return;
    };
    k.map = k.collect = function(e, t, n) {
        var i = [];
        return null == e ? i : f && e.map === f ? e.map(t, n) : (T(e, function(e, r, o) {
            i[i.length] = t.call(n, e, r, o);
        }), i);
    }, k.reduce = k.foldl = k.inject = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), d && e.reduce === d) return i && (t = k.bind(t, i)), 
        r ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function(e, o, s) {
            r ? n = t.call(i, n, e, o, s) : (n = e, r = !0);
        }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, k.reduceRight = k.foldr = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (null == e && (e = []), p && e.reduceRight === p) return i && (t = k.bind(t, i)), 
        arguments.length > 2 ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var s = k.keys(e);
            o = s.length;
        }
        if (T(e, function(a, l, u) {
            l = s ? s[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r = !0);
        }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, k.find = k.detect = function(e, t, n) {
        var i;
        return S(e, function(e, r, o) {
            return t.call(n, e, r, o) ? (i = e, !0) : void 0;
        }), i;
    }, k.filter = k.select = function(e, t, n) {
        var i = [];
        return null == e ? i : g && e.filter === g ? e.filter(t, n) : (T(e, function(e, r, o) {
            t.call(n, e, r, o) && (i[i.length] = e);
        }), i);
    }, k.reject = function(e, t, n) {
        return k.filter(e, function(e, i, r) {
            return !t.call(n, e, i, r);
        }, n);
    }, k.every = k.all = function(e, t, i) {
        t || (t = k.identity);
        var r = !0;
        return null == e ? r : m && e.every === m ? e.every(t, i) : (T(e, function(e, o, s) {
            return (r = r && t.call(i, e, o, s)) ? void 0 : n;
        }), !!r);
    };
    var S = k.some = k.any = function(e, t, i) {
        t || (t = k.identity);
        var r = !1;
        return null == e ? r : v && e.some === v ? e.some(t, i) : (T(e, function(e, o, s) {
            return r || (r = t.call(i, e, o, s)) ? n : void 0;
        }), !!r);
    };
    k.contains = k.include = function(e, t) {
        var n = !1;
        return null == e ? n : y && e.indexOf === y ? -1 != e.indexOf(t) : n = S(e, function(e) {
            return e === t;
        });
    }, k.invoke = function(e, t) {
        var n = a.call(arguments, 2);
        return k.map(e, function(e) {
            return (k.isFunction(t) ? t : e[t]).apply(e, n);
        });
    }, k.pluck = function(e, t) {
        return k.map(e, function(e) {
            return e[t];
        });
    }, k.where = function(e, t) {
        return k.isEmpty(t) ? [] : k.filter(e, function(e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        });
    }, k.max = function(e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && k.isEmpty(e)) return -1/0;
        var i = {
            computed: -1/0
        };
        return T(e, function(e, r, o) {
            var s = t ? t.call(n, e, r, o) : e;
            s >= i.computed && (i = {
                value: e,
                computed: s
            });
        }), i.value;
    }, k.min = function(e, t, n) {
        if (!t && k.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && k.isEmpty(e)) return 1/0;
        var i = {
            computed: 1/0
        };
        return T(e, function(e, r, o) {
            var s = t ? t.call(n, e, r, o) : e;
            i.computed > s && (i = {
                value: e,
                computed: s
            });
        }), i.value;
    }, k.shuffle = function(e) {
        var t, n = 0, i = [];
        return T(e, function(e) {
            t = k.random(n++), i[n - 1] = i[t], i[t] = e;
        }), i;
    };
    var E = function(e) {
        return k.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    k.sortBy = function(e, t, n) {
        var i = E(t);
        return k.pluck(k.map(e, function(e, t, r) {
            return {
                value: e,
                index: t,
                criteria: i.call(n, e, t, r)
            };
        }).sort(function(e, t) {
            var n = e.criteria, i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var _ = function(e, t, n, i) {
        var r = {}, o = E(t);
        return T(e, function(t, s) {
            var a = o.call(n, t, s, e);
            i(r, a, t);
        }), r;
    };
    k.groupBy = function(e, t, n) {
        return _(e, t, n, function(e, t, n) {
            (k.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    }, k.countBy = function(e, t, n) {
        return _(e, t, n, function(e, t) {
            k.has(e, t) || (e[t] = 0), e[t]++;
        });
    }, k.sortedIndex = function(e, t, n, i) {
        n = null == n ? k.identity : E(n);
        for (var r = n.call(i, t), o = 0, s = e.length; s > o; ) {
            var a = o + s >>> 1;
            r > n.call(i, e[a]) ? o = a + 1 : s = a;
        }
        return o;
    }, k.toArray = function(e) {
        return e ? e.length === +e.length ? a.call(e) : k.values(e) : [];
    }, k.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length;
    }, k.first = k.head = k.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : a.call(e, 0, t);
    }, k.initial = function(e, t, n) {
        return a.call(e, 0, e.length - (null == t || n ? 1 : t));
    }, k.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0));
    }, k.rest = k.tail = k.drop = function(e, t, n) {
        return a.call(e, null == t || n ? 1 : t);
    }, k.compact = function(e) {
        return k.filter(e, function(e) {
            return !!e;
        });
    };
    var N = function(e, t, n) {
        return T(e, function(e) {
            k.isArray(e) ? t ? s.apply(n, e) : N(e, t, n) : n.push(e);
        }), n;
    };
    k.flatten = function(e, t) {
        return N(e, t, []);
    }, k.without = function(e) {
        return k.difference(e, a.call(arguments, 1));
    }, k.uniq = k.unique = function(e, t, n, i) {
        var r = n ? k.map(e, n, i) : e, o = [], s = [];
        return T(r, function(n, i) {
            (t ? i && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), o.push(e[i]));
        }), o;
    }, k.union = function() {
        return k.uniq(l.apply(i, arguments));
    }, k.intersection = function(e) {
        var t = a.call(arguments, 1);
        return k.filter(k.uniq(e), function(e) {
            return k.every(t, function(t) {
                return k.indexOf(t, e) >= 0;
            });
        });
    }, k.difference = function(e) {
        var t = l.apply(i, a.call(arguments, 1));
        return k.filter(e, function(e) {
            return !k.contains(t, e);
        });
    }, k.zip = function() {
        for (var e = a.call(arguments), t = k.max(k.pluck(e, "length")), n = Array(t), i = 0; t > i; i++) n[i] = k.pluck(e, "" + i);
        return n;
    }, k.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n;
    }, k.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var i = 0, r = e.length;
        if (n) {
            if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n;
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (;r > i; i++) if (e[i] === t) return i;
        return -1;
    }, k.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var i = null != n;
        if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var r = i ? n : e.length; r--; ) if (e[r] === t) return r;
        return -1;
    }, k.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = Array(i); i > r; ) o[r++] = e, 
        e += n;
        return o;
    };
    var $ = function() {};
    k.bind = function(e, t) {
        var n, i;
        if (e.bind === C && C) return C.apply(e, a.call(arguments, 1));
        if (!k.isFunction(e)) throw new TypeError();
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return e.apply(t, i.concat(a.call(arguments)));
            $.prototype = e.prototype;
            var r = new $(), o = e.apply(r, i.concat(a.call(arguments)));
            return Object(o) === o ? o : r;
        };
    }, k.bindAll = function(e) {
        var t = a.call(arguments, 1);
        return 0 == t.length && (t = k.functions(e)), T(t, function(t) {
            e[t] = k.bind(e[t], e);
        }), e;
    }, k.memoize = function(e, t) {
        var n = {};
        return t || (t = k.identity), function() {
            var i = t.apply(this, arguments);
            return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments);
        };
    }, k.delay = function(e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, k.defer = function(e) {
        return k.delay.apply(k, [ e, 1 ].concat(a.call(arguments, 1)));
    }, k.throttle = function(e, t) {
        var n, i, r, o, s = 0, a = function() {
            s = new Date(), r = null, o = e.apply(n, i);
        };
        return function() {
            var l = new Date(), u = t - (l - s);
            return n = this, i = arguments, 0 >= u ? (clearTimeout(r), s = l, o = e.apply(n, i)) : r || (r = setTimeout(a, u)), 
            o;
        };
    }, k.debounce = function(e, t, n) {
        var i, r;
        return function() {
            var o = this, s = arguments, a = function() {
                i = null, n || (r = e.apply(o, s));
            }, l = n && !i;
            return clearTimeout(i), i = setTimeout(a, t), l && (r = e.apply(o, s)), r;
        };
    }, k.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
        };
    }, k.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            return s.apply(n, arguments), t.apply(this, n);
        };
    }, k.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, k.after = function(e, t) {
        return 0 >= e ? t() : function() {
            return 1 > --e ? t.apply(this, arguments) : void 0;
        };
    }, k.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) k.has(e, n) && (t[t.length] = n);
        return t;
    }, k.values = function(e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push(e[n]);
        return t;
    }, k.pairs = function(e) {
        var t = [];
        for (var n in e) k.has(e, n) && t.push([ n, e[n] ]);
        return t;
    }, k.invert = function(e) {
        var t = {};
        for (var n in e) k.has(e, n) && (t[e[n]] = n);
        return t;
    }, k.functions = k.methods = function(e) {
        var t = [];
        for (var n in e) k.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, k.extend = function(e) {
        return T(a.call(arguments, 1), function(t) {
            for (var n in t) e[n] = t[n];
        }), e;
    }, k.pick = function(e) {
        var t = {}, n = l.apply(i, a.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    }, k.omit = function(e) {
        var t = {}, n = l.apply(i, a.call(arguments, 1));
        for (var r in e) k.contains(n, r) || (t[r] = e[r]);
        return t;
    }, k.defaults = function(e) {
        return T(a.call(arguments, 1), function(t) {
            for (var n in t) null == e[n] && (e[n] = t[n]);
        }), e;
    }, k.clone = function(e) {
        return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e;
    }, k.tap = function(e, t) {
        return t(e), e;
    };
    var A = function(e, t, n, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
        var r = u.call(e);
        if (r != u.call(t)) return !1;
        switch (r) {
          case "[object String]":
            return e == t + "";

          case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;

          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--; ) if (n[o] == e) return i[o] == t;
        n.push(e), i.push(t);
        var s = 0, a = !0;
        if ("[object Array]" == r) {
            if (s = e.length, a = s == t.length) for (;s-- && (a = A(e[s], t[s], n, i)); ) ;
        } else {
            var l = e.constructor, c = t.constructor;
            if (l !== c && !(k.isFunction(l) && l instanceof l && k.isFunction(c) && c instanceof c)) return !1;
            for (var h in e) if (k.has(e, h) && (s++, !(a = k.has(t, h) && A(e[h], t[h], n, i)))) break;
            if (a) {
                for (h in t) if (k.has(t, h) && !s--) break;
                a = !s;
            }
        }
        return n.pop(), i.pop(), a;
    };
    k.isEqual = function(e, t) {
        return A(e, t, [], []);
    }, k.isEmpty = function(e) {
        if (null == e) return !0;
        if (k.isArray(e) || k.isString(e)) return 0 === e.length;
        for (var t in e) if (k.has(e, t)) return !1;
        return !0;
    }, k.isElement = function(e) {
        return !(!e || 1 !== e.nodeType);
    }, k.isArray = x || function(e) {
        return "[object Array]" == u.call(e);
    }, k.isObject = function(e) {
        return e === Object(e);
    }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        k["is" + e] = function(t) {
            return u.call(t) == "[object " + e + "]";
        };
    }), k.isArguments(arguments) || (k.isArguments = function(e) {
        return !(!e || !k.has(e, "callee"));
    }), k.isFunction = function(e) {
        return "function" == typeof e;
    }, k.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, k.isNaN = function(e) {
        return k.isNumber(e) && e != +e;
    }, k.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == u.call(e);
    }, k.isNull = function(e) {
        return null === e;
    }, k.isUndefined = function(e) {
        return void 0 === e;
    }, k.has = function(e, t) {
        return c.call(e, t);
    }, k.noConflict = function() {
        return e._ = t, this;
    }, k.identity = function(e) {
        return e;
    }, k.times = function(e, t, n) {
        for (var i = 0; e > i; i++) t.call(n, i);
    }, k.random = function(e, t) {
        return null == t && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1));
    };
    var j = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    j.unescape = k.invert(j.escape);
    var D = {
        escape: RegExp("[" + k.keys(j.escape).join("") + "]", "g"),
        unescape: RegExp("(" + k.keys(j.unescape).join("|") + ")", "g")
    };
    k.each([ "escape", "unescape" ], function(e) {
        k[e] = function(t) {
            return null == t ? "" : ("" + t).replace(D[e], function(t) {
                return j[e][t];
            });
        };
    }), k.result = function(e, t) {
        if (null == e) return null;
        var n = e[t];
        return k.isFunction(n) ? n.call(e) : n;
    }, k.mixin = function(e) {
        T(k.functions(e), function(t) {
            var n = k[t] = e[t];
            k.prototype[t] = function() {
                var e = [ this._wrapped ];
                return s.apply(e, arguments), O.call(this, n.apply(k, e));
            };
        });
    };
    var H = 0;
    k.uniqueId = function(e) {
        var t = H++;
        return e ? e + t : t;
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/, L = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(e, t, n) {
        n = k.defaults({}, n, k.templateSettings);
        var i = RegExp([ (n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
        e.replace(i, function(t, n, i, s, a) {
            o += e.slice(r, a).replace(F, function(e) {
                return "\\" + L[e];
            }), o += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s ? "';\n" + s + "\n__p+='" : "", 
            r = a + t.length;
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = Function(n.variable || "obj", "_", o);
        } catch (a) {
            throw a.source = o, a;
        }
        if (t) return s(t, k);
        var l = function(e) {
            return s.call(this, e, k);
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l;
    }, k.chain = function(e) {
        return k(e).chain();
    };
    var O = function(e) {
        return this._chain ? k(e).chain() : e;
    };
    k.mixin(k), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = i[e];
        k.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], 
            O.call(this, n);
        };
    }), T([ "concat", "join", "slice" ], function(e) {
        var t = i[e];
        k.prototype[e] = function() {
            return O.call(this, t.apply(this._wrapped, arguments));
        };
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), !function(e, t) {
    "use strict";
    var n = t.prototype.trim, i = t.prototype.trimRight, r = t.prototype.trimLeft, o = function(e) {
        return 1 * e || 0;
    }, s = function(e, t) {
        if (1 > t) return "";
        for (var n = ""; t > 0; ) 1 & t && (n += e), t >>= 1, e += e;
        return n;
    }, a = [].slice, l = function(e) {
        return null == e ? "\\s" : e.source ? e.source : "[" + d.escapeRegExp(e) + "]";
    }, u = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    }, c = {};
    for (var h in u) c[u[h]] = h;
    var f = function() {
        function e(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
        }
        var n = s, i = function() {
            return i.cache.hasOwnProperty(arguments[0]) || (i.cache[arguments[0]] = i.parse(arguments[0])), 
            i.format.call(null, i.cache[arguments[0]], arguments);
        };
        return i.format = function(i, r) {
            var o, s, a, l, u, c, h, d = 1, p = i.length, g = "", m = [];
            for (s = 0; p > s; s++) if (g = e(i[s]), "string" === g) m.push(i[s]); else if ("array" === g) {
                if (l = i[s], l[2]) for (o = r[d], a = 0; l[2].length > a; a++) {
                    if (!o.hasOwnProperty(l[2][a])) throw Error(f('[_.sprintf] property "%s" does not exist', l[2][a]));
                    o = o[l[2][a]];
                } else o = l[1] ? r[l[1]] : r[d++];
                if (/[^s]/.test(l[8]) && "number" != e(o)) throw Error(f("[_.sprintf] expecting number but found %s", e(o)));
                switch (l[8]) {
                  case "b":
                    o = o.toString(2);
                    break;

                  case "c":
                    o = t.fromCharCode(o);
                    break;

                  case "d":
                    o = parseInt(o, 10);
                    break;

                  case "e":
                    o = l[7] ? o.toExponential(l[7]) : o.toExponential();
                    break;

                  case "f":
                    o = l[7] ? parseFloat(o).toFixed(l[7]) : parseFloat(o);
                    break;

                  case "o":
                    o = o.toString(8);
                    break;

                  case "s":
                    o = (o = t(o)) && l[7] ? o.substring(0, l[7]) : o;
                    break;

                  case "u":
                    o = Math.abs(o);
                    break;

                  case "x":
                    o = o.toString(16);
                    break;

                  case "X":
                    o = o.toString(16).toUpperCase();
                }
                o = /[def]/.test(l[8]) && l[3] && o >= 0 ? "+" + o : o, c = l[4] ? "0" == l[4] ? "0" : l[4].charAt(1) : " ", 
                h = l[6] - t(o).length, u = l[6] ? n(c, h) : "", m.push(l[5] ? o + u : u + o);
            }
            return m.join("");
        }, i.cache = {}, i.parse = function(e) {
            for (var t = e, n = [], i = [], r = 0; t; ) {
                if (null !== (n = /^[^\x25]+/.exec(t))) i.push(n[0]); else if (null !== (n = /^\x25{2}/.exec(t))) i.push("%"); else {
                    if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))) throw Error("[_.sprintf] huh?");
                    if (n[2]) {
                        r |= 1;
                        var o = [], s = n[2], a = [];
                        if (null === (a = /^([a-z_][a-z_\d]*)/i.exec(s))) throw Error("[_.sprintf] huh?");
                        for (o.push(a[1]); "" !== (s = s.substring(a[0].length)); ) if (null !== (a = /^\.([a-z_][a-z_\d]*)/i.exec(s))) o.push(a[1]); else {
                            if (null === (a = /^\[(\d+)\]/.exec(s))) throw Error("[_.sprintf] huh?");
                            o.push(a[1]);
                        }
                        n[2] = o;
                    } else r |= 2;
                    if (3 === r) throw Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    i.push(n);
                }
                t = t.substring(n[0].length);
            }
            return i;
        }, i;
    }(), d = {
        VERSION: "2.2.0rc",
        isBlank: function(e) {
            return null == e && (e = ""), /^\s*$/.test(e);
        },
        stripTags: function(e) {
            return null == e ? "" : t(e).replace(/<\/?[^>]+>/g, "");
        },
        capitalize: function(e) {
            return e = null == e ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1);
        },
        chop: function(e, n) {
            return null == e ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(RegExp(".{1," + n + "}", "g")) : [ e ]);
        },
        clean: function(e) {
            return d.strip(e).replace(/\s+/g, " ");
        },
        count: function(e, n) {
            return null == e || null == n ? 0 : t(e).split(n).length - 1;
        },
        chars: function(e) {
            return null == e ? [] : t(e).split("");
        },
        swapCase: function(e) {
            return null == e ? "" : t(e).replace(/\S/g, function(e) {
                return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
            });
        },
        escapeHTML: function(e) {
            return null == e ? "" : t(e).replace(/[&<>"']/g, function(e) {
                return "&" + c[e] + ";";
            });
        },
        unescapeHTML: function(e) {
            return null == e ? "" : t(e).replace(/\&([^;]+);/g, function(e, n) {
                var i;
                return n in u ? u[n] : (i = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(i[1], 16)) : (i = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~i[1]) : e;
            });
        },
        escapeRegExp: function(e) {
            return null == e ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        },
        splice: function(e, t, n, i) {
            var r = d.chars(e);
            return r.splice(~~t, ~~n, i), r.join("");
        },
        insert: function(e, t, n) {
            return d.splice(e, t, 0, n);
        },
        include: function(e, n) {
            return "" === n ? !0 : null == e ? !1 : -1 !== t(e).indexOf(n);
        },
        join: function() {
            var e = a.call(arguments), t = e.shift();
            return null == t && (t = ""), e.join(t);
        },
        lines: function(e) {
            return null == e ? [] : t(e).split("\n");
        },
        reverse: function(e) {
            return d.chars(e).reverse().join("");
        },
        startsWith: function(e, n) {
            return "" === n ? !0 : null == e || null == n ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n);
        },
        endsWith: function(e, n) {
            return "" === n ? !0 : null == e || null == n ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n);
        },
        succ: function(e) {
            return null == e ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1));
        },
        titleize: function(e) {
            return null == e ? "" : t(e).replace(/(?:^|\s)\S/g, function(e) {
                return e.toUpperCase();
            });
        },
        camelize: function(e) {
            return d.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
                return t.toUpperCase();
            });
        },
        underscored: function(e) {
            return d.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
        },
        dasherize: function(e) {
            return d.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
        },
        classify: function(e) {
            return d.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "");
        },
        humanize: function(e) {
            return d.capitalize(d.underscored(e).replace(/_id$/, "").replace(/_/g, " "));
        },
        trim: function(e, i) {
            return null == e ? "" : !i && n ? n.call(e) : (i = l(i), t(e).replace(RegExp("^" + i + "+|" + i + "+$", "g"), ""));
        },
        ltrim: function(e, n) {
            return null == e ? "" : !n && r ? r.call(e) : (n = l(n), t(e).replace(RegExp("^" + n + "+"), ""));
        },
        rtrim: function(e, n) {
            return null == e ? "" : !n && i ? i.call(e) : (n = l(n), t(e).replace(RegExp(n + "+$"), ""));
        },
        truncate: function(e, n, i) {
            return null == e ? "" : (e = t(e), i = i || "...", n = ~~n, e.length > n ? e.slice(0, n) + i : e);
        },
        prune: function(e, n, i) {
            if (null == e) return "";
            if (e = t(e), n = ~~n, i = null != i ? t(i) : "...", n >= e.length) return e;
            var r = function(e) {
                return e.toUpperCase() !== e.toLowerCase() ? "A" : " ";
            }, o = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, r);
            return o = o.slice(o.length - 2).match(/\w\w/) ? o.replace(/\s*\S+$/, "") : d.rtrim(o.slice(0, o.length - 1)), 
            (o + i).length > e.length ? e : e.slice(0, o.length) + i;
        },
        words: function(e, t) {
            return d.isBlank(e) ? [] : d.trim(e, t).split(t || /\s+/);
        },
        pad: function(e, n, i, r) {
            e = null == e ? "" : t(e), n = ~~n;
            var o = 0;
            switch (i ? i.length > 1 && (i = i.charAt(0)) : i = " ", r) {
              case "right":
                return o = n - e.length, e + s(i, o);

              case "both":
                return o = n - e.length, s(i, Math.ceil(o / 2)) + e + s(i, Math.floor(o / 2));

              default:
                return o = n - e.length, s(i, o) + e;
            }
        },
        lpad: function(e, t, n) {
            return d.pad(e, t, n);
        },
        rpad: function(e, t, n) {
            return d.pad(e, t, n, "right");
        },
        lrpad: function(e, t, n) {
            return d.pad(e, t, n, "both");
        },
        sprintf: f,
        vsprintf: function(e, t) {
            return t.unshift(e), f.apply(null, t);
        },
        toNumber: function(e, n) {
            if (null == e || "" == e) return 0;
            e = t(e);
            var i = o(o(e).toFixed(~~n));
            return 0 !== i || e.match(/^0+$/) ? i : Number.NaN;
        },
        numberFormat: function(e, t, n, i) {
            if (isNaN(e) || null == e) return "";
            e = e.toFixed(~~t), i = i || ",";
            var r = e.split("."), o = r[0], s = r[1] ? (n || ".") + r[1] : "";
            return o.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + i) + s;
        },
        strRight: function(e, n) {
            if (null == e) return "";
            e = t(e), n = null != n ? t(n) : n;
            var i = n ? e.indexOf(n) : -1;
            return ~i ? e.slice(i + n.length, e.length) : e;
        },
        strRightBack: function(e, n) {
            if (null == e) return "";
            e = t(e), n = null != n ? t(n) : n;
            var i = n ? e.lastIndexOf(n) : -1;
            return ~i ? e.slice(i + n.length, e.length) : e;
        },
        strLeft: function(e, n) {
            if (null == e) return "";
            e = t(e), n = null != n ? t(n) : n;
            var i = n ? e.indexOf(n) : -1;
            return ~i ? e.slice(0, i) : e;
        },
        strLeftBack: function(e, t) {
            if (null == e) return "";
            e += "", t = null != t ? "" + t : t;
            var n = e.lastIndexOf(t);
            return ~n ? e.slice(0, n) : e;
        },
        toSentence: function(e, t, n, i) {
            t = t || ", ", n = n || " and ";
            var r = e.slice(), o = r.pop();
            return e.length > 2 && i && (n = d.rtrim(t) + n), r.length ? r.join(t) + n + o : o;
        },
        toSentenceSerial: function() {
            var e = a.call(arguments);
            return e[3] = !0, d.toSentence.apply(d, e);
        },
        slugify: function(e) {
            if (null == e) return "";
            var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź", i = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", r = RegExp(l(n), "g");
            return e = t(e).toLowerCase().replace(r, function(e) {
                var t = n.indexOf(e);
                return i.charAt(t) || "-";
            }), d.dasherize(e.replace(/[^\w\s-]/g, ""));
        },
        surround: function(e, t) {
            return [ t, e, t ].join("");
        },
        quote: function(e) {
            return d.surround(e, '"');
        },
        exports: function() {
            var e = {};
            for (var t in this) this.hasOwnProperty(t) && !t.match(/^(?:include|contains|reverse)$/) && (e[t] = this[t]);
            return e;
        },
        repeat: function(e, n, i) {
            if (null == e) return "";
            if (n = ~~n, null == i) return s(t(e), n);
            for (var r = []; n > 0; r[--n] = e) ;
            return r.join(i);
        },
        levenshtein: function(e, n) {
            if (null == e && null == n) return 0;
            if (null == e) return t(n).length;
            if (null == n) return t(e).length;
            e = t(e), n = t(n);
            for (var i, r, o = [], s = 0; n.length >= s; s++) for (var a = 0; e.length >= a; a++) r = s && a ? e.charAt(a - 1) === n.charAt(s - 1) ? i : Math.min(o[a], o[a - 1], i) + 1 : s + a, 
            i = o[a], o[a] = r;
            return o.pop();
        }
    };
    d.strip = d.trim, d.lstrip = d.ltrim, d.rstrip = d.rtrim, d.center = d.lrpad, d.rjust = d.lpad, 
    d.ljust = d.rpad, d.contains = d.include, d.q = d.quote, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = d), 
    exports._s = d) : "function" == typeof define && define.amd ? define("underscore.string", [], function() {
        return d;
    }) : (e._ = e._ || {}, e._.string = e._.str = d);
}(this, String), function() {
    var e, t = this, n = t.Backbone, i = Array.prototype, r = i.push, o = i.slice, s = i.splice;
    e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "0.9.2";
    var a = t._;
    a || "undefined" == typeof require || (a = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender, 
    e.noConflict = function() {
        return t.Backbone = n, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var l = /\s+/, u = e.Events = {
        on: function(e, t, n) {
            var i, r, o;
            if (!t) return this;
            for (e = e.split(l), i = this._callbacks || (this._callbacks = {}); r = e.shift(); ) o = i[r] || (i[r] = []), 
            o.push(t, n);
            return this;
        },
        off: function(e, t, n) {
            var i, r, o, s;
            if (!(r = this._callbacks)) return this;
            if (!(e || t || n)) return delete this._callbacks, this;
            for (e = e ? e.split(l) : a.keys(r); i = e.shift(); ) if ((o = r[i]) && (t || n)) for (s = o.length - 2; s >= 0; s -= 2) t && o[s] !== t || n && o[s + 1] !== n || o.splice(s, 2); else delete r[i];
            return this;
        },
        trigger: function(e) {
            var t, n, i, r, o, s, a, u;
            if (!(n = this._callbacks)) return this;
            for (u = [], e = e.split(l), r = 1, o = arguments.length; o > r; r++) u[r - 1] = arguments[r];
            for (;t = e.shift(); ) {
                if ((a = n.all) && (a = a.slice()), (i = n[t]) && (i = i.slice()), i) for (r = 0, 
                o = i.length; o > r; r += 2) i[r].apply(i[r + 1] || this, u);
                if (a) for (s = [ t ].concat(u), r = 0, o = a.length; o > r; r += 2) a[r].apply(a[r + 1] || this, s);
            }
            return this;
        }
    };
    u.bind = u.on, u.unbind = u.off;
    var c = e.Model = function(e, t) {
        var n, i = e || {};
        t && t.collection && (this.collection = t.collection), t && t.parse && (i = this.parse(i)), 
        (n = a.result(this, "defaults")) && (i = a.extend({}, n, i)), this.attributes = {}, 
        this._escapedAttributes = {}, this.cid = a.uniqueId("c"), this.changed = {}, this._changes = {}, 
        this._pending = {}, this.set(i, {
            silent: !0
        }), this.changed = {}, this._changes = {}, this._pending = {}, this._previousAttributes = a.clone(this.attributes), 
        this.initialize.apply(this, arguments);
    };
    a.extend(c.prototype, u, {
        changed: null,
        _changes: null,
        _pending: null,
        _changing: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return a.clone(this.attributes);
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            var t;
            if (t = this._escapedAttributes[e]) return t;
            var n = this.get(e);
            return this._escapedAttributes[e] = a.escape(null == n ? "" : "" + n);
        },
        has: function(e) {
            return null != this.get(e);
        },
        set: function(e, t) {
            var n, i, r;
            if (null == e) return this;
            a.isObject(e) || (i = e, (e = {})[i] = t, t = arguments[2]);
            var o = t && t.silent, s = t && t.unset;
            if (e instanceof c && (e = e.attributes), s) for (n in e) e[n] = void 0;
            if (!this._validate(e, t)) return !1;
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            var l = this._changing, u = this.attributes, h = this._escapedAttributes, f = this._previousAttributes || {};
            for (n in e) r = e[n], (!a.isEqual(u[n], r) || s && a.has(u, n)) && (delete h[n], 
            this._changes[n] = !0), s ? delete u[n] : u[n] = r, a.isEqual(f[n], r) && a.has(u, n) === a.has(f, n) ? (delete this.changed[n], 
            delete this._pending[n], l || delete this._changes[n]) : (this.changed[n] = r, o || (this._pending[n] = !0)), 
            l && a.isEqual(u[n], l[n]) && delete this._changes[n];
            return o || this.change(t), this;
        },
        unset: function(e, t) {
            return t = a.extend({}, t, {
                unset: !0
            }), this.set(e, null, t);
        },
        clear: function(e) {
            return e = a.extend({}, e, {
                unset: !0
            }), this.set(a.clone(this.attributes), e);
        },
        fetch: function(e) {
            e = e ? a.clone(e) : {};
            var t = this, n = e.success;
            return e.success = function(i, r, o) {
                return t.set(t.parse(i, o), e) ? (n && n(t, i, e), void 0) : !1;
            }, this.sync("read", this, e);
        },
        save: function(e, t) {
            var n, i, r;
            if (null == e || a.isObject(e) || (n = e, (e = {})[n] = t, t = arguments[2]), t = t ? a.clone(t) : {}, 
            t.wait) {
                if (!this._validate(e, t)) return !1;
                i = a.clone(this.attributes);
            }
            var o = a.extend({}, t, {
                silent: !0
            });
            if (e && !this.set(e, t.wait ? o : t)) return !1;
            if (!e && !this._validate(null, t)) return !1;
            var s = this, l = t.success;
            t.success = function(n, i, o) {
                r = !0;
                var u = s.parse(n, o);
                return t.wait && (u = a.extend(e || {}, u)), s.set(u, t) ? (l && l(s, n, t), void 0) : !1;
            };
            var u = this.sync(this.isNew() ? "create" : "update", this, t);
            return !r && t.wait && (this.clear(o), this.set(i, o)), u;
        },
        destroy: function(e) {
            e = e ? a.clone(e) : {};
            var t = this, n = e.success, i = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            if (e.success = function(r) {
                (e.wait || t.isNew()) && i(), n && n(t, r, e);
            }, this.isNew()) return e.success(), !1;
            var r = this.sync("delete", this, e);
            return e.wait || i(), r;
        },
        url: function() {
            var e = a.result(this, "urlRoot") || a.result(this.collection, "url") || $();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        change: function(e) {
            var t = this._changing, n = this._changing = {};
            for (var i in this._changes) this._pending[i] = !0;
            var r = this._changes;
            this._changes = {};
            var o = [];
            for (var i in r) n[i] = this.get(i), o.push(i);
            for (var s = 0, l = o.length; l > s; s++) this.trigger("change:" + o[s], this, n[o[s]], e);
            if (t) return this;
            for (;!a.isEmpty(this._pending); ) {
                this._pending = {}, this.trigger("change", this, e);
                for (var i in this.changed) this._pending[i] || this._changes[i] || delete this.changed[i];
                this._previousAttributes = a.clone(this.attributes);
            }
            return this._changing = null, this;
        },
        hasChanged: function(e) {
            return null == e ? !a.isEmpty(this.changed) : a.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? a.clone(this.changed) : !1;
            var t, n = !1, i = this._previousAttributes;
            for (var r in e) a.isEqual(i[r], t = e[r]) || ((n || (n = {}))[r] = t);
            return n;
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
        },
        previousAttributes: function() {
            return a.clone(this._previousAttributes);
        },
        isValid: function(e) {
            return !this.validate || !this.validate(this.attributes, e);
        },
        _validate: function(e, t) {
            if (t && t.silent || !this.validate) return !0;
            e = a.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            return n ? (t && t.error && t.error(this, n, t), this.trigger("error", this, n, t), 
            !1) : !0;
        }
    });
    var h = e.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), 
        this._reset(), this.initialize.apply(this, arguments), e && (t.parse && (e = this.parse(e)), 
        this.reset(e, {
            silent: !0,
            parse: t.parse
        }));
    };
    a.extend(h.prototype, u, {
        model: c,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        add: function(e, t) {
            var n, i, o, l, u, c = t && t.at;
            for (e = a.isArray(e) ? e.slice() : [ e ], n = 0, o = e.length; o > n; n++) if (!(e[n] = this._prepareModel(e[n], t))) throw Error("Can't add an invalid model to a collection");
            for (n = e.length - 1; n >= 0; n--) l = e[n], u = null != l.id && this._byId[l.id], 
            u || this._byCid[l.cid] ? (t && t.merge && u && u.set(l, t), e.splice(n, 1)) : (l.on("all", this._onModelEvent, this), 
            this._byCid[l.cid] = l, null != l.id && (this._byId[l.id] = l));
            if (this.length += e.length, i = [ null != c ? c : this.models.length, 0 ], r.apply(i, e), 
            s.apply(this.models, i), this.comparator && null == c && this.sort({
                silent: !0
            }), t && t.silent) return this;
            for (;l = e.shift(); ) l.trigger("add", l, this, t);
            return this;
        },
        remove: function(e, t) {
            var n, i, r, o;
            for (t || (t = {}), e = a.isArray(e) ? e.slice() : [ e ], n = 0, i = e.length; i > n; n++) o = this.getByCid(e[n]) || this.get(e[n]), 
            o && (delete this._byId[o.id], delete this._byCid[o.cid], r = this.indexOf(o), this.models.splice(r, 1), 
            this.length--, t.silent || (t.index = r, o.trigger("remove", o, this, t)), this._removeReference(o));
            return this;
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, t), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, a.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            return null == e ? void 0 : this._byId[null != e.id ? e.id : e];
        },
        getByCid: function(e) {
            return e && this._byCid[e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e) {
            return a.isEmpty(e) ? [] : this.filter(function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        sort: function(e) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), 
            e && e.silent || this.trigger("reset", this, e), this;
        },
        pluck: function(e) {
            return a.invoke(this.models, "get", e);
        },
        reset: function(e, t) {
            for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]);
            return this._reset(), e && this.add(e, a.extend({
                silent: !0
            }, t)), t && t.silent || this.trigger("reset", this, t), this;
        },
        fetch: function(e) {
            e = e ? a.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(i, r, o) {
                t[e.add ? "add" : "reset"](t.parse(i, o), e), n && n(t, i, e);
            }, this.sync("read", this, e);
        },
        create: function(e, t) {
            var n = this;
            if (t = t ? a.clone(t) : {}, e = this._prepareModel(e, t), !e) return !1;
            t.wait || n.add(e, t);
            var i = t.success;
            return t.success = function(e, t, r) {
                r.wait && n.add(e, r), i && i(e, t, r);
            }, e.save(null, t), e;
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        chain: function() {
            return a(this.models).chain();
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof c) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(n.attributes, t) ? n : !1;
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, i) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), 
            t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], 
            null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments));
        }
    });
    var f = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty" ];
    a.each(f, function(e) {
        h.prototype[e] = function() {
            var t = o.call(arguments);
            return t.unshift(this.models), a[e].apply(a, t);
        };
    });
    var d = [ "groupBy", "countBy", "sortBy" ];
    a.each(d, function(e) {
        h.prototype[e] = function(t, n) {
            var i = a.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return a[e](this.models, i, n);
        };
    });
    var p = e.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, g = /\((.*?)\)/g, m = /:\w+/g, v = /\*\w+/g, y = /[-{}[\]+?.,\\^$|#\s]/g;
    a.extend(p.prototype, u, {
        initialize: function() {},
        route: function(t, n, i) {
            return a.isRegExp(t) || (t = this._routeToRegExp(t)), i || (i = this[n]), e.history.route(t, a.bind(function(r) {
                var o = this._extractParameters(t, r);
                i && i.apply(this, o), this.trigger.apply(this, [ "route:" + n ].concat(o)), e.history.trigger("route", this, n, o);
            }, this)), this;
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) for (var e, t = a.keys(this.routes); null != (e = t.pop()); ) {
                var n = this.routes[e];
                this.route(e, n, this[n]);
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(y, "\\$&").replace(g, "(?:$1)?").replace(m, "([^/]+)").replace(v, "(.*?)"), 
            RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            return e.exec(t).slice(1);
        }
    });
    var b = e.History = function() {
        this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, x = /^[#\/]/, w = /^\/+|\/+$/g, C = /msie [\w.]+/, k = /\/$/;
    b.started = !1, a.extend(b.prototype, u, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(k, "");
                e.indexOf(n) || (e = e.substr(n.length));
            } else e = this.getHash();
            return decodeURIComponent(e.replace(x, ""));
        },
        start: function(t) {
            if (b.started) throw Error("Backbone.history has already been started");
            b.started = !0, this.options = a.extend({}, {
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment(), i = document.documentMode, r = C.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
            this.root = ("/" + this.root + "/").replace(w, "/"), r && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(n)), this._hasPushState ? e.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? e.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = n;
            var o = this.location, s = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && s && o.hash && (this.fragment = this.getHash().replace(x, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), 
            this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            e.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), 
            clearInterval(this._checkUrlInterval), b.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), 
            e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash()), 
            void 0);
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = a.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!b.started) return !1;
            if (t && t !== !0 || (t = {
                trigger: t
            }), e = this.getFragment(e || ""), this.fragment !== e) {
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, e, t.replace));
                }
                t.trigger && this.loadUrl(e);
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t);
            } else e.hash = "#" + t;
        }
    }), e.history = new b();
    var T = e.View = function(e) {
        this.cid = a.uniqueId("view"), this._configure(e || {}), this._ensureElement(), 
        this.initialize.apply(this, arguments), this.delegateEvents();
    }, S = /^(\S+)\s*(.*)$/, E = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
    a.extend(T.prototype, u, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        dispose: function() {
            return this.undelegateEvents(), this.model && this.model.off && this.model.off(null, null, this), 
            this.collection && this.collection.off && this.collection.off(null, null, this), 
            this;
        },
        remove: function() {
            return this.dispose(), this.$el.remove(), this;
        },
        make: function(t, n, i) {
            var r = document.createElement(t);
            return n && e.$(r).attr(n), null != i && e.$(r).html(i), r;
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), 
            this.el = this.$el[0], n !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (e || (e = a.result(this, "events"))) {
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    if (a.isFunction(n) || (n = this[e[t]]), !n) throw Error('Method "' + e[t] + '" does not exist');
                    var i = t.match(S), r = i[1], o = i[2];
                    n = a.bind(n, this), r += ".delegateEvents" + this.cid, "" === o ? this.$el.bind(r, n) : this.$el.delegate(o, r, n);
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(e) {
            this.options && (e = a.extend({}, this.options, e));
            for (var t = 0, n = E.length; n > t; t++) {
                var i = E[t];
                e[i] && (this[i] = e[i]);
            }
            this.options = e;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(a.result(this, "el"), !1); else {
                var e = a.extend({}, a.result(this, "attributes"));
                this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className")), 
                this.setElement(this.make(a.result(this, "tagName"), e), !1);
            }
        }
    });
    var _ = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    e.sync = function(t, n, i) {
        var r = _[t];
        i || (i = {});
        var o = {
            type: r,
            dataType: "json"
        };
        if (i.url || (o.url = a.result(n, "url") || $()), i.data || !n || "create" !== t && "update" !== t || (o.contentType = "application/json", 
        o.data = JSON.stringify(n)), e.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", 
        o.data = o.data ? {
            model: o.data
        } : {}), e.emulateHTTP && ("PUT" === r || "DELETE" === r)) {
            o.type = "POST", e.emulateJSON && (o.data._method = r);
            var s = i.beforeSend;
            i.beforeSend = function(e) {
                return e.setRequestHeader("X-HTTP-Method-Override", r), s ? s.apply(this, arguments) : void 0;
            };
        }
        "GET" === o.type || e.emulateJSON || (o.processData = !1);
        var l = i.success;
        i.success = function(e, t, r) {
            l && l(e, t, r), n.trigger("sync", n, e, i);
        };
        var u = i.error;
        return i.error = function(e) {
            u && u(n, e, i), n.trigger("error", n, e, i);
        }, e.ajax(a.extend(o, i));
    }, e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments);
    };
    var N = function(e, t) {
        var n, i = this;
        n = e && a.has(e, "constructor") ? e.constructor : function() {
            i.apply(this, arguments);
        }, a.extend(n, i, t);
        var r = function() {
            this.constructor = n;
        };
        return r.prototype = i.prototype, n.prototype = new r(), e && a.extend(n.prototype, e), 
        n.__super__ = i.prototype, n;
    };
    c.extend = h.extend = p.extend = T.extend = b.extend = N;
    var $ = function() {
        throw Error('A "url" property or function must be specified');
    };
}.call(this), !function(e) {
    e(function() {
        "use strict";
        e.support.transition = function() {
            var e = function() {
                var e, t = document.createElement("bootstrap"), n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (e in n) if (void 0 !== t.style[e]) return n[e];
            }();
            return e && {
                end: e
            };
        }();
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function(n) {
        e(n).on("click", t, this.close);
    };
    n.prototype.close = function(t) {
        function n() {
            i.trigger("closed").remove();
        }
        var i, r = e(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), i = e(o), t && t.preventDefault(), 
        i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(t = e.Event("close")), 
        t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n());
    }, e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this), r = i.data("alert");
            r || i.data("alert", r = new n(this)), "string" == typeof t && r[t].call(i);
        });
    }, e.fn.alert.Constructor = n, e(function() {
        e("body").on("click.alert.data-api", t, n.prototype.close);
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n);
    };
    t.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, i = n.data(), r = n.is("input") ? "val" : "html";
        e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), 
        setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t);
        }, 0);
    }, t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active");
    }, e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("button"), o = "object" == typeof n && n;
            r || i.data("button", r = new t(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n);
        });
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e(function() {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle");
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = n, this.options.slide && this.slide(this.options.slide), 
        "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this));
    };
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), 
            this;
        },
        to: function(t) {
            var n = this.$element.find(".item.active"), i = n.parent().children(), r = i.index(n), o = this;
            if (!(t > i.length - 1 || 0 > t)) return this.sliding ? this.$element.one("slid", function() {
                o.to(t);
            }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(i[t]));
        },
        pause: function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), 
            this.cycle()), clearInterval(this.interval), this.interval = null, this;
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next");
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev");
        },
        slide: function(t, n) {
            var i = this.$element.find(".item.active"), r = n || i[t](), o = this.interval, s = "next" == t ? "left" : "right", a = "next" == t ? "first" : "last", l = this, u = e.Event("slide", {
                relatedTarget: r[0]
            });
            if (this.sliding = !0, o && this.pause(), r = r.length ? r : this.$element.find(".item")[a](), 
            !r.hasClass("active")) {
                if (e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    r.addClass(t), r[0].offsetWidth, i.addClass(s), r.addClass(s), this.$element.one(e.support.transition.end, function() {
                        r.removeClass([ t, s ].join(" ")).addClass("active"), i.removeClass([ "active", s ].join(" ")), 
                        l.sliding = !1, setTimeout(function() {
                            l.$element.trigger("slid");
                        }, 0);
                    });
                } else {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
                }
                return o && this.cycle(), this;
            }
        }
    }, e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("carousel"), o = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n), s = "string" == typeof n ? n : o.slide;
            r || i.data("carousel", r = new t(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.cycle();
        });
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e(function() {
        e("body").on("click.carousel.data-api", "[data-slide]", function(t) {
            var n, i = e(this), r = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = !r.data("modal") && e.extend({}, r.data(), i.data());
            r.carousel(o), t.preventDefault();
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), 
        this.options.toggle && this.toggle();
    };
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height";
        },
        show: function() {
            var t, n, i, r;
            if (!this.transitioning) {
                if (t = this.dimension(), n = e.camelCase([ "scroll", t ].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), 
                i && i.length) {
                    if (r = i.data("collapse"), r && r.transitioning) return;
                    i.collapse("hide"), r || i.data("collapse", null);
                }
                this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n]);
            }
        },
        hide: function() {
            var t;
            this.transitioning || (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), 
            this.$element[t](0));
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), 
            this;
        },
        transition: function(t, n, i) {
            var r = this, o = function() {
                "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i);
            };
            this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), 
            e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, o) : o());
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    }, e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("collapse"), o = "object" == typeof n && n;
            r || i.data("collapse", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e(function() {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this), r = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = e(r).data("collapse") ? "toggle" : i.data();
            i[e(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(r).collapse(o);
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    function t() {
        n(e(i)).removeClass("open");
    }
    function n(t) {
        var n, i = t.attr("data-target");
        return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), 
        n = e(i), n.length || (n = t.parent()), n;
    }
    var i = "[data-toggle=dropdown]", r = function(t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open");
        });
    };
    r.prototype = {
        constructor: r,
        toggle: function() {
            var i, r, o = e(this);
            if (!o.is(".disabled, :disabled")) return i = n(o), r = i.hasClass("open"), t(), 
            r || (i.toggleClass("open"), o.focus()), !1;
        },
        keydown: function(t) {
            var i, r, o, s, a;
            if (/(38|40|27)/.test(t.keyCode) && (i = e(this), t.preventDefault(), t.stopPropagation(), 
            !i.is(".disabled, :disabled"))) {
                if (o = n(i), s = o.hasClass("open"), !s || s && 27 == t.keyCode) return i.click();
                r = e("[role=menu] li:not(.divider) a", o), r.length && (a = r.index(r.filter(":focus")), 
                38 == t.keyCode && a > 0 && a--, 40 == t.keyCode && r.length - 1 > a && a++, ~a || (a = 0), 
                r.eq(a).focus());
            }
        }
    }, e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this), i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), "string" == typeof t && i[t].call(n);
        });
    }, e.fn.dropdown.Constructor = r, e(function() {
        e("html").on("click.dropdown.data-api touchstart.dropdown.data-api", t), e("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation();
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown);
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), 
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]();
        },
        show: function() {
            var t = this, n = e.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (e("body").addClass("modal-open"), 
            this.isShown = !0, this.escape(), this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), 
                n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1).focus(), 
                t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.trigger("shown");
                }) : t.$element.trigger("shown");
            }));
        },
        hide: function(t) {
            t && t.preventDefault(), t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, 
            e("body").removeClass("modal-open"), this.escape(), e(document).off("focusin.modal"), 
            this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus();
            });
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                27 == t.which && e.hide();
            }) : this.isShown || this.$element.off("keyup.dismiss.modal");
        },
        hideWithTransition: function() {
            var t = this, n = setTimeout(function() {
                t.$element.off(e.support.transition.end), t.hideModal();
            }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n), t.hideModal();
            });
        },
        hideModal: function() {
            this.$element.hide().trigger("hidden"), this.backdrop();
        },
        removeBackdrop: function() {
            this.$backdrop.remove(), this.$backdrop = null;
        },
        backdrop: function(t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && n;
                this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), 
                "static" != this.options.backdrop && this.$backdrop.click(e.proxy(this.hide, this)), 
                i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t();
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : t && t();
        }
    }, e.fn.modal = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("modal"), o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
            r || i.data("modal", r = new t(this, o)), "string" == typeof n ? r[n]() : o.show && r.show();
        });
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e(function() {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this), i = n.attr("href"), r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), o = r.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
            t.preventDefault(), r.modal(o).one("hide", function() {
                n.focus();
            });
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t);
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, i) {
            var r, o;
            this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, 
            "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != this.options.trigger && (r = "hover" == this.options.trigger ? "mouseenter" : "focus", 
            o = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this)), 
            this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this))), 
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t;
        },
        enter: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", 
            this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show();
            }, n.options.delay.show), void 0) : n.show();
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", 
            this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide();
            }, n.options.delay.hide), void 0) : n.hide();
        },
        show: function() {
            var e, t, n, i, r, o, s;
            if (this.hasContent() && this.enabled) {
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), 
                o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, 
                t = /in/.test(o), e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), i = e[0].offsetWidth, 
                r = e[0].offsetHeight, t ? o.split(" ")[1] : o) {
                  case "bottom":
                    s = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;

                  case "top":
                    s = {
                        top: n.top - r,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;

                  case "left":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left - i
                    };
                    break;

                  case "right":
                    s = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left + n.width
                    };
                }
                e.css(s).addClass(o).addClass("in");
            }
        },
        setContent: function() {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right");
        },
        hide: function() {
            function t() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).remove();
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.remove();
                });
            }
            var n = this.tip();
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.remove(), 
            this;
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title");
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function(t) {
            return e.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            });
        },
        getTitle: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title);
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template);
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
        },
        enable: function() {
            this.enabled = !0;
        },
        disable: function() {
            this.enabled = !1;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]();
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    }, e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("tooltip"), o = "object" == typeof n && n;
            r || i.data("tooltip", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    };
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t);
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content > *")[this.options.html ? "html" : "text"](n), 
            e.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content);
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    }), e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("popover"), o = "object" == typeof n && n;
            r || i.data("popover", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    });
}(window.jQuery), !function(e) {
    "use strict";
    function t(t, n) {
        var i, r = e.proxy(this.process, this), o = e(t).is("body") ? e(window) : e(t);
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = o.on("scroll.scroll-spy.data-api", r), 
        this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.$body = e("body"), this.refresh(), this.process();
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t, n = this;
            this.offsets = e([]), this.targets = e([]), t = this.$body.find(this.selector).map(function() {
                var t = e(this), n = t.data("target") || t.attr("href"), i = /^#\w/.test(n) && e(n);
                return i && i.length && [ [ i.position().top, n ] ] || null;
            }).sort(function(e, t) {
                return e[0] - t[0];
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1]);
            });
        },
        process: function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
            if (t >= i) return s != (e = o.last()[0]) && this.activate(e);
            for (e = r.length; e--; ) s != o[e] && t >= r[e] && (!r[e + 1] || r[e + 1] >= t) && this.activate(o[e]);
        },
        activate: function(t) {
            var n, i;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), 
            i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', 
            n = e(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
            n.trigger("activate");
        }
    }, e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("scrollspy"), o = "object" == typeof n && n;
            r || i.data("scrollspy", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data());
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t);
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var t, n, i, r = this.element, o = r.closest("ul:not(.dropdown-menu)"), s = r.attr("data-target");
            s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (t = o.find(".active a").last()[0], 
            i = e.Event("show", {
                relatedTarget: t
            }), r.trigger(i), i.isDefaultPrevented() || (n = e(s), this.activate(r.parent("li"), o), 
            this.activate(n, n.parent(), function() {
                r.trigger({
                    type: "shown",
                    relatedTarget: t
                });
            })));
        },
        activate: function(t, n, i) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
                t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), 
                t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i();
            }
            var o = n.find("> .active"), s = i && e.support.transition && o.hasClass("fade");
            s ? o.one(e.support.transition.end, r) : r(), o.removeClass("in");
        }
    }, e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("tab");
            r || i.data("tab", r = new t(this)), "string" == typeof n && r[n]();
        });
    }, e.fn.tab.Constructor = t, e(function() {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(), e(this).tab("show");
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, 
        this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, 
        this.updater = this.options.updater || this.updater, this.$menu = e(this.options.menu).appendTo("body"), 
        this.source = this.options.source, this.shown = !1, this.listen();
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide();
        },
        updater: function(e) {
            return e;
        },
        show: function() {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }), this.$menu.show(), this.shown = !0, this;
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this;
        },
        lookup: function() {
            var t;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, 
            t ? this.process(t) : this);
        },
        process: function(t) {
            var n = this;
            return t = e.grep(t, function(e) {
                return n.matcher(e);
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(e) {
            for (var t, n = [], i = [], r = []; t = e.shift(); ) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : n.push(t);
            return n.concat(i, r);
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>";
            });
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, i) {
                return t = e(n.options.item).attr("data-value", i), t.find("a").html(n.highlighter(i)), 
                t[0];
            }), t.first().addClass("active"), this.$menu.html(t), this;
        },
        next: function() {
            var t = this.$menu.find(".active").removeClass("active"), n = t.next();
            n.length || (n = e(this.$menu.find("li")[0])), n.addClass("active");
        },
        prev: function() {
            var e = this.$menu.find(".active").removeClass("active"), t = e.prev();
            t.length || (t = this.$menu.find("li").last()), t.addClass("active");
        },
        listen: function() {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), 
            (e.browser.chrome || e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keydown, this)), 
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this));
        },
        move: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                  case 9:
                  case 13:
                  case 27:
                    e.preventDefault();
                    break;

                  case 38:
                    e.preventDefault(), this.prev();
                    break;

                  case 40:
                    e.preventDefault(), this.next();
                }
                e.stopPropagation();
            }
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = !~e.inArray(t.keyCode, [ 40, 38, 9, 13, 27 ]), this.move(t);
        },
        keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e);
        },
        keyup: function(e) {
            switch (e.keyCode) {
              case 40:
              case 38:
                break;

              case 9:
              case 13:
                if (!this.shown) return;
                this.select();
                break;

              case 27:
                if (!this.shown) return;
                this.hide();
                break;

              default:
                this.lookup();
            }
            e.stopPropagation(), e.preventDefault();
        },
        blur: function() {
            var e = this;
            setTimeout(function() {
                e.hide();
            }, 150);
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault(), this.select();
        },
        mouseenter: function(t) {
            this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active");
        }
    }, e.fn.typeahead = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("typeahead"), o = "object" == typeof n && n;
            r || i.data("typeahead", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e(function() {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
            var n = e(this);
            n.data("typeahead") || (t.preventDefault(), n.typeahead(n.data()));
        });
    });
}(window.jQuery), !function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)), 
        this.$element = e(t), this.checkPosition();
    };
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t, n = e(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, s = o.bottom, a = o.top, l = "affix affix-top affix-bottom";
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top()), "function" == typeof s && (s = o.bottom()), 
            t = null != this.unpin && i + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1, 
            this.affixed !== t && (this.affixed = t, this.unpin = "bottom" == t ? r.top - i : null, 
            this.$element.removeClass(l).addClass("affix" + (t ? "-" + t : "")));
        }
    }, e.fn.affix = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("affix"), o = "object" == typeof n && n;
            r || i.data("affix", r = new t(this, o)), "string" == typeof n && r[n]();
        });
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {
        offset: 0
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this), n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
            n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n);
        });
    });
}(window.jQuery), function(e, t, n) {
    function i(e, t) {
        var n = (e[0] || 0) - (t[0] || 0);
        return n > 0 || !n && e.length > 0 && i(e.slice(1), t.slice(1));
    }
    function r(e) {
        if (typeof e !== h) return e;
        var t = [], n = "";
        for (var i in e) n = typeof e[i] === h ? r(e[i]) : [ i, u ? encodeURI(e[i]) : e[i] ].join("="), 
        t.push(n);
        return t.join("&");
    }
    function o(e) {
        var t = [];
        for (var n in e) e[n] && t.push([ n, '="', e[n], '"' ].join(""));
        return t.join(" ");
    }
    function s(e) {
        var t = [];
        for (var n in e) t.push([ '<param name="', n, '" value="', r(e[n]), '" />' ].join(""));
        return t.join("");
    }
    function a(e) {
        var t = /string|number/.test(typeof e) ? ("" + e).split(".") : /object/.test(typeof e) ? [ e.major, e.minor ] : e || [ 0, 0 ];
        return i(g, t);
    }
    function l(t, n) {
        if (!n.swf || x || !m && !n.hasVersionFail) return !1;
        if (!a(n.hasVersion || 1)) {
            if (x = !0, typeof n.hasVersionFail === f && !n.hasVersionFail.apply(n)) return !1;
            n = {
                swf: n.expressInstall || b,
                height: 137,
                width: 214,
                flashvars: {
                    MMredirectURL: location.href,
                    MMplayerType: v ? "ActiveX" : "PlugIn",
                    MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
                }
            };
        }
        attrs = {
            id: "ui-flash-object" + e.guid++,
            width: n.width || 320,
            height: n.height || 180,
            style: n.style || ""
        }, d ? (attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", n.movie = n.swf) : (attrs.data = n.swf, 
        attrs.type = "application/x-shockwave-flash"), u = n.useEncode !== void 0 ? n.useEncode : y, 
        n.wmode = n.wmode || "opaque", delete n.hasVersion, delete n.hasVersionFail, delete n.height, 
        delete n.swf, delete n.useEncode, delete n.width;
        var i = [ "<object ", o(attrs), ">", s(n), "</object>" ].join("");
        if (d) {
            var r = document.createElement("div");
            t.html(r), r.outerHTML = i;
        } else t.html(i);
        return t.children().get(0);
    }
    var u, c, h = "object", f = "function", d = e.browser.msie;
    try {
        c = n.description || function() {
            return new n("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
        }();
    } catch (p) {
        c = "Unavailable";
    }
    var g = c.match(/\d+/g) || [ 0 ], m = g[0] > 0, v = n && !n.name;
    ({
        original: c,
        array: g,
        string: g.join("."),
        major: parseInt(g[0], 10) || 0,
        minor: parseInt(g[1], 10) || 0,
        release: parseInt(g[2], 10) || 0
    });
    var y = !0, b = "expressInstall.swf", x = !1;
    e.fn.flash = function(t) {
        function n() {
            a = !0, o.attr("id", "ui-flash" + e.guid);
        }
        function i(t) {
            var n = e.extend(!0, {
                flashvars: {
                    swfid: o.attr("id"),
                    eventHandler: "jQuery.fn.flash.triggerHandler"
                }
            }, t);
            return delete n.disabled, delete n.module, n;
        }
        function r(e) {
            o.attr("id") || n(), o.addClass("ui-flash"), s = l(o, i(e));
        }
        var o, s, a = !1;
        return this.getFlash = function() {
            return s;
        }, "object" == typeof t && (o = this, r.call(this, t)), this;
    }, e.fn.flash.triggerHandler = function(t) {
        e("#" + t.swfid).triggerHandler(t.type, t);
    };
}(jQuery, jQuery.util, navigator.plugins["Shockwave Flash"] || window.ActiveXObject);

var saveAs = saveAs || function(e) {
    "use strict";
    var t = e.document, n = function() {
        return e.URL || e.webkitURL || e;
    }, i = e.URL || e.webkitURL || e, r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download" in r, s = function(n) {
        var i = t.createEvent("MouseEvents");
        return i.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
        n.dispatchEvent(i);
    }, a = e.webkitRequestFileSystem, l = e.requestFileSystem || a || e.mozRequestFileSystem, u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
            throw t;
        }, 0);
    }, c = "application/octet-stream", h = 0, f = [], d = function() {
        for (var e = f.length; e--; ) {
            var t = f[e];
            "string" == typeof t ? i.revokeObjectURL(t) : t.remove();
        }
        f.length = 0;
    }, p = function(e, t, n) {
        t = [].concat(t);
        for (var i = t.length; i--; ) {
            var r = e["on" + t[i]];
            if ("function" == typeof r) try {
                r.call(e, n || e);
            } catch (o) {
                u(o);
            }
        }
    }, g = function(t, i) {
        var u, d, g, m = this, v = t.type, y = !1, b = function() {
            var e = n().createObjectURL(t);
            return f.push(e), e;
        }, x = function() {
            p(m, "writestart progress write writeend".split(" "));
        }, w = function() {
            (y || !u) && (u = b(t)), d.location.href = u, m.readyState = m.DONE, x();
        }, C = function(e) {
            return function() {
                return m.readyState !== m.DONE ? e.apply(this, arguments) : void 0;
            };
        }, k = {
            create: !0,
            exclusive: !1
        };
        return m.readyState = m.INIT, i || (i = "download"), o && (u = b(t), r.href = u, 
        r.download = i, s(r)) ? (m.readyState = m.DONE, x(), void 0) : (e.chrome && v && v !== c && (g = t.slice || t.webkitSlice, 
        t = g.call(t, 0, t.size, c), y = !0), a && "download" !== i && (i += ".download"), 
        d = v === c || a ? e : e.open(), l ? (h += t.size, l(e.TEMPORARY, h, C(function(e) {
            e.root.getDirectory("saved", k, C(function(e) {
                var n = function() {
                    e.getFile(i, k, C(function(e) {
                        e.createWriter(C(function(n) {
                            n.onwriteend = function(t) {
                                d.location.href = e.toURL(), f.push(e), m.readyState = m.DONE, p(m, "writeend", t);
                            }, n.onerror = function() {
                                var e = n.error;
                                e.code !== e.ABORT_ERR && w();
                            }, "writestart progress write abort".split(" ").forEach(function(e) {
                                n["on" + e] = m["on" + e];
                            }), n.write(t), m.abort = function() {
                                n.abort(), m.readyState = m.DONE;
                            }, m.readyState = m.WRITING;
                        }), w);
                    }), w);
                };
                e.getFile(i, {
                    create: !1
                }, C(function(e) {
                    e.remove(), n();
                }), C(function(e) {
                    e.code === e.NOT_FOUND_ERR ? n() : w();
                }));
            }), w);
        }), w), void 0) : (w(), void 0));
    }, m = g.prototype, v = function(e, t) {
        return new g(e, t);
    };
    return m.abort = function() {
        var e = this;
        e.readyState = e.DONE, p(e, "abort");
    }, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, 
    e.addEventListener("unload", d, !1), v;
}(self);

window.log = function() {
    location.search.indexOf("debug=true") > -1 && console.log.apply(console, arguments);
};

var AppModel = Backbone.Collection.extend({}), AppView = Backbone.View.extend({
    initialize: function() {
        this.flash = this.$el.find("#flash-container"), this.config_container = this.$el.find("#config-container"), 
        this.views = [], this.render();
    },
    remove: function() {
        return _.each(this.views, function(e) {
            e.remove();
        }), this.dispose(), this.flash.remove(), this.config_container.children().remove(), 
        this.chart.off(".flash"), this.chart = null, $(document).off("redrawFlash"), this.dispose(), 
        this;
    },
    render: function() {
        return this.config_container.append($(this.options.templateId).html()).hide(), this.startFlash(), 
        this.model.on("change", this.modelChange, this), _.bindAll(this, [ "renderModelAndView" ]), 
        $(document).one("dataReady", this.renderModelAndView), this;
    },
    startFlash: function() {
        this.flash.fadeIn();
        var e = this, t = {
            pie: "swf/beechart-pie.swf",
            line: "swf/beechart-line.swf",
            bar: "swf/beechart-bar.swf",
            timeline: "swf/beechart-timeline.swf"
        }, n = {
            pie: "swf/data/site-reffers.xml",
            line: "swf/data/2-serials.xml",
            bar: "swf/data/mon-av-temp.xml",
            timeline: "swf/data/small_data.json"
        };
        this.options.type && this.flash && (e.chart = this.flash.flash({
            swf: t[this.options.type],
            width: 750,
            height: 450,
            allowScriptAccess: "always",
            flashvars: {
                dataUrl: n[this.options.type],
                debug: !0
            }
        }), e.chart.on("swfReady.flash", function() {
            log("chartStyle", e.chart.getFlash()._returnChartCSS()), StyleCenter.getInstance().setStyleSheet(new StyleSheet(e.chart.getFlash()._returnChartCSS()));
        })), e.chart && $(document).on("redrawFlash", function(t, n) {
            log("redrawFlash", n), e.chart.getFlash().parseCSS(n, !0);
        });
    },
    renderModelAndView: function() {
        var e = this, t = {
            pie: function() {
                var t = new GeneralView({
                    model: e.model
                });
                e.views.push(t);
                var n = new PieView({
                    model: e.model
                });
                e.views.push(n);
            },
            line: function() {
                var t = new GeneralView({
                    model: e.model
                });
                e.views.push(t);
                var n = new PieView({
                    model: e.model
                });
                e.views.push(n);
            },
            bar: function() {
                var t = new GeneralView({
                    model: e.model
                });
                e.views.push(t);
                var n = new BarView({
                    model: e.model
                });
                e.views.push(n);
            }
        };
        try {
            t[e.options.type](), this.config_container.fadeIn();
        } catch (n) {
            alert(n);
        }
    },
    modelChange: function(e) {
        var t = e.changedAttributes();
        log("model change:", e.styleName, t);
        var n = this;
        StyleCenter.getInstance().setStyle(e.styleName, t), t.animate && (n.chart.getFlash()._setState("setState"), 
        n.chart.getFlash()._setState("normal"));
    }
}), BarView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(e) {
            e.remove();
        }), BarView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {}
}), BaseModel = Backbone.Model.extend({}), BaseView = Backbone.View.extend({
    initialize: function() {
        var e = this.options.modelClz;
        e && (this.model = new e(this.options.modelAttributes || {})), this.options.styleName && (this.model.styleName = this.options.styleName), 
        e = null, this.defaultSetting(), this.setDefaultValue(), this.defaultAction();
    },
    defaultSetting: function() {},
    setDefaultValue: function() {
        var e = this;
        log(this.model.styleName, this.model.attributes), _.each(this.model.attributes, function(t, n) {
            var i, r, o, s = $(".containe[data-key='" + n + "'] input", e.$el);
            s.length && (i = s.attr("type"), o = e.model.get(n), "number" == i && s.val(o), 
            "radio" == i && _.each(s, function(e) {
                r = $(e), r.val() == o && r.prop("checked", !0), r = null;
            }), "range" == i && (s.val(o), s.next().text(o)), "color" == i && s.val(o), s.hasClass("color-input") && s.val(o), 
            s = null);
        });
    },
    defaultAction: function() {},
    events: {
        "click input[type='radio']": "clickRadioHandler",
        "keyup input[type='number']": "changeNumberHandler",
        "change input[type='number']": "changeNumberHandler",
        "change input[type='range']": "changeNumberHandler",
        "change input[type='color']": "colorTypeInputValueChangeHanlder",
        "keyup input.color-input": "colorInputValueChangeHanlder"
    },
    colorTypeInputValueChangeHanlder: function(e) {
        var t = $(e.target), n = t.next();
        n.val(t.val()), this.valueChangeHanlder(e);
    },
    colorInputValueChangeHanlder: function(e) {
        var t = $(e.target), n = t.prev();
        n.val(t.val()), this.valueChangeHanlder(e);
    },
    clickRadioHandler: function(e) {
        this.valueChangeHanlder(e);
    },
    changeNumberHandler: function(e) {
        var t = $(e.target);
        t.is("input[type='range']") && t.next().text(t.val()), this.valueChangeHanlder(e);
    },
    valueChangeHanlder: function(e) {
        var t = $(e.target), n = t.closest(".containe"), i = n.data("key"), r = t.val();
        this.model.set(i, r);
    },
    switchInputEnable: function(e, t) {
        var n = $("input", e);
        t ? n.attr("disabled", !0) : n.attr("disabled", !1);
    }
}), CommonModel = BaseModel.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
}), CommonView = BaseView.extend({
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='leftAxisVisibility-group']": "leftAxisVisibilityGroupClickHandler"
        });
    },
    leftAxisVisibilityGroupClickHandler: function(e) {
        var t = $(e.target), n = $("#for-yAxis-visible"), i = !0;
        "invisible" == t.val() && (i = !1), this.switchInputEnable(n, i);
    }
}), GeneralView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(e) {
            e.remove();
        }), GeneralView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {
        var e = new CommonView({
            modelClz: CommonModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#common-set")
        });
        this.views.push(e), this.model.push(e.model);
        var t = new LegendView({
            modelClz: LegendModel,
            modelAttributes: StyleCenter.getInstance().getStyle("legend"),
            el: $("#legend-set")
        });
        this.views.push(t), this.model.push(t.model);
        var n = new TooltipView({
            modelClz: TooltipModel,
            modelAttributes: StyleCenter.getInstance().getStyle("tooltip"),
            el: $("#tooltip-set")
        });
        this.views.push(n), this.model.push(n.model);
        var i = new XAxisView({
            modelClz: XAxisModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis"),
            el: $("#xAxis-set")
        });
        this.views.push(i), this.model.push(i.model);
        var r = new XAxisLabelView({
            modelClz: XAxisLabelModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis label"),
            el: $("#xAxis-label-set")
        });
        this.views.push(r), this.model.push(r.model);
        var o = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("yaxis"),
            styleName: "yaxis",
            el: $("#yAxis-set")
        });
        this.views.push(o), this.model.push(o.model);
        var s = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("yaxis label"),
            styleName: "yaxis label",
            el: $("#yAxis-label-set")
        });
        this.views.push(s), this.model.push(s.model);
        var a = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("canvas"),
            styleName: "canvas",
            el: $("#canvas-set")
        });
        this.views.push(a), this.model.push(a.model);
    }
}), LegendModel = BaseModel.extend({
    styleName: "legend",
    defaults: function() {
        return {};
    }
}), LegendView = BaseView.extend({}), TooltipModel = BaseModel.extend({
    styleName: "tooltip",
    defaults: function() {
        return {};
    }
}), TooltipView = BaseView.extend({
    defaultAction: function() {
        var e = $("input[type='radio'][name='backgroundType-group']:checked", this.$el);
        this.switchForSimpleEnable(e);
    },
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='backgroundType-group']": "backgroundTypeGroupClickHandler"
        });
    },
    backgroundTypeGroupClickHandler: function(e) {
        var t = $(e.target);
        this.switchForSimpleEnable(t);
    },
    switchForSimpleEnable: function(e) {
        var t = this.$el.find("#for-backgroundType-simple"), n = !0;
        "simple" == e.val() && (n = !1), this.switchInputEnable(t, n);
    }
}), XAxisLabelModel = BaseModel.extend({
    styleName: "xaxis label",
    defaults: function() {
        return {};
    }
}), XAxisLabelView = BaseView.extend({}), XAxisModel = BaseModel.extend({
    styleName: "xaxis",
    defaults: function() {
        return {};
    }
}), XAxisView = BaseView.extend({});

jQuery(function(e) {
    try {
        var t = {
            init: function() {
                this.btnEvent(), this.chartTypeSwitchModel();
            },
            btnEvent: function() {
                e("#switch").click(function(e) {
                    e.preventDefault();
                }), e("#download").click(function(e) {
                    e.preventDefault(), get_blob_builder = function() {
                        return window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                    };
                    var t = get_blob_builder(), n = new t();
                    n.append(StyleCenter.getInstance().returnCSSText()), saveAs(n.getBlob("text/plain;charset=utf-8"), "chart.css");
                });
            },
            chartTypeSwitchModel: function() {
                function t() {
                    if (i) {
                        var t = i.data("charttype");
                        if (o == t) return s.modal("hide"), void 0;
                        n(), o = t, r && r.remove(), r = new AppView({
                            el: e("body"),
                            model: new AppModel(),
                            type: t,
                            templateId: "#" + t + "-config"
                        }), s.modal("hide");
                    }
                }
                function n() {
                    e(".flash-container").append("<div id='flash-container' class='well hide ui-flash'>");
                }
                var i, r, o, s = e("#chart-type-switch-modal");
                s.modal();
                var a = e(".chart-types button", s);
                e(".confirm.btn", s);
                var l = e(".modal-backdrop");
                l.click(function(e) {
                    a.hasClass("active") || e.preventDefault();
                }), e(document).on("click", ".chart-types button", function() {
                    i = e(this), a.removeClass("active"), i.addClass("active"), t();
                });
            }
        };
        t.init();
    } catch (n) {
        console.log(n);
    }
});

var LineView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(e) {
            e.remove();
        }), LineView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {}
}), PieChartSetModel = BaseModel.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
}), PieChartSetView = BaseView.extend({}), PieSliceSetModel = BaseModel.extend({
    styleName: "slice",
    defaults: function() {
        return {};
    }
}), PieSliceSetView = BaseView.extend({}), PieView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(e) {
            e.remove();
        }), PieView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {
        var e = new PieChartSetView({
            modelClz: PieChartSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#pie-chart-set")
        });
        this.views.push(e), this.model.push(e.model);
        var t = new PieSliceSetView({
            modelClz: PieSliceSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("slice"),
            el: $("#pie-slice-set")
        });
        this.views.push(t), this.model.push(t.model);
    }
}), StyleCenter = function() {
    function e() {
        return {
            setStyleSheet: function(e) {
                this.styleSheet = e, $(document).triggerHandler("dataReady");
            },
            setStyle: function(e, t) {
                var n = (e + JSON.stringify(t) + "").replace(/\"/g, ""), i = this.styleSheet.getStyle(e);
                i && (i = _.extend(i, t), this.styleSheet.setStyle(e, i)), log("setStyle", n, i), 
                i = null, $(document).triggerHandler("redrawFlash", [ n ]);
            },
            getStyle: function(e) {
                return this.styleSheet.getStyle(e);
            },
            returnCSSText: function() {
                return this.styleSheet.returnCSSText();
            }
        };
    }
    var t;
    return {
        getInstance: function() {
            return t || (t = new e()), t;
        }
    };
}(), StyleSheet = function(e) {
    this._style = {}, e && this.parseCSS(e);
};

StyleSheet.prototype = {
    parseCSS: function(e) {
        var t = /([\w\s]+)\s*{([^}]*\s*[^}]*)}/gm, n = /([\w.]+)\s*:\s*([^;\n]+)/g, i = e;
        if (i) {
            i = i.replace(/\/\*.*\*\//gm, ""), i = _.string.strip(i);
            for (var r, o, s, a, l; r = t.exec(i); ) {
                for (o = _.string.strip(r[1]), s = _.string.strip(r[2]), l = {}; r = n.exec(s); ) a = _.string.strip(r[2]), 
                l[r[1]] = a;
                this.setStyle(o, l);
            }
        }
    },
    setStyle: function(e, t) {
        this._style[e] = t;
    },
    getStyle: function(e) {
        return this._style[e];
    },
    returnCSSText: function() {
        var e, t = [], n = _.keys(this._style), i = this;
        return _.each(n, function(n) {
            obj = i.getStyle(n), e = [], e.push(n.concat("{")), _.each(obj, function(t, n) {
                e.push([ "	", n, ": ", t, ";" ].join(""));
            }), e.push("}"), t.push(e.join("\n"));
        }), t.join("\n");
    }
};
//@ sourceMappingURL=dist/merge.map