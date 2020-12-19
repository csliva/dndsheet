<template lang="pug">
  .unit(:data-title='title')
    .abi
      .abi__item(v-for="ability in abilities")
        span.abi__mod
          span {{ getMod(ability.abr) | bonus }}
          button.abi__adjust(@click='modalAdjusts')
            IconCog
        .abi__bar
          h4 {{ ability.name }}
          span.abi__score {{ getScore(ability.abr) }}
          span.abi__save
            span Save:
            button.abi__prof(
              :class="{ active : stats[ability.abr].save }",
              @click="toggleProf(ability.name)"
            )
            span {{ getSave(ability.abr) | bonus }}
</template>

<script>
import IconCog from 'assets/images/icons/cog.svg';
export default {
  props: ['title', 'stats', 'prof'],
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
      return this.stats[ability].score
    },
    getMod: function(ability) {
      let mod = Math.floor((this.stats[ability].score - 10) / 2)
      return mod
    },
    getSave: function(ability){
      let saveProf = this.stats[ability].save
      return saveProf ? this.prof + this.getMod(ability) : this.getMod(ability)
    },
    modalAdjusts: function(){
      alert('Modal: Bonus and Penalty adjusts')
    },
    toggleProf: function(ability){
      alert('Toggle Proficiency: '+ability)
    }
  },
  filters: {
    bonus: function(value){
      return (value > 0) ? '+'+value : value
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
    &__item
      display: block
      position: relative
      height: 60px
      margin-bottom: 20px
      padding-top: 20px
    &__name
      text-transform: uppercase
      color: #fff
      font-size: 12px
      margin-bottom: 6px
      font-weight: bold
      padding-left: 70px
    &__bar
      position: relative
      z-index: 0
      background: transparentize(lighten($clr-body, 10%), 0.7)
      padding-left: 70px
      height: 40px
      line-height: 40px
      h4
        position: absolute
        top: -35px
        left: 70px
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
      z-index: 10
      bottom: 0
      left: 0
      color: #333
      border: solid 1px $clr-body
      font-size: 16px
    &__score
      color: $clr-link
      display: inline-block
      text-align: center
      width: 60px
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
    &__prof
      padding: 0
      width: 16px
      height: 16px
      border: solid 1px $clr-link
      border-radius: 100%
      text-align: center
      color: $clr-link
      background: transparent
      &.active
        background-color: $clr-link
        color: $clr-body
    &__save
      display: inline-block
      border: dotted 1px transparentize(#fff, 0.8)
      padding: 0 20px
      span,
      button
        margin-right: 10px
</style>
