/*
 Chart样式
 @author  jianping.shenjp
 @date    2013-1-24
*/
var CommonModel = BaseModel.extend({
    styleName : "chart",
    defaults : function(){
        return {
        }
    }
})

var CommonView = BaseView.extend({
    events : function(){
        return _.extend(
                {},
                BaseView.prototype.events,
                {
                    "click input[type='radio'][name='leftAxisVisibility-group']":"leftAxisVisibilityGroupClickHandler"
                }
            );
    },
    //切换leftAxisVisibility,隐藏选项
    leftAxisVisibilityGroupClickHandler:function(e){
        var radio = $(e.target);
        var forYAxisVisible =  $("#for-yAxis-visible");
        var isEnable = true;
        if(radio.val()== "invisible"){
            isEnable = false;
        }
        this.switchInputEnable(forYAxisVisible,isEnable);
    }
})