<template lang="pug">
  .app(v-if="stats")
    aside
      GeneralBlock(title="General", :stats="stats.general", :load="loadChar")
      AbilityBlock(title="Abilities", :stats="stats.abilities")
    main
      CombatBlock(title="Combat")
      MainBlock(title="Main", :abilities="stats.abilities")
</template>

<style lang="sass">
  .unit
    padding: 10px 20px
    &__title
      margin-bottom: 20px
      font-weight: bold
      text-transform: uppercase
  .line
    margin: 0
</style>

<script>
import AbilityBlock from './Components/Blocks/Abilities.vue'
import CombatBlock from './Components/Blocks/Combat.vue'
import GeneralBlock from './Components/Blocks/General.vue'
import MainBlock from './Components/Blocks/Main.vue'

export default {
  name: 'App',
  components: {
    AbilityBlock,
    CombatBlock,
    GeneralBlock,
    MainBlock
  },
  props: ['characters'],
  data: () => {
    return {
      stats: false,
      charIndex: 0,
      charCount: 0
    }
  },
  mounted: function() {
    this.stats = this.characters[0]
    this.charCount = this.characters.length
  },
  methods: {
    loadChar: function(){
      let i = this.charIndex
      this.charIndex = (i + 1 >= this.charCount) ? 0 : i + 1
      this.stats = this.characters[this.charIndex]
    }
  }
}
</script>
