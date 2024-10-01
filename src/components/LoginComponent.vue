<script>
import {LOGO} from "@/constants/constants.js";

export default {
  data() {
    return {
      LOGO,
    }
  },
}
</script>

<template>
  <div>
    <main class="form-signin w-50 m-auto" >
      <form>
        <img :src="LOGO" alt="logo" style="width: 100px; height: 70px; cursor: pointer" >
        <h1 class="h3 mb-3 fw-normal mb-3">Login</h1>

       <InputComponent :label="'Name'" :type="'text'" :placeholder="'Name'"/>
        <InputComponent :label="'Password'" :type="'password'" :placeholder="'Password'"/>

        <ButtonComponent type="submit">Login</ButtonComponent>
      </form>
    </main>
  </div>
</template>

<style>

</style>