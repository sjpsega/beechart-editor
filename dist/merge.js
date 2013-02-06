(function(e, t) {
    "use strict";
    var n, i, r = e.document, s = e.location, o = e.navigator, a = e.jQuery, l = e.$, u = Array.prototype.push, f = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, g = function(e, t) {
        return new g.fn.init(e, t, n);
    }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, v = /\S/, y = /\s+/, b = [], w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, T = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, E = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, _ = /^-ms-/, N = /-([\da-z])/gi, $ = function(e, t) {
        return (t + "").toUpperCase();
    }, j = function() {
        if (r.addEventListener) {
            r.removeEventListener("DOMContentLoaded", j, false);
            g.ready();
        } else if (r.readyState === "complete") {
            r.detachEvent("onreadystatechange", j);
            g.ready();
        }
    }, A = {};
    g.fn = g.prototype = {
        constructor: g,
        init: function(e, n, i) {
            var s, o, a;
            if (!e) {
                return this;
            }
            if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this;
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    s = [ null, e, null ];
                } else {
                    s = x.exec(e);
                }
                if (s && (s[1] || !n)) {
                    if (s[1]) {
                        n = n instanceof g ? n[0] : n;
                        a = n && n.nodeType ? n.ownerDocument || n : r;
                        e = g.parseHTML(s[1], a, true);
                        if (C.test(s[1]) && g.isPlainObject(n)) {
                            this.attr.call(e, n, true);
                        }
                        return g.merge(this, e);
                    } else {
                        o = r.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) {
                                return i.find(e);
                            }
                            this.length = 1;
                            this[0] = o;
                        }
                        this.context = r;
                        this.selector = e;
                        return this;
                    }
                } else if (!n || n.jquery) {
                    return (n || i).find(e);
                } else {
                    return this.constructor(n).find(e);
                }
            } else if (g.isFunction(e)) {
                return i.ready(e);
            }
            if (e.selector !== t) {
                this.selector = e.selector;
                this.context = e.context;
            }
            return g.makeArray(e, this);
        },
        selector: "",
        jquery: "1.8.3pre",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return f.call(this);
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
        },
        pushStack: function(e, t, n) {
            var i = g.merge(this.constructor(), e);
            i.prevObject = this;
            i.context = this.context;
            if (t === "find") {
                i.selector = this.selector + (this.selector ? " " : "") + n;
            } else if (t) {
                i.selector = this.selector + "." + t + "(" + n + ")";
            }
            return i;
        },
        each: function(e, t) {
            return g.each(this, e, t);
        },
        ready: function(e) {
            g.ready.promise().done(e);
            return this;
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(g.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: u,
        sort: [].sort,
        splice: [].splice
    };
    g.fn.init.prototype = g.fn;
    g.extend = g.fn.extend = function() {
        var e, n, i, r, s, o, a = arguments[0] || {}, l = 1, u = arguments.length, f = false;
        if (typeof a === "boolean") {
            f = a;
            a = arguments[1] || {};
            l = 2;
        }
        if (typeof a !== "object" && !g.isFunction(a)) {
            a = {};
        }
        if (u === l) {
            a = this;
            --l;
        }
        for (;l < u; l++) {
            if ((e = arguments[l]) != null) {
                for (n in e) {
                    i = a[n];
                    r = e[n];
                    if (a === r) {
                        continue;
                    }
                    if (f && r && (g.isPlainObject(r) || (s = g.isArray(r)))) {
                        if (s) {
                            s = false;
                            o = i && g.isArray(i) ? i : [];
                        } else {
                            o = i && g.isPlainObject(i) ? i : {};
                        }
                        a[n] = g.extend(f, o, r);
                    } else if (r !== t) {
                        a[n] = r;
                    }
                }
            }
        }
        return a;
    };
    g.extend({
        noConflict: function(t) {
            if (e.$ === g) {
                e.$ = l;
            }
            if (t && e.jQuery === g) {
                e.jQuery = a;
            }
            return g;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                g.readyWait++;
            } else {
                g.ready(true);
            }
        },
        ready: function(e) {
            if (e === true ? --g.readyWait : g.isReady) {
                return;
            }
            if (!r.body) {
                return setTimeout(g.ready, 1);
            }
            g.isReady = true;
            if (e !== true && --g.readyWait > 0) {
                return;
            }
            i.resolveWith(r, [ g ]);
            if (g.fn.trigger) {
                g(r).trigger("ready").off("ready");
            }
        },
        isFunction: function(e) {
            return g.type(e) === "function";
        },
        isArray: Array.isArray || function(e) {
            return g.type(e) === "array";
        },
        isWindow: function(e) {
            return e != null && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return e == null ? String(e) : A[h.call(e)] || "object";
        },
        isPlainObject: function(e) {
            if (!e || g.type(e) !== "object" || e.nodeType || g.isWindow(e)) {
                return false;
            }
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (n) {
                return false;
            }
            var i;
            for (i in e) {}
            return i === t || p.call(e, i);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false;
            }
            return true;
        },
        error: function(e) {
            throw new Error(e);
        },
        parseHTML: function(e, t, n) {
            var i;
            if (!e || typeof e !== "string") {
                return null;
            }
            if (typeof t === "boolean") {
                n = t;
                t = 0;
            }
            t = t || r;
            if (i = C.exec(e)) {
                return [ t.createElement(i[1]) ];
            }
            i = g.buildFragment([ e ], t, n ? null : []);
            return g.merge([], (i.cacheable ? g.clone(i.fragment) : i.fragment).childNodes);
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) {
                return e.JSON.parse(t);
            }
            if (t === null) {
                return t;
            }
            if (typeof t === "string") {
                t = g.trim(t);
                if (t) {
                    if (k.test(t.replace(S, "@").replace(E, "]").replace(T, ""))) {
                        return new Function("return " + t)();
                    }
                }
            }
            g.error("Invalid JSON: " + t);
        },
        parseXML: function(n) {
            var i, r;
            if (!n || typeof n !== "string") {
                return null;
            }
            try {
                if (e.DOMParser) {
                    r = new DOMParser();
                    i = r.parseFromString(n, "text/xml");
                } else {
                    i = new ActiveXObject("Microsoft.XMLDOM");
                    i.async = "false";
                    i.loadXML(n);
                }
            } catch (s) {
                i = t;
            }
            if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
                g.error("Invalid XML: " + n);
            }
            return i;
        },
        noop: function() {},
        globalEval: function(t) {
            if (t && v.test(t)) {
                (e.execScript || function(t) {
                    e["eval"].call(e, t);
                })(t);
            }
        },
        camelCase: function(e) {
            return e.replace(_, "ms-").replace(N, $);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, n, i) {
            var r, s = 0, o = e.length, a = o === t || g.isFunction(e);
            if (i) {
                if (a) {
                    for (r in e) {
                        if (n.apply(e[r], i) === false) {
                            break;
                        }
                    }
                } else {
                    for (;s < o; ) {
                        if (n.apply(e[s++], i) === false) {
                            break;
                        }
                    }
                }
            } else {
                if (a) {
                    for (r in e) {
                        if (n.call(e[r], r, e[r]) === false) {
                            break;
                        }
                    }
                } else {
                    for (;s < o; ) {
                        if (n.call(e[s], s, e[s++]) === false) {
                            break;
                        }
                    }
                }
            }
            return e;
        },
        trim: d && !d.call("﻿ ") ? function(e) {
            return e == null ? "" : d.call(e);
        } : function(e) {
            return e == null ? "" : (e + "").replace(w, "");
        },
        makeArray: function(e, t) {
            var n, i = t || [];
            if (e != null) {
                n = g.type(e);
                if (e.length == null || n === "string" || n === "function" || n === "regexp" || g.isWindow(e)) {
                    u.call(i, e);
                } else {
                    g.merge(i, e);
                }
            }
            return i;
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (c) {
                    return c.call(t, e, n);
                }
                i = t.length;
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                for (;n < i; n++) {
                    if (n in t && t[n] === e) {
                        return n;
                    }
                }
            }
            return -1;
        },
        merge: function(e, n) {
            var i = n.length, r = e.length, s = 0;
            if (typeof i === "number") {
                for (;s < i; s++) {
                    e[r++] = n[s];
                }
            } else {
                while (n[s] !== t) {
                    e[r++] = n[s++];
                }
            }
            e.length = r;
            return e;
        },
        grep: function(e, t, n) {
            var i, r = [], s = 0, o = e.length;
            n = !!n;
            for (;s < o; s++) {
                i = !!t(e[s], s);
                if (n !== i) {
                    r.push(e[s]);
                }
            }
            return r;
        },
        map: function(e, n, i) {
            var r, s, o = [], a = 0, l = e.length, u = e instanceof g || l !== t && typeof l === "number" && (l > 0 && e[0] && e[l - 1] || l === 0 || g.isArray(e));
            if (u) {
                for (;a < l; a++) {
                    r = n(e[a], a, i);
                    if (r != null) {
                        o[o.length] = r;
                    }
                }
            } else {
                for (s in e) {
                    r = n(e[s], s, i);
                    if (r != null) {
                        o[o.length] = r;
                    }
                }
            }
            return o.concat.apply([], o);
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, s;
            if (typeof n === "string") {
                i = e[n];
                n = e;
                e = i;
            }
            if (!g.isFunction(e)) {
                return t;
            }
            r = f.call(arguments, 2);
            s = function() {
                return e.apply(n || this, r.concat(f.call(arguments)));
            };
            s.guid = e.guid = e.guid || g.guid++;
            return s;
        },
        access: function(e, n, i, r, s, o, a) {
            var l, u = i == null, f = 0, c = e.length;
            if (i && typeof i === "object") {
                for (f in i) {
                    g.access(e, n, f, i[f], 1, o, r);
                }
                s = 1;
            } else if (r !== t) {
                l = a === t && g.isFunction(r);
                if (u) {
                    if (l) {
                        l = n;
                        n = function(e, t, n) {
                            return l.call(g(e), n);
                        };
                    } else {
                        n.call(e, r);
                        n = null;
                    }
                }
                if (n) {
                    for (;f < c; f++) {
                        n(e[f], i, l ? r.call(e[f], f, n(e[f], i)) : r, a);
                    }
                }
                s = 1;
            }
            return s ? e : u ? n.call(e) : c ? n(e[0], i) : o;
        },
        now: function() {
            return new Date().getTime();
        }
    });
    g.ready.promise = function(t) {
        if (!i) {
            i = g.Deferred();
            if (r.readyState === "complete") {
                setTimeout(g.ready, 1);
            } else if (r.addEventListener) {
                r.addEventListener("DOMContentLoaded", j, false);
                e.addEventListener("load", g.ready, false);
            } else {
                r.attachEvent("onreadystatechange", j);
                e.attachEvent("onload", g.ready);
                var n = false;
                try {
                    n = e.frameElement == null && r.documentElement;
                } catch (s) {}
                if (n && n.doScroll) {
                    (function o() {
                        if (!g.isReady) {
                            try {
                                n.doScroll("left");
                            } catch (e) {
                                return setTimeout(o, 50);
                            }
                            g.ready();
                        }
                    })();
                }
            }
        }
        return i.promise(t);
    };
    g.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        A["[object " + t + "]"] = t.toLowerCase();
    });
    n = g(r);
    var D = {};
    function L(e) {
        var t = D[e] = {};
        g.each(e.split(y), function(e, n) {
            t[n] = true;
        });
        return t;
    }
    g.Callbacks = function(e) {
        e = typeof e === "string" ? D[e] || L(e) : g.extend({}, e);
        var n, i, r, s, o, a, l = [], u = !e.once && [], f = function(t) {
            n = e.memory && t;
            i = true;
            a = s || 0;
            s = 0;
            o = l.length;
            r = true;
            for (;l && a < o; a++) {
                if (l[a].apply(t[0], t[1]) === false && e.stopOnFalse) {
                    n = false;
                    break;
                }
            }
            r = false;
            if (l) {
                if (u) {
                    if (u.length) {
                        f(u.shift());
                    }
                } else if (n) {
                    l = [];
                } else {
                    c.disable();
                }
            }
        }, c = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        g.each(t, function(t, n) {
                            var r = g.type(n);
                            if (r === "function") {
                                if (!e.unique || !c.has(n)) {
                                    l.push(n);
                                }
                            } else if (n && n.length && r !== "string") {
                                i(n);
                            }
                        });
                    })(arguments);
                    if (r) {
                        o = l.length;
                    } else if (n) {
                        s = t;
                        f(n);
                    }
                }
                return this;
            },
            remove: function() {
                if (l) {
                    g.each(arguments, function(e, t) {
                        var n;
                        while ((n = g.inArray(t, l, n)) > -1) {
                            l.splice(n, 1);
                            if (r) {
                                if (n <= o) {
                                    o--;
                                }
                                if (n <= a) {
                                    a--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(e) {
                return g.inArray(e, l) > -1;
            },
            empty: function() {
                l = [];
                return this;
            },
            disable: function() {
                l = u = n = t;
                return this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                u = t;
                if (!n) {
                    c.disable();
                }
                return this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                t = t || [];
                t = [ e, t.slice ? t.slice() : t ];
                if (l && (!i || u)) {
                    if (r) {
                        u.push(t);
                    } else {
                        f(t);
                    }
                }
                return this;
            },
            fire: function() {
                c.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    };
    g.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", g.Callbacks("once memory"), "resolved" ], [ "reject", "fail", g.Callbacks("once memory"), "rejected" ], [ "notify", "progress", g.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    r.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var e = arguments;
                    return g.Deferred(function(n) {
                        g.each(t, function(t, i) {
                            var s = i[0], o = e[t];
                            r[i[1]](g.isFunction(o) ? function() {
                                var e = o.apply(this, arguments);
                                if (e && g.isFunction(e.promise)) {
                                    e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                                } else {
                                    n[s + "With"](this === r ? n : this, [ e ]);
                                }
                            } : n[s]);
                        });
                        e = null;
                    }).promise();
                },
                promise: function(e) {
                    return e != null ? g.extend(e, i) : i;
                }
            }, r = {};
            i.pipe = i.then;
            g.each(t, function(e, s) {
                var o = s[2], a = s[3];
                i[s[1]] = o.add;
                if (a) {
                    o.add(function() {
                        n = a;
                    }, t[e ^ 1][2].disable, t[2][2].lock);
                }
                r[s[0]] = o.fire;
                r[s[0] + "With"] = o.fireWith;
            });
            i.promise(r);
            if (e) {
                e.call(r, r);
            }
            return r;
        },
        when: function(e) {
            var t = 0, n = f.call(arguments), i = n.length, r = i !== 1 || e && g.isFunction(e.promise) ? i : 0, s = r === 1 ? e : g.Deferred(), o = function(e, t, n) {
                return function(i) {
                    t[e] = this;
                    n[e] = arguments.length > 1 ? f.call(arguments) : i;
                    if (n === a) {
                        s.notifyWith(t, n);
                    } else if (!--r) {
                        s.resolveWith(t, n);
                    }
                };
            }, a, l, u;
            if (i > 1) {
                a = new Array(i);
                l = new Array(i);
                u = new Array(i);
                for (;t < i; t++) {
                    if (n[t] && g.isFunction(n[t].promise)) {
                        n[t].promise().done(o(t, u, n)).fail(s.reject).progress(o(t, l, a));
                    } else {
                        --r;
                    }
                }
            }
            if (!r) {
                s.resolveWith(u, n);
            }
            return s.promise();
        }
    });
    g.support = function() {
        var t, n, i, s, o, a, l, u, f, c, h, p = r.createElement("div");
        p.setAttribute("className", "t");
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        n = p.getElementsByTagName("*");
        i = p.getElementsByTagName("a")[0];
        if (!n || !i || !n.length) {
            return {};
        }
        s = r.createElement("select");
        o = s.appendChild(r.createElement("option"));
        a = p.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px;float:left;opacity:.5";
        t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: i.getAttribute("href") === "/a",
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: a.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        a.checked = true;
        t.noCloneChecked = a.cloneNode(true).checked;
        s.disabled = true;
        t.optDisabled = !o.disabled;
        try {
            delete p.test;
        } catch (d) {
            t.deleteExpando = false;
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent) {
            p.attachEvent("onclick", h = function() {
                t.noCloneEvent = false;
            });
            p.cloneNode(true).fireEvent("onclick");
            p.detachEvent("onclick", h);
        }
        a = r.createElement("input");
        a.value = "t";
        a.setAttribute("type", "radio");
        t.radioValue = a.value === "t";
        a.setAttribute("checked", "checked");
        a.setAttribute("name", "t");
        p.appendChild(a);
        l = r.createDocumentFragment();
        l.appendChild(p.lastChild);
        t.checkClone = l.cloneNode(true).cloneNode(true).lastChild.checked;
        t.appendChecked = a.checked;
        l.removeChild(a);
        l.appendChild(p);
        if (!p.addEventListener) {
            for (f in {
                submit: true,
                change: true,
                focusin: true
            }) {
                u = "on" + f;
                c = u in p;
                if (!c) {
                    p.setAttribute(u, "return;");
                    c = typeof p[u] === "function";
                }
                t[f + "Bubbles"] = c;
            }
        }
        g(function() {
            var n, i, s, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = r.getElementsByTagName("body")[0];
            if (!l) {
                return;
            }
            n = r.createElement("div");
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            l.insertBefore(n, l.firstChild);
            i = r.createElement("div");
            n.appendChild(i);
            i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            s = i.getElementsByTagName("td");
            s[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            c = s[0].offsetHeight === 0;
            s[0].style.display = "";
            s[1].style.display = "none";
            t.reliableHiddenOffsets = c && s[0].offsetHeight === 0;
            i.innerHTML = "";
            i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            t.boxSizing = i.offsetWidth === 4;
            t.doesNotIncludeMarginInBodyOffset = l.offsetTop !== 1;
            if (e.getComputedStyle) {
                t.pixelPosition = (e.getComputedStyle(i, null) || {}).top !== "1%";
                t.boxSizingReliable = (e.getComputedStyle(i, null) || {
                    width: "4px"
                }).width === "4px";
                o = r.createElement("div");
                o.style.cssText = i.style.cssText = a;
                o.style.marginRight = o.style.width = "0";
                i.style.width = "1px";
                i.appendChild(o);
                t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight);
            }
            if (typeof i.style.zoom !== "undefined") {
                i.innerHTML = "";
                i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1";
                t.inlineBlockNeedsLayout = i.offsetWidth === 3;
                i.style.display = "block";
                i.style.overflow = "visible";
                i.innerHTML = "<div></div>";
                i.firstChild.style.width = "5px";
                t.shrinkWrapBlocks = i.offsetWidth !== 3;
                n.style.zoom = 1;
            }
            l.removeChild(n);
            n = i = s = o = null;
        });
        l.removeChild(p);
        n = i = s = o = a = l = p = null;
        return t;
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, F = /([A-Z])/g;
    function O(e, n, i, r) {
        if (!g.acceptData(e)) {
            return;
        }
        var s, o, a = g.expando, l = typeof n === "string", u = e.nodeType, f = u ? g.cache : e, c = u ? e[a] : e[a] && a;
        if ((!c || !f[c] || !r && !f[c].data) && l && i === t) {
            return;
        }
        if (!c) {
            if (u) {
                e[a] = c = b.pop() || g.guid++;
            } else {
                c = a;
            }
        }
        if (!f[c]) {
            f[c] = {};
            if (!u) {
                f[c].toJSON = g.noop;
            }
        }
        if (typeof n === "object" || typeof n === "function") {
            if (r) {
                f[c] = g.extend(f[c], n);
            } else {
                f[c].data = g.extend(f[c].data, n);
            }
        }
        s = f[c];
        if (!r) {
            if (!s.data) {
                s.data = {};
            }
            s = s.data;
        }
        if (i !== t) {
            s[g.camelCase(n)] = i;
        }
        if (l) {
            o = s[n];
            if (o == null) {
                o = s[g.camelCase(n)];
            }
        } else {
            o = s;
        }
        return o;
    }
    function M(e, t, n) {
        if (!g.acceptData(e)) {
            return;
        }
        var i, r, s, o = e.nodeType, a = o ? g.cache : e, l = o ? e[g.expando] : g.expando;
        if (!a[l]) {
            return;
        }
        if (t) {
            i = n ? a[l] : a[l].data;
            if (i) {
                if (!g.isArray(t)) {
                    if (t in i) {
                        t = [ t ];
                    } else {
                        t = g.camelCase(t);
                        if (t in i) {
                            t = [ t ];
                        } else {
                            t = t.split(" ");
                        }
                    }
                }
                for (r = 0, s = t.length; r < s; r++) {
                    delete i[t[r]];
                }
                if (!(n ? R : g.isEmptyObject)(i)) {
                    return;
                }
            }
        }
        if (!n) {
            delete a[l].data;
            if (!R(a[l])) {
                return;
            }
        }
        if (o) {
            g.cleanData([ e ], true);
        } else if (g.support.deleteExpando || a != a.window) {
            delete a[l];
        } else {
            a[l] = null;
        }
    }
    g.extend({
        cache: {},
        expando: "jQuery" + (g.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? g.cache[e[g.expando]] : e[g.expando];
            return !!e && !R(e);
        },
        data: function(e, t, n) {
            return O(e, t, n, false);
        },
        removeData: function(e, t) {
            return M(e, t, false);
        },
        _data: function(e, t, n) {
            return O(e, t, n, true);
        },
        _removeData: function(e, t) {
            return M(e, t, true);
        },
        acceptData: function(e) {
            var t = e.nodeName && g.noData[e.nodeName.toLowerCase()];
            return !t || t !== true && e.getAttribute("classid") === t;
        }
    });
    g.fn.extend({
        data: function(e, n) {
            var i, r, s, o, a, l = this[0], u = 0, f = null;
            if (e === t) {
                if (this.length) {
                    f = g.data(l);
                    if (l.nodeType === 1 && !g._data(l, "parsedAttrs")) {
                        s = l.attributes;
                        for (a = s.length; u < a; u++) {
                            o = s[u].name;
                            if (!o.indexOf("data-")) {
                                o = g.camelCase(o.substring(5));
                                B(l, o, f[o]);
                            }
                        }
                        g._data(l, "parsedAttrs", true);
                    }
                }
                return f;
            }
            if (typeof e === "object") {
                return this.each(function() {
                    g.data(this, e);
                });
            }
            i = e.split(".", 2);
            i[1] = i[1] ? "." + i[1] : "";
            r = i[1] + "!";
            return g.access(this, function(n) {
                if (n === t) {
                    f = this.triggerHandler("getData" + r, [ i[0] ]);
                    if (f === t && l) {
                        f = g.data(l, e);
                        f = B(l, e, f);
                    }
                    return f === t && i[1] ? this.data(i[0]) : f;
                }
                i[1] = n;
                this.each(function() {
                    var t = g(this);
                    t.triggerHandler("setData" + r, i);
                    g.data(this, e, n);
                    t.triggerHandler("changeData" + r, i);
                });
            }, null, n, arguments.length > 1, null, false);
        },
        removeData: function(e) {
            return this.each(function() {
                g.removeData(this, e);
            });
        }
    });
    function B(e, n, i) {
        if (i === t && e.nodeType === 1) {
            var r = "data-" + n.replace(F, "-$1").toLowerCase();
            i = e.getAttribute(r);
            if (typeof i === "string") {
                try {
                    i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : H.test(i) ? g.parseJSON(i) : i;
                } catch (s) {}
                g.data(e, n, i);
            } else {
                i = t;
            }
        }
        return i;
    }
    function R(e) {
        var t;
        for (t in e) {
            if (t === "data" && g.isEmptyObject(e[t])) {
                continue;
            }
            if (t !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    g.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = g._data(e, t);
                if (n) {
                    if (!i || g.isArray(n)) {
                        i = g._data(e, t, g.makeArray(n));
                    } else {
                        i.push(n);
                    }
                }
                return i || [];
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = g.queue(e, t), i = n.length, r = n.shift(), s = g._queueHooks(e, t), o = function() {
                g.dequeue(e, t);
            };
            if (r === "inprogress") {
                r = n.shift();
                i--;
            }
            if (r) {
                if (t === "fx") {
                    n.unshift("inprogress");
                }
                delete s.stop;
                r.call(e, o, s);
            }
            if (!i && s) {
                s.empty.fire();
            }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return g._data(e, n) || g._data(e, n, {
                empty: g.Callbacks("once memory").add(function() {
                    g._removeData(e, t + "queue");
                    g._removeData(e, n);
                })
            });
        }
    });
    g.fn.extend({
        queue: function(e, n) {
            var i = 2;
            if (typeof e !== "string") {
                n = e;
                e = "fx";
                i--;
            }
            if (arguments.length < i) {
                return g.queue(this[0], e);
            }
            return n === t ? this : this.each(function() {
                var t = g.queue(this, e, n);
                g._queueHooks(this, e);
                if (e === "fx" && t[0] !== "inprogress") {
                    g.dequeue(this, e);
                }
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                g.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            e = g.fx ? g.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function(t, n) {
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
            var i, r = 1, s = g.Deferred(), o = this, a = this.length, l = function() {
                if (!--r) {
                    s.resolveWith(o, [ o ]);
                }
            };
            if (typeof e !== "string") {
                n = e;
                e = t;
            }
            e = e || "fx";
            while (a--) {
                i = g._data(o[a], e + "queueHooks");
                if (i && i.empty) {
                    r++;
                    i.empty.add(l);
                }
            }
            l();
            return s.promise(n);
        }
    });
    var P, I, q, z = /[\t\r\n]/g, W = /\r/g, V = /^(?:button|input)$/i, U = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea|)$/i, Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, G = g.support.getSetAttribute;
    g.fn.extend({
        attr: function(e, t) {
            return g.access(this, g.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                g.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return g.access(this, g.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            e = g.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = t;
                    delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, i, r, s, o, a;
            if (g.isFunction(e)) {
                return this.each(function(t) {
                    g(this).addClass(e.call(this, t, this.className));
                });
            }
            if (e && typeof e === "string") {
                t = e.split(y);
                for (n = 0, i = this.length; n < i; n++) {
                    r = this[n];
                    if (r.nodeType === 1) {
                        if (!r.className && t.length === 1) {
                            r.className = e;
                        } else {
                            s = " " + r.className + " ";
                            for (o = 0, a = t.length; o < a; o++) {
                                if (s.indexOf(" " + t[o] + " ") < 0) {
                                    s += t[o] + " ";
                                }
                            }
                            r.className = g.trim(s);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(e) {
            var n, i, r, s, o, a, l;
            if (g.isFunction(e)) {
                return this.each(function(t) {
                    g(this).removeClass(e.call(this, t, this.className));
                });
            }
            if (e && typeof e === "string" || e === t) {
                n = (e || "").split(y);
                for (a = 0, l = this.length; a < l; a++) {
                    r = this[a];
                    if (r.nodeType === 1 && r.className) {
                        i = (" " + r.className + " ").replace(z, " ");
                        for (s = 0, o = n.length; s < o; s++) {
                            while (i.indexOf(" " + n[s] + " ") >= 0) {
                                i = i.replace(" " + n[s] + " ", " ");
                            }
                        }
                        r.className = e ? g.trim(i) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, i = typeof t === "boolean";
            if (g.isFunction(e)) {
                return this.each(function(n) {
                    g(this).toggleClass(e.call(this, n, this.className, t), t);
                });
            }
            return this.each(function() {
                if (n === "string") {
                    var r, s = 0, o = g(this), a = t, l = e.split(y);
                    while (r = l[s++]) {
                        a = i ? a : !o.hasClass(r);
                        o[a ? "addClass" : "removeClass"](r);
                    }
                } else if (n === "undefined" || n === "boolean") {
                    if (this.className) {
                        g._data(this, "__className__", this.className);
                    }
                    this.className = this.className || e === false ? "" : g._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, i = this.length;
            for (;n < i; n++) {
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(e) {
            var n, i, r, s = this[0];
            if (!arguments.length) {
                if (s) {
                    n = g.valHooks[s.type] || g.valHooks[s.nodeName.toLowerCase()];
                    if (n && "get" in n && (i = n.get(s, "value")) !== t) {
                        return i;
                    }
                    i = s.value;
                    return typeof i === "string" ? i.replace(W, "") : i == null ? "" : i;
                }
                return;
            }
            r = g.isFunction(e);
            return this.each(function(i) {
                var s, o = g(this);
                if (this.nodeType !== 1) {
                    return;
                }
                if (r) {
                    s = e.call(this, i, o.val());
                } else {
                    s = e;
                }
                if (s == null) {
                    s = "";
                } else if (typeof s === "number") {
                    s += "";
                } else if (g.isArray(s)) {
                    s = g.map(s, function(e) {
                        return e == null ? "" : e + "";
                    });
                }
                n = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) {
                    this.value = s;
                }
            });
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, i = e.options, r = e.selectedIndex, s = e.type === "select-one" || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0;
                    for (;l < a; l++) {
                        n = i[l];
                        if ((n.selected || l === r) && (g.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
                            t = g(n).val();
                            if (s) {
                                return t;
                            }
                            o.push(t);
                        }
                    }
                    return o;
                },
                set: function(e, t) {
                    var n = g.makeArray(t);
                    g(e).find("option").each(function() {
                        this.selected = g.inArray(g(this).val(), n) >= 0;
                    });
                    if (!n.length) {
                        e.selectedIndex = -1;
                    }
                    return n;
                }
            }
        },
        attr: function(e, n, i, r) {
            var s, o, a, l = e.nodeType;
            if (!e || l === 3 || l === 8 || l === 2) {
                return;
            }
            if (r && g.isFunction(g.fn[n])) {
                return g(e)[n](i);
            }
            if (typeof e.getAttribute === "undefined") {
                return g.prop(e, n, i);
            }
            a = l !== 1 || !g.isXMLDoc(e);
            if (a) {
                n = n.toLowerCase();
                o = g.attrHooks[n] || (Q.test(n) ? I : P);
            }
            if (i !== t) {
                if (i === null) {
                    g.removeAttr(e, n);
                    return;
                } else if (o && "set" in o && a && (s = o.set(e, i, n)) !== t) {
                    return s;
                } else {
                    e.setAttribute(n, i + "");
                    return i;
                }
            } else if (o && "get" in o && a && (s = o.get(e, n)) !== null) {
                return s;
            } else {
                s = e.getAttribute(n);
                return s === null ? t : s;
            }
        },
        removeAttr: function(e, t) {
            var n, i, r, s, o = 0;
            if (t && e.nodeType === 1) {
                i = t.split(y);
                for (;o < i.length; o++) {
                    r = i[o];
                    if (r) {
                        n = g.propFix[r] || r;
                        s = Q.test(r);
                        if (!s) {
                            g.attr(e, r, "");
                        }
                        e.removeAttribute(G ? r : n);
                        if (s && n in e) {
                            e[n] = false;
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (V.test(e.nodeName) && e.parentNode) {
                        g.error("type property can't be changed");
                    } else if (!g.support.radioValue && t === "radio" && g.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) {
                            e.value = n;
                        }
                        return t;
                    }
                }
            },
            value: {
                get: function(e, t) {
                    if (P && g.nodeName(e, "button")) {
                        return P.get(e, t);
                    }
                    return t in e ? e.value : null;
                },
                set: function(e, t, n) {
                    if (P && g.nodeName(e, "button")) {
                        return P.set(e, t, n);
                    }
                    e.value = t;
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
            var r, s, o, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) {
                return;
            }
            o = a !== 1 || !g.isXMLDoc(e);
            if (o) {
                n = g.propFix[n] || n;
                s = g.propHooks[n];
            }
            if (i !== t) {
                if (s && "set" in s && (r = s.set(e, i, n)) !== t) {
                    return r;
                } else {
                    return e[n] = i;
                }
            } else {
                if (s && "get" in s && (r = s.get(e, n)) !== null) {
                    return r;
                } else {
                    return e[n];
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    });
    I = {
        get: function(e, n) {
            var i, r = g.prop(e, n);
            return r === true || typeof r !== "boolean" && (i = e.getAttributeNode(n)) && i.nodeValue !== false ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            var i;
            if (t === false) {
                g.removeAttr(e, n);
            } else {
                i = g.propFix[n] || n;
                if (i in e) {
                    e[i] = true;
                }
                e.setAttribute(n, n.toLowerCase());
            }
            return n;
        }
    };
    if (!G) {
        q = {
            name: true,
            id: true,
            coords: true
        };
        P = g.valHooks.button = {
            get: function(e, n) {
                var i;
                i = e.getAttributeNode(n);
                return i && (q[n] ? i.value !== "" : i.specified) ? i.value : t;
            },
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (!i) {
                    i = e.ownerDocument.createAttribute(n);
                    e.setAttributeNode(i);
                }
                return i.value = t + "";
            }
        };
        g.each([ "width", "height" ], function(e, t) {
            g.attrHooks[t] = g.extend(g.attrHooks[t], {
                set: function(e, n) {
                    if (n === "") {
                        e.setAttribute(t, "auto");
                        return n;
                    }
                }
            });
        });
        g.attrHooks.contenteditable = {
            get: P.get,
            set: function(e, t, n) {
                if (t === "") {
                    t = "false";
                }
                P.set(e, t, n);
            }
        };
    }
    if (!g.support.hrefNormalized) {
        g.each([ "href", "src", "width", "height" ], function(e, n) {
            g.attrHooks[n] = g.extend(g.attrHooks[n], {
                get: function(e) {
                    var i = e.getAttribute(n, 2);
                    return i === null ? t : i;
                }
            });
        });
    }
    if (!g.support.style) {
        g.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t;
            },
            set: function(e, t) {
                return e.style.cssText = t + "";
            }
        };
    }
    if (!g.support.optSelected) {
        g.propHooks.selected = g.extend(g.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }
    if (!g.support.enctype) {
        g.propFix.enctype = "encoding";
    }
    if (!g.support.checkOn) {
        g.each([ "radio", "checkbox" ], function() {
            g.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                }
            };
        });
    }
    g.each([ "radio", "checkbox" ], function() {
        g.valHooks[this] = g.extend(g.valHooks[this], {
            set: function(e, t) {
                if (g.isArray(t)) {
                    return e.checked = g.inArray(g(e).val(), t) >= 0;
                }
            }
        });
    });
    var J = /^(?:textarea|input|select)$/i, Y = /^([^\.]*|)(?:\.(.+)|)$/, K = /^key/, Z = /^(?:mouse|contextmenu)|click/, et = /^(?:focusinfocus|focusoutblur)$/;
    g.event = {
        add: function(e, n, i, r, s) {
            var o, a, l, u, f, c, h, p, d, m, v;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !i || !(o = g._data(e))) {
                return;
            }
            if (i.handler) {
                d = i;
                i = d.handler;
                s = d.selector;
            }
            if (!i.guid) {
                i.guid = g.guid++;
            }
            l = o.events;
            if (!l) {
                o.events = l = {};
            }
            a = o.handle;
            if (!a) {
                o.handle = a = function(e) {
                    return typeof g !== "undefined" && (!e || g.event.triggered !== e.type) ? g.event.dispatch.apply(a.elem, arguments) : t;
                };
                a.elem = e;
            }
            n = g.trim(n).split(" ");
            for (u = 0; u < n.length; u++) {
                f = Y.exec(n[u]) || [];
                c = f[1];
                h = (f[2] || "").split(".").sort();
                v = g.event.special[c] || {};
                c = (s ? v.delegateType : v.bindType) || c;
                v = g.event.special[c] || {};
                p = g.extend({
                    type: c,
                    origType: f[1],
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && g.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d);
                m = l[c];
                if (!m) {
                    m = l[c] = [];
                    m.delegateCount = 0;
                    if (!v.setup || v.setup.call(e, r, h, a) === false) {
                        if (e.addEventListener) {
                            e.addEventListener(c, a, false);
                        } else if (e.attachEvent) {
                            e.attachEvent("on" + c, a);
                        }
                    }
                }
                if (v.add) {
                    v.add.call(e, p);
                    if (!p.handler.guid) {
                        p.handler.guid = i.guid;
                    }
                }
                if (s) {
                    m.splice(m.delegateCount++, 0, p);
                } else {
                    m.push(p);
                }
                g.event.global[c] = true;
            }
            e = null;
        },
        global: {},
        remove: function(e, t, n, i, r) {
            var s, o, a, l, u, f, c, h, p, d, m, v = g.hasData(e) && g._data(e);
            if (!v || !(h = v.events)) {
                return;
            }
            t = g.trim(t).split(" ");
            for (s = 0; s < t.length; s++) {
                o = Y.exec(t[s]) || [];
                a = l = o[1];
                u = o[2];
                if (!a) {
                    for (a in h) {
                        g.event.remove(e, a + t[s], n, i, true);
                    }
                    continue;
                }
                p = g.event.special[a] || {};
                a = (i ? p.delegateType : p.bindType) || a;
                d = h[a] || [];
                f = d.length;
                u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++) {
                    m = d[c];
                    if ((r || l === m.origType) && (!n || n.guid === m.guid) && (!u || u.test(m.namespace)) && (!i || i === m.selector || i === "**" && m.selector)) {
                        d.splice(c--, 1);
                        if (m.selector) {
                            d.delegateCount--;
                        }
                        if (p.remove) {
                            p.remove.call(e, m);
                        }
                    }
                }
                if (d.length === 0 && f !== d.length) {
                    if (!p.teardown || p.teardown.call(e, u, v.handle) === false) {
                        g.removeEvent(e, a, v.handle);
                    }
                    delete h[a];
                }
            }
            if (g.isEmptyObject(h)) {
                delete v.handle;
                g._removeData(e, "events");
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(n, i, s, o) {
            if (s && (s.nodeType === 3 || s.nodeType === 8)) {
                return;
            }
            var a, l, u, f, c, h, p, d, m, v, y = n.type || n, b = n.namespace ? n.namespace.split(".") : [];
            if (et.test(y + g.event.triggered)) {
                return;
            }
            if (y.indexOf("!") >= 0) {
                y = y.slice(0, -1);
                l = true;
            }
            if (y.indexOf(".") >= 0) {
                b = y.split(".");
                y = b.shift();
                b.sort();
            }
            if ((!s || g.event.customEvent[y]) && !g.event.global[y]) {
                return;
            }
            n = typeof n === "object" ? n[g.expando] ? n : new g.Event(y, n) : new g.Event(y);
            n.type = y;
            n.isTrigger = true;
            n.exclusive = l;
            n.namespace = b.join(".");
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            h = y.indexOf(":") < 0 ? "on" + y : "";
            if (!s) {
                a = g.cache;
                for (u in a) {
                    if (a[u].events && a[u].events[y]) {
                        g.event.trigger(n, i, a[u].handle.elem, true);
                    }
                }
                return;
            }
            n.result = t;
            if (!n.target) {
                n.target = s;
            }
            i = i != null ? g.makeArray(i) : [];
            i.unshift(n);
            p = g.event.special[y] || {};
            if (p.trigger && p.trigger.apply(s, i) === false) {
                return;
            }
            m = [ [ s, p.bindType || y ] ];
            if (!o && !p.noBubble && !g.isWindow(s)) {
                v = p.delegateType || y;
                f = et.test(v + y) ? s : s.parentNode;
                for (c = s; f; f = f.parentNode) {
                    m.push([ f, v ]);
                    c = f;
                }
                if (c === (s.ownerDocument || r)) {
                    m.push([ c.defaultView || c.parentWindow || e, v ]);
                }
            }
            for (u = 0; u < m.length && !n.isPropagationStopped(); u++) {
                f = m[u][0];
                n.type = m[u][1];
                d = (g._data(f, "events") || {})[n.type] && g._data(f, "handle");
                if (d) {
                    d.apply(f, i);
                }
                d = h && f[h];
                if (d && g.acceptData(f) && d.apply && d.apply(f, i) === false) {
                    n.preventDefault();
                }
            }
            n.type = y;
            if (!o && !n.isDefaultPrevented()) {
                if ((!p._default || p._default.apply(s.ownerDocument, i) === false) && !(y === "click" && g.nodeName(s, "a")) && g.acceptData(s)) {
                    if (h && s[y] && !g.isWindow(s)) {
                        c = s[h];
                        if (c) {
                            s[h] = null;
                        }
                        g.event.triggered = y;
                        try {
                            s[y]();
                        } catch (w) {}
                        g.event.triggered = t;
                        if (c) {
                            s[h] = c;
                        }
                    }
                }
            }
            return n.result;
        },
        dispatch: function(e) {
            e = g.event.fix(e);
            var n, i, r, s, o, a, l, u, c, h = (g._data(this, "events") || {})[e.type] || [], p = h.delegateCount, d = f.call(arguments), m = !e.exclusive && !e.namespace, v = g.event.special[e.type] || {}, y = [];
            d[0] = e;
            e.delegateTarget = this;
            if (v.preDispatch && v.preDispatch.call(this, e) === false) {
                return;
            }
            if (p && !(e.button && e.type === "click")) {
                for (r = e.target; r != this; r = r.parentNode || this) {
                    if (r.disabled !== true || e.type !== "click") {
                        o = {};
                        l = [];
                        for (n = 0; n < p; n++) {
                            u = h[n];
                            c = u.selector;
                            if (o[c] === t) {
                                o[c] = u.needsContext ? g(c, this).index(r) >= 0 : g.find(c, this, null, [ r ]).length;
                            }
                            if (o[c]) {
                                l.push(u);
                            }
                        }
                        if (l.length) {
                            y.push({
                                elem: r,
                                matches: l
                            });
                        }
                    }
                }
            }
            if (h.length > p) {
                y.push({
                    elem: this,
                    matches: h.slice(p)
                });
            }
            for (n = 0; n < y.length && !e.isPropagationStopped(); n++) {
                a = y[n];
                e.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !e.isImmediatePropagationStopped(); i++) {
                    u = a.matches[i];
                    if (m || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace)) {
                        e.data = u.data;
                        e.handleObj = u;
                        s = ((g.event.special[u.origType] || {}).handle || u.handler).apply(a.elem, d);
                        if (s !== t) {
                            e.result = s;
                            if (s === false) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (v.postDispatch) {
                v.postDispatch.call(this, e);
            }
            return e.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode;
                }
                return e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, s, o, a = n.button, l = n.fromElement;
                if (e.pageX == null && n.clientX != null) {
                    i = e.target.ownerDocument || r;
                    s = i.documentElement;
                    o = i.body;
                    e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0);
                    e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0);
                }
                if (!e.relatedTarget && l) {
                    e.relatedTarget = l === e.target ? n.toElement : l;
                }
                if (!e.which && a !== t) {
                    e.which = a & 1 ? 1 : a & 2 ? 3 : a & 4 ? 2 : 0;
                }
                return e;
            }
        },
        fix: function(e) {
            if (e[g.expando]) {
                return e;
            }
            var t, n, i = e, s = g.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = g.Event(i);
            for (t = o.length; t; ) {
                n = o[--t];
                e[n] = i[n];
            }
            if (!e.target) {
                e.target = i.srcElement || r;
            }
            if (e.target.nodeType === 3) {
                e.target = e.target.parentNode;
            }
            e.metaKey = !!e.metaKey;
            return s.filter ? s.filter(e, i) : e;
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== t) {
                        e.originalEvent.returnValue = e.result;
                    }
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = g.extend(new g.Event(), n, {
                type: e,
                isSimulated: true,
                originalEvent: {}
            });
            if (i) {
                g.event.trigger(r, null, t);
            } else {
                g.event.dispatch.call(t, r);
            }
            if (r.isDefaultPrevented()) {
                n.preventDefault();
            }
        }
    };
    g.event.handle = g.event.dispatch;
    g.removeEvent = r.removeEventListener ? function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n, false);
        }
    } : function(e, t, n) {
        var i = "on" + t;
        if (e.detachEvent) {
            if (typeof e[i] === "undefined") {
                e[i] = null;
            }
            e.detachEvent(i, n);
        }
    };
    g.Event = function(e, t) {
        if (!(this instanceof g.Event)) {
            return new g.Event(e, t);
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? nt : tt;
        } else {
            this.type = e;
        }
        if (t) {
            g.extend(this, t);
        }
        this.timeStamp = e && e.timeStamp || g.now();
        this[g.expando] = true;
    };
    function tt() {
        return false;
    }
    function nt() {
        return true;
    }
    g.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = nt;
            var e = this.originalEvent;
            if (!e) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = nt;
            var e = this.originalEvent;
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = nt;
            this.stopPropagation();
        },
        isDefaultPrevented: tt,
        isPropagationStopped: tt,
        isImmediatePropagationStopped: tt
    };
    g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        g.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, s = e.handleObj;
                if (!r || r !== i && !g.contains(i, r)) {
                    e.type = s.origType;
                    n = s.handler.apply(this, arguments);
                    e.type = t;
                }
                return n;
            }
        };
    });
    if (!g.support.submitBubbles) {
        g.event.special.submit = {
            setup: function() {
                if (g.nodeName(this, "form")) {
                    return false;
                }
                g.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target, i = g.nodeName(n, "input") || g.nodeName(n, "button") ? n.form : t;
                    if (i && !g._data(i, "_submit_attached")) {
                        g.event.add(i, "submit._submit", function(e) {
                            e._submit_bubble = true;
                        });
                        g._data(i, "_submit_attached", true);
                    }
                });
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        g.event.simulate("submit", this.parentNode, e, true);
                    }
                }
            },
            teardown: function() {
                if (g.nodeName(this, "form")) {
                    return false;
                }
                g.event.remove(this, "._submit");
            }
        };
    }
    if (!g.support.changeBubbles) {
        g.event.special.change = {
            setup: function() {
                if (J.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        g.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        g.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false;
                            }
                            g.event.simulate("change", this, e, true);
                        });
                    }
                    return false;
                }
                g.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    if (J.test(t.nodeName) && !g._data(t, "_change_attached")) {
                        g.event.add(t, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                g.event.simulate("change", this.parentNode, e, true);
                            }
                        });
                        g._data(t, "_change_attached", true);
                    }
                });
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") {
                    return e.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                g.event.remove(this, "._change");
                return !J.test(this.nodeName);
            }
        };
    }
    if (!g.support.focusinBubbles) {
        g.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0, i = function(e) {
                g.event.simulate(t, e.target, g.event.fix(e), true);
            };
            g.event.special[t] = {
                setup: function() {
                    if (n++ === 0) {
                        r.addEventListener(e, i, true);
                    }
                },
                teardown: function() {
                    if (--n === 0) {
                        r.removeEventListener(e, i, true);
                    }
                }
            };
        });
    }
    g.fn.extend({
        on: function(e, n, i, r, s) {
            var o, a;
            if (typeof e === "object") {
                if (typeof n !== "string") {
                    i = i || n;
                    n = t;
                }
                for (a in e) {
                    this.on(a, n, i, e[a], s);
                }
                return this;
            }
            if (i == null && r == null) {
                r = n;
                i = n = t;
            } else if (r == null) {
                if (typeof n === "string") {
                    r = i;
                    i = t;
                } else {
                    r = i;
                    i = n;
                    n = t;
                }
            }
            if (r === false) {
                r = tt;
            } else if (!r) {
                return this;
            }
            if (s === 1) {
                o = r;
                r = function(e) {
                    g().off(e);
                    return o.apply(this, arguments);
                };
                r.guid = o.guid || (o.guid = g.guid++);
            }
            return this.each(function() {
                g.event.add(this, e, r, i, n);
            });
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1);
        },
        off: function(e, n, i) {
            var r, s;
            if (e && e.preventDefault && e.handleObj) {
                r = e.handleObj;
                g(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this;
            }
            if (typeof e === "object") {
                for (s in e) {
                    this.off(s, n, e[s]);
                }
                return this;
            }
            if (n === false || typeof n === "function") {
                i = n;
                n = t;
            }
            if (i === false) {
                i = tt;
            }
            return this.each(function() {
                g.event.remove(this, e, i, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        live: function(e, t, n) {
            g(this.context).on(e, this.selector, t, n);
            return this;
        },
        die: function(e, t) {
            g(this.context).off(e, this.selector || "**", t);
            return this;
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                g.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            if (this[0]) {
                return g.event.trigger(e, t, this[0], true);
            }
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    });
    g.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) {
        g.fn[t] = function(e, n) {
            if (n == null) {
                n = e;
                e = null;
            }
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
        if (K.test(t)) {
            g.event.fixHooks[t] = g.event.keyHooks;
        }
        if (Z.test(t)) {
            g.event.fixHooks[t] = g.event.mouseHooks;
        }
    });
    (function(e, t) {
        var n, i, r, s, o, a, l, u, f, c, h = "undefined", p = 1 << 31, d = true, m = ("sizcache" + Math.random()).replace(".", ""), v = String, y = e.document, b = y.documentElement, w = 0, x = 0, C = [].pop, k = [].push, T = [].slice, S = [].indexOf || function(e) {
            var t = 0, n = this.length;
            for (;t < n; t++) {
                if (this[t] === e) {
                    return t;
                }
            }
            return -1;
        }, E = function(e, t) {
            e[m] = t == null || t;
            return e;
        }, _ = function() {
            var e = {}, t = [];
            return E(function(n, i) {
                if (t.push(n) > r.cacheLength) {
                    delete e[t.shift()];
                }
                return e[n + " "] = i;
            }, e);
        }, N = _(), $ = _(), j = _(), A = "[\\x20\\t\\r\\n\\f]", D = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", L = D.replace("w", "w#"), H = "([*^$|!~]?=)", F = "\\[" + A + "*(" + D + ")" + A + "*(?:" + H + A + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + L + ")|)|)" + A + "*\\]", O = ":(" + D + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + F + ")|[^:]|\\\\.)*|.*))\\)|)", M = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)", B = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g"), R = new RegExp("^" + A + "*," + A + "*"), P = new RegExp("^" + A + "*([\\x20\\t\\r\\n\\f>+~])" + A + "*"), I = new RegExp(O), q = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, z = /[\x20\t\r\n\f]*[+~]/, W = /h\d/i, V = /input|select|textarea|button/i, U = /\\(?!\\)/g, X = {
            ID: new RegExp("^#(" + D + ")"),
            CLASS: new RegExp("^\\.(" + D + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + D + ")['\"]?\\]"),
            TAG: new RegExp("^(" + D.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + O),
            POS: new RegExp(M, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
            needsContext: new RegExp("^" + A + "*[>+~]|" + M, "i")
        }, Q = function(e) {
            var t = y.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return false;
            } finally {
                t = null;
            }
        }, G = Q(function(e) {
            e.appendChild(y.createComment(""));
            return !e.getElementsByTagName("*").length;
        }), J = Q(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild && typeof e.firstChild.getAttribute !== h && e.firstChild.getAttribute("href") === "#";
        }), Y = Q(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string";
        }), K = Q(function(e) {
            e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
            if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) {
                return false;
            }
            e.lastChild.className = "e";
            return e.getElementsByClassName("e").length === 2;
        }), Z = Q(function(e) {
            e.id = m + 0;
            e.innerHTML = "<a name='" + m + "'></a><div name='" + m + "'></div>";
            b.insertBefore(e, b.firstChild);
            var t = y.getElementsByName && y.getElementsByName(m).length === 2 + y.getElementsByName(m + 0).length;
            i = !y.getElementById(m);
            b.removeChild(e);
            return t;
        });
        try {
            T.call(b.childNodes, 0)[0].nodeType;
        } catch (et) {
            T = function(e) {
                var t, n = [];
                for (;t = this[e]; e++) {
                    n.push(t);
                }
                return n;
            };
        }
        function tt(e, t, n, i) {
            n = n || [];
            t = t || y;
            var r, s, l, u, f = t.nodeType;
            if (!e || typeof e !== "string") {
                return n;
            }
            if (f !== 1 && f !== 9) {
                return [];
            }
            l = o(t);
            if (!l && !i) {
                if (r = q.exec(e)) {
                    if (u = r[1]) {
                        if (f === 9) {
                            s = t.getElementById(u);
                            if (s && s.parentNode) {
                                if (s.id === u) {
                                    n.push(s);
                                    return n;
                                }
                            } else {
                                return n;
                            }
                        } else {
                            if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && a(t, s) && s.id === u) {
                                n.push(s);
                                return n;
                            }
                        }
                    } else if (r[2]) {
                        k.apply(n, T.call(t.getElementsByTagName(e), 0));
                        return n;
                    } else if ((u = r[3]) && K && t.getElementsByClassName) {
                        k.apply(n, T.call(t.getElementsByClassName(u), 0));
                        return n;
                    }
                }
            }
            return dt(e.replace(B, "$1"), t, n, i, l);
        }
        tt.matches = function(e, t) {
            return tt(e, null, null, t);
        };
        tt.matchesSelector = function(e, t) {
            return tt(t, null, null, [ e ]).length > 0;
        };
        function nt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e;
            };
        }
        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e;
            };
        }
        function rt(e) {
            return E(function(t) {
                t = +t;
                return E(function(n, i) {
                    var r, s = e([], n.length, t), o = s.length;
                    while (o--) {
                        if (n[r = s[o]]) {
                            n[r] = !(i[r] = n[r]);
                        }
                    }
                });
            });
        }
        s = tt.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (r === 1 || r === 9 || r === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent;
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += s(e);
                        }
                    }
                } else if (r === 3 || r === 4) {
                    return e.nodeValue;
                }
            } else {
                for (;t = e[i]; i++) {
                    n += s(t);
                }
            }
            return n;
        };
        o = tt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : false;
        };
        a = tt.contains = b.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e, i = t && t.parentNode;
            return e === i || !!(i && i.nodeType === 1 && n.contains && n.contains(i));
        } : b.compareDocumentPosition ? function(e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16);
        } : function(e, t) {
            while (t = t.parentNode) {
                if (t === e) {
                    return true;
                }
            }
            return false;
        };
        tt.attr = function(e, t) {
            var n, i = o(e);
            if (!i) {
                t = t.toLowerCase();
            }
            if (n = r.attrHandle[t]) {
                return n(e);
            }
            if (i || Y) {
                return e.getAttribute(t);
            }
            n = e.getAttributeNode(t);
            return n ? typeof e[t] === "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null;
        };
        r = tt.selectors = {
            cacheLength: 50,
            createPseudo: E,
            match: X,
            attrHandle: J ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            find: {
                ID: i ? function(e, t, n) {
                    if (typeof t.getElementById !== h && !n) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [ i ] : [];
                    }
                } : function(e, n, i) {
                    if (typeof n.getElementById !== h && !i) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== h && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                    }
                },
                TAG: G ? function(e, t) {
                    if (typeof t.getElementsByTagName !== h) {
                        return t.getElementsByTagName(e);
                    }
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var i, r = [], s = 0;
                        for (;i = n[s]; s++) {
                            if (i.nodeType === 1) {
                                r.push(i);
                            }
                        }
                        return r;
                    }
                    return n;
                },
                NAME: Z && function(e, t) {
                    if (typeof t.getElementsByName !== h) {
                        return t.getElementsByName(name);
                    }
                },
                CLASS: K && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== h && !n) {
                        return t.getElementsByClassName(e);
                    }
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(U, "");
                    e[3] = (e[4] || e[5] || "").replace(U, "");
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " ";
                    }
                    return e.slice(0, 4);
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            tt.error(e[0]);
                        }
                        e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd"));
                        e[4] = +(e[6] + e[7] || e[2] === "odd");
                    } else if (e[2]) {
                        tt.error(e[0]);
                    }
                    return e;
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (X["CHILD"].test(e[0])) {
                        return null;
                    }
                    if (e[3]) {
                        e[2] = e[3];
                    } else if (t = e[4]) {
                        if (I.test(t) && (n = ot(t, true)) && (n = t.indexOf(")", t.length - n) - t.length)) {
                            t = t.slice(0, n);
                            e[0] = e[0].slice(0, n);
                        }
                        e[2] = t;
                    }
                    return e.slice(0, 3);
                }
            },
            filter: {
                ID: i ? function(e) {
                    e = e.replace(U, "");
                    return function(t) {
                        return t.getAttribute("id") === e;
                    };
                } : function(e) {
                    e = e.replace(U, "");
                    return function(t) {
                        var n = typeof t.getAttributeNode !== h && t.getAttributeNode("id");
                        return n && n.value === e;
                    };
                },
                TAG: function(e) {
                    if (e === "*") {
                        return function() {
                            return true;
                        };
                    }
                    e = e.replace(U, "").toLowerCase();
                    return function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(e) {
                    var t = N[m][e + " "];
                    return t || (t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) && N(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== h && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = tt.attr(i, e);
                        if (r == null) {
                            return t === "!=";
                        }
                        if (!t) {
                            return true;
                        }
                        r += "";
                        return t === "=" ? r === n : t === "!=" ? r !== n : t === "^=" ? n && r.indexOf(n) === 0 : t === "*=" ? n && r.indexOf(n) > -1 : t === "$=" ? n && r.substr(r.length - n.length) === n : t === "~=" ? (" " + r + " ").indexOf(n) > -1 : t === "|=" ? r === n || r.substr(0, n.length + 1) === n + "-" : false;
                    };
                },
                CHILD: function(e, t, n, i) {
                    if (e === "nth") {
                        return function(e) {
                            var t, r, s = e.parentNode;
                            if (n === 1 && i === 0) {
                                return true;
                            }
                            if (s) {
                                r = 0;
                                for (t = s.firstChild; t; t = t.nextSibling) {
                                    if (t.nodeType === 1) {
                                        r++;
                                        if (e === t) {
                                            break;
                                        }
                                    }
                                }
                            }
                            r -= i;
                            return r === n || r % n === 0 && r / n >= 0;
                        };
                    }
                    return function(t) {
                        var n = t;
                        switch (e) {
                          case "only":
                          case "first":
                            while (n = n.previousSibling) {
                                if (n.nodeType === 1) {
                                    return false;
                                }
                            }
                            if (e === "first") {
                                return true;
                            }
                            n = t;

                          case "last":
                            while (n = n.nextSibling) {
                                if (n.nodeType === 1) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || tt.error("unsupported pseudo: " + e);
                    if (i[m]) {
                        return i(t);
                    }
                    if (i.length > 1) {
                        n = [ e, e, "", t ];
                        return r.setFilters.hasOwnProperty(e.toLowerCase()) ? E(function(e, n) {
                            var r, s = i(e, t), o = s.length;
                            while (o--) {
                                r = S.call(e, s[o]);
                                e[r] = !(n[r] = s[o]);
                            }
                        }) : function(e) {
                            return i(e, 0, n);
                        };
                    }
                    return i;
                }
            },
            pseudos: {
                not: E(function(e) {
                    var t = [], n = [], i = l(e.replace(B, "$1"));
                    return i[m] ? E(function(e, t, n, r) {
                        var s, o = i(e, null, r, []), a = e.length;
                        while (a--) {
                            if (s = o[a]) {
                                e[a] = !(t[a] = s);
                            }
                        }
                    }) : function(e, r, s) {
                        t[0] = e;
                        i(t, null, s, n);
                        return !n.pop();
                    };
                }),
                has: E(function(e) {
                    return function(t) {
                        return tt(e, t).length > 0;
                    };
                }),
                contains: E(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
                    };
                }),
                enabled: function(e) {
                    return e.disabled === false;
                },
                disabled: function(e) {
                    return e.disabled === true;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected;
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                    return e.selected === true;
                },
                parent: function(e) {
                    return !r.pseudos["empty"](e);
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) {
                            return false;
                        }
                        e = e.nextSibling;
                    }
                    return true;
                },
                header: function(e) {
                    return W.test(e.nodeName);
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
                },
                radio: nt("radio"),
                checkbox: nt("checkbox"),
                file: nt("file"),
                password: nt("password"),
                image: nt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button";
                },
                input: function(e) {
                    return V.test(e.nodeName);
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement;
                },
                first: rt(function() {
                    return [ 0 ];
                }),
                last: rt(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: rt(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: rt(function(e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                odd: rt(function(e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }
                    return e;
                }),
                lt: rt(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) {
                        e.push(i);
                    }
                    return e;
                }),
                gt: rt(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) {
                        e.push(i);
                    }
                    return e;
                })
            }
        };
        function st(e, t) {
            if (e && t) {
                var n = e.nextSibling;
                while (n) {
                    if (n === t) {
                        return -1;
                    }
                    n = n.nextSibling;
                }
            }
            return e ? 1 : -1;
        }
        u = b.compareDocumentPosition ? function(e, t) {
            var n, i;
            if (e === t) {
                f = true;
                return 0;
            }
            if (e.compareDocumentPosition && t.compareDocumentPosition) {
                if ((n = e.compareDocumentPosition(t)) & 1 || (i = e.parentNode) && i.nodeType === 11) {
                    if (e === y || a(y, e)) {
                        return -1;
                    }
                    if (t === y || a(y, t)) {
                        return 1;
                    }
                    return 0;
                }
                return n & 4 ? -1 : 1;
            }
            return e.compareDocumentPosition ? -1 : 1;
        } : function(e, t) {
            if (e === t) {
                f = true;
                return 0;
            } else if (e.sourceIndex && t.sourceIndex) {
                return (~t.sourceIndex || p) - (a(y, e) && ~e.sourceIndex || p);
            }
            var n = 0, i = [ e ], r = [ t ], s = e.parentNode, o = t.parentNode, l = s;
            if (e === y) {
                return -1;
            } else if (t === y) {
                return 1;
            } else if (!s && !o) {
                return 0;
            } else if (!o) {
                return -1;
            } else if (!s) {
                return 1;
            } else if (s === o) {
                return st(e, t);
            }
            while (l) {
                i.unshift(l);
                l = l.parentNode;
            }
            l = o;
            while (l) {
                r.unshift(l);
                l = l.parentNode;
            }
            while (i[n] === r[n]) {
                n++;
            }
            if (n === 0) {
                if (i[0] === y || a(y, i[0])) {
                    return -1;
                }
                if (r[0] === y || a(y, r[0])) {
                    return 1;
                }
                return 0;
            }
            return st(i[n], r[n]);
        };
        [ 0, 0 ].sort(u);
        d = !f;
        tt.uniqueSort = function(e) {
            var t, n = [], i = 1, r = 0;
            f = d;
            e.sort(u);
            if (f) {
                for (;t = e[i]; i++) {
                    if (t === e[i - 1]) {
                        r = n.push(i);
                    }
                }
                while (r--) {
                    e.splice(n[r], 1);
                }
            }
            return e;
        };
        tt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        };
        function ot(e, t) {
            var n, i, s, o, a, l, u, f = $[m][e + " "];
            if (f) {
                return t ? 0 : f.slice(0);
            }
            a = e;
            l = [];
            u = r.preFilter;
            while (a) {
                if (!n || (i = R.exec(a))) {
                    if (i) {
                        a = a.slice(i[0].length) || a;
                    }
                    l.push(s = []);
                }
                n = false;
                if (i = P.exec(a)) {
                    s.push(n = new v(i.shift()));
                    a = a.slice(n.length);
                    n.type = i[0].replace(B, " ");
                }
                for (o in r.filter) {
                    if ((i = X[o].exec(a)) && (!u[o] || (i = u[o](i)))) {
                        s.push(n = new v(i.shift()));
                        a = a.slice(n.length);
                        n.type = o;
                        n.matches = i;
                    }
                }
                if (!n) {
                    break;
                }
            }
            return t ? a.length : a ? tt.error(e) : $(e, l).slice(0);
        }
        function at(e, t, i) {
            var r = t.dir, s = i && t.dir === "parentNode", o = x++;
            return t.first ? function(t, n, i) {
                while (t = t[r]) {
                    if (s || t.nodeType === 1) {
                        return e(t, n, i);
                    }
                }
            } : function(t, i, a) {
                if (!a) {
                    var l, u = w + " " + o + " ", f = u + n;
                    while (t = t[r]) {
                        if (s || t.nodeType === 1) {
                            if ((l = t[m]) === f) {
                                return t.sizset;
                            } else if (typeof l === "string" && l.indexOf(u) === 0) {
                                if (t.sizset) {
                                    return t;
                                }
                            } else {
                                t[m] = f;
                                if (e(t, i, a)) {
                                    t.sizset = true;
                                    return t;
                                }
                                t.sizset = false;
                            }
                        }
                    }
                } else {
                    while (t = t[r]) {
                        if (s || t.nodeType === 1) {
                            if (e(t, i, a)) {
                                return t;
                            }
                        }
                    }
                }
            };
        }
        function lt(e) {
            return e.length > 1 ? function(t, n, i) {
                var r = e.length;
                while (r--) {
                    if (!e[r](t, n, i)) {
                        return false;
                    }
                }
                return true;
            } : e[0];
        }
        function ut(e, t, n, i, r) {
            var s, o = [], a = 0, l = e.length, u = t != null;
            for (;a < l; a++) {
                if (s = e[a]) {
                    if (!n || n(s, i, r)) {
                        o.push(s);
                        if (u) {
                            t.push(a);
                        }
                    }
                }
            }
            return o;
        }
        function ft(e, t, n, i, r, s) {
            if (i && !i[m]) {
                i = ft(i);
            }
            if (r && !r[m]) {
                r = ft(r, s);
            }
            return E(function(s, o, a, l) {
                var u, f, c, h = [], p = [], d = o.length, g = s || pt(t || "*", a.nodeType ? [ a ] : a, []), m = e && (s || !t) ? ut(g, h, e, a, l) : g, v = n ? r || (s ? e : d || i) ? [] : o : m;
                if (n) {
                    n(m, v, a, l);
                }
                if (i) {
                    u = ut(v, p);
                    i(u, [], a, l);
                    f = u.length;
                    while (f--) {
                        if (c = u[f]) {
                            v[p[f]] = !(m[p[f]] = c);
                        }
                    }
                }
                if (s) {
                    if (r || e) {
                        if (r) {
                            u = [];
                            f = v.length;
                            while (f--) {
                                if (c = v[f]) {
                                    u.push(m[f] = c);
                                }
                            }
                            r(null, v = [], u, l);
                        }
                        f = v.length;
                        while (f--) {
                            if ((c = v[f]) && (u = r ? S.call(s, c) : h[f]) > -1) {
                                s[u] = !(o[u] = c);
                            }
                        }
                    }
                } else {
                    v = ut(v === o ? v.splice(d, v.length) : v);
                    if (r) {
                        r(null, o, v, l);
                    } else {
                        k.apply(o, v);
                    }
                }
            });
        }
        function ct(e) {
            var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], l = o ? 1 : 0, u = at(function(e) {
                return e === t;
            }, a, true), f = at(function(e) {
                return S.call(t, e) > -1;
            }, a, true), h = [ function(e, n, i) {
                return !o && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
            } ];
            for (;l < s; l++) {
                if (n = r.relative[e[l].type]) {
                    h = [ at(lt(h), n) ];
                } else {
                    n = r.filter[e[l].type].apply(null, e[l].matches);
                    if (n[m]) {
                        i = ++l;
                        for (;i < s; i++) {
                            if (r.relative[e[i].type]) {
                                break;
                            }
                        }
                        return ft(l > 1 && lt(h), l > 1 && e.slice(0, l - 1).join("").replace(B, "$1"), n, l < i && ct(e.slice(l, i)), i < s && ct(e = e.slice(i)), i < s && e.join(""));
                    }
                    h.push(n);
                }
            }
            return lt(h);
        }
        function ht(e, t) {
            var i = t.length > 0, s = e.length > 0, o = function(a, l, u, f, h) {
                var p, d, g, m = [], v = 0, b = "0", x = a && [], T = h != null, S = c, E = a || s && r.find["TAG"]("*", h && l.parentNode || l), _ = w += S == null ? 1 : Math.E;
                if (T) {
                    c = l !== y && l;
                    n = o.el;
                }
                for (;(p = E[b]) != null; b++) {
                    if (s && p) {
                        for (d = 0; g = e[d]; d++) {
                            if (g(p, l, u)) {
                                f.push(p);
                                break;
                            }
                        }
                        if (T) {
                            w = _;
                            n = ++o.el;
                        }
                    }
                    if (i) {
                        if (p = !g && p) {
                            v--;
                        }
                        if (a) {
                            x.push(p);
                        }
                    }
                }
                v += b;
                if (i && b !== v) {
                    for (d = 0; g = t[d]; d++) {
                        g(x, m, l, u);
                    }
                    if (a) {
                        if (v > 0) {
                            while (b--) {
                                if (!(x[b] || m[b])) {
                                    m[b] = C.call(f);
                                }
                            }
                        }
                        m = ut(m);
                    }
                    k.apply(f, m);
                    if (T && !a && m.length > 0 && v + t.length > 1) {
                        tt.uniqueSort(f);
                    }
                }
                if (T) {
                    w = _;
                    c = S;
                }
                return x;
            };
            o.el = 0;
            return i ? E(o) : o;
        }
        l = tt.compile = function(e, t) {
            var n, i = [], r = [], s = j[m][e + " "];
            if (!s) {
                if (!t) {
                    t = ot(e);
                }
                n = t.length;
                while (n--) {
                    s = ct(t[n]);
                    if (s[m]) {
                        i.push(s);
                    } else {
                        r.push(s);
                    }
                }
                s = j(e, ht(r, i));
            }
            return s;
        };
        function pt(e, t, n) {
            var i = 0, r = t.length;
            for (;i < r; i++) {
                tt(e, t[i], n);
            }
            return n;
        }
        function dt(e, t, n, i, s) {
            var o, a, u, f, c, h = ot(e);
            if (!i) {
                if (h.length === 1) {
                    a = h[0] = h[0].slice(0);
                    if (a.length > 2 && (u = a[0]).type === "ID" && t.nodeType === 9 && !s && r.relative[a[1].type]) {
                        t = r.find["ID"](u.matches[0].replace(U, ""), t, s)[0];
                        if (!t) {
                            return n;
                        }
                        e = e.slice(a.shift().length);
                    }
                    for (o = X["POS"].test(e) ? -1 : a.length - 1; o >= 0; o--) {
                        u = a[o];
                        if (r.relative[f = u.type]) {
                            break;
                        }
                        if (c = r.find[f]) {
                            if (i = c(u.matches[0].replace(U, ""), z.test(a[0].type) && t.parentNode || t, s)) {
                                a.splice(o, 1);
                                e = i.length && a.join("");
                                if (!e) {
                                    k.apply(n, T.call(i, 0));
                                    return n;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            l(e, h)(i, t, s, n, z.test(e));
            return n;
        }
        if (y.querySelectorAll) {
            (function() {
                var e, t = dt, n = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, r = [ ":focus" ], s = [ ":active" ], a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.oMatchesSelector || b.msMatchesSelector;
                Q(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>";
                    if (!e.querySelectorAll("[selected]").length) {
                        r.push("\\[" + A + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        r.push(":checked");
                    }
                });
                Q(function(e) {
                    e.innerHTML = "<p test=''></p>";
                    if (e.querySelectorAll("[test^='']").length) {
                        r.push("[*^$]=" + A + "*(?:\"\"|'')");
                    }
                    e.innerHTML = "<input type='hidden'/>";
                    if (!e.querySelectorAll(":enabled").length) {
                        r.push(":enabled", ":disabled");
                    }
                });
                r = new RegExp(r.join("|"));
                dt = function(e, i, s, o, a) {
                    if (!o && !a && !r.test(e)) {
                        var l, u, f = true, c = m, h = i, p = i.nodeType === 9 && e;
                        if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            l = ot(e);
                            if (f = i.getAttribute("id")) {
                                c = f.replace(n, "\\$&");
                            } else {
                                i.setAttribute("id", c);
                            }
                            c = "[id='" + c + "'] ";
                            u = l.length;
                            while (u--) {
                                l[u] = c + l[u].join("");
                            }
                            h = z.test(e) && i.parentNode || i;
                            p = l.join(",");
                        }
                        if (p) {
                            try {
                                k.apply(s, T.call(h.querySelectorAll(p), 0));
                                return s;
                            } catch (d) {} finally {
                                if (!f) {
                                    i.removeAttribute("id");
                                }
                            }
                        }
                    }
                    return t(e, i, s, o, a);
                };
                if (a) {
                    Q(function(t) {
                        e = a.call(t, "div");
                        try {
                            a.call(t, "[test!='']:sizzle");
                            s.push("!=", O);
                        } catch (n) {}
                    });
                    s = new RegExp(s.join("|"));
                    tt.matchesSelector = function(t, n) {
                        n = n.replace(i, "='$1']");
                        if (!o(t) && !s.test(n) && !r.test(n)) {
                            try {
                                var l = a.call(t, n);
                                if (l || e || t.document && t.document.nodeType !== 11) {
                                    return l;
                                }
                            } catch (u) {}
                        }
                        return tt(n, null, null, [ t ]).length > 0;
                    };
                }
            })();
        }
        r.pseudos["nth"] = r.pseudos["eq"];
        function gt() {}
        r.filters = gt.prototype = r.pseudos;
        r.setFilters = new gt();
        tt.attr = g.attr;
        g.find = tt;
        g.expr = tt.selectors;
        g.expr[":"] = g.expr.pseudos;
        g.unique = tt.uniqueSort;
        g.text = tt.getText;
        g.isXMLDoc = tt.isXML;
        g.contains = tt.contains;
    })(e);
    var it = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, st = /^.[^:#\[\.,]*$/, ot = g.expr.match.needsContext, at = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    g.fn.extend({
        find: function(e) {
            var t, n, i, r, s, o, a = this;
            if (typeof e !== "string") {
                return g(e).filter(function() {
                    for (t = 0, n = a.length; t < n; t++) {
                        if (g.contains(a[t], this)) {
                            return true;
                        }
                    }
                });
            }
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                i = o.length;
                g.find(e, this[t], o);
                if (t > 0) {
                    for (r = i; r < o.length; r++) {
                        for (s = 0; s < i; s++) {
                            if (o[s] === o[r]) {
                                o.splice(r--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return o;
        },
        has: function(e) {
            var t, n = g(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++) {
                    if (g.contains(this, n[t])) {
                        return true;
                    }
                }
            });
        },
        not: function(e) {
            return this.pushStack(ft(this, e, false), "not", e);
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, true), "filter", e);
        },
        is: function(e) {
            return !!e && (typeof e === "string" ? ot.test(e) ? g(e, this.context).index(this[0]) >= 0 : g.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, s = [], o = ot.test(e) || typeof e !== "string" ? g(e, t || this.context) : 0;
            for (;i < r; i++) {
                n = this[i];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : g.find.matchesSelector(n, e)) {
                        s.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            s = s.length > 1 ? g.unique(s) : s;
            return this.pushStack(s, "closest", e);
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof e === "string") {
                return g.inArray(this[0], g(e));
            }
            return g.inArray(e.jquery ? e[0] : e, this);
        },
        add: function(e, t) {
            var n = typeof e === "string" ? g(e, t) : g.makeArray(e && e.nodeType ? [ e ] : e), i = g.merge(this.get(), n);
            return this.pushStack(g.unique(i));
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
        }
    });
    g.fn.andSelf = g.fn.addBack;
    function lt(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11;
    }
    function ut(e, t) {
        do {
            e = e[t];
        } while (e && e.nodeType !== 1);
        return e;
    }
    g.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
            return g.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return g.dir(e, "parentNode", n);
        },
        next: function(e) {
            return ut(e, "nextSibling");
        },
        prev: function(e) {
            return ut(e, "previousSibling");
        },
        nextAll: function(e) {
            return g.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return g.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return g.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return g.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return g.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return g.sibling(e.firstChild);
        },
        contents: function(e) {
            return g.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : g.merge([], e.childNodes);
        }
    }, function(e, t) {
        g.fn[e] = function(n, i) {
            var r = g.map(this, t, n);
            if (!it.test(e)) {
                i = n;
            }
            if (i && typeof i === "string") {
                r = g.filter(i, r);
            }
            r = this.length > 1 && !at[e] ? g.unique(r) : r;
            if (this.length > 1 && rt.test(e)) {
                r = r.reverse();
            }
            return this.pushStack(r, e, f.call(arguments).join(","));
        };
    });
    g.extend({
        filter: function(e, t, n) {
            if (n) {
                e = ":not(" + e + ")";
            }
            return t.length === 1 ? g.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : g.find.matches(e, t);
        },
        dir: function(e, n, i) {
            var r = [], s = e[n];
            while (s && s.nodeType !== 9 && (i === t || s.nodeType !== 1 || !g(s).is(i))) {
                if (s.nodeType === 1) {
                    r.push(s);
                }
                s = s[n];
            }
            return r;
        },
        sibling: function(e, t) {
            var n = [];
            for (;e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e);
                }
            }
            return n;
        }
    });
    function ft(e, t, n) {
        t = t || 0;
        if (g.isFunction(t)) {
            return g.grep(e, function(e, i) {
                var r = !!t.call(e, i, e);
                return r === n;
            });
        } else if (t.nodeType) {
            return g.grep(e, function(e) {
                return e === t === n;
            });
        } else if (typeof t === "string") {
            var i = g.grep(e, function(e) {
                return e.nodeType === 1;
            });
            if (st.test(t)) {
                return g.filter(t, i, !n);
            } else {
                t = g.filter(t, i);
            }
        }
        return g.grep(e, function(e) {
            return g.inArray(e, t) >= 0 === n;
        });
    }
    function ct(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop());
            }
        }
        return n;
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", pt = / jQuery\d+="(?:null|\d+)"/g, dt = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, mt = /<([\w:]+)/, vt = /<tbody/i, yt = /<|&#?\w+;/, bt = /<(?:script|style|link)/i, wt = /<(?:script|object|embed|option|style)/i, xt = new RegExp("<(?:" + ht + ")[\\s/>]", "i"), Ct = /^(?:checkbox|radio)$/, kt = /checked\s*(?:[^=]|=\s*.checked.)/i, Tt = /\/(java|ecma)script/i, St = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Et = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, _t = ct(r), Nt = _t.appendChild(r.createElement("div")), $t = function(e) {
        return e;
    };
    Et.optgroup = Et.option;
    Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead;
    Et.th = Et.td;
    if (!g.support.htmlSerialize) {
        Et._default = [ 1, "X<div>", "</div>" ];
        Et.param = [ 1, "X<object>", "</object>" ];
        $t = function(e) {
            return e.replace(/<param([^>]*)>/gi, function(e, t, n) {
                var i = t.match(/name=["']([^"']*)["']/i);
                return i ? i[1].length ? "<param" + t + ">" : "<param" + t.replace(i[0], "name='_" + n + "'") + ">" : "<param name='_" + n + "' " + t + ">";
            });
        };
    }
    g.fn.extend({
        text: function(e) {
            return g.access(this, function(e) {
                return e === t ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (g.isFunction(e)) {
                return this.each(function(t) {
                    g(this).wrapAll(e.call(this, t));
                });
            }
            if (this[0]) {
                var t = g(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    t.insertBefore(this[0]);
                }
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) {
                        e = e.firstChild;
                    }
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            if (g.isFunction(e)) {
                return this.each(function(t) {
                    g(this).wrapInner(e.call(this, t));
                });
            }
            return this.each(function() {
                var t = g(this), n = t.contents();
                if (n.length) {
                    n.wrapAll(e);
                } else {
                    t.append(e);
                }
            });
        },
        wrap: function(e) {
            var t = g.isFunction(e);
            return this.each(function(n) {
                g(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!g.nodeName(this, "body")) {
                    g(this).replaceWith(this.childNodes);
                }
            }).end();
        },
        append: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, true, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.insertBefore(e, this.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, false, function(e) {
                if (!lt(this)) {
                    this.parentNode.insertBefore(e, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, false, function(e) {
                if (!lt(this)) {
                    this.parentNode.insertBefore(e, this.nextSibling);
                }
            });
        },
        remove: function(e, t) {
            var n, i = 0;
            for (;(n = this[i]) != null; i++) {
                if (!e || g.filter(e, [ n ]).length) {
                    if (!t && n.nodeType === 1) {
                        g.cleanData(n.getElementsByTagName("*"));
                        g.cleanData([ n ]);
                    }
                    if (n.parentNode) {
                        n.parentNode.removeChild(n);
                    }
                }
            }
            return this;
        },
        empty: function() {
            var e, t = 0;
            for (;(e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    g.cleanData(e.getElementsByTagName("*"));
                }
                while (e.firstChild) {
                    e.removeChild(e.firstChild);
                }
            }
            return this;
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return g.clone(this, e, t);
            });
        },
        html: function(e) {
            return g.access(this, function(e) {
                var n = this[0] || {}, i = 0, r = this.length;
                if (e === t) {
                    return n.nodeType === 1 ? n.innerHTML.replace(pt, "") : t;
                }
                if (typeof e === "string" && !bt.test(e) && (g.support.htmlSerialize || !xt.test(e)) && (g.support.leadingWhitespace || !dt.test(e)) && !Et[(mt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(gt, "<$1></$2>");
                    try {
                        for (;i < r; i++) {
                            n = this[i] || {};
                            if (n.nodeType === 1) {
                                g.cleanData(n.getElementsByTagName("*"));
                                n.innerHTML = e;
                            }
                        }
                        n = 0;
                    } catch (s) {}
                }
                if (n) {
                    this.empty().append(e);
                }
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            var t = this, n = g.isFunction(e);
            if (!n && typeof e !== "string") {
                e = g(e).detach();
            }
            this.each(function(i) {
                var r = this.nextSibling, s = this.parentNode, o = !n ? e : e.call(this, i, this);
                if (lt(this)) {
                    t[i] = g(o).clone()[0];
                    return;
                }
                g(this).remove();
                if (r) {
                    g(r).before(o);
                } else {
                    g(s).append(o);
                }
            });
            return this;
        },
        detach: function(e) {
            return this.remove(e, true);
        },
        domManip: function(e, n, i) {
            e = [].concat.apply([], e);
            var r, s, o, a, l = 0, u = e[0], f = [], c = this.length;
            if (!g.support.checkClone && c > 1 && typeof u === "string" && kt.test(u)) {
                return this.each(function() {
                    g(this).domManip(e, n, i);
                });
            }
            if (g.isFunction(u)) {
                return this.each(function(r) {
                    var s = g(this);
                    e[0] = u.call(this, r, n ? s.html() : t);
                    s.domManip(e, n, i);
                });
            }
            if (this[0]) {
                r = g.buildFragment(e, this, f);
                o = r.fragment;
                s = o.firstChild;
                if (o.childNodes.length === 1) {
                    o = s;
                }
                if (s) {
                    n = n && g.nodeName(s, "tr");
                    for (a = r.cacheable || c - 1; l < c; l++) {
                        i.call(n && g.nodeName(this[l], "table") ? jt(this[l], "tbody") : this[l], l === a ? o : g.clone(o, true, true));
                    }
                }
                o = s = null;
                if (f.length) {
                    g.each(f, function(e, t) {
                        if (t.src) {
                            if (g.ajax) {
                                g.ajax({
                                    url: t.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: false,
                                    global: false,
                                    "throws": true
                                });
                            } else {
                                g.error("no ajax");
                            }
                        } else {
                            g.globalEval((t.text || t.textContent || t.innerHTML || "").replace(St, ""));
                        }
                        if (t.parentNode) {
                            t.parentNode.removeChild(t);
                        }
                    });
                }
            }
            return this;
        }
    });
    function jt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !g.hasData(e)) {
            return;
        }
        var n, i, r, s = g._data(e), o = g._data(t, s), a = s.events;
        if (a) {
            delete o.handle;
            o.events = {};
            for (n in a) {
                for (i = 0, r = a[n].length; i < r; i++) {
                    g.event.add(t, n, a[n][i]);
                }
            }
        }
        if (o.data) {
            o.data = g.extend({}, o.data);
        }
    }
    function Dt(e, t) {
        var n;
        if (t.nodeType !== 1) {
            return;
        }
        if (t.clearAttributes) {
            t.clearAttributes();
        }
        if (t.mergeAttributes) {
            t.mergeAttributes(e);
        }
        n = t.nodeName.toLowerCase();
        if (n === "object") {
            if (t.parentNode) {
                t.outerHTML = e.outerHTML;
            }
            if (g.support.html5Clone && e.innerHTML && !g.trim(t.innerHTML)) {
                t.innerHTML = e.innerHTML;
            }
        } else if (n === "input" && Ct.test(e.type)) {
            t.defaultChecked = t.checked = e.checked;
            if (t.value !== e.value) {
                t.value = e.value;
            }
        } else if (n === "option") {
            t.selected = e.defaultSelected;
        } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue;
        } else if (n === "script" && t.text !== e.text) {
            t.text = e.text;
        }
        t.removeAttribute(g.expando);
    }
    g.buildFragment = function(e, n, i) {
        var s, o, a, l = e[0];
        n = n || r;
        n = !n.nodeType && n[0] || n;
        n = n.ownerDocument || n;
        if (e.length === 1 && typeof l === "string" && l.length < 512 && n === r && l.charAt(0) === "<" && !wt.test(l) && (g.support.checkClone || !kt.test(l)) && (g.support.html5Clone || !xt.test(l))) {
            o = true;
            s = g.fragments[l];
            a = s !== t;
        }
        if (!s) {
            s = n.createDocumentFragment();
            g.clean(e, n, s, i);
            if (o) {
                g.fragments[l] = a && s;
            }
        }
        return {
            fragment: s,
            cacheable: o
        };
    };
    g.fragments = {};
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        g.fn[e] = function(n) {
            var i, r = 0, s = [], o = g(n), a = o.length, l = this.length === 1 && this[0].parentNode;
            if ((l == null || l && l.nodeType === 11 && l.childNodes.length === 1) && a === 1) {
                o[t](this[0]);
                return this;
            } else {
                for (;r < a; r++) {
                    i = (r > 0 ? this.clone(true) : this).get();
                    g(o[r])[t](i);
                    s = s.concat(i);
                }
                return this.pushStack(s, e, o.selector);
            }
        };
    });
    function Lt(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*");
        } else if (typeof e.querySelectorAll !== "undefined") {
            return e.querySelectorAll("*");
        } else {
            return [];
        }
    }
    function Ht(e) {
        if (Ct.test(e.type)) {
            e.defaultChecked = e.checked;
        }
    }
    g.extend({
        clone: function(e, t, n) {
            var i, r, s, o;
            if (g.support.html5Clone || g.isXMLDoc(e) || !xt.test("<" + e.nodeName + ">")) {
                o = e.cloneNode(true);
            } else {
                Nt.innerHTML = e.outerHTML;
                Nt.removeChild(o = Nt.firstChild);
            }
            if ((!g.support.noCloneEvent || !g.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !g.isXMLDoc(e)) {
                Dt(e, o);
                i = Lt(e);
                r = Lt(o);
                for (s = 0; i[s]; ++s) {
                    if (r[s]) {
                        Dt(i[s], r[s]);
                    }
                }
            }
            if (t) {
                At(e, o);
                if (n) {
                    i = Lt(e);
                    r = Lt(o);
                    for (s = 0; i[s]; ++s) {
                        At(i[s], r[s]);
                    }
                }
            }
            i = r = null;
            return o;
        },
        clean: function(e, t, n, i) {
            var s, o, a, l, u, f, c, h, p, d, m, v = t === r && _t, y = [];
            if (!t || typeof t.createDocumentFragment === "undefined") {
                t = r;
            }
            for (s = 0; (a = e[s]) != null; s++) {
                if (typeof a === "number") {
                    a += "";
                }
                if (!a) {
                    continue;
                }
                if (typeof a === "string") {
                    if (!yt.test(a)) {
                        a = t.createTextNode(a);
                    } else {
                        v = v || ct(t);
                        c = t.createElement("div");
                        v.appendChild(c);
                        a = a.replace(gt, "<$1></$2>");
                        l = (mt.exec(a) || [ "", "" ])[1].toLowerCase();
                        u = Et[l] || Et._default;
                        f = u[0];
                        c.innerHTML = u[1] + $t(a) + u[2];
                        while (f--) {
                            c = c.lastChild;
                        }
                        if (!g.support.tbody) {
                            h = vt.test(a);
                            p = l === "table" && !h ? c.firstChild && c.firstChild.childNodes : u[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o) {
                                if (g.nodeName(p[o], "tbody") && !p[o].childNodes.length) {
                                    p[o].parentNode.removeChild(p[o]);
                                }
                            }
                        }
                        if (!g.support.leadingWhitespace && dt.test(a)) {
                            c.insertBefore(t.createTextNode(dt.exec(a)[0]), c.firstChild);
                        }
                        a = c.childNodes;
                        c.parentNode.removeChild(c);
                    }
                }
                if (a.nodeType) {
                    y.push(a);
                } else {
                    g.merge(y, a);
                }
            }
            if (c) {
                a = c = v = null;
            }
            if (!g.support.appendChecked) {
                for (s = 0; (a = y[s]) != null; s++) {
                    if (g.nodeName(a, "input")) {
                        Ht(a);
                    } else if (typeof a.getElementsByTagName !== "undefined") {
                        g.grep(a.getElementsByTagName("input"), Ht);
                    }
                }
            }
            if (n) {
                d = function(e) {
                    if (!e.type || Tt.test(e.type)) {
                        return i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
                    }
                };
                for (s = 0; (a = y[s]) != null; s++) {
                    if (!(g.nodeName(a, "script") && d(a))) {
                        n.appendChild(a);
                        if (typeof a.getElementsByTagName !== "undefined") {
                            m = g.grep(g.merge([], a.getElementsByTagName("script")), d);
                            y.splice.apply(y, [ s + 1, 0 ].concat(m));
                            s += m.length;
                        }
                    }
                }
            }
            return y;
        },
        cleanData: function(e, t) {
            var n, i, r, s, o = 0, a = g.expando, l = g.cache, u = g.support.deleteExpando, f = g.event.special;
            for (;(r = e[o]) != null; o++) {
                if (t || g.acceptData(r)) {
                    i = r[a];
                    n = i && l[i];
                    if (n) {
                        if (n.events) {
                            for (s in n.events) {
                                if (f[s]) {
                                    g.event.remove(r, s);
                                } else {
                                    g.removeEvent(r, s, n.handle);
                                }
                            }
                        }
                        if (l[i]) {
                            delete l[i];
                            if (u) {
                                delete r[a];
                            } else if (r.removeAttribute) {
                                r.removeAttribute(a);
                            } else {
                                r[a] = null;
                            }
                            b.push(i);
                        }
                    }
                }
            }
        }
    });
    var Ft, Ot, Mt, Bt = /alpha\([^)]*\)/i, Rt = /opacity=([^)]*)/, Pt = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, zt = new RegExp("^(" + m + ")(.*)$", "i"), Wt = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"), Vt = new RegExp("^([-+])=(" + m + ")", "i"), Ut = {
        BODY: "block"
    }, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Gt = [ "Top", "Right", "Bottom", "Left" ], Jt = [ "Webkit", "O", "Moz", "ms" ];
    function Yt(e, t) {
        if (t in e) {
            return t;
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Jt.length;
        while (r--) {
            t = Jt[r] + n;
            if (t in e) {
                return t;
            }
        }
        return i;
    }
    function Kt(e, t) {
        e = t || e;
        return g.css(e, "display") === "none" || !g.contains(e.ownerDocument, e);
    }
    function Zt(e, t) {
        var n, i, r = [], s = 0, o = e.length;
        for (;s < o; s++) {
            n = e[s];
            if (!n.style) {
                continue;
            }
            r[s] = g._data(n, "olddisplay");
            if (t) {
                if (!r[s] && n.style.display === "none") {
                    n.style.display = "";
                }
                if (n.style.display === "" && Kt(n)) {
                    r[s] = g._data(n, "olddisplay", rn(n.nodeName));
                }
            } else {
                i = Ft(n, "display");
                if (!r[s] && i !== "none") {
                    g._data(n, "olddisplay", i);
                }
            }
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) {
                continue;
            }
            if (!t || n.style.display === "none" || n.style.display === "") {
                n.style.display = t ? r[s] || "" : "none";
            }
        }
        return e;
    }
    g.fn.extend({
        css: function(e, n) {
            return g.access(this, function(e, n, i) {
                return i !== t ? g.style(e, n, i) : g.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return Zt(this, true);
        },
        hide: function() {
            return Zt(this);
        },
        toggle: function(e) {
            var t = typeof e === "boolean";
            return this.each(function() {
                if (t ? e : Kt(this)) {
                    g(this).show();
                } else {
                    g(this).hide();
                }
            });
        }
    });
    g.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ft(e, "opacity");
                        return n === "" ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": g.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return;
            }
            var s, o, a, l = g.camelCase(n), u = e.style;
            n = g.cssProps[l] || (g.cssProps[l] = Yt(u, l));
            a = g.cssHooks[n] || g.cssHooks[l];
            if (i !== t) {
                o = typeof i;
                if (o === "string" && (s = Vt.exec(i))) {
                    i = (s[1] + 1) * s[2] + parseFloat(g.css(e, n));
                    o = "number";
                }
                if (i == null || o === "number" && isNaN(i)) {
                    return;
                }
                if (o === "number" && !g.cssNumber[l]) {
                    i += "px";
                }
                if (!a || !("set" in a) || (i = a.set(e, i, r)) !== t) {
                    try {
                        u[n] = i;
                    } catch (f) {}
                }
            } else {
                if (a && "get" in a && (s = a.get(e, false, r)) !== t) {
                    return s;
                }
                return u[n];
            }
        },
        css: function(e, n, i, r) {
            var s, o, a, l = g.camelCase(n);
            n = g.cssProps[l] || (g.cssProps[l] = Yt(e.style, l));
            a = g.cssHooks[n] || g.cssHooks[l];
            if (a && "get" in a) {
                s = a.get(e, true, r);
            }
            if (s === t) {
                s = Ft(e, n);
            }
            if (s === "normal" && n in Qt) {
                s = Qt[n];
            }
            if (i || r !== t) {
                o = parseFloat(s);
                return i || g.isNumeric(o) ? o || 0 : s;
            }
            return s;
        },
        swap: function(e, t, n) {
            var i, r, s = {};
            for (r in t) {
                s[r] = e.style[r];
                e.style[r] = t[r];
            }
            i = n.call(e);
            for (r in t) {
                e.style[r] = s[r];
            }
            return i;
        }
    });
    if (e.getComputedStyle) {
        Ft = function(t, n) {
            var i, r, s, o, a = e.getComputedStyle(t, null), l = t.style;
            if (a) {
                i = a.getPropertyValue(n) || a[n];
                if (i === "" && !g.contains(t.ownerDocument, t)) {
                    i = g.style(t, n);
                }
                if (Wt.test(i) && qt.test(n)) {
                    r = l.width;
                    s = l.minWidth;
                    o = l.maxWidth;
                    l.minWidth = l.maxWidth = l.width = i;
                    i = a.width;
                    l.width = r;
                    l.minWidth = s;
                    l.maxWidth = o;
                }
            }
            return i;
        };
    } else if (r.documentElement.currentStyle) {
        Ft = function(e, t) {
            var n, i, r = e.currentStyle && e.currentStyle[t], s = e.style;
            if (r == null && s && s[t]) {
                r = s[t];
            }
            if (Wt.test(r) && !Pt.test(t)) {
                n = s.left;
                i = e.runtimeStyle && e.runtimeStyle.left;
                if (i) {
                    e.runtimeStyle.left = e.currentStyle.left;
                }
                s.left = t === "fontSize" ? "1em" : r;
                r = s.pixelLeft + "px";
                s.left = n;
                if (i) {
                    e.runtimeStyle.left = i;
                }
            }
            return r === "" ? "auto" : r;
        };
    }
    function en(e, t, n) {
        var i = zt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function tn(e, t, n, i) {
        var r = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
        for (;r < 4; r += 2) {
            if (n === "margin") {
                s += g.css(e, n + Gt[r], true);
            }
            if (i) {
                if (n === "content") {
                    s -= parseFloat(Ft(e, "padding" + Gt[r])) || 0;
                }
                if (n !== "margin") {
                    s -= parseFloat(Ft(e, "border" + Gt[r] + "Width")) || 0;
                }
            } else {
                s += parseFloat(Ft(e, "padding" + Gt[r])) || 0;
                if (n !== "padding") {
                    s += parseFloat(Ft(e, "border" + Gt[r] + "Width")) || 0;
                }
            }
        }
        return s;
    }
    function nn(e, t, n) {
        var i = t === "width" ? e.offsetWidth : e.offsetHeight, r = true, s = g.support.boxSizing && g.css(e, "boxSizing") === "border-box";
        if (i <= 0 || i == null) {
            i = Ft(e, t);
            if (i < 0 || i == null) {
                i = e.style[t];
            }
            if (Wt.test(i)) {
                return i;
            }
            r = s && (g.support.boxSizingReliable || i === e.style[t]);
            i = parseFloat(i) || 0;
        }
        return i + tn(e, t, n || (s ? "border" : "content"), r) + "px";
    }
    function rn(e) {
        if (Ut[e]) {
            return Ut[e];
        }
        var t = g("<" + e + ">").appendTo(r.body), n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Ot = r.body.appendChild(Ot || g.extend(r.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Mt || !Ot.createElement) {
                Mt = (Ot.contentWindow || Ot.contentDocument).document;
                Mt.write("<!doctype html><html><body>");
                Mt.close();
            }
            t = Mt.body.appendChild(Mt.createElement(e));
            n = Ft(t, "display");
            r.body.removeChild(Ot);
        }
        Ut[e] = n;
        return n;
    }
    g.each([ "height", "width" ], function(e, t) {
        g.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) {
                    if (e.offsetWidth === 0 && It.test(Ft(e, "display"))) {
                        return g.swap(e, Xt, function() {
                            return nn(e, t, i);
                        });
                    } else {
                        return nn(e, t, i);
                    }
                }
            },
            set: function(e, n, i) {
                return en(e, n, i ? tn(e, t, i, g.support.boxSizing && g.css(e, "boxSizing") === "border-box") : 0);
            }
        };
    });
    if (!g.support.opacity) {
        g.cssHooks.opacity = {
            get: function(e, t) {
                return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
            },
            set: function(e, t) {
                var n = e.style, i = e.currentStyle, r = g.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = i && i.filter || n.filter || "";
                n.zoom = 1;
                if (t >= 1 && g.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (i && !i.filter) {
                        return;
                    }
                }
                n.filter = Bt.test(s) ? s.replace(Bt, r) : s + " " + r;
            }
        };
    }
    g(function() {
        if (!g.support.reliableMarginRight) {
            g.cssHooks.marginRight = {
                get: function(e, t) {
                    return g.swap(e, {
                        display: "inline-block"
                    }, function() {
                        if (t) {
                            return Ft(e, "marginRight");
                        }
                    });
                }
            };
        }
        if (!g.support.pixelPosition && g.fn.position) {
            g.each([ "top", "left" ], function(e, t) {
                g.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var i = Ft(e, t);
                            return Wt.test(i) ? g(e).position()[t] + "px" : i;
                        }
                    }
                };
            });
        }
    });
    if (g.expr && g.expr.filters) {
        g.expr.filters.hidden = function(e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !g.support.reliableHiddenOffsets && (e.style && e.style.display || Ft(e, "display")) === "none";
        };
        g.expr.filters.visible = function(e) {
            return !g.expr.filters.hidden(e);
        };
    }
    g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        g.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = typeof n === "string" ? n.split(" ") : [ n ], s = {};
                for (i = 0; i < 4; i++) {
                    s[e + Gt[i] + t] = r[i] || r[i - 2] || r[0];
                }
                return s;
            }
        };
        if (!qt.test(e)) {
            g.cssHooks[e + t].set = en;
        }
    });
    var sn = /%20/g, on = /\[\]$/, an = /\r?\n/g, ln = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, un = /^(?:select|textarea)/i;
    g.fn.extend({
        serialize: function() {
            return g.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? g.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || un.test(this.nodeName) || ln.test(this.type));
            }).map(function(e, t) {
                var n = g(this).val();
                return n == null ? null : g.isArray(n) ? g.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(an, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(an, "\r\n")
                };
            }).get();
        }
    });
    g.param = function(e, n) {
        var i, r = [], s = function(e, t) {
            t = g.isFunction(t) ? t() : t == null ? "" : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t) {
            n = g.ajaxSettings && g.ajaxSettings.traditional;
        }
        if (g.isArray(e) || e.jquery && !g.isPlainObject(e)) {
            g.each(e, function() {
                s(this.name, this.value);
            });
        } else {
            for (i in e) {
                fn(i, e[i], n, s);
            }
        }
        return r.join("&").replace(sn, "+");
    };
    function fn(e, t, n, i) {
        var r;
        if (g.isArray(t)) {
            g.each(t, function(t, r) {
                if (n || on.test(e)) {
                    i(e, r);
                } else {
                    fn(e + "[" + (typeof r === "object" ? t : "") + "]", r, n, i);
                }
            });
        } else if (!n && g.type(t) === "object") {
            for (r in t) {
                fn(e + "[" + r + "]", t[r], n, i);
            }
        } else {
            i(e, t);
        }
    }
    var cn, hn, pn = g.now(), dn = /#.*$/, gn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, mn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, yn = /^\/\//, bn = /\?/, wn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, xn = /([?&])_=[^&]*/, Cn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = g.fn.load, Tn = {}, Sn = {}, En = [ "*/" ] + [ "*" ];
    try {
        hn = s.href;
    } catch (_n) {
        hn = r.createElement("a");
        hn.href = "";
        hn = hn.href;
    }
    cn = Cn.exec(hn.toLowerCase()) || [];
    function Nn(e) {
        return function(t, n) {
            if (typeof t !== "string") {
                n = t;
                t = "*";
            }
            var i, r, s, o = t.toLowerCase().split(y), a = 0, l = o.length;
            if (g.isFunction(n)) {
                for (;a < l; a++) {
                    i = o[a];
                    s = /^\+/.test(i);
                    if (s) {
                        i = i.substr(1) || "*";
                    }
                    r = e[i] = e[i] || [];
                    r[s ? "unshift" : "push"](n);
                }
            }
        };
    }
    function $n(e, t, n, i) {
        var r = {}, s = e === Sn;
        function o(a) {
            var l;
            r[a] = true;
            g.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                if (typeof u === "string" && !s && !r[u]) {
                    t.dataTypes.unshift(u);
                    o(u);
                    return false;
                } else if (s) {
                    return !(l = u);
                }
            });
            return l;
        }
        return o(t.dataTypes[0]) || !r["*"] && o("*");
    }
    function jn(e, n) {
        var i, r, s = g.ajaxSettings.flatOptions || {};
        for (i in n) {
            if (n[i] !== t) {
                (s[i] ? e : r || (r = {}))[i] = n[i];
            }
        }
        if (r) {
            g.extend(true, e, r);
        }
    }
    g.fn.load = function(e, n, i) {
        if (typeof e !== "string" && kn) {
            return kn.apply(this, arguments);
        }
        if (!this.length) {
            return this;
        }
        var r, s, o, a = this, l = e.indexOf(" ");
        if (l >= 0) {
            r = e.slice(l, e.length);
            e = e.slice(0, l);
        }
        if (g.isFunction(n)) {
            i = n;
            n = t;
        } else if (n && typeof n === "object") {
            s = "POST";
        }
        g.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                if (i) {
                    a.each(i, o || [ e.responseText, t, e ]);
                }
            }
        }).done(function(e) {
            o = arguments;
            a.html(r ? g("<div>").append(e.replace(wn, "")).find(r) : e);
        });
        return this;
    };
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        g.fn[t] = function(e) {
            return this.on(t, e);
        };
    });
    g.each([ "get", "post" ], function(e, n) {
        g[n] = function(e, i, r, s) {
            if (g.isFunction(i)) {
                s = s || r;
                r = i;
                i = t;
            }
            return g.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: s
            });
        };
    });
    g.extend({
        getScript: function(e, n) {
            return g.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return g.get(e, t, n, "json");
        },
        ajaxSetup: function(e, t) {
            if (t) {
                jn(e, g.ajaxSettings);
            } else {
                t = e;
                e = g.ajaxSettings;
            }
            jn(e, t);
            return e;
        },
        ajaxSettings: {
            url: hn,
            isLocal: mn.test(cn[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": En
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
                "text html": true,
                "text json": g.parseJSON,
                "text xml": g.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: Nn(Tn),
        ajaxTransport: Nn(Sn),
        ajax: function(e, n) {
            if (typeof e === "object") {
                n = e;
                e = t;
            }
            n = n || {};
            var i, r, s, o, a, l, u, f, c = g.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof g) ? g(h) : g.event, d = g.Deferred(), m = g.Callbacks("once memory"), v = c.statusCode || {}, b = {}, w = {}, x = 0, C = "canceled", k = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!x) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e;
                        b[e] = t;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return x === 2 ? r : null;
                },
                getResponseHeader: function(e) {
                    var n;
                    if (x === 2) {
                        if (!s) {
                            s = {};
                            while (n = gn.exec(r)) {
                                s[n[1].toLowerCase()] = n[2];
                            }
                        }
                        n = s[e.toLowerCase()];
                    }
                    return n === t ? null : n;
                },
                overrideMimeType: function(e) {
                    if (!x) {
                        c.mimeType = e;
                    }
                    return this;
                },
                abort: function(e) {
                    e = e || C;
                    if (o) {
                        o.abort(e);
                    }
                    T(0, e);
                    return this;
                }
            };
            function T(e, n, s, l) {
                var f, y, b, w, C, T = n;
                if (x === 2) {
                    return;
                }
                x = 2;
                if (a) {
                    clearTimeout(a);
                }
                o = t;
                r = l || "";
                k.readyState = e > 0 ? 4 : 0;
                if (s) {
                    w = An(c, k, s);
                }
                if (e >= 200 && e < 300 || e === 304) {
                    if (c.ifModified) {
                        C = k.getResponseHeader("Last-Modified");
                        if (C) {
                            g.lastModified[i] = C;
                        }
                        C = k.getResponseHeader("Etag");
                        if (C) {
                            g.etag[i] = C;
                        }
                    }
                    if (e === 304) {
                        T = "notmodified";
                        f = true;
                    } else {
                        f = Dn(c, w);
                        T = f.state;
                        y = f.data;
                        b = f.error;
                        f = !b;
                    }
                } else {
                    b = T;
                    if (!T || e) {
                        T = "error";
                        if (e < 0) {
                            e = 0;
                        }
                    }
                }
                k.status = e;
                k.statusText = (n || T) + "";
                if (f) {
                    d.resolveWith(h, [ y, T, k ]);
                } else {
                    d.rejectWith(h, [ k, T, b ]);
                }
                k.statusCode(v);
                v = t;
                if (u) {
                    p.trigger("ajax" + (f ? "Success" : "Error"), [ k, c, f ? y : b ]);
                }
                m.fireWith(h, [ k, T ]);
                if (u) {
                    p.trigger("ajaxComplete", [ k, c ]);
                    if (!--g.active) {
                        g.event.trigger("ajaxStop");
                    }
                }
            }
            d.promise(k);
            k.success = k.done;
            k.error = k.fail;
            k.complete = m.add;
            k.statusCode = function(e) {
                if (e) {
                    var t;
                    if (x < 2) {
                        for (t in e) {
                            v[t] = [ v[t], e[t] ];
                        }
                    } else {
                        t = e[k.status];
                        k.always(t);
                    }
                }
                return this;
            };
            c.url = ((e || c.url || hn) + "").replace(dn, "").replace(yn, cn[1] + "//");
            c.dataTypes = g.trim(c.dataType || "*").toLowerCase().split(y);
            if (c.crossDomain == null) {
                l = Cn.exec(c.url.toLowerCase());
                c.crossDomain = !!(l && (l[1] !== cn[1] || l[2] !== cn[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (cn[3] || (cn[1] === "http:" ? 80 : 443))));
            }
            if (c.data && c.processData && typeof c.data !== "string") {
                c.data = g.param(c.data, c.traditional);
            }
            $n(Tn, c, n, k);
            if (x === 2) {
                return k;
            }
            u = c.global;
            c.type = c.type.toUpperCase();
            c.hasContent = !vn.test(c.type);
            if (u && g.active++ === 0) {
                g.event.trigger("ajaxStart");
            }
            if (!c.hasContent) {
                if (c.data) {
                    c.url += (bn.test(c.url) ? "&" : "?") + c.data;
                    delete c.data;
                }
                i = c.url;
                if (c.cache === false) {
                    var S = pn++, E = c.url.replace(xn, "$1_=" + S);
                    c.url = E + (E === c.url ? (bn.test(c.url) ? "&" : "?") + "_=" + S : "");
                }
            }
            if (c.data && c.hasContent && c.contentType !== false || n.contentType) {
                k.setRequestHeader("Content-Type", c.contentType);
            }
            if (c.ifModified) {
                i = i || c.url;
                if (g.lastModified[i]) {
                    k.setRequestHeader("If-Modified-Since", g.lastModified[i]);
                }
                if (g.etag[i]) {
                    k.setRequestHeader("If-None-Match", g.etag[i]);
                }
            }
            k.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + En + "; q=0.01" : "") : c.accepts["*"]);
            for (f in c.headers) {
                k.setRequestHeader(f, c.headers[f]);
            }
            if (c.beforeSend && (c.beforeSend.call(h, k, c) === false || x === 2)) {
                return k.abort();
            }
            C = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                k[f](c[f]);
            }
            o = $n(Sn, c, n, k);
            if (!o) {
                T(-1, "No Transport");
            } else {
                k.readyState = 1;
                if (u) {
                    p.trigger("ajaxSend", [ k, c ]);
                }
                if (c.async && c.timeout > 0) {
                    a = setTimeout(function() {
                        k.abort("timeout");
                    }, c.timeout);
                }
                try {
                    x = 1;
                    o.send(b, T);
                } catch (_) {
                    if (x < 2) {
                        T(-1, _);
                    } else {
                        throw _;
                    }
                }
            }
            return k;
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    function An(e, n, i) {
        var r, s, o, a, l = e.contents, u = e.dataTypes, f = e.responseFields;
        for (s in f) {
            if (s in i) {
                n[f[s]] = i[s];
            }
        }
        while (u[0] === "*") {
            u.shift();
            if (r === t) {
                r = e.mimeType || n.getResponseHeader("content-type");
            }
        }
        if (r) {
            for (s in l) {
                if (l[s] && l[s].test(r)) {
                    u.unshift(s);
                    break;
                }
            }
        }
        if (u[0] in i) {
            o = u[0];
        } else {
            for (s in i) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    o = s;
                    break;
                }
                if (!a) {
                    a = s;
                }
            }
            o = o || a;
        }
        if (o) {
            if (o !== u[0]) {
                u.unshift(o);
            }
            return i[o];
        }
    }
    function Dn(e, t) {
        var n, i, r, s, o = e.dataTypes.slice(), a = o[0], l = {}, u = 0;
        if (e.dataFilter) {
            t = e.dataFilter(t, e.dataType);
        }
        if (o[1]) {
            for (n in e.converters) {
                l[n.toLowerCase()] = e.converters[n];
            }
        }
        for (;r = o[++u]; ) {
            if (r !== "*") {
                if (a !== "*" && a !== r) {
                    n = l[a + " " + r] || l["* " + r];
                    if (!n) {
                        for (i in l) {
                            s = i.split(" ");
                            if (s[1] === r) {
                                n = l[a + " " + s[0]] || l["* " + s[0]];
                                if (n) {
                                    if (n === true) {
                                        n = l[i];
                                    } else if (l[i] !== true) {
                                        r = s[0];
                                        o.splice(u--, 0, r);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (n !== true) {
                        if (n && e["throws"]) {
                            t = n(t);
                        } else {
                            try {
                                t = n(t);
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: n ? f : "No conversion from " + a + " to " + r
                                };
                            }
                        }
                    }
                }
                a = r;
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var Ln = [], Hn = /\?/, Fn = /(=)\?(?=&|$)|\?\?/, On = g.now();
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ln.pop() || g.expando + "_" + On++;
            this[e] = true;
            return e;
        }
    });
    g.ajaxPrefilter("json jsonp", function(n, i, r) {
        var s, o, a, l = n.data, u = n.url, f = n.jsonp !== false, c = f && Fn.test(u), h = f && !c && typeof l === "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(l);
        if (n.dataTypes[0] === "jsonp" || c || h) {
            s = n.jsonpCallback = g.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback;
            o = e[s];
            if (c) {
                n.url = u.replace(Fn, "$1" + s);
            } else if (h) {
                n.data = l.replace(Fn, "$1" + s);
            } else if (f) {
                n.url += (Hn.test(u) ? "&" : "?") + n.jsonp + "=" + s;
            }
            n.converters["script json"] = function() {
                if (!a) {
                    g.error(s + " was not called");
                }
                return a[0];
            };
            n.dataTypes[0] = "json";
            e[s] = function() {
                a = arguments;
            };
            r.always(function() {
                e[s] = o;
                if (n[s]) {
                    n.jsonpCallback = i.jsonpCallback;
                    Ln.push(s);
                }
                if (a && g.isFunction(o)) {
                    o(a[0]);
                }
                a = o = t;
            });
            return "script";
        }
    });
    g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                g.globalEval(e);
                return e;
            }
        }
    });
    g.ajaxPrefilter("script", function(e) {
        if (e.cache === t) {
            e.cache = false;
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false;
        }
    });
    g.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(s, o) {
                    n = r.createElement("script");
                    n.async = "async";
                    if (e.scriptCharset) {
                        n.charset = e.scriptCharset;
                    }
                    n.src = e.url;
                    n.onload = n.onreadystatechange = function(e, r) {
                        if (r || !n.readyState || /loaded|complete/.test(n.readyState)) {
                            n.onload = n.onreadystatechange = null;
                            if (i && n.parentNode) {
                                i.removeChild(n);
                            }
                            n = t;
                            if (!r) {
                                o(200, "success");
                            }
                        }
                    };
                    i.insertBefore(n, i.firstChild);
                },
                abort: function() {
                    if (n) {
                        n.onload(0, 1);
                    }
                }
            };
        }
    });
    var Mn, Bn = e.ActiveXObject ? function() {
        for (var e in Mn) {
            Mn[e](0, 1);
        }
    } : false, Rn = 0;
    function Pn() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    g.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Pn() || In();
    } : Pn;
    (function(e) {
        g.extend(g.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        });
    })(g.ajaxSettings.xhr());
    if (g.support.ajax) {
        g.ajaxTransport(function(n) {
            if (!n.crossDomain || g.support.cors) {
                var i;
                return {
                    send: function(r, s) {
                        var o, a, l = n.xhr();
                        if (n.username) {
                            l.open(n.type, n.url, n.async, n.username, n.password);
                        } else {
                            l.open(n.type, n.url, n.async);
                        }
                        if (n.xhrFields) {
                            for (a in n.xhrFields) {
                                l[a] = n.xhrFields[a];
                            }
                        }
                        if (n.mimeType && l.overrideMimeType) {
                            l.overrideMimeType(n.mimeType);
                        }
                        if (!n.crossDomain && !r["X-Requested-With"]) {
                            r["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (a in r) {
                                l.setRequestHeader(a, r[a]);
                            }
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null);
                        i = function(e, r) {
                            var a, u, f, c, h;
                            try {
                                if (i && (r || l.readyState === 4)) {
                                    i = t;
                                    if (o) {
                                        l.onreadystatechange = g.noop;
                                        if (Bn) {
                                            delete Mn[o];
                                        }
                                    }
                                    if (r) {
                                        if (l.readyState !== 4) {
                                            l.abort();
                                        }
                                    } else {
                                        a = l.status;
                                        f = l.getAllResponseHeaders();
                                        c = {};
                                        h = l.responseXML;
                                        if (h && h.documentElement) {
                                            c.xml = h;
                                        }
                                        if (typeof l.responseText === "string") {
                                            c.text = l.responseText;
                                        }
                                        try {
                                            u = l.statusText;
                                        } catch (p) {
                                            u = "";
                                        }
                                        if (!a && n.isLocal && !n.crossDomain) {
                                            a = c.text ? 200 : 404;
                                        } else if (a === 1223) {
                                            a = 204;
                                        }
                                    }
                                }
                            } catch (d) {
                                if (!r) {
                                    s(-1, d);
                                }
                            }
                            if (c) {
                                s(a, u, c, f);
                            }
                        };
                        if (!n.async) {
                            i();
                        } else if (l.readyState === 4) {
                            setTimeout(i, 0);
                        } else {
                            o = ++Rn;
                            if (Bn) {
                                if (!Mn) {
                                    Mn = {};
                                    g(e).unload(Bn);
                                }
                                Mn[o] = i;
                            }
                            l.onreadystatechange = i;
                        }
                    },
                    abort: function() {
                        if (i) {
                            i(0, 1);
                        }
                    }
                };
            }
        });
    }
    var qn, zn, Wn = /^(?:toggle|show|hide)$/, Vn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"), Un = /queueHooks$/, Xn = [ Zn ], Qn = {
        "*": [ function(e, t) {
            var n, i, r = this.createTween(e, t), s = Vn.exec(t), o = r.cur(), a = +o || 0, l = 1, u = 20;
            if (s) {
                n = +s[2];
                i = s[3] || (g.cssNumber[e] ? "" : "px");
                if (i !== "px" && a) {
                    a = g.css(r.elem, e, true) || n || 1;
                    do {
                        l = l || ".5";
                        a = a / l;
                        g.style(r.elem, e, a + i);
                    } while (l !== (l = r.cur() / o) && l !== 1 && --u);
                }
                r.unit = i;
                r.start = a;
                r.end = s[1] ? a + (s[1] + 1) * n : n;
            }
            return r;
        } ]
    };
    function Gn() {
        setTimeout(function() {
            qn = t;
        }, 0);
        return qn = g.now();
    }
    function Jn(e, t) {
        g.each(t, function(t, n) {
            var i = (Qn[t] || []).concat(Qn["*"]), r = 0, s = i.length;
            for (;r < s; r++) {
                if (i[r].call(e, t, n)) {
                    return;
                }
            }
        });
    }
    function Yn(e, t, n) {
        var i, r = 0, s = Xn.length, o = g.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            var t = qn || Gn(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, s = l.tweens.length;
            for (;r < s; r++) {
                l.tweens[r].run(i);
            }
            o.notifyWith(e, [ l, i, n ]);
            if (i < 1 && s) {
                return n;
            } else {
                o.resolveWith(e, [ l ]);
                return false;
            }
        }, l = o.promise({
            elem: e,
            props: g.extend({}, t),
            opts: g.extend(true, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: qn || Gn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = g.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                l.tweens.push(i);
                return i;
            },
            stop: function(t) {
                var n = 0, i = t ? l.tweens.length : 0;
                for (;n < i; n++) {
                    l.tweens[n].run(1);
                }
                if (t) {
                    o.resolveWith(e, [ l, t ]);
                } else {
                    o.rejectWith(e, [ l, t ]);
                }
                return this;
            }
        }), u = l.props;
        Kn(u, l.opts.specialEasing);
        for (;r < s; r++) {
            i = Xn[r].call(l, e, u, l.opts);
            if (i) {
                return i;
            }
        }
        Jn(l, u);
        if (g.isFunction(l.opts.start)) {
            l.opts.start.call(e, l);
        }
        g.fx.timer(g.extend(a, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        }));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function Kn(e, t) {
        var n, i, r, s, o;
        for (n in e) {
            i = g.camelCase(n);
            r = t[i];
            s = e[n];
            if (g.isArray(s)) {
                r = s[1];
                s = e[n] = s[0];
            }
            if (n !== i) {
                e[i] = s;
                delete e[n];
            }
            o = g.cssHooks[i];
            if (o && "expand" in o) {
                s = o.expand(s);
                delete e[i];
                for (n in s) {
                    if (!(n in e)) {
                        e[n] = s[n];
                        t[n] = r;
                    }
                }
            } else {
                t[i] = r;
            }
        }
    }
    g.Animation = g.extend(Yn, {
        tweener: function(e, t) {
            if (g.isFunction(e)) {
                t = e;
                e = [ "*" ];
            } else {
                e = e.split(" ");
            }
            var n, i = 0, r = e.length;
            for (;i < r; i++) {
                n = e[i];
                Qn[n] = Qn[n] || [];
                Qn[n].unshift(t);
            }
        },
        prefilter: function(e, t) {
            if (t) {
                Xn.unshift(e);
            } else {
                Xn.push(e);
            }
        }
    });
    function Zn(e, t, n) {
        var i, r, s, o, a, l, u, f, c = this, h = e.style, p = {}, d = [], m = e.nodeType && Kt(e);
        if (!n.queue) {
            u = g._queueHooks(e, "fx");
            if (u.unqueued == null) {
                u.unqueued = 0;
                f = u.empty.fire;
                u.empty.fire = function() {
                    if (!u.unqueued) {
                        f();
                    }
                };
            }
            u.unqueued++;
            c.always(function() {
                c.always(function() {
                    u.unqueued--;
                    if (!g.queue(e, "fx").length) {
                        u.empty.fire();
                    }
                });
            });
        }
        if (e.nodeType === 1 && ("height" in t || "width" in t)) {
            n.overflow = [ h.overflow, h.overflowX, h.overflowY ];
            if (g.css(e, "display") === "inline" && g.css(e, "float") === "none") {
                if (!g.support.inlineBlockNeedsLayout || rn(e.nodeName) === "inline") {
                    h.display = "inline-block";
                } else {
                    h.zoom = 1;
                }
            }
        }
        if (n.overflow) {
            h.overflow = "hidden";
            if (!g.support.shrinkWrapBlocks) {
                c.done(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2];
                });
            }
        }
        for (i in t) {
            s = t[i];
            if (Wn.exec(s)) {
                delete t[i];
                if (s === (m ? "hide" : "show")) {
                    continue;
                }
                d.push(i);
            }
        }
        o = d.length;
        if (o) {
            a = g._data(e, "fxshow") || g._data(e, "fxshow", {});
            if (m) {
                g(e).show();
            } else {
                c.done(function() {
                    g(e).hide();
                });
            }
            c.done(function() {
                var t;
                g._removeData(e, "fxshow");
                for (t in p) {
                    g.style(e, t, p[t]);
                }
            });
            for (i = 0; i < o; i++) {
                r = d[i];
                l = c.createTween(r, m ? a[r] : 0);
                p[r] = a[r] || g.style(e, r);
                if (!(r in a)) {
                    a[r] = l.start;
                    if (m) {
                        l.end = l.start;
                        l.start = r === "width" || r === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function ei(e, t, n, i, r) {
        return new ei.prototype.init(e, t, n, i, r);
    }
    g.Tween = ei;
    ei.prototype = {
        constructor: ei,
        init: function(e, t, n, i, r, s) {
            this.elem = e;
            this.prop = n;
            this.easing = r || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = s || (g.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = ei.propHooks[this.prop];
            return e && e.get ? e.get(this) : ei.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = ei.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
            } else {
                this.pos = t = e;
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (n && n.set) {
                n.set(this);
            } else {
                ei.propHooks._default.set(this);
            }
            return this;
        }
    };
    ei.prototype.init.prototype = ei.prototype;
    ei.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                    return e.elem[e.prop];
                }
                t = g.css(e.elem, e.prop, false, "");
                return !t || t === "auto" ? 0 : t;
            },
            set: function(e) {
                if (g.fx.step[e.prop]) {
                    g.fx.step[e.prop](e);
                } else if (e.elem.style && (e.elem.style[g.cssProps[e.prop]] != null || g.cssHooks[e.prop])) {
                    g.style(e.elem, e.prop, e.now + e.unit);
                } else {
                    e.elem[e.prop] = e.now;
                }
            }
        }
    };
    ei.propHooks.scrollTop = ei.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now;
            }
        }
    };
    g.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = g.fn[t];
        g.fn[t] = function(e, i, r) {
            return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(ti(t, true), e, i, r);
        };
    });
    g.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var r = g.isEmptyObject(e), s = g.speed(t, n, i), o = function() {
                var t = Yn(this, g.extend({}, e), s);
                if (r) {
                    t.stop(true);
                }
            };
            return r || s.queue === false ? this.each(o) : this.queue(s.queue, o);
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop;
                t(i);
            };
            if (typeof e !== "string") {
                i = n;
                n = e;
                e = t;
            }
            if (n && e !== false) {
                this.queue(e || "fx", []);
            }
            return this.each(function() {
                var t = true, n = e != null && e + "queueHooks", s = g.timers, o = g._data(this);
                if (n) {
                    if (o[n] && o[n].stop) {
                        r(o[n]);
                    }
                } else {
                    for (n in o) {
                        if (o[n] && o[n].stop && Un.test(n)) {
                            r(o[n]);
                        }
                    }
                }
                for (n = s.length; n--; ) {
                    if (s[n].elem === this && (e == null || s[n].queue === e)) {
                        s[n].anim.stop(i);
                        t = false;
                        s.splice(n, 1);
                    }
                }
                if (t || !i) {
                    g.dequeue(this, e);
                }
            });
        }
    });
    function ti(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        t = t ? 1 : 0;
        for (;r < 4; r += 2 - t) {
            n = Gt[r];
            i["margin" + n] = i["padding" + n] = e;
        }
        if (t) {
            i.opacity = i.width = e;
        }
        return i;
    }
    g.each({
        slideDown: ti("show"),
        slideUp: ti("hide"),
        slideToggle: ti("toggle"),
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
        g.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    });
    g.speed = function(e, t, n) {
        var i = e && typeof e === "object" ? g.extend({}, e) : {
            complete: n || !n && t || g.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !g.isFunction(t) && t
        };
        i.duration = g.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in g.fx.speeds ? g.fx.speeds[i.duration] : g.fx.speeds._default;
        if (i.queue == null || i.queue === true) {
            i.queue = "fx";
        }
        i.old = i.complete;
        i.complete = function() {
            if (g.isFunction(i.old)) {
                i.old.call(this);
            }
            if (i.queue) {
                g.dequeue(this, i.queue);
            }
        };
        return i;
    };
    g.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    };
    g.timers = [];
    g.fx = ei.prototype.init;
    g.fx.tick = function() {
        var e, t = g.timers, n = 0;
        for (;n < t.length; n++) {
            e = t[n];
            if (!e() && t[n] === e) {
                t.splice(n--, 1);
            }
        }
        if (!t.length) {
            g.fx.stop();
        }
    };
    g.fx.timer = function(e) {
        if (e() && g.timers.push(e) && !zn) {
            zn = setInterval(g.fx.tick, g.fx.interval);
        }
    };
    g.fx.interval = 13;
    g.fx.stop = function() {
        clearInterval(zn);
        zn = null;
    };
    g.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    g.fx.step = {};
    if (g.expr && g.expr.filters) {
        g.expr.filters.animated = function(e) {
            return g.grep(g.timers, function(t) {
                return e === t.elem;
            }).length;
        };
    }
    var ni = /^(?:body|html)$/i;
    g.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                g.offset.setOffset(this, e, t);
            });
        }
        var n, i, r, s, o, a, l, u = {
            top: 0,
            left: 0
        }, f = this[0], c = f && f.ownerDocument;
        if (!c) {
            return;
        }
        if ((i = c.body) === f) {
            return g.offset.bodyOffset(f);
        }
        n = c.documentElement;
        if (!g.contains(n, f)) {
            return u;
        }
        if (typeof f.getBoundingClientRect !== "undefined") {
            u = f.getBoundingClientRect();
        }
        r = ii(c);
        s = n.clientTop || i.clientTop || 0;
        o = n.clientLeft || i.clientLeft || 0;
        a = r.pageYOffset || n.scrollTop;
        l = r.pageXOffset || n.scrollLeft;
        return {
            top: u.top + a - s,
            left: u.left + l - o
        };
    };
    g.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            if (g.support.doesNotIncludeMarginInBodyOffset) {
                t += parseFloat(g.css(e, "marginTop")) || 0;
                n += parseFloat(g.css(e, "marginLeft")) || 0;
            }
            return {
                top: t,
                left: n
            };
        },
        setOffset: function(e, t, n) {
            var i = g.css(e, "position");
            if (i === "static") {
                e.style.position = "relative";
            }
            var r = g(e), s = r.offset(), o = g.css(e, "top"), a = g.css(e, "left"), l = (i === "absolute" || i === "fixed") && g.inArray("auto", [ o, a ]) > -1, u = {}, f = {}, c, h;
            if (l) {
                f = r.position();
                c = f.top;
                h = f.left;
            } else {
                c = parseFloat(o) || 0;
                h = parseFloat(a) || 0;
            }
            if (g.isFunction(t)) {
                t = t.call(e, n, s);
            }
            if (t.top != null) {
                u.top = t.top - s.top + c;
            }
            if (t.left != null) {
                u.left = t.left - s.left + h;
            }
            if ("using" in t) {
                t.using.call(e, u);
            } else {
                r.css(u);
            }
        }
    };
    g.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var e, t, n = {
                top: 0,
                left: 0
            }, i = this[0];
            if (g.css(i, "position") === "fixed") {
                t = i.getBoundingClientRect();
            } else {
                e = this.offsetParent();
                t = this.offset();
                if (!ni.test(e[0].nodeName)) {
                    n = e.offset();
                }
                n.top += parseFloat(g.css(e[0], "borderTopWidth")) || 0;
                n.left += parseFloat(g.css(e[0], "borderLeftWidth")) || 0;
            }
            return {
                top: t.top - n.top - (parseFloat(g.css(i, "marginTop")) || 0),
                left: t.left - n.left - (parseFloat(g.css(i, "marginLeft")) || 0)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || r.body;
                while (e && !ni.test(e.nodeName) && g.css(e, "position") === "static") {
                    e = e.offsetParent;
                }
                return e || r.body;
            });
        }
    });
    g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        g.fn[e] = function(r) {
            return g.access(this, function(e, r, s) {
                var o = ii(e);
                if (s === t) {
                    return o ? n in o ? o[n] : o.document.documentElement[r] : e[r];
                }
                if (o) {
                    o.scrollTo(!i ? s : g(o).scrollLeft(), i ? s : g(o).scrollTop());
                } else {
                    e[r] = s;
                }
            }, e, r, arguments.length, null);
        };
    });
    function ii(e) {
        return g.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
    }
    g.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        g.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            g.fn[r] = function(r, s) {
                var o = arguments.length && (i || typeof r !== "boolean"), a = i || (r === true || s === true ? "margin" : "border");
                return g.access(this, function(n, i, r) {
                    var s;
                    if (g.isWindow(n)) {
                        return n.document.documentElement["client" + e];
                    }
                    if (n.nodeType === 9) {
                        s = n.documentElement;
                        return Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e]);
                    }
                    return r === t ? g.css(n, i, r, a) : g.style(n, i, r, a);
                }, n, o ? r : t, o, null);
            };
        });
    });
    (function() {
        var e, t, n, i, s = g.fn.toggle, a = /(?:^|\s)hover(\.\S+|)\b/, l = function(e) {
            return g.event.special.hover ? e : e.replace(a, "mouseenter$1 mouseleave$1");
        };
        g.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            };
        };
        e = g.uaMatch(o.userAgent);
        t = {};
        if (e.browser) {
            t[e.browser] = true;
            t.version = e.version;
        }
        if (t.chrome) {
            t.webkit = true;
        } else if (t.webkit) {
            t.safari = true;
        }
        g.browser = t;
        g.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n);
            }
            g.extend(true, e, this);
            e.superclass = this;
            e.fn = e.prototype = this();
            e.fn.constructor = e;
            e.sub = this.sub;
            e.fn.init = function t(t, i) {
                if (i && i instanceof g && !(i instanceof e)) {
                    i = e(i);
                }
                return g.fn.init.call(this, t, i, n);
            };
            e.fn.init.prototype = e.fn;
            var n = e(r);
            return e;
        };
        g.fn.toggle = function(e, t) {
            if (!g.isFunction(e) || !g.isFunction(t)) {
                return s.apply(this, arguments);
            }
            var n = arguments, i = e.guid || g.guid++, r = 0, o = function(t) {
                var i = (g._data(this, "lastToggle" + e.guid) || 0) % r;
                g._data(this, "lastToggle" + e.guid, i + 1);
                t.preventDefault();
                return n[i].apply(this, arguments) || false;
            };
            o.guid = i;
            while (r < n.length) {
                n[r++].guid = i;
            }
            return this.click(o);
        };
        n = g.event.add;
        g.event.add = function(e, t, i, r, s) {
            if (t) {
                t = l(t);
            }
            n.call(this, e, t, i, r, s);
        };
        i = g.event.remove;
        g.event.remove = function(e, t, n, r, s) {
            if (t) {
                t = l(t);
            }
            i.call(this, e, t, n, r, s);
        };
        g.attrFn = {};
    })();
    e.jQuery = e.$ = g;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function() {
            return g;
        });
    }
})(window);

