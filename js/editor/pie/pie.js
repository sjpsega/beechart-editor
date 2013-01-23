/*
 饼图专有样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieView = Backbone.View.extend({
    initialize:function(){
        this.views = [];
        this.defaultSetting();
    },
    remove:function(){
        _.each(this.views,function(view){
            view.remove();
        });
        PieView.__super__.remove.apply(this,arguments);
        return this;
    },
    defaultSetting:function(){
        var pieChartSetView = new PieChartSetView({
            modelClz:PieChartSetModel,
            modelAttributes : StyleCenter.getInstance().getStyle("chart"),
            el:$("#pie-chart-set")
        });
        this.views.push(pieChartSetView);
        this.model.push(pieChartSetView.model);

        var pieSliceSetView = new PieSliceSetView({
            modelClz:PieSliceSetModel,
            modelAttributes : StyleCenter.getInstance().getStyle("slice"),
            el:$("#pie-slice-set")
        });
        this.views.push(pieSliceSetView);
        this.model.push(pieSliceSetView.model);
    }
})