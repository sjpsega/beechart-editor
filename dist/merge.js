(function(window, undefined) {
    "use strict";
    var rootjQuery, readyList, document = window.document, location = window.location, navigator = window.navigator, _jQuery = window.jQuery, _$ = window.$, core_push = Array.prototype.push, core_slice = Array.prototype.slice, core_indexOf = Array.prototype.indexOf, core_toString = Object.prototype.toString, core_hasOwn = Object.prototype.hasOwnProperty, core_trim = String.prototype.trim, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, core_rnotwhite = /\S/, core_rspace = /\s+/, core_deletedIds = [], rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return (letter + "").toUpperCase();
    }, DOMContentLoaded = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            jQuery.ready();
        } else if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", DOMContentLoaded);
            jQuery.ready();
        }
    }, class2type = {};
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem, doc;
            if (!selector) {
                return this;
            }
            if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            }
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        doc = context && context.nodeType ? context.ownerDocument || context : document;
                        selector = jQuery.parseHTML(match[1], doc, true);
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            this.attr.call(selector, context, true);
                        }
                        return jQuery.merge(this, selector);
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (jQuery.isFunction(selector)) {
                return rootjQuery.ready(selector);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        },
        selector: "",
        jquery: "1.8.3pre",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
        },
        pushStack: function(elems, name, selector) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            if (name === "find") {
                ret.selector = this.selector + (this.selector ? " " : "") + selector;
            } else if (name) {
                ret.selector = this.selector + "." + name + "(" + selector + ")";
            }
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            jQuery.ready.promise().done(fn);
            return this;
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments), "slice", core_slice.call(arguments).join(","));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        noConflict: function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            if (!document.body) {
                return setTimeout(jQuery.ready, 1);
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready");
            }
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            return obj == null ? String(obj) : class2type[core_toString.call(obj)] || "object";
        },
        isPlainObject: function(obj) {
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            var key;
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        error: function(msg) {
            throw new Error(msg);
        },
        parseHTML: function(data, context, scripts) {
            var parsed;
            if (!data || typeof data !== "string") {
                return null;
            }
            if (typeof context === "boolean") {
                scripts = context;
                context = 0;
            }
            context = context || document;
            if (parsed = rsingleTag.exec(data)) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = jQuery.buildFragment([ data ], context, scripts ? null : []);
            return jQuery.merge([], (parsed.cacheable ? jQuery.clone(parsed.fragment) : parsed.fragment).childNodes);
        },
        parseJSON: function(data) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }
            if (data === null) {
                return data;
            }
            if (typeof data === "string") {
                data = jQuery.trim(data);
                if (data) {
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data);
        },
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                if (window.DOMParser) {
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }
            } catch (e) {
                xml = undefined;
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        },
        noop: function() {},
        globalEval: function(data) {
            if (data && core_rnotwhite.test(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data);
                })(data);
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var name, i = 0, length = obj.length, isObj = length === undefined || jQuery.isFunction(obj);
            if (args) {
                if (isObj) {
                    for (name in obj) {
                        if (callback.apply(obj[name], args) === false) {
                            break;
                        }
                    }
                } else {
                    for (;i < length; ) {
                        if (callback.apply(obj[i++], args) === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isObj) {
                    for (name in obj) {
                        if (callback.call(obj[name], name, obj[name]) === false) {
                            break;
                        }
                    }
                } else {
                    for (;i < length; ) {
                        if (callback.call(obj[i], i, obj[i++]) === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: core_trim && !core_trim.call("﻿ ") ? function(text) {
            return text == null ? "" : core_trim.call(text);
        } : function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var type, ret = results || [];
            if (arr != null) {
                type = jQuery.type(arr);
                if (arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow(arr)) {
                    core_push.call(ret, arr);
                } else {
                    jQuery.merge(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i);
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (;i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l === "number") {
                for (;j < l; j++) {
                    first[i++] = second[j];
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            for (;i < length; i++) {
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    ret.push(elems[i]);
                }
            }
            return ret;
        },
        map: function(elems, callback, arg) {
            var value, key, ret = [], i = 0, length = elems.length, isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && (length > 0 && elems[0] && elems[length - 1] || length === 0 || jQuery.isArray(elems));
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            } else {
                for (key in elems) {
                    value = callback(elems[key], key, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            }
            return ret.concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = core_slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        access: function(elems, fn, key, value, chainable, emptyGet, pass) {
            var exec, bulk = key == null, i = 0, length = elems.length;
            if (key && typeof key === "object") {
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], 1, emptyGet, value);
                }
                chainable = 1;
            } else if (value !== undefined) {
                exec = pass === undefined && jQuery.isFunction(value);
                if (bulk) {
                    if (exec) {
                        exec = fn;
                        fn = function(elem, key, value) {
                            return exec.call(jQuery(elem), value);
                        };
                    } else {
                        fn.call(elems, value);
                        fn = null;
                    }
                }
                if (fn) {
                    for (;i < length; i++) {
                        fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
                    }
                }
                chainable = 1;
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: function() {
            return new Date().getTime();
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready, 1);
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                window.addEventListener("load", jQuery.ready, false);
            } else {
                document.attachEvent("onreadystatechange", DOMContentLoaded);
                window.attachEvent("onload", jQuery.ready);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    rootjQuery = jQuery(document);
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.split(core_rspace), function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return jQuery.inArray(fn, list) > -1;
            },
            empty: function() {
                list = [];
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                args = args || [];
                args = [ context, args.slice ? args.slice() : args ];
                if (list && (!fired || stack)) {
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var action = tuple[0], fn = fns[i];
                            deferred[tuple[1]](jQuery.isFunction(fn) ? function() {
                                var returned = fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[action + "With"](this === deferred ? newDefer : this, [ returned ]);
                                }
                            } : newDefer[action]);
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = list.fire;
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    jQuery.support = function() {
        var support, all, a, select, opt, input, fragment, eventName, i, isSupported, clickFn, div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        all = div.getElementsByTagName("*");
        a = div.getElementsByTagName("a")[0];
        if (!all || !a || !all.length) {
            return {};
        }
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        support = {
            leadingWhitespace: div.firstChild.nodeType === 3,
            tbody: !div.getElementsByTagName("tbody").length,
            htmlSerialize: !!div.getElementsByTagName("link").length,
            style: /top/.test(a.getAttribute("style")),
            hrefNormalized: a.getAttribute("href") === "/a",
            opacity: /^0.5/.test(a.style.opacity),
            cssFloat: !!a.style.cssFloat,
            checkOn: input.value === "on",
            optSelected: opt.selected,
            getSetAttribute: div.className !== "t",
            enctype: !!document.createElement("form").enctype,
            html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: document.compatMode === "CSS1Compat",
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
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }
        if (!div.addEventListener && div.attachEvent && div.fireEvent) {
            div.attachEvent("onclick", clickFn = function() {
                support.noCloneEvent = false;
            });
            div.cloneNode(true).fireEvent("onclick");
            div.detachEvent("onclick", clickFn);
        }
        input = document.createElement("input");
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        fragment = document.createDocumentFragment();
        fragment.appendChild(div.lastChild);
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        support.appendChecked = input.checked;
        fragment.removeChild(input);
        fragment.appendChild(div);
        if (!div.addEventListener) {
            for (i in {
                submit: true,
                change: true,
                focusin: true
            }) {
                eventName = "on" + i;
                isSupported = eventName in div;
                if (!isSupported) {
                    div.setAttribute(eventName, "return;");
                    isSupported = typeof div[eventName] === "function";
                }
                support[i + "Bubbles"] = isSupported;
            }
        }
        jQuery(function() {
            var container, div, tds, marginDiv, divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
            if (!body) {
                return;
            }
            container = document.createElement("div");
            container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            body.insertBefore(container, body.firstChild);
            div = document.createElement("div");
            container.appendChild(div);
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            support.boxSizing = div.offsetWidth === 4;
            support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                marginDiv = document.createElement("div");
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                div.appendChild(marginDiv);
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            if (typeof div.style.zoom !== "undefined") {
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                div.style.display = "block";
                div.style.overflow = "visible";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                container.style.zoom = 1;
            }
            body.removeChild(container);
            container = div = tds = marginDiv = null;
        });
        fragment.removeChild(div);
        all = a = select = opt = input = fragment = div = null;
        return support;
    }();
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, ret, internalKey = jQuery.expando, getByName = typeof name === "string", isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
            return;
        }
        if (!id) {
            if (isNode) {
                elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }
        if (!cache[id]) {
            cache[id] = {};
            if (!isNode) {
                cache[id].toJSON = jQuery.noop;
            }
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }
        if (getByName) {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    }
    function internalRemoveData(elem, name, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, i, l, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return;
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [ name ];
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                }
                for (i = 0, l = name.length; i < l; i++) {
                    delete thisCache[name[i]];
                }
                if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
                    return;
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }
        if (isNode) {
            jQuery.cleanData([ elem ], true);
        } else if (jQuery.support.deleteExpando || cache != cache.window) {
            delete cache[id];
        } else {
            cache[id] = null;
        }
    }
    jQuery.extend({
        cache: {},
        expando: "jQuery" + (jQuery.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data, false);
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name, false);
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
        },
        acceptData: function(elem) {
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var parts, part, attr, name, l, elem = this[0], i = 0, data = null;
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        attr = elem.attributes;
                        for (l = attr.length; i < l; i++) {
                            name = attr[i].name;
                            if (!name.indexOf("data-")) {
                                name = jQuery.camelCase(name.substring(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }
            parts = key.split(".", 2);
            parts[1] = parts[1] ? "." + parts[1] : "";
            part = parts[1] + "!";
            return jQuery.access(this, function(value) {
                if (value === undefined) {
                    data = this.triggerHandler("getData" + part, [ parts[0] ]);
                    if (data === undefined && elem) {
                        data = jQuery.data(elem, key);
                        data = dataAttr(elem, key, data);
                    }
                    return data === undefined && parts[1] ? this.data(parts[0]) : data;
                }
                parts[1] = value;
                this.each(function() {
                    var self = jQuery(this);
                    self.triggerHandler("setData" + part, parts);
                    jQuery.data(this, key, value);
                    self.triggerHandler("changeData" + part, parts);
                });
            }, null, value, arguments.length > 1, null, false);
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });
    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                jQuery.data(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var nodeHook, boolHook, fixSpecified, rclass = /[\t\r\n]/g, rreturn = /\r/g, rtype = /^(?:button|input)$/i, rfocusable = /^(?:button|input|object|select|textarea)$/i, rclickable = /^a(?:rea|)$/i, rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        },
        addClass: function(value) {
            var classNames, i, l, elem, setClass, c, cl;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (value && typeof value === "string") {
                classNames = value.split(core_rspace);
                for (i = 0, l = this.length; i < l; i++) {
                    elem = this[i];
                    if (elem.nodeType === 1) {
                        if (!elem.className && classNames.length === 1) {
                            elem.className = value;
                        } else {
                            setClass = " " + elem.className + " ";
                            for (c = 0, cl = classNames.length; c < cl; c++) {
                                if (setClass.indexOf(" " + classNames[c] + " ") < 0) {
                                    setClass += classNames[c] + " ";
                                }
                            }
                            elem.className = jQuery.trim(setClass);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var removes, className, elem, c, cl, i, l;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (value && typeof value === "string" || value === undefined) {
                removes = (value || "").split(core_rspace);
                for (i = 0, l = this.length; i < l; i++) {
                    elem = this[i];
                    if (elem.nodeType === 1 && elem.className) {
                        className = (" " + elem.className + " ").replace(rclass, " ");
                        for (c = 0, cl = removes.length; c < cl; c++) {
                            while (className.indexOf(" " + removes[c] + " ") >= 0) {
                                className = className.replace(" " + removes[c] + " ", " ");
                            }
                        }
                        elem.className = value ? jQuery.trim(className) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isBool = typeof stateVal === "boolean";
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.split(core_rspace);
                    while (className = classNames[i++]) {
                        state = isBool ? state : !self.hasClass(className);
                        self[state ? "addClass" : "removeClass"](className);
                    }
                } else if (type === "undefined" || type === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val, self = jQuery(this);
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, self.val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = elem.attributes.value;
                    return !val || val.specified ? elem.value : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var values = jQuery.makeArray(value);
                    jQuery(elem).find("option").each(function() {
                        this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
                    });
                    if (!values.length) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },
        attr: function(elem, name, value, pass) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (pass && jQuery.isFunction(jQuery.fn[name])) {
                return jQuery(elem)[name](value);
            }
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                } else if (hooks && "set" in hooks && notxml && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && notxml && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = elem.getAttribute(name);
                return ret === null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var propName, attrNames, name, isBool, i = 0;
            if (value && elem.nodeType === 1) {
                attrNames = value.split(core_rspace);
                for (;i < attrNames.length; i++) {
                    name = attrNames[i];
                    if (name) {
                        propName = jQuery.propFix[name] || name;
                        isBool = rboolean.test(name);
                        if (!isBool) {
                            jQuery.attr(elem, name, "");
                        }
                        elem.removeAttribute(getSetAttribute ? name : propName);
                        if (isBool && propName in elem) {
                            elem[propName] = false;
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (rtype.test(elem.nodeName) && elem.parentNode) {
                        jQuery.error("type property can't be changed");
                    } else if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            },
            value: {
                get: function(elem, name) {
                    if (nodeHook && jQuery.nodeName(elem, "button")) {
                        return nodeHook.get(elem, name);
                    }
                    return name in elem ? elem.value : null;
                },
                set: function(elem, value, name) {
                    if (nodeHook && jQuery.nodeName(elem, "button")) {
                        return nodeHook.set(elem, value, name);
                    }
                    elem.value = value;
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
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    return elem[name] = value;
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                } else {
                    return elem[name];
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var attributeNode = elem.getAttributeNode("tabindex");
                    return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
                }
            }
        }
    });
    boolHook = {
        get: function(elem, name) {
            var attrNode, property = jQuery.prop(elem, name);
            return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
        },
        set: function(elem, value, name) {
            var propName;
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else {
                propName = jQuery.propFix[name] || name;
                if (propName in elem) {
                    elem[propName] = true;
                }
                elem.setAttribute(name, name.toLowerCase());
            }
            return name;
        }
    };
    if (!getSetAttribute) {
        fixSpecified = {
            name: true,
            id: true,
            coords: true
        };
        nodeHook = jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret;
                ret = elem.getAttributeNode(name);
                return ret && (fixSpecified[name] ? ret.value !== "" : ret.specified) ? ret.value : undefined;
            },
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    ret = elem.ownerDocument.createAttribute(name);
                    elem.setAttributeNode(ret);
                }
                return ret.value = value + "";
            }
        };
        jQuery.each([ "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            });
        });
        jQuery.attrHooks.contenteditable = {
            get: nodeHook.get,
            set: function(elem, value, name) {
                if (value === "") {
                    value = "false";
                }
                nodeHook.set(elem, value, name);
            }
        };
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each([ "href", "src", "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
                get: function(elem) {
                    var ret = elem.getAttribute(name, 2);
                    return ret === null ? undefined : ret;
                }
            });
        });
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText.toLowerCase() || undefined;
            },
            set: function(elem, value) {
                return elem.style.cssText = value + "";
            }
        };
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    if (!jQuery.support.checkOn) {
        jQuery.each([ "radio", "checkbox" ], function() {
            jQuery.valHooks[this] = {
                get: function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                }
            };
        });
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        });
    });
    var rformElems = /^(?:textarea|input|select)$/i, rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    jQuery.event = {
        add: function(elem, types, handler, data, selector) {
            var elemData, eventHandle, events, t, tns, type, namespaces, handleObj, handleObjIn, handlers, special;
            if (elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data(elem))) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            events = elemData.events;
            if (!events) {
                elemData.events = events = {};
            }
            eventHandle = elemData.handle;
            if (!eventHandle) {
                elemData.handle = eventHandle = function(e) {
                    return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                eventHandle.elem = elem;
            }
            types = jQuery.trim(types).split(" ");
            for (t = 0; t < types.length; t++) {
                tns = rtypenamespace.exec(types[t]) || [];
                type = tns[1];
                namespaces = (tns[2] || "").split(".").sort();
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: tns[1],
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                handlers = events[type];
                if (!handlers) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
            elem = null;
        },
        global: {},
        remove: function(elem, types, handler, selector, mappedTypes) {
            var t, tns, type, origType, namespaces, origCount, j, events, special, eventType, handleObj, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = jQuery.trim(types).split(" ");
            for (t = 0; t < types.length; t++) {
                tns = rtypenamespace.exec(types[t]) || [];
                type = origType = tns[1];
                namespaces = tns[2];
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                eventType = events[type] || [];
                origCount = eventType.length;
                namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (j = 0; j < eventType.length; j++) {
                    handleObj = eventType[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!namespaces || namespaces.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        eventType.splice(j--, 1);
                        if (handleObj.selector) {
                            eventType.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (eventType.length === 0 && origCount !== eventType.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events");
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(event, data, elem, onlyHandlers) {
            if (elem && (elem.nodeType === 3 || elem.nodeType === 8)) {
                return;
            }
            var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType, type = event.type || event, namespaces = event.namespace ? event.namespace.split(".") : [];
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf("!") >= 0) {
                type = type.slice(0, -1);
                exclusive = true;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            if ((!elem || jQuery.event.customEvent[type]) && !jQuery.event.global[type]) {
                return;
            }
            event = typeof event === "object" ? event[jQuery.expando] ? event : new jQuery.Event(type, event) : new jQuery.Event(type);
            event.type = type;
            event.isTrigger = true;
            event.exclusive = exclusive;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            ontype = type.indexOf(":") < 0 ? "on" + type : "";
            if (!elem) {
                cache = jQuery.cache;
                for (i in cache) {
                    if (cache[i].events && cache[i].events[type]) {
                        jQuery.event.trigger(event, data, cache[i].handle.elem, true);
                    }
                }
                return;
            }
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data != null ? jQuery.makeArray(data) : [];
            data.unshift(event);
            special = jQuery.event.special[type] || {};
            if (special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            eventPath = [ [ elem, special.bindType || type ] ];
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                cur = rfocusMorph.test(bubbleType + type) ? elem : elem.parentNode;
                for (old = elem; cur; cur = cur.parentNode) {
                    eventPath.push([ cur, bubbleType ]);
                    old = cur;
                }
                if (old === (elem.ownerDocument || document)) {
                    eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
                }
            }
            for (i = 0; i < eventPath.length && !event.isPropagationStopped(); i++) {
                cur = eventPath[i][0];
                event.type = eventPath[i][1];
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    event.preventDefault();
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        old = elem[ontype];
                        if (old) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (old) {
                            elem[ontype] = old;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, handlers = (jQuery._data(this, "events") || {})[event.type] || [], delegateCount = handlers.delegateCount, args = core_slice.call(arguments), run_all = !event.exclusive && !event.namespace, special = jQuery.event.special[event.type] || {}, handlerQueue = [];
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            if (delegateCount && !(event.button && event.type === "click")) {
                for (cur = event.target; cur != this; cur = cur.parentNode || this) {
                    if (cur.disabled !== true || event.type !== "click") {
                        selMatch = {};
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector;
                            if (selMatch[sel] === undefined) {
                                selMatch[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (selMatch[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                matches: matches
                            });
                        }
                    }
                }
            }
            if (handlers.length > delegateCount) {
                handlerQueue.push({
                    elem: this,
                    matches: handlers.slice(delegateCount)
                });
            }
            for (i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++) {
                matched = handlerQueue[i];
                event.currentTarget = matched.elem;
                for (j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++) {
                    handleObj = matched.matches[j];
                    if (run_all || !event.namespace && !handleObj.namespace || event.namespace_re && event.namespace_re.test(handleObj.namespace)) {
                        event.data = handleObj.data;
                        event.handleObj = handleObj;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            event.result = ret;
                            if (ret === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button, fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, originalEvent = event, fixHook = jQuery.event.fixHooks[event.type] || {}, copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = jQuery.Event(originalEvent);
            for (i = copy.length; i; ) {
                prop = copy[--i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
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
                postDispatch: function(event) {
                    if (event.result !== undefined) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.event.handle = jQuery.event.dispatch;
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === "undefined") {
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    function returnFalse() {
        return false;
    }
    function returnTrue() {
        return true;
    }
    jQuery.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;
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
            this.isPropagationStopped = returnTrue;
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
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "_submit_attached")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submit_bubble = true;
                        });
                        jQuery._data(form, "_submit_attached", true);
                    }
                });
            },
            postDispatch: function(event) {
                if (event._submit_bubble) {
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._just_changed && !event.isTrigger) {
                                this._just_changed = false;
                            }
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "_change_attached")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        jQuery._data(elem, "_change_attached", true);
                    }
                });
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var attaches = 0, handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        live: function(types, data, fn) {
            jQuery(this.context).on(types, this.selector, data, fn);
            return this;
        },
        die: function(types, fn) {
            jQuery(this.context).off(types, this.selector || "**", fn);
            return this;
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            if (this[0]) {
                return jQuery.event.trigger(type, data, this[0], true);
            }
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            if (fn == null) {
                fn = data;
                data = null;
            }
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
        if (rkeyEvent.test(name)) {
            jQuery.event.fixHooks[name] = jQuery.event.keyHooks;
        }
        if (rmouseEvent.test(name)) {
            jQuery.event.fixHooks[name] = jQuery.event.mouseHooks;
        }
    });
    (function(window, undefined) {
        var cachedruns, assertGetIdNotName, Expr, getText, isXML, contains, compile, sortOrder, hasDuplicate, outermostContext, strundefined = "undefined", MAX_NEGATIVE = 1 << 31, baseHasDuplicate = true, expando = ("sizcache" + Math.random()).replace(".", ""), Token = String, document = window.document, docElem = document.documentElement, dirruns = 0, done = 0, pop = [].pop, push = [].push, slice = [].slice, indexOf = [].indexOf || function(elem) {
            var i = 0, len = this.length;
            for (;i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, markFunction = function(fn, value) {
            fn[expando] = value == null || value;
            return fn;
        }, createCache = function() {
            var cache = {}, keys = [];
            return markFunction(function(key, value) {
                if (keys.push(key) > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
            }, cache);
        }, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), operators = "([*^$|!~]?=)", attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)", pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"), rpseudo = new RegExp(pseudos), rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, rsibling = /[\x20\t\r\n\f]*[+~]/, rheader = /h\d/i, rinputs = /input|select|textarea|button/i, rbackslash = /\\(?!\\)/g, matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            POS: new RegExp(pos, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|" + pos, "i")
        }, assert = function(fn) {
            var div = document.createElement("div");
            try {
                return fn(div);
            } catch (e) {
                return false;
            } finally {
                div = null;
            }
        }, assertTagNameNoComments = assert(function(div) {
            div.appendChild(document.createComment(""));
            return !div.getElementsByTagName("*").length;
        }), assertHrefNotNormalized = assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
        }), assertAttributes = assert(function(div) {
            div.innerHTML = "<select></select>";
            var type = typeof div.lastChild.getAttribute("multiple");
            return type !== "boolean" && type !== "string";
        }), assertUsableClassName = assert(function(div) {
            div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
            if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
                return false;
            }
            div.lastChild.className = "e";
            return div.getElementsByClassName("e").length === 2;
        }), assertUsableName = assert(function(div) {
            div.id = expando + 0;
            div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
            docElem.insertBefore(div, docElem.firstChild);
            var pass = document.getElementsByName && document.getElementsByName(expando).length === 2 + document.getElementsByName(expando + 0).length;
            assertGetIdNotName = !document.getElementById(expando);
            docElem.removeChild(div);
            return pass;
        });
        try {
            slice.call(docElem.childNodes, 0)[0].nodeType;
        } catch (e) {
            slice = function(i) {
                var elem, results = [];
                for (;elem = this[i]; i++) {
                    results.push(elem);
                }
                return results;
            };
        }
        function Sizzle(selector, context, results, seed) {
            results = results || [];
            context = context || document;
            var match, elem, xml, m, nodeType = context.nodeType;
            if (!selector || typeof selector !== "string") {
                return results;
            }
            if (nodeType !== 1 && nodeType !== 9) {
                return [];
            }
            xml = isXML(context);
            if (!xml && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
                        return results;
                    } else if ((m = match[3]) && assertUsableClassName && context.getElementsByClassName) {
                        push.apply(results, slice.call(context.getElementsByClassName(m), 0));
                        return results;
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed, xml);
        }
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            return Sizzle(expr, null, null, [ elem ]).length > 0;
        };
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (nodeType) {
                if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
            } else {
                for (;node = elem[i]; i++) {
                    ret += getText(node);
                }
            }
            return ret;
        };
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        contains = Sizzle.contains = docElem.contains ? function(a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && adown.contains && adown.contains(bup));
        } : docElem.compareDocumentPosition ? function(a, b) {
            return b && !!(a.compareDocumentPosition(b) & 16);
        } : function(a, b) {
            while (b = b.parentNode) {
                if (b === a) {
                    return true;
                }
            }
            return false;
        };
        Sizzle.attr = function(elem, name) {
            var val, xml = isXML(elem);
            if (!xml) {
                name = name.toLowerCase();
            }
            if (val = Expr.attrHandle[name]) {
                return val(elem);
            }
            if (xml || assertAttributes) {
                return elem.getAttribute(name);
            }
            val = elem.getAttributeNode(name);
            return val ? typeof elem[name] === "boolean" ? elem[name] ? name : null : val.specified ? val.value : null : null;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: assertHrefNotNormalized ? {} : {
                href: function(elem) {
                    return elem.getAttribute("href", 2);
                },
                type: function(elem) {
                    return elem.getAttribute("type");
                }
            },
            find: {
                ID: assertGetIdNotName ? function(id, context, xml) {
                    if (typeof context.getElementById !== strundefined && !xml) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                } : function(id, context, xml) {
                    if (typeof context.getElementById !== strundefined && !xml) {
                        var m = context.getElementById(id);
                        return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [ m ] : undefined : [];
                    }
                },
                TAG: assertTagNameNoComments ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== strundefined) {
                        return context.getElementsByTagName(tag);
                    }
                } : function(tag, context) {
                    var results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        var elem, tmp = [], i = 0;
                        for (;elem = results[i]; i++) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                },
                NAME: assertUsableName && function(tag, context) {
                    if (typeof context.getElementsByName !== strundefined) {
                        return context.getElementsByName(name);
                    }
                },
                CLASS: assertUsableClassName && function(className, context, xml) {
                    if (typeof context.getElementsByClassName !== strundefined && !xml) {
                        return context.getElementsByClassName(className);
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
                ATTR: function(match) {
                    match[1] = match[1].replace(rbackslash, "");
                    match[3] = (match[4] || match[5] || "").replace(rbackslash, "");
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1] === "nth") {
                        if (!match[2]) {
                            Sizzle.error(match[0]);
                        }
                        match[3] = +(match[3] ? match[4] + (match[5] || 1) : 2 * (match[2] === "even" || match[2] === "odd"));
                        match[4] = +(match[6] + match[7] || match[2] === "odd");
                    } else if (match[2]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var unquoted, excess;
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3]) {
                        match[2] = match[3];
                    } else if (unquoted = match[4]) {
                        if (rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            unquoted = unquoted.slice(0, excess);
                            match[0] = match[0].slice(0, excess);
                        }
                        match[2] = unquoted;
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                ID: assertGetIdNotName ? function(id) {
                    id = id.replace(rbackslash, "");
                    return function(elem) {
                        return elem.getAttribute("id") === id;
                    };
                } : function(id) {
                    id = id.replace(rbackslash, "");
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === id;
                    };
                },
                TAG: function(nodeName) {
                    if (nodeName === "*") {
                        return function() {
                            return true;
                        };
                    }
                    nodeName = nodeName.replace(rbackslash, "").toLowerCase();
                    return function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[expando][className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.substr(result.length - check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.substr(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, argument, first, last) {
                    if (type === "nth") {
                        return function(elem) {
                            var node, diff, parent = elem.parentNode;
                            if (first === 1 && last === 0) {
                                return true;
                            }
                            if (parent) {
                                diff = 0;
                                for (node = parent.firstChild; node; node = node.nextSibling) {
                                    if (node.nodeType === 1) {
                                        diff++;
                                        if (elem === node) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        };
                    }
                    return function(elem) {
                        var node = elem;
                        switch (type) {
                          case "only":
                          case "first":
                            while (node = node.previousSibling) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }
                            if (type === "first") {
                                return true;
                            }
                            node = elem;

                          case "last":
                            while (node = node.nextSibling) {
                                if (node.nodeType === 1) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                empty: function(elem) {
                    var nodeType;
                    elem = elem.firstChild;
                    while (elem) {
                        if (elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4) {
                            return false;
                        }
                        elem = elem.nextSibling;
                    }
                    return true;
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                text: function(elem) {
                    var type, attr;
                    return elem.nodeName.toLowerCase() === "input" && (type = elem.type) === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type);
                },
                radio: createInputPseudo("radio"),
                checkbox: createInputPseudo("checkbox"),
                file: createInputPseudo("file"),
                password: createInputPseudo("password"),
                image: createInputPseudo("image"),
                submit: createButtonPseudo("submit"),
                reset: createButtonPseudo("reset"),
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                focus: function(elem) {
                    var doc = elem.ownerDocument;
                    return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                active: function(elem) {
                    return elem === elem.ownerDocument.activeElement;
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 0; i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 1; i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = argument < 0 ? argument + length : argument; ++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        function siblingCheck(a, b) {
            if (a && b) {
                var cur = a.nextSibling;
                while (cur) {
                    if (cur === b) {
                        return -1;
                    }
                    cur = cur.nextSibling;
                }
            }
            return a ? 1 : -1;
        }
        sortOrder = docElem.compareDocumentPosition ? function(a, b) {
            var compare, parent;
            if (a === b) {
                hasDuplicate = true;
                return 0;
            }
            if (a.compareDocumentPosition && b.compareDocumentPosition) {
                if ((compare = a.compareDocumentPosition(b)) & 1 || (parent = a.parentNode) && parent.nodeType === 11) {
                    if (a === document || contains(document, a)) {
                        return -1;
                    }
                    if (b === document || contains(document, b)) {
                        return 1;
                    }
                    return 0;
                }
                return compare & 4 ? -1 : 1;
            }
            return a.compareDocumentPosition ? -1 : 1;
        } : function(a, b) {
            if (a === b) {
                hasDuplicate = true;
                return 0;
            } else if (a.sourceIndex && b.sourceIndex) {
                return (~b.sourceIndex || MAX_NEGATIVE) - (contains(document, a) && ~a.sourceIndex || MAX_NEGATIVE);
            }
            var i = 0, ap = [ a ], bp = [ b ], aup = a.parentNode, bup = b.parentNode, cur = aup;
            if (a === document) {
                return -1;
            } else if (b === document) {
                return 1;
            } else if (!aup && !bup) {
                return 0;
            } else if (!bup) {
                return -1;
            } else if (!aup) {
                return 1;
            } else if (aup === bup) {
                return siblingCheck(a, b);
            }
            while (cur) {
                ap.unshift(cur);
                cur = cur.parentNode;
            }
            cur = bup;
            while (cur) {
                bp.unshift(cur);
                cur = cur.parentNode;
            }
            while (ap[i] === bp[i]) {
                i++;
            }
            if (i === 0) {
                if (ap[0] === document || contains(document, ap[0])) {
                    return -1;
                }
                if (bp[0] === document || contains(document, bp[0])) {
                    return 1;
                }
                return 0;
            }
            return siblingCheck(ap[i], bp[i]);
        };
        [ 0, 0 ].sort(sortOrder);
        baseHasDuplicate = !hasDuplicate;
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], i = 1, j = 0;
            hasDuplicate = baseHasDuplicate;
            results.sort(sortOrder);
            if (hasDuplicate) {
                for (;elem = results[i]; i++) {
                    if (elem === results[i - 1]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            return results;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[expando][selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    tokens.push(matched = new Token(match.shift()));
                    soFar = soFar.slice(matched.length);
                    matched.type = match[0].replace(rtrim, " ");
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        tokens.push(matched = new Token(match.shift()));
                        soFar = soFar.slice(matched.length);
                        matched.type = type;
                        matched.matches = match;
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && combinator.dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (checkNonElements || elem.nodeType === 1) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                if (!xml) {
                    var cache, dirkey = dirruns + " " + doneName + " ", cachedkey = dirkey + cachedruns;
                    while (elem = elem[dir]) {
                        if (checkNonElements || elem.nodeType === 1) {
                            if ((cache = elem[expando]) === cachedkey) {
                                return elem.sizset;
                            } else if (typeof cache === "string" && cache.indexOf(dirkey) === 0) {
                                if (elem.sizset) {
                                    return elem;
                                }
                            } else {
                                elem[expando] = cachedkey;
                                if (matcher(elem, context, xml)) {
                                    elem.sizset = true;
                                    return elem;
                                }
                                elem.sizset = false;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (checkNonElements || elem.nodeType === 1) {
                            if (matcher(elem, context, xml)) {
                                return elem;
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && tokens.slice(0, i - 1).join("").replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && tokens.join(""));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.E;
                if (outermost) {
                    outermostContext = context !== document && context;
                    cachedruns = superMatcher.el;
                }
                for (;(elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        for (j = 0; matcher = elementMatchers[j]; j++) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            cachedruns = ++superMatcher.el;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    for (j = 0; matcher = setMatchers[j]; j++) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            superMatcher.el = 0;
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[expando][selector + " "];
            if (!cached) {
                if (!group) {
                    group = tokenize(selector);
                }
                i = group.length;
                while (i--) {
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function select(selector, context, results, seed, xml) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !xml && Expr.relative[tokens[1].type]) {
                        context = Expr.find["ID"](token.matches[0].replace(rbackslash, ""), context, xml)[0];
                        if (!context) {
                            return results;
                        }
                        selector = selector.slice(tokens.shift().length);
                    }
                    for (i = matchExpr["POS"].test(selector) ? -1 : tokens.length - 1; i >= 0; i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(rbackslash, ""), rsibling.test(tokens[0].type) && context.parentNode || context, xml)) {
                                tokens.splice(i, 1);
                                selector = seed.length && tokens.join("");
                                if (!selector) {
                                    push.apply(results, slice.call(seed, 0));
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            compile(selector, match)(seed, context, xml, results, rsibling.test(selector));
            return results;
        }
        if (document.querySelectorAll) {
            (function() {
                var disconnectedMatch, oldSelect = select, rescape = /'|\\/g, rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, rbuggyQSA = [ ":focus" ], rbuggyMatches = [ ":active" ], matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector;
                assert(function(div) {
                    div.innerHTML = "<select><option selected=''></option></select>";
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    div.innerHTML = "<p test=''></p>";
                    if (div.querySelectorAll("[test^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
                    }
                    div.innerHTML = "<input type='hidden'/>";
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                });
                rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
                select = function(selector, context, results, seed, xml) {
                    if (!seed && !xml && !rbuggyQSA.test(selector)) {
                        var groups, i, old = true, nid = expando, newContext = context, newSelector = context.nodeType === 9 && selector;
                        if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                            groups = tokenize(selector);
                            if (old = context.getAttribute("id")) {
                                nid = old.replace(rescape, "\\$&");
                            } else {
                                context.setAttribute("id", nid);
                            }
                            nid = "[id='" + nid + "'] ";
                            i = groups.length;
                            while (i--) {
                                groups[i] = nid + groups[i].join("");
                            }
                            newContext = rsibling.test(selector) && context.parentNode || context;
                            newSelector = groups.join(",");
                        }
                        if (newSelector) {
                            try {
                                push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
                                return results;
                            } catch (qsaError) {} finally {
                                if (!old) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                    return oldSelect(selector, context, results, seed, xml);
                };
                if (matches) {
                    assert(function(div) {
                        disconnectedMatch = matches.call(div, "div");
                        try {
                            matches.call(div, "[test!='']:sizzle");
                            rbuggyMatches.push("!=", pseudos);
                        } catch (e) {}
                    });
                    rbuggyMatches = new RegExp(rbuggyMatches.join("|"));
                    Sizzle.matchesSelector = function(elem, expr) {
                        expr = expr.replace(rattributeQuotes, "='$1']");
                        if (!isXML(elem) && !rbuggyMatches.test(expr) && !rbuggyQSA.test(expr)) {
                            try {
                                var ret = matches.call(elem, expr);
                                if (ret || disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                                    return ret;
                                }
                            } catch (e) {}
                        }
                        return Sizzle(expr, null, null, [ elem ]).length > 0;
                    };
                }
            })();
        }
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        function setFilters() {}
        Expr.filters = setFilters.prototype = Expr.pseudos;
        Expr.setFilters = new setFilters();
        Sizzle.attr = jQuery.attr;
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
    })(window);
    var runtil = /Until$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, isSimple = /^.[^:#\[\.,]*$/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, l, length, n, r, ret, self = this;
            if (typeof selector !== "string") {
                return jQuery(selector).filter(function() {
                    for (i = 0, l = self.length; i < l; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                });
            }
            ret = this.pushStack("", "find", selector);
            for (i = 0, l = this.length; i < l; i++) {
                length = ret.length;
                jQuery.find(selector, this[i], ret);
                if (i > 0) {
                    for (n = length; n < ret.length; n++) {
                        for (r = 0; r < length; r++) {
                            if (ret[r] === ret[n]) {
                                ret.splice(n--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return ret;
        },
        has: function(target) {
            var i, targets = jQuery(target, this), len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector, false), "not", selector);
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector, true), "filter", selector);
        },
        is: function(selector) {
            return !!selector && (typeof selector === "string" ? rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                cur = this[i];
                while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
                    if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
                        ret.push(cur);
                        break;
                    }
                    cur = cur.parentNode;
                }
            }
            ret = ret.length > 1 ? jQuery.unique(ret) : ret;
            return this.pushStack(ret, "closest", selectors);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    jQuery.fn.andSelf = jQuery.fn.addBack;
    function isDisconnected(node) {
        return !node || !node.parentNode || node.parentNode.nodeType === 11;
    }
    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (!runtil.test(name)) {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }
            ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
            if (this.length > 1 && rparentsprev.test(name)) {
                ret = ret.reverse();
            }
            return this.pushStack(ret, name, core_slice.call(arguments).join(","));
        };
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] : jQuery.find.matches(expr, elems);
        },
        dir: function(elem, dir, until) {
            var matched = [], cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },
        sibling: function(n, elem) {
            var r = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }
            return r;
        }
    });
    function winnow(elements, qualifier, keep) {
        qualifier = qualifier || 0;
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                var retVal = !!qualifier.call(elem, i, elem);
                return retVal === keep;
            });
        } else if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier === keep;
            });
        } else if (typeof qualifier === "string") {
            var filtered = jQuery.grep(elements, function(elem) {
                return elem.nodeType === 1;
            });
            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, filtered, !keep);
            } else {
                qualifier = jQuery.filter(qualifier, filtered);
            }
        }
        return jQuery.grep(elements, function(elem) {
            return jQuery.inArray(elem, qualifier) >= 0 === keep;
        });
    }
    function createSafeFragment(document) {
        var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rnocache = /<(?:script|object|embed|option|style)/i, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rcheckableType = /^(?:checkbox|radio)$/, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /\/(java|ecma)script/i, rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        area: [ 1, "<map>", "</map>" ],
        _default: [ 0, "", "" ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div")), addMandatoryAttributes = function(elem) {
        return elem;
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!jQuery.support.htmlSerialize) {
        wrapMap._default = [ 1, "X<div>", "</div>" ];
        wrapMap.param = [ 1, "X<object>", "</object>" ];
        addMandatoryAttributes = function(elem) {
            return elem.replace(/<param([^>]*)>/gi, function(m, s1, offset) {
                var name = s1.match(/name=["']([^"']*)["']/i);
                return name ? name[1].length ? "<param" + s1 + ">" : "<param" + s1.replace(name[0], "name='_" + offset + "'") + ">" : "<param name='_" + offset + "' " + s1 + ">";
            });
        };
    }
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        },
        append: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, true, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.insertBefore(elem, this.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, false, function(elem) {
                if (!isDisconnected(this)) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, false, function(elem) {
                if (!isDisconnected(this)) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (!selector || jQuery.filter(selector, [ elem ]).length) {
                    if (!keepData && elem.nodeType === 1) {
                        jQuery.cleanData(elem.getElementsByTagName("*"));
                        jQuery.cleanData([ elem ]);
                    }
                    if (elem.parentNode) {
                        elem.parentNode.removeChild(elem);
                    }
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(elem.getElementsByTagName("*"));
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(elem.getElementsByTagName("*"));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function(value) {
            var self = this, isFunc = jQuery.isFunction(value);
            if (!isFunc && typeof value !== "string") {
                value = jQuery(value).detach();
            }
            this.each(function(i) {
                var next = this.nextSibling, parent = this.parentNode, val = !isFunc ? value : value.call(this, i, this);
                if (isDisconnected(this)) {
                    self[i] = jQuery(val).clone()[0];
                    return;
                }
                jQuery(this).remove();
                if (next) {
                    jQuery(next).before(val);
                } else {
                    jQuery(parent).append(val);
                }
            });
            return this;
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, table, callback) {
            args = [].concat.apply([], args);
            var results, first, fragment, iNoClone, i = 0, value = args[0], scripts = [], l = this.length;
            if (!jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test(value)) {
                return this.each(function() {
                    jQuery(this).domManip(args, table, callback);
                });
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    args[0] = value.call(this, i, table ? self.html() : undefined);
                    self.domManip(args, table, callback);
                });
            }
            if (this[0]) {
                results = jQuery.buildFragment(args, this, scripts);
                fragment = results.fragment;
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    table = table && jQuery.nodeName(first, "tr");
                    for (iNoClone = results.cacheable || l - 1; i < l; i++) {
                        callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], i === iNoClone ? fragment : jQuery.clone(fragment, true, true));
                    }
                }
                fragment = first = null;
                if (scripts.length) {
                    jQuery.each(scripts, function(i, elem) {
                        if (elem.src) {
                            if (jQuery.ajax) {
                                jQuery.ajax({
                                    url: elem.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: false,
                                    global: false,
                                    "throws": true
                                });
                            } else {
                                jQuery.error("no ajax");
                            }
                        } else {
                            jQuery.globalEval((elem.text || elem.textContent || elem.innerHTML || "").replace(rcleanScript, ""));
                        }
                        if (elem.parentNode) {
                            elem.parentNode.removeChild(elem);
                        }
                    });
                }
            }
            return this;
        }
    });
    function findOrAppend(elem, tag) {
        return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
    }
    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }
        var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    function cloneFixAttributes(src, dest) {
        var nodeName;
        if (dest.nodeType !== 1) {
            return;
        }
        if (dest.clearAttributes) {
            dest.clearAttributes();
        }
        if (dest.mergeAttributes) {
            dest.mergeAttributes(src);
        }
        nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }
            if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                dest.innerHTML = src.innerHTML;
            }
        } else if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value;
            }
        } else if (nodeName === "option") {
            dest.selected = src.defaultSelected;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        } else if (nodeName === "script" && dest.text !== src.text) {
            dest.text = src.text;
        }
        dest.removeAttribute(jQuery.expando);
    }
    jQuery.buildFragment = function(args, context, scripts) {
        var fragment, cacheable, cachehit, first = args[0];
        context = context || document;
        context = !context.nodeType && context[0] || context;
        context = context.ownerDocument || context;
        if (args.length === 1 && typeof first === "string" && first.length < 512 && context === document && first.charAt(0) === "<" && !rnocache.test(first) && (jQuery.support.checkClone || !rchecked.test(first)) && (jQuery.support.html5Clone || !rnoshimcache.test(first))) {
            cacheable = true;
            fragment = jQuery.fragments[first];
            cachehit = fragment !== undefined;
        }
        if (!fragment) {
            fragment = context.createDocumentFragment();
            jQuery.clean(args, context, fragment, scripts);
            if (cacheable) {
                jQuery.fragments[first] = cachehit && fragment;
            }
        }
        return {
            fragment: fragment,
            cacheable: cacheable
        };
    };
    jQuery.fragments = {};
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0, ret = [], insert = jQuery(selector), l = insert.length, parent = this.length === 1 && this[0].parentNode;
            if ((parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1) {
                insert[original](this[0]);
                return this;
            } else {
                for (;i < l; i++) {
                    elems = (i > 0 ? this.clone(true) : this).get();
                    jQuery(insert[i])[original](elems);
                    ret = ret.concat(elems);
                }
                return this.pushStack(ret, name, insert.selector);
            }
        };
    });
    function getAll(elem) {
        if (typeof elem.getElementsByTagName !== "undefined") {
            return elem.getElementsByTagName("*");
        } else if (typeof elem.querySelectorAll !== "undefined") {
            return elem.querySelectorAll("*");
        } else {
            return [];
        }
    }
    function fixDefaultChecked(elem) {
        if (rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var srcElements, destElements, i, clone;
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true);
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                cloneFixAttributes(elem, clone);
                srcElements = getAll(elem);
                destElements = getAll(clone);
                for (i = 0; srcElements[i]; ++i) {
                    if (destElements[i]) {
                        cloneFixAttributes(srcElements[i], destElements[i]);
                    }
                }
            }
            if (dataAndEvents) {
                cloneCopyEvent(elem, clone);
                if (deepDataAndEvents) {
                    srcElements = getAll(elem);
                    destElements = getAll(clone);
                    for (i = 0; srcElements[i]; ++i) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                }
            }
            srcElements = destElements = null;
            return clone;
        },
        clean: function(elems, context, fragment, scripts) {
            var i, j, elem, tag, wrap, depth, div, hasBody, tbody, handleScript, jsTags, safe = context === document && safeFragment, ret = [];
            if (!context || typeof context.createDocumentFragment === "undefined") {
                context = document;
            }
            for (i = 0; (elem = elems[i]) != null; i++) {
                if (typeof elem === "number") {
                    elem += "";
                }
                if (!elem) {
                    continue;
                }
                if (typeof elem === "string") {
                    if (!rhtml.test(elem)) {
                        elem = context.createTextNode(elem);
                    } else {
                        safe = safe || createSafeFragment(context);
                        div = context.createElement("div");
                        safe.appendChild(div);
                        elem = elem.replace(rxhtmlTag, "<$1></$2>");
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        depth = wrap[0];
                        div.innerHTML = wrap[1] + addMandatoryAttributes(elem) + wrap[2];
                        while (depth--) {
                            div = div.lastChild;
                        }
                        if (!jQuery.support.tbody) {
                            hasBody = rtbody.test(elem);
                            tbody = tag === "table" && !hasBody ? div.firstChild && div.firstChild.childNodes : wrap[1] === "<table>" && !hasBody ? div.childNodes : [];
                            for (j = tbody.length - 1; j >= 0; --j) {
                                if (jQuery.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {
                                    tbody[j].parentNode.removeChild(tbody[j]);
                                }
                            }
                        }
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
                        }
                        elem = div.childNodes;
                        div.parentNode.removeChild(div);
                    }
                }
                if (elem.nodeType) {
                    ret.push(elem);
                } else {
                    jQuery.merge(ret, elem);
                }
            }
            if (div) {
                elem = div = safe = null;
            }
            if (!jQuery.support.appendChecked) {
                for (i = 0; (elem = ret[i]) != null; i++) {
                    if (jQuery.nodeName(elem, "input")) {
                        fixDefaultChecked(elem);
                    } else if (typeof elem.getElementsByTagName !== "undefined") {
                        jQuery.grep(elem.getElementsByTagName("input"), fixDefaultChecked);
                    }
                }
            }
            if (fragment) {
                handleScript = function(elem) {
                    if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
                    }
                };
                for (i = 0; (elem = ret[i]) != null; i++) {
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
                            ret.splice.apply(ret, [ i + 1, 0 ].concat(jsTags));
                            i += jsTags.length;
                        }
                    }
                }
            }
            return ret;
        },
        cleanData: function(elems, acceptData) {
            var data, id, elem, type, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
            for (;(elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (deleteExpando) {
                                delete elem[internalKey];
                            } else if (elem.removeAttribute) {
                                elem.removeAttribute(internalKey);
                            } else {
                                elem[internalKey] = null;
                            }
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        }
    });
    var curCSS, iframe, iframeDoc, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity=([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([-+])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function isHidden(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    function showHide(elements, show) {
        var elem, display, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            if (show) {
                if (!values[index] && elem.style.display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else {
                display = curCSS(elem, "display");
                if (!values[index] && display !== "none") {
                    jQuery._data(elem, "olddisplay", display);
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            var bool = typeof state === "boolean";
            return this.each(function() {
                if (bool ? state : isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
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
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || type === "number" && isNaN(value)) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, numeric, extra) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (numeric || extra !== undefined) {
                num = parseFloat(val);
                return numeric || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        },
        swap: function(elem, options, callback) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.call(elem);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        }
    });
    if (window.getComputedStyle) {
        curCSS = function(elem, name) {
            var ret, width, minWidth, maxWidth, computed = window.getComputedStyle(elem, null), style = elem.style;
            if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret;
        };
    } else if (document.documentElement.currentStyle) {
        curCSS = function(elem, name) {
            var left, rsLeft, ret = elem.currentStyle && elem.currentStyle[name], style = elem.style;
            if (ret == null && style && style[name]) {
                ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;
                if (rsLeft) {
                    elem.runtimeStyle.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    elem.runtimeStyle.left = rsLeft;
                }
            }
            return ret === "" ? "auto" : ret;
        };
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;
                }
                if (extra !== "margin") {
                    val -= parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
                }
            } else {
                val += parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;
                if (extra !== "padding") {
                    val += parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var val = name === "width" ? elem.offsetWidth : elem.offsetHeight, valueIsBorderBox = true, isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing") === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox) + "px";
    }
    function css_defaultDisplay(nodeName) {
        if (elemdisplay[nodeName]) {
            return elemdisplay[nodeName];
        }
        var elem = jQuery("<" + nodeName + ">").appendTo(document.body), display = elem.css("display");
        elem.remove();
        if (display === "none" || display === "") {
            iframe = document.body.appendChild(iframe || jQuery.extend(document.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!iframeDoc || !iframe.createElement) {
                iframeDoc = (iframe.contentWindow || iframe.contentDocument).document;
                iframeDoc.write("<!doctype html><html><body>");
                iframeDoc.close();
            }
            elem = iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));
            display = curCSS(elem, "display");
            document.body.removeChild(iframe);
        }
        elemdisplay[nodeName] = display;
        return display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    if (elem.offsetWidth === 0 && rdisplayswap.test(curCSS(elem, "display"))) {
                        return jQuery.swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, name, extra);
                        });
                    } else {
                        return getWidthOrHeight(elem, name, extra);
                    }
                }
            },
            set: function(elem, value, extra) {
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing") === "border-box") : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if (value >= 1 && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (currentStyle && !currentStyle.filter) {
                        return;
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    return jQuery.swap(elem, {
                        display: "inline-block"
                    }, function() {
                        if (computed) {
                            return curCSS(elem, "marginRight");
                        }
                    });
                }
            };
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each([ "top", "left" ], function(i, prop) {
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, prop);
                            return rnumnonpx.test(ret) ? jQuery(elem).position()[prop] + "px" : ret;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth === 0 && elem.offsetHeight === 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || curCSS(elem, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i, parts = typeof value === "string" ? value.split(" ") : [ value ], expanded = {};
                for (i = 0; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, rselectTextarea = /^(?:select|textarea)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? jQuery.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    var ajaxLocParts, ajaxLocation, antiCacheValue = jQuery.now(), rhash = /#.*$/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rquery = /\?/, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, rts = /([?&])_=[^&]*/, rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = [ "*/" ] + [ "*" ];
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, list, placeBefore, dataTypes = dataTypeExpression.toLowerCase().split(core_rspace), i = 0, length = dataTypes.length;
            if (jQuery.isFunction(func)) {
                for (;i < length; i++) {
                    dataType = dataTypes[i];
                    placeBefore = /^\+/.test(dataType);
                    if (placeBefore) {
                        dataType = dataType.substr(1) || "*";
                    }
                    list = structure[dataType] = structure[dataType] || [];
                    list[placeBefore ? "unshift" : "push"](func);
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        if (!this.length) {
            return this;
        }
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        jQuery.ajax({
            url: url,
            type: type,
            dataType: "html",
            data: params,
            complete: function(jqXHR, status) {
                if (callback) {
                    self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
                }
            }
        }).done(function(responseText) {
            response = arguments;
            self.html(selector ? jQuery("<div>").append(responseText.replace(rscript, "")).find(selector) : responseText);
        });
        return this;
    };
    jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(i, o) {
        jQuery.fn[o] = function(f) {
            return this.on(o, f);
        };
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                type: method,
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        };
    });
    jQuery.extend({
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        ajaxSetup: function(target, settings) {
            if (settings) {
                ajaxExtend(target, jQuery.ajaxSettings);
            } else {
                settings = target;
                target = jQuery.ajaxSettings;
            }
            ajaxExtend(target, settings);
            return target;
        },
        ajaxSettings: {
            url: ajaxLocation,
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
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
                "*": allTypes
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
                "* text": window.String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var ifModifiedKey, responseHeadersString, responseHeaders, transport, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = callbackContext !== s && (callbackContext.nodeType || callbackContext instanceof jQuery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                setRequestHeader: function(name, value) {
                    if (!state) {
                        var lname = name.toLowerCase();
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match === undefined ? null : match;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                abort: function(statusText) {
                    statusText = statusText || strAbort;
                    if (transport) {
                        transport.abort(statusText);
                    }
                    done(0, statusText);
                    return this;
                }
            };
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                if (status >= 200 && status < 300 || status === 304) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[ifModifiedKey] = modified;
                        }
                        modified = jqXHR.getResponseHeader("Etag");
                        if (modified) {
                            jQuery.etag[ifModifiedKey] = modified;
                        }
                    }
                    if (status === 304) {
                        statusText = "notmodified";
                        isSuccess = true;
                    } else {
                        isSuccess = ajaxConvert(s, response);
                        statusText = isSuccess.state;
                        success = isSuccess.data;
                        error = isSuccess.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (!statusText || status) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger("ajax" + (isSuccess ? "Success" : "Error"), [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            deferred.promise(jqXHR);
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            jqXHR.complete = completeDeferred.add;
            jqXHR.statusCode = function(map) {
                if (map) {
                    var tmp;
                    if (state < 2) {
                        for (tmp in map) {
                            statusCode[tmp] = [ statusCode[tmp], map[tmp] ];
                        }
                    } else {
                        tmp = map[jqXHR.status];
                        jqXHR.always(tmp);
                    }
                }
                return this;
            };
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().split(core_rspace);
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = s.global;
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            if (!s.hasContent) {
                if (s.data) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
                    delete s.data;
                }
                ifModifiedKey = s.url;
                if (s.cache === false) {
                    var ts = antiCacheValue++, ret = s.url.replace(rts, "$1_=" + ts);
                    s.url = ret + (ret === s.url ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            if (s.ifModified) {
                ifModifiedKey = ifModifiedKey || s.url;
                if (jQuery.lastModified[ifModifiedKey]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[ifModifiedKey]);
                }
                if (jQuery.etag[ifModifiedKey]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[ifModifiedKey]);
                }
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            return jqXHR;
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes, responseFields = s.responseFields;
        for (type in responseFields) {
            if (type in responses) {
                jqXHR[responseFields[type]] = responses[type];
            }
        }
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("content-type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response) {
        var conv, conv2, current, tmp, dataTypes = s.dataTypes.slice(), prev = dataTypes[0], converters = {}, i = 0;
        if (s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
        }
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        for (;current = dataTypes[++i]; ) {
            if (current !== "*") {
                if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.splice(i--, 0, current);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
                prev = current;
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    var oldCallbacks = [], rquestion = /\?/, rjsonp = /(=)\?(?=&|$)|\?\?/, nonce = jQuery.now();
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, data = s.data, url = s.url, hasCallback = s.jsonp !== false, replaceInUrl = hasCallback && rjsonp.test(url), replaceInData = hasCallback && !replaceInUrl && typeof data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(data);
        if (s.dataTypes[0] === "jsonp" || replaceInUrl || replaceInData) {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            overwritten = window[callbackName];
            if (replaceInUrl) {
                s.url = url.replace(rjsonp, "$1" + callbackName);
            } else if (replaceInData) {
                s.data = data.replace(rjsonp, "$1" + callbackName);
            } else if (hasCallback) {
                s.url += (rquestion.test(url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = "async";
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (head && script.parentNode) {
                                head.removeChild(script);
                            }
                            script = undefined;
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    if (script) {
                        script.onload(0, 1);
                    }
                }
            };
        }
    });
    var xhrCallbacks, xhrOnUnloadAbort = window.ActiveXObject ? function() {
        for (var key in xhrCallbacks) {
            xhrCallbacks[key](0, 1);
        }
    } : false, xhrId = 0;
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }
    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    (function(xhr) {
        jQuery.extend(jQuery.support, {
            ajax: !!xhr,
            cors: !!xhr && "withCredentials" in xhr
        });
    })(jQuery.ajaxSettings.xhr());
    if (jQuery.support.ajax) {
        jQuery.ajaxTransport(function(s) {
            if (!s.crossDomain || jQuery.support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var handle, i, xhr = s.xhr();
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            xhr.open(s.type, s.url, s.async);
                        }
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType);
                        }
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (err) {}
                        xhr.send(s.hasContent && s.data || null);
                        callback = function(_, isAbort) {
                            var status, statusText, responseHeaders, responses, xml;
                            try {
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    callback = undefined;
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    if (isAbort) {
                                        if (xhr.readyState !== 4) {
                                            xhr.abort();
                                        }
                                    } else {
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        responses = {};
                                        xml = xhr.responseXML;
                                        if (xml && xml.documentElement) {
                                            responses.xml = xml;
                                        }
                                        if (typeof xhr.responseText === "string") {
                                            responses.text = xhr.responseText;
                                        }
                                        try {
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            statusText = "";
                                        }
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404;
                                        } else if (status === 1223) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        if (!s.async) {
                            callback();
                        } else if (xhr.readyState === 4) {
                            setTimeout(callback, 0);
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort);
                                }
                                xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(0, 1);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var end, unit, tween = this.createTween(prop, value), parts = rfxnum.exec(value), target = tween.cur(), start = +target || 0, scale = 1, maxIterations = 20;
            if (parts) {
                end = +parts[2];
                unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
                if (unit !== "px" && start) {
                    start = jQuery.css(tween.elem, prop, true) || end || 1;
                    do {
                        scale = scale || ".5";
                        start = start / scale;
                        jQuery.style(tween.elem, prop, start + unit);
                    } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                }
                tween.unit = unit;
                tween.start = start;
                tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        }, 0);
        return fxNow = jQuery.now();
    }
    function createTweens(animation, props) {
        jQuery.each(props, function(prop, value) {
            var collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
            for (;index < length; index++) {
                if (collection[index].call(animation, prop, value)) {
                    return;
                }
            }
        });
    }
    function Animation(elem, properties, options) {
        var result, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        createTweens(animation, props);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            anim: animation,
            queue: animation.opts.queue,
            elem: elem
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    function defaultPrefilter(elem, props, opts) {
        var index, prop, value, length, dataShow, tween, hooks, oldfire, anim = this, style = elem.style, orig = {}, handled = [], hidden = elem.nodeType && isHidden(elem);
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                anim.done(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        for (index in props) {
            value = props[index];
            if (rfxtypes.exec(value)) {
                delete props[index];
                if (value === (hidden ? "hide" : "show")) {
                    continue;
                }
                handled.push(index);
            }
        }
        length = handled.length;
        if (length) {
            dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (index = 0; index < length; index++) {
                prop = handled[index];
                tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
                orig[prop] = dataShow[prop] || jQuery.style(elem, prop);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, false, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty) {
                    anim.stop(true);
                }
            };
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        }
    });
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    jQuery.each({
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
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers, i = 0;
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
    };
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer) && !timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
    }
    var rroot = /^(?:body|html)$/i;
    jQuery.fn.offset = function(options) {
        if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }
        var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft, box = {
            top: 0,
            left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
        if (!doc) {
            return;
        }
        if ((body = doc.body) === elem) {
            return jQuery.offset.bodyOffset(elem);
        }
        docElem = doc.documentElement;
        if (!jQuery.contains(docElem, elem)) {
            return box;
        }
        if (typeof elem.getBoundingClientRect !== "undefined") {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        clientTop = docElem.clientTop || body.clientTop || 0;
        clientLeft = docElem.clientLeft || body.clientLeft || 0;
        scrollTop = win.pageYOffset || docElem.scrollTop;
        scrollLeft = win.pageXOffset || docElem.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    };
    jQuery.offset = {
        bodyOffset: function(body) {
            var top = body.offsetTop, left = body.offsetLeft;
            if (jQuery.support.doesNotIncludeMarginInBodyOffset) {
                top += parseFloat(jQuery.css(body, "marginTop")) || 0;
                left += parseFloat(jQuery.css(body, "marginLeft")) || 0;
            }
            return {
                top: top,
                left: left
            };
        },
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            if (position === "static") {
                elem.style.position = "relative";
            }
            var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, parentOffset = {
                top: 0,
                left: 0
            }, elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!rroot.test(offsetParent[0].nodeName)) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += parseFloat(jQuery.css(offsetParent[0], "borderTopWidth")) || 0;
                parentOffset.left += parseFloat(jQuery.css(offsetParent[0], "borderLeftWidth")) || 0;
            }
            return {
                top: offset.top - parentOffset.top - (parseFloat(jQuery.css(elem, "marginTop")) || 0),
                left: offset.left - parentOffset.left - (parseFloat(jQuery.css(elem, "marginLeft")) || 0)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || document.body;
                while (offsetParent && !rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || document.body;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, value, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    (function() {
        var matched, browser, eventAdd, eventRemove, oldToggle = jQuery.fn.toggle, rhoverHack = /(?:^|\s)hover(\.\S+|)\b/, hoverHack = function(events) {
            return jQuery.event.special.hover ? events : events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
        };
        jQuery.uaMatch = function(ua) {
            ua = ua.toLowerCase();
            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
            return {
                browser: match[1] || "",
                version: match[2] || "0"
            };
        };
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};
        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }
        jQuery.browser = browser;
        jQuery.sub = function() {
            function jQuerySub(selector, context) {
                return new jQuerySub.fn.init(selector, context);
            }
            jQuery.extend(true, jQuerySub, this);
            jQuerySub.superclass = this;
            jQuerySub.fn = jQuerySub.prototype = this();
            jQuerySub.fn.constructor = jQuerySub;
            jQuerySub.sub = this.sub;
            jQuerySub.fn.init = function init(selector, context) {
                if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                    context = jQuerySub(context);
                }
                return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
            };
            jQuerySub.fn.init.prototype = jQuerySub.fn;
            var rootjQuerySub = jQuerySub(document);
            return jQuerySub;
        };
        jQuery.fn.toggle = function(fn, fn2) {
            if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
                return oldToggle.apply(this, arguments);
            }
            var args = arguments, guid = fn.guid || jQuery.guid++, i = 0, toggler = function(event) {
                var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                event.preventDefault();
                return args[lastToggle].apply(this, arguments) || false;
            };
            toggler.guid = guid;
            while (i < args.length) {
                args[i++].guid = guid;
            }
            return this.click(toggler);
        };
        eventAdd = jQuery.event.add;
        jQuery.event.add = function(elem, types, handler, data, selector) {
            if (types) {
                types = hoverHack(types);
            }
            eventAdd.call(this, elem, types, handler, data, selector);
        };
        eventRemove = jQuery.event.remove;
        jQuery.event.remove = function(elem, types, handler, selector, mappedTypes) {
            if (types) {
                types = hoverHack(types);
            }
            eventRemove.call(this, elem, types, handler, selector, mappedTypes);
        };
        jQuery.attrFn = {};
    })();
    window.jQuery = window.$ = jQuery;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function() {
            return jQuery;
        });
    }
})(window);

(function() {
    var root = this;
    var previousUnderscore = root._;
    var breaker = {};
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, unshift = ArrayProto.unshift, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root["_"] = _;
    }
    _.VERSION = "1.4.2";
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (_.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results[results.length] = iterator.call(context, value, index, list);
        });
        return results;
    };
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError("Reduce of empty array with no initial value");
        return memo;
    };
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return arguments.length > 2 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length;
            if (!initial) {
                memo = obj[index];
                initial = true;
            } else {
                memo = iterator.call(context, memo, obj[index], index, list);
            }
        });
        if (!initial) throw new TypeError("Reduce of empty array with no initial value");
        return memo;
    };
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };
    _.reject = function(obj, iterator, context) {
        return _.filter(obj, function(value, index, list) {
            return !iterator.call(context, value, index, list);
        }, context);
    };
    _.every = _.all = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    _.contains = _.include = function(obj, target) {
        var found = false;
        if (obj == null) return found;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        found = any(obj, function(value) {
            return value === target;
        });
        return found;
    };
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        return _.map(obj, function(value) {
            return (_.isFunction(method) ? method : value[method]).apply(value, args);
        });
    };
    _.pluck = function(obj, key) {
        return _.map(obj, function(value) {
            return value[key];
        });
    };
    _.where = function(obj, attrs) {
        if (_.isEmpty(attrs)) return [];
        return _.filter(obj, function(value) {
            for (var key in attrs) {
                if (attrs[key] !== value[key]) return false;
            }
            return true;
        });
    };
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {
            computed: -Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed >= result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {
            computed: Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    _.shuffle = function(obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function(value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };
    var lookupIterator = function(value) {
        return _.isFunction(value) ? value : function(obj) {
            return obj[value];
        };
    };
    _.sortBy = function(obj, value, context) {
        var iterator = lookupIterator(value);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index < right.index ? -1 : 1;
        }), "value");
    };
    var group = function(obj, value, context, behavior) {
        var result = {};
        var iterator = lookupIterator(value);
        each(obj, function(value, index) {
            var key = iterator.call(context, value, index, obj);
            behavior(result, key, value);
        });
        return result;
    };
    _.groupBy = function(obj, value, context) {
        return group(obj, value, context, function(result, key, value) {
            (_.has(result, key) ? result[key] : result[key] = []).push(value);
        });
    };
    _.countBy = function(obj, value, context) {
        return group(obj, value, context, function(result, key, value) {
            if (!_.has(result, key)) result[key] = 0;
            result[key]++;
        });
    };
    _.sortedIndex = function(array, obj, iterator, context) {
        iterator = iterator == null ? _.identity : lookupIterator(iterator);
        var value = iterator.call(context, obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    };
    _.toArray = function(obj) {
        if (!obj) return [];
        if (obj.length === +obj.length) return slice.call(obj);
        return _.values(obj);
    };
    _.size = function(obj) {
        if (obj == null) return 0;
        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
    };
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        return n != null && !guard ? slice.call(array, 0, n) : array[0];
    };
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
    };
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n != null && !guard) {
            return slice.call(array, Math.max(array.length - n, 0));
        } else {
            return array[array.length - 1];
        }
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function(array) {
        return _.filter(array, function(value) {
            return !!value;
        });
    };
    var flatten = function(input, shallow, output) {
        each(input, function(value) {
            if (_.isArray(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    };
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function(array, isSorted, iterator, context) {
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function(value, index) {
            if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };
    _.union = function() {
        return _.uniq(concat.apply(ArrayProto, arguments));
    };
    _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };
    _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    };
    _.zip = function() {
        var args = slice.call(arguments);
        var length = _.max(_.pluck(args, "length"));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(args, "" + i);
        }
        return results;
    };
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, l = list.length; i < l; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, l = array.length;
        if (isSorted) {
            if (typeof isSorted == "number") {
                i = isSorted < 0 ? Math.max(0, l + isSorted) : isSorted;
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (;i < l; i++) if (array[i] === item) return i;
        return -1;
    };
    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
            return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        }
        var i = hasIndex ? from : array.length;
        while (i--) if (array[i] === item) return i;
        return -1;
    };
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        var len = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(len);
        while (idx < len) {
            range[idx++] = start;
            start += step;
        }
        return range;
    };
    var ctor = function() {};
    _.bind = function bind(func, context) {
        var bound, args;
        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError();
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor();
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length == 0) funcs = _.functions(obj);
        each(funcs, function(f) {
            obj[f] = _.bind(obj[f], obj);
        });
        return obj;
    };
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
        };
    };
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    };
    _.throttle = function(func, wait) {
        var context, args, timeout, result;
        var previous = 0;
        var later = function() {
            previous = new Date();
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = new Date();
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    _.debounce = function(func, wait, immediate) {
        var timeout, result;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };
    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };
    _.wrap = function(func, wrapper) {
        return function() {
            var args = [ func ];
            push.apply(args, arguments);
            return wrapper.apply(this, args);
        };
    };
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [ funcs[i].apply(this, args) ];
            }
            return args[0];
        };
    };
    _.after = function(times, func) {
        if (times <= 0) return func();
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError("Invalid object");
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
        return keys;
    };
    _.values = function(obj) {
        var values = [];
        for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
        return values;
    };
    _.pairs = function(obj) {
        var pairs = [];
        for (var key in obj) if (_.has(obj, key)) pairs.push([ key, obj[key] ]);
        return pairs;
    };
    _.invert = function(obj) {
        var result = {};
        for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
        return result;
    };
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        });
        return obj;
    };
    _.pick = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };
    _.omit = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                if (obj[prop] == null) obj[prop] = source[prop];
            }
        });
        return obj;
    };
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return a === b;
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != "object" || typeof b != "object") return false;
        var length = aStack.length;
        while (length--) {
            if (aStack[length] == a) return bStack[length] == b;
        }
        aStack.push(a);
        bStack.push(b);
        var size = 0, result = true;
        if (className == "[object Array]") {
            size = a.length;
            result = size == b.length;
            if (result) {
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            var aCtor = a.constructor, bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
                return false;
            }
            for (var key in a) {
                if (_.has(a, key)) {
                    size++;
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !size--) break;
                }
                result = !size;
            }
        }
        aStack.pop();
        bStack.pop();
        return result;
    };
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == "[object Array]";
    };
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]";
        };
    });
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, "callee"));
        };
    }
    if (typeof /./ !== "function") {
        _.isFunction = function(obj) {
            return typeof obj === "function";
        };
    }
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    };
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == "[object Boolean]";
    };
    _.isNull = function(obj) {
        return obj === null;
    };
    _.isUndefined = function(obj) {
        return obj === void 0;
    };
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };
    _.identity = function(value) {
        return value;
    };
    _.times = function(n, iterator, context) {
        for (var i = 0; i < n; i++) iterator.call(context, i);
    };
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + (0 | Math.random() * (max - min + 1));
    };
    var entityMap = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);
    var entityRegexes = {
        escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
    };
    _.each([ "escape", "unescape" ], function(method) {
        _[method] = function(string) {
            if (string == null) return "";
            return ("" + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    });
    _.result = function(object, property) {
        if (object == null) return null;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = idCounter++;
        return prefix ? prefix + id : id;
    };
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    _.template = function(text, data, settings) {
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = new RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, function(match) {
                return "\\" + escapes[match];
            });
            source += escape ? "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" : interpolate ? "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" : evaluate ? "';\n" + evaluate + "\n__p+='" : "";
            index = offset + match.length;
        });
        source += "';\n";
        if (!settings.variable) source = "with(obj||{}){\n" + source + "}\n";
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            var render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };
        template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}";
        return template;
    };
    _.chain = function(obj) {
        return _(obj).chain();
    };
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    _.mixin(_);
    each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == "shift" || name == "splice") && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });
    each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });
    _.extend(_.prototype, {
        chain: function() {
            this._chain = true;
            return this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}).call(this);

!function(root, String) {
    "use strict";
    var nativeTrim = String.prototype.trim;
    var nativeTrimRight = String.prototype.trimRight;
    var nativeTrimLeft = String.prototype.trimLeft;
    var parseNumber = function(source) {
        return source * 1 || 0;
    };
    var strRepeat = function(str, qty) {
        if (qty < 1) return "";
        var result = "";
        while (qty > 0) {
            if (qty & 1) result += str;
            qty >>= 1, str += str;
        }
        return result;
    };
    var slice = [].slice;
    var defaultToWhiteSpace = function(characters) {
        if (characters == null) return "\\s"; else if (characters.source) return characters.source; else return "[" + _s.escapeRegExp(characters) + "]";
    };
    var escapeChars = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    };
    var reversedEscapeChars = {};
    for (var key in escapeChars) {
        reversedEscapeChars[escapeChars[key]] = key;
    }
    var sprintf = function() {
        function get_type(variable) {
            return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
        }
        var str_repeat = strRepeat;
        var str_format = function() {
            if (!str_format.cache.hasOwnProperty(arguments[0])) {
                str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
            }
            return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
        };
        str_format.format = function(parse_tree, argv) {
            var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length;
            for (i = 0; i < tree_length; i++) {
                node_type = get_type(parse_tree[i]);
                if (node_type === "string") {
                    output.push(parse_tree[i]);
                } else if (node_type === "array") {
                    match = parse_tree[i];
                    if (match[2]) {
                        arg = argv[cursor];
                        for (k = 0; k < match[2].length; k++) {
                            if (!arg.hasOwnProperty(match[2][k])) {
                                throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
                            }
                            arg = arg[match[2][k]];
                        }
                    } else if (match[1]) {
                        arg = argv[match[1]];
                    } else {
                        arg = argv[cursor++];
                    }
                    if (/[^s]/.test(match[8]) && get_type(arg) != "number") {
                        throw new Error(sprintf("[_.sprintf] expecting number but found %s", get_type(arg)));
                    }
                    switch (match[8]) {
                      case "b":
                        arg = arg.toString(2);
                        break;

                      case "c":
                        arg = String.fromCharCode(arg);
                        break;

                      case "d":
                        arg = parseInt(arg, 10);
                        break;

                      case "e":
                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                        break;

                      case "f":
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                        break;

                      case "o":
                        arg = arg.toString(8);
                        break;

                      case "s":
                        arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                        break;

                      case "u":
                        arg = Math.abs(arg);
                        break;

                      case "x":
                        arg = arg.toString(16);
                        break;

                      case "X":
                        arg = arg.toString(16).toUpperCase();
                        break;
                    }
                    arg = /[def]/.test(match[8]) && match[3] && arg >= 0 ? "+" + arg : arg;
                    pad_character = match[4] ? match[4] == "0" ? "0" : match[4].charAt(1) : " ";
                    pad_length = match[6] - String(arg).length;
                    pad = match[6] ? str_repeat(pad_character, pad_length) : "";
                    output.push(match[5] ? arg + pad : pad + arg);
                }
            }
            return output.join("");
        };
        str_format.cache = {};
        str_format.parse = function(fmt) {
            var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
            while (_fmt) {
                if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
                    parse_tree.push(match[0]);
                } else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
                    parse_tree.push("%");
                } else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                    if (match[2]) {
                        arg_names |= 1;
                        var field_list = [], replacement_field = match[2], field_match = [];
                        if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                            field_list.push(field_match[1]);
                            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                                if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                } else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                                    field_list.push(field_match[1]);
                                } else {
                                    throw new Error("[_.sprintf] huh?");
                                }
                            }
                        } else {
                            throw new Error("[_.sprintf] huh?");
                        }
                        match[2] = field_list;
                    } else {
                        arg_names |= 2;
                    }
                    if (arg_names === 3) {
                        throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    }
                    parse_tree.push(match);
                } else {
                    throw new Error("[_.sprintf] huh?");
                }
                _fmt = _fmt.substring(match[0].length);
            }
            return parse_tree;
        };
        return str_format;
    }();
    var _s = {
        VERSION: "2.2.0rc",
        isBlank: function(str) {
            if (str == null) str = "";
            return /^\s*$/.test(str);
        },
        stripTags: function(str) {
            if (str == null) return "";
            return String(str).replace(/<\/?[^>]+>/g, "");
        },
        capitalize: function(str) {
            str = str == null ? "" : String(str);
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        chop: function(str, step) {
            if (str == null) return [];
            str = String(str);
            step = ~~step;
            return step > 0 ? str.match(new RegExp(".{1," + step + "}", "g")) : [ str ];
        },
        clean: function(str) {
            return _s.strip(str).replace(/\s+/g, " ");
        },
        count: function(str, substr) {
            if (str == null || substr == null) return 0;
            return String(str).split(substr).length - 1;
        },
        chars: function(str) {
            if (str == null) return [];
            return String(str).split("");
        },
        swapCase: function(str) {
            if (str == null) return "";
            return String(str).replace(/\S/g, function(c) {
                return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
            });
        },
        escapeHTML: function(str) {
            if (str == null) return "";
            return String(str).replace(/[&<>"']/g, function(m) {
                return "&" + reversedEscapeChars[m] + ";";
            });
        },
        unescapeHTML: function(str) {
            if (str == null) return "";
            return String(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
                var match;
                if (entityCode in escapeChars) {
                    return escapeChars[entityCode];
                } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                    return String.fromCharCode(parseInt(match[1], 16));
                } else if (match = entityCode.match(/^#(\d+)$/)) {
                    return String.fromCharCode(~~match[1]);
                } else {
                    return entity;
                }
            });
        },
        escapeRegExp: function(str) {
            if (str == null) return "";
            return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        },
        splice: function(str, i, howmany, substr) {
            var arr = _s.chars(str);
            arr.splice(~~i, ~~howmany, substr);
            return arr.join("");
        },
        insert: function(str, i, substr) {
            return _s.splice(str, i, 0, substr);
        },
        include: function(str, needle) {
            if (needle === "") return true;
            if (str == null) return false;
            return String(str).indexOf(needle) !== -1;
        },
        join: function() {
            var args = slice.call(arguments), separator = args.shift();
            if (separator == null) separator = "";
            return args.join(separator);
        },
        lines: function(str) {
            if (str == null) return [];
            return String(str).split("\n");
        },
        reverse: function(str) {
            return _s.chars(str).reverse().join("");
        },
        startsWith: function(str, starts) {
            if (starts === "") return true;
            if (str == null || starts == null) return false;
            str = String(str);
            starts = String(starts);
            return str.length >= starts.length && str.slice(0, starts.length) === starts;
        },
        endsWith: function(str, ends) {
            if (ends === "") return true;
            if (str == null || ends == null) return false;
            str = String(str);
            ends = String(ends);
            return str.length >= ends.length && str.slice(str.length - ends.length) === ends;
        },
        succ: function(str) {
            if (str == null) return "";
            str = String(str);
            return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + 1);
        },
        titleize: function(str) {
            if (str == null) return "";
            return String(str).replace(/(?:^|\s)\S/g, function(c) {
                return c.toUpperCase();
            });
        },
        camelize: function(str) {
            return _s.trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
                return c.toUpperCase();
            });
        },
        underscored: function(str) {
            return _s.trim(str).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase();
        },
        dasherize: function(str) {
            return _s.trim(str).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase();
        },
        classify: function(str) {
            return _s.titleize(String(str).replace(/_/g, " ")).replace(/\s/g, "");
        },
        humanize: function(str) {
            return _s.capitalize(_s.underscored(str).replace(/_id$/, "").replace(/_/g, " "));
        },
        trim: function(str, characters) {
            if (str == null) return "";
            if (!characters && nativeTrim) return nativeTrim.call(str);
            characters = defaultToWhiteSpace(characters);
            return String(str).replace(new RegExp("^" + characters + "+|" + characters + "+$", "g"), "");
        },
        ltrim: function(str, characters) {
            if (str == null) return "";
            if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
            characters = defaultToWhiteSpace(characters);
            return String(str).replace(new RegExp("^" + characters + "+"), "");
        },
        rtrim: function(str, characters) {
            if (str == null) return "";
            if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
            characters = defaultToWhiteSpace(characters);
            return String(str).replace(new RegExp(characters + "+$"), "");
        },
        truncate: function(str, length, truncateStr) {
            if (str == null) return "";
            str = String(str);
            truncateStr = truncateStr || "...";
            length = ~~length;
            return str.length > length ? str.slice(0, length) + truncateStr : str;
        },
        prune: function(str, length, pruneStr) {
            if (str == null) return "";
            str = String(str);
            length = ~~length;
            pruneStr = pruneStr != null ? String(pruneStr) : "...";
            if (str.length <= length) return str;
            var tmpl = function(c) {
                return c.toUpperCase() !== c.toLowerCase() ? "A" : " ";
            }, template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
            if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, ""); else template = _s.rtrim(template.slice(0, template.length - 1));
            return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
        },
        words: function(str, delimiter) {
            if (_s.isBlank(str)) return [];
            return _s.trim(str, delimiter).split(delimiter || /\s+/);
        },
        pad: function(str, length, padStr, type) {
            str = str == null ? "" : String(str);
            length = ~~length;
            var padlen = 0;
            if (!padStr) padStr = " "; else if (padStr.length > 1) padStr = padStr.charAt(0);
            switch (type) {
              case "right":
                padlen = length - str.length;
                return str + strRepeat(padStr, padlen);

              case "both":
                padlen = length - str.length;
                return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));

              default:
                padlen = length - str.length;
                return strRepeat(padStr, padlen) + str;
            }
        },
        lpad: function(str, length, padStr) {
            return _s.pad(str, length, padStr);
        },
        rpad: function(str, length, padStr) {
            return _s.pad(str, length, padStr, "right");
        },
        lrpad: function(str, length, padStr) {
            return _s.pad(str, length, padStr, "both");
        },
        sprintf: sprintf,
        vsprintf: function(fmt, argv) {
            argv.unshift(fmt);
            return sprintf.apply(null, argv);
        },
        toNumber: function(str, decimals) {
            if (str == null || str == "") return 0;
            str = String(str);
            var num = parseNumber(parseNumber(str).toFixed(~~decimals));
            return num === 0 && !str.match(/^0+$/) ? Number.NaN : num;
        },
        numberFormat: function(number, dec, dsep, tsep) {
            if (isNaN(number) || number == null) return "";
            number = number.toFixed(~~dec);
            tsep = tsep || ",";
            var parts = number.split("."), fnums = parts[0], decimals = parts[1] ? (dsep || ".") + parts[1] : "";
            return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + tsep) + decimals;
        },
        strRight: function(str, sep) {
            if (str == null) return "";
            str = String(str);
            sep = sep != null ? String(sep) : sep;
            var pos = !sep ? -1 : str.indexOf(sep);
            return ~pos ? str.slice(pos + sep.length, str.length) : str;
        },
        strRightBack: function(str, sep) {
            if (str == null) return "";
            str = String(str);
            sep = sep != null ? String(sep) : sep;
            var pos = !sep ? -1 : str.lastIndexOf(sep);
            return ~pos ? str.slice(pos + sep.length, str.length) : str;
        },
        strLeft: function(str, sep) {
            if (str == null) return "";
            str = String(str);
            sep = sep != null ? String(sep) : sep;
            var pos = !sep ? -1 : str.indexOf(sep);
            return ~pos ? str.slice(0, pos) : str;
        },
        strLeftBack: function(str, sep) {
            if (str == null) return "";
            str += "";
            sep = sep != null ? "" + sep : sep;
            var pos = str.lastIndexOf(sep);
            return ~pos ? str.slice(0, pos) : str;
        },
        toSentence: function(array, separator, lastSeparator, serial) {
            separator = separator || ", ";
            lastSeparator = lastSeparator || " and ";
            var a = array.slice(), lastMember = a.pop();
            if (array.length > 2 && serial) lastSeparator = _s.rtrim(separator) + lastSeparator;
            return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
        },
        toSentenceSerial: function() {
            var args = slice.call(arguments);
            args[3] = true;
            return _s.toSentence.apply(_s, args);
        },
        slugify: function(str) {
            if (str == null) return "";
            var from = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź", to = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", regex = new RegExp(defaultToWhiteSpace(from), "g");
            str = String(str).toLowerCase().replace(regex, function(c) {
                var index = from.indexOf(c);
                return to.charAt(index) || "-";
            });
            return _s.dasherize(str.replace(/[^\w\s-]/g, ""));
        },
        surround: function(str, wrapper) {
            return [ wrapper, str, wrapper ].join("");
        },
        quote: function(str) {
            return _s.surround(str, '"');
        },
        exports: function() {
            var result = {};
            for (var prop in this) {
                if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse)$/)) continue;
                result[prop] = this[prop];
            }
            return result;
        },
        repeat: function(str, qty, separator) {
            if (str == null) return "";
            qty = ~~qty;
            if (separator == null) return strRepeat(String(str), qty);
            for (var repeat = []; qty > 0; repeat[--qty] = str) {}
            return repeat.join(separator);
        },
        levenshtein: function(str1, str2) {
            if (str1 == null && str2 == null) return 0;
            if (str1 == null) return String(str2).length;
            if (str2 == null) return String(str1).length;
            str1 = String(str1);
            str2 = String(str2);
            var current = [], prev, value;
            for (var i = 0; i <= str2.length; i++) for (var j = 0; j <= str1.length; j++) {
                if (i && j) if (str1.charAt(j - 1) === str2.charAt(i - 1)) value = prev; else value = Math.min(current[j], current[j - 1], prev) + 1; else value = i + j;
                prev = current[j];
                current[j] = value;
            }
            return current.pop();
        }
    };
    _s.strip = _s.trim;
    _s.lstrip = _s.ltrim;
    _s.rstrip = _s.rtrim;
    _s.center = _s.lrpad;
    _s.rjust = _s.lpad;
    _s.ljust = _s.rpad;
    _s.contains = _s.include;
    _s.q = _s.quote;
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = _s;
        }
        exports._s = _s;
    } else if (typeof define === "function" && define.amd) {
        define("underscore.string", [], function() {
            return _s;
        });
    } else {
        root._ = root._ || {};
        root._.string = root._.str = _s;
    }
}(this, String);