(function() {
    var e = this;
    var t = e._;
    var n = {};
    var i = Array.prototype, r = Object.prototype, s = Function.prototype;
    var o = i.push, a = i.slice, l = i.concat, u = i.unshift, f = r.toString, c = r.hasOwnProperty;
    var h = i.forEach, p = i.map, d = i.reduce, g = i.reduceRight, m = i.filter, v = i.every, y = i.some, b = i.indexOf, w = i.lastIndexOf, x = Array.isArray, C = Object.keys, k = s.bind;
    var T = function(e) {
        if (e instanceof T) return e;
        if (!(this instanceof T)) return new T(e);
        this._wrapped = e;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = T;
        }
        exports._ = T;
    } else {
        e["_"] = T;
    }
    T.VERSION = "1.4.2";
    var S = T.each = T.forEach = function(e, t, i) {
        if (e == null) return;
        if (h && e.forEach === h) {
            e.forEach(t, i);
        } else if (e.length === +e.length) {
            for (var r = 0, s = e.length; r < s; r++) {
                if (t.call(i, e[r], r, e) === n) return;
            }
        } else {
            for (var o in e) {
                if (T.has(e, o)) {
                    if (t.call(i, e[o], o, e) === n) return;
                }
            }
        }
    };
    T.map = T.collect = function(e, t, n) {
        var i = [];
        if (e == null) return i;
        if (p && e.map === p) return e.map(t, n);
        S(e, function(e, r, s) {
            i[i.length] = t.call(n, e, r, s);
        });
        return i;
    };
    T.reduce = T.foldl = T.inject = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (e == null) e = [];
        if (d && e.reduce === d) {
            if (i) t = T.bind(t, i);
            return r ? e.reduce(t, n) : e.reduce(t);
        }
        S(e, function(e, s, o) {
            if (!r) {
                n = e;
                r = true;
            } else {
                n = t.call(i, n, e, s, o);
            }
        });
        if (!r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    };
    T.reduceRight = T.foldr = function(e, t, n, i) {
        var r = arguments.length > 2;
        if (e == null) e = [];
        if (g && e.reduceRight === g) {
            if (i) t = T.bind(t, i);
            return arguments.length > 2 ? e.reduceRight(t, n) : e.reduceRight(t);
        }
        var s = e.length;
        if (s !== +s) {
            var o = T.keys(e);
            s = o.length;
        }
        S(e, function(a, l, u) {
            l = o ? o[--s] : --s;
            if (!r) {
                n = e[l];
                r = true;
            } else {
                n = t.call(i, n, e[l], l, u);
            }
        });
        if (!r) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    };
    T.find = T.detect = function(e, t, n) {
        var i;
        E(e, function(e, r, s) {
            if (t.call(n, e, r, s)) {
                i = e;
                return true;
            }
        });
        return i;
    };
    T.filter = T.select = function(e, t, n) {
        var i = [];
        if (e == null) return i;
        if (m && e.filter === m) return e.filter(t, n);
        S(e, function(e, r, s) {
            if (t.call(n, e, r, s)) i[i.length] = e;
        });
        return i;
    };
    T.reject = function(e, t, n) {
        return T.filter(e, function(e, i, r) {
            return !t.call(n, e, i, r);
        }, n);
    };
    T.every = T.all = function(e, t, i) {
        t || (t = T.identity);
        var r = true;
        if (e == null) return r;
        if (v && e.every === v) return e.every(t, i);
        S(e, function(e, s, o) {
            if (!(r = r && t.call(i, e, s, o))) return n;
        });
        return !!r;
    };
    var E = T.some = T.any = function(e, t, i) {
        t || (t = T.identity);
        var r = false;
        if (e == null) return r;
        if (y && e.some === y) return e.some(t, i);
        S(e, function(e, s, o) {
            if (r || (r = t.call(i, e, s, o))) return n;
        });
        return !!r;
    };
    T.contains = T.include = function(e, t) {
        var n = false;
        if (e == null) return n;
        if (b && e.indexOf === b) return e.indexOf(t) != -1;
        n = E(e, function(e) {
            return e === t;
        });
        return n;
    };
    T.invoke = function(e, t) {
        var n = a.call(arguments, 2);
        return T.map(e, function(e) {
            return (T.isFunction(t) ? t : e[t]).apply(e, n);
        });
    };
    T.pluck = function(e, t) {
        return T.map(e, function(e) {
            return e[t];
        });
    };
    T.where = function(e, t) {
        if (T.isEmpty(t)) return [];
        return T.filter(e, function(e) {
            for (var n in t) {
                if (t[n] !== e[n]) return false;
            }
            return true;
        });
    };
    T.max = function(e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) {
            return Math.max.apply(Math, e);
        }
        if (!t && T.isEmpty(e)) return -Infinity;
        var i = {
            computed: -Infinity
        };
        S(e, function(e, r, s) {
            var o = t ? t.call(n, e, r, s) : e;
            o >= i.computed && (i = {
                value: e,
                computed: o
            });
        });
        return i.value;
    };
    T.min = function(e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) {
            return Math.min.apply(Math, e);
        }
        if (!t && T.isEmpty(e)) return Infinity;
        var i = {
            computed: Infinity
        };
        S(e, function(e, r, s) {
            var o = t ? t.call(n, e, r, s) : e;
            o < i.computed && (i = {
                value: e,
                computed: o
            });
        });
        return i.value;
    };
    T.shuffle = function(e) {
        var t;
        var n = 0;
        var i = [];
        S(e, function(e) {
            t = T.random(n++);
            i[n - 1] = i[t];
            i[t] = e;
        });
        return i;
    };
    var _ = function(e) {
        return T.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    T.sortBy = function(e, t, n) {
        var i = _(t);
        return T.pluck(T.map(e, function(e, t, r) {
            return {
                value: e,
                index: t,
                criteria: i.call(n, e, t, r)
            };
        }).sort(function(e, t) {
            var n = e.criteria;
            var i = t.criteria;
            if (n !== i) {
                if (n > i || n === void 0) return 1;
                if (n < i || i === void 0) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var N = function(e, t, n, i) {
        var r = {};
        var s = _(t);
        S(e, function(t, o) {
            var a = s.call(n, t, o, e);
            i(r, a, t);
        });
        return r;
    };
    T.groupBy = function(e, t, n) {
        return N(e, t, n, function(e, t, n) {
            (T.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    };
    T.countBy = function(e, t, n) {
        return N(e, t, n, function(e, t, n) {
            if (!T.has(e, t)) e[t] = 0;
            e[t]++;
        });
    };
    T.sortedIndex = function(e, t, n, i) {
        n = n == null ? T.identity : _(n);
        var r = n.call(i, t);
        var s = 0, o = e.length;
        while (s < o) {
            var a = s + o >>> 1;
            n.call(i, e[a]) < r ? s = a + 1 : o = a;
        }
        return s;
    };
    T.toArray = function(e) {
        if (!e) return [];
        if (e.length === +e.length) return a.call(e);
        return T.values(e);
    };
    T.size = function(e) {
        if (e == null) return 0;
        return e.length === +e.length ? e.length : T.keys(e).length;
    };
    T.first = T.head = T.take = function(e, t, n) {
        if (e == null) return void 0;
        return t != null && !n ? a.call(e, 0, t) : e[0];
    };
    T.initial = function(e, t, n) {
        return a.call(e, 0, e.length - (t == null || n ? 1 : t));
    };
    T.last = function(e, t, n) {
        if (e == null) return void 0;
        if (t != null && !n) {
            return a.call(e, Math.max(e.length - t, 0));
        } else {
            return e[e.length - 1];
        }
    };
    T.rest = T.tail = T.drop = function(e, t, n) {
        return a.call(e, t == null || n ? 1 : t);
    };
    T.compact = function(e) {
        return T.filter(e, function(e) {
            return !!e;
        });
    };
    var $ = function(e, t, n) {
        S(e, function(e) {
            if (T.isArray(e)) {
                t ? o.apply(n, e) : $(e, t, n);
            } else {
                n.push(e);
            }
        });
        return n;
    };
    T.flatten = function(e, t) {
        return $(e, t, []);
    };
    T.without = function(e) {
        return T.difference(e, a.call(arguments, 1));
    };
    T.uniq = T.unique = function(e, t, n, i) {
        var r = n ? T.map(e, n, i) : e;
        var s = [];
        var o = [];
        S(r, function(n, i) {
            if (t ? !i || o[o.length - 1] !== n : !T.contains(o, n)) {
                o.push(n);
                s.push(e[i]);
            }
        });
        return s;
    };
    T.union = function() {
        return T.uniq(l.apply(i, arguments));
    };
    T.intersection = function(e) {
        var t = a.call(arguments, 1);
        return T.filter(T.uniq(e), function(e) {
            return T.every(t, function(t) {
                return T.indexOf(t, e) >= 0;
            });
        });
    };
    T.difference = function(e) {
        var t = l.apply(i, a.call(arguments, 1));
        return T.filter(e, function(e) {
            return !T.contains(t, e);
        });
    };
    T.zip = function() {
        var e = a.call(arguments);
        var t = T.max(T.pluck(e, "length"));
        var n = new Array(t);
        for (var i = 0; i < t; i++) {
            n[i] = T.pluck(e, "" + i);
        }
        return n;
    };
    T.object = function(e, t) {
        if (e == null) return {};
        var n = {};
        for (var i = 0, r = e.length; i < r; i++) {
            if (t) {
                n[e[i]] = t[i];
            } else {
                n[e[i][0]] = e[i][1];
            }
        }
        return n;
    };
    T.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var i = 0, r = e.length;
        if (n) {
            if (typeof n == "number") {
                i = n < 0 ? Math.max(0, r + n) : n;
            } else {
                i = T.sortedIndex(e, t);
                return e[i] === t ? i : -1;
            }
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (;i < r; i++) if (e[i] === t) return i;
        return -1;
    };
    T.lastIndexOf = function(e, t, n) {
        if (e == null) return -1;
        var i = n != null;
        if (w && e.lastIndexOf === w) {
            return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        }
        var r = i ? n : e.length;
        while (r--) if (e[r] === t) return r;
        return -1;
    };
    T.range = function(e, t, n) {
        if (arguments.length <= 1) {
            t = e || 0;
            e = 0;
        }
        n = arguments[2] || 1;
        var i = Math.max(Math.ceil((t - e) / n), 0);
        var r = 0;
        var s = new Array(i);
        while (r < i) {
            s[r++] = e;
            e += n;
        }
        return s;
    };
    var j = function() {};
    T.bind = function A(e, t) {
        var n, i;
        if (e.bind === k && k) return k.apply(e, a.call(arguments, 1));
        if (!T.isFunction(e)) throw new TypeError();
        i = a.call(arguments, 2);
        return n = function() {
            if (!(this instanceof n)) return e.apply(t, i.concat(a.call(arguments)));
            j.prototype = e.prototype;
            var r = new j();
            var s = e.apply(r, i.concat(a.call(arguments)));
            if (Object(s) === s) return s;
            return r;
        };
    };
    T.bindAll = function(e) {
        var t = a.call(arguments, 1);
        if (t.length == 0) t = T.functions(e);
        S(t, function(t) {
            e[t] = T.bind(e[t], e);
        });
        return e;
    };
    T.memoize = function(e, t) {
        var n = {};
        t || (t = T.identity);
        return function() {
            var i = t.apply(this, arguments);
            return T.has(n, i) ? n[i] : n[i] = e.apply(this, arguments);
        };
    };
    T.delay = function(e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    };
    T.defer = function(e) {
        return T.delay.apply(T, [ e, 1 ].concat(a.call(arguments, 1)));
    };
    T.throttle = function(e, t) {
        var n, i, r, s;
        var o = 0;
        var a = function() {
            o = new Date();
            r = null;
            s = e.apply(n, i);
        };
        return function() {
            var l = new Date();
            var u = t - (l - o);
            n = this;
            i = arguments;
            if (u <= 0) {
                clearTimeout(r);
                o = l;
                s = e.apply(n, i);
            } else if (!r) {
                r = setTimeout(a, u);
            }
            return s;
        };
    };
    T.debounce = function(e, t, n) {
        var i, r;
        return function() {
            var s = this, o = arguments;
            var a = function() {
                i = null;
                if (!n) r = e.apply(s, o);
            };
            var l = n && !i;
            clearTimeout(i);
            i = setTimeout(a, t);
            if (l) r = e.apply(s, o);
            return r;
        };
    };
    T.once = function(e) {
        var t = false, n;
        return function() {
            if (t) return n;
            t = true;
            n = e.apply(this, arguments);
            e = null;
            return n;
        };
    };
    T.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            o.apply(n, arguments);
            return t.apply(this, n);
        };
    };
    T.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) {
                t = [ e[n].apply(this, t) ];
            }
            return t[0];
        };
    };
    T.after = function(e, t) {
        if (e <= 0) return t();
        return function() {
            if (--e < 1) {
                return t.apply(this, arguments);
            }
        };
    };
    T.keys = C || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) if (T.has(e, n)) t[t.length] = n;
        return t;
    };
    T.values = function(e) {
        var t = [];
        for (var n in e) if (T.has(e, n)) t.push(e[n]);
        return t;
    };
    T.pairs = function(e) {
        var t = [];
        for (var n in e) if (T.has(e, n)) t.push([ n, e[n] ]);
        return t;
    };
    T.invert = function(e) {
        var t = {};
        for (var n in e) if (T.has(e, n)) t[e[n]] = n;
        return t;
    };
    T.functions = T.methods = function(e) {
        var t = [];
        for (var n in e) {
            if (T.isFunction(e[n])) t.push(n);
        }
        return t.sort();
    };
    T.extend = function(e) {
        S(a.call(arguments, 1), function(t) {
            for (var n in t) {
                e[n] = t[n];
            }
        });
        return e;
    };
    T.pick = function(e) {
        var t = {};
        var n = l.apply(i, a.call(arguments, 1));
        S(n, function(n) {
            if (n in e) t[n] = e[n];
        });
        return t;
    };
    T.omit = function(e) {
        var t = {};
        var n = l.apply(i, a.call(arguments, 1));
        for (var r in e) {
            if (!T.contains(n, r)) t[r] = e[r];
        }
        return t;
    };
    T.defaults = function(e) {
        S(a.call(arguments, 1), function(t) {
            for (var n in t) {
                if (e[n] == null) e[n] = t[n];
            }
        });
        return e;
    };
    T.clone = function(e) {
        if (!T.isObject(e)) return e;
        return T.isArray(e) ? e.slice() : T.extend({}, e);
    };
    T.tap = function(e, t) {
        t(e);
        return e;
    };
    var D = function(e, t, n, i) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        if (e instanceof T) e = e._wrapped;
        if (t instanceof T) t = t._wrapped;
        var r = f.call(e);
        if (r != f.call(t)) return false;
        switch (r) {
          case "[object String]":
            return e == String(t);

          case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;

          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if (typeof e != "object" || typeof t != "object") return false;
        var s = n.length;
        while (s--) {
            if (n[s] == e) return i[s] == t;
        }
        n.push(e);
        i.push(t);
        var o = 0, a = true;
        if (r == "[object Array]") {
            o = e.length;
            a = o == t.length;
            if (a) {
                while (o--) {
                    if (!(a = D(e[o], t[o], n, i))) break;
                }
            }
        } else {
            var l = e.constructor, u = t.constructor;
            if (l !== u && !(T.isFunction(l) && l instanceof l && T.isFunction(u) && u instanceof u)) {
                return false;
            }
            for (var c in e) {
                if (T.has(e, c)) {
                    o++;
                    if (!(a = T.has(t, c) && D(e[c], t[c], n, i))) break;
                }
            }
            if (a) {
                for (c in t) {
                    if (T.has(t, c) && !o--) break;
                }
                a = !o;
            }
        }
        n.pop();
        i.pop();
        return a;
    };
    T.isEqual = function(e, t) {
        return D(e, t, [], []);
    };
    T.isEmpty = function(e) {
        if (e == null) return true;
        if (T.isArray(e) || T.isString(e)) return e.length === 0;
        for (var t in e) if (T.has(e, t)) return false;
        return true;
    };
    T.isElement = function(e) {
        return !!(e && e.nodeType === 1);
    };
    T.isArray = x || function(e) {
        return f.call(e) == "[object Array]";
    };
    T.isObject = function(e) {
        return e === Object(e);
    };
    S([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        T["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]";
        };
    });
    if (!T.isArguments(arguments)) {
        T.isArguments = function(e) {
            return !!(e && T.has(e, "callee"));
        };
    }
    if (typeof /./ !== "function") {
        T.isFunction = function(e) {
            return typeof e === "function";
        };
    }
    T.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    };
    T.isNaN = function(e) {
        return T.isNumber(e) && e != +e;
    };
    T.isBoolean = function(e) {
        return e === true || e === false || f.call(e) == "[object Boolean]";
    };
    T.isNull = function(e) {
        return e === null;
    };
    T.isUndefined = function(e) {
        return e === void 0;
    };
    T.has = function(e, t) {
        return c.call(e, t);
    };
    T.noConflict = function() {
        e._ = t;
        return this;
    };
    T.identity = function(e) {
        return e;
    };
    T.times = function(e, t, n) {
        for (var i = 0; i < e; i++) t.call(n, i);
    };
    T.random = function(e, t) {
        if (t == null) {
            t = e;
            e = 0;
        }
        return e + (0 | Math.random() * (t - e + 1));
    };
    var L = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    L.unescape = T.invert(L.escape);
    var H = {
        escape: new RegExp("[" + T.keys(L.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(L.unescape).join("|") + ")", "g")
    };
    T.each([ "escape", "unescape" ], function(e) {
        T[e] = function(t) {
            if (t == null) return "";
            return ("" + t).replace(H[e], function(t) {
                return L[e][t];
            });
        };
    });
    T.result = function(e, t) {
        if (e == null) return null;
        var n = e[t];
        return T.isFunction(n) ? n.call(e) : n;
    };
    T.mixin = function(e) {
        S(T.functions(e), function(t) {
            var n = T[t] = e[t];
            T.prototype[t] = function() {
                var e = [ this._wrapped ];
                o.apply(e, arguments);
                return R.call(this, n.apply(T, e));
            };
        });
    };
    var F = 0;
    T.uniqueId = function(e) {
        var t = F++;
        return e ? e + t : t;
    };
    T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var O = /(.)^/;
    var M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function(e, t, n) {
        n = T.defaults({}, n, T.templateSettings);
        var i = new RegExp([ (n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source ].join("|") + "|$", "g");
        var r = 0;
        var s = "__p+='";
        e.replace(i, function(t, n, i, o, a) {
            s += e.slice(r, a).replace(B, function(e) {
                return "\\" + M[e];
            });
            s += n ? "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "";
            r = a + t.length;
        });
        s += "';\n";
        if (!n.variable) s = "with(obj||{}){\n" + s + "}\n";
        s = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(n.variable || "obj", "_", s);
        } catch (a) {
            a.source = s;
            throw a;
        }
        if (t) return o(t, T);
        var l = function(e) {
            return o.call(this, e, T);
        };
        l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}";
        return l;
    };
    T.chain = function(e) {
        return T(e).chain();
    };
    var R = function(e) {
        return this._chain ? T(e).chain() : e;
    };
    T.mixin(T);
    S([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = i[e];
        T.prototype[e] = function() {
            var n = this._wrapped;
            t.apply(n, arguments);
            if ((e == "shift" || e == "splice") && n.length === 0) delete n[0];
            return R.call(this, n);
        };
    });
    S([ "concat", "join", "slice" ], function(e) {
        var t = i[e];
        T.prototype[e] = function() {
            return R.call(this, t.apply(this._wrapped, arguments));
        };
    });
    T.extend(T.prototype, {
        chain: function() {
            this._chain = true;
            return this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}).call(this);

!function(e, t) {
    "use strict";
    var n = t.prototype.trim;
    var i = t.prototype.trimRight;
    var r = t.prototype.trimLeft;
    var s = function(e) {
        return e * 1 || 0;
    };
    var o = function(e, t) {
        if (t < 1) return "";
        var n = "";
        while (t > 0) {
            if (t & 1) n += e;
            t >>= 1, e += e;
        }
        return n;
    };
    var a = [].slice;
    var l = function(e) {
        if (e == null) return "\\s"; else if (e.source) return e.source; else return "[" + p.escapeRegExp(e) + "]";
    };
    var u = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    };
    var f = {};
    for (var c in u) {
        f[u[c]] = c;
    }
    var h = function() {
        function e(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
        }
        var n = o;
        var i = function() {
            if (!i.cache.hasOwnProperty(arguments[0])) {
                i.cache[arguments[0]] = i.parse(arguments[0]);
            }
            return i.format.call(null, i.cache[arguments[0]], arguments);
        };
        i.format = function(i, r) {
            var s = 1, o = i.length, a = "", l, u = [], f, c, p, d, g, m;
            for (f = 0; f < o; f++) {
                a = e(i[f]);
                if (a === "string") {
                    u.push(i[f]);
                } else if (a === "array") {
                    p = i[f];
                    if (p[2]) {
                        l = r[s];
                        for (c = 0; c < p[2].length; c++) {
                            if (!l.hasOwnProperty(p[2][c])) {
                                throw new Error(h('[_.sprintf] property "%s" does not exist', p[2][c]));
                            }
                            l = l[p[2][c]];
                        }
                    } else if (p[1]) {
                        l = r[p[1]];
                    } else {
                        l = r[s++];
                    }
                    if (/[^s]/.test(p[8]) && e(l) != "number") {
                        throw new Error(h("[_.sprintf] expecting number but found %s", e(l)));
                    }
                    switch (p[8]) {
                      case "b":
                        l = l.toString(2);
                        break;

                      case "c":
                        l = t.fromCharCode(l);
                        break;

                      case "d":
                        l = parseInt(l, 10);
                        break;

                      case "e":
                        l = p[7] ? l.toExponential(p[7]) : l.toExponential();
                        break;

                      case "f":
                        l = p[7] ? parseFloat(l).toFixed(p[7]) : parseFloat(l);
                        break;

                      case "o":
                        l = l.toString(8);
                        break;

                      case "s":
                        l = (l = t(l)) && p[7] ? l.substring(0, p[7]) : l;
                        break;

                      case "u":
                        l = Math.abs(l);
                        break;

                      case "x":
                        l = l.toString(16);
                        break;

                      case "X":
                        l = l.toString(16).toUpperCase();
                        break;
                    }
                    l = /[def]/.test(p[8]) && p[3] && l >= 0 ? "+" + l : l;
                    g = p[4] ? p[4] == "0" ? "0" : p[4].charAt(1) : " ";
                    m = p[6] - t(l).length;
                    d = p[6] ? n(g, m) : "";
                    u.push(p[5] ? l + d : d + l);
                }
            }
            return u.join("");
        };
        i.cache = {};
        i.parse = function(e) {
            var t = e, n = [], i = [], r = 0;
            while (t) {
                if ((n = /^[^\x25]+/.exec(t)) !== null) {
                    i.push(n[0]);
                } else if ((n = /^\x25{2}/.exec(t)) !== null) {
                    i.push("%");
                } else if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) !== null) {
                    if (n[2]) {
                        r |= 1;
                        var s = [], o = n[2], a = [];
                        if ((a = /^([a-z_][a-z_\d]*)/i.exec(o)) !== null) {
                            s.push(a[1]);
                            while ((o = o.substring(a[0].length)) !== "") {
                                if ((a = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null) {
                                    s.push(a[1]);
                                } else if ((a = /^\[(\d+)\]/.exec(o)) !== null) {
                                    s.push(a[1]);
                                } else {
                                    throw new Error("[_.sprintf] huh?");
                                }
                            }
                        } else {
                            throw new Error("[_.sprintf] huh?");
                        }
                        n[2] = s;
                    } else {
                        r |= 2;
                    }
                    if (r === 3) {
                        throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    }
                    i.push(n);
                } else {
                    throw new Error("[_.sprintf] huh?");
                }
                t = t.substring(n[0].length);
            }
            return i;
        };
        return i;
    }();
    var p = {
        VERSION: "2.2.0rc",
        isBlank: function(e) {
            if (e == null) e = "";
            return /^\s*$/.test(e);
        },
        stripTags: function(e) {
            if (e == null) return "";
            return t(e).replace(/<\/?[^>]+>/g, "");
        },
        capitalize: function(e) {
            e = e == null ? "" : t(e);
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        chop: function(e, n) {
            if (e == null) return [];
            e = t(e);
            n = ~~n;
            return n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [ e ];
        },
        clean: function(e) {
            return p.strip(e).replace(/\s+/g, " ");
        },
        count: function(e, n) {
            if (e == null || n == null) return 0;
            return t(e).split(n).length - 1;
        },
        chars: function(e) {
            if (e == null) return [];
            return t(e).split("");
        },
        swapCase: function(e) {
            if (e == null) return "";
            return t(e).replace(/\S/g, function(e) {
                return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
            });
        },
        escapeHTML: function(e) {
            if (e == null) return "";
            return t(e).replace(/[&<>"']/g, function(e) {
                return "&" + f[e] + ";";
            });
        },
        unescapeHTML: function(e) {
            if (e == null) return "";
            return t(e).replace(/\&([^;]+);/g, function(e, n) {
                var i;
                if (n in u) {
                    return u[n];
                } else if (i = n.match(/^#x([\da-fA-F]+)$/)) {
                    return t.fromCharCode(parseInt(i[1], 16));
                } else if (i = n.match(/^#(\d+)$/)) {
                    return t.fromCharCode(~~i[1]);
                } else {
                    return e;
                }
            });
        },
        escapeRegExp: function(e) {
            if (e == null) return "";
            return t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        },
        splice: function(e, t, n, i) {
            var r = p.chars(e);
            r.splice(~~t, ~~n, i);
            return r.join("");
        },
        insert: function(e, t, n) {
            return p.splice(e, t, 0, n);
        },
        include: function(e, n) {
            if (n === "") return true;
            if (e == null) return false;
            return t(e).indexOf(n) !== -1;
        },
        join: function() {
            var e = a.call(arguments), t = e.shift();
            if (t == null) t = "";
            return e.join(t);
        },
        lines: function(e) {
            if (e == null) return [];
            return t(e).split("\n");
        },
        reverse: function(e) {
            return p.chars(e).reverse().join("");
        },
        startsWith: function(e, n) {
            if (n === "") return true;
            if (e == null || n == null) return false;
            e = t(e);
            n = t(n);
            return e.length >= n.length && e.slice(0, n.length) === n;
        },
        endsWith: function(e, n) {
            if (n === "") return true;
            if (e == null || n == null) return false;
            e = t(e);
            n = t(n);
            return e.length >= n.length && e.slice(e.length - n.length) === n;
        },
        succ: function(e) {
            if (e == null) return "";
            e = t(e);
            return e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1);
        },
        titleize: function(e) {
            if (e == null) return "";
            return t(e).replace(/(?:^|\s)\S/g, function(e) {
                return e.toUpperCase();
            });
        },
        camelize: function(e) {
            return p.trim(e).replace(/[-_\s]+(.)?/g, function(e, t) {
                return t.toUpperCase();
            });
        },
        underscored: function(e) {
            return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
        },
        dasherize: function(e) {
            return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
        },
        classify: function(e) {
            return p.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "");
        },
        humanize: function(e) {
            return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "));
        },
        trim: function(e, i) {
            if (e == null) return "";
            if (!i && n) return n.call(e);
            i = l(i);
            return t(e).replace(new RegExp("^" + i + "+|" + i + "+$", "g"), "");
        },
        ltrim: function(e, n) {
            if (e == null) return "";
            if (!n && r) return r.call(e);
            n = l(n);
            return t(e).replace(new RegExp("^" + n + "+"), "");
        },
        rtrim: function(e, n) {
            if (e == null) return "";
            if (!n && i) return i.call(e);
            n = l(n);
            return t(e).replace(new RegExp(n + "+$"), "");
        },
        truncate: function(e, n, i) {
            if (e == null) return "";
            e = t(e);
            i = i || "...";
            n = ~~n;
            return e.length > n ? e.slice(0, n) + i : e;
        },
        prune: function(e, n, i) {
            if (e == null) return "";
            e = t(e);
            n = ~~n;
            i = i != null ? t(i) : "...";
            if (e.length <= n) return e;
            var r = function(e) {
                return e.toUpperCase() !== e.toLowerCase() ? "A" : " ";
            }, s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, r);
            if (s.slice(s.length - 2).match(/\w\w/)) s = s.replace(/\s*\S+$/, ""); else s = p.rtrim(s.slice(0, s.length - 1));
            return (s + i).length > e.length ? e : e.slice(0, s.length) + i;
        },
        words: function(e, t) {
            if (p.isBlank(e)) return [];
            return p.trim(e, t).split(t || /\s+/);
        },
        pad: function(e, n, i, r) {
            e = e == null ? "" : t(e);
            n = ~~n;
            var s = 0;
            if (!i) i = " "; else if (i.length > 1) i = i.charAt(0);
            switch (r) {
              case "right":
                s = n - e.length;
                return e + o(i, s);

              case "both":
                s = n - e.length;
                return o(i, Math.ceil(s / 2)) + e + o(i, Math.floor(s / 2));

              default:
                s = n - e.length;
                return o(i, s) + e;
            }
        },
        lpad: function(e, t, n) {
            return p.pad(e, t, n);
        },
        rpad: function(e, t, n) {
            return p.pad(e, t, n, "right");
        },
        lrpad: function(e, t, n) {
            return p.pad(e, t, n, "both");
        },
        sprintf: h,
        vsprintf: function(e, t) {
            t.unshift(e);
            return h.apply(null, t);
        },
        toNumber: function(e, n) {
            if (e == null || e == "") return 0;
            e = t(e);
            var i = s(s(e).toFixed(~~n));
            return i === 0 && !e.match(/^0+$/) ? Number.NaN : i;
        },
        numberFormat: function(e, t, n, i) {
            if (isNaN(e) || e == null) return "";
            e = e.toFixed(~~t);
            i = i || ",";
            var r = e.split("."), s = r[0], o = r[1] ? (n || ".") + r[1] : "";
            return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + i) + o;
        },
        strRight: function(e, n) {
            if (e == null) return "";
            e = t(e);
            n = n != null ? t(n) : n;
            var i = !n ? -1 : e.indexOf(n);
            return ~i ? e.slice(i + n.length, e.length) : e;
        },
        strRightBack: function(e, n) {
            if (e == null) return "";
            e = t(e);
            n = n != null ? t(n) : n;
            var i = !n ? -1 : e.lastIndexOf(n);
            return ~i ? e.slice(i + n.length, e.length) : e;
        },
        strLeft: function(e, n) {
            if (e == null) return "";
            e = t(e);
            n = n != null ? t(n) : n;
            var i = !n ? -1 : e.indexOf(n);
            return ~i ? e.slice(0, i) : e;
        },
        strLeftBack: function(e, t) {
            if (e == null) return "";
            e += "";
            t = t != null ? "" + t : t;
            var n = e.lastIndexOf(t);
            return ~n ? e.slice(0, n) : e;
        },
        toSentence: function(e, t, n, i) {
            t = t || ", ";
            n = n || " and ";
            var r = e.slice(), s = r.pop();
            if (e.length > 2 && i) n = p.rtrim(t) + n;
            return r.length ? r.join(t) + n + s : s;
        },
        toSentenceSerial: function() {
            var e = a.call(arguments);
            e[3] = true;
            return p.toSentence.apply(p, e);
        },
        slugify: function(e) {
            if (e == null) return "";
            var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź", i = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", r = new RegExp(l(n), "g");
            e = t(e).toLowerCase().replace(r, function(e) {
                var t = n.indexOf(e);
                return i.charAt(t) || "-";
            });
            return p.dasherize(e.replace(/[^\w\s-]/g, ""));
        },
        surround: function(e, t) {
            return [ t, e, t ].join("");
        },
        quote: function(e) {
            return p.surround(e, '"');
        },
        exports: function() {
            var e = {};
            for (var t in this) {
                if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/)) continue;
                e[t] = this[t];
            }
            return e;
        },
        repeat: function(e, n, i) {
            if (e == null) return "";
            n = ~~n;
            if (i == null) return o(t(e), n);
            for (var r = []; n > 0; r[--n] = e) {}
            return r.join(i);
        },
        levenshtein: function(e, n) {
            if (e == null && n == null) return 0;
            if (e == null) return t(n).length;
            if (n == null) return t(e).length;
            e = t(e);
            n = t(n);
            var i = [], r, s;
            for (var o = 0; o <= n.length; o++) for (var a = 0; a <= e.length; a++) {
                if (o && a) if (e.charAt(a - 1) === n.charAt(o - 1)) s = r; else s = Math.min(i[a], i[a - 1], r) + 1; else s = o + a;
                r = i[a];
                i[a] = s;
            }
            return i.pop();
        }
    };
    p.strip = p.trim;
    p.lstrip = p.ltrim;
    p.rstrip = p.rtrim;
    p.center = p.lrpad;
    p.rjust = p.lpad;
    p.ljust = p.rpad;
    p.contains = p.include;
    p.q = p.quote;
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = p;
        }
        exports._s = p;
    } else if (typeof define === "function" && define.amd) {
        define("underscore.string", [], function() {
            return p;
        });
    } else {
        e._ = e._ || {};
        e._.string = e._.str = p;
    }
}(this, String);

