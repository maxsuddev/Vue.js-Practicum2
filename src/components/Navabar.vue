<template>

    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a  class="d-flex align-items-center link-body-emphasis text-decoration-none cursor-pointer" @click="homeRouter">
        <img :src="LOGO" alt="logo" style="width: 70px; height: 50px; cursor: pointer" >
        <span class="fs-4">Pricing example</span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none" >Login</RouterLink>

        <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none" >Register</RouterLink>
      </nav>
    </div>


</template>
<script>
import {LOGO} from "@/constants/constants.js";

export default {
  data() {
    return {
      LOGO,
    }
  },

  methods: {
    homeRouter() {
      return this.$router.push({ name: 'home' });
    }
  }
}
</script>