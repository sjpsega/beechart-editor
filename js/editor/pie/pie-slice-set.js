/*
 pie slice属性
 @author  jianping.shenjp
 @date    2013-1-13
*/
var PieSliceSetModel = Base.extend({
    styleName : "slice",
    defaults : function(){
        return {
            labelPosition  : "callout",
            frameThickness : 0
        }
    }
})

var PieSliceSetView = BaseView.extend({
    el:$("#pie-slice-set")
})