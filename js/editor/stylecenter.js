/*
 Style处理中心，单例对象
 @author  jianping.shenjp
 @date    2012-11-2
*/
var StyleCenter = (function(){
    var instance;

    function privateFun(){
        var styleSheet;
        return {
            setStyleSheet:function(styleSheet){
                this.styleSheet = styleSheet;
                $(document).triggerHandler("dataReady");
            },
            setStyle:function(styleName,styleObj){
                var styleStr = (styleName+JSON.stringify(styleObj)+"").replace(/\"/g,"");
                var style = this.styleSheet.getStyle(styleName);
                if(style){
                    style = _.extend(style,styleObj);
                    this.styleSheet.setStyle(styleName,style);
                }
                log("setStyle",styleStr,style);
                style = null;
                $(document).triggerHandler("redrawFlash",[styleStr]);
            },
            getStyle:function(styleName){
                return this.styleSheet.getStyle(styleName);
            }
        }
    }
    return {
        getInstance:function(){
            if(!instance){
                instance = new privateFun();
            }
            return instance;
        }
    }
})();