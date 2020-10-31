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
        .line Tabs: Skills, Combat, Spellcasting, Features, Equipment, Journal/Notes
        .line {{ msg }}
</template>

<script>
export default {
  name: 'App',
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
      ]
    }
  }
}
</script>
