<template lang="pug">
  .unit(:data-title='title')
    .gen
      h2.gen__name
        span {{ stats.name }}
        button.gen__load(@click='load()') Next
      .gen__section
        // .gen__info {{ stats.title }}
        .gen__info
          button.gen__class(
            @mouseover="tooltips.cls = true" @mouseleave="tooltips.cls = false"
          ) {{ stats.race }} {{ concatClasses }} - Level {{ totalLevel }}
          .tooltip(:class="{ active : tooltips.cls}")
            .tooltip__title Race Info:
            .tooltip__info {{ stats.race + (stats.subrace ? ', '+ stats.subrace : '') }}
            .tooltip__title Class Info:
            .tooltip__info(v-for="cls in stats.classes") {{ cls.name + (cls.sub ? ', ' + cls.sub : '') }} ({{ cls.level }})
      .gen__section
        .gen__title Proficiency Bonus: {{ proficiencyBonus }}
        .gen__title inspiration: {{ stats.inspiration }}
</template>

<script>
export default {
  props: ['title', 'stats', 'load'],
  data: () => {
    return {
      tooltips: {
        race: false,
        cls: false
      }
    }
  },
  computed: {
    multiClass: function(){
      return (this.stats.classes.length === 1) ? false : true
    },
    totalLevel: function(){
      let lvl = this.stats.classes.map( c => c.level )
      return lvl.reduce((a, b) => a + b, 0)
    },
    proficiencyBonus: function() {
      return 1 + Math.ceil(this.totalLevel / 4)
    },
    concatClasses: function(){
      let cls = this.stats.classes.map( c => c.name)
      return cls.join('/')
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .gen
    height: 100%
    &__section
      display: block
      // margin-bottom: 10px
      &:last-child
        margin-bottom: 0
    &__name
      font-weight: bold
      display: inline-block
      color: #fff
      font-size: 35px
      line-height: 46px
      vertical-align: middle
      margin-bottom: 10px
      span
        margin-right: 20px
    &__title
      font-weight: bold
      font-size: 12px
    &__info
      font-style: italic
      position: relative
      margin-bottom: 6px
      button
        +transition(color)
        display: inline-block
        padding: 0
        color: transparentize($clr-link, 0.35)
        background: transparent
        border: 0
        margin-right: 8px
        &:hover
          color: $clr-link
    &__load
      vertical-align: middle
  // tooltip
  .tooltip
    +box-shadow()
    +transition(opacity)
    position: absolute
    display: block
    max-width: 300px
    top: 150%
    left: 0
    padding: 10px 20px
    border: solid 1px transparentize(#fff, 0.45)
    background-color: lighten($clr-body, 1%)
    opacity: 0
    pointer-events: none
    line-height: 20px
    &__title
      font-weight: bold
    &__info
      display: block
    &.active
      opacity: 1
      pointer-events: auto

</style>
