/*
 通用样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var GeneralView = Backbone.View.extend({
    initialize:function(){
        this.views = [];
        this.defaultSetting();
    },
    remove:function(){
        _.each(this.views,function(view){
            view.remove();
        });
        GeneralView.__super__.remove.apply(this,arguments);
        return this;
    },
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
        
    }
})