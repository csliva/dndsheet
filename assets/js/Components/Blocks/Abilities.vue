<template lang="pug">
  .unit
    .title {{ title }}
    ul
      li(v-for="ability in abilities") {{ ability.name }} ({{ ability.abr }})
</template>

<script>
export default {
  data: () => {
    return {
      title: 'ABILITIES',
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

<style lang="sass">
</style>
