<template>
  <div id="app">
    <router-view/>    
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator"

@Component
export default class App extends Vue {

}
</script>

<style lang="stylus">
@import "./stylus/init"

#app
  height 100%
  
</style>
