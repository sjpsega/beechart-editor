/*
 控制单元
 @author  jianping.shenjp
 @date    2012-11-2
*/
var AppModel = Backbone.Collection.extend({
    
})

var AppView = Backbone.View.extend({
    initialize:function(){
        this.flash = this.$el.find("#flash-container");
        this.config_container = this.$el.find("#config-container");
        this.views = [];
        this.render();
    },
    remove:function(){
        _.each(this.views,function(view){
            view.remove();
        });
        this.dispose();
        this.flash.remove();
        this.config_container.children().remove();
        this.chart.off(".flash");
        this.chart = null;
        $(document).off("redrawFlash");
        this.dispose();
        return this;
    },
    render:function(){
        this.config_container.append($(this.options.templateId).html()).hide();
        this.startFlash();
        this.model.on("change",this.modelChange,this);

        //绑定事件对象，否则会出错，会丢失this。新版本流行on来监听事件并绑定对象
        _.bindAll(this,["renderModelAndView"]);
        $(document).one("dataReady",this.renderModelAndView);
        return this;
    },
    startFlash:function(){
        this.flash.fadeIn();
        var self = this;
        var swfMap = {
            "pie":"swf/beechart-pie.swf",
            "line":"swf/beechart-line.swf",
            "bar":"swf/beechart-bar.swf",
            "timeline":"swf/beechart-timeline.swf"
        };
        var dataMap = {
            "pie":"swf/data/pie.xml",
            "line":"swf/data/line.xml",
            "bar":"swf/data/bar.xml",
            "timeline":"swf/data/timeline.json"
        }
        if(this.options.type && this.flash){
            self.chart = this.flash.flash({
                swf        : swfMap[this.options.type],
                width      : 750, 
                height     : 450, 
                allowScriptAccess : "always",
                flashvars  : { 
                  dataUrl : dataMap[this.options.type],
                  debug: (location.search.indexOf("debug=true")>-1) ? true : false
                } 
            });
            self.chart.on("swfReady.flash",function(){
                log("chartStyle",self.chart.getFlash()._returnChartCSS());
                $(document).triggerHandler("hideLoading");
                StyleCenter.getInstance().setStyleSheet(new StyleSheet(self.chart.getFlash()._returnChartCSS()));
            });
        }
        if(self.chart){
            $(document).on("redrawFlash",function(e,data){
                log("redrawFlash",data);
                self.chart.getFlash().parseCSS(data,true);
            })
        }
    },
    renderModelAndView:function(){
        var self = this;
        var renderMap = {
            pie:function(){
                var generalView = new GeneralView({model:self.model});
                self.views.push(generalView);
                var pieView = new PieView({model:self.model});
                self.views.push(pieView);
            },
            line:function(){
                var generalView = new GeneralView({model:self.model});
                self.views.push(generalView);
                var lineView = new LineView({model:self.model});
                self.views.push(lineView);
            },
            bar:function(){
                var generalView = new GeneralView({model:self.model});
                self.views.push(generalView);
                var barView = new BarView({model:self.model});
                self.views.push(barView);
            },
            timeline:function(){
                self.timelineSomethingHide();
                var generalView = new GeneralView({model:self.model});
                self.views.push(generalView);
                var timelineView = new TimelineView({model:self.model});
                self.views.push(timelineView);
            }
        }
        // try{
            self.timelineSomethingShow();
            renderMap[self.options.type]();
            this.config_container.fadeIn();
        // }catch(e){
        //     alert(e);
        // }
    },
    timelineSomethingHide:function(){
        $(".timeline-hide").hide();
    },
    timelineSomethingShow:function(){
        $(".timeline-hide").show();
    },
    modelChange:function(model){
        var changedAttributes = model.changedAttributes();
        log("model change:",model.styleName,changedAttributes);
        var self = this;
        StyleCenter.getInstance().setStyle(model.styleName,changedAttributes);
        if(changedAttributes["animate"]){
            self.chart.getFlash()._setState("setState");
            self.chart.getFlash()._setState("normal");
        }
        
    }
})