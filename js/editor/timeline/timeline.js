/*
 时间线图专有样式
 @author  jianping.shenjp
 @date    2013-2-16
*/
var TimelineView = ChartView.extend({
    defaultSetting:function(){
        var lineStyleView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("line"),
            styleName : "line",
            el:$("#line-style-set")
        });
        this.views.push(lineStyleView);
        this.model.push(lineStyleView.model);

        var guideLineView = new BaseView({
            modelClz:BaseModel,
            modelAttributes : StyleCenter.getInstance().getStyle("guideline"),
            styleName : "guideLine",
            el:$("#guideLine-set")
        });
        this.views.push(guideLineView);
        this.model.push(guideLineView.model);
    }
})