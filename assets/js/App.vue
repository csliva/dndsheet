<template lang="pug">
  .app
    aside
      GeneralBlock
      XpBlock
      AbilityBlock
    main
      CombatBlock
      MainBlock
</template>

<style lang="sass">
  // temp components
  .unit
    padding: 20px
    border: solid 1px #eee
  .line
    margin: 0
  .title
    margin-bottom: 20px
    font-weight: bold
    text-transform: uppercase
</style>

<script>
import AbilityBlock from './Components/Blocks/Abilities.vue'
import CombatBlock from './Components/Blocks/Combat.vue'
import GeneralBlock from './Components/Blocks/General.vue'
import MainBlock from './Components/Blocks/Main.vue'
import XpBlock from './Components/Blocks/Xp.vue'

export default {
  name: 'App',
  components: {
    AbilityBlock,
    CombatBlock,
    GeneralBlock,
    MainBlock,
    XpBlock
  },
  data: () => {
    return {
      msg: "Vue App Loaded!",
      abilities: [
        { name: 'Strength', abr: 'Str' },
        { name: 'Dexterity', abr: 'Dex' },
        { name: 'Constitution', abr: 'Con' },
        { name: 'Intelligence', abr: 'Int' },
        { name: 'Wisdom', abr: 'Wis' },
        { name: 'Charisma', abr: 'Cha' }
      ],
      name: "colt"
    }
  }
}
</script>
