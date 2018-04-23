import Vue from 'vue'
import App from './app'
import VueCDSidebar from '~components/index'

Vue.use(VueCDSidebar)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App
})
