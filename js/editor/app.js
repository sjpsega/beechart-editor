/*
 控制单元
 @author  jianping.shenjp
 @date    2012-11-2
*/
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
        this.model.on("change",this.modelChange);
    },
    startFlash:function(){
        var chart;
        if(this.options.type=="pie" && this.flash){
            chart = this.flash.flash({
                swf        : 'http://sjpsega.github.com/beechart/swf/beechart-pie.swf',
                width      : 750, 
                height     : 450, 
                allowScriptAccess : "always",
                flashvars  : { 
                  dataUrl : 'http://sjpsega.github.com/beechart/swf/data/site-reffers.xml',
                  debug:true
                } 
            });
        }
        if(chart){
            $(document).on("redrawFlash",function(e,data){
                console.log("redrawFlash",data);
                chart.getFlash().parseCSS(data,true);
            })
        }
    },
    renderModelAndView:function(){
        if(this.options.type=="pie"){
            var generalView = new GeneralView({model:this.model});
            this.views.push(generalView);
            var pieView = new PieView({model:this.model});
            this.views.push(pieView);
        }
    },
    modelChange:function(model){
        console.log("model change",model.styleName,model.changedAttributes());
        StyleCenter.getInstance().setStyle(model.styleName,model.changedAttributes());
    }
})