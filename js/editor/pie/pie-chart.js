/*
 chart下的pie专有属性
 @author  jianping.shenjp
 @date    2012-11-2
*/
var PieInChartModel = Base.extend({
    styleName : "chart"
})

var PieInChartView = BaseView.extend({
    el:$("#pie-chart-set"),
    // initialize:function(){
    //     this.model = new PieInChartModel();
    //     this.defaultSetting();
    // },
    events:{
        "click input":"clickHandler"
    },
    // defaultSetting:function(){
    //     _.bindAll(this,["dataReadyHandler"]);
    //     jQuery(document).one("dataReady",this.dataReadyHandler);
    // },
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
                    temp = null;
                });
            }
        }
    },
    clickHandler : function(e){
        var target = $(e.target);
        var well = target.closest(".containe");
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey,propertyVal);
    }
})