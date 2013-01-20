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
        var pieChartSetView = new PieChartSetView({
            modelClz:PieChartSetModel,
            modelAttributes : StyleCenter.getInstance().getStyle("chart")
        });
        this.views.push(pieChartSetView);
        this.model.push(pieChartSetView.model);

        var pieSliceSetView = new PieSliceSetView({
            modelClz:PieSliceSetModel,
            modelAttributes : StyleCenter.getInstance().getStyle("slice")
        });
        this.views.push(pieSliceSetView);
        this.model.push(pieSliceSetView.model);
    }
})