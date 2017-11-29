// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAplayer from 'vue-aplayer'

Vue.config.productionTip = false

Vue.filter('getStr', function(str) {
  str /= 1000; 
  var fen = (str /60) | 0;
  var ss = (str % 60) | 0;

  fen = fen>9?fen:'0'+fen;
  ss = ss>9?ss:'0'+ss;
  return fen + ':' + ss;
});

Vue.prototype.HOST = '/api';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App ,'a-aplayer':VueAplayer}
})
