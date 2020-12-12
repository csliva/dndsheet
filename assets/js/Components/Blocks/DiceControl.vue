<template lang="pug">
div#dicecontrol
    label {{label}}
    input(type="number" v-model="num" min=0 value=0) 
        
</template>
<style lang="sass">
#dicecontrol input, #dicecontrol label
    width: 50px
    display: block
    text-align: center
</style>
<script>
export default {
    props: ['label'],
    data: () => {
        return {
            num: 0
        }
    },
}
</script>