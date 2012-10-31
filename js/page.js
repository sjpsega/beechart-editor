jQuery(function($) {
    var appView = new AppView({
        el: $("body"),
        model: new AppModel(),
        type: "pie"
    });
})