(function() {
    var e = this;
    var t = e.Backbone;
    var n = Array.prototype;
    var i = n.push;
    var r = n.slice;
    var s = n.splice;
    var o;
    if (typeof exports !== "undefined") {
        o = exports;
    } else {
        o = e.Backbone = {};
    }
    o.VERSION = "0.9.2";
    var a = e._;
    if (!a && typeof require !== "undefined") a = require("underscore");
    o.$ = e.jQuery || e.Zepto || e.ender;
    o.noConflict = function() {
        e.Backbone = t;
        return this;
    };
    o.emulateHTTP = false;
    o.emulateJSON = false;
    var l = /\s+/;
    var u = o.Events = {
        on: function(e, t, n) {
            var i, r, s;
            if (!t) return this;
            e = e.split(l);
            i = this._callbacks || (this._callbacks = {});
            while (r = e.shift()) {
                s = i[r] || (i[r] = []);
                s.push(t, n);
            }
            return this;
        },
        off: function(e, t, n) {
            var i, r, s, o;
            if (!(r = this._callbacks)) return this;
            if (!(e || t || n)) {
                delete this._callbacks;
                return this;
            }
            e = e ? e.split(l) : a.keys(r);
            while (i = e.shift()) {
                if (!(s = r[i]) || !(t || n)) {
                    delete r[i];
                    continue;
                }
                for (o = s.length - 2; o >= 0; o -= 2) {
                    if (!(t && s[o] !== t || n && s[o + 1] !== n)) {
                        s.splice(o, 2);
                    }
                }
            }
            return this;
        },
        trigger: function(e) {
            var t, n, i, r, s, o, a, u;
            if (!(n = this._callbacks)) return this;
            u = [];
            e = e.split(l);
            for (r = 1, s = arguments.length; r < s; r++) {
                u[r - 1] = arguments[r];
            }
            while (t = e.shift()) {
                if (a = n.all) a = a.slice();
                if (i = n[t]) i = i.slice();
                if (i) {
                    for (r = 0, s = i.length; r < s; r += 2) {
                        i[r].apply(i[r + 1] || this, u);
                    }
                }
                if (a) {
                    o = [ t ].concat(u);
                    for (r = 0, s = a.length; r < s; r += 2) {
                        a[r].apply(a[r + 1] || this, o);
                    }
                }
            }
            return this;
        }
    };
    u.bind = u.on;
    u.unbind = u.off;
    var f = o.Model = function(e, t) {
        var n;
        var i = e || {};
        if (t && t.collection) this.collection = t.collection;
        if (t && t.parse) i = this.parse(i);
        if (n = a.result(this, "defaults")) {
            i = a.extend({}, n, i);
        }
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = a.uniqueId("c");
        this.changed = {};
        this._changes = {};
        this._pending = {};
        this.set(i, {
            silent: true
        });
        this.changed = {};
        this._changes = {};
        this._pending = {};
        this._previousAttributes = a.clone(this.attributes);
        this.initialize.apply(this, arguments);
    };
    a.extend(f.prototype, u, {
        changed: null,
        _changes: null,
        _pending: null,
        _changing: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return a.clone(this.attributes);
        },
        sync: function() {
            return o.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            var t;
            if (t = this._escapedAttributes[e]) return t;
            var n = this.get(e);
            return this._escapedAttributes[e] = a.escape(n == null ? "" : "" + n);
        },
        has: function(e) {
            return this.get(e) != null;
        },
        set: function(e, t) {
            var n, i, r;
            if (e == null) return this;
            if (!a.isObject(e)) {
                i = e;
                (e = {})[i] = t;
                t = arguments[2];
            }
            var s = t && t.silent;
            var o = t && t.unset;
            if (e instanceof f) e = e.attributes;
            if (o) for (n in e) e[n] = void 0;
            if (!this._validate(e, t)) return false;
            if (this.idAttribute in e) this.id = e[this.idAttribute];
            var l = this._changing;
            var u = this.attributes;
            var c = this._escapedAttributes;
            var h = this._previousAttributes || {};
            for (n in e) {
                r = e[n];
                if (!a.isEqual(u[n], r) || o && a.has(u, n)) {
                    delete c[n];
                    this._changes[n] = true;
                }
                o ? delete u[n] : u[n] = r;
                if (!a.isEqual(h[n], r) || a.has(u, n) !== a.has(h, n)) {
                    this.changed[n] = r;
                    if (!s) this._pending[n] = true;
                } else {
                    delete this.changed[n];
                    delete this._pending[n];
                    if (!l) delete this._changes[n];
                }
                if (l && a.isEqual(u[n], l[n])) delete this._changes[n];
            }
            if (!s) this.change(t);
            return this;
        },
        unset: function(e, t) {
            t = a.extend({}, t, {
                unset: true
            });
            return this.set(e, null, t);
        },
        clear: function(e) {
            e = a.extend({}, e, {
                unset: true
            });
            return this.set(a.clone(this.attributes), e);
        },
        fetch: function(e) {
            e = e ? a.clone(e) : {};
            var t = this;
            var n = e.success;
            e.success = function(i, r, s) {
                if (!t.set(t.parse(i, s), e)) return false;
                if (n) n(t, i, e);
            };
            return this.sync("read", this, e);
        },
        save: function(e, t) {
            var n, i, r;
            if (e != null && !a.isObject(e)) {
                n = e;
                (e = {})[n] = t;
                t = arguments[2];
            }
            t = t ? a.clone(t) : {};
            if (t.wait) {
                if (!this._validate(e, t)) return false;
                i = a.clone(this.attributes);
            }
            var s = a.extend({}, t, {
                silent: true
            });
            if (e && !this.set(e, t.wait ? s : t)) {
                return false;
            }
            if (!e && !this._validate(null, t)) return false;
            var o = this;
            var l = t.success;
            t.success = function(n, i, s) {
                r = true;
                var u = o.parse(n, s);
                if (t.wait) u = a.extend(e || {}, u);
                if (!o.set(u, t)) return false;
                if (l) l(o, n, t);
            };
            var u = this.sync(this.isNew() ? "create" : "update", this, t);
            if (!r && t.wait) {
                this.clear(s);
                this.set(i, s);
            }
            return u;
        },
        destroy: function(e) {
            e = e ? a.clone(e) : {};
            var t = this;
            var n = e.success;
            var i = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            e.success = function(r) {
                if (e.wait || t.isNew()) i();
                if (n) n(t, r, e);
            };
            if (this.isNew()) {
                e.success();
                return false;
            }
            var r = this.sync("delete", this, e);
            if (!e.wait) i();
            return r;
        },
        url: function() {
            var e = a.result(this, "urlRoot") || a.result(this.collection, "url") || $();
            if (this.isNew()) return e;
            return e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return this.id == null;
        },
        change: function(e) {
            var t = this._changing;
            var n = this._changing = {};
            for (var i in this._changes) this._pending[i] = true;
            var r = this._changes;
            this._changes = {};
            var s = [];
            for (var i in r) {
                n[i] = this.get(i);
                s.push(i);
            }
            for (var o = 0, l = s.length; o < l; o++) {
                this.trigger("change:" + s[o], this, n[s[o]], e);
            }
            if (t) return this;
            while (!a.isEmpty(this._pending)) {
                this._pending = {};
                this.trigger("change", this, e);
                for (var i in this.changed) {
                    if (this._pending[i] || this._changes[i]) continue;
                    delete this.changed[i];
                }
                this._previousAttributes = a.clone(this.attributes);
            }
            this._changing = null;
            return this;
        },
        hasChanged: function(e) {
            if (e == null) return !a.isEmpty(this.changed);
            return a.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? a.clone(this.changed) : false;
            var t, n = false, i = this._previousAttributes;
            for (var r in e) {
                if (a.isEqual(i[r], t = e[r])) continue;
                (n || (n = {}))[r] = t;
            }
            return n;
        },
        previous: function(e) {
            if (e == null || !this._previousAttributes) return null;
            return this._previousAttributes[e];
        },
        previousAttributes: function() {
            return a.clone(this._previousAttributes);
        },
        isValid: function(e) {
            return !this.validate || !this.validate(this.attributes, e);
        },
        _validate: function(e, t) {
            if (t && t.silent || !this.validate) return true;
            e = a.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            if (!n) return true;
            if (t && t.error) t.error(this, n, t);
            this.trigger("error", this, n, t);
            return false;
        }
    });
    var c = o.Collection = function(e, t) {
        t || (t = {});
        if (t.model) this.model = t.model;
        if (t.comparator !== void 0) this.comparator = t.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (e) {
            if (t.parse) e = this.parse(e);
            this.reset(e, {
                silent: true,
                parse: t.parse
            });
        }
    };
    a.extend(c.prototype, u, {
        model: f,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return o.sync.apply(this, arguments);
        },
        add: function(e, t) {
            var n, r, o, l, u;
            var f = t && t.at;
            e = a.isArray(e) ? e.slice() : [ e ];
            for (n = 0, o = e.length; n < o; n++) {
                if (e[n] = this._prepareModel(e[n], t)) continue;
                throw new Error("Can't add an invalid model to a collection");
            }
            for (n = e.length - 1; n >= 0; n--) {
                l = e[n];
                u = l.id != null && this._byId[l.id];
                if (u || this._byCid[l.cid]) {
                    if (t && t.merge && u) {
                        u.set(l, t);
                    }
                    e.splice(n, 1);
                    continue;
                }
                l.on("all", this._onModelEvent, this);
                this._byCid[l.cid] = l;
                if (l.id != null) this._byId[l.id] = l;
            }
            this.length += e.length;
            r = [ f != null ? f : this.models.length, 0 ];
            i.apply(r, e);
            s.apply(this.models, r);
            if (this.comparator && f == null) this.sort({
                silent: true
            });
            if (t && t.silent) return this;
            while (l = e.shift()) {
                l.trigger("add", l, this, t);
            }
            return this;
        },
        remove: function(e, t) {
            var n, i, r, s;
            t || (t = {});
            e = a.isArray(e) ? e.slice() : [ e ];
            for (n = 0, i = e.length; n < i; n++) {
                s = this.getByCid(e[n]) || this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id];
                delete this._byCid[s.cid];
                r = this.indexOf(s);
                this.models.splice(r, 1);
                this.length--;
                if (!t.silent) {
                    t.index = r;
                    s.trigger("remove", s, this, t);
                }
                this._removeReference(s);
            }
            return this;
        },
        push: function(e, t) {
            e = this._prepareModel(e, t);
            this.add(e, t);
            return e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            this.remove(t, e);
            return t;
        },
        unshift: function(e, t) {
            e = this._prepareModel(e, t);
            this.add(e, a.extend({
                at: 0
            }, t));
            return e;
        },
        shift: function(e) {
            var t = this.at(0);
            this.remove(t, e);
            return t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            if (e == null) return void 0;
            return this._byId[e.id != null ? e.id : e];
        },
        getByCid: function(e) {
            return e && this._byCid[e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e) {
            if (a.isEmpty(e)) return [];
            return this.filter(function(t) {
                for (var n in e) {
                    if (e[n] !== t.get(n)) return false;
                }
                return true;
            });
        },
        sort: function(e) {
            if (!this.comparator) {
                throw new Error("Cannot sort a set without a comparator");
            }
            if (a.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(a.bind(this.comparator, this));
            }
            if (!e || !e.silent) this.trigger("reset", this, e);
            return this;
        },
        pluck: function(e) {
            return a.invoke(this.models, "get", e);
        },
        reset: function(e, t) {
            for (var n = 0, i = this.models.length; n < i; n++) {
                this._removeReference(this.models[n]);
            }
            this._reset();
            if (e) this.add(e, a.extend({
                silent: true
            }, t));
            if (!t || !t.silent) this.trigger("reset", this, t);
            return this;
        },
        fetch: function(e) {
            e = e ? a.clone(e) : {};
            if (e.parse === void 0) e.parse = true;
            var t = this;
            var n = e.success;
            e.success = function(i, r, s) {
                t[e.add ? "add" : "reset"](t.parse(i, s), e);
                if (n) n(t, i, e);
            };
            return this.sync("read", this, e);
        },
        create: function(e, t) {
            var n = this;
            t = t ? a.clone(t) : {};
            e = this._prepareModel(e, t);
            if (!e) return false;
            if (!t.wait) n.add(e, t);
            var i = t.success;
            t.success = function(e, t, r) {
                if (r.wait) n.add(e, r);
                if (i) i(e, t, r);
            };
            e.save(null, t);
            return e;
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        chain: function() {
            return a(this.models).chain();
        },
        _reset: function(e) {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof f) {
                if (!e.collection) e.collection = this;
                return e;
            }
            t || (t = {});
            t.collection = this;
            var n = new this.model(e, t);
            if (!n._validate(n.attributes, t)) return false;
            return n;
        },
        _removeReference: function(e) {
            if (this === e.collection) delete e.collection;
            e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, i) {
            if ((e === "add" || e === "remove") && n !== this) return;
            if (e === "destroy") this.remove(t, i);
            if (t && e === "change:" + t.idAttribute) {
                delete this._byId[t.previous(t.idAttribute)];
                if (t.id != null) this._byId[t.id] = t;
            }
            this.trigger.apply(this, arguments);
        }
    });
    var h = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty" ];
    a.each(h, function(e) {
        c.prototype[e] = function() {
            var t = r.call(arguments);
            t.unshift(this.models);
            return a[e].apply(a, t);
        };
    });
    var p = [ "groupBy", "countBy", "sortBy" ];
    a.each(p, function(e) {
        c.prototype[e] = function(t, n) {
            var i = a.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return a[e](this.models, i, n);
        };
    });
    var d = o.Router = function(e) {
        e || (e = {});
        if (e.routes) this.routes = e.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };
    var g = /\((.*?)\)/g;
    var m = /:\w+/g;
    var v = /\*\w+/g;
    var y = /[-{}[\]+?.,\\^$|#\s]/g;
    a.extend(d.prototype, u, {
        initialize: function() {},
        route: function(e, t, n) {
            if (!a.isRegExp(e)) e = this._routeToRegExp(e);
            if (!n) n = this[t];
            o.history.route(e, a.bind(function(i) {
                var r = this._extractParameters(e, i);
                n && n.apply(this, r);
                this.trigger.apply(this, [ "route:" + t ].concat(r));
                o.history.trigger("route", this, t, r);
            }, this));
            return this;
        },
        navigate: function(e, t) {
            o.history.navigate(e, t);
            return this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            var e, t = a.keys(this.routes);
            while ((e = t.pop()) != null) {
                var n = this.routes[e];
                this.route(e, n, this[n]);
            }
        },
        _routeToRegExp: function(e) {
            e = e.replace(y, "\\$&").replace(g, "(?:$1)?").replace(m, "([^/]+)").replace(v, "(.*?)");
            return new RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            return e.exec(t).slice(1);
        }
    });
    var b = o.History = function() {
        this.handlers = [];
        a.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history;
        }
    };
    var w = /^[#\/]/;
    var x = /^\/+|\/+$/g;
    var C = /msie [\w.]+/;
    var k = /\/$/;
    b.started = false;
    a.extend(b.prototype, u, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (e == null) {
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(k, "");
                    if (!e.indexOf(n)) e = e.substr(n.length);
                } else {
                    e = this.getHash();
                }
            }
            return decodeURIComponent(e.replace(w, ""));
        },
        start: function(e) {
            if (b.started) throw new Error("Backbone.history has already been started");
            b.started = true;
            this.options = a.extend({}, {
                root: "/"
            }, this.options, e);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment();
            var n = document.documentMode;
            var i = C.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(x, "/");
            if (i && this._wantsHashChange) {
                this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(t);
            }
            if (this._hasPushState) {
                o.$(window).bind("popstate", this.checkUrl);
            } else if (this._wantsHashChange && "onhashchange" in window && !i) {
                o.$(window).bind("hashchange", this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }
            this.fragment = t;
            var r = this.location;
            var s = r.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) {
                this.fragment = this.getFragment(null, true);
                this.location.replace(this.root + this.location.search + "#" + this.fragment);
                return true;
            } else if (this._wantsPushState && this._hasPushState && s && r.hash) {
                this.fragment = this.getHash().replace(w, "");
                this.history.replaceState({}, document.title, this.root + this.fragment + r.search);
            }
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            o.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            b.started = false;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe) {
                t = this.getFragment(this.getHash(this.iframe));
            }
            if (t === this.fragment) return false;
            if (this.iframe) this.navigate(t);
            this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e);
            var n = a.any(this.handlers, function(e) {
                if (e.route.test(t)) {
                    e.callback(t);
                    return true;
                }
            });
            return n;
        },
        navigate: function(e, t) {
            if (!b.started) return false;
            if (!t || t === true) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) {
                this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, e, t.replace);
                if (this.iframe && e !== this.getFragment(this.getHash(this.iframe))) {
                    if (!t.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, e, t.replace);
                }
            } else {
                return this.location.assign(n);
            }
            if (t.trigger) this.loadUrl(e);
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t);
            } else {
                e.hash = "#" + t;
            }
        }
    });
    o.history = new b();
    var T = o.View = function(e) {
        this.cid = a.uniqueId("view");
        this._configure(e || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };
    var S = /^(\S+)\s*(.*)$/;
    var E = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
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
            this.undelegateEvents();
            if (this.model && this.model.off) this.model.off(null, null, this);
            if (this.collection && this.collection.off) this.collection.off(null, null, this);
            return this;
        },
        remove: function() {
            this.dispose();
            this.$el.remove();
            return this;
        },
        make: function(e, t, n) {
            var i = document.createElement(e);
            if (t) o.$(i).attr(t);
            if (n != null) o.$(i).html(n);
            return i;
        },
        setElement: function(e, t) {
            if (this.$el) this.undelegateEvents();
            this.$el = e instanceof o.$ ? e : o.$(e);
            this.el = this.$el[0];
            if (t !== false) this.delegateEvents();
            return this;
        },
        delegateEvents: function(e) {
            if (!(e || (e = a.result(this, "events")))) return;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (!a.isFunction(n)) n = this[e[t]];
                if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                var i = t.match(S);
                var r = i[1], s = i[2];
                n = a.bind(n, this);
                r += ".delegateEvents" + this.cid;
                if (s === "") {
                    this.$el.bind(r, n);
                } else {
                    this.$el.delegate(s, r, n);
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(e) {
            if (this.options) e = a.extend({}, this.options, e);
            for (var t = 0, n = E.length; t < n; t++) {
                var i = E[t];
                if (e[i]) this[i] = e[i];
            }
            this.options = e;
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = a.extend({}, a.result(this, "attributes"));
                if (this.id) e.id = a.result(this, "id");
                if (this.className) e["class"] = a.result(this, "className");
                this.setElement(this.make(a.result(this, "tagName"), e), false);
            } else {
                this.setElement(a.result(this, "el"), false);
            }
        }
    });
    var _ = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    o.sync = function(e, t, n) {
        var i = _[e];
        n || (n = {});
        var r = {
            type: i,
            dataType: "json"
        };
        if (!n.url) {
            r.url = a.result(t, "url") || $();
        }
        if (!n.data && t && (e === "create" || e === "update")) {
            r.contentType = "application/json";
            r.data = JSON.stringify(t);
        }
        if (o.emulateJSON) {
            r.contentType = "application/x-www-form-urlencoded";
            r.data = r.data ? {
                model: r.data
            } : {};
        }
        if (o.emulateHTTP && (i === "PUT" || i === "DELETE")) {
            r.type = "POST";
            if (o.emulateJSON) r.data._method = i;
            var s = n.beforeSend;
            n.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", i);
                if (s) return s.apply(this, arguments);
            };
        }
        if (r.type !== "GET" && !o.emulateJSON) {
            r.processData = false;
        }
        var l = n.success;
        n.success = function(e, i, r) {
            if (l) l(e, i, r);
            t.trigger("sync", t, e, n);
        };
        var u = n.error;
        n.error = function(e, i, r) {
            if (u) u(t, e, n);
            t.trigger("error", t, e, n);
        };
        return o.ajax(a.extend(r, n));
    };
    o.ajax = function() {
        return o.$.ajax.apply(o.$, arguments);
    };
    var N = function(e, t) {
        var n = this;
        var i;
        if (e && a.has(e, "constructor")) {
            i = e.constructor;
        } else {
            i = function() {
                n.apply(this, arguments);
            };
        }
        a.extend(i, n, t);
        var r = function() {
            this.constructor = i;
        };
        r.prototype = n.prototype;
        i.prototype = new r();
        if (e) a.extend(i.prototype, e);
        i.__super__ = n.prototype;
        return i;
    };
    f.extend = c.extend = d.extend = T.extend = b.extend = N;
    var $ = function() {
        throw new Error('A "url" property or function must be specified');
    };
}).call(this);

