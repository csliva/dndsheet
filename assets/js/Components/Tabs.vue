<template lang="pug">
    .tabs
      .tabs__nav
        button.tabs__btn(
          @click='setTab("Skills")'
          :class='activeView === "Skills" ? "active" : ""'
        ) Skills
        button.tabs__btn(
          @click='setTab("Combat")'
          :class='activeView === "Combat" ? "active" : ""'
        ) Combat
        button.tabs__btn(
          @click='setTab("Spellcasting")'
          :class='activeView === "Spellcasting" ? "active" : ""'
        ) Spellcasting
        button.tabs__btn(
          @click='setTab("Features")'
          :class='activeView === "Features" ? "active" : ""'
        ) Features
        button.tabs__btn(
          @click='setTab("Equipment")'
          :class='activeView === "Equipment" ? "active" : ""'
        ) Equipment
        button.tabs__btn(
          @click='setTab("Journal")'
          :class='activeView === "Journal" ? "active" : ""'
        ) Journal
      .tabs__pane
        keep-alive
          component(:is="activeView")
</template>

<style lang="sass">
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .tabs
    display: grid
    grid-template-rows: 1fr 9fr
    height: 100%
    +box-shadow()
    &__nav
      display: grid
      grid-template-columns: repeat(6, 1fr)
    &__btn
      color: transparentize(#fff, 0.45)
      background: transparent
      border: solid 1px transparentize(#fff, 0.9)
      border-bottom-color: transparentize(#fff, 0.85)
      text-transform: uppercase
      font-weight: bold
      font-size: 12px
      position: relative
      &:before
        content: ''
        position: absolute
        top: 0
        left: 0
        height: 3px
        width: 100%
        background: $clr-link
        opacity: 0.25
      &.active
        color: $clr-link
        background-color: transparentize(lighten($clr-body, 3%), 0.8)
        border: solid 1px transparentize(#fff, 0.75)
        border-bottom-color: transparent
        &:before
          opacity: 1
    &__pane
      border: solid 1px transparentize(#fff, 0.75)
      border-top: 0
      padding: 40px
      background-color: transparentize(lighten($clr-body, 3%), 0.8)
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
