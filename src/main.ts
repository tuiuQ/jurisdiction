import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHttpServer from '@/plugins/http'
import { AxiosInstance } from 'axios'

Vue.config.productionTip = false
Vue.use(MyHttpServer)

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
