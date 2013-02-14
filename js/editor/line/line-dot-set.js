/*
 line dot样式
 @author  jianping.shenjp
 @date    2013-2-11
*/
var LineDotView = BaseView.extend({
    setDefaultValue:function(){
        this.constructor.__super__.setDefaultValue.apply(this,arguments);
        var self = this;
        //颜色自定义/继承选择
        _.each(this.model.attributes,function(value,key){
            var containe_colortype_choose = $(".containe-colortype-choose[data-key='"+ key +"']",self.$el);
            var colorTypeRadios,for_color_custom,colorInput;
            if(containe_colortype_choose.length){
                colorTypeRadios = $(".colorTypeRadios input[type='radio']",containe_colortype_choose);
                for_color_custom = $(".for-color-custom",containe_colortype_choose);
                if(self._isColor(value)){
                    colorInput = $("input[type='color']",for_color_custom);
                    self.radioChecked(colorTypeRadios,"forCustom");
                    colorInput.val(value);
                    self._changeColorInpus(colorInput);
                }else{
                    self.radioChecked(colorTypeRadios,"inherit#color");
                    self.switchInputEnable(for_color_custom,true);
                }
            }
        })
    },
    events : function(){
        return _.extend(
                {},
                BaseView.prototype.events,
                {
                    "click input[type='radio'][name='color-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='borderColor-group']":"colorTypeSwitchClickHandler"
                }
            );
    },
    //切换color选项，显示\隐藏custom条件下的选择项
    colorTypeSwitchClickHandler:function(e){
        var radio = $(e.target);
        var containe_colortype_choose = radio.closest(".containe-colortype-choose");
        var forColorCustom =  $(".for-color-custom",containe_colortype_choose);
        this.switchForCustomEnable(radio,forColorCustom);
    },
    switchForCustomEnable:function(radio,forColorCustom){
        var isEnable = true;
        if(radio.val()=="forCustom"){
            isEnable = false;
        }
        this.switchInputEnable(forColorCustom,isEnable);
    }
})