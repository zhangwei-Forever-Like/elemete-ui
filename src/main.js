import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'element-ui/lib/theme-chalk/index.css'
import TreeTable from 'vue-table-with-tree-grid'
import ElementUI, { Message,MessageBox } from 'element-ui'

Vue.use(ElementUI)
import axios from 'axios'

Vue.prototype.$message = Message

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  // console.log(config)
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$confirm=MessageBox.confirm

Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
