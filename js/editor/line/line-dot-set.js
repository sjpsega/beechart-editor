/*
 line dot样式
 @author  jianping.shenjp
 @date    2013-2-11
*/
var LineDotView = ColorTypeChooseView.extend({
    events : function(){
        return _.extend(
                {},
                BaseView.prototype.events,
                {
                    "click input[type='radio'][name='color-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='borderColor-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='color.hl-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='borderColor.hl-group']":"colorTypeSwitchClickHandler"
                }
            );
    }
})