var express = require('express')
,   fs = require('fs')
,   findit = require('findit')
,   jade = require('jade')
,   stylus = require('stylus')
,   connect = require('connect')
,   nib = require('nib')
,   app = express.createServer()
,   watchPaths = ['styl']
,   iconv = require('iconv-lite')
,   watch = require("./node_modules/watch/main");

watch.createMonitor('./styl', function (monitor) {
    // monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    // console.log(monitor.files);
    monitor.on("created", function (f, stat) {
      // Handle file changes
      console.log("created",f,stat);
    })
    monitor.on("changed", function (f, curr, prev) {
      // Handle new files
       
       f = f.replace("\\","/");
       var str = fs.readFileSync(f,'utf-8');
       var fpath = replacePath(f,'css');
       console.log("changed",f,fpath,replacePath("css/a.css","styl"),str);
        compile(str,f)
            .set('path',watchPaths)
            .use(nib())
            .render(function(err,css){
                console.log(err,css);
                if(err){
                    next(err);
                    return
                }
                var buffer = iconv.encode(css, 'utf-8');
                fs.open( fpath, 'w', 0644, function(err,fd){
                    if(err){
                        fs.close(fd)
                        next(err);
                        return
                    }
                    fs.write(fd, buffer, 0, buffer.length, 0, function(e){
                        if(err){
                            fs.close(fd)
                            next(err);
                            return
                        }
                        // res.write(fs.readFileSync(fpath));
                        // res.end();
                        fs.close(fd)
                    });
                });
            });
    })
    monitor.on("removed", function (f, stat) {
      // Handle removed files
       console.log("removed",f);
    })
  }  
)
// nib
var server = connect();

var cssException = ["css/bootstrap.css"];

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
server.use(stylus.middleware({
    src: __dirname
  , compile: compile
}));
//configure
app.configure(function(){
    app.use(express.errorHandler());
    app.use(express.bodyParser());
	app.use(express.logger('dev'));
});

function max(arr){
    var i = 0 
    ,   j = 0
    ,   l = arr.length
    ;
    if(l == 1)return arr[i]
    for(;i<l;i++) {
        if(arr[i]>arr[j])j=i;
    }
    return arr[j]
}
function pathFilesChangeDate(paths,time,type){
    var paths = Array.isArray(paths)?paths:[paths]
    ,   i = 0
    ,   l = paths.length
    ,   f = null
    ,   modifyDates = []
    ;
    for(;i<l;i++){
        var root = paths[i]
        ,   files = findit.sync(paths[i]).filter(function(p){
                return new RegExp('.'+type+'$').test(p);
            })
        ,   le = files.length
        ,   k = 0
        ,   fpath = ''
        ,   mtime = ''
        ;
        for(;k<le;k++){
            mtime = fs.statSync(files[k]).mtime
            if(new Date(mtime) > new Date(time)){
                modifyDates.push(new Date(mtime));
            }
        }
    }
    if( modifyDates.length>0 ){
        return max(modifyDates).toUTCString();
    }
    return false;
}

// '/html/page/a.html' => 'jade/page/a.jade'
function replacePath(fpath,dir,type){
    var fpath = fpath.split('/')
    ,   name
    ,   lastIndex
    ;
    !fpath[0] && fpath.shift();
    if(arguments.length===1){
        return fpath.join('/');
    }
    name = fpath.pop();
    name = name.replace(/(.*)(\.)([^./]+)$/,'$1$2|$3').split('|');
    fpath = fpath.concat(name);
    console.log("name",name,fpath);
    lastIndex = fpath.length - 1;
    dir && (fpath[0] = fpath[fpath.length - 1] = dir)   
    type && (fpath[lastIndex] = type);
    fpath = fpath.join('/').replace(/(.*)(\/)([^/]+)$/,'$1$3');
    return fpath;
}

function findSomeInArray(obj,arr){
    var loop = arr.length;
    for(var i=0;i<loop;i++){
        if(arr[i]===obj){
            return true;
        }
    }
    return false;
}


