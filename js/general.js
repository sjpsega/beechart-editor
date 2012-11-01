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