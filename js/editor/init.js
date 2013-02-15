/*
 初始js函数
 @author  jianping.shenjp
 @date    2012-11-2
*/
jQuery(function($) {
    try{
        var start = {
            init:function(){
                this.btnEvent();
                this.chartTypeSwitchModel();
            },
            btnEvent:function(){
                $("#switch").click(function(e){
                    e.preventDefault();
                });
                $("#download").click(function(e){
                    e.preventDefault();
                    var blob = new Blob([StyleCenter.getInstance().returnCSSText()], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "chart.css");
                });
            },
            chartTypeSwitchModel:function(){
                var model = $("#chart-type-switch-modal");
                var currentBtn,
                lastAppView,
                lastChoiseType;
                model.modal();
                var btns = $(".chart-types button",model);
                var confirmBtn = $(".confirm.btn",model);
                var modal_backdrop = $(".modal-backdrop");
                modal_backdrop.click(function(e){
                    if(!btns.hasClass("active")){
                        e.preventDefault();
                    }
                });
                //点击事件必须绑定在document上处理，因为bootstrap默认在document上绑定并处理事件，
                //如果这里不再document上绑定处理，会在bootstrap处理事件之前接受到事件，会影响这里的逻辑判断。
                $(document).on("click",".chart-types button",function(e){
                    currentBtn = $(this);
                    btns.removeClass("active");
                    currentBtn.addClass("active");
                    switchType();
                });
                function switchType(){
                    if(!currentBtn){
                        return;
                    }
                    var charttype = currentBtn.data("charttype");
                    if(lastChoiseType == charttype){
                        model.modal("hide");
                        return;
                    }
                    newFlashContainer();
                    lastChoiseType = charttype;
                    if(lastAppView){
                        lastAppView.remove();
                    }
                    lastAppView = new AppView({
                        el: $("body"),
                        model: new AppModel(),
                        type: charttype,
                        templateId:"#"+charttype+"-config"
                    });
                    model.modal("hide");
                }
                function newFlashContainer(){
                    $(".flash-container").append("<div id='flash-container' class='well hide ui-flash'>");
                }
            }
        }
        start.init();
    }catch(e){
        console.log(e);
    }
})
