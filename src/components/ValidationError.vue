<script>
export default {
  props: {
    validationError: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationError).map(name => {
        const msg = this.validationError[name].join(',');
        console.log('name',name)
        console.log('msg',msg)
        return `${name} ${msg}`;
      })
    }
  }
}
</script>

<template>
 <ul class="list-group">
   <li class=" mt-2 list-group-item list-group-item-danger" v-for="errorMessage in errorMessages" :key="errorMessage">
     {{ errorMessage }}
   </li>
 </ul>
</template>

