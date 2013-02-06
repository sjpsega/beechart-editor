(function(t, e) {
    "use strict";
    function n(t) {
        var e = ve[t] = {};
        return te.each(t.split(ie), function(t, n) {
            e[n] = !0;
        }), e;
    }
    function i(t, n, i, r) {
        if (te.acceptData(t)) {
            var o, s, a = te.expando, l = "string" == typeof n, u = t.nodeType, c = u ? te.cache : t, h = u ? t[a] : t[a] && a;
            if (h && c[h] && (r || c[h].data) || !l || i !== e) return h || (u ? t[a] = h = re.pop() || te.guid++ : h = a), 
            c[h] || (c[h] = {}, u || (c[h].toJSON = te.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[h] = te.extend(c[h], n) : c[h].data = te.extend(c[h].data, n)), 
            o = c[h], r || (o.data || (o.data = {}), o = o.data), i !== e && (o[te.camelCase(n)] = i), 
            l ? (s = o[n], null == s && (s = o[te.camelCase(n)])) : s = o, s;
        }
    }
    function r(t, e, n) {
        if (te.acceptData(t)) {
            var i, r, o, a = t.nodeType, l = a ? te.cache : t, u = a ? t[te.expando] : te.expando;
            if (l[u]) {
                if (e && (i = n ? l[u] : l[u].data)) {
                    te.isArray(e) || (e in i ? e = [ e ] : (e = te.camelCase(e), e = e in i ? [ e ] : e.split(" ")));
                    for (r = 0, o = e.length; o > r; r++) delete i[e[r]];
                    if (!(n ? s : te.isEmptyObject)(i)) return;
                }
                (n || (delete l[u].data, s(l[u]))) && (a ? te.cleanData([ t ], !0) : te.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null);
            }
        }
    }
    function o(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var r = "data-" + n.replace(be, "-$1").toLowerCase();
            if (i = t.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ye.test(i) ? te.parseJSON(i) : i;
                } catch (o) {}
                te.data(t, n, i);
            } else i = e;
        }
        return i;
    }
    function s(t) {
        var e;
        for (e in t) if (("data" !== e || !te.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function a() {
        return !1;
    }
    function l() {
        return !0;
    }
    function u(t) {
        return !t || !t.parentNode || 11 === t.parentNode.nodeType;
    }
    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t;
    }
    function h(t, e, n) {
        if (e = e || 0, te.isFunction(e)) return te.grep(t, function(t, i) {
            var r = !!e.call(t, i, t);
            return r === n;
        });
        if (e.nodeType) return te.grep(t, function(t) {
            return t === e === n;
        });
        if ("string" == typeof e) {
            var i = te.grep(t, function(t) {
                return 1 === t.nodeType;
            });
            if (Oe.test(e)) return te.filter(e, i, !n);
            e = te.filter(e, i);
        }
        return te.grep(t, function(t) {
            return te.inArray(t, e) >= 0 === n;
        });
    }
    function f(t) {
        var e = Pe.split("|"), n = t.createDocumentFragment();
        if (n.createElement) for (;e.length; ) n.createElement(e.pop());
        return n;
    }
    function d(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e));
    }
    function p(t, e) {
        if (1 === e.nodeType && te.hasData(t)) {
            var n, i, r, o = te._data(t), s = te._data(e, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a) for (i = 0, r = a[n].length; r > i; i++) te.event.add(e, n, a[n][i]);
            }
            s.data && (s.data = te.extend({}, s.data));
        }
    }
    function g(t, e) {
        var n;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), 
        n = e.nodeName.toLowerCase(), "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), 
        te.support.html5Clone && t.innerHTML && !te.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Je.test(t.type) ? (e.defaultChecked = e.checked = t.checked, 
        e.value !== t.value && (e.value = t.value)) : "option" === n ? e.selected = t.defaultSelected : "input" === n || "textarea" === n ? e.defaultValue = t.defaultValue : "script" === n && e.text !== t.text && (e.text = t.text), 
        e.removeAttribute(te.expando));
    }
    function m(t) {
        return t.getElementsByTagName !== e ? t.getElementsByTagName("*") : t.querySelectorAll !== e ? t.querySelectorAll("*") : [];
    }
    function v(t) {
        Je.test(t.type) && (t.defaultChecked = t.checked);
    }
    function y(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = xn.length; r--; ) if (e = xn[r] + n, 
        e in t) return e;
        return i;
    }
    function b(t, e) {
        return t = e || t, "none" === te.css(t, "display") || !te.contains(t.ownerDocument, t);
    }
    function x(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; s > o; o++) n = t[o], n.style && (r[o] = te._data(n, "olddisplay"), 
        e ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && b(n) && (r[o] = te._data(n, "olddisplay", T(n.nodeName)))) : (i = on(n, "display"), 
        r[o] || "none" === i || te._data(n, "olddisplay", i)));
        for (o = 0; s > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
        return t;
    }
    function w(t, e, n) {
        var i = dn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function C(t, e, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += te.css(t, n + bn[r], !0)), 
        i ? ("content" === n && (o -= parseFloat(on(t, "padding" + bn[r])) || 0), "margin" !== n && (o -= parseFloat(on(t, "border" + bn[r] + "Width")) || 0)) : (o += parseFloat(on(t, "padding" + bn[r])) || 0, 
        "padding" !== n && (o += parseFloat(on(t, "border" + bn[r] + "Width")) || 0));
        return o;
    }
    function k(t, e, n) {
        var i = "width" === e ? t.offsetWidth : t.offsetHeight, r = !0, o = te.support.boxSizing && "border-box" === te.css(t, "boxSizing");
        if (0 >= i || null == i) {
            if (i = on(t, e), (0 > i || null == i) && (i = t.style[e]), pn.test(i)) return i;
            r = o && (te.support.boxSizingReliable || i === t.style[e]), i = parseFloat(i) || 0;
        }
        return i + C(t, e, n || (o ? "border" : "content"), r) + "px";
    }
    function T(t) {
        if (mn[t]) return mn[t];
        var e = te("<" + t + ">").appendTo(z.body), n = e.css("display");
        return e.remove(), ("none" === n || "" === n) && (sn = z.body.appendChild(sn || te.extend(z.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), an && sn.createElement || (an = (sn.contentWindow || sn.contentDocument).document, 
        an.write("<!doctype html><html><body>"), an.close()), e = an.body.appendChild(an.createElement(t)), 
        n = on(e, "display"), z.body.removeChild(sn)), mn[t] = n, n;
    }
    function S(t, e, n, i) {
        var r;
        if (te.isArray(e)) te.each(e, function(e, r) {
            n || Cn.test(t) ? i(t, r) : S(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i);
        }); else if (n || "object" !== te.type(e)) i(t, e); else for (r in e) S(t + "[" + r + "]", e[r], n, i);
    }
    function E(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r, o, s = e.toLowerCase().split(ie), a = 0, l = s.length;
            if (te.isFunction(n)) for (;l > a; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), 
            r = t[i] = t[i] || [], r[o ? "unshift" : "push"](n);
        };
    }
    function _(t, n, i, r) {
        function o(l) {
            var u;
            return s[l] = !0, te.each(t[l] || [], function(t, l) {
                var c = l(n, i, r);
                return "string" != typeof c || a || s[c] ? a ? !(u = c) : e : (n.dataTypes.unshift(c), 
                o(c), !1);
            }), u;
        }
        var s = {}, a = t === Pn;
        return o(n.dataTypes[0]) || !s["*"] && o("*");
    }
    function N(t, n) {
        var i, r, o = te.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== e && ((o[i] ? t : r || (r = {}))[i] = n[i]);
        r && te.extend(!0, t, r);
    }
    function $(t, n, i) {
        var r, o, s, a, l = t.contents, u = t.dataTypes, c = t.responseFields;
        for (o in c) o in i && (n[c[o]] = i[o]);
        for (;"*" === u[0]; ) u.shift(), r === e && (r = t.mimeType || n.getResponseHeader("content-type"));
        if (r) for (o in l) if (l[o] && l[o].test(r)) {
            u.unshift(o);
            break;
        }
        if (u[0] in i) s = u[0]; else {
            for (o in i) {
                if (!u[0] || t.converters[o + " " + u[0]]) {
                    s = o;
                    break;
                }
                a || (a = o);
            }
            s = s || a;
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : e;
    }
    function j(t, e) {
        var n, i, r, o, s = t.dataTypes.slice(), a = s[0], l = {}, u = 0;
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), s[1]) for (n in t.converters) l[n.toLowerCase()] = t.converters[n];
        for (;r = s[++u]; ) if ("*" !== r) {
            if ("*" !== a && a !== r) {
                if (n = l[a + " " + r] || l["* " + r], !n) for (i in l) if (o = i.split(" "), o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) {
                    n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], s.splice(u--, 0, r));
                    break;
                }
                if (n !== !0) if (n && t["throws"]) e = n(e); else try {
                    e = n(e);
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
            data: e
        };
    }
    function A() {
        try {
            return new t.XMLHttpRequest();
        } catch (e) {}
    }
    function D() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function M() {
        return setTimeout(function() {
            Jn = e;
        }, 0), Jn = te.now();
    }
    function L(t, e) {
        te.each(e, function(e, n) {
            for (var i = (ni[e] || []).concat(ni["*"]), r = 0, o = i.length; o > r; r++) if (i[r].call(t, e, n)) return;
        });
    }
    function H(t, e, n) {
        var i, r = 0, o = ei.length, s = te.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            for (var e = Jn || M(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(i);
            return s.notifyWith(t, [ l, i, n ]), 1 > i && o ? n : (s.resolveWith(t, [ l ]), 
            !1);
        }, l = s.promise({
            elem: t,
            props: te.extend({}, e),
            opts: te.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Jn || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = te.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i), i;
            },
            stop: function(e) {
                for (var n = 0, i = e ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                return e ? s.resolveWith(t, [ l, e ]) : s.rejectWith(t, [ l, e ]), this;
            }
        }), u = l.props;
        for (F(u, l.opts.specialEasing); o > r; r++) if (i = ei[r].call(l, t, u, l.opts)) return i;
        return L(l, u), te.isFunction(l.opts.start) && l.opts.start.call(t, l), te.fx.timer(te.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: t
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function F(t, e) {
        var n, i, r, o, s;
        for (n in t) if (i = te.camelCase(n), r = e[i], o = t[n], te.isArray(o) && (r = o[1], 
        o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = te.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete t[i];
            for (n in o) n in t || (t[n] = o[n], e[n] = r);
        } else e[i] = r;
    }
    function O(t, e, n) {
        var i, r, o, s, a, l, u, c, h = this, f = t.style, d = {}, p = [], g = t.nodeType && b(t);
        n.queue || (u = te._queueHooks(t, "fx"), null == u.unqueued && (u.unqueued = 0, 
        c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c();
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, te.queue(t, "fx").length || u.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === te.css(t, "display") && "none" === te.css(t, "float") && (te.support.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", te.support.shrinkWrapBlocks || h.done(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (i in e) if (o = e[i], Kn.exec(o)) {
            if (delete e[i], o === (g ? "hide" : "show")) continue;
            p.push(i);
        }
        if (s = p.length) for (a = te._data(t, "fxshow") || te._data(t, "fxshow", {}), g ? te(t).show() : h.done(function() {
            te(t).hide();
        }), h.done(function() {
            var e;
            te._removeData(t, "fxshow");
            for (e in d) te.style(t, e, d[e]);
        }), i = 0; s > i; i++) r = p[i], l = h.createTween(r, g ? a[r] : 0), d[r] = a[r] || te.style(t, r), 
        r in a || (a[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0));
    }
    function B(t, e, n, i, r) {
        return new B.prototype.init(t, e, n, i, r);
    }
    function R(t, e) {
        var n, i = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = bn[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i;
    }
    function P(t) {
        return te.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1;
    }
    var I, q, z = t.document, W = t.location, V = t.navigator, U = t.jQuery, X = t.$, Q = Array.prototype.push, G = Array.prototype.slice, J = Array.prototype.indexOf, Y = Object.prototype.toString, K = Object.prototype.hasOwnProperty, Z = String.prototype.trim, te = function(t, e) {
        return new te.fn.init(t, e, I);
    }, ee = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ne = /\S/, ie = /\s+/, re = [], oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, le = /^[\],:{}\s]*$/, ue = /(?:^|:|,)(?:\s*\[)+/g, ce = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, he = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, fe = /^-ms-/, de = /-([\da-z])/gi, pe = function(t, e) {
        return (e + "").toUpperCase();
    }, ge = function() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", ge, !1), te.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", ge), 
        te.ready());
    }, me = {};
    te.fn = te.prototype = {
        constructor: te,
        init: function(t, n, i) {
            var r, o, s;
            if (!t) return this;
            if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
            if ("string" == typeof t) {
                if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : se.exec(t), 
                !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (r[1]) return n = n instanceof te ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : z, 
                t = te.parseHTML(r[1], s, !0), ae.test(r[1]) && te.isPlainObject(n) && this.attr.call(t, n, !0), 
                te.merge(this, t);
                if (o = z.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(t);
                    this.length = 1, this[0] = o;
                }
                return this.context = z, this.selector = t, this;
            }
            return te.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, 
            this.context = t.context), te.makeArray(t, this));
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
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t];
        },
        pushStack: function(t, e, n) {
            var i = te.merge(this.constructor(), t);
            return i.prevObject = this, i.context = this.context, "find" === e ? i.selector = this.selector + (this.selector ? " " : "") + n : e && (i.selector = this.selector + "." + e + "(" + n + ")"), 
            i;
        },
        each: function(t, e) {
            return te.each(this, t, e);
        },
        ready: function(t) {
            return te.ready.promise().done(t), this;
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
        eq: function(t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [ this[n] ] : []);
        },
        map: function(t) {
            return this.pushStack(te.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Q,
        sort: [].sort,
        splice: [].splice
    }, te.fn.init.prototype = te.fn, te.extend = te.fn.extend = function() {
        var t, n, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || te.isFunction(a) || (a = {}), 
        u === l && (a = this, --l); u > l; l++) if (null != (t = arguments[l])) for (n in t) i = a[n], 
        r = t[n], a !== r && (c && r && (te.isPlainObject(r) || (o = te.isArray(r))) ? (o ? (o = !1, 
        s = i && te.isArray(i) ? i : []) : s = i && te.isPlainObject(i) ? i : {}, a[n] = te.extend(c, s, r)) : r !== e && (a[n] = r));
        return a;
    }, te.extend({
        noConflict: function(e) {
            return t.$ === te && (t.$ = X), e && t.jQuery === te && (t.jQuery = U), te;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? te.readyWait++ : te.ready(!0);
        },
        ready: function(t) {
            if (t === !0 ? !--te.readyWait : !te.isReady) {
                if (!z.body) return setTimeout(te.ready, 1);
                te.isReady = !0, t !== !0 && --te.readyWait > 0 || (q.resolveWith(z, [ te ]), te.fn.trigger && te(z).trigger("ready").off("ready"));
            }
        },
        isFunction: function(t) {
            return "function" === te.type(t);
        },
        isArray: Array.isArray || function(t) {
            return "array" === te.type(t);
        },
        isWindow: function(t) {
            return null != t && t == t.window;
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        },
        type: function(t) {
            return null == t ? t + "" : me[Y.call(t)] || "object";
        },
        isPlainObject: function(t) {
            if (!t || "object" !== te.type(t) || t.nodeType || te.isWindow(t)) return !1;
            try {
                if (t.constructor && !K.call(t, "constructor") && !K.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var i;
            for (i in t) ;
            return i === e || K.call(t, i);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        error: function(t) {
            throw Error(t);
        },
        parseHTML: function(t, e, n) {
            var i;
            return t && "string" == typeof t ? ("boolean" == typeof e && (n = e, e = 0), e = e || z, 
            (i = ae.exec(t)) ? [ e.createElement(i[1]) ] : (i = te.buildFragment([ t ], e, n ? null : []), 
            te.merge([], (i.cacheable ? te.clone(i.fragment) : i.fragment).childNodes))) : null;
        },
        parseJSON: function(n) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = te.trim(n), 
            n && le.test(n.replace(ce, "@").replace(he, "]").replace(ue, ""))) ? Function("return " + n)() : (te.error("Invalid JSON: " + n), 
            e);
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (r = new DOMParser(), i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), 
                i.async = "false", i.loadXML(n));
            } catch (o) {
                i = e;
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || te.error("Invalid XML: " + n), 
            i;
        },
        noop: function() {},
        globalEval: function(e) {
            e && ne.test(e) && (t.execScript || function(e) {
                t.eval.call(t, e);
            })(e);
        },
        camelCase: function(t) {
            return t.replace(fe, "ms-").replace(de, pe);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, n, i) {
            var r, o = 0, s = t.length, a = s === e || te.isFunction(t);
            if (i) if (a) {
                for (r in t) if (n.apply(t[r], i) === !1) break;
            } else for (;s > o && n.apply(t[o++], i) !== !1; ) ; else if (a) {
                for (r in t) if (n.call(t[r], r, t[r]) === !1) break;
            } else for (;s > o && n.call(t[o], o, t[o++]) !== !1; ) ;
            return t;
        },
        trim: Z && !Z.call("﻿ ") ? function(t) {
            return null == t ? "" : Z.call(t);
        } : function(t) {
            return null == t ? "" : (t + "").replace(oe, "");
        },
        makeArray: function(t, e) {
            var n, i = e || [];
            return null != t && (n = te.type(t), null == t.length || "string" === n || "function" === n || "regexp" === n || te.isWindow(t) ? Q.call(i, t) : te.merge(i, t)), 
            i;
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (J) return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n;
            }
            return -1;
        },
        merge: function(t, n) {
            var i = n.length, r = t.length, o = 0;
            if ("number" == typeof i) for (;i > o; o++) t[r++] = n[o]; else for (;n[o] !== e; ) t[r++] = n[o++];
            return t.length = r, t;
        },
        grep: function(t, e, n) {
            var i, r = [], o = 0, s = t.length;
            for (n = !!n; s > o; o++) i = !!e(t[o], o), n !== i && r.push(t[o]);
            return r;
        },
        map: function(t, n, i) {
            var r, o, s = [], a = 0, l = t.length, u = t instanceof te || l !== e && "number" == typeof l && (l > 0 && t[0] && t[l - 1] || 0 === l || te.isArray(t));
            if (u) for (;l > a; a++) r = n(t[a], a, i), null != r && (s[s.length] = r); else for (o in t) r = n(t[o], o, i), 
            null != r && (s[s.length] = r);
            return s.concat.apply([], s);
        },
        guid: 1,
        proxy: function(t, n) {
            var i, r, o;
            return "string" == typeof n && (i = t[n], n = t, t = i), te.isFunction(t) ? (r = G.call(arguments, 2), 
            o = function() {
                return t.apply(n || this, r.concat(G.call(arguments)));
            }, o.guid = t.guid = t.guid || te.guid++, o) : e;
        },
        access: function(t, n, i, r, o, s, a) {
            var l, u = null == i, c = 0, h = t.length;
            if (i && "object" == typeof i) {
                for (c in i) te.access(t, n, c, i[c], 1, s, r);
                o = 1;
            } else if (r !== e) {
                if (l = a === e && te.isFunction(r), u && (l ? (l = n, n = function(t, e, n) {
                    return l.call(te(t), n);
                }) : (n.call(t, r), n = null)), n) for (;h > c; c++) n(t[c], i, l ? r.call(t[c], c, n(t[c], i)) : r, a);
                o = 1;
            }
            return o ? t : u ? n.call(t) : h ? n(t[0], i) : s;
        },
        now: function() {
            return new Date().getTime();
        }
    }), te.ready.promise = function(e) {
        if (!q) if (q = te.Deferred(), "complete" === z.readyState) setTimeout(te.ready, 1); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", ge, !1), 
        t.addEventListener("load", te.ready, !1); else {
            z.attachEvent("onreadystatechange", ge), t.attachEvent("onload", te.ready);
            var n = !1;
            try {
                n = null == t.frameElement && z.documentElement;
            } catch (i) {}
            n && n.doScroll && function r() {
                if (!te.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (t) {
                        return setTimeout(r, 50);
                    }
                    te.ready();
                }
            }();
        }
        return q.promise(e);
    }, te.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
        me["[object " + e + "]"] = e.toLowerCase();
    }), I = te(z);
    var ve = {};
    te.Callbacks = function(t) {
        t = "string" == typeof t ? ve[t] || n(t) : te.extend({}, t);
        var i, r, o, s, a, l, u = [], c = !t.once && [], h = function(e) {
            for (i = t.memory && e, r = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++) if (u[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break;
            }
            o = !1, u && (c ? c.length && h(c.shift()) : i ? u = [] : f.disable());
        }, f = {
            add: function() {
                if (u) {
                    var e = u.length;
                    (function n(e) {
                        te.each(e, function(e, i) {
                            var r = te.type(i);
                            "function" === r ? t.unique && f.has(i) || u.push(i) : i && i.length && "string" !== r && n(i);
                        });
                    })(arguments), o ? a = u.length : i && (s = e, h(i));
                }
                return this;
            },
            remove: function() {
                return u && te.each(arguments, function(t, e) {
                    for (var n; (n = te.inArray(e, u, n)) > -1; ) u.splice(n, 1), o && (a >= n && a--, 
                    l >= n && l--);
                }), this;
            },
            has: function(t) {
                return te.inArray(t, u) > -1;
            },
            empty: function() {
                return u = [], this;
            },
            disable: function() {
                return u = c = i = e, this;
            },
            disabled: function() {
                return !u;
            },
            lock: function() {
                return c = e, i || f.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(t, e) {
                return e = e || [], e = [ t, e.slice ? e.slice() : e ], !u || r && !c || (o ? c.push(e) : h(e)), 
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
    }, te.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", te.Callbacks("once memory"), "resolved" ], [ "reject", "fail", te.Callbacks("once memory"), "rejected" ], [ "notify", "progress", te.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return te.Deferred(function(n) {
                        te.each(e, function(e, i) {
                            var o = i[0], s = t[e];
                            r[i[1]](te.isFunction(s) ? function() {
                                var t = s.apply(this, arguments);
                                t && te.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [ t ]);
                            } : n[o]);
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? te.extend(t, i) : i;
                }
            }, r = {};
            return i.pipe = i.then, te.each(e, function(t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = s.fire, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), t && t.call(r, r), r;
        },
        when: function(t) {
            var e, n, i, r = 0, o = G.call(arguments), s = o.length, a = 1 !== s || t && te.isFunction(t.promise) ? s : 0, l = 1 === a ? t : te.Deferred(), u = function(t, n, i) {
                return function(r) {
                    n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                };
            };
            if (s > 1) for (e = Array(s), n = Array(s), i = Array(s); s > r; r++) o[r] && te.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise();
        }
    }), te.support = function() {
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
        return te(function() {
            var i, r, o, s, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = z.getElementsByTagName("body")[0];
            l && (i = z.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", 
            l.insertBefore(i, l.firstChild), r = z.createElement("div"), i.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            o = r.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            h = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", 
            n.reliableHiddenOffsets = h && 0 === o[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            n.boxSizing = 4 === r.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, 
            t.getComputedStyle && (n.pixelPosition = "1%" !== (t.getComputedStyle(r, null) || {}).top, 
            n.boxSizingReliable = "4px" === (t.getComputedStyle(r, null) || {
                width: "4px"
            }).width, s = z.createElement("div"), s.style.cssText = r.style.cssText = a, s.style.marginRight = s.style.width = "0", 
            r.style.width = "1px", r.appendChild(s), n.reliableMarginRight = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), 
            r.style.zoom !== e && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", 
            n.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", 
            r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== r.offsetWidth, 
            i.style.zoom = 1), l.removeChild(i), i = r = o = s = null);
        }), l.removeChild(d), i = r = o = s = a = l = d = null, n;
    }();
    var ye = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, be = /([A-Z])/g;
    te.extend({
        cache: {},
        expando: "jQuery" + (te.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return t = t.nodeType ? te.cache[t[te.expando]] : t[te.expando], !!t && !s(t);
        },
        data: function(t, e, n) {
            return i(t, e, n, !1);
        },
        removeData: function(t, e) {
            return r(t, e, !1);
        },
        _data: function(t, e, n) {
            return i(t, e, n, !0);
        },
        _removeData: function(t, e) {
            return r(t, e, !0);
        },
        acceptData: function(t) {
            var e = t.nodeName && te.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e;
        }
    }), te.fn.extend({
        data: function(t, n) {
            var i, r, s, a, l, u = this[0], c = 0, h = null;
            if (t === e) {
                if (this.length && (h = te.data(u), 1 === u.nodeType && !te._data(u, "parsedAttrs"))) {
                    for (s = u.attributes, l = s.length; l > c; c++) a = s[c].name, a.indexOf("data-") || (a = te.camelCase(a.substring(5)), 
                    o(u, a, h[a]));
                    te._data(u, "parsedAttrs", !0);
                }
                return h;
            }
            return "object" == typeof t ? this.each(function() {
                te.data(this, t);
            }) : (i = t.split(".", 2), i[1] = i[1] ? "." + i[1] : "", r = i[1] + "!", te.access(this, function(n) {
                return n === e ? (h = this.triggerHandler("getData" + r, [ i[0] ]), h === e && u && (h = te.data(u, t), 
                h = o(u, t, h)), h === e && i[1] ? this.data(i[0]) : h) : (i[1] = n, this.each(function() {
                    var e = te(this);
                    e.triggerHandler("setData" + r, i), te.data(this, t, n), e.triggerHandler("changeData" + r, i);
                }), e);
            }, null, n, arguments.length > 1, null, !1));
        },
        removeData: function(t) {
            return this.each(function() {
                te.removeData(this, t);
            });
        }
    }), te.extend({
        queue: function(t, n, i) {
            var r;
            return t ? (n = (n || "fx") + "queue", r = te._data(t, n), i && (!r || te.isArray(i) ? r = te._data(t, n, te.makeArray(i)) : r.push(i)), 
            r || []) : e;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = te.queue(t, e), i = n.length, r = n.shift(), o = te._queueHooks(t, e), s = function() {
                te.dequeue(t, e);
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), 
            delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return te._data(t, n) || te._data(t, n, {
                empty: te.Callbacks("once memory").add(function() {
                    te._removeData(t, e + "queue"), te._removeData(t, n);
                })
            });
        }
    }), te.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? te.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = te.queue(this, t, n);
                te._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && te.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                te.dequeue(this, t);
            });
        },
        delay: function(t, e) {
            return t = te.fx ? te.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i);
                };
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, n) {
            var i, r = 1, o = te.Deferred(), s = this, a = this.length, l = function() {
                --r || o.resolveWith(s, [ s ]);
            };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--; ) i = te._data(s[a], t + "queueHooks"), 
            i && i.empty && (r++, i.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var xe, we, Ce, ke = /[\t\r\n]/g, Te = /\r/g, Se = /^(?:button|input)$/i, Ee = /^(?:button|input|object|select|textarea)$/i, _e = /^a(?:rea|)$/i, Ne = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $e = te.support.getSetAttribute;
    te.fn.extend({
        attr: function(t, e) {
            return te.access(this, te.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                te.removeAttr(this, t);
            });
        },
        prop: function(t, e) {
            return te.access(this, te.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return t = te.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t];
                } catch (n) {}
            });
        },
        addClass: function(t) {
            var e, n, i, r, o, s, a;
            if (te.isFunction(t)) return this.each(function(e) {
                te(this).addClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t) for (e = t.split(ie), n = 0, i = this.length; i > n; n++) if (r = this[n], 
            1 === r.nodeType) if (r.className || 1 !== e.length) {
                for (o = " " + r.className + " ", s = 0, a = e.length; a > s; s++) 0 > o.indexOf(" " + e[s] + " ") && (o += e[s] + " ");
                r.className = te.trim(o);
            } else r.className = t;
            return this;
        },
        removeClass: function(t) {
            var n, i, r, o, s, a, l;
            if (te.isFunction(t)) return this.each(function(e) {
                te(this).removeClass(t.call(this, e, this.className));
            });
            if (t && "string" == typeof t || t === e) for (n = (t || "").split(ie), a = 0, l = this.length; l > a; a++) if (r = this[a], 
            1 === r.nodeType && r.className) {
                for (i = (" " + r.className + " ").replace(ke, " "), o = 0, s = n.length; s > o; o++) for (;i.indexOf(" " + n[o] + " ") >= 0; ) i = i.replace(" " + n[o] + " ", " ");
                r.className = t ? te.trim(i) : "";
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = typeof t, i = "boolean" == typeof e;
            return te.isFunction(t) ? this.each(function(n) {
                te(this).toggleClass(t.call(this, n, this.className, e), e);
            }) : this.each(function() {
                if ("string" === n) for (var r, o = 0, s = te(this), a = e, l = t.split(ie); r = l[o++]; ) a = i ? a : !s.hasClass(r), 
                s[a ? "addClass" : "removeClass"](r); else ("undefined" === n || "boolean" === n) && (this.className && te._data(this, "__className__", this.className), 
                this.className = this.className || t === !1 ? "" : te._data(this, "__className__") || "");
            });
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ke, " ").indexOf(e) >= 0) return !0;
            return !1;
        },
        val: function(t) {
            var n, i, r, o = this[0];
            {
                if (arguments.length) return r = te.isFunction(t), this.each(function(i) {
                    var o, s = te(this);
                    1 === this.nodeType && (o = r ? t.call(this, i, s.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : te.isArray(o) && (o = te.map(o, function(t) {
                        return null == t ? "" : t + "";
                    })), n = te.valHooks[this.type] || te.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o));
                });
                if (o) return n = te.valHooks[o.type] || te.valHooks[o.nodeName.toLowerCase()], 
                n && "get" in n && (i = n.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(Te, "") : null == i ? "" : i);
            }
        }
    }), te.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text;
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], 
                    !(!n.selected && l !== r || (te.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && te.nodeName(n.parentNode, "optgroup"))) {
                        if (e = te(n).val(), o) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(t, e) {
                    var n = te.makeArray(e);
                    return te(t).find("option").each(function() {
                        this.selected = te.inArray(te(this).val(), n) >= 0;
                    }), n.length || (t.selectedIndex = -1), n;
                }
            }
        },
        attr: function(t, n, i, r) {
            var o, s, a, l = t.nodeType;
            if (t && 3 !== l && 8 !== l && 2 !== l) return r && te.isFunction(te.fn[n]) ? te(t)[n](i) : t.getAttribute === e ? te.prop(t, n, i) : (a = 1 !== l || !te.isXMLDoc(t), 
            a && (n = n.toLowerCase(), s = te.attrHooks[n] || (Ne.test(n) ? we : xe)), i !== e ? null === i ? (te.removeAttr(t, n), 
            e) : s && "set" in s && a && (o = s.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), 
            i) : s && "get" in s && a && null !== (o = s.get(t, n)) ? o : (o = t.getAttribute(n), 
            null === o ? e : o));
        },
        removeAttr: function(t, e) {
            var n, i, r, o, s = 0;
            if (e && 1 === t.nodeType) for (i = e.split(ie); i.length > s; s++) r = i[s], r && (n = te.propFix[r] || r, 
            o = Ne.test(r), o || te.attr(t, r, ""), t.removeAttribute($e ? r : n), o && n in t && (t[n] = !1));
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (Se.test(t.nodeName) && t.parentNode) te.error("type property can't be changed"); else if (!te.support.radioValue && "radio" === e && te.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            },
            value: {
                get: function(t, e) {
                    return xe && te.nodeName(t, "button") ? xe.get(t, e) : e in t ? t.value : null;
                },
                set: function(t, n, i) {
                    return xe && te.nodeName(t, "button") ? xe.set(t, n, i) : (t.value = n, e);
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
        prop: function(t, n, i) {
            var r, o, s, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !te.isXMLDoc(t), s && (n = te.propFix[n] || n, 
            o = te.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Ee.test(t.nodeName) || _e.test(t.nodeName) && t.href ? 0 : e;
                }
            }
        }
    }), we = {
        get: function(t, n) {
            var i, r = te.prop(t, n);
            return r === !0 || "boolean" != typeof r && (i = t.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : e;
        },
        set: function(t, e, n) {
            var i;
            return e === !1 ? te.removeAttr(t, n) : (i = te.propFix[n] || n, i in t && (t[i] = !0), 
            t.setAttribute(n, n.toLowerCase())), n;
        }
    }, $e || (Ce = {
        name: !0,
        id: !0,
        coords: !0
    }, xe = te.valHooks.button = {
        get: function(t, n) {
            var i;
            return i = t.getAttributeNode(n), i && (Ce[n] ? "" !== i.value : i.specified) ? i.value : e;
        },
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || (i = t.ownerDocument.createAttribute(n), t.setAttributeNode(i)), i.value = e + "";
        }
    }, te.each([ "width", "height" ], function(t, n) {
        te.attrHooks[n] = te.extend(te.attrHooks[n], {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(n, "auto"), i) : e;
            }
        });
    }), te.attrHooks.contenteditable = {
        get: xe.get,
        set: function(t, e, n) {
            "" === e && (e = "false"), xe.set(t, e, n);
        }
    }), te.support.hrefNormalized || te.each([ "href", "src", "width", "height" ], function(t, n) {
        te.attrHooks[n] = te.extend(te.attrHooks[n], {
            get: function(t) {
                var i = t.getAttribute(n, 2);
                return null === i ? e : i;
            }
        });
    }), te.support.style || (te.attrHooks.style = {
        get: function(t) {
            return t.style.cssText.toLowerCase() || e;
        },
        set: function(t, e) {
            return t.style.cssText = e + "";
        }
    }), te.support.optSelected || (te.propHooks.selected = te.extend(te.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        }
    })), te.support.enctype || (te.propFix.enctype = "encoding"), te.support.checkOn || te.each([ "radio", "checkbox" ], function() {
        te.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
            }
        };
    }), te.each([ "radio", "checkbox" ], function() {
        te.valHooks[this] = te.extend(te.valHooks[this], {
            set: function(t, n) {
                return te.isArray(n) ? t.checked = te.inArray(te(t).val(), n) >= 0 : e;
            }
        });
    });
    var je = /^(?:textarea|input|select)$/i, Ae = /^([^\.]*|)(?:\.(.+)|)$/, De = /^key/, Me = /^(?:mouse|contextmenu)|click/, Le = /^(?:focusinfocus|focusoutblur)$/;
    te.event = {
        add: function(t, n, i, r, o) {
            var s, a, l, u, c, h, f, d, p, g, m;
            if (3 !== t.nodeType && 8 !== t.nodeType && n && i && (s = te._data(t))) {
                for (i.handler && (p = i, i = p.handler, o = p.selector), i.guid || (i.guid = te.guid++), 
                l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(t) {
                    return te === e || t && te.event.triggered === t.type ? e : te.event.dispatch.apply(a.elem, arguments);
                }, a.elem = t), n = te.trim(n).split(" "), u = 0; n.length > u; u++) c = Ae.exec(n[u]) || [], 
                h = c[1], f = (c[2] || "").split(".").sort(), m = te.event.special[h] || {}, h = (o ? m.delegateType : m.bindType) || h, 
                m = te.event.special[h] || {}, d = te.extend({
                    type: h,
                    origType: c[1],
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && te.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, p), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(t, r, f, a) !== !1 || (t.addEventListener ? t.addEventListener(h, a, !1) : t.attachEvent && t.attachEvent("on" + h, a))), 
                m.add && (m.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), 
                te.event.global[h] = !0;
                t = null;
            }
        },
        global: {},
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, h, f, d, p, g, m = te.hasData(t) && te._data(t);
            if (m && (f = m.events)) {
                for (e = te.trim(e).split(" "), o = 0; e.length > o; o++) if (s = Ae.exec(e[o]) || [], 
                a = l = s[1], u = s[2], a) {
                    for (d = te.event.special[a] || {}, a = (i ? d.delegateType : d.bindType) || a, 
                    p = f[a] || [], c = p.length, u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    h = 0; p.length > h; h++) g = p[h], !r && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (p.splice(h--, 1), 
                    g.selector && p.delegateCount--, d.remove && d.remove.call(t, g));
                    0 === p.length && c !== p.length && (d.teardown && d.teardown.call(t, u, m.handle) !== !1 || te.removeEvent(t, a, m.handle), 
                    delete f[a]);
                } else for (a in f) te.event.remove(t, a + e[o], n, i, !0);
                te.isEmptyObject(f) && (delete m.handle, te._removeData(t, "events"));
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
                if (!Le.test(m + te.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), 
                a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), r && !te.event.customEvent[m] || te.event.global[m])) if (n = "object" == typeof n ? n[te.expando] ? n : new te.Event(m, n) : new te.Event(m), 
                n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                h = 0 > m.indexOf(":") ? "on" + m : "", r) {
                    if (n.result = e, n.target || (n.target = r), i = null != i ? te.makeArray(i) : [], 
                    i.unshift(n), f = te.event.special[m] || {}, !f.trigger || f.trigger.apply(r, i) !== !1) {
                        if (p = [ [ r, f.bindType || m ] ], !o && !f.noBubble && !te.isWindow(r)) {
                            for (g = f.delegateType || m, u = Le.test(g + m) ? r : r.parentNode, c = r; u; u = u.parentNode) p.push([ u, g ]), 
                            c = u;
                            c === (r.ownerDocument || z) && p.push([ c.defaultView || c.parentWindow || t, g ]);
                        }
                        for (l = 0; p.length > l && !n.isPropagationStopped(); l++) u = p[l][0], n.type = p[l][1], 
                        d = (te._data(u, "events") || {})[n.type] && te._data(u, "handle"), d && d.apply(u, i), 
                        d = h && u[h], d && te.acceptData(u) && d.apply && d.apply(u, i) === !1 && n.preventDefault();
                        if (n.type = m, !(o || n.isDefaultPrevented() || f._default && f._default.apply(r.ownerDocument, i) !== !1 || "click" === m && te.nodeName(r, "a") || !te.acceptData(r) || !h || !r[m] || te.isWindow(r))) {
                            c = r[h], c && (r[h] = null), te.event.triggered = m;
                            try {
                                r[m]();
                            } catch (y) {}
                            te.event.triggered = e, c && (r[h] = c);
                        }
                        return n.result;
                    }
                } else {
                    s = te.cache;
                    for (l in s) s[l].events && s[l].events[m] && te.event.trigger(n, i, s[l].handle.elem, !0);
                }
            }
        },
        dispatch: function(t) {
            t = te.event.fix(t);
            var n, i, r, o, s, a, l, u, c, h = (te._data(this, "events") || {})[t.type] || [], f = h.delegateCount, d = G.call(arguments), p = !t.exclusive && !t.namespace, g = te.event.special[t.type] || {}, m = [];
            if (d[0] = t, t.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, t) !== !1) {
                if (f && (!t.button || "click" !== t.type)) for (r = t.target; r != this; r = r.parentNode || this) if (r.disabled !== !0 || "click" !== t.type) {
                    for (s = {}, l = [], n = 0; f > n; n++) u = h[n], c = u.selector, s[c] === e && (s[c] = u.needsContext ? te(c, this).index(r) >= 0 : te.find(c, this, null, [ r ]).length), 
                    s[c] && l.push(u);
                    l.length && m.push({
                        elem: r,
                        matches: l
                    });
                }
                for (h.length > f && m.push({
                    elem: this,
                    matches: h.slice(f)
                }), n = 0; m.length > n && !t.isPropagationStopped(); n++) for (a = m[n], t.currentTarget = a.elem, 
                i = 0; a.matches.length > i && !t.isImmediatePropagationStopped(); i++) u = a.matches[i], 
                (p || !t.namespace && !u.namespace || t.namespace_re && t.namespace_re.test(u.namespace)) && (t.data = u.data, 
                t.handleObj = u, o = ((te.event.special[u.origType] || {}).handle || u.handler).apply(a.elem, d), 
                o !== e && (t.result = o, o === !1 && (t.preventDefault(), t.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, t), t.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), 
                t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || z, 
                r = i.documentElement, o = i.body, t.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), 
                t.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), 
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                t;
            }
        },
        fix: function(t) {
            if (t[te.expando]) return t;
            var e, n, i = t, r = te.event.fixHooks[t.type] || {}, o = r.props ? this.props.concat(r.props) : this.props;
            for (t = te.Event(i), e = o.length; e; ) n = o[--e], t[n] = i[n];
            return t.target || (t.target = i.srcElement || z), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
            t.metaKey = !!t.metaKey, r.filter ? r.filter(t, i) : t;
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
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result);
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = te.extend(new te.Event(), n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? te.event.trigger(r, null, e) : te.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault();
        }
    }, te.event.handle = te.event.dispatch, te.removeEvent = z.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
    } : function(t, n, i) {
        var r = "on" + n;
        t.detachEvent && (t[r] === e && (t[r] = null), t.detachEvent(r, i));
    }, te.Event = function(t, n) {
        return this instanceof te.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : a) : this.type = t, 
        n && te.extend(this, n), this.timeStamp = t && t.timeStamp || te.now(), this[te.expando] = !0, 
        e) : new te.Event(t, n);
    }, te.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = l;
            var t = this.originalEvent;
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
        },
        stopPropagation: function() {
            this.isPropagationStopped = l;
            var t = this.originalEvent;
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation();
        },
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a
    }, te.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        te.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return (!r || r !== i && !te.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), 
                t.type = e), n;
            }
        };
    }), te.support.submitBubbles || (te.event.special.submit = {
        setup: function() {
            return te.nodeName(this, "form") ? !1 : (te.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target, i = te.nodeName(n, "input") || te.nodeName(n, "button") ? n.form : e;
                i && !te._data(i, "_submit_attached") && (te.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0;
                }), te._data(i, "_submit_attached", !0));
            }), e);
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && te.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function() {
            return te.nodeName(this, "form") ? !1 : (te.event.remove(this, "._submit"), e);
        }
    }), te.support.changeBubbles || (te.event.special.change = {
        setup: function() {
            return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (te.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
            }), te.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), te.event.simulate("change", this, t, !0);
            })), !1) : (te.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                je.test(e.nodeName) && !te._data(e, "_change_attached") && (te.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || te.event.simulate("change", this.parentNode, t, !0);
                }), te._data(e, "_change_attached", !0));
            }), e);
        },
        handle: function(t) {
            var n = t.target;
            return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e;
        },
        teardown: function() {
            return te.event.remove(this, "._change"), !je.test(this.nodeName);
        }
    }), te.support.focusinBubbles || te.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0, i = function(t) {
            te.event.simulate(e, t.target, te.event.fix(t), !0);
        };
        te.event.special[e] = {
            setup: function() {
                0 === n++ && z.addEventListener(t, i, !0);
            },
            teardown: function() {
                0 === --n && z.removeEventListener(t, i, !0);
            }
        };
    }), te.fn.extend({
        on: function(t, n, i, r, o) {
            var s, l;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (l in t) this.on(l, n, i, t[l], o);
                return this;
            }
            if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, 
            i = e) : (r = i, i = n, n = e)), r === !1) r = a; else if (!r) return this;
            return 1 === o && (s = r, r = function(t) {
                return te().off(t), s.apply(this, arguments);
            }, r.guid = s.guid || (s.guid = te.guid++)), this.each(function() {
                te.event.add(this, t, r, i, n);
            });
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1);
        },
        off: function(t, n, i) {
            var r, o;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, te(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, n, t[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = a), 
            this.each(function() {
                te.event.remove(this, t, i, n);
            });
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        live: function(t, e, n) {
            return te(this.context).on(t, this.selector, e, n), this;
        },
        die: function(t, e) {
            return te(this.context).off(t, this.selector || "**", e), this;
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        },
        trigger: function(t, e) {
            return this.each(function() {
                te.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, n) {
            return this[0] ? te.event.trigger(t, n, this[0], !0) : e;
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), te.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        te.fn[e] = function(t, n) {
            return null == n && (n = t, t = null), arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        }, De.test(e) && (te.event.fixHooks[e] = te.event.keyHooks), Me.test(e) && (te.event.fixHooks[e] = te.event.mouseHooks);
    }), function(t, e) {
        function n(t, e, n, i) {
            n = n || [], e = e || D;
            var r, o, s, a, l = e.nodeType;
            if (!t || "string" != typeof t) return n;
            if (1 !== l && 9 !== l) return [];
            if (s = w(e), !s && !i && (r = ie.exec(t))) if (a = r[1]) {
                if (9 === l) {
                    if (o = e.getElementById(a), !o || !o.parentNode) return n;
                    if (o.id === a) return n.push(o), n;
                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && C(e, o) && o.id === a) return n.push(o), 
                n;
            } else {
                if (r[2]) return O.apply(n, B.call(e.getElementsByTagName(t), 0)), n;
                if ((a = r[3]) && de && e.getElementsByClassName) return O.apply(n, B.call(e.getElementsByClassName(a), 0)), 
                n;
            }
            return g(t.replace(K, "$1"), e, n, i, s);
        }
        function i(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t;
            };
        }
        function r(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function o(t) {
            return P(function(e) {
                return e = +e, P(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function s(t, e) {
            if (t && e) for (var n = t.nextSibling; n; ) {
                if (n === e) return -1;
                n = n.nextSibling;
            }
            return t ? 1 : -1;
        }
        function a(t, e) {
            var i, r, o, s, a, l, u, c = z[j][t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = b.preFilter; a; ) {
                (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), 
                i = !1, (r = ee.exec(a)) && (o.push(i = new A(r.shift())), a = a.slice(i.length), 
                i.type = r[0].replace(K, " "));
                for (s in b.filter) !(r = le[s].exec(a)) || u[s] && !(r = u[s](r)) || (o.push(i = new A(r.shift())), 
                a = a.slice(i.length), i.type = s, i.matches = r);
                if (!i) break;
            }
            return e ? a.length : a ? n.error(t) : z(t, l).slice(0);
        }
        function l(t, e, n) {
            var i = e.dir, r = n && "parentNode" === e.dir, o = H++;
            return e.first ? function(e, n, o) {
                for (;e = e[i]; ) if (r || 1 === e.nodeType) return t(e, n, o);
            } : function(e, n, s) {
                if (s) {
                    for (;e = e[i]; ) if ((r || 1 === e.nodeType) && t(e, n, s)) return e;
                } else for (var a, l = L + " " + o + " ", u = l + v; e = e[i]; ) if (r || 1 === e.nodeType) {
                    if ((a = e[j]) === u) return e.sizset;
                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                        if (e.sizset) return e;
                    } else {
                        if (e[j] = u, t(e, n, s)) return e.sizset = !0, e;
                        e.sizset = !1;
                    }
                }
            };
        }
        function u(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
            } : t[0];
        }
        function c(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++) (o = t[a]) && (!n || n(o, i, r)) && (s.push(o), 
            u && e.push(a));
            return s;
        }
        function h(t, e, n, i, r, o) {
            return i && !i[j] && (i = h(i)), r && !r[j] && (r = h(r, o)), P(function(o, s, a, l) {
                var u, h, f, d = [], g = [], m = s.length, v = o || p(e || "*", a.nodeType ? [ a ] : a, []), y = !t || !o && e ? v : c(v, d, t, a, l), b = n ? r || (o ? t : m || i) ? [] : s : y;
                if (n && n(y, b, a, l), i) for (u = c(b, g), i(u, [], a, l), h = u.length; h--; ) (f = u[h]) && (b[g[h]] = !(y[g[h]] = f));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (u = [], h = b.length; h--; ) (f = b[h]) && u.push(y[h] = f);
                            r(null, b = [], u, l);
                        }
                        for (h = b.length; h--; ) (f = b[h]) && (u = r ? R.call(o, f) : d[h]) > -1 && (o[u] = !(s[u] = f));
                    }
                } else b = c(b === s ? b.splice(m, b.length) : b), r ? r(null, s, b, l) : O.apply(s, b);
            });
        }
        function f(t) {
            for (var e, n, i, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, c = l(function(t) {
                return t === e;
            }, s, !0), d = l(function(t) {
                return R.call(e, t) > -1;
            }, s, !0), p = [ function(t, n, i) {
                return !o && (i || n !== E) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
            } ]; r > a; a++) if (n = b.relative[t[a].type]) p = [ l(u(p), n) ]; else {
                if (n = b.filter[t[a].type].apply(null, t[a].matches), n[j]) {
                    for (i = ++a; r > i && !b.relative[t[i].type]; i++) ;
                    return h(a > 1 && u(p), a > 1 && t.slice(0, a - 1).join("").replace(K, "$1"), n, i > a && f(t.slice(a, i)), r > i && f(t = t.slice(i)), r > i && t.join(""));
                }
                p.push(n);
            }
            return u(p);
        }
        function d(t, e) {
            var i = e.length > 0, r = t.length > 0, o = function(s, a, l, u, h) {
                var f, d, p, g = [], m = 0, y = "0", x = s && [], w = null != h, C = E, k = s || r && b.find.TAG("*", h && a.parentNode || a), T = L += null == C ? 1 : Math.E;
                for (w && (E = a !== D && a, v = o.el); null != (f = k[y]); y++) {
                    if (r && f) {
                        for (d = 0; p = t[d]; d++) if (p(f, a, l)) {
                            u.push(f);
                            break;
                        }
                        w && (L = T, v = ++o.el);
                    }
                    i && ((f = !p && f) && m--, s && x.push(f));
                }
                if (m += y, i && y !== m) {
                    for (d = 0; p = e[d]; d++) p(x, g, a, l);
                    if (s) {
                        if (m > 0) for (;y--; ) x[y] || g[y] || (g[y] = F.call(u));
                        g = c(g);
                    }
                    O.apply(u, g), w && !s && g.length > 0 && m + e.length > 1 && n.uniqueSort(u);
                }
                return w && (L = T, E = C), x;
            };
            return o.el = 0, i ? P(o) : o;
        }
        function p(t, e, i) {
            for (var r = 0, o = e.length; o > r; r++) n(t, e[r], i);
            return i;
        }
        function g(t, e, n, i, r) {
            var o, s, l, u, c, h = a(t);
            if (!i && 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === e.nodeType && !r && b.relative[s[1].type]) {
                    if (e = b.find.ID(l.matches[0].replace(ae, ""), e, r)[0], !e) return n;
                    t = t.slice(s.shift().length);
                }
                for (o = le.POS.test(t) ? -1 : s.length - 1; o >= 0 && (l = s[o], !b.relative[u = l.type]); o--) if ((c = b.find[u]) && (i = c(l.matches[0].replace(ae, ""), re.test(s[0].type) && e.parentNode || e, r))) {
                    if (s.splice(o, 1), t = i.length && s.join(""), !t) return O.apply(n, B.call(i, 0)), 
                    n;
                    break;
                }
            }
            return k(t, h)(i, e, r, n, re.test(t)), n;
        }
        function m() {}
        var v, y, b, x, w, C, k, T, S, E, _ = "undefined", N = 1 << 31, $ = !0, j = ("sizcache" + Math.random()).replace(".", ""), A = String, D = t.document, M = D.documentElement, L = 0, H = 0, F = [].pop, O = [].push, B = [].slice, R = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
            return -1;
        }, P = function(t, e) {
            return t[j] = null == e || e, t;
        }, I = function() {
            var t = {}, e = [];
            return P(function(n, i) {
                return e.push(n) > b.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }, t);
        }, q = I(), z = I(), W = I(), V = "[\\x20\\t\\r\\n\\f]", U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", X = U.replace("w", "w#"), Q = "([*^$|!~]?=)", G = "\\[" + V + "*(" + U + ")" + V + "*(?:" + Q + V + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + V + "*\\]", J = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + V + "*((?:-\\d)?\\d*)" + V + "*\\)|)(?=[^-]|$)", K = RegExp("^" + V + "+|((?:^|[^\\\\])(?:\\\\.)*)" + V + "+$", "g"), Z = RegExp("^" + V + "*," + V + "*"), ee = RegExp("^" + V + "*([\\x20\\t\\r\\n\\f>+~])" + V + "*"), ne = RegExp(J), ie = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, re = /[\x20\t\r\n\f]*[+~]/, oe = /h\d/i, se = /input|select|textarea|button/i, ae = /\\(?!\\)/g, le = {
            ID: RegExp("^#(" + U + ")"),
            CLASS: RegExp("^\\.(" + U + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"),
            TAG: RegExp("^(" + U.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + G),
            PSEUDO: RegExp("^" + J),
            POS: RegExp(Y, "i"),
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\(" + V + "*(even|odd|(([+-]|)(\\d*)n|)" + V + "*(?:([+-]|)" + V + "*(\\d+)|))" + V + "*\\)|)", "i"),
            needsContext: RegExp("^" + V + "*[>+~]|" + Y, "i")
        }, ue = function(t) {
            var e = D.createElement("div");
            try {
                return t(e);
            } catch (n) {
                return !1;
            } finally {
                e = null;
            }
        }, ce = ue(function(t) {
            return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length;
        }), he = ue(function(t) {
            return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== _ && "#" === t.firstChild.getAttribute("href");
        }), fe = ue(function(t) {
            t.innerHTML = "<select></select>";
            var e = typeof t.lastChild.getAttribute("multiple");
            return "boolean" !== e && "string" !== e;
        }), de = ue(function(t) {
            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 
            2 === t.getElementsByClassName("e").length) : !1;
        }), pe = ue(function(t) {
            t.id = j + 0, t.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", 
            M.insertBefore(t, M.firstChild);
            var e = D.getElementsByName && D.getElementsByName(j).length === 2 + D.getElementsByName(j + 0).length;
            return y = !D.getElementById(j), M.removeChild(t), e;
        });
        try {
            B.call(M.childNodes, 0)[0].nodeType;
        } catch (ge) {
            B = function(t) {
                for (var e, n = []; e = this[t]; t++) n.push(e);
                return n;
            };
        }
        n.matches = function(t, e) {
            return n(t, null, null, e);
        }, n.matchesSelector = function(t, e) {
            return n(e, null, null, [ t ]).length > 0;
        }, x = n.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
            } else for (;e = t[i]; i++) n += x(e);
            return n;
        }, w = n.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1;
        }, C = n.contains = M.contains ? function(t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
            return t === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
        } : M.compareDocumentPosition ? function(t, e) {
            return e && !!(16 & t.compareDocumentPosition(e));
        } : function(t, e) {
            for (;e = e.parentNode; ) if (e === t) return !0;
            return !1;
        }, n.attr = function(t, e) {
            var n, i = w(t);
            return i || (e = e.toLowerCase()), (n = b.attrHandle[e]) ? n(t) : i || fe ? t.getAttribute(e) : (n = t.getAttributeNode(e), 
            n ? "boolean" == typeof t[e] ? t[e] ? e : null : n.specified ? n.value : null : null);
        }, b = n.selectors = {
            cacheLength: 50,
            createPseudo: P,
            match: le,
            attrHandle: he ? {} : {
                href: function(t) {
                    return t.getAttribute("href", 2);
                },
                type: function(t) {
                    return t.getAttribute("type");
                }
            },
            find: {
                ID: y ? function(t, e, n) {
                    if (typeof e.getElementById !== _ && !n) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [ i ] : [];
                    }
                } : function(t, n, i) {
                    if (typeof n.getElementById !== _ && !i) {
                        var r = n.getElementById(t);
                        return r ? r.id === t || typeof r.getAttributeNode !== _ && r.getAttributeNode("id").value === t ? [ r ] : e : [];
                    }
                },
                TAG: ce ? function(t, n) {
                    return typeof n.getElementsByTagName !== _ ? n.getElementsByTagName(t) : e;
                } : function(t, e) {
                    var n = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                        return r;
                    }
                    return n;
                },
                NAME: pe && function(t, n) {
                    return typeof n.getElementsByName !== _ ? n.getElementsByName(name) : e;
                },
                CLASS: de && function(t, n, i) {
                    return typeof n.getElementsByClassName === _ || i ? e : n.getElementsByClassName(t);
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(ae, ""), t[3] = (t[4] || t[5] || "").replace(ae, ""), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || n.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), 
                    t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && n.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var e, n;
                    return le.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (ne.test(e) && (n = a(e, !0)) && (n = e.indexOf(")", e.length - n) - e.length) && (e = e.slice(0, n), 
                    t[0] = t[0].slice(0, n)), t[2] = e), t.slice(0, 3));
                }
            },
            filter: {
                ID: y ? function(t) {
                    return t = t.replace(ae, ""), function(e) {
                        return e.getAttribute("id") === t;
                    };
                } : function(t) {
                    return t = t.replace(ae, ""), function(e) {
                        var n = typeof e.getAttributeNode !== _ && e.getAttributeNode("id");
                        return n && n.value === t;
                    };
                },
                TAG: function(t) {
                    return "*" === t ? function() {
                        return !0;
                    } : (t = t.replace(ae, "").toLowerCase(), function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    });
                },
                CLASS: function(t) {
                    var e = q[j][t + " "];
                    return e || (e = RegExp("(^|" + V + ")" + t + "(" + V + "|$)")) && q(t, function(t) {
                        return e.test(t.className || typeof t.getAttribute !== _ && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, e, i) {
                    return function(r) {
                        var o = n.attr(r, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.substr(o.length - i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0;
                    };
                },
                CHILD: function(t, e, n, i) {
                    return "nth" === t ? function(t) {
                        var e, r, o = t.parentNode;
                        if (1 === n && 0 === i) return !0;
                        if (o) for (r = 0, e = o.firstChild; e && (1 !== e.nodeType || (r++, t !== e)); e = e.nextSibling) ;
                        return r -= i, r === n || 0 === r % n && r / n >= 0;
                    } : function(e) {
                        var n = e;
                        switch (t) {
                          case "only":
                          case "first":
                            for (;n = n.previousSibling; ) if (1 === n.nodeType) return !1;
                            if ("first" === t) return !0;
                            n = e;

                          case "last":
                            for (;n = n.nextSibling; ) if (1 === n.nodeType) return !1;
                            return !0;
                        }
                    };
                },
                PSEUDO: function(t, e) {
                    var i, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                    return r[j] ? r(e) : r.length > 1 ? (i = [ t, t, "", e ], b.setFilters.hasOwnProperty(t.toLowerCase()) ? P(function(t, n) {
                        for (var i, o = r(t, e), s = o.length; s--; ) i = R.call(t, o[s]), t[i] = !(n[i] = o[s]);
                    }) : function(t) {
                        return r(t, 0, i);
                    }) : r;
                }
            },
            pseudos: {
                not: P(function(t) {
                    var e = [], n = [], i = k(t.replace(K, "$1"));
                    return i[j] ? P(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), !n.pop();
                    };
                }),
                has: P(function(t) {
                    return function(e) {
                        return n(t, e).length > 0;
                    };
                }),
                contains: P(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || x(e)).indexOf(t) > -1;
                    };
                }),
                enabled: function(t) {
                    return t.disabled === !1;
                },
                disabled: function(t) {
                    return t.disabled === !0;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                },
                parent: function(t) {
                    return !b.pseudos.empty(t);
                },
                empty: function(t) {
                    var e;
                    for (t = t.firstChild; t; ) {
                        if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                        t = t.nextSibling;
                    }
                    return !0;
                },
                header: function(t) {
                    return oe.test(t.nodeName);
                },
                text: function(t) {
                    var e, n;
                    return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (n = t.getAttribute("type")) || n.toLowerCase() === e);
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: r("submit"),
                reset: r("reset"),
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                input: function(t) {
                    return se.test(t.nodeName);
                },
                focus: function(t) {
                    var e = t.ownerDocument;
                    return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                active: function(t) {
                    return t === t.ownerDocument.activeElement;
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: o(function(t, e, n) {
                    return [ 0 > n ? n + e : n ];
                }),
                even: o(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: o(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t;
                }),
                lt: o(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: o(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; e > ++i; ) t.push(i);
                    return t;
                })
            }
        }, T = M.compareDocumentPosition ? function(t, e) {
            var n, i;
            return t === e ? (S = !0, 0) : t.compareDocumentPosition && e.compareDocumentPosition ? 1 & (n = t.compareDocumentPosition(e)) || (i = t.parentNode) && 11 === i.nodeType ? t === D || C(D, t) ? -1 : e === D || C(D, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1;
        } : function(t, e) {
            if (t === e) return S = !0, 0;
            if (t.sourceIndex && e.sourceIndex) return (~e.sourceIndex || N) - (C(D, t) && ~t.sourceIndex || N);
            var n = 0, i = [ t ], r = [ e ], o = t.parentNode, a = e.parentNode, l = o;
            if (t === D) return -1;
            if (e === D) return 1;
            if (!o && !a) return 0;
            if (!a) return -1;
            if (!o) return 1;
            if (o === a) return s(t, e);
            for (;l; ) i.unshift(l), l = l.parentNode;
            for (l = a; l; ) r.unshift(l), l = l.parentNode;
            for (;i[n] === r[n]; ) n++;
            return 0 === n ? i[0] === D || C(D, i[0]) ? -1 : r[0] === D || C(D, r[0]) ? 1 : 0 : s(i[n], r[n]);
        }, [ 0, 0 ].sort(T), $ = !S, n.uniqueSort = function(t) {
            var e, n = [], i = 1, r = 0;
            if (S = $, t.sort(T), S) {
                for (;e = t[i]; i++) e === t[i - 1] && (r = n.push(i));
                for (;r--; ) t.splice(n[r], 1);
            }
            return t;
        }, n.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t);
        }, k = n.compile = function(t, e) {
            var n, i = [], r = [], o = W[j][t + " "];
            if (!o) {
                for (e || (e = a(t)), n = e.length; n--; ) o = f(e[n]), o[j] ? i.push(o) : r.push(o);
                o = W(t, d(r, i));
            }
            return o;
        }, D.querySelectorAll && function() {
            var t, e = g, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [ ":focus" ], s = [ ":active" ], l = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector;
            ue(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || o.push("\\[" + V + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                t.querySelectorAll(":checked").length || o.push(":checked");
            }), ue(function(t) {
                t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && o.push("[*^$]=" + V + "*(?:\"\"|'')"), 
                t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
            }), o = RegExp(o.join("|")), g = function(t, n, r, s, l) {
                if (!s && !l && !o.test(t)) {
                    var u, c, h = !0, f = j, d = n, p = 9 === n.nodeType && t;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (u = a(t), (h = n.getAttribute("id")) ? f = h.replace(i, "\\$&") : n.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", c = u.length; c--; ) u[c] = f + u[c].join("");
                        d = re.test(t) && n.parentNode || n, p = u.join(",");
                    }
                    if (p) try {
                        return O.apply(r, B.call(d.querySelectorAll(p), 0)), r;
                    } catch (g) {} finally {
                        h || n.removeAttribute("id");
                    }
                }
                return e(t, n, r, s, l);
            }, l && (ue(function(e) {
                t = l.call(e, "div");
                try {
                    l.call(e, "[test!='']:sizzle"), s.push("!=", J);
                } catch (n) {}
            }), s = RegExp(s.join("|")), n.matchesSelector = function(e, i) {
                if (i = i.replace(r, "='$1']"), !w(e) && !s.test(i) && !o.test(i)) try {
                    var a = l.call(e, i);
                    if (a || t || e.document && 11 !== e.document.nodeType) return a;
                } catch (u) {}
                return n(i, null, null, [ e ]).length > 0;
            });
        }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m(), 
        n.attr = te.attr, te.find = n, te.expr = n.selectors, te.expr[":"] = te.expr.pseudos, 
        te.unique = n.uniqueSort, te.text = n.getText, te.isXMLDoc = n.isXML, te.contains = n.contains;
    }(t);
    var He = /Until$/, Fe = /^(?:parents|prev(?:Until|All))/, Oe = /^.[^:#\[\.,]*$/, Be = te.expr.match.needsContext, Re = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    te.fn.extend({
        find: function(t) {
            var e, n, i, r, o, s, a = this;
            if ("string" != typeof t) return te(t).filter(function() {
                for (e = 0, n = a.length; n > e; e++) if (te.contains(a[e], this)) return !0;
            });
            for (s = this.pushStack("", "find", t), e = 0, n = this.length; n > e; e++) if (i = s.length, 
            te.find(t, this[e], s), e > 0) for (r = i; s.length > r; r++) for (o = 0; i > o; o++) if (s[o] === s[r]) {
                s.splice(r--, 1);
                break;
            }
            return s;
        },
        has: function(t) {
            var e, n = te(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++) if (te.contains(this, n[e])) return !0;
            });
        },
        not: function(t) {
            return this.pushStack(h(this, t, !1), "not", t);
        },
        filter: function(t) {
            return this.pushStack(h(this, t, !0), "filter", t);
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? Be.test(t) ? te(t, this.context).index(this[0]) >= 0 : te.filter(t, this).length > 0 : this.filter(t).length > 0);
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = Be.test(t) || "string" != typeof t ? te(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType; ) {
                if (s ? s.index(n) > -1 : te.find.matchesSelector(n, t)) {
                    o.push(n);
                    break;
                }
                n = n.parentNode;
            }
            return o = o.length > 1 ? te.unique(o) : o, this.pushStack(o, "closest", t);
        },
        index: function(t) {
            return t ? "string" == typeof t ? te.inArray(this[0], te(t)) : te.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            var n = "string" == typeof t ? te(t, e) : te.makeArray(t && t.nodeType ? [ t ] : t), i = te.merge(this.get(), n);
            return this.pushStack(te.unique(i));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), te.fn.andSelf = te.fn.addBack, te.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return te.dir(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return te.dir(t, "parentNode", n);
        },
        next: function(t) {
            return c(t, "nextSibling");
        },
        prev: function(t) {
            return c(t, "previousSibling");
        },
        nextAll: function(t) {
            return te.dir(t, "nextSibling");
        },
        prevAll: function(t) {
            return te.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return te.dir(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return te.dir(t, "previousSibling", n);
        },
        siblings: function(t) {
            return te.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return te.sibling(t.firstChild);
        },
        contents: function(t) {
            return te.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : te.merge([], t.childNodes);
        }
    }, function(t, e) {
        te.fn[t] = function(n, i) {
            var r = te.map(this, e, n);
            return He.test(t) || (i = n), i && "string" == typeof i && (r = te.filter(i, r)), 
            r = this.length > 1 && !Re[t] ? te.unique(r) : r, this.length > 1 && Fe.test(t) && (r = r.reverse()), 
            this.pushStack(r, t, G.call(arguments).join(","));
        };
    }), te.extend({
        filter: function(t, e, n) {
            return n && (t = ":not(" + t + ")"), 1 === e.length ? te.find.matchesSelector(e[0], t) ? [ e[0] ] : [] : te.find.matches(t, e);
        },
        dir: function(t, n, i) {
            for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !te(o).is(i)); ) 1 === o.nodeType && r.push(o), 
            o = o[n];
            return r;
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        }
    });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ie = / jQuery\d+="(?:null|\d+)"/g, qe = /^\s+/, ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, We = /<([\w:]+)/, Ve = /<tbody/i, Ue = /<|&#?\w+;/, Xe = /<(?:script|style|link)/i, Qe = /<(?:script|object|embed|option|style)/i, Ge = RegExp("<(?:" + Pe + ")[\\s/>]", "i"), Je = /^(?:checkbox|radio)$/, Ye = /checked\s*(?:[^=]|=\s*.checked.)/i, Ke = /\/(java|ecma)script/i, Ze = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, tn = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, en = f(z), nn = en.appendChild(z.createElement("div")), rn = function(t) {
        return t;
    };
    tn.optgroup = tn.option, tn.tbody = tn.tfoot = tn.colgroup = tn.caption = tn.thead, 
    tn.th = tn.td, te.support.htmlSerialize || (tn._default = [ 1, "X<div>", "</div>" ], 
    tn.param = [ 1, "X<object>", "</object>" ], rn = function(t) {
        return t.replace(/<param([^>]*)>/gi, function(t, e, n) {
            var i = e.match(/name=["']([^"']*)["']/i);
            return i ? i[1].length ? "<param" + e + ">" : "<param" + e.replace(i[0], "name='_" + n + "'") + ">" : "<param name='_" + n + "' " + e + ">";
        });
    }), te.fn.extend({
        text: function(t) {
            return te.access(this, function(t) {
                return t === e ? te.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(t));
            }, null, t, arguments.length);
        },
        wrapAll: function(t) {
            if (te.isFunction(t)) return this.each(function(e) {
                te(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = te(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                    return t;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(t) {
            return te.isFunction(t) ? this.each(function(e) {
                te(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = te(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = te.isFunction(t);
            return this.each(function(n) {
                te(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                te.nodeName(this, "body") || te(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(t) {
                u(this) || this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(t) {
                u(this) || this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        remove: function(t, e) {
            for (var n, i = 0; null != (n = this[i]); i++) (!t || te.filter(t, [ n ]).length) && (e || 1 !== n.nodeType || (te.cleanData(n.getElementsByTagName("*")), 
            te.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) for (1 === t.nodeType && te.cleanData(t.getElementsByTagName("*")); t.firstChild; ) t.removeChild(t.firstChild);
            return this;
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return te.clone(this, t, e);
            });
        },
        html: function(t) {
            return te.access(this, function(t) {
                var n = this[0] || {}, i = 0, r = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Ie, "") : e;
                if (!("string" != typeof t || Xe.test(t) || !te.support.htmlSerialize && Ge.test(t) || !te.support.leadingWhitespace && qe.test(t) || tn[(We.exec(t) || [ "", "" ])[1].toLowerCase()])) {
                    t = t.replace(ze, "<$1></$2>");
                    try {
                        for (;r > i; i++) n = this[i] || {}, 1 === n.nodeType && (te.cleanData(n.getElementsByTagName("*")), 
                        n.innerHTML = t);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function(t) {
            var n = this, i = te.isFunction(t);
            return i || "string" == typeof t || (t = te(t).detach()), this.each(function(r) {
                var o = this.nextSibling, s = this.parentNode, a = i ? t.call(this, r, this) : t;
                return u(this) ? (n[r] = te(a).clone()[0], e) : (te(this).remove(), o ? te(o).before(a) : te(s).append(a), 
                e);
            }), this;
        },
        detach: function(t) {
            return this.remove(t, !0);
        },
        domManip: function(t, n, i) {
            t = [].concat.apply([], t);
            var r, o, s, a, l = 0, u = t[0], c = [], h = this.length;
            if (!te.support.checkClone && h > 1 && "string" == typeof u && Ye.test(u)) return this.each(function() {
                te(this).domManip(t, n, i);
            });
            if (te.isFunction(u)) return this.each(function(r) {
                var o = te(this);
                t[0] = u.call(this, r, n ? o.html() : e), o.domManip(t, n, i);
            });
            if (this[0]) {
                if (r = te.buildFragment(t, this, c), s = r.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), 
                o) for (n = n && te.nodeName(o, "tr"), a = r.cacheable || h - 1; h > l; l++) i.call(n && te.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === a ? s : te.clone(s, !0, !0));
                s = o = null, c.length && te.each(c, function(t, e) {
                    e.src ? te.ajax ? te.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : te.error("no ajax") : te.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Ze, "")), 
                    e.parentNode && e.parentNode.removeChild(e);
                });
            }
            return this;
        }
    }), te.buildFragment = function(t, n, i) {
        var r, o, s, a = t[0];
        return n = n || z, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === t.length && "string" == typeof a && 512 > a.length && n === z && "<" === a.charAt(0)) || Qe.test(a) || !te.support.checkClone && Ye.test(a) || !te.support.html5Clone && Ge.test(a) || (o = !0, 
        r = te.fragments[a], s = r !== e), r || (r = n.createDocumentFragment(), te.clean(t, n, r, i), 
        o && (te.fragments[a] = s && r)), {
            fragment: r,
            cacheable: o
        };
    }, te.fragments = {}, te.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        te.fn[t] = function(n) {
            var i, r = 0, o = [], s = te(n), a = s.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[e](this[0]), 
            this;
            for (;a > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), te(s[r])[e](i), o = o.concat(i);
            return this.pushStack(o, t, s.selector);
        };
    }), te.extend({
        clone: function(t, e, n) {
            var i, r, o, s;
            if (te.support.html5Clone || te.isXMLDoc(t) || !Ge.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (nn.innerHTML = t.outerHTML, 
            nn.removeChild(s = nn.firstChild)), !(te.support.noCloneEvent && te.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || te.isXMLDoc(t))) for (g(t, s), 
            i = m(t), r = m(s), o = 0; i[o]; ++o) r[o] && g(i[o], r[o]);
            if (e && (p(t, s), n)) for (i = m(t), r = m(s), o = 0; i[o]; ++o) p(i[o], r[o]);
            return i = r = null, s;
        },
        clean: function(t, n, i, r) {
            var o, s, a, l, u, c, h, d, p, g, m, y = n === z && en, b = [];
            for (n && n.createDocumentFragment !== e || (n = z), o = 0; null != (a = t[o]); o++) if ("number" == typeof a && (a += ""), 
            a) {
                if ("string" == typeof a) if (Ue.test(a)) {
                    for (y = y || f(n), h = n.createElement("div"), y.appendChild(h), a = a.replace(ze, "<$1></$2>"), 
                    l = (We.exec(a) || [ "", "" ])[1].toLowerCase(), u = tn[l] || tn._default, c = u[0], 
                    h.innerHTML = u[1] + rn(a) + u[2]; c--; ) h = h.lastChild;
                    if (!te.support.tbody) for (d = Ve.test(a), p = "table" !== l || d ? "<table>" !== u[1] || d ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes, 
                    s = p.length - 1; s >= 0; --s) te.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
                    !te.support.leadingWhitespace && qe.test(a) && h.insertBefore(n.createTextNode(qe.exec(a)[0]), h.firstChild), 
                    a = h.childNodes, h.parentNode.removeChild(h);
                } else a = n.createTextNode(a);
                a.nodeType ? b.push(a) : te.merge(b, a);
            }
            if (h && (a = h = y = null), !te.support.appendChecked) for (o = 0; null != (a = b[o]); o++) te.nodeName(a, "input") ? v(a) : a.getElementsByTagName !== e && te.grep(a.getElementsByTagName("input"), v);
            if (i) for (g = function(t) {
                return !t.type || Ke.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : i.appendChild(t) : e;
            }, o = 0; null != (a = b[o]); o++) te.nodeName(a, "script") && g(a) || (i.appendChild(a), 
            a.getElementsByTagName !== e && (m = te.grep(te.merge([], a.getElementsByTagName("script")), g), 
            b.splice.apply(b, [ o + 1, 0 ].concat(m)), o += m.length));
            return b;
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = te.expando, l = te.cache, u = te.support.deleteExpando, c = te.event.special; null != (r = t[s]); s++) if ((e || te.acceptData(r)) && (i = r[a], 
            n = i && l[i])) {
                if (n.events) for (o in n.events) c[o] ? te.event.remove(r, o) : te.removeEvent(r, o, n.handle);
                l[i] && (delete l[i], u ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, 
                re.push(i));
            }
        }
    });
    var on, sn, an, ln = /alpha\([^)]*\)/i, un = /opacity=([^)]*)/, cn = /^(top|right|bottom|left)$/, hn = /^(none|table(?!-c[ea]).+)/, fn = /^margin/, dn = RegExp("^(" + ee + ")(.*)$", "i"), pn = RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), gn = RegExp("^([-+])=(" + ee + ")", "i"), mn = {
        BODY: "block"
    }, vn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, yn = {
        letterSpacing: 0,
        fontWeight: 400
    }, bn = [ "Top", "Right", "Bottom", "Left" ], xn = [ "Webkit", "O", "Moz", "ms" ];
    te.fn.extend({
        css: function(t, n) {
            return te.access(this, function(t, n, i) {
                return i !== e ? te.style(t, n, i) : te.css(t, n);
            }, t, n, arguments.length > 1);
        },
        show: function() {
            return x(this, !0);
        },
        hide: function() {
            return x(this);
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : b(this)) ? te(this).show() : te(this).hide();
            });
        }
    }), te.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = on(t, "opacity");
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
            "float": te.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, i, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, a, l = te.camelCase(n), u = t.style;
                if (n = te.cssProps[l] || (te.cssProps[l] = y(u, l)), a = te.cssHooks[n] || te.cssHooks[l], 
                i === e) return a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : u[n];
                if (s = typeof i, "string" === s && (o = gn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(te.css(t, n)), 
                s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || te.cssNumber[l] || (i += "px"), 
                a && "set" in a && (i = a.set(t, i, r)) === e))) try {
                    u[n] = i;
                } catch (c) {}
            }
        },
        css: function(t, n, i, r) {
            var o, s, a, l = te.camelCase(n);
            return n = te.cssProps[l] || (te.cssProps[l] = y(t.style, l)), a = te.cssHooks[n] || te.cssHooks[l], 
            a && "get" in a && (o = a.get(t, !0, r)), o === e && (o = on(t, n)), "normal" === o && n in yn && (o = yn[n]), 
            i || r !== e ? (s = parseFloat(o), i || te.isNumeric(s) ? s || 0 : o) : o;
        },
        swap: function(t, e, n) {
            var i, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            i = n.call(t);
            for (r in e) t.style[r] = o[r];
            return i;
        }
    }), t.getComputedStyle ? on = function(e, n) {
        var i, r, o, s, a = t.getComputedStyle(e, null), l = e.style;
        return a && (i = a.getPropertyValue(n) || a[n], "" !== i || te.contains(e.ownerDocument, e) || (i = te.style(e, n)), 
        pn.test(i) && fn.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, 
        i = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), i;
    } : z.documentElement.currentStyle && (on = function(t, e) {
        var n, i, r = t.currentStyle && t.currentStyle[e], o = t.style;
        return null == r && o && o[e] && (r = o[e]), pn.test(r) && !cn.test(e) && (n = o.left, 
        i = t.runtimeStyle && t.runtimeStyle.left, i && (t.runtimeStyle.left = t.currentStyle.left), 
        o.left = "fontSize" === e ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (t.runtimeStyle.left = i)), 
        "" === r ? "auto" : r;
    }), te.each([ "height", "width" ], function(t, n) {
        te.cssHooks[n] = {
            get: function(t, i, r) {
                return i ? 0 === t.offsetWidth && hn.test(on(t, "display")) ? te.swap(t, vn, function() {
                    return k(t, n, r);
                }) : k(t, n, r) : e;
            },
            set: function(t, e, i) {
                return w(t, e, i ? C(t, n, i, te.support.boxSizing && "border-box" === te.css(t, "boxSizing")) : 0);
            }
        };
    }), te.support.opacity || (te.cssHooks.opacity = {
        get: function(t, e) {
            return un.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
        },
        set: function(t, e) {
            var n = t.style, i = t.currentStyle, r = te.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = i && i.filter || n.filter || "";
            n.zoom = 1, e >= 1 && "" === te.trim(o.replace(ln, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            i && !i.filter) || (n.filter = ln.test(o) ? o.replace(ln, r) : o + " " + r);
        }
    }), te(function() {
        te.support.reliableMarginRight || (te.cssHooks.marginRight = {
            get: function(t, n) {
                return te.swap(t, {
                    display: "inline-block"
                }, function() {
                    return n ? on(t, "marginRight") : e;
                });
            }
        }), !te.support.pixelPosition && te.fn.position && te.each([ "top", "left" ], function(t, e) {
            te.cssHooks[e] = {
                get: function(t, n) {
                    if (n) {
                        var i = on(t, e);
                        return pn.test(i) ? te(t).position()[e] + "px" : i;
                    }
                }
            };
        });
    }), te.expr && te.expr.filters && (te.expr.filters.hidden = function(t) {
        return 0 === t.offsetWidth && 0 === t.offsetHeight || !te.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || on(t, "display"));
    }, te.expr.filters.visible = function(t) {
        return !te.expr.filters.hidden(t);
    }), te.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        te.cssHooks[t + e] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [ n ], o = {};
                for (i = 0; 4 > i; i++) o[t + bn[i] + e] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, fn.test(t) || (te.cssHooks[t + e].set = w);
    });
    var wn = /%20/g, Cn = /\[\]$/, kn = /\r?\n/g, Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Sn = /^(?:select|textarea)/i;
    te.fn.extend({
        serialize: function() {
            return te.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? te.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Sn.test(this.nodeName) || Tn.test(this.type));
            }).map(function(t, e) {
                var n = te(this).val();
                return null == n ? null : te.isArray(n) ? te.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(kn, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(kn, "\r\n")
                };
            }).get();
        }
    }), te.param = function(t, n) {
        var i, r = [], o = function(t, e) {
            e = te.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (n === e && (n = te.ajaxSettings && te.ajaxSettings.traditional), te.isArray(t) || t.jquery && !te.isPlainObject(t)) te.each(t, function() {
            o(this.name, this.value);
        }); else for (i in t) S(i, t[i], n, o);
        return r.join("&").replace(wn, "+");
    };
    var En, _n, Nn = te.now(), $n = /#.*$/, jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Dn = /^(?:GET|HEAD)$/, Mn = /^\/\//, Ln = /\?/, Hn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Fn = /([?&])_=[^&]*/, On = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bn = te.fn.load, Rn = {}, Pn = {}, In = [ "*/" ] + [ "*" ];
    try {
        _n = W.href;
    } catch (qn) {
        _n = z.createElement("a"), _n.href = "", _n = _n.href;
    }
    En = On.exec(_n.toLowerCase()) || [], te.fn.load = function(t, n, i) {
        if ("string" != typeof t && Bn) return Bn.apply(this, arguments);
        if (!this.length) return this;
        var r, o, s, a = this, l = t.indexOf(" ");
        return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), te.isFunction(n) ? (i = n, 
        n = e) : n && "object" == typeof n && (o = "POST"), te.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: n,
            complete: function(t, e) {
                i && a.each(i, s || [ t.responseText, e, t ]);
            }
        }).done(function(t) {
            s = arguments, a.html(r ? te("<div>").append(t.replace(Hn, "")).find(r) : t);
        }), this;
    }, te.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
        te.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), te.each([ "get", "post" ], function(t, n) {
        te[n] = function(t, i, r, o) {
            return te.isFunction(i) && (o = o || r, r = i, i = e), te.ajax({
                type: n,
                url: t,
                data: i,
                success: r,
                dataType: o
            });
        };
    }), te.extend({
        getScript: function(t, n) {
            return te.get(t, e, n, "script");
        },
        getJSON: function(t, e, n) {
            return te.get(t, e, n, "json");
        },
        ajaxSetup: function(t, e) {
            return e ? N(t, te.ajaxSettings) : (e = t, t = te.ajaxSettings), N(t, e), t;
        },
        ajaxSettings: {
            url: _n,
            isLocal: An.test(En[1]),
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
                "*": In
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
                "* text": t.String,
                "text html": !0,
                "text json": te.parseJSON,
                "text xml": te.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: E(Rn),
        ajaxTransport: E(Pn),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var u, h, y, b, w, k = n;
                2 !== x && (x = 2, l && clearTimeout(l), a = e, o = s || "", C.readyState = t > 0 ? 4 : 0, 
                i && (b = $(f, C, i)), t >= 200 && 300 > t || 304 === t ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), 
                w && (te.lastModified[r] = w), w = C.getResponseHeader("Etag"), w && (te.etag[r] = w)), 
                304 === t ? (k = "notmodified", u = !0) : (u = j(f, b), k = u.state, h = u.data, 
                y = u.error, u = !y)) : (y = k, (!k || t) && (k = "error", 0 > t && (t = 0))), C.status = t, 
                C.statusText = (n || k) + "", u ? g.resolveWith(d, [ h, k, C ]) : g.rejectWith(d, [ C, k, y ]), 
                C.statusCode(v), v = e, c && p.trigger("ajax" + (u ? "Success" : "Error"), [ C, f, u ? h : y ]), 
                m.fireWith(d, [ C, k ]), c && (p.trigger("ajaxComplete", [ C, f ]), --te.active || te.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var r, o, s, a, l, u, c, h, f = te.ajaxSetup({}, n), d = f.context || f, p = d !== f && (d.nodeType || d instanceof te) ? te(d) : te.event, g = te.Deferred(), m = te.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                setRequestHeader: function(t, e) {
                    if (!x) {
                        var n = t.toLowerCase();
                        t = b[n] = b[n] || t, y[t] = e;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null;
                },
                getResponseHeader: function(t) {
                    var n;
                    if (2 === x) {
                        if (!s) for (s = {}; n = jn.exec(o); ) s[n[1].toLowerCase()] = n[2];
                        n = s[t.toLowerCase()];
                    }
                    return n === e ? null : n;
                },
                overrideMimeType: function(t) {
                    return x || (f.mimeType = t), this;
                },
                abort: function(t) {
                    return t = t || w, a && a.abort(t), i(0, t), this;
                }
            };
            if (g.promise(C), C.success = C.done, C.error = C.fail, C.complete = m.add, C.statusCode = function(t) {
                if (t) {
                    var e;
                    if (2 > x) for (e in t) v[e] = [ v[e], t[e] ]; else e = t[C.status], C.always(e);
                }
                return this;
            }, f.url = ((t || f.url || _n) + "").replace($n, "").replace(Mn, En[1] + "//"), 
            f.dataTypes = te.trim(f.dataType || "*").toLowerCase().split(ie), null == f.crossDomain && (u = On.exec(f.url.toLowerCase()), 
            f.crossDomain = !(!u || u[1] === En[1] && u[2] === En[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (En[3] || ("http:" === En[1] ? 80 : 443)))), 
            f.data && f.processData && "string" != typeof f.data && (f.data = te.param(f.data, f.traditional)), 
            _(Rn, f, n, C), 2 === x) return C;
            if (c = f.global, f.type = f.type.toUpperCase(), f.hasContent = !Dn.test(f.type), 
            c && 0 === te.active++ && te.event.trigger("ajaxStart"), !f.hasContent && (f.data && (f.url += (Ln.test(f.url) ? "&" : "?") + f.data, 
            delete f.data), r = f.url, f.cache === !1)) {
                var k = Nn++, T = f.url.replace(Fn, "$1_=" + k);
                f.url = T + (T === f.url ? (Ln.test(f.url) ? "&" : "?") + "_=" + k : "");
            }
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), 
            f.ifModified && (r = r || f.url, te.lastModified[r] && C.setRequestHeader("If-Modified-Since", te.lastModified[r]), 
            te.etag[r] && C.setRequestHeader("If-None-Match", te.etag[r])), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + In + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) C.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (f.beforeSend.call(d, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) C[h](f[h]);
            if (a = _(Pn, f, n, C)) {
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
    var zn = [], Wn = /\?/, Vn = /(=)\?(?=&|$)|\?\?/, Un = te.now();
    te.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = zn.pop() || te.expando + "_" + Un++;
            return this[t] = !0, t;
        }
    }), te.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, l = n.data, u = n.url, c = n.jsonp !== !1, h = c && Vn.test(u), f = c && !h && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(l);
        return "jsonp" === n.dataTypes[0] || h || f ? (o = n.jsonpCallback = te.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        s = t[o], h ? n.url = u.replace(Vn, "$1" + o) : f ? n.data = l.replace(Vn, "$1" + o) : c && (n.url += (Wn.test(u) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return a || te.error(o + " was not called"), a[0];
        }, n.dataTypes[0] = "json", t[o] = function() {
            a = arguments;
        }, r.always(function() {
            t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, zn.push(o)), a && te.isFunction(s) && s(a[0]), 
            a = s = e;
        }), "script") : e;
    }), te.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(t) {
                return te.globalEval(t), t;
            }
        }
    }), te.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
    }), te.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
            return {
                send: function(r, o) {
                    n = z.createElement("script"), n.async = "async", t.scriptCharset && (n.charset = t.scriptCharset), 
                    n.src = t.url, n.onload = n.onreadystatechange = function(t, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        i && n.parentNode && i.removeChild(n), n = e, r || o(200, "success"));
                    }, i.insertBefore(n, i.firstChild);
                },
                abort: function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var Xn, Qn = t.ActiveXObject ? function() {
        for (var t in Xn) Xn[t](0, 1);
    } : !1, Gn = 0;
    te.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && A() || D();
    } : A, function(t) {
        te.extend(te.support, {
            ajax: !!t,
            cors: !!t && "withCredentials" in t
        });
    }(te.ajaxSettings.xhr()), te.support.ajax && te.ajaxTransport(function(n) {
        if (!n.crossDomain || te.support.cors) {
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
                    l.send(n.hasContent && n.data || null), i = function(t, r) {
                        var a, u, c, h, f;
                        try {
                            if (i && (r || 4 === l.readyState)) if (i = e, s && (l.onreadystatechange = te.noop, 
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
                    te(t).unload(Qn)), Xn[s] = i), l.onreadystatechange = i) : i();
                },
                abort: function() {
                    i && i(0, 1);
                }
            };
        }
    });
    var Jn, Yn, Kn = /^(?:toggle|show|hide)$/, Zn = RegExp("^(?:([-+])=|)(" + ee + ")([a-z%]*)$", "i"), ti = /queueHooks$/, ei = [ O ], ni = {
        "*": [ function(t, e) {
            var n, i, r = this.createTween(t, e), o = Zn.exec(e), s = r.cur(), a = +s || 0, l = 1, u = 20;
            if (o) {
                if (n = +o[2], i = o[3] || (te.cssNumber[t] ? "" : "px"), "px" !== i && a) {
                    a = te.css(r.elem, t, !0) || n || 1;
                    do l = l || ".5", a /= l, te.style(r.elem, t, a + i); while (l !== (l = r.cur() / s) && 1 !== l && --u);
                }
                r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n;
            }
            return r;
        } ]
    };
    te.Animation = te.extend(H, {
        tweener: function(t, e) {
            te.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ni[n] = ni[n] || [], ni[n].unshift(e);
        },
        prefilter: function(t, e) {
            e ? ei.unshift(t) : ei.push(t);
        }
    }), te.Tween = B, B.prototype = {
        constructor: B,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (te.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = B.propHooks[this.prop];
            return t && t.get ? t.get(this) : B.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = B.propHooks[this.prop];
            return this.pos = e = this.options.duration ? te.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = te.css(t.elem, t.prop, !1, ""), 
                e && "auto" !== e ? e : 0) : t.elem[t.prop];
            },
            set: function(t) {
                te.fx.step[t.prop] ? te.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[te.cssProps[t.prop]] || te.cssHooks[t.prop]) ? te.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, te.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = te.fn[e];
        te.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r);
        };
    }), te.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i);
        },
        animate: function(t, e, n, i) {
            var r = te.isEmptyObject(t), o = te.speed(e, n, i), s = function() {
                var e = H(this, te.extend({}, t), o);
                r && e.stop(!0);
            };
            return r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(t, n, i) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(i);
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, n = null != t && t + "queueHooks", o = te.timers, s = te._data(this);
                if (n) s[n] && s[n].stop && r(s[n]); else for (n in s) s[n] && s[n].stop && ti.test(n) && r(s[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), 
                e = !1, o.splice(n, 1));
                (e || !i) && te.dequeue(this, t);
            });
        }
    }), te.each({
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
    }, function(t, e) {
        te.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i);
        };
    }), te.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? te.extend({}, t) : {
            complete: n || !n && e || te.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !te.isFunction(e) && e
        };
        return i.duration = te.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in te.fx.speeds ? te.fx.speeds[i.duration] : te.fx.speeds._default, 
        (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            te.isFunction(i.old) && i.old.call(this), i.queue && te.dequeue(this, i.queue);
        }, i;
    }, te.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        }
    }, te.timers = [], te.fx = B.prototype.init, te.fx.tick = function() {
        for (var t, e = te.timers, n = 0; e.length > n; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || te.fx.stop();
    }, te.fx.timer = function(t) {
        t() && te.timers.push(t) && !Yn && (Yn = setInterval(te.fx.tick, te.fx.interval));
    }, te.fx.interval = 13, te.fx.stop = function() {
        clearInterval(Yn), Yn = null;
    }, te.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, te.fx.step = {}, te.expr && te.expr.filters && (te.expr.filters.animated = function(t) {
        return te.grep(te.timers, function(e) {
            return t === e.elem;
        }).length;
    });
    var ii = /^(?:body|html)$/i;
    te.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            te.offset.setOffset(this, t, e);
        });
        var n, i, r, o, s, a, l, u = {
            top: 0,
            left: 0
        }, c = this[0], h = c && c.ownerDocument;
        if (h) return (i = h.body) === c ? te.offset.bodyOffset(c) : (n = h.documentElement, 
        te.contains(n, c) ? (c.getBoundingClientRect !== e && (u = c.getBoundingClientRect()), 
        r = P(h), o = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, 
        a = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
            top: u.top + a - o,
            left: u.left + l - s
        }) : u);
    }, te.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop, n = t.offsetLeft;
            return te.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(te.css(t, "marginTop")) || 0, 
            n += parseFloat(te.css(t, "marginLeft")) || 0), {
                top: e,
                left: n
            };
        },
        setOffset: function(t, e, n) {
            var i = te.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var r, o, s = te(t), a = s.offset(), l = te.css(t, "top"), u = te.css(t, "left"), c = ("absolute" === i || "fixed" === i) && te.inArray("auto", [ l, u ]) > -1, h = {}, f = {};
            c ? (f = s.position(), r = f.top, o = f.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), 
            te.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + r), 
            null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : s.css(h);
        }
    }, te.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === te.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), ii.test(t[0].nodeName) || (n = t.offset()), n.top += parseFloat(te.css(t[0], "borderTopWidth")) || 0, 
                n.left += parseFloat(te.css(t[0], "borderLeftWidth")) || 0), {
                    top: e.top - n.top - (parseFloat(te.css(i, "marginTop")) || 0),
                    left: e.left - n.left - (parseFloat(te.css(i, "marginLeft")) || 0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || z.body; t && !ii.test(t.nodeName) && "static" === te.css(t, "position"); ) t = t.offsetParent;
                return t || z.body;
            });
        }
    }), te.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        te.fn[t] = function(r) {
            return te.access(this, function(t, r, o) {
                var s = P(t);
                return o === e ? s ? n in s ? s[n] : s.document.documentElement[r] : t[r] : (s ? s.scrollTo(i ? te(s).scrollLeft() : o, i ? o : te(s).scrollTop()) : t[r] = o, 
                e);
            }, t, r, arguments.length, null);
        };
    }), te.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        te.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, r) {
            te.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r), a = i || (r === !0 || o === !0 ? "margin" : "border");
                return te.access(this, function(n, i, r) {
                    var o;
                    return te.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? te.css(n, i, r, a) : te.style(n, i, r, a);
                }, n, s ? r : e, s, null);
            };
        });
    }), function() {
        var t, e, n, i, r = te.fn.toggle, o = /(?:^|\s)hover(\.\S+|)\b/, s = function(t) {
            return te.event.special.hover ? t : t.replace(o, "mouseenter$1 mouseleave$1");
        };
        te.uaMatch = function(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            };
        }, t = te.uaMatch(V.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t.version), 
        e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), te.browser = e, te.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n);
            }
            te.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, 
            t.sub = this.sub, t.fn.init = function(n, i) {
                return i && i instanceof te && !(i instanceof t) && (i = t(i)), te.fn.init.call(this, n, i, e);
            }, t.fn.init.prototype = t.fn;
            var e = t(z);
            return t;
        }, te.fn.toggle = function(t, e) {
            if (!te.isFunction(t) || !te.isFunction(e)) return r.apply(this, arguments);
            var n = arguments, i = t.guid || te.guid++, o = 0, s = function(e) {
                var i = (te._data(this, "lastToggle" + t.guid) || 0) % o;
                return te._data(this, "lastToggle" + t.guid, i + 1), e.preventDefault(), n[i].apply(this, arguments) || !1;
            };
            for (s.guid = i; n.length > o; ) n[o++].guid = i;
            return this.click(s);
        }, n = te.event.add, te.event.add = function(t, e, i, r, o) {
            e && (e = s(e)), n.call(this, t, e, i, r, o);
        }, i = te.event.remove, te.event.remove = function(t, e, n, r, o) {
            e && (e = s(e)), i.call(this, t, e, n, r, o);
        }, te.attrFn = {};
    }(), t.jQuery = t.$ = te, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return te;
    });
})(window), function() {
    var t = this, e = t._, n = {}, i = Array.prototype, r = Object.prototype, o = Function.prototype, s = i.push, a = i.slice, l = i.concat, u = (i.unshift, 
    r.toString), c = r.hasOwnProperty, h = i.forEach, f = i.map, d = i.reduce, p = i.reduceRight, g = i.filter, m = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf, x = Array.isArray, w = Object.keys, C = o.bind, k = function(t) {
        return t instanceof k ? t : this instanceof k ? (this._wrapped = t, void 0) : new k(t);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), 
    exports._ = k) : t._ = k, k.VERSION = "1.4.2";
    var T = k.each = k.forEach = function(t, e, i) {
        if (null != t) if (h && t.forEach === h) t.forEach(e, i); else if (t.length === +t.length) {
            for (var r = 0, o = t.length; o > r; r++) if (e.call(i, t[r], r, t) === n) return;
        } else for (var s in t) if (k.has(t, s) && e.call(i, t[s], s, t) === n) return;
    };
    k.map = k.collect = function(t, e, n) {
        var i = [];
        return null == t ? i : f && t.map === f ? t.map(e, n) : (T(t, function(t, r, o) {
            i[i.length] = e.call(n, t, r, o);
        }), i);
    }, k.reduce = k.foldl = k.inject = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return i && (e = k.bind(e, i)), 
        r ? t.reduce(e, n) : t.reduce(e);
        if (T(t, function(t, o, s) {
            r ? n = e.call(i, n, t, o, s) : (n = t, r = !0);
        }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, k.reduceRight = k.foldr = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []), p && t.reduceRight === p) return i && (e = k.bind(e, i)), 
        arguments.length > 2 ? t.reduceRight(e, n) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var s = k.keys(t);
            o = s.length;
        }
        if (T(t, function(a, l, u) {
            l = s ? s[--o] : --o, r ? n = e.call(i, n, t[l], l, u) : (n = t[l], r = !0);
        }), !r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, k.find = k.detect = function(t, e, n) {
        var i;
        return S(t, function(t, r, o) {
            return e.call(n, t, r, o) ? (i = t, !0) : void 0;
        }), i;
    }, k.filter = k.select = function(t, e, n) {
        var i = [];
        return null == t ? i : g && t.filter === g ? t.filter(e, n) : (T(t, function(t, r, o) {
            e.call(n, t, r, o) && (i[i.length] = t);
        }), i);
    }, k.reject = function(t, e, n) {
        return k.filter(t, function(t, i, r) {
            return !e.call(n, t, i, r);
        }, n);
    }, k.every = k.all = function(t, e, i) {
        e || (e = k.identity);
        var r = !0;
        return null == t ? r : m && t.every === m ? t.every(e, i) : (T(t, function(t, o, s) {
            return (r = r && e.call(i, t, o, s)) ? void 0 : n;
        }), !!r);
    };
    var S = k.some = k.any = function(t, e, i) {
        e || (e = k.identity);
        var r = !1;
        return null == t ? r : v && t.some === v ? t.some(e, i) : (T(t, function(t, o, s) {
            return r || (r = e.call(i, t, o, s)) ? n : void 0;
        }), !!r);
    };
    k.contains = k.include = function(t, e) {
        var n = !1;
        return null == t ? n : y && t.indexOf === y ? -1 != t.indexOf(e) : n = S(t, function(t) {
            return t === e;
        });
    }, k.invoke = function(t, e) {
        var n = a.call(arguments, 2);
        return k.map(t, function(t) {
            return (k.isFunction(e) ? e : t[e]).apply(t, n);
        });
    }, k.pluck = function(t, e) {
        return k.map(t, function(t) {
            return t[e];
        });
    }, k.where = function(t, e) {
        return k.isEmpty(e) ? [] : k.filter(t, function(t) {
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0;
        });
    }, k.max = function(t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1/0;
        var i = {
            computed: -1/0
        };
        return T(t, function(t, r, o) {
            var s = e ? e.call(n, t, r, o) : t;
            s >= i.computed && (i = {
                value: t,
                computed: s
            });
        }), i.value;
    }, k.min = function(t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && 65535 > t.length) return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1/0;
        var i = {
            computed: 1/0
        };
        return T(t, function(t, r, o) {
            var s = e ? e.call(n, t, r, o) : t;
            i.computed > s && (i = {
                value: t,
                computed: s
            });
        }), i.value;
    }, k.shuffle = function(t) {
        var e, n = 0, i = [];
        return T(t, function(t) {
            e = k.random(n++), i[n - 1] = i[e], i[e] = t;
        }), i;
    };
    var E = function(t) {
        return k.isFunction(t) ? t : function(e) {
            return e[t];
        };
    };
    k.sortBy = function(t, e, n) {
        var i = E(e);
        return k.pluck(k.map(t, function(t, e, r) {
            return {
                value: t,
                index: e,
                criteria: i.call(n, t, e, r)
            };
        }).sort(function(t, e) {
            var n = t.criteria, i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1;
            }
            return t.index < e.index ? -1 : 1;
        }), "value");
    };
    var _ = function(t, e, n, i) {
        var r = {}, o = E(e);
        return T(t, function(e, s) {
            var a = o.call(n, e, s, t);
            i(r, a, e);
        }), r;
    };
    k.groupBy = function(t, e, n) {
        return _(t, e, n, function(t, e, n) {
            (k.has(t, e) ? t[e] : t[e] = []).push(n);
        });
    }, k.countBy = function(t, e, n) {
        return _(t, e, n, function(t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++;
        });
    }, k.sortedIndex = function(t, e, n, i) {
        n = null == n ? k.identity : E(n);
        for (var r = n.call(i, e), o = 0, s = t.length; s > o; ) {
            var a = o + s >>> 1;
            r > n.call(i, t[a]) ? o = a + 1 : s = a;
        }
        return o;
    }, k.toArray = function(t) {
        return t ? t.length === +t.length ? a.call(t) : k.values(t) : [];
    }, k.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length;
    }, k.first = k.head = k.take = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e);
    }, k.initial = function(t, e, n) {
        return a.call(t, 0, t.length - (null == e || n ? 1 : e));
    }, k.last = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0));
    }, k.rest = k.tail = k.drop = function(t, e, n) {
        return a.call(t, null == e || n ? 1 : e);
    }, k.compact = function(t) {
        return k.filter(t, function(t) {
            return !!t;
        });
    };
    var N = function(t, e, n) {
        return T(t, function(t) {
            k.isArray(t) ? e ? s.apply(n, t) : N(t, e, n) : n.push(t);
        }), n;
    };
    k.flatten = function(t, e) {
        return N(t, e, []);
    }, k.without = function(t) {
        return k.difference(t, a.call(arguments, 1));
    }, k.uniq = k.unique = function(t, e, n, i) {
        var r = n ? k.map(t, n, i) : t, o = [], s = [];
        return T(r, function(n, i) {
            (e ? i && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), o.push(t[i]));
        }), o;
    }, k.union = function() {
        return k.uniq(l.apply(i, arguments));
    }, k.intersection = function(t) {
        var e = a.call(arguments, 1);
        return k.filter(k.uniq(t), function(t) {
            return k.every(e, function(e) {
                return k.indexOf(e, t) >= 0;
            });
        });
    }, k.difference = function(t) {
        var e = l.apply(i, a.call(arguments, 1));
        return k.filter(t, function(t) {
            return !k.contains(e, t);
        });
    }, k.zip = function() {
        for (var t = a.call(arguments), e = k.max(k.pluck(t, "length")), n = Array(e), i = 0; e > i; i++) n[i] = k.pluck(t, "" + i);
        return n;
    }, k.object = function(t, e) {
        if (null == t) return {};
        for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n;
    }, k.indexOf = function(t, e, n) {
        if (null == t) return -1;
        var i = 0, r = t.length;
        if (n) {
            if ("number" != typeof n) return i = k.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n;
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (;r > i; i++) if (t[i] === e) return i;
        return -1;
    }, k.lastIndexOf = function(t, e, n) {
        if (null == t) return -1;
        var i = null != n;
        if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var r = i ? n : t.length; r--; ) if (t[r] === e) return r;
        return -1;
    }, k.range = function(t, e, n) {
        1 >= arguments.length && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, o = Array(i); i > r; ) o[r++] = t, 
        t += n;
        return o;
    };
    var $ = function() {};
    k.bind = function(t, e) {
        var n, i;
        if (t.bind === C && C) return C.apply(t, a.call(arguments, 1));
        if (!k.isFunction(t)) throw new TypeError();
        return i = a.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            $.prototype = t.prototype;
            var r = new $(), o = t.apply(r, i.concat(a.call(arguments)));
            return Object(o) === o ? o : r;
        };
    }, k.bindAll = function(t) {
        var e = a.call(arguments, 1);
        return 0 == e.length && (e = k.functions(t)), T(e, function(e) {
            t[e] = k.bind(t[e], t);
        }), t;
    }, k.memoize = function(t, e) {
        var n = {};
        return e || (e = k.identity), function() {
            var i = e.apply(this, arguments);
            return k.has(n, i) ? n[i] : n[i] = t.apply(this, arguments);
        };
    }, k.delay = function(t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n);
        }, e);
    }, k.defer = function(t) {
        return k.delay.apply(k, [ t, 1 ].concat(a.call(arguments, 1)));
    }, k.throttle = function(t, e) {
        var n, i, r, o, s = 0, a = function() {
            s = new Date(), r = null, o = t.apply(n, i);
        };
        return function() {
            var l = new Date(), u = e - (l - s);
            return n = this, i = arguments, 0 >= u ? (clearTimeout(r), s = l, o = t.apply(n, i)) : r || (r = setTimeout(a, u)), 
            o;
        };
    }, k.debounce = function(t, e, n) {
        var i, r;
        return function() {
            var o = this, s = arguments, a = function() {
                i = null, n || (r = t.apply(o, s));
            }, l = n && !i;
            return clearTimeout(i), i = setTimeout(a, e), l && (r = t.apply(o, s)), r;
        };
    }, k.once = function(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
        };
    }, k.wrap = function(t, e) {
        return function() {
            var n = [ t ];
            return s.apply(n, arguments), e.apply(this, n);
        };
    }, k.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [ t[n].apply(this, e) ];
            return e[0];
        };
    }, k.after = function(t, e) {
        return 0 >= t ? e() : function() {
            return 1 > --t ? e.apply(this, arguments) : void 0;
        };
    }, k.keys = w || function(t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var n in t) k.has(t, n) && (e[e.length] = n);
        return e;
    }, k.values = function(t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push(t[n]);
        return e;
    }, k.pairs = function(t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push([ n, t[n] ]);
        return e;
    }, k.invert = function(t) {
        var e = {};
        for (var n in t) k.has(t, n) && (e[t[n]] = n);
        return e;
    }, k.functions = k.methods = function(t) {
        var e = [];
        for (var n in t) k.isFunction(t[n]) && e.push(n);
        return e.sort();
    }, k.extend = function(t) {
        return T(a.call(arguments, 1), function(e) {
            for (var n in e) t[n] = e[n];
        }), t;
    }, k.pick = function(t) {
        var e = {}, n = l.apply(i, a.call(arguments, 1));
        return T(n, function(n) {
            n in t && (e[n] = t[n]);
        }), e;
    }, k.omit = function(t) {
        var e = {}, n = l.apply(i, a.call(arguments, 1));
        for (var r in t) k.contains(n, r) || (e[r] = t[r]);
        return e;
    }, k.defaults = function(t) {
        return T(a.call(arguments, 1), function(e) {
            for (var n in e) null == t[n] && (t[n] = e[n]);
        }), t;
    }, k.clone = function(t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t;
    }, k.tap = function(t, e) {
        return e(t), t;
    };
    var j = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var r = u.call(t);
        if (r != u.call(e)) return !1;
        switch (r) {
          case "[object String]":
            return t == e + "";

          case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;

          case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = n.length; o--; ) if (n[o] == t) return i[o] == e;
        n.push(t), i.push(e);
        var s = 0, a = !0;
        if ("[object Array]" == r) {
            if (s = t.length, a = s == e.length) for (;s-- && (a = j(t[s], e[s], n, i)); ) ;
        } else {
            var l = t.constructor, c = e.constructor;
            if (l !== c && !(k.isFunction(l) && l instanceof l && k.isFunction(c) && c instanceof c)) return !1;
            for (var h in t) if (k.has(t, h) && (s++, !(a = k.has(e, h) && j(t[h], e[h], n, i)))) break;
            if (a) {
                for (h in e) if (k.has(e, h) && !s--) break;
                a = !s;
            }
        }
        return n.pop(), i.pop(), a;
    };
    k.isEqual = function(t, e) {
        return j(t, e, [], []);
    }, k.isEmpty = function(t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t) if (k.has(t, e)) return !1;
        return !0;
    }, k.isElement = function(t) {
        return !(!t || 1 !== t.nodeType);
    }, k.isArray = x || function(t) {
        return "[object Array]" == u.call(t);
    }, k.isObject = function(t) {
        return t === Object(t);
    }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(t) {
        k["is" + t] = function(e) {
            return u.call(e) == "[object " + t + "]";
        };
    }), k.isArguments(arguments) || (k.isArguments = function(t) {
        return !(!t || !k.has(t, "callee"));
    }), k.isFunction = function(t) {
        return "function" == typeof t;
    }, k.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t));
    }, k.isNaN = function(t) {
        return k.isNumber(t) && t != +t;
    }, k.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t);
    }, k.isNull = function(t) {
        return null === t;
    }, k.isUndefined = function(t) {
        return void 0 === t;
    }, k.has = function(t, e) {
        return c.call(t, e);
    }, k.noConflict = function() {
        return t._ = e, this;
    }, k.identity = function(t) {
        return t;
    }, k.times = function(t, e, n) {
        for (var i = 0; t > i; i++) e.call(n, i);
    }, k.random = function(t, e) {
        return null == e && (e = t, t = 0), t + (0 | Math.random() * (e - t + 1));
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    A.unescape = k.invert(A.escape);
    var D = {
        escape: RegExp("[" + k.keys(A.escape).join("") + "]", "g"),
        unescape: RegExp("(" + k.keys(A.unescape).join("|") + ")", "g")
    };
    k.each([ "escape", "unescape" ], function(t) {
        k[t] = function(e) {
            return null == e ? "" : ("" + e).replace(D[t], function(e) {
                return A[t][e];
            });
        };
    }), k.result = function(t, e) {
        if (null == t) return null;
        var n = t[e];
        return k.isFunction(n) ? n.call(t) : n;
    }, k.mixin = function(t) {
        T(k.functions(t), function(e) {
            var n = k[e] = t[e];
            k.prototype[e] = function() {
                var t = [ this._wrapped ];
                return s.apply(t, arguments), O.call(this, n.apply(k, t));
            };
        });
    };
    var M = 0;
    k.uniqueId = function(t) {
        var e = M++;
        return t ? t + e : e;
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/, H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(t, e, n) {
        n = k.defaults({}, n, k.templateSettings);
        var i = RegExp([ (n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            o += t.slice(r, a).replace(F, function(t) {
                return "\\" + H[t];
            }), o += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s ? "';\n" + s + "\n__p+='" : "", 
            r = a + e.length;
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = Function(n.variable || "obj", "_", o);
        } catch (a) {
            throw a.source = o, a;
        }
        if (e) return s(e, k);
        var l = function(t) {
            return s.call(this, t, k);
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l;
    }, k.chain = function(t) {
        return k(t).chain();
    };
    var O = function(t) {
        return this._chain ? k(t).chain() : t;
    };
    k.mixin(k), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
        var e = i[t];
        k.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], 
            O.call(this, n);
        };
    }), T([ "concat", "join", "slice" ], function(t) {
        var e = i[t];
        k.prototype[t] = function() {
            return O.call(this, e.apply(this._wrapped, arguments));
        };
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), !function(t, e) {
    "use strict";
    var n = e.prototype.trim, i = e.prototype.trimRight, r = e.prototype.trimLeft, o = function(t) {
        return 1 * t || 0;
    }, s = function(t, e) {
        if (1 > e) return "";
        for (var n = ""; e > 0; ) 1 & e && (n += t), e >>= 1, t += t;
        return n;
    }, a = [].slice, l = function(t) {
        return null == t ? "\\s" : t.source ? t.source : "[" + d.escapeRegExp(t) + "]";
    }, u = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    }, c = {};
    for (var h in u) c[u[h]] = h;
    var f = function() {
        function t(t) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
        }
        var n = s, i = function() {
            return i.cache.hasOwnProperty(arguments[0]) || (i.cache[arguments[0]] = i.parse(arguments[0])), 
            i.format.call(null, i.cache[arguments[0]], arguments);
        };
        return i.format = function(i, r) {
            var o, s, a, l, u, c, h, d = 1, p = i.length, g = "", m = [];
            for (s = 0; p > s; s++) if (g = t(i[s]), "string" === g) m.push(i[s]); else if ("array" === g) {
                if (l = i[s], l[2]) for (o = r[d], a = 0; l[2].length > a; a++) {
                    if (!o.hasOwnProperty(l[2][a])) throw Error(f('[_.sprintf] property "%s" does not exist', l[2][a]));
                    o = o[l[2][a]];
                } else o = l[1] ? r[l[1]] : r[d++];
                if (/[^s]/.test(l[8]) && "number" != t(o)) throw Error(f("[_.sprintf] expecting number but found %s", t(o)));
                switch (l[8]) {
                  case "b":
                    o = o.toString(2);
                    break;

                  case "c":
                    o = e.fromCharCode(o);
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
                    o = (o = e(o)) && l[7] ? o.substring(0, l[7]) : o;
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
                h = l[6] - e(o).length, u = l[6] ? n(c, h) : "", m.push(l[5] ? o + u : u + o);
            }
            return m.join("");
        }, i.cache = {}, i.parse = function(t) {
            for (var e = t, n = [], i = [], r = 0; e; ) {
                if (null !== (n = /^[^\x25]+/.exec(e))) i.push(n[0]); else if (null !== (n = /^\x25{2}/.exec(e))) i.push("%"); else {
                    if (null === (n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))) throw Error("[_.sprintf] huh?");
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
                e = e.substring(n[0].length);
            }
            return i;
        }, i;
    }(), d = {
        VERSION: "2.2.0rc",
        isBlank: function(t) {
            return null == t && (t = ""), /^\s*$/.test(t);
        },
        stripTags: function(t) {
            return null == t ? "" : e(t).replace(/<\/?[^>]+>/g, "");
        },
        capitalize: function(t) {
            return t = null == t ? "" : e(t), t.charAt(0).toUpperCase() + t.slice(1);
        },
        chop: function(t, n) {
            return null == t ? [] : (t = e(t), n = ~~n, n > 0 ? t.match(RegExp(".{1," + n + "}", "g")) : [ t ]);
        },
        clean: function(t) {
            return d.strip(t).replace(/\s+/g, " ");
        },
        count: function(t, n) {
            return null == t || null == n ? 0 : e(t).split(n).length - 1;
        },
        chars: function(t) {
            return null == t ? [] : e(t).split("");
        },
        swapCase: function(t) {
            return null == t ? "" : e(t).replace(/\S/g, function(t) {
                return t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase();
            });
        },
        escapeHTML: function(t) {
            return null == t ? "" : e(t).replace(/[&<>"']/g, function(t) {
                return "&" + c[t] + ";";
            });
        },
        unescapeHTML: function(t) {
            return null == t ? "" : e(t).replace(/\&([^;]+);/g, function(t, n) {
                var i;
                return n in u ? u[n] : (i = n.match(/^#x([\da-fA-F]+)$/)) ? e.fromCharCode(parseInt(i[1], 16)) : (i = n.match(/^#(\d+)$/)) ? e.fromCharCode(~~i[1]) : t;
            });
        },
        escapeRegExp: function(t) {
            return null == t ? "" : e(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        },
        splice: function(t, e, n, i) {
            var r = d.chars(t);
            return r.splice(~~e, ~~n, i), r.join("");
        },
        insert: function(t, e, n) {
            return d.splice(t, e, 0, n);
        },
        include: function(t, n) {
            return "" === n ? !0 : null == t ? !1 : -1 !== e(t).indexOf(n);
        },
        join: function() {
            var t = a.call(arguments), e = t.shift();
            return null == e && (e = ""), t.join(e);
        },
        lines: function(t) {
            return null == t ? [] : e(t).split("\n");
        },
        reverse: function(t) {
            return d.chars(t).reverse().join("");
        },
        startsWith: function(t, n) {
            return "" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(0, n.length) === n);
        },
        endsWith: function(t, n) {
            return "" === n ? !0 : null == t || null == n ? !1 : (t = e(t), n = e(n), t.length >= n.length && t.slice(t.length - n.length) === n);
        },
        succ: function(t) {
            return null == t ? "" : (t = e(t), t.slice(0, -1) + e.fromCharCode(t.charCodeAt(t.length - 1) + 1));
        },
        titleize: function(t) {
            return null == t ? "" : e(t).replace(/(?:^|\s)\S/g, function(t) {
                return t.toUpperCase();
            });
        },
        camelize: function(t) {
            return d.trim(t).replace(/[-_\s]+(.)?/g, function(t, e) {
                return e.toUpperCase();
            });
        },
        underscored: function(t) {
            return d.trim(t).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
        },
        dasherize: function(t) {
            return d.trim(t).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
        },
        classify: function(t) {
            return d.titleize(e(t).replace(/_/g, " ")).replace(/\s/g, "");
        },
        humanize: function(t) {
            return d.capitalize(d.underscored(t).replace(/_id$/, "").replace(/_/g, " "));
        },
        trim: function(t, i) {
            return null == t ? "" : !i && n ? n.call(t) : (i = l(i), e(t).replace(RegExp("^" + i + "+|" + i + "+$", "g"), ""));
        },
        ltrim: function(t, n) {
            return null == t ? "" : !n && r ? r.call(t) : (n = l(n), e(t).replace(RegExp("^" + n + "+"), ""));
        },
        rtrim: function(t, n) {
            return null == t ? "" : !n && i ? i.call(t) : (n = l(n), e(t).replace(RegExp(n + "+$"), ""));
        },
        truncate: function(t, n, i) {
            return null == t ? "" : (t = e(t), i = i || "...", n = ~~n, t.length > n ? t.slice(0, n) + i : t);
        },
        prune: function(t, n, i) {
            if (null == t) return "";
            if (t = e(t), n = ~~n, i = null != i ? e(i) : "...", n >= t.length) return t;
            var r = function(t) {
                return t.toUpperCase() !== t.toLowerCase() ? "A" : " ";
            }, o = t.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, r);
            return o = o.slice(o.length - 2).match(/\w\w/) ? o.replace(/\s*\S+$/, "") : d.rtrim(o.slice(0, o.length - 1)), 
            (o + i).length > t.length ? t : t.slice(0, o.length) + i;
        },
        words: function(t, e) {
            return d.isBlank(t) ? [] : d.trim(t, e).split(e || /\s+/);
        },
        pad: function(t, n, i, r) {
            t = null == t ? "" : e(t), n = ~~n;
            var o = 0;
            switch (i ? i.length > 1 && (i = i.charAt(0)) : i = " ", r) {
              case "right":
                return o = n - t.length, t + s(i, o);

              case "both":
                return o = n - t.length, s(i, Math.ceil(o / 2)) + t + s(i, Math.floor(o / 2));

              default:
                return o = n - t.length, s(i, o) + t;
            }
        },
        lpad: function(t, e, n) {
            return d.pad(t, e, n);
        },
        rpad: function(t, e, n) {
            return d.pad(t, e, n, "right");
        },
        lrpad: function(t, e, n) {
            return d.pad(t, e, n, "both");
        },
        sprintf: f,
        vsprintf: function(t, e) {
            return e.unshift(t), f.apply(null, e);
        },
        toNumber: function(t, n) {
            if (null == t || "" == t) return 0;
            t = e(t);
            var i = o(o(t).toFixed(~~n));
            return 0 !== i || t.match(/^0+$/) ? i : Number.NaN;
        },
        numberFormat: function(t, e, n, i) {
            if (isNaN(t) || null == t) return "";
            t = t.toFixed(~~e), i = i || ",";
            var r = t.split("."), o = r[0], s = r[1] ? (n || ".") + r[1] : "";
            return o.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + i) + s;
        },
        strRight: function(t, n) {
            if (null == t) return "";
            t = e(t), n = null != n ? e(n) : n;
            var i = n ? t.indexOf(n) : -1;
            return ~i ? t.slice(i + n.length, t.length) : t;
        },
        strRightBack: function(t, n) {
            if (null == t) return "";
            t = e(t), n = null != n ? e(n) : n;
            var i = n ? t.lastIndexOf(n) : -1;
            return ~i ? t.slice(i + n.length, t.length) : t;
        },
        strLeft: function(t, n) {
            if (null == t) return "";
            t = e(t), n = null != n ? e(n) : n;
            var i = n ? t.indexOf(n) : -1;
            return ~i ? t.slice(0, i) : t;
        },
        strLeftBack: function(t, e) {
            if (null == t) return "";
            t += "", e = null != e ? "" + e : e;
            var n = t.lastIndexOf(e);
            return ~n ? t.slice(0, n) : t;
        },
        toSentence: function(t, e, n, i) {
            e = e || ", ", n = n || " and ";
            var r = t.slice(), o = r.pop();
            return t.length > 2 && i && (n = d.rtrim(e) + n), r.length ? r.join(e) + n + o : o;
        },
        toSentenceSerial: function() {
            var t = a.call(arguments);
            return t[3] = !0, d.toSentence.apply(d, t);
        },
        slugify: function(t) {
            if (null == t) return "";
            var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź", i = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", r = RegExp(l(n), "g");
            return t = e(t).toLowerCase().replace(r, function(t) {
                var e = n.indexOf(t);
                return i.charAt(e) || "-";
            }), d.dasherize(t.replace(/[^\w\s-]/g, ""));
        },
        surround: function(t, e) {
            return [ e, t, e ].join("");
        },
        quote: function(t) {
            return d.surround(t, '"');
        },
        exports: function() {
            var t = {};
            for (var e in this) this.hasOwnProperty(e) && !e.match(/^(?:include|contains|reverse)$/) && (t[e] = this[e]);
            return t;
        },
        repeat: function(t, n, i) {
            if (null == t) return "";
            if (n = ~~n, null == i) return s(e(t), n);
            for (var r = []; n > 0; r[--n] = t) ;
            return r.join(i);
        },
        levenshtein: function(t, n) {
            if (null == t && null == n) return 0;
            if (null == t) return e(n).length;
            if (null == n) return e(t).length;
            t = e(t), n = e(n);
            for (var i, r, o = [], s = 0; n.length >= s; s++) for (var a = 0; t.length >= a; a++) r = s && a ? t.charAt(a - 1) === n.charAt(s - 1) ? i : Math.min(o[a], o[a - 1], i) + 1 : s + a, 
            i = o[a], o[a] = r;
            return o.pop();
        }
    };
    d.strip = d.trim, d.lstrip = d.ltrim, d.rstrip = d.rtrim, d.center = d.lrpad, d.rjust = d.lpad, 
    d.ljust = d.rpad, d.contains = d.include, d.q = d.quote, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = d), 
    exports._s = d) : "function" == typeof define && define.amd ? define("underscore.string", [], function() {
        return d;
    }) : (t._ = t._ || {}, t._.string = t._.str = d);
}(this, String), function() {
    var t, e = this, n = e.Backbone, i = Array.prototype, r = i.push, o = i.slice, s = i.splice;
    t = "undefined" != typeof exports ? exports : e.Backbone = {}, t.VERSION = "0.9.2";
    var a = e._;
    a || "undefined" == typeof require || (a = require("underscore")), t.$ = e.jQuery || e.Zepto || e.ender, 
    t.noConflict = function() {
        return e.Backbone = n, this;
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var l = /\s+/, u = t.Events = {
        on: function(t, e, n) {
            var i, r, o;
            if (!e) return this;
            for (t = t.split(l), i = this._callbacks || (this._callbacks = {}); r = t.shift(); ) o = i[r] || (i[r] = []), 
            o.push(e, n);
            return this;
        },
        off: function(t, e, n) {
            var i, r, o, s;
            if (!(r = this._callbacks)) return this;
            if (!(t || e || n)) return delete this._callbacks, this;
            for (t = t ? t.split(l) : a.keys(r); i = t.shift(); ) if ((o = r[i]) && (e || n)) for (s = o.length - 2; s >= 0; s -= 2) e && o[s] !== e || n && o[s + 1] !== n || o.splice(s, 2); else delete r[i];
            return this;
        },
        trigger: function(t) {
            var e, n, i, r, o, s, a, u;
            if (!(n = this._callbacks)) return this;
            for (u = [], t = t.split(l), r = 1, o = arguments.length; o > r; r++) u[r - 1] = arguments[r];
            for (;e = t.shift(); ) {
                if ((a = n.all) && (a = a.slice()), (i = n[e]) && (i = i.slice()), i) for (r = 0, 
                o = i.length; o > r; r += 2) i[r].apply(i[r + 1] || this, u);
                if (a) for (s = [ e ].concat(u), r = 0, o = a.length; o > r; r += 2) a[r].apply(a[r + 1] || this, s);
            }
            return this;
        }
    };
    u.bind = u.on, u.unbind = u.off;
    var c = t.Model = function(t, e) {
        var n, i = t || {};
        e && e.collection && (this.collection = e.collection), e && e.parse && (i = this.parse(i)), 
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
            return t.sync.apply(this, arguments);
        },
        get: function(t) {
            return this.attributes[t];
        },
        escape: function(t) {
            var e;
            if (e = this._escapedAttributes[t]) return e;
            var n = this.get(t);
            return this._escapedAttributes[t] = a.escape(null == n ? "" : "" + n);
        },
        has: function(t) {
            return null != this.get(t);
        },
        set: function(t, e) {
            var n, i, r;
            if (null == t) return this;
            a.isObject(t) || (i = t, (t = {})[i] = e, e = arguments[2]);
            var o = e && e.silent, s = e && e.unset;
            if (t instanceof c && (t = t.attributes), s) for (n in t) t[n] = void 0;
            if (!this._validate(t, e)) return !1;
            this.idAttribute in t && (this.id = t[this.idAttribute]);
            var l = this._changing, u = this.attributes, h = this._escapedAttributes, f = this._previousAttributes || {};
            for (n in t) r = t[n], (!a.isEqual(u[n], r) || s && a.has(u, n)) && (delete h[n], 
            this._changes[n] = !0), s ? delete u[n] : u[n] = r, a.isEqual(f[n], r) && a.has(u, n) === a.has(f, n) ? (delete this.changed[n], 
            delete this._pending[n], l || delete this._changes[n]) : (this.changed[n] = r, o || (this._pending[n] = !0)), 
            l && a.isEqual(u[n], l[n]) && delete this._changes[n];
            return o || this.change(e), this;
        },
        unset: function(t, e) {
            return e = a.extend({}, e, {
                unset: !0
            }), this.set(t, null, e);
        },
        clear: function(t) {
            return t = a.extend({}, t, {
                unset: !0
            }), this.set(a.clone(this.attributes), t);
        },
        fetch: function(t) {
            t = t ? a.clone(t) : {};
            var e = this, n = t.success;
            return t.success = function(i, r, o) {
                return e.set(e.parse(i, o), t) ? (n && n(e, i, t), void 0) : !1;
            }, this.sync("read", this, t);
        },
        save: function(t, e) {
            var n, i, r;
            if (null == t || a.isObject(t) || (n = t, (t = {})[n] = e, e = arguments[2]), e = e ? a.clone(e) : {}, 
            e.wait) {
                if (!this._validate(t, e)) return !1;
                i = a.clone(this.attributes);
            }
            var o = a.extend({}, e, {
                silent: !0
            });
            if (t && !this.set(t, e.wait ? o : e)) return !1;
            if (!t && !this._validate(null, e)) return !1;
            var s = this, l = e.success;
            e.success = function(n, i, o) {
                r = !0;
                var u = s.parse(n, o);
                return e.wait && (u = a.extend(t || {}, u)), s.set(u, e) ? (l && l(s, n, e), void 0) : !1;
            };
            var u = this.sync(this.isNew() ? "create" : "update", this, e);
            return !r && e.wait && (this.clear(o), this.set(i, o)), u;
        },
        destroy: function(t) {
            t = t ? a.clone(t) : {};
            var e = this, n = t.success, i = function() {
                e.trigger("destroy", e, e.collection, t);
            };
            if (t.success = function(r) {
                (t.wait || e.isNew()) && i(), n && n(e, r, t);
            }, this.isNew()) return t.success(), !1;
            var r = this.sync("delete", this, t);
            return t.wait || i(), r;
        },
        url: function() {
            var t = a.result(this, "urlRoot") || a.result(this.collection, "url") || $();
            return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(t) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        change: function(t) {
            var e = this._changing, n = this._changing = {};
            for (var i in this._changes) this._pending[i] = !0;
            var r = this._changes;
            this._changes = {};
            var o = [];
            for (var i in r) n[i] = this.get(i), o.push(i);
            for (var s = 0, l = o.length; l > s; s++) this.trigger("change:" + o[s], this, n[o[s]], t);
            if (e) return this;
            for (;!a.isEmpty(this._pending); ) {
                this._pending = {}, this.trigger("change", this, t);
                for (var i in this.changed) this._pending[i] || this._changes[i] || delete this.changed[i];
                this._previousAttributes = a.clone(this.attributes);
            }
            return this._changing = null, this;
        },
        hasChanged: function(t) {
            return null == t ? !a.isEmpty(this.changed) : a.has(this.changed, t);
        },
        changedAttributes: function(t) {
            if (!t) return this.hasChanged() ? a.clone(this.changed) : !1;
            var e, n = !1, i = this._previousAttributes;
            for (var r in t) a.isEqual(i[r], e = t[r]) || ((n || (n = {}))[r] = e);
            return n;
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function() {
            return a.clone(this._previousAttributes);
        },
        isValid: function(t) {
            return !this.validate || !this.validate(this.attributes, t);
        },
        _validate: function(t, e) {
            if (e && e.silent || !this.validate) return !0;
            t = a.extend({}, this.attributes, t);
            var n = this.validate(t, e);
            return n ? (e && e.error && e.error(this, n, e), this.trigger("error", this, n, e), 
            !1) : !0;
        }
    });
    var h = t.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), 
        this._reset(), this.initialize.apply(this, arguments), t && (e.parse && (t = this.parse(t)), 
        this.reset(t, {
            silent: !0,
            parse: e.parse
        }));
    };
    a.extend(h.prototype, u, {
        model: c,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t);
            });
        },
        sync: function() {
            return t.sync.apply(this, arguments);
        },
        add: function(t, e) {
            var n, i, o, l, u, c = e && e.at;
            for (t = a.isArray(t) ? t.slice() : [ t ], n = 0, o = t.length; o > n; n++) if (!(t[n] = this._prepareModel(t[n], e))) throw Error("Can't add an invalid model to a collection");
            for (n = t.length - 1; n >= 0; n--) l = t[n], u = null != l.id && this._byId[l.id], 
            u || this._byCid[l.cid] ? (e && e.merge && u && u.set(l, e), t.splice(n, 1)) : (l.on("all", this._onModelEvent, this), 
            this._byCid[l.cid] = l, null != l.id && (this._byId[l.id] = l));
            if (this.length += t.length, i = [ null != c ? c : this.models.length, 0 ], r.apply(i, t), 
            s.apply(this.models, i), this.comparator && null == c && this.sort({
                silent: !0
            }), e && e.silent) return this;
            for (;l = t.shift(); ) l.trigger("add", l, this, e);
            return this;
        },
        remove: function(t, e) {
            var n, i, r, o;
            for (e || (e = {}), t = a.isArray(t) ? t.slice() : [ t ], n = 0, i = t.length; i > n; n++) o = this.getByCid(t[n]) || this.get(t[n]), 
            o && (delete this._byId[o.id], delete this._byCid[o.cid], r = this.indexOf(o), this.models.splice(r, 1), 
            this.length--, e.silent || (e.index = r, o.trigger("remove", o, this, e)), this._removeReference(o));
            return this;
        },
        push: function(t, e) {
            return t = this._prepareModel(t, e), this.add(t, e), t;
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e;
        },
        unshift: function(t, e) {
            return t = this._prepareModel(t, e), this.add(t, a.extend({
                at: 0
            }, e)), t;
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t), e;
        },
        slice: function(t, e) {
            return this.models.slice(t, e);
        },
        get: function(t) {
            return null == t ? void 0 : this._byId[null != t.id ? t.id : t];
        },
        getByCid: function(t) {
            return t && this._byCid[t.cid || t];
        },
        at: function(t) {
            return this.models[t];
        },
        where: function(t) {
            return a.isEmpty(t) ? [] : this.filter(function(e) {
                for (var n in t) if (t[n] !== e.get(n)) return !1;
                return !0;
            });
        },
        sort: function(t) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), 
            t && t.silent || this.trigger("reset", this, t), this;
        },
        pluck: function(t) {
            return a.invoke(this.models, "get", t);
        },
        reset: function(t, e) {
            for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]);
            return this._reset(), t && this.add(t, a.extend({
                silent: !0
            }, e)), e && e.silent || this.trigger("reset", this, e), this;
        },
        fetch: function(t) {
            t = t ? a.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
            var e = this, n = t.success;
            return t.success = function(i, r, o) {
                e[t.add ? "add" : "reset"](e.parse(i, o), t), n && n(e, i, t);
            }, this.sync("read", this, t);
        },
        create: function(t, e) {
            var n = this;
            if (e = e ? a.clone(e) : {}, t = this._prepareModel(t, e), !t) return !1;
            e.wait || n.add(t, e);
            var i = e.success;
            return e.success = function(t, e, r) {
                r.wait && n.add(t, r), i && i(t, e, r);
            }, t.save(null, e), t;
        },
        parse: function(t) {
            return t;
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
        _prepareModel: function(t, e) {
            if (t instanceof c) return t.collection || (t.collection = this), t;
            e || (e = {}), e.collection = this;
            var n = new this.model(t, e);
            return n._validate(n.attributes, e) ? n : !1;
        },
        _removeReference: function(t) {
            this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(t, e, n, i) {
            ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), 
            e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], 
            null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments));
        }
    });
    var f = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty" ];
    a.each(f, function(t) {
        h.prototype[t] = function() {
            var e = o.call(arguments);
            return e.unshift(this.models), a[t].apply(a, e);
        };
    });
    var d = [ "groupBy", "countBy", "sortBy" ];
    a.each(d, function(t) {
        h.prototype[t] = function(e, n) {
            var i = a.isFunction(e) ? e : function(t) {
                return t.get(e);
            };
            return a[t](this.models, i, n);
        };
    });
    var p = t.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, g = /\((.*?)\)/g, m = /:\w+/g, v = /\*\w+/g, y = /[-{}[\]+?.,\\^$|#\s]/g;
    a.extend(p.prototype, u, {
        initialize: function() {},
        route: function(e, n, i) {
            return a.isRegExp(e) || (e = this._routeToRegExp(e)), i || (i = this[n]), t.history.route(e, a.bind(function(r) {
                var o = this._extractParameters(e, r);
                i && i.apply(this, o), this.trigger.apply(this, [ "route:" + n ].concat(o)), t.history.trigger("route", this, n, o);
            }, this)), this;
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) for (var t, e = a.keys(this.routes); null != (t = e.pop()); ) {
                var n = this.routes[t];
                this.route(t, n, this[n]);
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(y, "\\$&").replace(g, "(?:$1)?").replace(m, "([^/]+)").replace(v, "(.*?)"), 
            RegExp("^" + t + "$");
        },
        _extractParameters: function(t, e) {
            return t.exec(e).slice(1);
        }
    });
    var b = t.History = function() {
        this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, x = /^[#\/]/, w = /^\/+|\/+$/g, C = /msie [\w.]+/, k = /\/$/;
    b.started = !1, a.extend(b.prototype, u, {
        interval: 50,
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : "";
        },
        getFragment: function(t, e) {
            if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
                t = this.location.pathname;
                var n = this.root.replace(k, "");
                t.indexOf(n) || (t = t.substr(n.length));
            } else t = this.getHash();
            return decodeURIComponent(t.replace(x, ""));
        },
        start: function(e) {
            if (b.started) throw Error("Backbone.history has already been started");
            b.started = !0, this.options = a.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment(), i = document.documentMode, r = C.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
            this.root = ("/" + this.root + "/").replace(w, "/"), r && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(n)), this._hasPushState ? t.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? t.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = n;
            var o = this.location, s = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && s && o.hash && (this.fragment = this.getHash().replace(x, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), 
            this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            t.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), 
            clearInterval(this._checkUrlInterval), b.started = !1;
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            });
        },
        checkUrl: function() {
            var t = this.getFragment();
            return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), 
            t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash()), 
            void 0);
        },
        loadUrl: function(t) {
            var e = this.fragment = this.getFragment(t), n = a.any(this.handlers, function(t) {
                return t.route.test(e) ? (t.callback(e), !0) : void 0;
            });
            return n;
        },
        navigate: function(t, e) {
            if (!b.started) return !1;
            if (e && e !== !0 || (e = {
                trigger: e
            }), t = this.getFragment(t || ""), this.fragment !== t) {
                this.fragment = t;
                var n = this.root + t;
                if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, t, e.replace));
                }
                e.trigger && this.loadUrl(t);
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e);
            } else t.hash = "#" + e;
        }
    }), t.history = new b();
    var T = t.View = function(t) {
        this.cid = a.uniqueId("view"), this._configure(t || {}), this._ensureElement(), 
        this.initialize.apply(this, arguments), this.delegateEvents();
    }, S = /^(\S+)\s*(.*)$/, E = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
    a.extend(T.prototype, u, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t);
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
        make: function(e, n, i) {
            var r = document.createElement(e);
            return n && t.$(r).attr(n), null != i && t.$(r).html(i), r;
        },
        setElement: function(e, n) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), 
            this.el = this.$el[0], n !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(t) {
            if (t || (t = a.result(this, "events"))) {
                this.undelegateEvents();
                for (var e in t) {
                    var n = t[e];
                    if (a.isFunction(n) || (n = this[t[e]]), !n) throw Error('Method "' + t[e] + '" does not exist');
                    var i = e.match(S), r = i[1], o = i[2];
                    n = a.bind(n, this), r += ".delegateEvents" + this.cid, "" === o ? this.$el.bind(r, n) : this.$el.delegate(o, r, n);
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(t) {
            this.options && (t = a.extend({}, this.options, t));
            for (var e = 0, n = E.length; n > e; e++) {
                var i = E[e];
                t[i] && (this[i] = t[i]);
            }
            this.options = t;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(a.result(this, "el"), !1); else {
                var t = a.extend({}, a.result(this, "attributes"));
                this.id && (t.id = a.result(this, "id")), this.className && (t["class"] = a.result(this, "className")), 
                this.setElement(this.make(a.result(this, "tagName"), t), !1);
            }
        }
    });
    var _ = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    t.sync = function(e, n, i) {
        var r = _[e];
        i || (i = {});
        var o = {
            type: r,
            dataType: "json"
        };
        if (i.url || (o.url = a.result(n, "url") || $()), i.data || !n || "create" !== e && "update" !== e || (o.contentType = "application/json", 
        o.data = JSON.stringify(n)), t.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", 
        o.data = o.data ? {
            model: o.data
        } : {}), t.emulateHTTP && ("PUT" === r || "DELETE" === r)) {
            o.type = "POST", t.emulateJSON && (o.data._method = r);
            var s = i.beforeSend;
            i.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", r), s ? s.apply(this, arguments) : void 0;
            };
        }
        "GET" === o.type || t.emulateJSON || (o.processData = !1);
        var l = i.success;
        i.success = function(t, e, r) {
            l && l(t, e, r), n.trigger("sync", n, t, i);
        };
        var u = i.error;
        return i.error = function(t) {
            u && u(n, t, i), n.trigger("error", n, t, i);
        }, t.ajax(a.extend(o, i));
    }, t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments);
    };
    var N = function(t, e) {
        var n, i = this;
        n = t && a.has(t, "constructor") ? t.constructor : function() {
            i.apply(this, arguments);
        }, a.extend(n, i, e);
        var r = function() {
            this.constructor = n;
        };
        return r.prototype = i.prototype, n.prototype = new r(), t && a.extend(n.prototype, t), 
        n.__super__ = i.prototype, n;
    };
    c.extend = h.extend = p.extend = T.extend = b.extend = N;
    var $ = function() {
        throw Error('A "url" property or function must be specified');
    };
}.call(this), !function(t) {
    t(function() {
        "use strict";
        t.support.transition = function() {
            var t = function() {
                var t, e = document.createElement("bootstrap"), n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (t in n) if (void 0 !== e.style[t]) return n[t];
            }();
            return t && {
                end: t
            };
        }();
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]', n = function(n) {
        t(n).on("click", e, this.close);
    };
    n.prototype.close = function(e) {
        function n() {
            i.trigger("closed").remove();
        }
        var i, r = t(this), o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), i = t(o), e && e.preventDefault(), 
        i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(e = t.Event("close")), 
        e.isDefaultPrevented() || (i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.on(t.support.transition.end, n) : n());
    }, t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this), r = i.data("alert");
            r || i.data("alert", r = new n(this)), "string" == typeof e && r[e].call(i);
        });
    }, t.fn.alert.Constructor = n, t(function() {
        t("body").on("click.alert.data-api", e, n.prototype.close);
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, n);
    };
    e.prototype.setState = function(t) {
        var e = "disabled", n = this.$element, i = n.data(), r = n.is("input") ? "val" : "html";
        t += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[t] || this.options[t]), 
        setTimeout(function() {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e);
        }, 0);
    }, e.prototype.toggle = function() {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active");
    }, t.fn.button = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("button"), o = "object" == typeof n && n;
            r || i.data("button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n);
        });
    }, t.fn.button.defaults = {
        loadingText: "loading..."
    }, t.fn.button.Constructor = e, t(function() {
        t("body").on("click.button.data-api", "[data-toggle^=button]", function(e) {
            var n = t(e.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle");
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.options = n, this.options.slide && this.slide(this.options.slide), 
        "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this));
    };
    e.prototype = {
        cycle: function(e) {
            return e || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), 
            this;
        },
        to: function(e) {
            var n = this.$element.find(".item.active"), i = n.parent().children(), r = i.index(n), o = this;
            if (!(e > i.length - 1 || 0 > e)) return this.sliding ? this.$element.one("slid", function() {
                o.to(e);
            }) : r == e ? this.pause().cycle() : this.slide(e > r ? "next" : "prev", t(i[e]));
        },
        pause: function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), 
            this.cycle()), clearInterval(this.interval), this.interval = null, this;
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next");
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev");
        },
        slide: function(e, n) {
            var i = this.$element.find(".item.active"), r = n || i[e](), o = this.interval, s = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this, u = t.Event("slide", {
                relatedTarget: r[0]
            });
            if (this.sliding = !0, o && this.pause(), r = r.length ? r : this.$element.find(".item")[a](), 
            !r.hasClass("active")) {
                if (t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), this.$element.one(t.support.transition.end, function() {
                        r.removeClass([ e, s ].join(" ")).addClass("active"), i.removeClass([ "active", s ].join(" ")), 
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
    }, t.fn.carousel = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("carousel"), o = t.extend({}, t.fn.carousel.defaults, "object" == typeof n && n), s = "string" == typeof n ? n : o.slide;
            r || i.data("carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.cycle();
        });
    }, t.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, t.fn.carousel.Constructor = e, t(function() {
        t("body").on("click.carousel.data-api", "[data-slide]", function(e) {
            var n, i = t(this), r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), o = !r.data("modal") && t.extend({}, r.data(), i.data());
            r.carousel(o), e.preventDefault();
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, n), this.options.parent && (this.$parent = t(this.options.parent)), 
        this.options.toggle && this.toggle();
    };
    e.prototype = {
        constructor: e,
        dimension: function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height";
        },
        show: function() {
            var e, n, i, r;
            if (!this.transitioning) {
                if (e = this.dimension(), n = t.camelCase([ "scroll", e ].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), 
                i && i.length) {
                    if (r = i.data("collapse"), r && r.transitioning) return;
                    i.collapse("hide"), r || i.data("collapse", null);
                }
                this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][n]);
            }
        },
        hide: function() {
            var e;
            this.transitioning || (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), 
            this.$element[e](0));
        },
        reset: function(t) {
            var e = this.dimension();
            return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), 
            this;
        },
        transition: function(e, n, i) {
            var r = this, o = function() {
                "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i);
            };
            this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), 
            t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o());
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    }, t.fn.collapse = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("collapse"), o = "object" == typeof n && n;
            r || i.data("collapse", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.collapse.defaults = {
        toggle: !0
    }, t.fn.collapse.Constructor = e, t(function() {
        t("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
            var n, i = t(this), r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(r).data("collapse") ? "toggle" : i.data();
            i[t(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(r).collapse(o);
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    function e() {
        n(t(i)).removeClass("open");
    }
    function n(e) {
        var n, i = e.attr("data-target");
        return i || (i = e.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), 
        n = t(i), n.length || (n = e.parent()), n;
    }
    var i = "[data-toggle=dropdown]", r = function(e) {
        var n = t(e).on("click.dropdown.data-api", this.toggle);
        t("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open");
        });
    };
    r.prototype = {
        constructor: r,
        toggle: function() {
            var i, r, o = t(this);
            if (!o.is(".disabled, :disabled")) return i = n(o), r = i.hasClass("open"), e(), 
            r || (i.toggleClass("open"), o.focus()), !1;
        },
        keydown: function(e) {
            var i, r, o, s, a;
            if (/(38|40|27)/.test(e.keyCode) && (i = t(this), e.preventDefault(), e.stopPropagation(), 
            !i.is(".disabled, :disabled"))) {
                if (o = n(i), s = o.hasClass("open"), !s || s && 27 == e.keyCode) return i.click();
                r = t("[role=menu] li:not(.divider) a", o), r.length && (a = r.index(r.filter(":focus")), 
                38 == e.keyCode && a > 0 && a--, 40 == e.keyCode && r.length - 1 > a && a++, ~a || (a = 0), 
                r.eq(a).focus());
            }
        }
    }, t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this), i = n.data("dropdown");
            i || n.data("dropdown", i = new r(this)), "string" == typeof e && i[e].call(n);
        });
    }, t.fn.dropdown.Constructor = r, t(function() {
        t("html").on("click.dropdown.data-api touchstart.dropdown.data-api", e), t("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation();
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", i, r.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", i + ", [role=menu]", r.prototype.keydown);
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), 
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    e.prototype = {
        constructor: e,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]();
        },
        show: function() {
            var e = this, n = t.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (t("body").addClass("modal-open"), 
            this.isShown = !0, this.escape(), this.backdrop(function() {
                var n = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), 
                n && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1).focus(), 
                e.enforceFocus(), n ? e.$element.one(t.support.transition.end, function() {
                    e.$element.trigger("shown");
                }) : e.$element.trigger("shown");
            }));
        },
        hide: function(e) {
            e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, 
            t("body").removeClass("modal-open"), this.escape(), t(document).off("focusin.modal"), 
            this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
        },
        enforceFocus: function() {
            var e = this;
            t(document).on("focusin.modal", function(t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus();
            });
        },
        escape: function() {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                27 == e.which && t.hide();
            }) : this.isShown || this.$element.off("keyup.dismiss.modal");
        },
        hideWithTransition: function() {
            var e = this, n = setTimeout(function() {
                e.$element.off(t.support.transition.end), e.hideModal();
            }, 500);
            this.$element.one(t.support.transition.end, function() {
                clearTimeout(n), e.hideModal();
            });
        },
        hideModal: function() {
            this.$element.hide().trigger("hidden"), this.backdrop();
        },
        removeBackdrop: function() {
            this.$backdrop.remove(), this.$backdrop = null;
        },
        backdrop: function(e) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && n;
                this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), 
                "static" != this.options.backdrop && this.$backdrop.click(t.proxy(this.hide, this)), 
                i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(t.support.transition.end, e) : e();
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, t.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : e && e();
        }
    }, t.fn.modal = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("modal"), o = t.extend({}, t.fn.modal.defaults, i.data(), "object" == typeof n && n);
            r || i.data("modal", r = new e(this, o)), "string" == typeof n ? r[n]() : o.show && r.show();
        });
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t(function() {
        t("body").on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
            var n = t(this), i = n.attr("href"), r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), o = r.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
            e.preventDefault(), r.modal(o).one("hide", function() {
                n.focus();
            });
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("tooltip", t, e);
    };
    e.prototype = {
        constructor: e,
        init: function(e, n, i) {
            var r, o;
            this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.enabled = !0, 
            "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != this.options.trigger && (r = "hover" == this.options.trigger ? "mouseenter" : "focus", 
            o = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), 
            this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this))), 
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(e) {
            return e = t.extend({}, t.fn[this.type].defaults, e, this.$element.data()), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e;
        },
        enter: function(e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", 
            this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show();
            }, n.options.delay.show), void 0) : n.show();
        },
        leave: function(e) {
            var n = t(e.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", 
            this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide();
            }, n.options.delay.hide), void 0) : n.hide();
        },
        show: function() {
            var t, e, n, i, r, o, s;
            if (this.hasContent() && this.enabled) {
                switch (t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), 
                o = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, 
                e = /in/.test(o), t.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(e ? this.$element : document.body), n = this.getPosition(e), i = t[0].offsetWidth, 
                r = t[0].offsetHeight, e ? o.split(" ")[1] : o) {
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
                t.css(s).addClass(o).addClass("in");
            }
        },
        setContent: function() {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
        },
        hide: function() {
            function e() {
                var e = setTimeout(function() {
                    n.off(t.support.transition.end).remove();
                }, 500);
                n.one(t.support.transition.end, function() {
                    clearTimeout(e), n.remove();
                });
            }
            var n = this.tip();
            return n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : n.remove(), 
            this;
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").removeAttr("title");
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function(e) {
            return t.extend({}, e ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            });
        },
        getTitle: function() {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title);
        },
        tip: function() {
            return this.$tip = this.$tip || t(this.options.template);
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
    }, t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("tooltip"), o = "object" == typeof n && n;
            r || i.data("tooltip", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0
    };
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e);
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e,
        setContent: function() {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content > *")[this.options.html ? "html" : "text"](n), 
            t.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-content") || ("function" == typeof n.content ? n.content.call(e[0]) : n.content);
        },
        tip: function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    }), t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("popover"), o = "object" == typeof n && n;
            r || i.data("popover", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    });
}(window.jQuery), !function(t) {
    "use strict";
    function e(e, n) {
        var i, r = t.proxy(this.process, this), o = t(e).is("body") ? t(window) : t(e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, n), this.$scrollElement = o.on("scroll.scroll-spy.data-api", r), 
        this.selector = (this.options.target || (i = t(e).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.$body = t("body"), this.refresh(), this.process();
    }
    e.prototype = {
        constructor: e,
        refresh: function() {
            var e, n = this;
            this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function() {
                var e = t(this), n = e.data("target") || e.attr("href"), i = /^#\w/.test(n) && t(n);
                return i && i.length && [ [ i.position().top, n ] ] || null;
            }).sort(function(t, e) {
                return t[0] - e[0];
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1]);
            });
        },
        process: function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
            if (e >= i) return s != (t = o.last()[0]) && this.activate(t);
            for (t = r.length; t--; ) s != o[t] && e >= r[t] && (!r[t + 1] || r[t + 1] >= e) && this.activate(o[t]);
        },
        activate: function(e) {
            var n, i;
            this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), 
            i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', 
            n = t(i).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), 
            n.trigger("activate");
        }
    }, t.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("scrollspy"), o = "object" == typeof n && n;
            r || i.data("scrollspy", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {
        offset: 10
    }, t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data());
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e);
    };
    e.prototype = {
        constructor: e,
        show: function() {
            var e, n, i, r = this.element, o = r.closest("ul:not(.dropdown-menu)"), s = r.attr("data-target");
            s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (e = o.find(".active a").last()[0], 
            i = t.Event("show", {
                relatedTarget: e
            }), r.trigger(i), i.isDefaultPrevented() || (n = t(s), this.activate(r.parent("li"), o), 
            this.activate(n, n.parent(), function() {
                r.trigger({
                    type: "shown",
                    relatedTarget: e
                });
            })));
        },
        activate: function(e, n, i) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
                e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), 
                e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i();
            }
            var o = n.find("> .active"), s = i && t.support.transition && o.hasClass("fade");
            s ? o.one(t.support.transition.end, r) : r(), o.removeClass("in");
        }
    }, t.fn.tab = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("tab");
            r || i.data("tab", r = new e(this)), "string" == typeof n && r[n]();
        });
    }, t.fn.tab.Constructor = e, t(function() {
        t("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
            e.preventDefault(), t(this).tab("show");
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, 
        this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, 
        this.updater = this.options.updater || this.updater, this.$menu = t(this.options.menu).appendTo("body"), 
        this.source = this.options.source, this.shown = !1, this.listen();
    };
    e.prototype = {
        constructor: e,
        select: function() {
            var t = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(t)).change(), this.hide();
        },
        updater: function(t) {
            return t;
        },
        show: function() {
            var e = t.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: e.top + e.height,
                left: e.left
            }), this.$menu.show(), this.shown = !0, this;
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this;
        },
        lookup: function() {
            var e;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (e = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, 
            e ? this.process(e) : this);
        },
        process: function(e) {
            var n = this;
            return e = t.grep(e, function(t) {
                return n.matcher(t);
            }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
        },
        matcher: function(t) {
            return ~t.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(t) {
            for (var e, n = [], i = [], r = []; e = t.shift(); ) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? i.push(e) : r.push(e) : n.push(e);
            return n.concat(i, r);
        },
        highlighter: function(t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(RegExp("(" + e + ")", "ig"), function(t, e) {
                return "<strong>" + e + "</strong>";
            });
        },
        render: function(e) {
            var n = this;
            return e = t(e).map(function(e, i) {
                return e = t(n.options.item).attr("data-value", i), e.find("a").html(n.highlighter(i)), 
                e[0];
            }), e.first().addClass("active"), this.$menu.html(e), this;
        },
        next: function() {
            var e = this.$menu.find(".active").removeClass("active"), n = e.next();
            n.length || (n = t(this.$menu.find("li")[0])), n.addClass("active");
        },
        prev: function() {
            var t = this.$menu.find(".active").removeClass("active"), e = t.prev();
            e.length || (e = this.$menu.find("li").last()), e.addClass("active");
        },
        listen: function() {
            this.$element.on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), 
            (t.browser.chrome || t.browser.webkit || t.browser.msie) && this.$element.on("keydown", t.proxy(this.keydown, this)), 
            this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this));
        },
        move: function(t) {
            if (this.shown) {
                switch (t.keyCode) {
                  case 9:
                  case 13:
                  case 27:
                    t.preventDefault();
                    break;

                  case 38:
                    t.preventDefault(), this.prev();
                    break;

                  case 40:
                    t.preventDefault(), this.next();
                }
                t.stopPropagation();
            }
        },
        keydown: function(e) {
            this.suppressKeyPressRepeat = !~t.inArray(e.keyCode, [ 40, 38, 9, 13, 27 ]), this.move(e);
        },
        keypress: function(t) {
            this.suppressKeyPressRepeat || this.move(t);
        },
        keyup: function(t) {
            switch (t.keyCode) {
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
            t.stopPropagation(), t.preventDefault();
        },
        blur: function() {
            var t = this;
            setTimeout(function() {
                t.hide();
            }, 150);
        },
        click: function(t) {
            t.stopPropagation(), t.preventDefault(), this.select();
        },
        mouseenter: function(e) {
            this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active");
        }
    }, t.fn.typeahead = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("typeahead"), o = "object" == typeof n && n;
            r || i.data("typeahead", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, t.fn.typeahead.Constructor = e, t(function() {
        t("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
            var n = t(this);
            n.data("typeahead") || (e.preventDefault(), n.typeahead(n.data()));
        });
    });
}(window.jQuery), !function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = t.extend({}, t.fn.affix.defaults, n), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)), 
        this.$element = t(e), this.checkPosition();
    };
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e, n = t(document).height(), i = this.$window.scrollTop(), r = this.$element.offset(), o = this.options.offset, s = o.bottom, a = o.top, l = "affix affix-top affix-bottom";
            "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top()), "function" == typeof s && (s = o.bottom()), 
            e = null != this.unpin && i + this.unpin <= r.top ? !1 : null != s && r.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1, 
            this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? r.top - i : null, 
            this.$element.removeClass(l).addClass("affix" + (e ? "-" + e : "")));
        }
    }, t.fn.affix = function(n) {
        return this.each(function() {
            var i = t(this), r = i.data("affix"), o = "object" == typeof n && n;
            r || i.data("affix", r = new e(this, o)), "string" == typeof n && r[n]();
        });
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {
        offset: 0
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this), n = e.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), 
            n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n);
        });
    });
}(window.jQuery), function(t, e, n) {
    function i(t, e) {
        var n = (t[0] || 0) - (e[0] || 0);
        return n > 0 || !n && t.length > 0 && i(t.slice(1), e.slice(1));
    }
    function r(t) {
        if (typeof t !== h) return t;
        var e = [], n = "";
        for (var i in t) n = typeof t[i] === h ? r(t[i]) : [ i, u ? encodeURI(t[i]) : t[i] ].join("="), 
        e.push(n);
        return e.join("&");
    }
    function o(t) {
        var e = [];
        for (var n in t) t[n] && e.push([ n, '="', t[n], '"' ].join(""));
        return e.join(" ");
    }
    function s(t) {
        var e = [];
        for (var n in t) e.push([ '<param name="', n, '" value="', r(t[n]), '" />' ].join(""));
        return e.join("");
    }
    function a(t) {
        var e = /string|number/.test(typeof t) ? ("" + t).split(".") : /object/.test(typeof t) ? [ t.major, t.minor ] : t || [ 0, 0 ];
        return i(g, e);
    }
    function l(e, n) {
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
            id: "ui-flash-object" + t.guid++,
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
            e.html(r), r.outerHTML = i;
        } else e.html(i);
        return e.children().get(0);
    }
    var u, c, h = "object", f = "function", d = t.browser.msie;
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
    t.fn.flash = function(e) {
        function n() {
            a = !0, o.attr("id", "ui-flash" + t.guid);
        }
        function i(e) {
            var n = t.extend(!0, {
                flashvars: {
                    swfid: o.attr("id"),
                    eventHandler: "jQuery.fn.flash.triggerHandler"
                }
            }, e);
            return delete n.disabled, delete n.module, n;
        }
        function r(t) {
            o.attr("id") || n(), o.addClass("ui-flash"), s = l(o, i(t));
        }
        var o, s, a = !1;
        return this.getFlash = function() {
            return s;
        }, "object" == typeof e && (o = this, r.call(this, e)), this;
    }, t.fn.flash.triggerHandler = function(e) {
        t("#" + e.swfid).triggerHandler(e.type, e);
    };
}(jQuery, jQuery.util, navigator.plugins["Shockwave Flash"] || window.ActiveXObject);

