---
order: 8
title: Layout 的全新样式
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2020-04-21
---

随着 antd 正式版的发布，layout 也将迎来全新的设计风格。新的风格仍然会以科技的风格为主，在原来的基础上优化尺寸和体验细节，设计更加简洁，匹配更多业务场景。

## AntDesign Pro  主要修改点

| 内容 | 修改点 |
| --- | --- |
| 导航尺寸 | 顶部导航高度由  AntDesign Pro 64px 改为 48px- 侧边导航宽度由 AntDesign Pro 256px 改为 208px |
| 导航布局模式 | 在原来单一侧边或顶部导航模式基础上，增加一种混合模式，与 TechUI 现有模式统一 |
| 顶部导航细节优化 | 全局搜索样式修改，与顶部菜单交互修改，打开搜索挤压菜单后，关闭搜索回到正常态- 实用工具区 Hover 颜色修改，由蓝色改为深黑色 `#161726` |
| 侧边导航细节优化 | 在侧边导航增加自定义辅助功能操作，如下拉筛选- 侧边导航展开收起图标修改，放置在侧边导航底部- 增加菜单名过长，菜单高度小信息隐藏交互 默认修改为固定模式 |
| 混合模式 | 顶部导航提供自定义顶部导航与原来一致，但是增加一个通透的顶栏 |

## 导航菜单部分

### 结构与尺寸

侧边导航宽度由  256px 改为 208px，导航内容与前后边距改为 16px。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/sEHoMffUP%26/1586503920221-16d9c22e-1373-40c9-8d08-e6edf5c68ee2.png)

### 自定义辅助操作

增加自定义辅助操作，如下拉筛选（业务诉求）。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/gScRFjhdce/1586503972482-1f62c5ec-e6ce-478f-a7c6-2362d7c888f1.png)

### 菜单过长过多交互

菜单名过长，缩略展示，hover 出现全部 tooltip 提示。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/4gtxYL3HP8/1586505237583-656e788e-d9d0-4d14-9278-dac102b9edd0.png)

菜单名过多或出现折叠时，顶部标题产品标题区，辅助操作区和底部通用操作区固定，中间功能菜单区进行滑动。上下区域出现阴影分割。

## 顶部导航交互部分

交互和导航的改动是本次最大的改变。

### 结构与尺寸

顶部导航高度由 64px 改为 48px。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/UtfyUhUaSV/1586502220305-25adb29e-5609-4eda-b4c4-ca117ec52580.png)

### 颜色版本

继续提供暗色、亮白颜色版本，暗色颜色由 `#001529` 改为金融云导航（OneX）同样深色 `#1F293D`

![image.png](https://gw.alipayobjects.com/zos/antfincdn/BnkRy%26WUJ9/1586502256521-88d3b504-de75-4ac0-a7c9-d6cd15bcae99%252520%281%29.png)

### 搜索交互优化

搜索激活样式修改，打开搜索挤压菜单后，关闭搜索回到正常态。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/0Xx9XYePgQ/1586503735289-59c77d00-2428-49a8-9bd2-d47330e2831c%252520%281%29.png)

### 实用工具 Hover 效果优化

实用工具 Hover 由蓝色背景色改为深黑色 `#161726`。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/dvccJS41Tl/1586503854420-8236a5b9-66da-48a7-9f58-ea5c40a3b479.png)

## 混合菜单新模式

新的模式混合菜单：可以让顶部全局导航+侧边导航混合模式同时出现

![image.png](https://gw.alipayobjects.com/zos/antfincdn/HSeAGqaEwn/1586504755352-479bf47d-97a6-4080-afed-d38ffe905e57.png)

### 样例

![image.png](https://gw.alipayobjects.com/zos/antfincdn/1r4WQhweas/1586964514728-bdca9455-e887-4c94-8091-30cf008937c8.png)
