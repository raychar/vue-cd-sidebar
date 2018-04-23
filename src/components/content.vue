<template>
  <div :class="['st-container', 'st-effect', state ? 'st-menu-open' : '']">
    <nav class="st-menu st-effect">
      <slot name="nav"></slot>
    </nav>
    <div class="st-pusher" @click="closeMenu">
      <div class="st-content">
        <div class="st-content-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'state'
  ],
  methods: {
    closeMenu () {
      if (this.state) {
        this.$emit('close-event')
      }
    }
  }
}
</script>

<style>
@import url('~assets/css/component.css');

button {
	border: none;
	padding: 0.6em 1.2em;
	background: #388a5a;
	color: #fff;
	font-family: 'Lato', Calibri, Arial, sans-serif;
	font-size: 1em;
	letter-spacing: 1px;
	text-transform: uppercase;
	cursor: pointer;
	display: inline-block;
	margin: 3px 2px;
	border-radius: 2px;
}

button:hover {
	background: #2c774b;
}
</style>
