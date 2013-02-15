/*
 图表区块设置基类
 @author  jianping.shenjp
 @date    2012-11-2
*/
var ChartView = Backbone.View.extend({
    initialize:function(){
        this.views = [];
        this.defaultSetting();
    },
    remove:function(){
        _.each(this.views,function(view){
            view.remove();
        });
        return ChartView.__super__.remove.apply(this,arguments);;
    },
    defaultSetting:function(){

    }
})