(function() {
    var root = this;
    var previousBackbone = root.Backbone;
    var ArrayProto = Array.prototype;
    var push = ArrayProto.push;
    var slice = ArrayProto.slice;
    var splice = ArrayProto.splice;
    var Backbone;
    if (typeof exports !== "undefined") {
        Backbone = exports;
    } else {
        Backbone = root.Backbone = {};
    }
    Backbone.VERSION = "0.9.2";
    var _ = root._;
    if (!_ && typeof require !== "undefined") _ = require("underscore");
    Backbone.$ = root.jQuery || root.Zepto || root.ender;
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var eventSplitter = /\s+/;
    var Events = Backbone.Events = {
        on: function(events, callback, context) {
            var calls, event, list;
            if (!callback) return this;
            events = events.split(eventSplitter);
            calls = this._callbacks || (this._callbacks = {});
            while (event = events.shift()) {
                list = calls[event] || (calls[event] = []);
                list.push(callback, context);
            }
            return this;
        },
        off: function(events, callback, context) {
            var event, calls, list, i;
            if (!(calls = this._callbacks)) return this;
            if (!(events || callback || context)) {
                delete this._callbacks;
                return this;
            }
            events = events ? events.split(eventSplitter) : _.keys(calls);
            while (event = events.shift()) {
                if (!(list = calls[event]) || !(callback || context)) {
                    delete calls[event];
                    continue;
                }
                for (i = list.length - 2; i >= 0; i -= 2) {
                    if (!(callback && list[i] !== callback || context && list[i + 1] !== context)) {
                        list.splice(i, 2);
                    }
                }
            }
            return this;
        },
        trigger: function(events) {
            var event, calls, list, i, length, args, all, rest;
            if (!(calls = this._callbacks)) return this;
            rest = [];
            events = events.split(eventSplitter);
            for (i = 1, length = arguments.length; i < length; i++) {
                rest[i - 1] = arguments[i];
            }
            while (event = events.shift()) {
                if (all = calls.all) all = all.slice();
                if (list = calls[event]) list = list.slice();
                if (list) {
                    for (i = 0, length = list.length; i < length; i += 2) {
                        list[i].apply(list[i + 1] || this, rest);
                    }
                }
                if (all) {
                    args = [ event ].concat(rest);
                    for (i = 0, length = all.length; i < length; i += 2) {
                        all[i].apply(all[i + 1] || this, args);
                    }
                }
            }
            return this;
        }
    };
    Events.bind = Events.on;
    Events.unbind = Events.off;
    var Model = Backbone.Model = function(attributes, options) {
        var defaults;
        var attrs = attributes || {};
        if (options && options.collection) this.collection = options.collection;
        if (options && options.parse) attrs = this.parse(attrs);
        if (defaults = _.result(this, "defaults")) {
            attrs = _.extend({}, defaults, attrs);
        }
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = _.uniqueId("c");
        this.changed = {};
        this._changes = {};
        this._pending = {};
        this.set(attrs, {
            silent: true
        });
        this.changed = {};
        this._changes = {};
        this._pending = {};
        this._previousAttributes = _.clone(this.attributes);
        this.initialize.apply(this, arguments);
    };
    _.extend(Model.prototype, Events, {
        changed: null,
        _changes: null,
        _pending: null,
        _changing: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(options) {
            return _.clone(this.attributes);
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },
        get: function(attr) {
            return this.attributes[attr];
        },
        escape: function(attr) {
            var html;
            if (html = this._escapedAttributes[attr]) return html;
            var val = this.get(attr);
            return this._escapedAttributes[attr] = _.escape(val == null ? "" : "" + val);
        },
        has: function(attr) {
            return this.get(attr) != null;
        },
        set: function(attrs, options) {
            var attr, key, val;
            if (attrs == null) return this;
            if (!_.isObject(attrs)) {
                key = attrs;
                (attrs = {})[key] = options;
                options = arguments[2];
            }
            var silent = options && options.silent;
            var unset = options && options.unset;
            if (attrs instanceof Model) attrs = attrs.attributes;
            if (unset) for (attr in attrs) attrs[attr] = void 0;
            if (!this._validate(attrs, options)) return false;
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
            var changing = this._changing;
            var now = this.attributes;
            var escaped = this._escapedAttributes;
            var prev = this._previousAttributes || {};
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(now[attr], val) || unset && _.has(now, attr)) {
                    delete escaped[attr];
                    this._changes[attr] = true;
                }
                unset ? delete now[attr] : now[attr] = val;
                if (!_.isEqual(prev[attr], val) || _.has(now, attr) !== _.has(prev, attr)) {
                    this.changed[attr] = val;
                    if (!silent) this._pending[attr] = true;
                } else {
                    delete this.changed[attr];
                    delete this._pending[attr];
                    if (!changing) delete this._changes[attr];
                }
                if (changing && _.isEqual(now[attr], changing[attr])) delete this._changes[attr];
            }
            if (!silent) this.change(options);
            return this;
        },
        unset: function(attr, options) {
            options = _.extend({}, options, {
                unset: true
            });
            return this.set(attr, null, options);
        },
        clear: function(options) {
            options = _.extend({}, options, {
                unset: true
            });
            return this.set(_.clone(this.attributes), options);
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) return false;
                if (success) success(model, resp, options);
            };
            return this.sync("read", this, options);
        },
        save: function(attrs, options) {
            var key, current, done;
            if (attrs != null && !_.isObject(attrs)) {
                key = attrs;
                (attrs = {})[key] = options;
                options = arguments[2];
            }
            options = options ? _.clone(options) : {};
            if (options.wait) {
                if (!this._validate(attrs, options)) return false;
                current = _.clone(this.attributes);
            }
            var silentOptions = _.extend({}, options, {
                silent: true
            });
            if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
                return false;
            }
            if (!attrs && !this._validate(null, options)) return false;
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                done = true;
                var serverAttrs = model.parse(resp, xhr);
                if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (!model.set(serverAttrs, options)) return false;
                if (success) success(model, resp, options);
            };
            var xhr = this.sync(this.isNew() ? "create" : "update", this, options);
            if (!done && options.wait) {
                this.clear(silentOptions);
                this.set(current, silentOptions);
            }
            return xhr;
        },
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var destroy = function() {
                model.trigger("destroy", model, model.collection, options);
            };
            options.success = function(resp) {
                if (options.wait || model.isNew()) destroy();
                if (success) success(model, resp, options);
            };
            if (this.isNew()) {
                options.success();
                return false;
            }
            var xhr = this.sync("delete", this, options);
            if (!options.wait) destroy();
            return xhr;
        },
        url: function() {
            var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(resp, xhr) {
            return resp;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return this.id == null;
        },
        change: function(options) {
            var changing = this._changing;
            var current = this._changing = {};
            for (var attr in this._changes) this._pending[attr] = true;
            var changes = this._changes;
            this._changes = {};
            var triggers = [];
            for (var attr in changes) {
                current[attr] = this.get(attr);
                triggers.push(attr);
            }
            for (var i = 0, l = triggers.length; i < l; i++) {
                this.trigger("change:" + triggers[i], this, current[triggers[i]], options);
            }
            if (changing) return this;
            while (!_.isEmpty(this._pending)) {
                this._pending = {};
                this.trigger("change", this, options);
                for (var attr in this.changed) {
                    if (this._pending[attr] || this._changes[attr]) continue;
                    delete this.changed[attr];
                }
                this._previousAttributes = _.clone(this.attributes);
            }
            this._changing = null;
            return this;
        },
        hasChanged: function(attr) {
            if (attr == null) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false, old = this._previousAttributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], val = diff[attr])) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },
        previous: function(attr) {
            if (attr == null || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },
        isValid: function(options) {
            return !this.validate || !this.validate(this.attributes, options);
        },
        _validate: function(attrs, options) {
            if (options && options.silent || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validate(attrs, options);
            if (!error) return true;
            if (options && options.error) options.error(this, error, options);
            this.trigger("error", this, error, options);
            return false;
        }
    });
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator !== void 0) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) {
            if (options.parse) models = this.parse(models);
            this.reset(models, {
                silent: true,
                parse: options.parse
            });
        }
    };
    _.extend(Collection.prototype, Events, {
        model: Model,
        initialize: function() {},
        toJSON: function(options) {
            return this.map(function(model) {
                return model.toJSON(options);
            });
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments);
        },
        add: function(models, options) {
            var i, args, length, model, existing;
            var at = options && options.at;
            models = _.isArray(models) ? models.slice() : [ models ];
            for (i = 0, length = models.length; i < length; i++) {
                if (models[i] = this._prepareModel(models[i], options)) continue;
                throw new Error("Can't add an invalid model to a collection");
            }
            for (i = models.length - 1; i >= 0; i--) {
                model = models[i];
                existing = model.id != null && this._byId[model.id];
                if (existing || this._byCid[model.cid]) {
                    if (options && options.merge && existing) {
                        existing.set(model, options);
                    }
                    models.splice(i, 1);
                    continue;
                }
                model.on("all", this._onModelEvent, this);
                this._byCid[model.cid] = model;
                if (model.id != null) this._byId[model.id] = model;
            }
            this.length += models.length;
            args = [ at != null ? at : this.models.length, 0 ];
            push.apply(args, models);
            splice.apply(this.models, args);
            if (this.comparator && at == null) this.sort({
                silent: true
            });
            if (options && options.silent) return this;
            while (model = models.shift()) {
                model.trigger("add", model, this, options);
            }
            return this;
        },
        remove: function(models, options) {
            var i, l, index, model;
            options || (options = {});
            models = _.isArray(models) ? models.slice() : [ models ];
            for (i = 0, l = models.length; i < l; i++) {
                model = this.getByCid(models[i]) || this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byCid[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger("remove", model, this, options);
                }
                this._removeReference(model);
            }
            return this;
        },
        push: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, options);
            return model;
        },
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },
        unshift: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, _.extend({
                at: 0
            }, options));
            return model;
        },
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },
        slice: function(begin, end) {
            return this.models.slice(begin, end);
        },
        get: function(id) {
            if (id == null) return void 0;
            return this._byId[id.id != null ? id.id : id];
        },
        getByCid: function(cid) {
            return cid && this._byCid[cid.cid || cid];
        },
        at: function(index) {
            return this.models[index];
        },
        where: function(attrs) {
            if (_.isEmpty(attrs)) return [];
            return this.filter(function(model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },
        sort: function(options) {
            if (!this.comparator) {
                throw new Error("Cannot sort a set without a comparator");
            }
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }
            if (!options || !options.silent) this.trigger("reset", this, options);
            return this;
        },
        pluck: function(attr) {
            return _.invoke(this.models, "get", attr);
        },
        reset: function(models, options) {
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i]);
            }
            this._reset();
            if (models) this.add(models, _.extend({
                silent: true
            }, options));
            if (!options || !options.silent) this.trigger("reset", this, options);
            return this;
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0) options.parse = true;
            var collection = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                collection[options.add ? "add" : "reset"](collection.parse(resp, xhr), options);
                if (success) success(collection, resp, options);
            };
            return this.sync("read", this, options);
        },
        create: function(model, options) {
            var collection = this;
            options = options ? _.clone(options) : {};
            model = this._prepareModel(model, options);
            if (!model) return false;
            if (!options.wait) collection.add(model, options);
            var success = options.success;
            options.success = function(model, resp, options) {
                if (options.wait) collection.add(model, options);
                if (success) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },
        parse: function(resp, xhr) {
            return resp;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        chain: function() {
            return _(this.models).chain();
        },
        _reset: function(options) {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {};
        },
        _prepareModel: function(attrs, options) {
            if (attrs instanceof Model) {
                if (!attrs.collection) attrs.collection = this;
                return attrs;
            }
            options || (options = {});
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model._validate(model.attributes, options)) return false;
            return model;
        },
        _removeReference: function(model) {
            if (this === model.collection) delete model.collection;
            model.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(event, model, collection, options) {
            if ((event === "add" || event === "remove") && collection !== this) return;
            if (event === "destroy") this.remove(model, options);
            if (model && event === "change:" + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                if (model.id != null) this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }
    });
    var methods = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortedIndex", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty" ];
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });
    var attributeMethods = [ "groupBy", "countBy", "sortBy" ];
    _.each(attributeMethods, function(method) {
        Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[-{}[\]+?.,\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
        initialize: function() {},
        route: function(route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (!callback) callback = this[name];
            Backbone.history.route(route, _.bind(function(fragment) {
                var args = this._extractParameters(route, fragment);
                callback && callback.apply(this, args);
                this.trigger.apply(this, [ "route:" + name ].concat(args));
                Backbone.history.trigger("route", this, name, args);
            }, this));
            return this;
        },
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                var name = this.routes[route];
                this.route(route, name, this[name]);
            }
        },
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, "([^/]+)").replace(splatParam, "(.*?)");
            return new RegExp("^" + route + "$");
        },
        _extractParameters: function(route, fragment) {
            return route.exec(fragment).slice(1);
        }
    });
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history;
        }
    };
    var routeStripper = /^[#\/]/;
    var rootStripper = /^\/+|\/+$/g;
    var isExplorer = /msie [\w.]+/;
    var trailingSlash = /\/$/;
    History.started = false;
    _.extend(History.prototype, Events, {
        interval: 50,
        getHash: function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : "";
        },
        getFragment: function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = this.location.pathname;
                    var root = this.root.replace(trailingSlash, "");
                    if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return decodeURIComponent(fragment.replace(routeStripper, ""));
        },
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;
            this.options = _.extend({}, {
                root: "/"
            }, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment();
            var docMode = document.documentMode;
            var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
            this.root = ("/" + this.root + "/").replace(rootStripper, "/");
            if (oldIE && this._wantsHashChange) {
                this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(fragment);
            }
            if (this._hasPushState) {
                Backbone.$(window).bind("popstate", this.checkUrl);
            } else if (this._wantsHashChange && "onhashchange" in window && !oldIE) {
                Backbone.$(window).bind("hashchange", this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }
            this.fragment = fragment;
            var loc = this.location;
            var atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                this.fragment = this.getFragment(null, true);
                this.location.replace(this.root + this.location.search + "#" + this.fragment);
                return true;
            } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                this.fragment = this.getHash().replace(routeStripper, "");
                this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
            }
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            Backbone.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },
        route: function(route, callback) {
            this.handlers.unshift({
                route: route,
                callback: callback
            });
        },
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if (current === this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function(fragmentOverride) {
            var fragment = this.fragment = this.getFragment(fragmentOverride);
            var matched = _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
            return matched;
        },
        navigate: function(fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {
                trigger: options
            };
            fragment = this.getFragment(fragment || "");
            if (this.fragment === fragment) return;
            this.fragment = fragment;
            var url = this.root + fragment;
            if (this._hasPushState) {
                this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                    if (!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }
            } else {
                return this.location.assign(url);
            }
            if (options.trigger) this.loadUrl(fragment);
        },
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, "");
                location.replace(href + "#" + fragment);
            } else {
                location.hash = "#" + fragment;
            }
        }
    });
    Backbone.history = new History();
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId("view");
        this._configure(options || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
    _.extend(View.prototype, Events, {
        tagName: "div",
        $: function(selector) {
            return this.$el.find(selector);
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
        make: function(tagName, attributes, content) {
            var el = document.createElement(tagName);
            if (attributes) Backbone.$(el).attr(attributes);
            if (content != null) Backbone.$(el).html(content);
            return el;
        },
        setElement: function(element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },
        delegateEvents: function(events) {
            if (!(events || (events = _.result(this, "events")))) return;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += ".delegateEvents" + this.cid;
                if (selector === "") {
                    this.$el.bind(eventName, method);
                } else {
                    this.$el.delegate(selector, eventName, method);
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid);
        },
        _configure: function(options) {
            if (this.options) options = _.extend({}, this.options, options);
            for (var i = 0, l = viewOptions.length; i < l; i++) {
                var attr = viewOptions[i];
                if (options[attr]) this[attr] = options[attr];
            }
            this.options = options;
        },
        _ensureElement: function() {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, "attributes"));
                if (this.id) attrs.id = _.result(this, "id");
                if (this.className) attrs["class"] = _.result(this, "className");
                this.setElement(this.make(_.result(this, "tagName"), attrs), false);
            } else {
                this.setElement(_.result(this, "el"), false);
            }
        }
    });
    var methodMap = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];
        options || (options = {});
        var params = {
            type: type,
            dataType: "json"
        };
        if (!options.url) {
            params.url = _.result(model, "url") || urlError();
        }
        if (!options.data && model && (method === "create" || method === "update")) {
            params.contentType = "application/json";
            params.data = JSON.stringify(model);
        }
        if (Backbone.emulateJSON) {
            params.contentType = "application/x-www-form-urlencoded";
            params.data = params.data ? {
                model: params.data
            } : {};
        }
        if (Backbone.emulateHTTP && (type === "PUT" || type === "DELETE")) {
            params.type = "POST";
            if (Backbone.emulateJSON) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader("X-HTTP-Method-Override", type);
                if (beforeSend) return beforeSend.apply(this, arguments);
            };
        }
        if (params.type !== "GET" && !Backbone.emulateJSON) {
            params.processData = false;
        }
        var success = options.success;
        options.success = function(resp, status, xhr) {
            if (success) success(resp, status, xhr);
            model.trigger("sync", model, resp, options);
        };
        var error = options.error;
        options.error = function(xhr, status, thrown) {
            if (error) error(model, xhr, options);
            model.trigger("error", model, xhr, options);
        };
        return Backbone.ajax(_.extend(params, options));
    };
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;
        if (protoProps && _.has(protoProps, "constructor")) {
            child = protoProps.constructor;
        } else {
            child = function() {
                parent.apply(this, arguments);
            };
        }
        _.extend(child, parent, staticProps);
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        if (protoProps) _.extend(child.prototype, protoProps);
        child.__super__ = parent.prototype;
        return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };
}).call(this);

