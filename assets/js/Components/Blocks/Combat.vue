<template lang="pug">
  .unit(:data-title='title')
    .line Health, AC, Initiative, Dice Roller, etc.
</template>

<script>
export default {
  props: ['title'],
  data: () => {
    return {

    }
  }
}
</script>

<style lang="sass">
</style>
