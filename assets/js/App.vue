<template lang="pug">
  .app
    aside
      .unit
        .title General
        .line Race, Subraces
        .line Class, Archetypes
        .line Portrait
        .line Inspiration
      .unit
        .line XP Bar
      .unit
        .title Abilities
        ul
          li(v-for="ability in abilities") {{ ability.name }} ({{ ability.abr }})
    main
      .unit
        .title Combat
        .line Health, AC, Initiative, Dice Roller, etc.
      .unit
        .title Main Area
        Tabs
        .line {{ msg }}
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
import Tabs from './Components/Tabs.vue';

export default {
  name: 'App',
  components: {
    Tabs
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
