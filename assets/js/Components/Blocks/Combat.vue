<template lang="pug">
  .unit(:data-title='title')
    .bar
      .cell Health
      .cell AC
      .cell Initiative
      .cell Speed
      .cell Dice Roller
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
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .bar
    display: grid
    grid-template-columns: 3fr repeat(4, 1fr)
    height: 100%
  .cell
    border: solid 1px transparentize(#fff, 0.75)
    padding: 10px
</style>
