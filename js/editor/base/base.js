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
        this.dataReadyHandler();
    },
    defaultSetting:function(){
        // _.bindAll(this,["dataReadyHandler"]);
        // jQuery(document).one("dataReady",this.dataReadyHandler);
    },
    dataReadyHandler:function(){
    }
});