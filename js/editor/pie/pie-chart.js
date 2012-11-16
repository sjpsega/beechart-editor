/*
 chart下的pie专有属性
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieInChartModel = Backbone.Model.extend({
    styleName : "chart",
    defaults:function(){
        return {
            animate:"clockwise",
            startAngle:0
        }
    }
})

var PieInChartView = Backbone.View.extend({
    el:$("#pie-chart-set"),
    initialize:function(){
        this.model = new PieInChartModel();
        this.defaultSetting();
    },
    events:{
        "click input[type='radio']":"clickHandler"
    },
    defaultSetting:function(){

    },
    clickHandler : function(e){
        var target = $(e.target);
        var well = target.closest(".containe");
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey,propertyVal);
    }
})