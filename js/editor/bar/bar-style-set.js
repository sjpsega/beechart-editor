/*
 bar样式
 @author  jianping.shenjp
 @date    2013-2-15
*/
var BarStyleView = BaseView.extend({
    setDefaultValue:function(){
        LineDotView.__super__.setDefaultValue.apply(this,arguments);
        var self = this;
        //颜色自定义/继承选择
        _.each(this.model.attributes,function(value,key){
            var containe_colortype_choose = $(".containe-colortype-choose[data-key='"+ key +"']",self.$el);
            var colorTypeRadios,for_color_custom,colorTypeInput;
            if(containe_colortype_choose.length){
                colorTypeRadios = $(".colorTypeRadios input[type='radio']",containe_colortype_choose);
                for_color_custom = $(".for-color-custom",containe_colortype_choose);
                if(self._isColor(value)){
                    colorTypeInput = $("input[type='color']",for_color_custom);
                    self.radioChecked(colorTypeRadios,"forCustom");
                    colorTypeInput.val(value);
                    self._changeColorInputByColorTypeInput(colorTypeInput);
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
                    "click input[type='radio'][name='borderColor-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='color.hl-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='borderColor.hl-group']":"colorTypeSwitchClickHandler"
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
        var isEnable = false;
        if(radio.val()=="forCustom"){
            isEnable = true;
        }
        this.switchInputEnable(forColorCustom,isEnable);
    },
    /**
    * 重写valueChangeHanlder方法
    * 完善用户切换"自定义"的颜色设置
    */
    valueChangeHanlder : function(e){
        var target = $(e.target);
        var well = target.closest(".containe")
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        if(!well.length){
            well = target.closest(".containe-colortype-choose");
        }
        propertyKey = well.data("key");
        propertyVal = target.val();
        if(propertyVal == "forCustom"){
            propertyVal = $(".for-color-custom .color-input",well).val();
        }
        this.model.set(propertyKey,propertyVal);
    },
})/*
 line dot样式
 @author  jianping.shenjp
 @date    2013-2-11
*/
var LineDotView = BaseView.extend({
    setDefaultValue:function(){
        LineDotView.__super__.setDefaultValue.apply(this,arguments);
        var self = this;
        //颜色自定义/继承选择
        _.each(this.model.attributes,function(value,key){
            var containe_colortype_choose = $(".containe-colortype-choose[data-key='"+ key +"']",self.$el);
            var colorTypeRadios,for_color_custom,colorTypeInput;
            if(containe_colortype_choose.length){
                colorTypeRadios = $(".colorTypeRadios input[type='radio']",containe_colortype_choose);
                for_color_custom = $(".for-color-custom",containe_colortype_choose);
                if(self._isColor(value)){
                    colorTypeInput = $("input[type='color']",for_color_custom);
                    self.radioChecked(colorTypeRadios,"forCustom");
                    colorTypeInput.val(value);
                    self._changeColorInputByColorTypeInput(colorTypeInput);
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
                    "click input[type='radio'][name='borderColor-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='color.hl-group']":"colorTypeSwitchClickHandler",
                    "click input[type='radio'][name='borderColor.hl-group']":"colorTypeSwitchClickHandler"
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
        var isEnable = false;
        if(radio.val()=="forCustom"){
            isEnable = true;
        }
        this.switchInputEnable(forColorCustom,isEnable);
    },
    /**
    * 重写valueChangeHanlder方法
    * 完善用户切换"自定义"的颜色设置
    */
    valueChangeHanlder : function(e){
        var target = $(e.target);
        var well = target.closest(".containe")
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        if(!well.length){
            well = target.closest(".containe-colortype-choose");
        }
        propertyKey = well.data("key");
        propertyVal = target.val();
        if(propertyVal == "forCustom"){
            propertyVal = $(".for-color-custom .color-input",well).val();
        }
        this.model.set(propertyKey,propertyVal);
    },
})