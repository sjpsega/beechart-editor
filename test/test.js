jQuery(function($){
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

})