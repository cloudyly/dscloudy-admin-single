<template>
  <div>
    <h1>主界面</h1>
    {{token}}
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      token: this.$store.getters['user/token']
    }
  }
}
</script>

<style scoped>

</style>