!function($) {
    $(function() {
        "use strict";
        $.support.transition = function() {
            var transitionEnd = function() {
                var el = document.createElement("bootstrap"), transEndEventNames = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, name;
                for (name in transEndEventNames) {
                    if (el.style[name] !== undefined) {
                        return transEndEventNames[name];
                    }
                }
            }();
            return transitionEnd && {
                end: transitionEnd
            };
        }();
    });
}(window.jQuery);

!function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]', Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.prototype.close = function(e) {
        var $this = $(this), selector = $this.attr("data-target"), $parent;
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        $parent = $(selector);
        e && e.preventDefault();
        $parent.length || ($parent = $this.hasClass("alert") ? $this : $this.parent());
        $parent.trigger(e = $.Event("close"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            $parent.trigger("closed").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.on($.support.transition.end, removeElement) : removeElement();
    };
    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("alert");
            if (!data) $this.data("alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    };
    $.fn.alert.Constructor = Alert;
    $(function() {
        $("body").on("click.alert.data-api", dismiss, Alert.prototype.close);
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.button.defaults, options);
    };
    Button.prototype.setState = function(state) {
        var d = "disabled", $el = this.$element, data = $el.data(), val = $el.is("input") ? "val" : "html";
        state = state + "Text";
        data.resetText || $el.data("resetText", $el[val]());
        $el[val](data[state] || this.options[state]);
        setTimeout(function() {
            state == "loadingText" ? $el.addClass(d).attr(d, d) : $el.removeClass(d).removeAttr(d);
        }, 0);
    };
    Button.prototype.toggle = function() {
        var $parent = this.$element.closest('[data-toggle="buttons-radio"]');
        $parent && $parent.find(".active").removeClass("active");
        this.$element.toggleClass("active");
    };
    $.fn.button = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("button"), options = typeof option == "object" && option;
            if (!data) $this.data("button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    };
    $.fn.button.defaults = {
        loadingText: "loading..."
    };
    $.fn.button.Constructor = Button;
    $(function() {
        $("body").on("click.button.data-api", "[data-toggle^=button]", function(e) {
            var $btn = $(e.target);
            if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
            $btn.button("toggle");
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element);
        this.options = options;
        this.options.slide && this.slide(this.options.slide);
        this.options.pause == "hover" && this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this));
    };
    Carousel.prototype = {
        cycle: function(e) {
            if (!e) this.paused = false;
            this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
            return this;
        },
        to: function(pos) {
            var $active = this.$element.find(".item.active"), children = $active.parent().children(), activePos = children.index($active), that = this;
            if (pos > children.length - 1 || pos < 0) return;
            if (this.sliding) {
                return this.$element.one("slid", function() {
                    that.to(pos);
                });
            }
            if (activePos == pos) {
                return this.pause().cycle();
            }
            return this.slide(pos > activePos ? "next" : "prev", $(children[pos]));
        },
        pause: function(e) {
            if (!e) this.paused = true;
            if (this.$element.find(".next, .prev").length && $.support.transition.end) {
                this.$element.trigger($.support.transition.end);
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
        slide: function(type, next) {
            var $active = this.$element.find(".item.active"), $next = next || $active[type](), isCycling = this.interval, direction = type == "next" ? "left" : "right", fallback = type == "next" ? "first" : "last", that = this, e = $.Event("slide", {
                relatedTarget: $next[0]
            });
            this.sliding = true;
            isCycling && this.pause();
            $next = $next.length ? $next : this.$element.find(".item")[fallback]();
            if ($next.hasClass("active")) return;
            if ($.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(e);
                if (e.isDefaultPrevented()) return;
                $next.addClass(type);
                $next[0].offsetWidth;
                $active.addClass(direction);
                $next.addClass(direction);
                this.$element.one($.support.transition.end, function() {
                    $next.removeClass([ type, direction ].join(" ")).addClass("active");
                    $active.removeClass([ "active", direction ].join(" "));
                    that.sliding = false;
                    setTimeout(function() {
                        that.$element.trigger("slid");
                    }, 0);
                });
            } else {
                this.$element.trigger(e);
                if (e.isDefaultPrevented()) return;
                $active.removeClass("active");
                $next.addClass("active");
                this.sliding = false;
                this.$element.trigger("slid");
            }
            isCycling && this.cycle();
            return this;
        }
    };
    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("carousel"), options = $.extend({}, $.fn.carousel.defaults, typeof option == "object" && option), action = typeof option == "string" ? option : options.slide;
            if (!data) $this.data("carousel", data = new Carousel(this, options));
            if (typeof option == "number") data.to(option); else if (action) data[action](); else if (options.interval) data.cycle();
        });
    };
    $.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    };
    $.fn.carousel.Constructor = Carousel;
    $(function() {
        $("body").on("click.carousel.data-api", "[data-slide]", function(e) {
            var $this = $(this), href, $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")), options = !$target.data("modal") && $.extend({}, $target.data(), $this.data());
            $target.carousel(options);
            e.preventDefault();
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.collapse.defaults, options);
        if (this.options.parent) {
            this.$parent = $(this.options.parent);
        }
        this.options.toggle && this.toggle();
    };
    Collapse.prototype = {
        constructor: Collapse,
        dimension: function() {
            var hasWidth = this.$element.hasClass("width");
            return hasWidth ? "width" : "height";
        },
        show: function() {
            var dimension, scroll, actives, hasData;
            if (this.transitioning) return;
            dimension = this.dimension();
            scroll = $.camelCase([ "scroll", dimension ].join("-"));
            actives = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (actives && actives.length) {
                hasData = actives.data("collapse");
                if (hasData && hasData.transitioning) return;
                actives.collapse("hide");
                hasData || actives.data("collapse", null);
            }
            this.$element[dimension](0);
            this.transition("addClass", $.Event("show"), "shown");
            $.support.transition && this.$element[dimension](this.$element[0][scroll]);
        },
        hide: function() {
            var dimension;
            if (this.transitioning) return;
            dimension = this.dimension();
            this.reset(this.$element[dimension]());
            this.transition("removeClass", $.Event("hide"), "hidden");
            this.$element[dimension](0);
        },
        reset: function(size) {
            var dimension = this.dimension();
            this.$element.removeClass("collapse")[dimension](size || "auto")[0].offsetWidth;
            this.$element[size !== null ? "addClass" : "removeClass"]("collapse");
            return this;
        },
        transition: function(method, startEvent, completeEvent) {
            var that = this, complete = function() {
                if (startEvent.type == "show") that.reset();
                that.transitioning = 0;
                that.$element.trigger(completeEvent);
            };
            this.$element.trigger(startEvent);
            if (startEvent.isDefaultPrevented()) return;
            this.transitioning = 1;
            this.$element[method]("in");
            $.support.transition && this.$element.hasClass("collapse") ? this.$element.one($.support.transition.end, complete) : complete();
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
        }
    };
    $.fn.collapse = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("collapse"), options = typeof option == "object" && option;
            if (!data) $this.data("collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.collapse.defaults = {
        toggle: true
    };
    $.fn.collapse.Constructor = Collapse;
    $(function() {
        $("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
            var $this = $(this), href, target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""), option = $(target).data("collapse") ? "toggle" : $this.data();
            $this[$(target).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
            $(target).collapse(option);
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var toggle = "[data-toggle=dropdown]", Dropdown = function(element) {
        var $el = $(element).on("click.dropdown.data-api", this.toggle);
        $("html").on("click.dropdown.data-api", function() {
            $el.parent().removeClass("open");
        });
    };
    Dropdown.prototype = {
        constructor: Dropdown,
        toggle: function(e) {
            var $this = $(this), $parent, isActive;
            if ($this.is(".disabled, :disabled")) return;
            $parent = getParent($this);
            isActive = $parent.hasClass("open");
            clearMenus();
            if (!isActive) {
                $parent.toggleClass("open");
                $this.focus();
            }
            return false;
        },
        keydown: function(e) {
            var $this, $items, $active, $parent, isActive, index;
            if (!/(38|40|27)/.test(e.keyCode)) return;
            $this = $(this);
            e.preventDefault();
            e.stopPropagation();
            if ($this.is(".disabled, :disabled")) return;
            $parent = getParent($this);
            isActive = $parent.hasClass("open");
            if (!isActive || isActive && e.keyCode == 27) return $this.click();
            $items = $("[role=menu] li:not(.divider) a", $parent);
            if (!$items.length) return;
            index = $items.index($items.filter(":focus"));
            if (e.keyCode == 38 && index > 0) index--;
            if (e.keyCode == 40 && index < $items.length - 1) index++;
            if (!~index) index = 0;
            $items.eq(index).focus();
        }
    };
    function clearMenus() {
        getParent($(toggle)).removeClass("open");
    }
    function getParent($this) {
        var selector = $this.attr("data-target"), $parent;
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        $parent = $(selector);
        $parent.length || ($parent = $this.parent());
        return $parent;
    }
    $.fn.dropdown = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("dropdown");
            if (!data) $this.data("dropdown", data = new Dropdown(this));
            if (typeof option == "string") data[option].call($this);
        });
    };
    $.fn.dropdown.Constructor = Dropdown;
    $(function() {
        $("html").on("click.dropdown.data-api touchstart.dropdown.data-api", clearMenus);
        $("body").on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation();
        }).on("click.dropdown.data-api touchstart.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", toggle + ", [role=menu]", Dropdown.prototype.keydown);
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options;
        this.$element = $(element).delegate('[data-dismiss="modal"]', "click.dismiss.modal", $.proxy(this.hide, this));
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    Modal.prototype = {
        constructor: Modal,
        toggle: function() {
            return this[!this.isShown ? "show" : "hide"]();
        },
        show: function() {
            var that = this, e = $.Event("show");
            this.$element.trigger(e);
            if (this.isShown || e.isDefaultPrevented()) return;
            $("body").addClass("modal-open");
            this.isShown = true;
            this.escape();
            this.backdrop(function() {
                var transition = $.support.transition && that.$element.hasClass("fade");
                if (!that.$element.parent().length) {
                    that.$element.appendTo(document.body);
                }
                that.$element.show();
                if (transition) {
                    that.$element[0].offsetWidth;
                }
                that.$element.addClass("in").attr("aria-hidden", false).focus();
                that.enforceFocus();
                transition ? that.$element.one($.support.transition.end, function() {
                    that.$element.trigger("shown");
                }) : that.$element.trigger("shown");
            });
        },
        hide: function(e) {
            e && e.preventDefault();
            var that = this;
            e = $.Event("hide");
            this.$element.trigger(e);
            if (!this.isShown || e.isDefaultPrevented()) return;
            this.isShown = false;
            $("body").removeClass("modal-open");
            this.escape();
            $(document).off("focusin.modal");
            this.$element.removeClass("in").attr("aria-hidden", true);
            $.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal();
        },
        enforceFocus: function() {
            var that = this;
            $(document).on("focusin.modal", function(e) {
                if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
                    that.$element.focus();
                }
            });
        },
        escape: function() {
            var that = this;
            if (this.isShown && this.options.keyboard) {
                this.$element.on("keyup.dismiss.modal", function(e) {
                    e.which == 27 && that.hide();
                });
            } else if (!this.isShown) {
                this.$element.off("keyup.dismiss.modal");
            }
        },
        hideWithTransition: function() {
            var that = this, timeout = setTimeout(function() {
                that.$element.off($.support.transition.end);
                that.hideModal();
            }, 500);
            this.$element.one($.support.transition.end, function() {
                clearTimeout(timeout);
                that.hideModal();
            });
        },
        hideModal: function(that) {
            this.$element.hide().trigger("hidden");
            this.backdrop();
        },
        removeBackdrop: function() {
            this.$backdrop.remove();
            this.$backdrop = null;
        },
        backdrop: function(callback) {
            var that = this, animate = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate;
                this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
                if (this.options.backdrop != "static") {
                    this.$backdrop.click($.proxy(this.hide, this));
                }
                if (doAnimate) this.$backdrop[0].offsetWidth;
                this.$backdrop.addClass("in");
                doAnimate ? this.$backdrop.one($.support.transition.end, callback) : callback();
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) : this.removeBackdrop();
            } else if (callback) {
                callback();
            }
        }
    };
    $.fn.modal = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("modal"), options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == "object" && option);
            if (!data) $this.data("modal", data = new Modal(this, options));
            if (typeof option == "string") data[option](); else if (options.show) data.show();
        });
    };
    $.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    $.fn.modal.Constructor = Modal;
    $(function() {
        $("body").on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
            var $this = $(this), href = $this.attr("href"), $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")), option = $target.data("modal") ? "toggle" : $.extend({
                remote: !/#/.test(href) && href
            }, $target.data(), $this.data());
            e.preventDefault();
            $target.modal(option).one("hide", function() {
                $this.focus();
            });
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Tooltip = function(element, options) {
        this.init("tooltip", element, options);
    };
    Tooltip.prototype = {
        constructor: Tooltip,
        init: function(type, element, options) {
            var eventIn, eventOut;
            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.enabled = true;
            if (this.options.trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (this.options.trigger != "manual") {
                eventIn = this.options.trigger == "hover" ? "mouseenter" : "focus";
                eventOut = this.options.trigger == "hover" ? "mouseleave" : "blur";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
            this.options.selector ? this._options = $.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle();
        },
        getOptions: function(options) {
            options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data());
            if (options.delay && typeof options.delay == "number") {
                options.delay = {
                    show: options.delay,
                    hide: options.delay
                };
            }
            return options;
        },
        enter: function(e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);
            if (!self.options.delay || !self.options.delay.show) return self.show();
            clearTimeout(this.timeout);
            self.hoverState = "in";
            this.timeout = setTimeout(function() {
                if (self.hoverState == "in") self.show();
            }, self.options.delay.show);
        },
        leave: function(e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type);
            if (this.timeout) clearTimeout(this.timeout);
            if (!self.options.delay || !self.options.delay.hide) return self.hide();
            self.hoverState = "out";
            this.timeout = setTimeout(function() {
                if (self.hoverState == "out") self.hide();
            }, self.options.delay.hide);
        },
        show: function() {
            var $tip, inside, pos, actualWidth, actualHeight, placement, tp;
            if (this.hasContent() && this.enabled) {
                $tip = this.tip();
                this.setContent();
                if (this.options.animation) {
                    $tip.addClass("fade");
                }
                placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
                inside = /in/.test(placement);
                $tip.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(inside ? this.$element : document.body);
                pos = this.getPosition(inside);
                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight;
                switch (inside ? placement.split(" ")[1] : placement) {
                  case "bottom":
                    tp = {
                        top: pos.top + pos.height,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;

                  case "top":
                    tp = {
                        top: pos.top - actualHeight,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    };
                    break;

                  case "left":
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left - actualWidth
                    };
                    break;

                  case "right":
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left + pos.width
                    };
                    break;
                }
                $tip.css(tp).addClass(placement).addClass("in");
            }
        },
        setContent: function() {
            var $tip = this.tip(), title = this.getTitle();
            $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
            $tip.removeClass("fade in top bottom left right");
        },
        hide: function() {
            var that = this, $tip = this.tip();
            $tip.removeClass("in");
            function removeWithAnimation() {
                var timeout = setTimeout(function() {
                    $tip.off($.support.transition.end).remove();
                }, 500);
                $tip.one($.support.transition.end, function() {
                    clearTimeout(timeout);
                    $tip.remove();
                });
            }
            $.support.transition && this.$tip.hasClass("fade") ? removeWithAnimation() : $tip.remove();
            return this;
        },
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
                $e.attr("data-original-title", $e.attr("title") || "").removeAttr("title");
            }
        },
        hasContent: function() {
            return this.getTitle();
        },
        getPosition: function(inside) {
            return $.extend({}, inside ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            });
        },
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
            return title;
        },
        tip: function() {
            return this.$tip = this.$tip || $(this.options.template);
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
    $.fn.tooltip = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("tooltip"), options = typeof option == "object" && option;
            if (!data) $this.data("tooltip", data = new Tooltip(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.defaults = {
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

!function($) {
    "use strict";
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
        constructor: Popover,
        setContent: function() {
            var $tip = this.tip(), title = this.getTitle(), content = this.getContent();
            $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
            $tip.find(".popover-content > *")[this.options.html ? "html" : "text"](content);
            $tip.removeClass("fade top bottom left right in");
        },
        hasContent: function() {
            return this.getTitle() || this.getContent();
        },
        getContent: function() {
            var content, $e = this.$element, o = this.options;
            content = $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
            return content;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = $(this.options.template);
            }
            return this.$tip;
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type);
        }
    });
    $.fn.popover = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("popover"), options = typeof option == "object" && option;
            if (!data) $this.data("popover", data = new Popover(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.popover.Constructor = Popover;
    $.fn.popover.defaults = $.extend({}, $.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    });
}(window.jQuery);

!function($) {
    "use strict";
    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this), $element = $(element).is("body") ? $(window) : $(element), href;
        this.options = $.extend({}, $.fn.scrollspy.defaults, options);
        this.$scrollElement = $element.on("scroll.scroll-spy.data-api", process);
        this.selector = (this.options.target || (href = $(element).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.$body = $("body");
        this.refresh();
        this.process();
    }
    ScrollSpy.prototype = {
        constructor: ScrollSpy,
        refresh: function() {
            var self = this, $targets;
            this.offsets = $([]);
            this.targets = $([]);
            $targets = this.$body.find(this.selector).map(function() {
                var $el = $(this), href = $el.data("target") || $el.attr("href"), $href = /^#\w/.test(href) && $(href);
                return $href && $href.length && [ [ $href.position().top, href ] ] || null;
            }).sort(function(a, b) {
                return a[0] - b[0];
            }).each(function() {
                self.offsets.push(this[0]);
                self.targets.push(this[1]);
            });
        },
        process: function() {
            var scrollTop = this.$scrollElement.scrollTop() + this.options.offset, scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, maxScroll = scrollHeight - this.$scrollElement.height(), offsets = this.offsets, targets = this.targets, activeTarget = this.activeTarget, i;
            if (scrollTop >= maxScroll) {
                return activeTarget != (i = targets.last()[0]) && this.activate(i);
            }
            for (i = offsets.length; i--; ) {
                activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
            }
        },
        activate: function(target) {
            var active, selector;
            this.activeTarget = target;
            $(this.selector).parent(".active").removeClass("active");
            selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
            active = $(selector).parent("li").addClass("active");
            if (active.parent(".dropdown-menu").length) {
                active = active.closest("li.dropdown").addClass("active");
            }
            active.trigger("activate");
        }
    };
    $.fn.scrollspy = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("scrollspy"), options = typeof option == "object" && option;
            if (!data) $this.data("scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.scrollspy.Constructor = ScrollSpy;
    $.fn.scrollspy.defaults = {
        offset: 10
    };
    $(window).on("load", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            $spy.scrollspy($spy.data());
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.prototype = {
        constructor: Tab,
        show: function() {
            var $this = this.element, $ul = $this.closest("ul:not(.dropdown-menu)"), selector = $this.attr("data-target"), previous, $target, e;
            if (!selector) {
                selector = $this.attr("href");
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
            }
            if ($this.parent("li").hasClass("active")) return;
            previous = $ul.find(".active a").last()[0];
            e = $.Event("show", {
                relatedTarget: previous
            });
            $this.trigger(e);
            if (e.isDefaultPrevented()) return;
            $target = $(selector);
            this.activate($this.parent("li"), $ul);
            this.activate($target, $target.parent(), function() {
                $this.trigger({
                    type: "shown",
                    relatedTarget: previous
                });
            });
        },
        activate: function(element, container, callback) {
            var $active = container.find("> .active"), transition = callback && $.support.transition && $active.hasClass("fade");
            function next() {
                $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
                element.addClass("active");
                if (transition) {
                    element[0].offsetWidth;
                    element.addClass("in");
                } else {
                    element.removeClass("fade");
                }
                if (element.parent(".dropdown-menu")) {
                    element.closest("li.dropdown").addClass("active");
                }
                callback && callback();
            }
            transition ? $active.one($.support.transition.end, next) : next();
            $active.removeClass("in");
        }
    };
    $.fn.tab = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("tab");
            if (!data) $this.data("tab", data = new Tab(this));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.tab.Constructor = Tab;
    $(function() {
        $("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
            e.preventDefault();
            $(this).tab("show");
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Typeahead = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.typeahead.defaults, options);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.updater = this.options.updater || this.updater;
        this.$menu = $(this.options.menu).appendTo("body");
        this.source = this.options.source;
        this.shown = false;
        this.listen();
    };
    Typeahead.prototype = {
        constructor: Typeahead,
        select: function() {
            var val = this.$menu.find(".active").attr("data-value");
            this.$element.val(this.updater(val)).change();
            return this.hide();
        },
        updater: function(item) {
            return item;
        },
        show: function() {
            var pos = $.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            this.$menu.css({
                top: pos.top + pos.height,
                left: pos.left
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
        lookup: function(event) {
            var items;
            this.query = this.$element.val();
            if (!this.query || this.query.length < this.options.minLength) {
                return this.shown ? this.hide() : this;
            }
            items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
            return items ? this.process(items) : this;
        },
        process: function(items) {
            var that = this;
            items = $.grep(items, function(item) {
                return that.matcher(item);
            });
            items = this.sorter(items);
            if (!items.length) {
                return this.shown ? this.hide() : this;
            }
            return this.render(items.slice(0, this.options.items)).show();
        },
        matcher: function(item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase());
        },
        sorter: function(items) {
            var beginswith = [], caseSensitive = [], caseInsensitive = [], item;
            while (item = items.shift()) {
                if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item); else if (~item.indexOf(this.query)) caseSensitive.push(item); else caseInsensitive.push(item);
            }
            return beginswith.concat(caseSensitive, caseInsensitive);
        },
        highlighter: function(item) {
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return item.replace(new RegExp("(" + query + ")", "ig"), function($1, match) {
                return "<strong>" + match + "</strong>";
            });
        },
        render: function(items) {
            var that = this;
            items = $(items).map(function(i, item) {
                i = $(that.options.item).attr("data-value", item);
                i.find("a").html(that.highlighter(item));
                return i[0];
            });
            items.first().addClass("active");
            this.$menu.html(items);
            return this;
        },
        next: function(event) {
            var active = this.$menu.find(".active").removeClass("active"), next = active.next();
            if (!next.length) {
                next = $(this.$menu.find("li")[0]);
            }
            next.addClass("active");
        },
        prev: function(event) {
            var active = this.$menu.find(".active").removeClass("active"), prev = active.prev();
            if (!prev.length) {
                prev = this.$menu.find("li").last();
            }
            prev.addClass("active");
        },
        listen: function() {
            this.$element.on("blur", $.proxy(this.blur, this)).on("keypress", $.proxy(this.keypress, this)).on("keyup", $.proxy(this.keyup, this));
            if ($.browser.chrome || $.browser.webkit || $.browser.msie) {
                this.$element.on("keydown", $.proxy(this.keydown, this));
            }
            this.$menu.on("click", $.proxy(this.click, this)).on("mouseenter", "li", $.proxy(this.mouseenter, this));
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
        keydown: function(e) {
            this.suppressKeyPressRepeat = !~$.inArray(e.keyCode, [ 40, 38, 9, 13, 27 ]);
            this.move(e);
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
            var that = this;
            setTimeout(function() {
                that.hide();
            }, 150);
        },
        click: function(e) {
            e.stopPropagation();
            e.preventDefault();
            this.select();
        },
        mouseenter: function(e) {
            this.$menu.find(".active").removeClass("active");
            $(e.currentTarget).addClass("active");
        }
    };
    $.fn.typeahead = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("typeahead"), options = typeof option == "object" && option;
            if (!data) $this.data("typeahead", data = new Typeahead(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    };
    $.fn.typeahead.Constructor = Typeahead;
    $(function() {
        $("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
            var $this = $(this);
            if ($this.data("typeahead")) return;
            e.preventDefault();
            $this.typeahead($this.data());
        });
    });
}(window.jQuery);

!function($) {
    "use strict";
    var Affix = function(element, options) {
        this.options = $.extend({}, $.fn.affix.defaults, options);
        this.$window = $(window).on("scroll.affix.data-api", $.proxy(this.checkPosition, this));
        this.$element = $(element);
        this.checkPosition();
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(), position = this.$element.offset(), offset = this.options.offset, offsetBottom = offset.bottom, offsetTop = offset.top, reset = "affix affix-top affix-bottom", affix;
        if (typeof offset != "object") offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function") offsetTop = offset.top();
        if (typeof offsetBottom == "function") offsetBottom = offset.bottom();
        affix = this.unpin != null && scrollTop + this.unpin <= position.top ? false : offsetBottom != null && position.top + this.$element.height() >= scrollHeight - offsetBottom ? "bottom" : offsetTop != null && scrollTop <= offsetTop ? "top" : false;
        if (this.affixed === affix) return;
        this.affixed = affix;
        this.unpin = affix == "bottom" ? position.top - scrollTop : null;
        this.$element.removeClass(reset).addClass("affix" + (affix ? "-" + affix : ""));
    };
    $.fn.affix = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("affix"), options = typeof option == "object" && option;
            if (!data) $this.data("affix", data = new Affix(this, options));
            if (typeof option == "string") data[option]();
        });
    };
    $.fn.affix.Constructor = Affix;
    $.fn.affix.defaults = {
        offset: 0
    };
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this), data = $spy.data();
            data.offset = data.offset || {};
            data.offsetBottom && (data.offset.bottom = data.offsetBottom);
            data.offsetTop && (data.offset.top = data.offsetTop);
            $spy.affix(data);
        });
    });
}(window.jQuery);

