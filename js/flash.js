/*
 * flash embed
 * jQuery flash插件，插入flash。
 * 源代码改写自fdev4 jQuery UI Flash组件，原作者为Denis。
 * @author jianping.shenjp 2012.07.31
 */
(function($, $util, Plugin){
    var OBJECT = 'object', FUNCTION = 'function', isIE = $.browser.msie, useEncode, flashVersion;
    /**
     * compareArrayIntegers
     * @param {Object} a
     * @param {Object} b
     */
    function compareArrayIntegers(a, b){
        var x = (a[0] || 0) - (b[0] || 0);
        
        return x > 0 || (!x && a.length > 0 && compareArrayIntegers(a.slice(1), b.slice(1)));
    }
    
    /**
     * objectToArguments
     * @param {Object} o
     */
    function objectToArguments(o){
        if (typeof o !== OBJECT) {
            return o;
        }
        
        var arr = [], str = '';
        
        for (var i in o) {
            if (typeof o[i] === OBJECT) {
                str = objectToArguments(o[i]);
            }
            else {
                str = [i, (useEncode) ? encodeURI(o[i]) : o[i]].join('=');
            }
            arr.push(str);
        }
        
        return arr.join('&');
    }
    
    /**
     * objectFromObject
     * @param {Object} o
     */
    function objectFromObject(o){
        var arr = [];
        
        for (var i in o) {
            if (o[i]) {
                arr.push([i, '="', o[i], '"'].join(''));
            }
        }
        
        return arr.join(' ');
    }
    
    /**
     * paramsFromObject
     * @param {Object} o
     */
    function paramsFromObject(o){
        var arr = [];
        
        for (var i in o) {
            arr.push(['<param name="', i, '" value="', objectToArguments(o[i]), '" />'].join(''));
        }
        
        return arr.join('');
    }
    
    try {
        flashVersion = Plugin.description ||
        (function(){
            return (new Plugin('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
        }());
    } 
    catch (e) {
        flashVersion = 'Unavailable';
    }
    
    var flashVersionMatchVersionNumbers = flashVersion.match(/\d+/g) || [0];
    
    var available = flashVersionMatchVersionNumbers[0] > 0;
        /*
         * activeX插件对象
         */
    var activeX = Plugin && !Plugin.name;
        /*
         * 各种格式的版本表示
         */
    var version = {
            original: flashVersion,
            array: flashVersionMatchVersionNumbers,
            string: flashVersionMatchVersionNumbers.join('.'),
            major: parseInt(flashVersionMatchVersionNumbers[0], 10) || 0,
            minor: parseInt(flashVersionMatchVersionNumbers[1], 10) || 0,
            release: parseInt(flashVersionMatchVersionNumbers[2], 10) || 0
        };
        /**
         * 判断浏览器Flash版本是否符合传入的版本要求
         * @param {Object} version
         */
        function hasVersion(version){
            var versionArray = (/string|number/.test(typeof version)) ? version.toString().split('.') : (/object/.test(typeof version)) ? [version.major, version.minor] : version || [0, 0];
            return compareArrayIntegers(flashVersionMatchVersionNumbers, versionArray);
        }
        /*
         * 是否对参数进行encodeURI操作
         */
        var encodeParams = true
        /*
         * expressInstall的swf文件路径
         */
        var expressInstall = 'expressInstall.swf';
        /*
         * 是否激活expressInstall
         */
        var expressInstallIsActive = false;

        function create(container, options) {
            if (!options.swf || expressInstallIsActive || (!available && !options.hasVersionFail)) {
                return false;
            }
            //这个逻辑是当检测到Flash版本不符合要求时，替换为expressInstall的flash
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
                        MMplayerType: (activeX) ? 'ActiveX' : 'PlugIn',
                        MMdoctitle: document.title.slice(0, 47) + ' - Flash Player Installation'
                    }
                };
            }
            attrs = {
                //假如FLash内置调用Javascript，则必需给object赋id，否则在ie下报错
                id: 'ui-flash-object' + $.guid++,
                width: options.width || 320,
                height: options.height || 180,
                style: options.style || ''
            };
            if (isIE) {
                attrs.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
                options.movie = options.swf;
            } 
            else {
                attrs.data = options.swf;
                attrs.type = 'application/x-shockwave-flash';
            }
            useEncode = typeof options.useEncode !== 'undefined' ? options.useEncode : encodeParams;
            options.wmode = options.wmode || 'opaque';
            delete options.hasVersion;
            delete options.hasVersionFail;
            delete options.height;
            delete options.swf;
            delete options.useEncode;
            delete options.width;
            var html = ['<object ', objectFromObject(attrs), '>', paramsFromObject(options), '</object>'].join('');
            if (isIE) {
                var flashContainer = document.createElement('div');
                container.html(flashContainer);
                flashContainer.outerHTML = html;
            } 
            else {
                container.html(html);
            }
            return container.children().get(0);
        }
    $.fn.flash = function(method){
        var elem , isGenerateId = false, obj;
        /**
         * 给容器分配一个id
         */
        function _generateId(){
            isGenerateId = true;
            elem.attr("id",'ui-flash' + $.guid);
        }
        /**
        * 从options中剥离无效的配置参数，返回生成flash对象说必须的参数
        * 该方法必要时，需要在extend的函数中进行重写
        */
        function _getFlashConfigs(options){
            var configs = $.extend(true, {
                flashvars :{
                    swfid :elem.attr("id"),
                    eventHandler:'jQuery.fn.flash.triggerHandler'
                }
            }, options);
            //删除多余的配置项
            delete configs.disabled;
            delete configs.module;
            return configs;
        }
        /**
         * 创建一个flash对象
         * @param {Object} options  配置参数
         * @return {HTMLDOMElement} flash object对象
         */
         function _create(options){
            //给无id容器分配id
            if (!elem.attr("id")) 
            {
                _generateId();
            }
            elem.addClass('ui-flash');
            obj = create(elem, _getFlashConfigs(options))
        }
        this.getFlash = function(){
            return obj;
        }
        if(typeof method === "object"){
            elem = this;
            _create.call(this,method);
        }
        return this;   
    }
    /**
     * 由Flash调用此方法，向页面分发flash中分发的事件
     * @param {Object} o
     */
    $.fn.flash.triggerHandler = function(o){
        $('#' + o.swfid).triggerHandler(o.type, o);
    }
}(jQuery, jQuery.util, navigator.plugins['Shockwave Flash'] || window.ActiveXObject));
