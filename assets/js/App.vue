<template lang="pug">
  .app
    aside.aside
      .unit
        p
          b General
        p Race, Subraces
        p Class, Archetypes
        p Portrait
        p Inspiration
      .unit XP Bar
      .unit
        p
          b Abilities
        ul
          li Strength
          li Dexterity
          li Constitution
          li Intelligence
          li Wisdom
          li Charisma
    main.main
      .unit
        p
          b Combat
        p Health, AC, Initiative, Dice Roller, etc.
      .unit
        h1 Main Area
        Tabs
        p Welcome, {{ name}}
</template>

<style lang="sass">
p 
  color: green
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
      name: "Colt"
    }
  }
}
</script>
