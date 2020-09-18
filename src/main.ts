import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VuePlugin from 'vue-ioc-app/vue-plugin'

import container from './container'
import HomeService from './views/Home.service'
Vue.config.productionTip = false;
Vue.use(VuePlugin, container)
container.register({
  provide: HomeService,
  useClass: HomeService
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
