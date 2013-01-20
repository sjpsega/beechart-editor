/*
 Style解析，对应AS中的StyleSheet
 @author  jianping.shenjp
 @date    2012-11-2
*/

var StyleSheet = function(style){
    this._style = {};
    if(style){
        this.parseCSS(style);
    }
}
StyleSheet.prototype = {
    parseCSS:function(CSSText){
        /**
        * 查找样式名称中带有空格(space/tab/newline)的块
        */
        var SPACE_ITEM_PATTERN = /([\w\s]+)\s*{([^}]*\s*[^}]*)}/mg;
        
        /**
        * 查找这样的设置: 
        * styleName : styleValue
        */
        var PARIR_PATTERN = /([\w.]+)\s*:\s*([^;\n]+)/g;

        var str = CSSText;
        
        if (str) {
            
            str = str.replace(/\/\*.*\*\//mg, '') //去掉注释
            str = _.string.strip(str);//去掉前后空白
            
            var arr,name,values,styleValue,styleObj;
            while(arr = SPACE_ITEM_PATTERN.exec(str)){
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
    setStyle:function(styleName,styleObject){
        this._style[styleName] = styleObject;
    },
    getStyle:function(styleName){
        return this._style[styleName];
    },
    /**
    * 将样式对象转成CSS格式的字符串
    */
    returnCSSText:function(){
        var outputArr = [],styleObj,styleObjArr;
        var names = _.keys(this._style);
        var self = this;
        _.each(names,function(name){
            obj = self.getStyle(name);
            styleObjArr = [];
            styleObjArr.push(name.concat("{"));
            _.each(obj,function(objValue,objName){
                styleObjArr.push(['\t', objName, ': ', objValue, ';'].join(''));
            });
            styleObjArr.push("}");
            outputArr.push(styleObjArr.join("\n"));
        });
        return outputArr.join("\n");
    }
}