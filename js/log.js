/**
* simple log
*/
window.log = function(){
    if(location.search.indexOf("debug=true")>-1){
        console.log.apply(console,arguments);
    }
}