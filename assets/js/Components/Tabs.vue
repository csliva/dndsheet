<template lang="pug">
    div
        p Tabs: Skills, Combat, Spellcasting, Features, Equipment, Journal/Notes
        button(
          @click='setTab("Skills")'
          :class='activeView === "Skills" ? "active" : ""'
        ) Skills
        button(
          @click='setTab("Combat")'
          :class='activeView === "Combat" ? "active" : ""'
          ) Combat
        button(
          @click='setTab("Spellcasting")'
          :class='activeView === "Spellcasting" ? "active" : ""'
          ) Spellcasting
        button(
          @click='setTab("Features")'
          :class='activeView === "Features" ? "active" : ""'
          ) Features
        button(
          @click='setTab("Equipment")'
          :class='activeView === "Equipment" ? "active" : ""'
          ) Equipment
        button(
          @click='setTab("Journal")'
          :class='activeView === "Journal" ? "active" : ""'
          ) Journal/Notes
        div.tabview
          keep-alive
            component(:is="activeView")
</template>

<style lang="sass">

</style>

<script>
import Skills from "./Tabs/Skills.vue"
import Combat from "./Tabs/Combat.vue"
import Spellcasting from "./Tabs/Spellcasting.vue"
import Features from "./Tabs/Features.vue"
import Equipment from "./Tabs/Equipment.vue"
import Journal from "./Tabs/Journal.vue"
export default {
  name: 'Tabs',
  components: {
    Skills,
    Combat,
    Spellcasting,
    Features,
    Equipment,
    Journal
  },
  data: () => {
    return {
      activeView: "Skills",
    }
  },
  methods: {
      setTab: function(view) {
        this.activeView = view
      }
  }
}
</script>
