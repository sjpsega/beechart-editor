var path = require('path'), fs = require('fs');

function walk(rootDir,files) {
    var dirlist = fs.readdirSync(rootDir);
    var sub;
    var stat;
    dirlist.forEach(function(file){
        sub = rootDir+"/"+file;
        stat = fs.statSync(sub);
        if(stat.isFile()){
            files.push(sub);
        }else if(stat.isDirectory()){
            walk(sub,files);
        }
    });
    return files;
}

//排除basename以.或者_开头的目录|文件(如.svn,_html,_psd, _a.psd等)
// function defaultFilter(uri){
//     var start = path.basename(uri).charAt(0);
//     if(start === '.' || start === '_'){
//         start = null;
//         return false;
//     }
//     return true;
// }

/**
 * 递归遍历目录文件,获取所有文件路径.
 * @param{String}rootDir
 * @param{Function}filter:过滤函数,返回false就排除目录|文件
 * @return{Object}
 * */
exports.readfiles = function(rootDir, filter) {
    var files = [];
    return walk(rootDir,files);
};