!function(e) {
    e(function() {
        "use strict";
        e.support.transition = function() {
            var e = function() {
                var e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, n;
                for (n in t) {
                    if (e.style[n] !== undefined) {
                        return t[n];
                    }
                }
            }();
            return e && {
                end: e
            };
        }();
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function(n) {
        e(n).on("click", t, this.close);
    };
    n.prototype.close = function(t) {
        var n = e(this), i = n.attr("data-target"), r;
        if (!i) {
            i = n.attr("href");
            i = i && i.replace(/.*(?=#[^\s]*$)/, "");
        }
        r = e(i);
        t && t.preventDefault();
        r.length || (r = n.hasClass("alert") ? n : n.parent());
        r.trigger(t = e.Event("close"));
        if (t.isDefaultPrevented()) return;
        r.removeClass("in");
        function s() {
            r.trigger("closed").remove();
        }
        e.support.transition && r.hasClass("fade") ? r.on(e.support.transition.end, s) : s();
    };
    e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this), r = i.data("alert");
            if (!r) i.data("alert", r = new n(this));
            if (typeof t == "string") r[t].call(i);
        });
    };
    e.fn.alert.Constructor = n;
    e(function() {
        e("body").on("click.alert.data-api", t, n.prototype.close);
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t);
        this.options = e.extend({}, e.fn.button.defaults, n);
    };
    t.prototype.setState = function(e) {
        var t = "disabled", n = this.$element, i = n.data(), r = n.is("input") ? "val" : "html";
        e = e + "Text";
        i.resetText || n.data("resetText", n[r]());
        n[r](i[e] || this.options[e]);
        setTimeout(function() {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t);
        }, 0);
    };
    t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active");
        this.$element.toggleClass("active");
    };
    e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("button"), s = typeof n == "object" && n;
            if (!r) i.data("button", r = new t(this, s));
            if (n == "toggle") r.toggle(); else if (n) r.setState(n);
        });
    };
    e.fn.button.defaults = {
        loadingText: "loading..."
    };
    e.fn.button.Constructor = t;
    e(function() {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            if (!n.hasClass("btn")) n = n.closest(".btn");
            n.button("toggle");
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t);
        this.options = n;
        this.options.slide && this.slide(this.options.slide);
        this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this));
    };
    t.prototype = {
        cycle: function(t) {
            if (!t) this.paused = false;
            this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval));
            return this;
        },
        to: function(t) {
            var n = this.$element.find(".item.active"), i = n.parent().children(), r = i.index(n), s = this;
            if (t > i.length - 1 || t < 0) return;
            if (this.sliding) {
                return this.$element.one("slid", function() {
                    s.to(t);
                });
            }
            if (r == t) {
                return this.pause().cycle();
            }
            return this.slide(t > r ? "next" : "prev", e(i[t]));
        },
        pause: function(t) {
            if (!t) this.paused = true;
            if (this.$element.find(".next, .prev").length && e.support.transition.end) {
                this.$element.trigger(e.support.transition.end);
                this.cycle();
            }
            clearInterval(this.interval);
            this.interval = null;
            return this;
        },
        next: function() {
            if (this.sliding) return;
            return this.slide("next");
        },
        prev: function() {
            if (this.sliding) return;
            return this.slide("prev");
        },
        slide: function(t, n) {
            var i = this.$element.find(".item.active"), r = n || i[t](), s = this.interval, o = t == "next" ? "left" : "right", a = t == "next" ? "first" : "last", l = this, u = e.Event("slide", {
                relatedTarget: r[0]
            });
            this.sliding = true;
            s && this.pause();
            r = r.length ? r : this.$element.find(".item")[a]();
            if (r.hasClass("active")) return;
            if (e.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(u);
                if (u.isDefaultPrevented()) return;
                r.addClass(t);
                r[0].offsetWidth;
                i.addClass(o);
                r.addClass(o);
                this.$element.one(e.support.transition.end, function() {
                    r.removeClass([ t, o ].join(" ")).addClass("active");
                    i.removeClass([ "active", o ].join(" "));
                    l.sliding = false;
                    setTimeout(function() {
                        l.$element.trigger("slid");
                    }, 0);
                });
            } else {
                this.$element.trigger(u);
                if (u.isDefaultPrevented()) return;
                i.removeClass("active");
                r.addClass("active");
                this.sliding = false;
                this.$element.trigger("slid");
            }
            s && this.cycle();
            return this;
        }
    };
    e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("carousel"), s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n), o = typeof n == "string" ? n : s.slide;
            if (!r) i.data("carousel", r = new t(this, s));
            if (typeof n == "number") r.to(n); else if (o) r[o](); else if (s.interval) r.cycle();
        });
    };
    e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    };
    e.fn.carousel.Constructor = t;
    e(function() {
        e("body").on("click.carousel.data-api", "[data-slide]", function(t) {
            var n = e(this), i, r = e(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")), s = !r.data("modal") && e.extend({}, r.data(), n.data());
            r.carousel(s);
            t.preventDefault();
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t);
        this.options = e.extend({}, e.fn.collapse.defaults, n);
        if (this.options.parent) {
            this.$parent = e(this.options.parent);
        }
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
            if (this.transitioning) return;
            t = this.dimension();
            n = e.camelCase([ "scroll", t ].join("-"));
            i = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (i && i.length) {
                r = i.data("collapse");
                if (r && r.transitioning) return;
                i.collapse("hide");
                r || i.data("collapse", null);
            }
            this.$element[t](0);
            this.transition("addClass", e.Event("show"), "shown");
            e.support.transition && this.$element[t](this.$element[0][n]);
        },
        hide: function() {
            var t;
            if (this.transitioning) return;
            t = this.dimension();
            this.reset(this.$element[t]());
            this.transition("removeClass", e.Event("hide"), "hidden");
            this.$element[t](0);
        },
        reset: function(e) {
            var t = this.dimension();
            this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth;
            this.$element[e !== null ? "addClass" : "removeClass"]("collapse");
            return this;
        },
        transition: function(t, n, i) {
            var r = this, s = function() {
                if (n.type == "show") r.reset();
                r.transitioning = 0;
                r.$element.trigger(i);
            };
            this.$element.trigger(n);
            if (n.isDefaultPrevented()) return;
            this.transitioning = 1;
            this.$element[t]("in");
            e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s();
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    };
    e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("collapse"), s = typeof n == "object" && n;
            if (!r) i.data("collapse", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.collapse.defaults = {
        toggle: true
    };
    e.fn.collapse.Constructor = t;
    e(function() {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n = e(this), i, r = n.attr("data-target") || t.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), s = e(r).data("collapse") ? "toggle" : n.data();
            n[e(r).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
            e(r).collapse(s);
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = "[data-toggle=dropdown]", n = function(t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open");
        });
    };
    n.prototype = {
        constructor: n,
        toggle: function(t) {
            var n = e(this), s, o;
            if (n.is(".disabled, :disabled")) return;
            s = r(n);
            o = s.hasClass("open");
            i();
            if (!o) {
                s.toggleClass("open");
                n.focus();
            }
            return false;
        },
        keydown: function(t) {
            var n, i, s, o, a, l;
            if (!/(38|40|27)/.test(t.keyCode)) return;
            n = e(this);
            t.preventDefault();
            t.stopPropagation();
            if (n.is(".disabled, :disabled")) return;
            o = r(n);
            a = o.hasClass("open");
            if (!a || a && t.keyCode == 27) return n.click();
            i = e("[role=menu] li:not(.divider) a", o);
            if (!i.length) return;
            l = i.index(i.filter(":focus"));
            if (t.keyCode == 38 && l > 0) l--;
            if (t.keyCode == 40 && l < i.length - 1) l++;
            if (!~l) l = 0;
            i.eq(l).focus();
        }
    };
    function i() {
        r(e(t)).removeClass("open");
    }
    function r(t) {
        var n = t.attr("data-target"), i;
        if (!n) {
            n = t.attr("href");
            n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "");
        }
        i = e(n);
        i.length || (i = t.parent());
        return i;
    }
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var i = e(this), r = i.data("dropdown");
            if (!r) i.data("dropdown", r = new n(this));
            if (typeof t == "string") r[t].call(i);
        });
    };
    e.fn.dropdown.Constructor = n;
    e(function() {
        e("html").on("click.dropdown.data-api touchstart.dropdown.data-api", i);
        e("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation();
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown);
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n;
        this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this));
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[!this.isShown ? "show" : "hide"]();
        },
        show: function() {
            var t = this, n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented()) return;
            e("body").addClass("modal-open");
            this.isShown = true;
            this.escape();
            this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                if (!t.$element.parent().length) {
                    t.$element.appendTo(document.body);
                }
                t.$element.show();
                if (n) {
                    t.$element[0].offsetWidth;
                }
                t.$element.addClass("in").attr("aria-hidden", false).focus();
                t.enforceFocus();
                n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.trigger("shown");
                }) : t.$element.trigger("shown");
            });
        },
        hide: function(t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide");
            this.$element.trigger(t);
            if (!this.isShown || t.isDefaultPrevented()) return;
            this.isShown = false;
            e("body").removeClass("modal-open");
            this.escape();
            e(document).off("focusin.modal");
            this.$element.removeClass("in").attr("aria-hidden", true);
            e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal();
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                if (t.$element[0] !== e.target && !t.$element.has(e.target).length) {
                    t.$element.focus();
                }
            });
        },
        escape: function() {
            var e = this;
            if (this.isShown && this.options.keyboard) {
                this.$element.on("keyup.dismiss.modal", function(t) {
                    t.which == 27 && e.hide();
                });
            } else if (!this.isShown) {
                this.$element.off("keyup.dismiss.modal");
            }
        },
        hideWithTransition: function() {
            var t = this, n = setTimeout(function() {
                t.$element.off(e.support.transition.end);
                t.hideModal();
            }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n);
                t.hideModal();
            });
        },
        hideModal: function(e) {
            this.$element.hide().trigger("hidden");
            this.backdrop();
        },
        removeBackdrop: function() {
            this.$backdrop.remove();
            this.$backdrop = null;
        },
        backdrop: function(t) {
            var n = this, i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && i;
                this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(document.body);
                if (this.options.backdrop != "static") {
                    this.$backdrop.click(e.proxy(this.hide, this));
                }
                if (r) this.$backdrop[0].offsetWidth;
                this.$backdrop.addClass("in");
                r ? this.$backdrop.one(e.support.transition.end, t) : t();
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(this.removeBackdrop, this)) : this.removeBackdrop();
            } else if (t) {
                t();
            }
        }
    };
    e.fn.modal = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("modal"), s = e.extend({}, e.fn.modal.defaults, i.data(), typeof n == "object" && n);
            if (!r) i.data("modal", r = new t(this, s));
            if (typeof n == "string") r[n](); else if (s.show) r.show();
        });
    };
    e.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    e.fn.modal.Constructor = t;
    e(function() {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this), i = n.attr("href"), r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, r.data(), n.data());
            t.preventDefault();
            r.modal(s).one("hide", function() {
                n.focus();
            });
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t);
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, i) {
            var r, s;
            this.type = t;
            this.$element = e(n);
            this.options = this.getOptions(i);
            this.enabled = true;
            if (this.options.trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            } else if (this.options.trigger != "manual") {
                r = this.options.trigger == "hover" ? "mouseenter" : "focus";
                s = this.options.trigger == "hover" ? "mouseleave" : "blur";
                this.$element.on(r + "." + this.type, this.options.selector, e.proxy(this.enter, this));
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this));
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(t) {
            t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data());
            if (t.delay && typeof t.delay == "number") {
                t.delay = {
                    show: t.delay,
                    hide: t.delay
                };
            }
            return t;
        },
        enter: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            if (!n.options.delay || !n.options.delay.show) return n.show();
            clearTimeout(this.timeout);
            n.hoverState = "in";
            this.timeout = setTimeout(function() {
                if (n.hoverState == "in") n.show();
            }, n.options.delay.show);
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout) clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide) return n.hide();
            n.hoverState = "out";
            this.timeout = setTimeout(function() {
                if (n.hoverState == "out") n.hide();
            }, n.options.delay.hide);
        },
        show: function() {
            var e, t, n, i, r, s, o;
            if (this.hasContent() && this.enabled) {
                e = this.tip();
                this.setContent();
                if (this.options.animation) {
                    e.addClass("fade");
                }
                s = typeof this.options.placement == "function" ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement;
                t = /in/.test(s);
                e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body);
                n = this.getPosition(t);
                i = e[0].offsetWidth;
                r = e[0].offsetHeight;
                switch (t ? s.split(" ")[1] : s) {
                  case "bottom":
                    o = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;

                  case "top":
                    o = {
                        top: n.top - r,
                        left: n.left + n.width / 2 - i / 2
                    };
                    break;

                  case "left":
                    o = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left - i
                    };
                    break;

                  case "right":
                    o = {
                        top: n.top + n.height / 2 - r / 2,
                        left: n.left + n.width
                    };
                    break;
                }
                e.css(o).addClass(s).addClass("in");
            }
        },
        setContent: function() {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
            e.removeClass("fade in top bottom left right");
        },
        hide: function() {
            var t = this, n = this.tip();
            n.removeClass("in");
            function i() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).remove();
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t);
                    n.remove();
                });
            }
            e.support.transition && this.$tip.hasClass("fade") ? i() : n.remove();
            return this;
        },
        fixTitle: function() {
            var e = this.$element;
            if (e.attr("title") || typeof e.attr("data-original-title") != "string") {
                e.attr("data-original-title", e.attr("title") || "").removeAttr("title");
            }
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
            e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title);
            return e;
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template);
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function() {
            this.enabled = true;
        },
        disable: function() {
            this.enabled = false;
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
    };
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("tooltip"), s = typeof n == "object" && n;
            if (!r) i.data("tooltip", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.tooltip.Constructor = t;
    e.fn.tooltip.defaults = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: true
    };
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t);
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t);
            e.find(".popover-content > *")[this.options.html ? "html" : "text"](n);
            e.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            e = t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content);
            return e;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = e(this.options.template);
            }
            return this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("popover"), s = typeof n == "object" && n;
            if (!r) i.data("popover", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.popover.Constructor = t;
    e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    });
}(window.jQuery);

