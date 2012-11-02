/*
 配置JS
 @author  jianping.shenjp
 @date    2012-11-2
*/
jQuery(function($) {
    var appView = new AppView({
        el: $("body"),
        model: new AppModel(),
        type: "pie"
    });
})
