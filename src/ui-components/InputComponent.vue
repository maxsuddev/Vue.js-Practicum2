<script>
 export default {
   name: 'InputComponent',
   props: {
     label : String,
     type : String,
     placeholder : String,
     modelValue : [String, Number],
   },
   methods: {
     InoutUpdate(e){
       this.$emit('update:modelValue', e.target.value);
     }
   }
 }
</script>

<template>
  <div class="form-floating mb-3">
    <input :type="type" class="form-control"
           :id="label"
           :placeholder="placeholder"
           @input="InoutUpdate"
           :value="modelValue"/>
    <label :for="label">{{ label }}</label>
  </div>
</template>

<style>

</style>