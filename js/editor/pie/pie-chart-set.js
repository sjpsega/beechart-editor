/*
 chart下的pie专有属性
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieChartSetModel = Base.extend({
    styleName : "chart",
    defaults : function(){
        return {
            startAngle : 0
        }
    }
})

var PieChartSetView = BaseView.extend({
    el:$("#pie-chart-set")
})