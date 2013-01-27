# BeeChart 图表样式整理

图表样式：

~~~
chart {
    colors          : #E34F1E,#84BC0D,#00ABD9,#FF00A8;
}
line {
    thickness.active : 3;
}
~~~
对应说明：

    chart(作用域)
        smoot(参数名称)                boolean值(取值)                  切换效果是否平滑过度(参数含义)

    line(作用域)
        thickness(参数名称)            number值(取值)                   线条的粗细(参数含义)

## 公共样式

    chart
        smooth                   boolean值                      切换效果是否平滑过度
        colors                   css颜色值，以","分隔           图表预设的颜色取值

    tooltip(提示)
        color(只在单条线下有效)         css颜色值                      文字颜色值
        backgroundType                  slash(特定)\simple(常规)       背景形式
        backgroundColor(simple有效)     css颜色值                      背景颜色值
        backgroundAlpha(simple有效)     number值(0-1)                  背景透明度
        borderColor(simple有效)         css颜色值                      边框的颜色
        borderThickness(simple有效)     number值                       边框的线条粗细
        borderAlpha(simple\slash有效)   number值(0-1)                  边框的线条透明度

    legend(数据集标记)
        position                 none\top\bottom\left\right\inner     放置位置
        align                    left\right\center                    水平对齐方式，position为top\bottom情况下有效
        valign                   top\middle\bottom                    竖直对齐方式，position为left\right情况下有效
        paddingLeft              number值                             与图表左边边界的距离
        paddingRight             number值                             与图表右边边界的距离
        paddingBottom            number值                             与图表底部边界的距离
        paddingTop               number值                             与图表顶部边界的距离
        itemEachColumn           number值（默认4）                    每一行最多的legend item数量
        interactive              boolean值                            是否可交互（允许用户切换对应数据的显示和隐藏）

    legend item
        iconType                 square|checkbox                 legend item的图标类型，默认是checkbox

    legend item label(数据集标记label)
        color                     inherit\css颜色值              label颜色值

## 轴线图表样式(Line、TimeLine、Bar)

    chart
        paddingLeft              number值                       图表显示区域左内边距
        paddingRight             number值                       图表显示区域右内边距
        paddingTop               number值                       图表显示区域上内边距
        paddingBottom            number值                       图表显示区域下内边距
        leftAxisVisibility       visible、invisible              y轴是否可见
        animate                  boolean值                      是否有初始动画
        enableTooltip            boolean值                      提示是否可用

    xAxis(x轴)
        tickLength               number值                       x轴数据断点的长度
        lineThickness            number值                       x轴线的粗细
        lineColor                css颜色值                      x轴线的颜色

    xAxis label
        color                    css颜色值                      label颜色值
        paddingLeft              number值                       label左内边距
        paddingRight             number值                       label右内边距

    yAxis(y轴)
        tickLength               number值                       y轴数据断点的长度
        lineThickness            number值                       y轴线的粗细
        lineColor                css颜色值                      y轴线的颜色

    canvas(背景)
        backgroundColor          css颜色值                      背景颜色值
        backgroundColor2         css颜色值                      背景颜色值(与backgroundColor配合完成间隔颜色效果)
        borderColor              css颜色值                      边框的颜色
        borderThickness          number值                       边框的线条粗细
        borderAlpha              number值(0-1)                  边框的线条透明度
        priLineThickness         number值                       横线粗细
        priLineColor             css颜色值                      横线颜色值
        priLineAlpha             number值(0-1)                  横线透明度
        priLineStyle             dashed(虚线)/normal            横线绘制方式
        secLineThickness         number值                       竖线粗细
        secLineColor             css颜色值                      竖线颜色值
        secLineAlpha             number值(0-1)                  竖线透明度
        secLineStyle             dashed(虚线)/normal            竖线绘制方式

## Line特有样式

    line(特有状态.active)
        lineMethod               curve(曲线)\line(直线)                         线条绘制方式
        dropShadow               light\none                                     线条阴影
        thickness                number值                                       线条的粗细
        fillType                 gradient(竖直渐变)\normal                      线条辐射区的绘制方式
        fileAplha                number值(0-1)                                  线条辐射区的透明度

    line dot(特有状态.hl)
        shape                    circle\square\diamond                          点的形状
        dropShadow               light\none                                     点阴影
        radius                   number值                                       点的半径
        colors                   inherit(继承，即与线条颜色一致)、number值      点的颜色
        borderColor              inherit#color(继承，即与线条颜色一致)、css颜色值                                      点边框的颜色
        borderThickness          number值                                       点边框的线条粗细
        borderAlpha              number值(0-1)                                  点边框的线条透明度

    guideLine(引导线)
        color                    css颜色值                                      线条颜色

## TimeLine特有样式
    
    line
        thickness                number值                                       线条的粗细

    guideLine(引导线)
        color                    css颜色值                                      线条颜色

## Bar、HBar特有样式

    bar(特有状态.hl)
        dropShadow              light\none                  阴影
        borderThickness         number值                    柱形边框线条粗细
        borderColor             css颜色值                   柱形边框颜色
        borderAlpha             number值(0-1)               柱形边框透明度
        brightnessFading        number值((-1)-1)            柱形颜色渐变值
        color                   css颜色值                   柱形的颜色
        backgroundType          slash(特定)\simple(常规)    背景形式
        valueVisibility         visible\none                柱形顶部是否显示数值
    
## Pie特有样式
    
    chart
        animate                  clockwise、counter_clockwise、composite、expand                      初始动画类型
        startAngle               number值                                                             圆饼放置的初始角度
    slice   
        labelPosition                none\normal\inside\inside!\outside\callout   圆饼对应label放置的方式
        frameThickness               number值                   圆饼边框线条粗细
        frameColor                   css颜色值                  圆饼边框线条颜色值
        pieSliceAlpha                number值(0-1)              圆饼的透明度
        pieLineThickness             number值                   圆饼与label连线的线条粗细
        pieLineAlpha                 number值(0-1)              圆饼与label连线的透明度
        offsetRadius                 number值                   圆饼与中心的距离
        donutThickness               number值                   圆环的粗细(圆环图)
        donutMaskAlpha               number值(0-1)              圆饼内圈透明度(圆环图)
        donutMaskColor               css颜色值                  圆饼内圈颜色值(圆环图)