(function($, $util, Plugin) {
    var OBJECT = "object", FUNCTION = "function", isIE = $.browser.msie, useEncode, flashVersion;
    function compareArrayIntegers(a, b) {
        var x = (a[0] || 0) - (b[0] || 0);
        return x > 0 || !x && a.length > 0 && compareArrayIntegers(a.slice(1), b.slice(1));
    }
    function objectToArguments(o) {
        if (typeof o !== OBJECT) {
            return o;
        }
        var arr = [], str = "";
        for (var i in o) {
            if (typeof o[i] === OBJECT) {
                str = objectToArguments(o[i]);
            } else {
                str = [ i, useEncode ? encodeURI(o[i]) : o[i] ].join("=");
            }
            arr.push(str);
        }
        return arr.join("&");
    }
    function objectFromObject(o) {
        var arr = [];
        for (var i in o) {
            if (o[i]) {
                arr.push([ i, '="', o[i], '"' ].join(""));
            }
        }
        return arr.join(" ");
    }
    function paramsFromObject(o) {
        var arr = [];
        for (var i in o) {
            arr.push([ '<param name="', i, '" value="', objectToArguments(o[i]), '" />' ].join(""));
        }
        return arr.join("");
    }
    try {
        flashVersion = Plugin.description || function() {
            return new Plugin("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
        }();
    } catch (e) {
        flashVersion = "Unavailable";
    }
    var flashVersionMatchVersionNumbers = flashVersion.match(/\d+/g) || [ 0 ];
    var available = flashVersionMatchVersionNumbers[0] > 0;
    var activeX = Plugin && !Plugin.name;
    var version = {
        original: flashVersion,
        array: flashVersionMatchVersionNumbers,
        string: flashVersionMatchVersionNumbers.join("."),
        major: parseInt(flashVersionMatchVersionNumbers[0], 10) || 0,
        minor: parseInt(flashVersionMatchVersionNumbers[1], 10) || 0,
        release: parseInt(flashVersionMatchVersionNumbers[2], 10) || 0
    };
    function hasVersion(version) {
        var versionArray = /string|number/.test(typeof version) ? version.toString().split(".") : /object/.test(typeof version) ? [ version.major, version.minor ] : version || [ 0, 0 ];
        return compareArrayIntegers(flashVersionMatchVersionNumbers, versionArray);
    }
    var encodeParams = true;
    var expressInstall = "expressInstall.swf";
    var expressInstallIsActive = false;
    function create(container, options) {
        if (!options.swf || expressInstallIsActive || !available && !options.hasVersionFail) {
            return false;
        }
        if (!hasVersion(options.hasVersion || 1)) {
            expressInstallIsActive = true;
            if (typeof options.hasVersionFail === FUNCTION) {
                if (!options.hasVersionFail.apply(options)) {
                    return false;
                }
            }
            options = {
                swf: options.expressInstall || expressInstall,
                height: 137,
                width: 214,
                flashvars: {
                    MMredirectURL: location.href,
                    MMplayerType: activeX ? "ActiveX" : "PlugIn",
                    MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
                }
            };
        }
        attrs = {
            id: "ui-flash-object" + $.guid++,
            width: options.width || 320,
            height: options.height || 180,
            style: options.style || ""
        };
        if (isIE) {
            attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
            options.movie = options.swf;
        } else {
            attrs.data = options.swf;
            attrs.type = "application/x-shockwave-flash";
        }
        useEncode = typeof options.useEncode !== "undefined" ? options.useEncode : encodeParams;
        options.wmode = options.wmode || "opaque";
        delete options.hasVersion;
        delete options.hasVersionFail;
        delete options.height;
        delete options.swf;
        delete options.useEncode;
        delete options.width;
        var html = [ "<object ", objectFromObject(attrs), ">", paramsFromObject(options), "</object>" ].join("");
        if (isIE) {
            var flashContainer = document.createElement("div");
            container.html(flashContainer);
            flashContainer.outerHTML = html;
        } else {
            container.html(html);
        }
        return container.children().get(0);
    }
    $.fn.flash = function(method) {
        var elem, isGenerateId = false, obj;
        function _generateId() {
            isGenerateId = true;
            elem.attr("id", "ui-flash" + $.guid);
        }
        function _getFlashConfigs(options) {
            var configs = $.extend(true, {
                flashvars: {
                    swfid: elem.attr("id"),
                    eventHandler: "jQuery.fn.flash.triggerHandler"
                }
            }, options);
            delete configs.disabled;
            delete configs.module;
            return configs;
        }
        function _create(options) {
            if (!elem.attr("id")) {
                _generateId();
            }
            elem.addClass("ui-flash");
            obj = create(elem, _getFlashConfigs(options));
        }
        this.getFlash = function() {
            return obj;
        };
        if (typeof method === "object") {
            elem = this;
            _create.call(this, method);
        }
        return this;
    };
    $.fn.flash.triggerHandler = function(o) {
        $("#" + o.swfid).triggerHandler(o.type, o);
    };
})(jQuery, jQuery.util, navigator.plugins["Shockwave Flash"] || window.ActiveXObject);

var saveAs = saveAs || function(view) {
    "use strict";
    var doc = view.document, get_URL = function() {
        return view.URL || view.webkitURL || view;
    }, URL = view.URL || view.webkitURL || view, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"), can_use_save_link = "download" in save_link, click = function(node) {
        var event = doc.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return node.dispatchEvent(event);
    }, webkit_req_fs = view.webkitRequestFileSystem, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem, throw_outside = function(ex) {
        (view.setImmediate || view.setTimeout)(function() {
            throw ex;
        }, 0);
    }, force_saveable_type = "application/octet-stream", fs_min_size = 0, deletion_queue = [], process_deletion_queue = function() {
        var i = deletion_queue.length;
        while (i--) {
            var file = deletion_queue[i];
            if (typeof file === "string") {
                URL.revokeObjectURL(file);
            } else {
                file.remove();
            }
        }
        deletion_queue.length = 0;
    }, dispatch = function(filesaver, event_types, event) {
        event_types = [].concat(event_types);
        var i = event_types.length;
        while (i--) {
            var listener = filesaver["on" + event_types[i]];
            if (typeof listener === "function") {
                try {
                    listener.call(filesaver, event || filesaver);
                } catch (ex) {
                    throw_outside(ex);
                }
            }
        }
    }, FileSaver = function(blob, name) {
        var filesaver = this, type = blob.type, blob_changed = false, object_url, target_view, get_object_url = function() {
            var object_url = get_URL().createObjectURL(blob);
            deletion_queue.push(object_url);
            return object_url;
        }, dispatch_all = function() {
            dispatch(filesaver, "writestart progress write writeend".split(" "));
        }, fs_error = function() {
            if (blob_changed || !object_url) {
                object_url = get_object_url(blob);
            }
            target_view.location.href = object_url;
            filesaver.readyState = filesaver.DONE;
            dispatch_all();
        }, abortable = function(func) {
            return function() {
                if (filesaver.readyState !== filesaver.DONE) {
                    return func.apply(this, arguments);
                }
            };
        }, create_if_not_found = {
            create: true,
            exclusive: false
        }, slice;
        filesaver.readyState = filesaver.INIT;
        if (!name) {
            name = "download";
        }
        if (can_use_save_link) {
            object_url = get_object_url(blob);
            save_link.href = object_url;
            save_link.download = name;
            if (click(save_link)) {
                filesaver.readyState = filesaver.DONE;
                dispatch_all();
                return;
            }
        }
        if (view.chrome && type && type !== force_saveable_type) {
            slice = blob.slice || blob.webkitSlice;
            blob = slice.call(blob, 0, blob.size, force_saveable_type);
            blob_changed = true;
        }
        if (webkit_req_fs && name !== "download") {
            name += ".download";
        }
        if (type === force_saveable_type || webkit_req_fs) {
            target_view = view;
        } else {
            target_view = view.open();
        }
        if (!req_fs) {
            fs_error();
            return;
        }
        fs_min_size += blob.size;
        req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
            fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
                var save = function() {
                    dir.getFile(name, create_if_not_found, abortable(function(file) {
                        file.createWriter(abortable(function(writer) {
                            writer.onwriteend = function(event) {
                                target_view.location.href = file.toURL();
                                deletion_queue.push(file);
                                filesaver.readyState = filesaver.DONE;
                                dispatch(filesaver, "writeend", event);
                            };
                            writer.onerror = function() {
                                var error = writer.error;
                                if (error.code !== error.ABORT_ERR) {
                                    fs_error();
                                }
                            };
                            "writestart progress write abort".split(" ").forEach(function(event) {
                                writer["on" + event] = filesaver["on" + event];
                            });
                            writer.write(blob);
                            filesaver.abort = function() {
                                writer.abort();
                                filesaver.readyState = filesaver.DONE;
                            };
                            filesaver.readyState = filesaver.WRITING;
                        }), fs_error);
                    }), fs_error);
                };
                dir.getFile(name, {
                    create: false
                }, abortable(function(file) {
                    file.remove();
                    save();
                }), abortable(function(ex) {
                    if (ex.code === ex.NOT_FOUND_ERR) {
                        save();
                    } else {
                        fs_error();
                    }
                }));
            }), fs_error);
        }), fs_error);
    }, FS_proto = FileSaver.prototype, saveAs = function(blob, name) {
        return new FileSaver(blob, name);
    };
    FS_proto.abort = function() {
        var filesaver = this;
        filesaver.readyState = filesaver.DONE;
        dispatch(filesaver, "abort");
    };
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;
    FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
    view.addEventListener("unload", process_deletion_queue, false);
    return saveAs;
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
        _.each(this.views, function(view) {
            view.remove();
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
        var self = this;
        var swfMap = {
            pie: "swf/beechart-pie.swf",
            line: "swf/beechart-line.swf",
            bar: "swf/beechart-bar.swf",
            timeline: "swf/beechart-timeline.swf"
        };
        var dataMap = {
            pie: "swf/data/site-reffers.xml",
            line: "swf/data/2-serials.xml",
            bar: "swf/data/mon-av-temp.xml",
            timeline: "swf/data/small_data.json"
        };
        if (this.options.type && this.flash) {
            self.chart = this.flash.flash({
                swf: swfMap[this.options.type],
                width: 750,
                height: 450,
                allowScriptAccess: "always",
                flashvars: {
                    dataUrl: dataMap[this.options.type],
                    debug: true
                }
            });
            self.chart.on("swfReady.flash", function() {
                log("chartStyle", self.chart.getFlash()._returnChartCSS());
                StyleCenter.getInstance().setStyleSheet(new StyleSheet(self.chart.getFlash()._returnChartCSS()));
            });
        }
        if (self.chart) {
            $(document).on("redrawFlash", function(e, data) {
                log("redrawFlash", data);
                self.chart.getFlash().parseCSS(data, true);
            });
        }
    },
    renderModelAndView: function() {
        var self = this;
        var renderMap = {
            pie: function() {
                var generalView = new GeneralView({
                    model: self.model
                });
                self.views.push(generalView);
                var pieView = new PieView({
                    model: self.model
                });
                self.views.push(pieView);
            },
            line: function() {
                var generalView = new GeneralView({
                    model: self.model
                });
                self.views.push(generalView);
                var lineView = new LineView({
                    model: self.model
                });
                self.views.push(lineView);
            },
            bar: function() {
                var generalView = new GeneralView({
                    model: self.model
                });
                self.views.push(generalView);
                var barView = new BarView({
                    model: self.model
                });
                self.views.push(barView);
            }
        };
        try {
            renderMap[self.options.type]();
            this.config_container.fadeIn();
        } catch (e) {
            alert(e);
        }
    },
    modelChange: function(model) {
        var changedAttributes = model.changedAttributes();
        log("model change:", model.styleName, changedAttributes);
        var self = this;
        StyleCenter.getInstance().setStyle(model.styleName, changedAttributes);
        if (changedAttributes["animate"]) {
            self.chart.getFlash()._setState("setState");
            self.chart.getFlash()._setState("normal");
        }
    }
});

