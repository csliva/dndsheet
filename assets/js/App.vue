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
        p Tabs: Skills, Combat, Spellcasting, Features, Equipment, Journal/Notes
        p Welcome, {{ name}}
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      name: "Colt"
    }
  }
}
</script>
