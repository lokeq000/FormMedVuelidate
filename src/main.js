import Vue from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
// Vue.config.devtools = true
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
