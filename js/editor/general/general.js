/*
 通用样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var GeneralView = ChartView.extend({
    defaultSetting:function(){
        var commonView = new CommonView({
            modelClz:CommonModel,
            modelAttributes : StyleCenter.getInstance().getStyle("chart"),
            el:$("#common-set")
        });
        this.views.push(commonView);
        this.model.push(commonView.model);

        var legendView = new LegendView({
            modelClz:LegendModel,
            modelAttributes : StyleCenter.getInstance().getStyle("legend"),
            el:$("#legend-set")
        });
        this.views.push(legendView);
        this.model.push(legendView.model);

        var tooltipView = new TooltipView({
            modelClz:TooltipModel,
            modelAttributes : StyleCenter.getInstance().getStyle("tooltip"),
            el:$("#tooltip-set")
        });
        this.views.push(tooltipView);
        this.model.push(tooltipView.model);

        var xAxisView = new XAxisView({
            modelClz:XAxisModel,
            modelAttributes : StyleCenter.getInstance().getStyle("xaxis"),
            el:$("#xAxis-set")
        });
        this.views.push(xAxisView);
        this.model.push(xAxisView.model);

        var xAxisLabelView = new XAxisLabelView({
            modelClz:XAxisLabelModel,
            modelAttributes : StyleCenter.getInstance().getStyle("xaxis label"),
            el:$("#xAxis-label-set")
        });
        this.views.push(xAxisLabelView);
        this.model.push(xAxisLabelView.model);

        var yAxisView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("yaxis"),
            styleName : "yaxis",
            el:$("#yAxis-set")
        });
        this.views.push(yAxisView);
        this.model.push(yAxisView.model);

        var yAxisLabelView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("yaxis label"),
            styleName : "yaxis label",
            el:$("#yAxis-label-set")
        });
        this.views.push(yAxisLabelView);
        this.model.push(yAxisLabelView.model);

        var canvasView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("canvas"),
            styleName : "canvas",
            el:$("#canvas-set")
        });
        this.views.push(canvasView);
        this.model.push(canvasView.model);
    }
})