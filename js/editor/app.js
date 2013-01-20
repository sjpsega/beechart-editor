/*
 控制单元
 @author  jianping.shenjp
 @date    2012-11-2
*/
var AppModel = Backbone.Collection.extend({
    
})

var AppView = Backbone.View.extend({
    chart : null,
    initialize:function(){
        this.flash = this.$el.find(".flash-container");
        this.views = [];
        this.render();
    },
    render:function(){
        this.startFlash();
        this.model.on("change",this.modelChange);
        
        //绑定事件对象，否则会出错，会丢失this。新版本流行on来监听事件并绑定对象
        _.bindAll(this,["renderModelAndView"]);
        $(document).one("dataReady",this.renderModelAndView);
    },
    startFlash:function(){
        if(this.options.type=="pie" && this.flash){
            chart = this.flash.flash({
                swf        : 'swf/beechart-pie.swf',
                width      : 750, 
                height     : 450, 
                allowScriptAccess : "always",
                flashvars  : { 
                  dataUrl : 'swf/data/site-reffers.xml',
                  debug:true
                } 
            });
            chart.on("swfReady.flash",function(){
                log("chartStyle",chart.getFlash()._returnChartCSS());
                StyleCenter.getInstance().setStyleSheet(new StyleSheet(chart.getFlash()._returnChartCSS()));
            });
        }
        if(chart){
            $(document).on("redrawFlash",function(e,data){
                log("redrawFlash",data);
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
        var changedAttributes = model.changedAttributes();
        log("model change:",model.styleName,changedAttributes);
        StyleCenter.getInstance().setStyle(model.styleName,changedAttributes);
        if(changedAttributes["animate"]){
            chart.getFlash()._setState("setState");
            chart.getFlash()._setState("normal");
        }
        
    }
})