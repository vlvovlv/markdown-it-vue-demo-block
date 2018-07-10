import Vue from 'vue';
import App from './App.vue';
import DemoShow from '../../lib/DemoShow';

Vue.config.productionTip = false;

Vue.component(DemoShow.name, DemoShow);

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
});