var saveAs = saveAs || function(t) {
    "use strict";
    var e = t.document, n = function() {
        return t.URL || t.webkitURL || t;
    }, i = t.URL || t.webkitURL || t, r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download" in r, s = function(n) {
        var i = e.createEvent("MouseEvents");
        return i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), 
        n.dispatchEvent(i);
    }, a = t.webkitRequestFileSystem, l = t.requestFileSystem || a || t.mozRequestFileSystem, u = function(e) {
        (t.setImmediate || t.setTimeout)(function() {
            throw e;
        }, 0);
    }, c = "application/octet-stream", h = 0, f = [], d = function() {
        for (var t = f.length; t--; ) {
            var e = f[t];
            "string" == typeof e ? i.revokeObjectURL(e) : e.remove();
        }
        f.length = 0;
    }, p = function(t, e, n) {
        e = [].concat(e);
        for (var i = e.length; i--; ) {
            var r = t["on" + e[i]];
            if ("function" == typeof r) try {
                r.call(t, n || t);
            } catch (o) {
                u(o);
            }
        }
    }, g = function(e, i) {
        var u, d, g, m = this, v = e.type, y = !1, b = function() {
            var t = n().createObjectURL(e);
            return f.push(t), t;
        }, x = function() {
            p(m, "writestart progress write writeend".split(" "));
        }, w = function() {
            (y || !u) && (u = b(e)), d.location.href = u, m.readyState = m.DONE, x();
        }, C = function(t) {
            return function() {
                return m.readyState !== m.DONE ? t.apply(this, arguments) : void 0;
            };
        }, k = {
            create: !0,
            exclusive: !1
        };
        return m.readyState = m.INIT, i || (i = "download"), o && (u = b(e), r.href = u, 
        r.download = i, s(r)) ? (m.readyState = m.DONE, x(), void 0) : (t.chrome && v && v !== c && (g = e.slice || e.webkitSlice, 
        e = g.call(e, 0, e.size, c), y = !0), a && "download" !== i && (i += ".download"), 
        d = v === c || a ? t : t.open(), l ? (h += e.size, l(t.TEMPORARY, h, C(function(t) {
            t.root.getDirectory("saved", k, C(function(t) {
                var n = function() {
                    t.getFile(i, k, C(function(t) {
                        t.createWriter(C(function(n) {
                            n.onwriteend = function(e) {
                                d.location.href = t.toURL(), f.push(t), m.readyState = m.DONE, p(m, "writeend", e);
                            }, n.onerror = function() {
                                var t = n.error;
                                t.code !== t.ABORT_ERR && w();
                            }, "writestart progress write abort".split(" ").forEach(function(t) {
                                n["on" + t] = m["on" + t];
                            }), n.write(e), m.abort = function() {
                                n.abort(), m.readyState = m.DONE;
                            }, m.readyState = m.WRITING;
                        }), w);
                    }), w);
                };
                t.getFile(i, {
                    create: !1
                }, C(function(t) {
                    t.remove(), n();
                }), C(function(t) {
                    t.code === t.NOT_FOUND_ERR ? n() : w();
                }));
            }), w);
        }), w), void 0) : (w(), void 0));
    }, m = g.prototype, v = function(t, e) {
        return new g(t, e);
    };
    return m.abort = function() {
        var t = this;
        t.readyState = t.DONE, p(t, "abort");
    }, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, 
    t.addEventListener("unload", d, !1), v;
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
        return _.each(this.views, function(t) {
            t.remove();
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
        var t = this, e = {
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
        this.options.type && this.flash && (t.chart = this.flash.flash({
            swf: e[this.options.type],
            width: 750,
            height: 450,
            allowScriptAccess: "always",
            flashvars: {
                dataUrl: n[this.options.type],
                debug: !0
            }
        }), t.chart.on("swfReady.flash", function() {
            log("chartStyle", t.chart.getFlash()._returnChartCSS()), StyleCenter.getInstance().setStyleSheet(new StyleSheet(t.chart.getFlash()._returnChartCSS()));
        })), t.chart && $(document).on("redrawFlash", function(e, n) {
            log("redrawFlash", n), t.chart.getFlash().parseCSS(n, !0);
        });
    },
    renderModelAndView: function() {
        var t = this, e = {
            pie: function() {
                var e = new GeneralView({
                    model: t.model
                });
                t.views.push(e);
                var n = new PieView({
                    model: t.model
                });
                t.views.push(n);
            },
            line: function() {
                var e = new GeneralView({
                    model: t.model
                });
                t.views.push(e);
                var n = new PieView({
                    model: t.model
                });
                t.views.push(n);
            },
            bar: function() {
                var e = new GeneralView({
                    model: t.model
                });
                t.views.push(e);
                var n = new BarView({
                    model: t.model
                });
                t.views.push(n);
            }
        };
        try {
            e[t.options.type](), this.config_container.fadeIn();
        } catch (n) {
            alert(n);
        }
    },
    modelChange: function(t) {
        var e = t.changedAttributes();
        log("model change:", t.styleName, e);
        var n = this;
        StyleCenter.getInstance().setStyle(t.styleName, e), e.animate && (n.chart.getFlash()._setState("setState"), 
        n.chart.getFlash()._setState("normal"));
    }
}), BarView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(t) {
            t.remove();
        }), BarView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {}
}), BaseModel = Backbone.Model.extend({}), BaseView = Backbone.View.extend({
    initialize: function() {
        var t = this.options.modelClz;
        t && (this.model = new t(this.options.modelAttributes || {})), this.options.styleName && (this.model.styleName = this.options.styleName), 
        t = null, this.defaultSetting(), this.setDefaultValue(), this.defaultAction();
    },
    defaultSetting: function() {},
    setDefaultValue: function() {
        var t = this;
        log(this.model.styleName, this.model.attributes), _.each(this.model.attributes, function(e, n) {
            var i, r, o, s = $(".containe[data-key='" + n + "'] input", t.$el);
            s.length && (i = s.attr("type"), o = t.model.get(n), "number" == i && s.val(o), 
            "radio" == i && _.each(s, function(t) {
                r = $(t), r.val() == o && r.prop("checked", !0), r = null;
            }), "range" == i && (s.val(o), s.next().text(o)), "color" == i && s.val(o), s = null);
        });
    },
    defaultAction: function() {},
    events: {
        "click input[type='radio']": "clickRadioHandler",
        "keyup input[type='number']": "changeNumberHandler",
        "change input[type='number']": "changeNumberHandler",
        "change input[type='range']": "changeNumberHandler",
        "change input[type='color']": "valueChangeHanlder"
    },
    clickRadioHandler: function(t) {
        this.valueChangeHanlder(t);
    },
    changeNumberHandler: function(t) {
        var e = $(t.target);
        e.is("input[type='range']") && e.next().text(e.val()), this.valueChangeHanlder(t);
    },
    valueChangeHanlder: function(t) {
        var e = $(t.target), n = e.closest(".containe"), i = n.data("key"), r = e.val();
        this.model.set(i, r);
    }
}), CommonModel = BaseModel.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
}), CommonView = BaseView.extend({}), GeneralView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(t) {
            t.remove();
        }), GeneralView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {
        var t = new CommonView({
            modelClz: CommonModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#common-set")
        });
        this.views.push(t), this.model.push(t.model);
        var e = new LegendView({
            modelClz: LegendModel,
            modelAttributes: StyleCenter.getInstance().getStyle("legend"),
            el: $("#legend-set")
        });
        this.views.push(e), this.model.push(e.model);
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
        var t = $("input[type='radio'][name='backgroundType-group']:checked", this.$el);
        this.switchForSimpleEnable(t);
    },
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='backgroundType-group']": "backgroundTypeGroupClickHandler"
        });
    },
    backgroundTypeGroupClickHandler: function(t) {
        var e = $(t.target);
        this.switchForSimpleEnable(e);
    },
    switchForSimpleEnable: function(t) {
        var e = this.$el.find(".for-simple"), n = e.find("input");
        "simple" == t.val() ? n.attr("disabled", !1) : n.attr("disabled", !0);
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

jQuery(function(t) {
    try {
        var e = {
            init: function() {
                this.btnEvent(), this.chartTypeSwitchModel();
            },
            btnEvent: function() {
                t("#switch").click(function(t) {
                    t.preventDefault();
                }), t("#download").click(function(t) {
                    t.preventDefault(), get_blob_builder = function() {
                        return window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                    };
                    var e = get_blob_builder(), n = new e();
                    n.append(StyleCenter.getInstance().returnCSSText()), saveAs(n.getBlob("text/plain;charset=utf-8"), "chart.css");
                });
            },
            chartTypeSwitchModel: function() {
                function e() {
                    t(".flash-container").append("<div id='flash-container' class='well hide ui-flash'>");
                }
                function n() {
                    a || u.stop().fadeIn().delay(2e3).fadeOut();
                }
                var i, r, o, s = t("#chart-type-switch-modal"), a = !1;
                s.modal();
                var l = t(".chart-types button", s), u = t(".alert", s), c = t(".cancel.btn", s), h = t(".confirm.btn", s), f = t(".modal-backdrop");
                f.click(function(t) {
                    l.hasClass("active") || t.preventDefault();
                }), t(document).on("click", ".chart-types button", function() {
                    i = t(this), l.removeClass("active"), i.addClass("active"), a = !0;
                }), c.click(function() {
                    n();
                }), h.click(function() {
                    if (n(), i) {
                        var a = i.data("charttype");
                        if (o == a) return s.modal("hide"), void 0;
                        e(), o = a, r && r.remove(), r = new AppView({
                            el: t("body"),
                            model: new AppModel(),
                            type: a,
                            templateId: "#" + a + "-config"
                        }), s.modal("hide");
                    }
                });
            }
        };
        e.init();
    } catch (n) {
        console.log(n);
    }
});

var LineView = Backbone.View.extend({
    initialize: function() {
        this.views = [], this.defaultSetting();
    },
    remove: function() {
        return _.each(this.views, function(t) {
            t.remove();
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
        return _.each(this.views, function(t) {
            t.remove();
        }), PieView.__super__.remove.apply(this, arguments), this;
    },
    defaultSetting: function() {
        var t = new PieChartSetView({
            modelClz: PieChartSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#pie-chart-set")
        });
        this.views.push(t), this.model.push(t.model);
        var e = new PieSliceSetView({
            modelClz: PieSliceSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("slice"),
            el: $("#pie-slice-set")
        });
        this.views.push(e), this.model.push(e.model);
    }
}), StyleCenter = function() {
    function t() {
        return {
            setStyleSheet: function(t) {
                this.styleSheet = t, $(document).triggerHandler("dataReady");
            },
            setStyle: function(t, e) {
                var n = (t + JSON.stringify(e) + "").replace(/\"/g, ""), i = this.styleSheet.getStyle(t);
                i && (i = _.extend(i, e), this.styleSheet.setStyle(t, i)), log("setStyle", n, i), 
                i = null, $(document).triggerHandler("redrawFlash", [ n ]);
            },
            getStyle: function(t) {
                return this.styleSheet.getStyle(t);
            },
            returnCSSText: function() {
                return this.styleSheet.returnCSSText();
            }
        };
    }
    var e;
    return {
        getInstance: function() {
            return e || (e = new t()), e;
        }
    };
}(), StyleSheet = function(t) {
    this._style = {}, t && this.parseCSS(t);
};

StyleSheet.prototype = {
    parseCSS: function(t) {
        var e = /([\w\s]+)\s*{([^}]*\s*[^}]*)}/gm, n = /([\w.]+)\s*:\s*([^;\n]+)/g, i = t;
        if (i) {
            i = i.replace(/\/\*.*\*\//gm, ""), i = _.string.strip(i);
            for (var r, o, s, a, l; r = e.exec(i); ) {
                for (o = _.string.strip(r[1]), s = _.string.strip(r[2]), l = {}; r = n.exec(s); ) a = _.string.strip(r[2]), 
                l[r[1]] = a;
                this.setStyle(o, l);
            }
        }
    },
    setStyle: function(t, e) {
        this._style[t] = e;
    },
    getStyle: function(t) {
        return this._style[t];
    },
    returnCSSText: function() {
        var t, e = [], n = _.keys(this._style), i = this;
        return _.each(n, function(n) {
            obj = i.getStyle(n), t = [], t.push(n.concat("{")), _.each(obj, function(e, n) {
                t.push([ "	", n, ": ", e, ";" ].join(""));
            }), t.push("}"), e.push(t.join("\n"));
        }), e.join("\n");
    }
};
//@ sourceMappingURL=dist/merge.map