# vue-cd-sidebar

## 基于Vue的菜单栏的插件

![](https://t1.picb.cc/uploads/2018/04/21/25zkr1.png)

### 简介

基于Vue的菜单栏的插件。
移植于CodeDrops

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

### Sample
```
<template>
<div id="app">
  <vue-cd-sidebar :state="menuState" @close-event="closeMenu">
    <div slot="nav">
      <h2 class="icon icon-lab">Sidebar</h2>
      <ul>
        <li><a class="icon icon-data" href="#">Data Management</a></li>
        <li><a class="icon icon-location" href="#">Location</a></li>
        <li><a class="icon icon-study" href="#">Study</a></li>
        <li><a class="icon icon-photo" href="#">Collections</a></li>
        <li><a class="icon icon-wallet" href="#">Credits</a></li>
      </ul>
    </div>
    <button @click="openMenu">Action</button>
  </vue-cd-sidebar>
</div>
</template>

<script>
export default {
  data () {
    return {
      menuState: false
    }
  },
  methods: {
    openMenu () {
      this.menuState = true
    },
    closeMenu () {
      if (this.menuState) {
        this.menuState = false
      }
    }
  }
}
</script>
```

### 注意
根节点的高度最好为100%，以达到比较好的效果

---
[CodeDrops的Demo](http://tympanus.net/Development/SidebarTransitions/)

[CodeDrops的Article](http://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/)