!function(e) {
    "use strict";
    function t(t, n) {
        var i = e.proxy(this.process, this), r = e(t).is("body") ? e(window) : e(t), s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n);
        this.$scrollElement = r.on("scroll.scroll-spy.data-api", i);
        this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.$body = e("body");
        this.refresh();
        this.process();
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t = this, n;
            this.offsets = e([]);
            this.targets = e([]);
            n = this.$body.find(this.selector).map(function() {
                var t = e(this), n = t.data("target") || t.attr("href"), i = /^#\w/.test(n) && e(n);
                return i && i.length && [ [ i.position().top, n ] ] || null;
            }).sort(function(e, t) {
                return e[0] - t[0];
            }).each(function() {
                t.offsets.push(this[0]);
                t.targets.push(this[1]);
            });
        },
        process: function() {
            var e = this.$scrollElement.scrollTop() + this.options.offset, t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = t - this.$scrollElement.height(), i = this.offsets, r = this.targets, s = this.activeTarget, o;
            if (e >= n) {
                return s != (o = r.last()[0]) && this.activate(o);
            }
            for (o = i.length; o--; ) {
                s != r[o] && e >= i[o] && (!i[o + 1] || e <= i[o + 1]) && this.activate(r[o]);
            }
        },
        activate: function(t) {
            var n, i;
            this.activeTarget = t;
            e(this.selector).parent(".active").removeClass("active");
            i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]';
            n = e(i).parent("li").addClass("active");
            if (n.parent(".dropdown-menu").length) {
                n = n.closest("li.dropdown").addClass("active");
            }
            n.trigger("activate");
        }
    };
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("scrollspy"), s = typeof n == "object" && n;
            if (!r) i.data("scrollspy", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.scrollspy.Constructor = t;
    e.fn.scrollspy.defaults = {
        offset: 10
    };
    e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data());
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t);
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.attr("data-target"), r, s, o;
            if (!i) {
                i = t.attr("href");
                i = i && i.replace(/.*(?=#[^\s]*$)/, "");
            }
            if (t.parent("li").hasClass("active")) return;
            r = n.find(".active a").last()[0];
            o = e.Event("show", {
                relatedTarget: r
            });
            t.trigger(o);
            if (o.isDefaultPrevented()) return;
            s = e(i);
            this.activate(t.parent("li"), n);
            this.activate(s, s.parent(), function() {
                t.trigger({
                    type: "shown",
                    relatedTarget: r
                });
            });
        },
        activate: function(t, n, i) {
            var r = n.find("> .active"), s = i && e.support.transition && r.hasClass("fade");
            function o() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
                t.addClass("active");
                if (s) {
                    t[0].offsetWidth;
                    t.addClass("in");
                } else {
                    t.removeClass("fade");
                }
                if (t.parent(".dropdown-menu")) {
                    t.closest("li.dropdown").addClass("active");
                }
                i && i();
            }
            s ? r.one(e.support.transition.end, o) : o();
            r.removeClass("in");
        }
    };
    e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("tab");
            if (!r) i.data("tab", r = new t(this));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.tab.Constructor = t;
    e(function() {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault();
            e(this).tab("show");
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t);
        this.options = e.extend({}, e.fn.typeahead.defaults, n);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.updater = this.options.updater || this.updater;
        this.$menu = e(this.options.menu).appendTo("body");
        this.source = this.options.source;
        this.shown = false;
        this.listen();
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            this.$element.val(this.updater(e)).change();
            return this.hide();
        },
        updater: function(e) {
            return e;
        },
        show: function() {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            this.$menu.css({
                top: t.top + t.height,
                left: t.left
            });
            this.$menu.show();
            this.shown = true;
            return this;
        },
        hide: function() {
            this.$menu.hide();
            this.shown = false;
            return this;
        },
        lookup: function(t) {
            var n;
            this.query = this.$element.val();
            if (!this.query || this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this;
            }
            n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source;
            return n ? this.process(n) : this;
        },
        process: function(t) {
            var n = this;
            t = e.grep(t, function(e) {
                return n.matcher(e);
            });
            t = this.sorter(t);
            if (!t.length) {
                return this.shown ? this.hide() : this;
            }
            return this.render(t.slice(0, this.options.items)).show();
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(e) {
            var t = [], n = [], i = [], r;
            while (r = e.shift()) {
                if (!r.toLowerCase().indexOf(this.query.toLowerCase())) t.push(r); else if (~r.indexOf(this.query)) n.push(r); else i.push(r);
            }
            return t.concat(n, i);
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>";
            });
        },
        render: function(t) {
            var n = this;
            t = e(t).map(function(t, i) {
                t = e(n.options.item).attr("data-value", i);
                t.find("a").html(n.highlighter(i));
                return t[0];
            });
            t.first().addClass("active");
            this.$menu.html(t);
            return this;
        },
        next: function(t) {
            var n = this.$menu.find(".active").removeClass("active"), i = n.next();
            if (!i.length) {
                i = e(this.$menu.find("li")[0]);
            }
            i.addClass("active");
        },
        prev: function(e) {
            var t = this.$menu.find(".active").removeClass("active"), n = t.prev();
            if (!n.length) {
                n = this.$menu.find("li").last();
            }
            n.addClass("active");
        },
        listen: function() {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this));
            if (e.browser.chrome || e.browser.webkit || e.browser.msie) {
                this.$element.on("keydown", e.proxy(this.keydown, this));
            }
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this));
        },
        move: function(e) {
            if (!this.shown) return;
            switch (e.keyCode) {
              case 9:
              case 13:
              case 27:
                e.preventDefault();
                break;

              case 38:
                e.preventDefault();
                this.prev();
                break;

              case 40:
                e.preventDefault();
                this.next();
                break;
            }
            e.stopPropagation();
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = !~e.inArray(t.keyCode, [ 40, 38, 9, 13, 27 ]);
            this.move(t);
        },
        keypress: function(e) {
            if (this.suppressKeyPressRepeat) return;
            this.move(e);
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
            e.stopPropagation();
            e.preventDefault();
        },
        blur: function(e) {
            var t = this;
            setTimeout(function() {
                t.hide();
            }, 150);
        },
        click: function(e) {
            e.stopPropagation();
            e.preventDefault();
            this.select();
        },
        mouseenter: function(t) {
            this.$menu.find(".active").removeClass("active");
            e(t.currentTarget).addClass("active");
        }
    };
    e.fn.typeahead = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("typeahead"), s = typeof n == "object" && n;
            if (!r) i.data("typeahead", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    };
    e.fn.typeahead.Constructor = t;
    e(function() {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
            var n = e(this);
            if (n.data("typeahead")) return;
            t.preventDefault();
            n.typeahead(n.data());
        });
    });
}(window.jQuery);

