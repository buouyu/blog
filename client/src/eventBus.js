import Vue from 'vue';
// Vue.prototype.$bus=new Vue({});
const App = new Vue({});
Vue.prototype.$bus=App;
export default App;