var BarView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(view) {
            view.remove();
        });
        BarView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {}
});

var BaseModel = Backbone.Model.extend({});

var BaseView = Backbone.View.extend({
    initialize: function() {
        var modelClz = this.options.modelClz;
        if (modelClz) {
            this.model = new modelClz(this.options.modelAttributes || {});
        }
        if (this.options.styleName) {
            this.model.styleName = this.options.styleName;
        }
        modelClz = null;
        this.defaultSetting();
        this.setDefaultValue();
        this.defaultAction();
    },
    defaultSetting: function() {},
    setDefaultValue: function() {
        var self = this;
        log(this.model.styleName, this.model.attributes);
        _.each(this.model.attributes, function(value, key) {
            var inputs = $(".containe[data-key='" + key + "'] input", self.$el);
            var input_type, temp, itemValue;
            if (inputs.length) {
                input_type = inputs.attr("type");
                itemValue = self.model.get(key);
                if (input_type == "number") {
                    inputs.val(itemValue);
                }
                if (input_type == "radio") {
                    self.radioChecked(inputs, itemValue);
                }
                if (input_type == "range") {
                    inputs.val(itemValue);
                    inputs.next().text(itemValue);
                }
                if (input_type == "color") {
                    if (self._isColor(itemValue)) {
                        inputs.val(itemValue);
                    }
                }
                if (inputs.hasClass("color-input")) {
                    self._setColorInputValAndBorderColor(inputs, itemValue);
                }
                inputs = null;
            }
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
    radioChecked: function(radios, checkedVal) {
        var temp;
        _.each(radios, function(radio) {
            temp = $(radio);
            if (temp.val() == checkedVal) {
                temp.prop("checked", true);
            }
            temp = null;
        });
    },
    colorTypeInputValueChangeHanlder: function(e) {
        var colorTypeInput = $(e.target);
        this._changeColorInpus(colorTypeInput);
        this.valueChangeHanlder(e);
    },
    colorInputValueChangeHanlder: function(e) {
        var colorInput = $(e.target);
        var colorInputVal = colorInput.val();
        if (!this._isColor(colorInputVal)) {
            return;
        }
        var colorTypeInput = colorInput.prev();
        colorTypeInput.val(colorInputVal);
        this.valueChangeHanlder(e);
    },
    _changeColorInpus: function(colorTypeInput) {
        var colorTypeInput = colorTypeInput;
        var colorInput = colorTypeInput.next();
        this._setColorInputValAndBorderColor(colorInput, colorTypeInput.val());
    },
    clickRadioHandler: function(e) {
        this.valueChangeHanlder(e);
    },
    _setColorInputValAndBorderColor: function(input, color) {
        if (this._isColor(color)) {
            input.val(color);
            input.css("borderColor", color);
        }
    },
    _isColor: function(color) {
        var colorReg = /^#([0-9]|[a-f]){6}$/i;
        return colorReg.test(color);
    },
    changeNumberHandler: function(e) {
        var jq_target = $(e.target);
        if (jq_target.is("input[type='range']")) {
            jq_target.next().text(jq_target.val());
        }
        this.valueChangeHanlder(e);
    },
    valueChangeHanlder: function(e) {
        var target = $(e.target);
        var well = target.closest(".containe");
        if (!well.length) {
            well = target.closest(".containe-colortype-choose");
        }
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey, propertyVal);
    },
    switchInputEnable: function(jq_content, isEnable) {
        var inputs = $("input", jq_content);
        if (isEnable) {
            inputs.attr("disabled", true);
        } else {
            inputs.attr("disabled", false);
        }
    }
});

var CommonModel = BaseModel.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
});

