/*
 样式区块基类
 @author  jianping.shenjp
 @date    2012-11-2
*/
var BaseModel = Backbone.Model.extend({
    
});

var BaseView = Backbone.View.extend({
    initialize : function(){
        var modelClz = this.options.modelClz;
        if(modelClz){
            this.model = new modelClz(this.options.modelAttributes || {});
        }
        if(this.options.styleName){
            this.model.styleName = this.options.styleName;
        }
        modelClz = null;
        this.defaultSetting();
        this.setDefaultValue();
        this.defaultAction();
    },
    defaultSetting:function(){
    },
    /**
     * 设置初始值
    */
    setDefaultValue:function(){
        var self = this;
        log(this.model.styleName,this.model.attributes);
        _.each(this.model.attributes,function(value,key){
            var inputs = $(".containe[data-key='"+ key +"'] input",self.$el);
            var input_type,temp,itemValue;
            if(inputs.length){
                input_type = inputs.attr("type");
                itemValue = self.model.get(key);
                if(input_type == "number"){
                    inputs.val(itemValue);
                }
                if(input_type == "radio"){
                    self.radioChecked(inputs,itemValue);
                }
                if(input_type == "range"){
                    inputs.val(itemValue);
                    inputs.next().text(itemValue);
                }
                if(input_type == "color"){
                    if(self._isColor(itemValue)){
                        inputs.val(itemValue);
                    }
                }
                if(inputs.hasClass("color-input")){
                    self._setColorInputValAndBorderColor(inputs,itemValue);
                }
                inputs = null;
            }
        })
    },
    defaultAction:function(){
    },
    events:{
        "click input[type='radio']":"clickRadioHandler",
        "keyup input[type='number']":"changeNumberHandler",
        "change input[type='number']":"changeNumberHandler",
        "change input[type='range']":"changeNumberHandler",
        "change input[type='color']":"colorTypeInputValueChangeHanlder",
        "keyup input.color-input":"colorInputValueChangeHanlder"
    },
    radioChecked:function(radios,checkedVal){
        var temp;
        _.each(radios,function(radio){
            temp = $(radio);
            if(temp.val() == checkedVal){
                temp.prop("checked",true);
            }
            temp = null;
        });
    },
    /*
    *修改color选择框的同时，修改color输入框的值
    */
    colorTypeInputValueChangeHanlder:function(e){
        var colorTypeInput = $(e.target);
        this._changeColorInputByColorTypeInput(colorTypeInput);
        this.valueChangeHanlder(e);
    },
    /*
    * 修改color输入框的同时，修改color选择框的值
    */
    colorInputValueChangeHanlder:function(e){
        var colorInput = $(e.target);
        var colorInputVal = colorInput.val()
        if(!this._isColor(colorInputVal)){
            return;
        }
        colorInput.css("borderColor",colorInputVal);
        var colorTypeInput = colorInput.prev();
        colorTypeInput.val(colorInputVal);
        this.valueChangeHanlder(e);
    },
    /*
    * 根据color选择框的值修改输入框的值和背景颜色
    */
    _changeColorInputByColorTypeInput:function(colorTypeInput){
        var colorTypeInput = colorTypeInput;
        var colorInput = colorTypeInput.next();
        this._setColorInputValAndBorderColor(colorInput,colorTypeInput.val());
    },
    _setColorInputValAndBorderColor:function(input,color){
        if(this._isColor(color)){
            input = input.filter(".color-input");
            input.val(color);
            input.css("borderColor",color);
        }
    },
    _isColor:function(color){
        var colorReg = /^#([0-9]|[a-f]){6}$/i;
        return colorReg.test(color);
    },
    clickRadioHandler : function(e){
        this.valueChangeHanlder(e);
    },
    changeNumberHandler : function(e){
        var jq_target = $(e.target);
        if(jq_target.is("input[type='range']")){
            jq_target.next().text(jq_target.val());
        }
        this.valueChangeHanlder(e);
    },
    valueChangeHanlder : function(e){
        var target = $(e.target);
        var well = target.closest(".containe")
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey,propertyVal);
    },
    switchInputEnable:function(jq_content,isEnable){
        var inputs = $("input",jq_content);
        if(isEnable){
            inputs.attr("disabled",false);
        }else{
            inputs.attr("disabled",true);
        }
    }
});