!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n);
        this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this));
        this.$element = e(t);
        this.checkPosition();
    };
    t.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var t = e(document).height(), n = this.$window.scrollTop(), i = this.$element.offset(), r = this.options.offset, s = r.bottom, o = r.top, a = "affix affix-top affix-bottom", l;
        if (typeof r != "object") s = o = r;
        if (typeof o == "function") o = r.top();
        if (typeof s == "function") s = r.bottom();
        l = this.unpin != null && n + this.unpin <= i.top ? false : s != null && i.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : false;
        if (this.affixed === l) return;
        this.affixed = l;
        this.unpin = l == "bottom" ? i.top - n : null;
        this.$element.removeClass(a).addClass("affix" + (l ? "-" + l : ""));
    };
    e.fn.affix = function(n) {
        return this.each(function() {
            var i = e(this), r = i.data("affix"), s = typeof n == "object" && n;
            if (!r) i.data("affix", r = new t(this, s));
            if (typeof n == "string") r[n]();
        });
    };
    e.fn.affix.Constructor = t;
    e.fn.affix.defaults = {
        offset: 0
    };
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this), n = t.data();
            n.offset = n.offset || {};
            n.offsetBottom && (n.offset.bottom = n.offsetBottom);
            n.offsetTop && (n.offset.top = n.offsetTop);
            t.affix(n);
        });
    });
}(window.jQuery);

