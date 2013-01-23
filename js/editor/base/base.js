var Base = Backbone.Model.extend({
    
});

var BaseView = Backbone.View.extend({
    initialize : function(){
        var modelClz = this.options.modelClz;
        if(modelClz){
            this.model = new modelClz(this.options.modelAttributes || {});
        }
        modelClz = null;
        this.defaultSetting();
        this.setDefaultValue();
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
            console.log(self.$el,key,".containe[data-key='"+ key +"'] input",inputs.length,$(".containe input",self.$el).length);
            var input_type,temp,itemValue;
            if(inputs.length){
                input_type = inputs.attr("type");
                itemValue = self.model.get(key);
                if(input_type == "number"){
                    inputs.val(itemValue);
                }
                if(input_type == "radio"){
                    _.each(inputs,function(input){
                        temp = $(input);
                        if(temp.val() == itemValue){
                            temp.prop("checked",true);
                        }
                        temp = null;
                    });
                }
                inputs = null;
            }
        })
    },
    events:{
        "click input[type='radio']":"clickRadioHandler",
        "keyup input[type='number']":"changeNumberHandler",
        "change input[type='number']":"changeNumberHandler"
    },
    clickRadioHandler : function(e){
        this.valueChangeHanlder(e);
    },
    changeNumberHandler : function(e){
        this.valueChangeHanlder(e);
    },
    valueChangeHanlder : function(e){
        var target = $(e.target);
        var well = target.closest(".containe");
        var propertyKey = well.data("key");
        var propertyVal = target.val();
        this.model.set(propertyKey,propertyVal);
    }
});
