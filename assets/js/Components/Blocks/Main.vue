<template lang="pug">
  .unit
    .title {{ title }}
    Tabs
</template>

<script>
import Tabs from '../Tabs.vue'
export default {
  components: {
    Tabs
  },
  data: () => {
    return {
      title: 'MAIN'
    }
  }
}
</script>

<style lang="css">
</style>
