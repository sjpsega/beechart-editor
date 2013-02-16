/*
 bar样式
 @author  jianping.shenjp
 @date    2013-2-15
*/
var BarStyleView = ColorTypeChooseView.extend({
   events : function(){
        return _.extend(
                {},
                BaseView.prototype.events,
                {
                    "click input[type='radio'][name='color-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='color.hl-group']":"colorTypeSwitchClickHandler"
                }
            );
    },
})