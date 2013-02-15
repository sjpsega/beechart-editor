/*
 柱形图专有样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var BarView = ChartView.extend({
    defaultSetting:function(){
        var barStyleView = new BarStyleView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("bar"),
            styleName : "bar",
            el:$("#bar-style-set")
        });
        this.views.push(barStyleView);
        this.model.push(barStyleView.model);
        // var pieChartSetView = new PieChartSetView({
        //     modelClz:PieChartSetModel,
        //     modelAttributes : StyleCenter.getInstance().getStyle("chart"),
        //     el:$("#pie-chart-set")
        // });
        // this.views.push(pieChartSetView);
        // this.model.push(pieChartSetView.model);

        // var pieSliceSetView = new PieSliceSetView({
        //     modelClz:PieSliceSetModel,
        //     modelAttributes : StyleCenter.getInstance().getStyle("slice"),
        //     el:$("#pie-slice-set")
        // });
        // this.views.push(pieSliceSetView);
        // this.model.push(pieSliceSetView.model);
    }
})