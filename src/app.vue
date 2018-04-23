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


<style lang="less">
#app{
  height: 100%;
}
</style>
