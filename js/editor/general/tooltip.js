/*
 tooltip样式
 @author  jianping.shenjp
 @date    2013-1-24
*/
var TooltipModel = Base.extend({
    styleName : "tooltip",
    defaults : function(){
        return {
        }
    }
})

var TooltipView = BaseView.extend({
    defaultAction:function(){
        var backgroundType_checked_radio = $("input[type='radio'][name='backgroundType-group']:checked",this.$el);
        this.switchForSimpleEnable(backgroundType_checked_radio);
    },
    events : function(){
        return _.extend(
                {},
                BaseView.prototype.events,
                {
                    "click input[type='radio'][name='backgroundType-group']":"backgroundTypeGroupClickHandler"
                }
            );
    },
    //隐藏backgroundType为非simple条件下的选择项
    backgroundTypeGroupClickHandler:function(e){
        var radio = $(e.target);
        this.switchForSimpleEnable(radio);
    },
    switchForSimpleEnable:function(radio){
        var forSimple =  this.$el.find(".for-simple");
        var inputs = forSimple.find("input");
        if(radio.val()=="simple"){
            inputs.attr("disabled",false);
        }else{
            inputs.attr("disabled",true);
        }
    }
})