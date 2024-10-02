<script>
import {LOGO} from "@/constants/constants.js";

export default {
  data() {
    return {
      LOGO,
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
        'name': 'hello',
        'email': 'qxqacxaxadszxsasqxa@gmail.com',
        'password': 'password',
      }
      this.$store.dispatch('register', data)
          .then(user => console.log('User' , user))
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

      <InputComponent :label="'Name'" :type="'text'" :placeholder="'Name'"/>

      <InputComponent :label="'Email address'" :type="'email'" :placeholder="'name@example.com'"/>

      <InputComponent :label="'Password'" :type="'password'" :placeholder="'Password'"/>

      <ButtonComponent :disabled="isLoading" type="submit" @click="submitHandler">Login</ButtonComponent>

    </form>
  </main>
</div>
</template>

<style>

</style>