(function(e, t, n) {
    var i = "object", r = "function", s = e.browser.msie, o, a;
    function l(e, t) {
        var n = (e[0] || 0) - (t[0] || 0);
        return n > 0 || !n && e.length > 0 && l(e.slice(1), t.slice(1));
    }
    function u(e) {
        if (typeof e !== i) {
            return e;
        }
        var t = [], n = "";
        for (var r in e) {
            if (typeof e[r] === i) {
                n = u(e[r]);
            } else {
                n = [ r, o ? encodeURI(e[r]) : e[r] ].join("=");
            }
            t.push(n);
        }
        return t.join("&");
    }
    function f(e) {
        var t = [];
        for (var n in e) {
            if (e[n]) {
                t.push([ n, '="', e[n], '"' ].join(""));
            }
        }
        return t.join(" ");
    }
    function c(e) {
        var t = [];
        for (var n in e) {
            t.push([ '<param name="', n, '" value="', u(e[n]), '" />' ].join(""));
        }
        return t.join("");
    }
    try {
        a = n.description || function() {
            return new n("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
        }();
    } catch (h) {
        a = "Unavailable";
    }
    var p = a.match(/\d+/g) || [ 0 ];
    var d = p[0] > 0;
    var g = n && !n.name;
    var m = {
        original: a,
        array: p,
        string: p.join("."),
        major: parseInt(p[0], 10) || 0,
        minor: parseInt(p[1], 10) || 0,
        release: parseInt(p[2], 10) || 0
    };
    function v(e) {
        var t = /string|number/.test(typeof e) ? e.toString().split(".") : /object/.test(typeof e) ? [ e.major, e.minor ] : e || [ 0, 0 ];
        return l(p, t);
    }
    var y = true;
    var b = "expressInstall.swf";
    var w = false;
    function x(t, n) {
        if (!n.swf || w || !d && !n.hasVersionFail) {
            return false;
        }
        if (!v(n.hasVersion || 1)) {
            w = true;
            if (typeof n.hasVersionFail === r) {
                if (!n.hasVersionFail.apply(n)) {
                    return false;
                }
            }
            n = {
                swf: n.expressInstall || b,
                height: 137,
                width: 214,
                flashvars: {
                    MMredirectURL: location.href,
                    MMplayerType: g ? "ActiveX" : "PlugIn",
                    MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
                }
            };
        }
        attrs = {
            id: "ui-flash-object" + e.guid++,
            width: n.width || 320,
            height: n.height || 180,
            style: n.style || ""
        };
        if (s) {
            attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
            n.movie = n.swf;
        } else {
            attrs.data = n.swf;
            attrs.type = "application/x-shockwave-flash";
        }
        o = typeof n.useEncode !== "undefined" ? n.useEncode : y;
        n.wmode = n.wmode || "opaque";
        delete n.hasVersion;
        delete n.hasVersionFail;
        delete n.height;
        delete n.swf;
        delete n.useEncode;
        delete n.width;
        var i = [ "<object ", f(attrs), ">", c(n), "</object>" ].join("");
        if (s) {
            var a = document.createElement("div");
            t.html(a);
            a.outerHTML = i;
        } else {
            t.html(i);
        }
        return t.children().get(0);
    }
    e.fn.flash = function(t) {
        var n, i = false, r;
        function s() {
            i = true;
            n.attr("id", "ui-flash" + e.guid);
        }
        function o(t) {
            var i = e.extend(true, {
                flashvars: {
                    swfid: n.attr("id"),
                    eventHandler: "jQuery.fn.flash.triggerHandler"
                }
            }, t);
            delete i.disabled;
            delete i.module;
            return i;
        }
        function a(e) {
            if (!n.attr("id")) {
                s();
            }
            n.addClass("ui-flash");
            r = x(n, o(e));
        }
        this.getFlash = function() {
            return r;
        };
        if (typeof t === "object") {
            n = this;
            a.call(this, t);
        }
        return this;
    };
    e.fn.flash.triggerHandler = function(t) {
        e("#" + t.swfid).triggerHandler(t.type, t);
    };
})(jQuery, jQuery.util, navigator.plugins["Shockwave Flash"] || window.ActiveXObject);

var saveAs = saveAs || function(e) {
    "use strict";
    var t = e.document, n = function() {
        return e.URL || e.webkitURL || e;
    }, i = e.URL || e.webkitURL || e, r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), s = "download" in r, o = function(n) {
        var i = t.createEvent("MouseEvents");
        i.initMouseEvent("click", true, false, e, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return n.dispatchEvent(i);
    }, a = e.webkitRequestFileSystem, l = e.requestFileSystem || a || e.mozRequestFileSystem, u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
            throw t;
        }, 0);
    }, f = "application/octet-stream", c = 0, h = [], p = function() {
        var e = h.length;
        while (e--) {
            var t = h[e];
            if (typeof t === "string") {
                i.revokeObjectURL(t);
            } else {
                t.remove();
            }
        }
        h.length = 0;
    }, d = function(e, t, n) {
        t = [].concat(t);
        var i = t.length;
        while (i--) {
            var r = e["on" + t[i]];
            if (typeof r === "function") {
                try {
                    r.call(e, n || e);
                } catch (s) {
                    u(s);
                }
            }
        }
    }, g = function(t, i) {
        var u = this, p = t.type, g = false, m, v, y = function() {
            var e = n().createObjectURL(t);
            h.push(e);
            return e;
        }, b = function() {
            d(u, "writestart progress write writeend".split(" "));
        }, w = function() {
            if (g || !m) {
                m = y(t);
            }
            v.location.href = m;
            u.readyState = u.DONE;
            b();
        }, x = function(e) {
            return function() {
                if (u.readyState !== u.DONE) {
                    return e.apply(this, arguments);
                }
            };
        }, C = {
            create: true,
            exclusive: false
        }, k;
        u.readyState = u.INIT;
        if (!i) {
            i = "download";
        }
        if (s) {
            m = y(t);
            r.href = m;
            r.download = i;
            if (o(r)) {
                u.readyState = u.DONE;
                b();
                return;
            }
        }
        if (e.chrome && p && p !== f) {
            k = t.slice || t.webkitSlice;
            t = k.call(t, 0, t.size, f);
            g = true;
        }
        if (a && i !== "download") {
            i += ".download";
        }
        if (p === f || a) {
            v = e;
        } else {
            v = e.open();
        }
        if (!l) {
            w();
            return;
        }
        c += t.size;
        l(e.TEMPORARY, c, x(function(e) {
            e.root.getDirectory("saved", C, x(function(e) {
                var n = function() {
                    e.getFile(i, C, x(function(e) {
                        e.createWriter(x(function(n) {
                            n.onwriteend = function(t) {
                                v.location.href = e.toURL();
                                h.push(e);
                                u.readyState = u.DONE;
                                d(u, "writeend", t);
                            };
                            n.onerror = function() {
                                var e = n.error;
                                if (e.code !== e.ABORT_ERR) {
                                    w();
                                }
                            };
                            "writestart progress write abort".split(" ").forEach(function(e) {
                                n["on" + e] = u["on" + e];
                            });
                            n.write(t);
                            u.abort = function() {
                                n.abort();
                                u.readyState = u.DONE;
                            };
                            u.readyState = u.WRITING;
                        }), w);
                    }), w);
                };
                e.getFile(i, {
                    create: false
                }, x(function(e) {
                    e.remove();
                    n();
                }), x(function(e) {
                    if (e.code === e.NOT_FOUND_ERR) {
                        n();
                    } else {
                        w();
                    }
                }));
            }), w);
        }), w);
    }, m = g.prototype, v = function(e, t) {
        return new g(e, t);
    };
    m.abort = function() {
        var e = this;
        e.readyState = e.DONE;
        d(e, "abort");
    };
    m.readyState = m.INIT = 0;
    m.WRITING = 1;
    m.DONE = 2;
    m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null;
    e.addEventListener("unload", p, false);
    return v;
}(self);

