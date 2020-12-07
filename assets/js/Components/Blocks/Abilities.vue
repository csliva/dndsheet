<template lang="pug">
  .unit(:data-title='title')
    .abi
      .abi__item(v-for="ability in abilities")
        .abi__name {{ ability.name }}
        span.abi__score {{ getScore(ability.abr) }}
        button.abi__adjust(@click='modalAdjusts') + / -
        span.abi__mod {{ getMod(ability.abr) }}
        span.abi__save Saving Throw...
</template>

<script>
export default {
  props: ['title', 'stats'],
  data: () => {
    return {
      abilities: [
        { name: 'Strength', abr: 'str' },
        { name: 'Dexterity', abr: 'dex' },
        { name: 'Constitution', abr: 'con' },
        { name: 'Intelligence', abr: 'int' },
        { name: 'Wisdom', abr: 'wis' },
        { name: 'Charisma', abr: 'cha' }
      ]
    }
  },
  methods: {
    getScore: function(ability) {
      return this.stats[ability]
    },
    getMod: function(ability) {
      let mod = Math.floor((this.stats[ability] - 10) / 2)
      return (mod >= 1 ? '+' : '') + mod
    },
    modalAdjusts: function(){
      alert('Modal: Bonus and Penalty adjusts')
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .abi
    display: grid
    grid-template-rows: repeat(6, 1fr)
    height: 100%
    &__item
      display: block
      padding-top: 10px
      position: relative
      border-bottom: solid 1px transparentize(#fff, 0.85)
      &:last-child
        border-bottom: 0
    &__name
      text-transform: uppercase
      color: #fff
      font-size: 12px
      margin-bottom: 4px
      font-weight: bold
    &__mod,
    &__score
      display: inline-block
      padding: 3px 8px
      font-weight: bold
    &__mod
      background: #fff
      color: lighten($clr-body, 8%)
      font-style: italic
      text-align: center
      width: 40px
      border-radius: 4px
    &__score
      display: inline-block
      padding-left: 0
      width: 24px
    &__adjust
      +transition(color)
      background: transparent
      line-height: inherit
      border: 0
      color: transparentize($clr-link, 0.35)
      padding: 3px 8px
      margin-right: 10px
      &:hover
        color: $clr-link
    &__save
      padding: 3px 12px
      font-size: 12px
      font-style: italic
      opacity: 0.65

</style>
