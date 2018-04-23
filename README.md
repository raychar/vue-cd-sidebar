# vue-cd-sidebar

## 基于Vue的菜单栏的插件

![](https://t1.picb.cc/uploads/2018/04/21/25zkr1.png)

### 简介

基于Vue的菜单栏的插件。
移植于CodeDrop

### 安装

`npm i vue-cd-sidebar`

### API

|   属性   |   说明   |   类型   |   默认值   |
| ---- | ---- | ---- | ---- |
|state|菜单栏的开关状态|bool|false|
|close-event|菜单栏的关闭事件|  event   |   -   |

### Slot

|   名称   |   说明   |   是否必须   |
| ---- | ---- | ---- |
|nav| 菜单栏的插槽| 是 |
|默认| 主体内容 | 是 |

### 注意
根节点的高度最好为100%，以达到比较好的效果

---
[CodeDrop的Demo](http://tympanus.net/Development/SidebarTransitions/)
[CodeDrop的Article](http://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/)