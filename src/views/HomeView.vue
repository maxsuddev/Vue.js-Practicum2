<script>

export default {
  methods : {
    addCount (){
      this.$store.commit('addCount',this.count);
    },
    deleteCount () {
      this.$store.commit('deleteCount',this.count);
    }
  },
  computed : {
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

<template>
<h1>Home</h1>
</template>

<style>

</style>