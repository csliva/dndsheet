<template lang="pug">
  .skills
    nav
      button.skills__filter(v-for="f in filters", @click='f.active = !f.active', :class='{ active : f.active }') {{ f.name }}
    ul(v-if="currentSkills.length")
      li(v-for="skill in currentSkills")
        span {{ skill.name }} ({{ skill.ability }})
        span {{ getMod(abilities[skill.ability].score) }}
        span.tbd Proficiency Y/N
        span.tbd Misc. Bonus/Penalties
        span.tbd Total
        span
          button(@click='alert("Roll skill check: " + skill.name)') Roll!
    div(v-else) No skills found...
</template>

<script>
export default {
    props: ['abilities'],
    data: () => {
      return {
        skills: [
          { name: 'Athletics', ability: 'str' },
          { name: 'Acrobatics', ability: 'dex' },
          { name: 'Sleight of Hand', ability: 'dex' },
          { name: 'Stealth', ability: 'dex' },
          { name: 'Arcana', ability: 'int' },
          { name: 'History', ability: 'int' },
          { name: 'Investigation', ability: 'int' },
          { name: 'Nature', ability: 'int' },
          { name: 'Religion', ability: 'int' },
          { name: 'Animal Handling', ability: 'wis' },
          { name: 'Insight', ability: 'wis' },
          { name: 'Medicine', ability: 'wis' },
          { name: 'Perception', ability: 'wis' },
          { name: 'Survival', ability: 'wis' },
          { name: 'Deception', ability: 'cha' },
          { name: 'Intimidation', ability: 'cha' },
          { name: 'Performance', ability: 'cha' },
          { name: 'Persuasion', ability: 'cha' }
        ],
        filters: {
          str: { name: 'Strength', active: true },
          dex: { name: 'Dexterity', active: true },
          int: { name: 'Intelligence', active: true },
          wis: { name: 'Wisdom', active: true },
          cha: { name: 'Charisma', active: true },
        }
      }
    },
    mounted: function(){
      this.current = this.skills
    },
    computed: {
      currentSkills: function(){
        let allSkills = this.skills
        let filters = this.filters
        let currentSkills = allSkills.filter(skill => filters[skill.ability].active)
        return currentSkills
      }
    },
    methods: {
      getMod: function(ability) {
        return Math.floor((ability - 10) / 2)
      },
      alert: function(msg) {
        alert(msg)
      }
    }
}
</script>

<style lang="sass">
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .skills
    // border: solid 1px yellow
    nav
      margin-bottom: 10px
    &__filter
      +transition(opacity)
      background-color: transparent
      border: solid 1px $clr-link
      color: $clr-link
      padding: 4px 10px
      opacity: 0.35
      margin-right: 5px
      &.active
        opacity: 1
    ul
      padding: 0
      margin: 0
    li
      display: grid
      grid-template-columns: repeat(6, 1fr)
      font-size: 12px
      &:nth-child(even)
        background-color: transparentize(#fff, 0.95)
      span
        display: inline-block
        &.tbd
          text-align: italic
          color: transparentize(#fff, 0.75)
        button
          color: $clr-link
          border: 0
          background-color: transparent

</style>
