beechart-editor
===============

基本逻辑

* 开放的隐藏接口：返回图表默认样式(_returnChartCSS),重绘图表(_updateViewNow),设置图表状态(_setState)
* editor根据flash默认样式和默认数据进行默认设置
* collection收集所有model，model里面有修改，collection有感知，然后设置图表样式
* js需要做样式解析setStyle,getStyle
* 载入样式，拖拽方式？
* 保存样式，本地保存，html5