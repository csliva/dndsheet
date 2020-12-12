<template lang="pug">
  .combat
    .combat__panel
      h3 Attacks
      .combat__item(v-for="attack in attacks")
        b {{ attack.name }}
        span {{ attack.dice }}
        span {{ attack.type }}
        button(@click='alert("Roll Attack")') Attack
    .combat__panel
      h3 Defenses
      .combat__item(v-for="defense in defenses")
        b {{ defense.name }}
        span Info...
        button(@click='alert("Equip Item")') Equip

</template>

<script>
export default {
  data: () => {
    return {
      attacks: [
        { name: 'Longsword', dice: 'd8', type: 'Slashing' },
        { name: 'Dagger', dice: 'd4', type: 'Piercing' },
        { name: 'Light Crossbow', dice: 'd6', type: 'Piercing' }
      ],
      defenses: [
        { name: 'Studded Leather' },
        { name: 'Shield' }
      ]
    }
  },
  methods: {
    alert: function(msg) {
      alert(msg)
    }
  }
}
</script>

<style lang="sass">
  @import "./assets/css/settings/_config.sass"
  @import "./assets/css/utilities/_mixins.sass"
  .combat
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 40px
    height: 100%
    &__panel
      height: 100%
    &__item
      +box-shadow()
      background-color: transparentize(lighten($clr-body, 3%), 0.8)
      border: solid 1px transparentize(#fff, 0.75)
      padding: 10px
      margin-bottom: 10px
      b,
      span
        margin-right: 10px
      button
        color: $clr-link
        border: 0
        background-color: transparent
</style>