var CommonView = BaseView.extend({
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='leftAxisVisibility-group']": "leftAxisVisibilityGroupClickHandler"
        });
    },
    leftAxisVisibilityGroupClickHandler: function(e) {
        var radio = $(e.target);
        var forYAxisVisible = $("#for-yAxis-visible");
        var isEnable = true;
        if (radio.val() == "invisible") {
            isEnable = false;
        }
        this.switchInputEnable(forYAxisVisible, isEnable);
    }
});

var GeneralView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(view) {
            view.remove();
        });
        this.constructor.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {
        var commonView = new CommonView({
            modelClz: CommonModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#common-set")
        });
        this.views.push(commonView);
        this.model.push(commonView.model);
        var legendView = new LegendView({
            modelClz: LegendModel,
            modelAttributes: StyleCenter.getInstance().getStyle("legend"),
            el: $("#legend-set")
        });
        this.views.push(legendView);
        this.model.push(legendView.model);
        var tooltipView = new TooltipView({
            modelClz: TooltipModel,
            modelAttributes: StyleCenter.getInstance().getStyle("tooltip"),
            el: $("#tooltip-set")
        });
        this.views.push(tooltipView);
        this.model.push(tooltipView.model);
        var xAxisView = new XAxisView({
            modelClz: XAxisModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis"),
            el: $("#xAxis-set")
        });
        this.views.push(xAxisView);
        this.model.push(xAxisView.model);
        var xAxisLabelView = new XAxisLabelView({
            modelClz: XAxisLabelModel,
            modelAttributes: StyleCenter.getInstance().getStyle("xaxis label"),
            el: $("#xAxis-label-set")
        });
        this.views.push(xAxisLabelView);
        this.model.push(xAxisLabelView.model);
        var yAxisView = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("yaxis"),
            styleName: "yaxis",
            el: $("#yAxis-set")
        });
        this.views.push(yAxisView);
        this.model.push(yAxisView.model);
        var yAxisLabelView = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("yaxis label"),
            styleName: "yaxis label",
            el: $("#yAxis-label-set")
        });
        this.views.push(yAxisLabelView);
        this.model.push(yAxisLabelView.model);
        var canvasView = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("canvas"),
            styleName: "canvas",
            el: $("#canvas-set")
        });
        this.views.push(canvasView);
        this.model.push(canvasView.model);
    }
});

