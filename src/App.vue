<template>
  <div class="container">

<Navbar/>
  <RouterView/>
  </div>
</template>


<script>
import {Navbar} from '@/components'
import {LOGO} from "@/constants/constants.js"
import {RouterView} from 'vue-router'

export default {
  components : {Navbar},
  data() {
    return {
      LOGO,
    }
  }
}

</script>

<style>


</style>