/*
 通用样式
 @author  jianping.shenjp
 @date    2012-11-2
*/
var GeneralView = Backbone.View.extend({
    el:$("#general"),
    initialize:function(){
        this.views = [];
        this.defaultSetting();
    },
    events:{
    },
    defaultSetting:function(){
        var legendView = new LegendView();
        this.views.push(legendView);
        this.model.push(legendView.model);
    }
})