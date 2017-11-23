import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Header from './../components/header'
import Index from './../components/index'
import MusicTop from './../components/musicTop'
import SongList from './../components/songList'
import Singer from './../components/singer'
import MyMusic from './../components/myMusic'
import Load from './../components/notFound'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:Index
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/toplist',
      name:'musicTop',
      component:MusicTop
    },
    {
      path:'/songlist',
      name:'songList',
      component:SongList
    },
    {
      path:'/singer',
      name:'singer',
      component:Singer 
    },
    {
      path:'/mymusic',
      name:'myMusic',
      component:MyMusic 
    },
    {
      path:'**',
      name:'load',
      component:Load
    }
  ]
})

