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
                styleSheet = styleSheet;
            },
            setStyle:function(styleName,styleObj){
                var styleStr = (styleName+JSON.stringify(styleObj)+"").replace(/\"/g,"");
                console.log("setStyle",styleStr);
                $(document).triggerHandler("redrawFlash",[styleStr]);
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