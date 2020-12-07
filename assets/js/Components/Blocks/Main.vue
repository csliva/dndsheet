<template lang="pug">
  .unit(:data-title='title')
    Tabs
</template>

<script>
import Tabs from '../Tabs.vue'
export default {
  props: ['title'],
  components: {
    Tabs
  },
  data: () => {
    return {
      // title: 'MAIN'
    }
  }
}
</script>

<style lang="sass">
</style>
