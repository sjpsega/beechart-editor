var LegendModel = Backbone.Model.extend({
    styleName : "legend",
    defaults:function(){
        return {
            position:"bottom",
            align:"center"
        }
    }
})

var LegendView = Backbone.View.extend({
    el:$("#generalPosSet"),
    initialize:function(){
        this.model = new LegendModel();
        this.defaultSetting();
    },
    events:{
        "click input[type='radio']":"generalPosSetChange"
    },
    defaultSetting:function(){

    },
    generalPosSetChange : function(e){
        var target = $(e.target);
        var well = target.closest(".well");
        // var styleName = well.data("style");
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        // console.log(styleName,propertyKey,propertyVal,{propertyKey:propertyVal});
        // var obj = {};
        // obj[propertyKey] = propertyVal;
        this.model.set(propertyKey,propertyVal);
    }
})