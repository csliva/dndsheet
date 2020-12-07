<template lang="pug">
  .unit
    .gen
      h2.gen__name
        span {{ stats.name }}
        button(@click='load()') Next
      .gen__info
        span.gen__race {{ stats.race }}
        span.gen__class(v-for="cls in stats.classes") {{ cls.name }}
    .gen
      .gen__title Proficiency Bonus: {{ proficiencyBonus }}
      .gen__title inspiration: {{ stats.inspiration }}


</template>

<script>
export default {
  props: ['title', 'stats', 'load'],
  data: () => {
    return {
      msg: 'testing...'
    }
  },
  computed: {
    multiClass: function(){
      return (this.stats.classes.length === 1) ? false : true
    },
    totalLevel: function(){
      let lvl = this.stats.classes.map( x => x.level )
      return lvl.reduce((a, b) => a + b, 0)
    },
    proficiencyBonus: function() {
      return 1 + Math.ceil(this.totalLevel / 4)
    }
  }
}
</script>

<style lang="sass">
  .gen
    display: block
    margin-bottom: 10px
    &__name
      font-weight: bold
      display: inline-block
      color: #fff
      font-size: 35px
      line-height: 46px
      vertical-align: middle
      span
        margin-right: 20px
    &__title
      font-weight: bold
      font-size: 12px
    &__info
      font-style: italic
      span
        display: inline-block
        margin-right: 10px

</style>
