beechart-editor
===============

基本逻辑

* flash 开放获取目前样式的接口，外界可以获得flash的现有样式，然后根据样式显示(_returnChartCSS)；开放图表重绘接口(_updateViewNow)；
* editor根据flash默认样式和默认数据进行默认设置
* collection收集所有model，model里面有修改，collection有感知，然后设置图表样式
* js需要做样式解析setStyle,getStyle
* 载入样式，拖拽方式？
* 保存样式，本地保存，html5