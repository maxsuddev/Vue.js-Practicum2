<template>

    <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a  class="d-flex align-items-center link-body-emphasis text-decoration-none cursor-pointer" @click="homeRouter">
        <img :src="LOGO" alt="logo" style="width: 70px; height: 50px; cursor: pointer" >
        <span class="fs-4">Pricing example</span>
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLogin">
        <RouterLink v-for="data in user" :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none" >{{ data.name }}</RouterLink>

      </template>

      <template v-if="!isLogin">
        {{isLogin}}
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none" >Login</RouterLink>

        <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none" >Register</RouterLink>
      </template>
      </nav>
    </div>


</template>
<script>
import {LOGO} from "@/constants/constants.js";
import {mapState} from "vuex";


export default {
  data() {
    return {
      LOGO,
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      isLogin: state => state.auth.isLogin
    }),
  },

  methods: {
    homeRouter() {
      return this.$router.push({ name: 'home' });
    }
  }
}
</script>