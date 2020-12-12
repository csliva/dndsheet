<template lang="pug">
  .unit(:data-title='title')
    .abi
      .abi__item(v-for="ability in abilities")
        span.abi__mod
          span {{ getMod(ability.abr) }}
          button.abi__adjust(@click='modalAdjusts')
            IconCog
        .abi__inner
          .abi__name {{ ability.name }}
          .abi__bar
            span.abi__score {{ getScore(ability.abr) }}
            button.abi__prof o
            span.abi__save Saving Throw...


</template>

<script>
import IconCog from 'assets/images/icons/cog.svg';
export default {
  props: ['title', 'stats'],
  components: {
    IconCog
  },
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
  .icon
    width: 12px
    height: 12px
    fill: $clr-link
  .abi
    // display: grid
    // grid-template-rows: repeat(6, 1fr)
    // height: 100%
    // grid-gap: 10px
    &__item
      display: block
      position: relative
      // border: dotted 1px transparentize(#fff, 0.9)
      height: 60px
      margin-bottom: 20px
    &__name
      text-transform: uppercase
      color: #fff
      font-size: 12px
      margin-bottom: 6px
      font-weight: bold
      padding-left: 70px
    &__bar
      background: transparentize(lighten($clr-body, 10%), 0.7)
      padding: 4px
      padding-left: 70px
    &__mod,
    &__score
      display: inline-block
    &__mod
      width: 60px
      height: 60px
      text-align: center
      line-height: 60px
      background: #fff
      border-radius: 100%
      position: absolute
      bottom: 0
      left: 0
      color: #333
      border: solid 1px $clr-body
    &__score
      color: $clr-link
      display: inline-block
      padding-left: 0
      width: 30px
    &__adjust
      appearance: none
      position: absolute
      bottom: -2px
      left: -2px
      z-index: 10
      width: 20px
      height: 20px
      border-radius: 100%
      background-color: $clr-link
      border: solid 1px $clr-body
      text-align: center
      line-height: 22px
      padding: 0
      svg
        display: inline-block
        width: 12px
        height: 12px
        fill: $clr-body-alt
    &__save
      padding: 3px 12px
      font-size: 12px
      font-style: italic
      opacity: 0.65
</style>
