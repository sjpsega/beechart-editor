# Beechart-Editor

## BeeChart 图表编辑器

[编辑器地址](http://sjpsega.github.com/beechart-editor/)

[BeeChart地址](http://sjpsega.github.com/beechart/)

## 基本逻辑

* 开放Chart的隐藏接口：返回图表默认样式(_returnChartCSS),重绘图表(_updateViewNow),设置图表状态(_setState)
* editor根据flash默认样式和默认数据进行默认设置
* collection收集所有model，model里面有修改，collection有感知，然后设置图表样式
* js做样式解析setStyle,getStyle
* 载入样式，拖拽方式？
* 保存样式，本地保存，html5

## 感谢使用到的开源软件

* [Grunt 0.4+](https://github.com/gruntjs/grunt/wiki/Upgrading-from-0.3-to-0.4)
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [Underscore](http://underscorejs.org/)
* [Backbone](http://backbonejs.org/)
* [FileSaver](https://github.com/eligrey/FileSaver.js)
* [Stylus](https://github.com/LearnBoost/stylus)
* [Jade](https://github.com/visionmedia/jade)
* [uglify](https://github.com/gruntjs/grunt-contrib-uglify)