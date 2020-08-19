import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/index.js';

Vue.config.productionTip = false;

store.dispatch(('auth')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}).catch(() => {
  console.log('Error');
  window.location.href = 'http://localhost:9000?url=http://localhost:9002';
});