var LegendModel = BaseModel.extend({
    styleName: "legend",
    defaults: function() {
        return {};
    }
});

var LegendView = BaseView.extend({});

var TooltipModel = BaseModel.extend({
    styleName: "tooltip",
    defaults: function() {
        return {};
    }
});

var TooltipView = BaseView.extend({
    defaultAction: function() {
        var backgroundType_checked_radio = $("input[type='radio'][name='backgroundType-group']:checked", this.$el);
        this.switchForSimpleEnable(backgroundType_checked_radio);
    },
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='backgroundType-group']": "backgroundTypeGroupClickHandler"
        });
    },
    backgroundTypeGroupClickHandler: function(e) {
        var radio = $(e.target);
        this.switchForSimpleEnable(radio);
    },
    switchForSimpleEnable: function(radio) {
        var forSimple = this.$el.find("#for-backgroundType-simple");
        var isEnable = true;
        if (radio.val() == "simple") {
            isEnable = false;
        }
        this.switchInputEnable(forSimple, isEnable);
    }
});

var XAxisLabelModel = BaseModel.extend({
    styleName: "xaxis label",
    defaults: function() {
        return {};
    }
});

var XAxisLabelView = BaseView.extend({});

var XAxisModel = BaseModel.extend({
    styleName: "xaxis",
    defaults: function() {
        return {};
    }
});

