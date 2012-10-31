var GeneralModel = Backbone.Model.extend({

})

var GeneralView = Backbone.View.extend({
    el:$("#general"),
    initialize:function(){
        this.generalPosSet = this.$("#generalPosSet");
        this.defaultSetting();
    },
    events:{
        "click #generalPosSet input[type='radio']":"generalPosSetChange"
    },
    defaultSetting:function(){

    },
    generalPosSetChange : function(e){
        console.log(e);
    }
})