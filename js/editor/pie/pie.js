/*
 饼图专有样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieView = ChartView.extend({
    defaultSetting:function(){
        var pieSliceSetView = new PieSliceSetView({
            modelClz:PieSliceSetModel,
            modelAttributes : StyleCenter.getInstance().getStyle("slice"),
            el:$("#pie-slice-set")
        });
        this.views.push(pieSliceSetView);
        this.model.push(pieSliceSetView.model);
    }
})