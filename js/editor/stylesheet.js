/*
 Style解析，对应AS中的StyleSheet
 @author  jianping.shenjp
 @date    2012-11-2
*/

var StyleSheet = function(style){
    this._style = {};
    this.parseCSS(style);
}
StyleSheet.prototype = {
    parseCSS:function(CSSText){
        /**
        * 空的样式项目会造成原生StyleSheet的解析错误，故去掉 
        */
        var EMPTY_ITEM_PATTERN = /\w+\s*{\s*}/;
        
        /**
        * 查找样式名称中带有空格(space/tab/newline)的块
        */
        var SPACE_ITEM_PATTERN = /(\w+(?:\s+\w+)+)\s*{([^}]*\s*[^}]*)}/mg;
        
        /**
        * 查找这样的设置: 
        * styleName : styleValue
        */
        var PARIR_PATTERN = /([\w.]+)\s*:\s*([^;\n]+)/g;
        

        var src = CSSText;
        
        if (src) {
            
            src = src.replace(/\/\*[^*\/]*\*\//mg, '') //去掉注释
                    .replace(/(?<=\w)\s+(?=:)|(?<=:)\s+(?=\w|;)/g, ''); //去掉多余空格
            
            var mtc = [];
            var name = "";
            var values = "";
            var style = {};
            var mtcValue = [];
            var styleValue = "";
            while (mtc = SPACE_ITEM_PATTERN.exec(src)) {
                name = mtc[1];
                values = mtc[2];
                style = getStyle(name);
                while (mtcValue = PARIR_PATTERN.exec(values)) {
                    styleValue = mtcValue[2];
                    styleValue = styleValue.replace(/\s+$/g, '');
                    style[mtcValue[1]] = styleValue;
                }
                this.setStyle(name, style);
            }
            
            src = src.replace(SPACE_ITEM_PATTERN, '')
                     .replace(EMPTY_ITEM_PATTERN, '');
        }
        consolg.log("parseCSS",src);
    },
    setStyle:function(styleName,styleObject){

    }
}