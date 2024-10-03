<script>
import {LOGO} from "@/constants/constants.js";
import ValidationError from "@/components/ValidationError.vue";

export default {
  components: {ValidationError},
  data() {
    return {
      LOGO,
      email: '',
      password: '',
    }
  },
  computed : {
    isLoading() {//for disable
      return this.$store.state.auth.isLoading;
    },
    validationError() {
      return this.$store.state.auth.error;
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        'email': this.email,
        'password': this.password,
      }
      this.$store.dispatch('login', data)
          .then(user => {
            this.$router.push({ name: 'home' });
            console.log('User successfully login', user);
          })
          .catch(error => console.log('Error', error))
    },
  }

}
</script>

<template>
  <div>
    <main class="form-signin w-50 m-auto" >
      <form>
        <img :src="LOGO" alt="logo" style="width: 100px; height: 70px; cursor: pointer" >
        <h1 class="h3 mb-3 fw-normal mb-3">Login</h1>
        <ValidationError v-if="validationError" :validationError="validationError" />


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