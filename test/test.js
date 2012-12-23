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

    test("样式解析",function(){
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
})