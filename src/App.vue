<template>
  <div id="app">

    <hea></hea>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
 import hea from './components/header'
 import foot from './components/footer'

export default {

  name: 'app',
  components: {hea,foot}
}
</script>

<style>
  @import  "./assets/css/base.css";
</style>
