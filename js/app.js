var AppModel = Backbone.Collection.extend({
    
})

var AppView = Backbone.View.extend({
    initialize:function(){
        this.flash = this.$el.find(".flash-container");
        this.views = [];
        this.render();
    },
    render:function(){
        this.startFlash();
        this.renderModelAndView();
    },
    startFlash:function(){
        if(this.options.type=="pie" && this.flash){
            this.flash.flash({
                swf        : 'http://sjpsega.github.com/beechart/swf/beechart-pie.swf',
                width      : 600, 
                height     : 450, 
                allowScriptAccess : "always",
                flashvars  : { 
                  dataUrl : 'http://sjpsega.github.com/beechart/swf/data/site-reffers.xml'
                } 
            });
        }
    },
    renderModelAndView:function(){
        if(this.options.type=="pie"){
            var generalMod = new GeneralModel();
            this.model.add(generalMod);
            this.views.push(new GeneralView(generalMod));
        }
    }
})