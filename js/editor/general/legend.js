/*
 Legend
 @author  jianping.shenjp
 @date    2012-11-2
*/
var LegendModel = Base.extend({
    styleName : "legend",
    defaults : function(){
        return {
            align:"center"
        }
    }
})

var LegendView = BaseView.extend({
    el:$("#legend-set")
})