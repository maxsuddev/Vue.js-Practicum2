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
<h1>Store {{count}}</h1>
  <div>
    <ButtonComponent  @click="addCount">Add count</ButtonComponent>
    <ButtonComponent @click="deleteCount">Add count</ButtonComponent>

  </div>
</template>

<style>

</style>