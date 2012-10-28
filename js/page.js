jQuery(function($){
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
    console.log(col.length);
})