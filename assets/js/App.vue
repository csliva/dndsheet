<template lang="pug">
  .app(v-if="stats")
    aside
      General(title="General", :stats="stats.general", :load="loadChar")
      Abilities(title="Abilities", :stats="stats.abilities", :prof="profBonus")
    main
      Combat(title="Combat")
      Tabs(:abilities="stats.abilities")
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
import Abilities from './Components/Abilities.vue'
import Combat from './Components/Combat.vue'
import General from './Components/General.vue'
import Tabs from './Components/Tabs.vue'

export default {
  name: 'App',
  components: {
    Abilities,
    Combat,
    General,
    Tabs
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
  computed: {
    profBonus: function() {
      if(this.stats){
        let lvl = this.stats.general.classes.map( c => c.level )
        lvl = lvl.reduce((a, b) => a + b, 0)
        return 1 + Math.ceil(lvl / 4)
      } else {
        return 'no prof....'
      }
    }
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