app.get(/((?:html|css|js|img|swf|)\/)(?:[^/.]+\/)?([^/]+)(?:\.)([\w]+)$/, function(req, res, next){
    //res.send('user ' + req.params.id);
    
    var start = new Date();
    var ftype = req.params[2]
    ,   fname = req.params[1]
    ,   fpath  = replacePath(req.originalUrl) 
    ,   fn = null
    ,   ifModifiedSince = req.headers['if-modified-since']
    ,   isImg = function(type){
            return /^png|jpg|jpeg|gif$/.test(type)
        }
    ,   setHead = function(fpath,type,callback,mtime){
            var notHead = req.method != 'head'
            ,   modifyTime
            ;
            fs.stat(fpath, function(err, stats){
                if(err){
                    next(err);
                    return
                }
                if(mtime) {
                    modifyTime = pathFilesChangeDate( watchPaths, mtime, 'styl' ) 
                    mtime =  modifyTime || mtime; 
                }else{
                    //第一次访问
                    modifyTime = true;
                    mtime = new Date(stats.mtime).toUTCString();
                }
                res.setHeader('Last-Modified', mtime);
                if(isImg(type)){
                    res.setHeader('Content-Type','image/'+type);
                }else{
                    res.setHeader('Content-Type','text/'+type+";charset=utf-8");
                }
                if(notHead){
                    callback(!modifyTime);
                }
            })
        }
    ;

    switch(ftype){
        case 'html':
        //修改html的判断路径，直接在根目录下
        var htmlPath = replacePath(fpath,'');
        var fpaths = fpath.split('.');
        var name = fpaths[0];
        var jadePath = "jade/"+name+".jade";
        setHead(jadePath,'html',function(){
            str = fs.readFileSync(jadePath,'utf-8');
            try{
                str = jade.compile(str, { filename: jadePath, pretty: true })();
                var buffer = iconv.encode(str, 'utf-8');
                if(!str && str!='')throw "jade compile error";
                fs.open( htmlPath, 'w', 0644, function(err,fd){
                    if(err){
                        next(err);
                        fs.close(fd)
                        return
                    }
                    fs.write(fd, buffer, 0, buffer.length, 0, function(e){
                        if(err){
                            next(err);
                            return
                        }
                        res.sendfile(fpath);
                        fs.close(fd);
                    });
                });
            }catch(e){
                res.sendfile(fpath);
            }
        });
        break;
        case 'css':
        //访问swf中的css文件
        if(fpath.indexOf("swf/css") > -1 || findSomeInArray(fpath,cssException)){
            res.sendfile(fpath);
            return;
        }
        var stylusPath = replacePath(fpath,'styl');
        fpath = replacePath(fpath,'css');
        setHead(stylusPath,'css',function(notModify){
            if(notModify){
                res.sendfile(fpath);
                return
            }
            // str = fs.readFileSync(stylusPath,'utf-8');
            // console.log(stylusPath,watchPaths);
            // compile(str,stylusPath)
            //     .set('path',watchPaths)
            //     .use(nib())
            //     .render(function(err,css){
            //         if(err){
            //             next(err);
            //             return
            //         }
            //         var buffer = iconv.encode(css, 'utf-8');
            //         fs.open( fpath, 'w', 0644, function(err,fd){
            //             if(err){
            //                 fs.close(fd)
            //                 next(err);
            //                 return
            //             }
            //             fs.write(fd, buffer, 0, buffer.length, 0, function(e){
            //                 if(err){
            //                     fs.close(fd)
            //                     next(err);
            //                     return
            //                 }
            //                 res.write(fs.readFileSync(fpath));
            //                 res.end();
            //                 fs.close(fd)
            //             });
            //         });
            //     });
        },ifModifiedSince);            
        break;
        case 'js':
            fpath = replacePath(fpath,'js');
            res.sendfile(fpath);
        break;
        case 'png': case 'jpg': case 'jpeg': case 'gif':
            fpath = replacePath(fpath,'img',ftype);
            ftype = (ftype == 'jpg'||ftype == 'jpeg') ? 'jpeg' : ftype;
            res.sendfile(fpath);
        break;
         case 'swf': case 'json': case 'xml':
            res.sendfile(fpath);
        break;
        default :
            res.write('Error: ENOENT, no such file \''+fname+'.'+ftype+'\'');
            res.end();
        break;

    }
});
app.listen(80);
// app.listen(3000);


