import Vue from 'vue'
import App from './App.vue'

import { characters } from './data'

console.log('[i] Starting client app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App, { props: { characters: characters } }),
  components: { App },
}).$mount('#root')
