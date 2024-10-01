<script>
 export default {
   name: 'InputComponent',
   props: {
     label : String,
     type : String,
     placeholder : String,

   }
 }
</script>

<template>
  <div class="form-floating mb-3">
    <input :type="type" class="form-control" id="floatingPassword" :placeholder="placeholder">
    <label for="floatingPassword">{{ label }}</label>
  </div>
</template>

<style>

</style>