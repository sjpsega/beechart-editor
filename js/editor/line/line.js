/*
 折线图专有样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var LineView = ChartView.extend({
    defaultSetting:function(){
        var lineStyleView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("line"),
            styleName : "line",
            el:$("#line-style-set")
        });
        this.views.push(lineStyleView);
        this.model.push(lineStyleView.model);

        var lineDotView = new LineDotView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("line dot"),
            styleName : "line dot",
            el:$("#line-dot-set")
        });
        this.views.push(lineDotView);
        this.model.push(lineDotView.model);

        var guideLineView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("guideline"),
            styleName : "guideLine",
            el:$("#guideLine-set")
        });
        this.views.push(guideLineView);
        this.model.push(guideLineView.model);

        // var pieSliceSetView = new PieSliceSetView({
        //     modelClz:PieSliceSetModel,
        //     modelAttributes : StyleCenter.getInstance().getStyle("slice"),
        //     el:$("#pie-slice-set")
        // });
        // this.views.push(pieSliceSetView);
        // this.model.push(pieSliceSetView.model);
    }
})