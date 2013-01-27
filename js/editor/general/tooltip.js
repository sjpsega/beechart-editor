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
        this.showOrHideForSimple(backgroundType_checked_radio);
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
        this.showOrHideForSimple(radio);
    },
    showOrHideForSimple:function(radio){
        var forSimple =  this.$el.find(".for-simple")
        if(radio.val()=="simple"){
            forSimple.fadeIn();
        }else{
            forSimple.fadeOut();
        }
    }
})