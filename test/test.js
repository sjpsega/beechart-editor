jQuery(function($){
    module("Backbone test");

    test("test Collectin",3,function(){
        var aModel = Backbone.Model.extend({
            defaults:{
                name:"sjp",
                age:18
            }
        })
        var bModel = aModel.extend({
            defaults:{
                name:"sjp123",
                age:26
            }
        })
        var myCollection = Backbone.Collection.extend({
            model:aModel
        })

        var col = new myCollection();
        var a  = new aModel();
        var b = new bModel();
        col.add(a);
        col.add(b);
        equal(col.length,2);

        var colChange = false;
        col.on("change",function(){
            colChange=true;
        })
        a.set("age",28);

        equal(a.get("age"),28);
        equal(colChange,true,"Collection can get model attr change");

    });

    module("stylesheet test");

    test("样式解析styleSheet测试",function(){
        var testStr = 
            "/**\
             * QUnit v1.11.0pre - A JavaScript Unit Testing Framework\
             *\
             * http://qunitjs.com\
             *\
             * Copyright 2012 jQuery Foundation and other contributors\
             * Released under the MIT license.\
             * http://jquery.org/license\
             */\
             \
            /* Font Family and Sizes */\
            chart {\
                animate : clockwise;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
        var expected = 
            "chart {\
                animate : clockwise;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
        var styleSheet = new StyleSheet();
        styleSheet.parseCSS(testStr);
        ok(!!styleSheet.getStyle("chart"));
        ok(styleSheet.getStyle("chart")["animate"]=="clockwise");
        ok(!!styleSheet.getStyle("legend item label"));
        ok(styleSheet.getStyle("legend item label")["fontsize"]=="14");
    })
    
    test("styleCenter样式解析测试",3,function(){
        var testStr = 
            "/**\
             * QUnit v1.11.0pre - A JavaScript Unit Testing Framework\
             *\
             * http://qunitjs.com\
             *\
             * Copyright 2012 jQuery Foundation and other contributors\
             * Released under the MIT license.\
             * http://jquery.org/license\
             */\
             \
            /* Font Family and Sizes */\
            chart {\
                animate : clockwise;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
        var expected = {
              "animate": "none",
              "colors": "#FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1",
              "order": "none"
            };
        var styleCenter = StyleCenter.getInstance();
        var styleSheet = new StyleSheet();
        styleSheet.parseCSS(testStr);
        styleCenter.setStyleSheet(styleSheet);
        styleCenter.setStyle("chart",{
                    animate : "none"
                });
        styleCenter.setStyle("chart",{
                    order : "none"
                });
        equal(styleCenter.getStyle("chart")["animate"],"none");
        equal(styleCenter.getStyle("chart")["order"],"none");
        deepEqual(styleCenter.getStyle("chart"),expected);
    })  

    test("返回css文本测试",1,function(){
        var testStr = 
            "/**\
             * QUnit v1.11.0pre - A JavaScript Unit Testing Framework\
             *\
             * http://qunitjs.com\
             *\
             * Copyright 2012 jQuery Foundation and other contributors\
             * Released under the MIT license.\
             * http://jquery.org/license\
             */\
             \
            /* Font Family and Sizes */\
            chart {\
                animate : clockwise;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
        var expected = 
            "chart {\
                animate : none;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
        var styleCenter = StyleCenter.getInstance();
        var styleSheet = new StyleSheet();
        styleSheet.parseCSS(testStr);
        styleCenter.setStyleSheet(styleSheet);
        styleCenter.setStyle("chart",{
                    animate : "none"
                });
        var testStyleSheet = new StyleSheet();
        testStyleSheet.parseCSS(styleCenter.returnCSSText());
        equal(testStyleSheet.getStyle("chart")["animate"],"none");
    })

    module("基本模块测试");
    var BaseModel = Backbone.Model.extend({
        defaults:function(){
            return {
                order : "test"
            }
        }
    });
    var BaseView = Backbone.View.extend({
            initialize : function(){
                var modelClz = this.options.modelClz;
                if(modelClz){
                    this.model = new modelClz(this.options.modelAttributes || {});
                }
            }
        });
    var styleTest = 
            "chart {\
                animate : clockwise;\
                colors  : #FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1;\
                order   : asc;\
            }\
            legend item label {\
                color   : inherit;\
                fontsize   : 14;\
            }";
    var styleSheet = new StyleSheet();
    styleSheet.parseCSS(styleTest);

    test("model设置初始值",2,function(){
        var base = new BaseModel(styleSheet.getStyle("chart"));
        equal(base.get("animate"),"clockwise");
        equal(base.get("order"),"asc");
    });

    test("设置View的model初始值",1,function(){
        var BaseModel = Backbone.Model.extend({});
        var view = new BaseView({
            modelClz : BaseModel,
            modelAttributes : styleSheet.getStyle("chart")
        });
        equal(view.model.get("order"),"asc");
    });

    test("View继承测试",1,function(){
        var AdvView = BaseView.extend({
            initialize:function(){
                AdvView.__super__.initialize.apply(this,arguments);
            }
        });
        var view = new AdvView({
            modelClz : BaseModel,
            modelAttributes : styleSheet.getStyle("chart")
        });
        equal(view.model.get("order"),"asc");
    });
    test("underscore each",function(){
        var obj = {
            startAngle: 0, 
            animate: "clockwise", 
            colors: "#FA6222,#FEC53F,#DBEE27,#87C822,#49AFB1", 
            order: "asc"
        };
        var loop = 0;
        _.each(obj,function(val,key){
            loop+=1;
        });
        equal(loop,4);
    });
})