var XAxisView = BaseView.extend({});

jQuery(function($) {
    try {
        var start = {
            init: function() {
                this.btnEvent();
                this.chartTypeSwitchModel();
            },
            btnEvent: function() {
                $("#switch").click(function(e) {
                    e.preventDefault();
                });
                $("#download").click(function(e) {
                    e.preventDefault();
                    get_blob_builder = function() {
                        return window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
                    };
                    var BB = get_blob_builder();
                    var bb = new BB();
                    bb.append(StyleCenter.getInstance().returnCSSText());
                    saveAs(bb.getBlob("text/plain;charset=utf-8"), "chart.css");
                });
            },
            chartTypeSwitchModel: function() {
                var model = $("#chart-type-switch-modal");
                var currentBtn, lastAppView, lastChoiseType;
                model.modal();
                var btns = $(".chart-types button", model);
                var confirmBtn = $(".confirm.btn", model);
                var modal_backdrop = $(".modal-backdrop");
                modal_backdrop.click(function(e) {
                    if (!btns.hasClass("active")) {
                        e.preventDefault();
                    }
                });
                $(document).on("click", ".chart-types button", function(e) {
                    currentBtn = $(this);
                    btns.removeClass("active");
                    currentBtn.addClass("active");
                    switchType();
                });
                function switchType() {
                    if (!currentBtn) {
                        return;
                    }
                    var charttype = currentBtn.data("charttype");
                    if (lastChoiseType == charttype) {
                        model.modal("hide");
                        return;
                    }
                    newFlashContainer();
                    lastChoiseType = charttype;
                    if (lastAppView) {
                        lastAppView.remove();
                    }
                    lastAppView = new AppView({
                        el: $("body"),
                        model: new AppModel(),
                        type: charttype,
                        templateId: "#" + charttype + "-config"
                    });
                    model.modal("hide");
                }
                function newFlashContainer() {
                    $(".flash-container").append("<div id='flash-container' class='well hide ui-flash'>");
                }
            }
        };
        start.init();
    } catch (e) {
        console.log(e);
    }
});

var LineDotView = BaseView.extend({
    setDefaultValue: function() {
        this.constructor.__super__.setDefaultValue.apply(this, arguments);
        var self = this;
        _.each(this.model.attributes, function(value, key) {
            var containe_colortype_choose = $(".containe-colortype-choose[data-key='" + key + "']", self.$el);
            var colorTypeRadios, for_color_custom, colorInput;
            if (containe_colortype_choose.length) {
                colorTypeRadios = $(".colorTypeRadios input[type='radio']", containe_colortype_choose);
                for_color_custom = $(".for-color-custom", containe_colortype_choose);
                if (self._isColor(value)) {
                    colorInput = $("input[type='color']", for_color_custom);
                    self.radioChecked(colorTypeRadios, "forCustom");
                    colorInput.val(value);
                    self._changeColorInpus(colorInput);
                } else {
                    self.radioChecked(colorTypeRadios, "inherit#color");
                    self.switchInputEnable(for_color_custom, true);
                }
            }
        });
    },
    events: function() {
        return _.extend({}, BaseView.prototype.events, {
            "click input[type='radio'][name='color-group']": "colorTypeSwitchClickHandler",
            "click input[type='radio'][name='borderColor-group']": "colorTypeSwitchClickHandler"
        });
    },
    colorTypeSwitchClickHandler: function(e) {
        var radio = $(e.target);
        var containe_colortype_choose = radio.closest(".containe-colortype-choose");
        var forColorCustom = $(".for-color-custom", containe_colortype_choose);
        this.switchForCustomEnable(radio, forColorCustom);
    },
    switchForCustomEnable: function(radio, forColorCustom) {
        var isEnable = true;
        if (radio.val() == "forCustom") {
            isEnable = false;
        }
        this.switchInputEnable(forColorCustom, isEnable);
    }
});

var LineView = Backbone.View.extend({
    initialize: function() {
        this.views = [];
        this.defaultSetting();
    },
    remove: function() {
        _.each(this.views, function(view) {
            view.remove();
        });
        this.constructor.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {
        var lineStyleView = new BaseView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("line"),
            styleName: "line",
            el: $("#line-style-set")
        });
        this.views.push(lineStyleView);
        this.model.push(lineStyleView.model);
        var lineDotView = new LineDotView({
            modelClz: BaseModel,
            modelAttributes: StyleCenter.getInstance().getStyle("line dot"),
            styleName: "line dot",
            el: $("#line-dot-set")
        });
        this.views.push(lineDotView);
        this.model.push(lineDotView.model);
    }
});

var PieChartSetModel = BaseModel.extend({
    styleName: "chart",
    defaults: function() {
        return {};
    }
});

var PieChartSetView = BaseView.extend({});

var PieSliceSetModel = BaseModel.extend({
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
        _.each(this.views, function(view) {
            view.remove();
        });
        PieView.__super__.remove.apply(this, arguments);
        return this;
    },
    defaultSetting: function() {
        var pieChartSetView = new PieChartSetView({
            modelClz: PieChartSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("chart"),
            el: $("#pie-chart-set")
        });
        this.views.push(pieChartSetView);
        this.model.push(pieChartSetView.model);
        var pieSliceSetView = new PieSliceSetView({
            modelClz: PieSliceSetModel,
            modelAttributes: StyleCenter.getInstance().getStyle("slice"),
            el: $("#pie-slice-set")
        });
        this.views.push(pieSliceSetView);
        this.model.push(pieSliceSetView.model);
    }
});

var StyleCenter = function() {
    var instance;
    function privateFun() {
        var styleSheet;
        return {
            setStyleSheet: function(styleSheet) {
                this.styleSheet = styleSheet;
                $(document).triggerHandler("dataReady");
            },
            setStyle: function(styleName, styleObj) {
                var styleStr = (styleName + JSON.stringify(styleObj) + "").replace(/\"/g, "");
                var style = this.styleSheet.getStyle(styleName);
                if (style) {
                    style = _.extend(style, styleObj);
                    this.styleSheet.setStyle(styleName, style);
                }
                log("setStyle", styleStr, style);
                style = null;
                $(document).triggerHandler("redrawFlash", [ styleStr ]);
            },
            getStyle: function(styleName) {
                return this.styleSheet.getStyle(styleName);
            },
            returnCSSText: function() {
                return this.styleSheet.returnCSSText();
            }
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = new privateFun();
            }
            return instance;
        }
    };
}();

var StyleSheet = function(style) {
    this._style = {};
    if (style) {
        this.parseCSS(style);
    }
};

StyleSheet.prototype = {
    parseCSS: function(CSSText) {
        var SPACE_ITEM_PATTERN = /([\w\s]+)\s*{([^}]*\s*[^}]*)}/gm;
        var PARIR_PATTERN = /([\w.]+)\s*:\s*([^;\n]+)/g;
        var str = CSSText;
        if (str) {
            str = str.replace(/\/\*.*\*\//gm, "");
            str = _.string.strip(str);
            var arr, name, values, styleValue, styleObj;
            while (arr = SPACE_ITEM_PATTERN.exec(str)) {
                name = _.string.strip(arr[1]);
                values = _.string.strip(arr[2]);
                styleObj = {};
                while (arr = PARIR_PATTERN.exec(values)) {
                    styleValue = _.string.strip(arr[2]);
                    styleObj[arr[1]] = styleValue;
                }
                this.setStyle(name, styleObj);
            }
        }
    },
    setStyle: function(styleName, styleObject) {
        this._style[styleName] = styleObject;
    },
    getStyle: function(styleName) {
        return this._style[styleName];
    },
    returnCSSText: function() {
        var outputArr = [], styleObj, styleObjArr;
        var names = _.keys(this._style);
        var self = this;
        _.each(names, function(name) {
            obj = self.getStyle(name);
            styleObjArr = [];
            styleObjArr.push(name.concat("{"));
            _.each(obj, function(objValue, objName) {
                styleObjArr.push([ "	", objName, ": ", objValue, ";" ].join(""));
            });
            styleObjArr.push("}");
            outputArr.push(styleObjArr.join("\n"));
        });
        return outputArr.join("\n");
    }
};
//@ sourceMappingURL=dist/merge.map