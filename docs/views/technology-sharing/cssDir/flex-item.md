---
title: Flex 布局详解 -- 项目属性
date:  2020-04-02
categories:
- CSS
tags:
- Flex 布局
---

## order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

    .item {
        order: <integer>;
    }

<div class="box box-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
	<div class="box-item">4</div>
</div>

<div class="box box-2">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
	<div class="box-item">4</div>
</div>

## flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

    .item {
        flex-grow: <number>; /* default 0 */
    }

如果所有项目的`flex-grow`属性都为`1`，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为`2`，其他项目都为`1`，则前者占据的剩余空间将比其他项多一倍。

<div class="box grow-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
</div>

<div class="box grow-2">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
</div>

## flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

    .item {
        flex-shrink: <number>; /* default 1 */
    }

如果所有项目的`flex-shrink`属性都为`1`，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为`0`，其他项目都为`1`，则空间不足时，前者不缩小。

> 负值对该属性无效。

<div class="box shrink-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
    <div class="box-item">4</div>
	<div class="box-item">5</div>
    <div class="box-item">6</div>
</div>

<div class="box shrink-2">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
    <div class="box-item">4</div>
	<div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
</div>

## flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

    .item {
        flex-basis: <length> | auto; /* default auto */
    }

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

<div class="box basis-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
</div>

## flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### auto
<div class="box flex-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
</div>

### none
<div class="box flex-2">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
</div>

## align-self属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

    .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

<div class="box self-1">
	<div class="box-item">1</div>
	<div class="box-item">2</div>
	<div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

## **完结撒花:tada::tada::tada:**

<style src="./css/flex-item.scss" lang="scss"></style>

<style lang="stylus" scoped>
@media (max-width: $MQMobile) {
    .box-item {
        width: 75px;
        height: 75px;
        line-height: 75px;
        font-size: 24px;
        position: relative;


        &::before {
            font-size: 16px;
            position: absolute;
            top: 0px !important;
            left: 0px !important;
            color: red;
            line-height: 20px;
            margin-left: 10px;
            text-align: left;
        }
    }
}
</style>