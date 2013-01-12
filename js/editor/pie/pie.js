/*
 饼图专有样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieView = Backbone.View.extend({
    el:$("#general"),
    initialize:function(){
        this.views = [];
        this.defaultSetting();
    },
    events:{
    },
    defaultSetting:function(){
        var pieInChartView = new PieInChartView({
            modelClz:PieInChartModel,
            modelAttributes : StyleCenter.getInstance().getStyle("chart")
        });
        this.views.push(pieInChartView);
        this.model.push(pieInChartView.model);
    }
})