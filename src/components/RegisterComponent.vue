<script>
import {LOGO} from "@/constants/constants.js";

export default {
  data() {
    return {
      LOGO,
      name: "",
      email: "",
      password: "",
    }
  },
  computed : {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
      }
      this.$store.dispatch('register', data)
          .then(user => {
            this.$router.push({ name: 'home' });
            console.log('User successfully registered', user);
          })
          .catch(error => console.log('Error', error))

    }
  }
}
</script>

<template>
<div>
  <main class="form-signin w-50 m-auto" >
    <form>
      <img :src="LOGO" alt="logo" style="width: 100px; height: 70px; cursor: pointer" >
      <h1 class="h3 mb-3 fw-normal mb-3">Register</h1>

      <InputComponent
          :label="'Name'"
          :type="'text'"
          :placeholder="'Name'"
          v-model="name"
      />

      <InputComponent
          :label="'Email address'"
          :type="'email'"
          :placeholder="'name@example.com'"
          v-model="email"
      />

      <InputComponent
          :label="'Password'"
          :type="'password'"
          :placeholder="'Password'"
          v-model="password"
      />

      <ButtonComponent :disabled="isLoading" type="submit" @click="submitHandler">Login</ButtonComponent>

    </form>
  </main>
</div>
</template>

<style>

</style>