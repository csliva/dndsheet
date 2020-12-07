<template lang="pug">
  .unit(:data-title='title')
    Tabs(:abilities="abilities")
</template>

<script>
import Tabs from '../Tabs.vue'
export default {
  props: ['title', 'abilities'],
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
