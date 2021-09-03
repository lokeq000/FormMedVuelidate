<template>
  <div id="app">

    <m-client-wrapper/>
  </div>
</template>

<script>

import MClientWrapper from './components/m-client-wrapper.vue'


export default {
  name: 'App',

  components: {
    MClientWrapper

  },
  data(){
    return {
      testValue:{
        valueVuilidate:'',
      }
    }
  },
 
  methods:{
   
}}
</script>

<style>

</style>
