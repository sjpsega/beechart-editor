/*
 Legend
 @author  jianping.shenjp
 @date    2012-11-2
*/
var LegendModel = Backbone.Model.extend({
})

var LegendView = Backbone.View.extend({
    el:$("#legend-set"),
    initialize:function(){
        this.model = new LegendModel();
        this.defaultSetting();
    },
    events:{
        "click input[type='radio']":"generalPosSetChange"
    },
    defaultSetting:function(){
        //绑定事件对象，否则会出错，会丢失this。新版本流行on来监听事件并绑定对象
        _.bindAll(this,["dataReadyHandler"]);
        jQuery(document).one("dataReady",this.dataReadyHandler);
    },
    dataReadyHandler:function(){
        var styleObj = StyleCenter.getInstance().getStyle("legend");
        var radios;
        var value;
        var temp;
        if(!_.isEmpty(styleObj)){
            if(styleObj["position"]){
                radios = this.$el.find(".containe input:radio[name='position-group']");
                value = styleObj["position"];
                jQuery.each(radios,function(index,item){
                    temp = $(item);
                    if(temp.val()==value){
                        temp.prop("checked",true);
                    }
                });
            }
        }
    },
    generalPosSetChange : function(e){
        var target = $(e.target);
        var well = target.closest(".containe");
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey,propertyVal);
    }
})