window.log = function() {
    if (location.search.indexOf("debug=true") > -1) {
        console.log.apply(console, arguments);
    }
};

var AppModel = Backbone.Collection.extend({});

var AppView = Backbone.View.extend({
    initialize: function() {
        this.flash = this.$el.find("#flash-container");
        this.config_container = this.$el.find("#config-container");
        this.views = [];
        this.render();
    },
    remove: function() {
        _.each(this.views, function(e) {
            e.remove();
        });
        this.dispose();
        this.flash.remove();
        this.config_container.children().remove();
        this.chart.off(".flash");
        this.chart = null;
        $(document).off("redrawFlash");
        this.dispose();
        return this;
    },
    render: function() {
        this.config_container.append($(this.options.templateId).html()).hide();
        this.startFlash();
        this.model.on("change", this.modelChange, this);
        _.bindAll(this, [ "renderModelAndView" ]);
        $(document).one("dataReady", this.renderModelAndView);
        return this;
    },
    startFlash: function() {
        this.flash.fadeIn();
        var e = this;
        var t = {
            pie: "swf/beechart-pie.swf",
            line: "swf/beechart-line.swf",
            bar: "swf/beechart-bar.swf",
            timeline: "swf/beechart-timeline.swf"
        };
        var n = {
            pie: "swf/data/site-reffers.xml",
            line: "swf/data/2-serials.xml",
            bar: "swf/data/mon-av-temp.xml",
            timeline: "swf/data/small_data.json"
        };
        if (this.options.type && this.flash) {
            e.chart = this.flash.flash({
                swf: t[this.options.type],
                width: 750,
                height: 450,
                allowScriptAccess: "always",
                flashvars: {
                    dataUrl: n[this.options.type],
                    debug: true
                }
            });
            e.chart.on("swfReady.flash", function() {
                log("chartStyle", e.chart.getFlash()._returnChartCSS());
                StyleCenter.getInstance().setStyleSheet(new StyleSheet(e.chart.getFlash()._returnChartCSS()));
            });
        }
        if (e.chart) {
            $(document).on("redrawFlash", function(t, n) {
                log("redrawFlash", n);
                e.chart.getFlash().parseCSS(n, true);
            });
        }
    },
    renderModelAndView: function() {
        var e = this;
        var t = {
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
            t[e.options.type]();
            this.config_container.fadeIn();
        } catch (n) {
            alert(n);
        }
    },
    modelChange: function(e) {
        var t = e.changedAttributes();
        log("model change:", e.styleName, t);
        var n = this;
        StyleCenter.getInstance().setStyle(e.styleName, t);
        if (t["animate"]) {
            n.chart.getFlash()._setState("setState");
            n.chart.getFlash()._setState("normal");
        }
    }
});

var BarView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(e) {
            e.remove();
        });
        BarView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {}
});

var Base = Backbone.Model.extend({});

var BaseView = Backbone.View.extend({
    initialize: function() {
        var e = this.options.modelClz;
        if (e) {
            this.model = new e(this.options.modelAttributes || {});
        }
        e = null;
        this.defaultSetting();
        this.setDefaultValue();
        this.defaultAction();
    },
    defaultSetting: function() {},
    setDefaultValue: function() {
        var e = this;
        log(this.model.styleName, this.model.attributes);
        _.each(this.model.attributes, function(t, n) {
            var i = $(".containe[data-key='" + n + "'] input", e.$el);
            var r, s, o, a;
            if (i.length) {
                r = i.attr("type");
                o = e.model.get(n);
                if (r == "number") {
                    i.val(o);
                }
                if (r == "radio") {
                    _.each(i, function(e) {
                        s = $(e);
                        if (s.val() == o) {
                            s.prop("checked", true);
                        }
                        s = null;
                    });
                }
                if (r == "range") {
                    i.val(o);
                    i.next().text(o);
                }
                if (r == "color") {
                    i.val(o);
                }
                i = null;
            }
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
    clickRadioHandler: function(e) {
        this.valueChangeHanlder(e);
    },
    changeNumberHandler: function(e) {
        var t = $(e.target);
        if (t.is("input[type='range']")) {
            t.next().text(t.val());
        }
        this.valueChangeHanlder(e);
    },
    valueChangeHanlder: function(e) {
        var t = $(e.target);
        var n = t.closest(".containe");
        var i = n.data("key");
        var r = t.val();
        this.model.set(i, r);
    }
});

var CommonModel = Base.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
});

var CommonView = BaseView.extend({});

var GeneralView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(e) {
            e.remove();
        });
        GeneralView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {
        var e = new CommonView({
            modelClz: CommonModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#common-set")
        });
        this.views.push(e);
        this.model.push(e.model);
        var t = new LegendView({
            modelClz: LegendModel,
            modelAttributes: StyleCenter.getInstance().getStyle("legend"),
            el: $("#legend-set")
        });
        this.views.push(t);
        this.model.push(t.model);
        var n = new TooltipView({
            modelClz: TooltipModel,
            modelAttributes: StyleCenter.getInstance().getStyle("tooltip"),
            el: $("#tooltip-set")
        });
        this.views.push(n);
        this.model.push(n.model);
        var i = new XAxisView({
            modelClz: XAxisModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis"),
            el: $("#xAxis-set")
        });
        this.views.push(i);
        this.model.push(i.model);
        var r = new XAxisLabelView({
            modelClz: XAxisLabelModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis label"),
            el: $("#xAxis-label-set")
        });
        this.views.push(r);
        this.model.push(r.model);
    }
});

var LegendModel = Base.extend({
    styleName: "legend",
    defaults: function() {
        return {};
    }
});

var LegendView = BaseView.extend({});

var TooltipModel = Base.extend({
    styleName: "tooltip",
    defaults: function() {
        return {};
    }
});

var TooltipView = BaseView.extend({
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
        var t = this.$el.find(".for-simple");
        var n = t.find("input");
        if (e.val() == "simple") {
            n.attr("disabled", false);
        } else {
            n.attr("disabled", true);
        }
    }
});

var XAxisLabelModel = Base.extend({
    styleName: "xaxis label",
    defaults: function() {
        return {};
    }
});

var XAxisLabelView = BaseView.extend({});

var XAxisModel = Base.extend({
    styleName: "xaxis",
    defaults: function() {
        return {};
    }
});

var XAxisView = BaseView.extend({});

jQuery(function(e) {
    try {
        var t = {
            init: function() {
                this.btnEvent();
                this.chartTypeSwitchModel();
            },
            btnEvent: function() {
                e("#switch").click(function(e) {
                    e.preventDefault();
                });
                e("#download").click(function(e) {
                    e.preventDefault();
                    get_blob_builder = function() {
                        return window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                    };
                    var t = get_blob_builder();
                    var n = new t();
                    n.append(StyleCenter.getInstance().returnCSSText());
                    saveAs(n.getBlob("text/plain;charset=utf-8"), "chart.css");
                });
            },
            chartTypeSwitchModel: function() {
                var t = e("#chart-type-switch-modal");
                var n = false, i, r, s;
                t.modal();
                var o = e(".chart-types button", t);
                var a = e(".alert", t);
                var l = e(".cancel.btn", t);
                var u = e(".confirm.btn", t);
                var f = e(".modal-backdrop");
                f.click(function(e) {
                    if (!o.hasClass("active")) {
                        e.preventDefault();
                    }
                });
                e(document).on("click", ".chart-types button", function(t) {
                    i = e(this);
                    o.removeClass("active");
                    i.addClass("active");
                    n = true;
                });
                l.click(function(e) {
                    h();
                });
                u.click(function(n) {
                    h();
                    if (!i) {
                        return;
                    }
                    var o = i.data("charttype");
                    if (s == o) {
                        t.modal("hide");
                        return;
                    }
                    c();
                    s = o;
                    if (r) {
                        r.remove();
                    }
                    r = new AppView({
                        el: e("body"),
                        model: new AppModel(),
                        type: o,
                        templateId: "#" + o + "-config"
                    });
                    t.modal("hide");
                });
                function c() {
                    e(".flash-container").append("<div id='flash-container' class='well hide ui-flash'>");
                }
                function h() {
                    if (!n) {
                        a.stop().fadeIn().delay(2e3).fadeOut();
                    }
                }
            }
        };
        t.init();
    } catch (n) {
        console.log(n);
    }
});

var LineView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(e) {
            e.remove();
        });
        LineView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {}
});

var PieChartSetModel = Base.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
});

var PieChartSetView = BaseView.extend({});

var PieSliceSetModel = Base.extend({
    styleName: "slice",
    defaults: function() {
        return {};
    }
});

var PieSliceSetView = BaseView.extend({});

var PieView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(e) {
            e.remove();
        });
        PieView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {
        var e = new PieChartSetView({
            modelClz: PieChartSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#pie-chart-set")
        });
        this.views.push(e);
        this.model.push(e.model);
        var t = new PieSliceSetView({
            modelClz: PieSliceSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("slice"),
            el: $("#pie-slice-set")
        });
        this.views.push(t);
        this.model.push(t.model);
    }
});

var StyleCenter = function() {
    var e;
    function t() {
        var e;
        return {
            setStyleSheet: function(e) {
                this.styleSheet = e;
                $(document).triggerHandler("dataReady");
            },
            setStyle: function(e, t) {
                var n = (e + JSON.stringify(t) + "").replace(/\"/g, "");
                var i = this.styleSheet.getStyle(e);
                if (i) {
                    i = _.extend(i, t);
                    this.styleSheet.setStyle(e, i);
                }
                log("setStyle", n, i);
                i = null;
                $(document).triggerHandler("redrawFlash", [ n ]);
            },
            getStyle: function(e) {
                return this.styleSheet.getStyle(e);
            },
            returnCSSText: function() {
                return this.styleSheet.returnCSSText();
            }
        };
    }
    return {
        getInstance: function() {
            if (!e) {
                e = new t();
            }
            return e;
        }
    };
}();

var StyleSheet = function(e) {
    this._style = {};
    if (e) {
        this.parseCSS(e);
    }
};

StyleSheet.prototype = {
    parseCSS: function(e) {
        var t = /([\w\s]+)\s*{([^}]*\s*[^}]*)}/gm;
        var n = /([\w.]+)\s*:\s*([^;\n]+)/g;
        var i = e;
        if (i) {
            i = i.replace(/\/\*.*\*\//gm, "");
            i = _.string.strip(i);
            var r, s, o, a, l;
            while (r = t.exec(i)) {
                s = _.string.strip(r[1]);
                o = _.string.strip(r[2]);
                l = {};
                while (r = n.exec(o)) {
                    a = _.string.strip(r[2]);
                    l[r[1]] = a;
                }
                this.setStyle(s, l);
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
        var e = [], t, n;
        var i = _.keys(this._style);
        var r = this;
        _.each(i, function(t) {
            obj = r.getStyle(t);
            n = [];
            n.push(t.concat("{"));
            _.each(obj, function(e, t) {
                n.push([ "	", t, ": ", e, ";" ].join(""));
            });
            n.push("}");
            e.push(n.join("\n"));
        });
        return e.join("\n");
    }
};