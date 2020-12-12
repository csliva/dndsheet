<template lang="pug">
  .unit
    .title {{ title }}
    .line Health, AC, Initiative, Dice Roller, etc.
    DiceRoller

</template>

<script>
import DiceRoller from "../DiceRoller.vue";

export default {
  components: {
    DiceRoller
  },
  data: () => {
    return {
      title: 'COMBAT'
    }
  }
}
</script>

<style lang="sass">
</style>
