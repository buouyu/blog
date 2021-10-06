import Vue from 'vue';
import './styles/global.less';
import App from './App.vue';
import router from './router';
import {showMessage} from './utils';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock';
import './eventBus.js';
import store from "./store";
store.dispatch('setting/fetchSetting');
store.dispatch('loginUser/whoAmI')
Vue.prototype.$showMessage = showMessage;
import loading from './directives/loading';
import lazy from "./directives/lazy";
Vue.directive('loading',loading);
Vue.directive('lazy',lazy);
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

