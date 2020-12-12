<template lang="pug">
div#diceroller.col
    div.row
        DiceControl(label="d4" ref="d4")
        DiceControl(label="d6" ref="d6")
        DiceControl(label="d8" ref="d8")
        DiceControl(label="d10" ref="d10")
        DiceControl(label="d12" ref="d12")
        DiceControl(label="d20" ref="d20")
    div.row
        label Mod
        input(type="number")
    button(@click="test") Roll
    button(@click="clear") Clear
        
</template>
<style lang="sass">
.row
    display: flex
    flex-direction: row
.col
    display: flex
    flex-direction: column
</style>
<script>
import DiceControl from './Blocks/DiceControl.vue'
    export default {
      name: 'App',
      components: {
        DiceControl
      },
      data: () => {
        return {}
        },
        methods: {
            getDice: function(){
                return [
                    {"name": "d4", "max": 4, "rolls": this.$refs.d4.num},
                    {"name": "d6", "max": 6, "rolls": this.$refs.d6.num},
                    {"name": "d8", "max": 8, "rolls": this.$refs.d8.num},
                    {"name": "d10", "max": 10, "rolls": this.$refs.d10.num},
                    {"name": "d12", "max": 12, "rolls": this.$refs.d12.num},
                    {"name": "d20", "max": 20, "rolls": this.$refs.d20.num}
                ]
            },
            test: function(){
                let res = rand(this.getDice())
                alert(res)
            },
            clear: function(){
                let dice = this.getDice()
                console.log(this.$refs)
                console.log(dice)
                for (var i=0;i<dice.length;i++){
                    this.$refs[dice[i].name].num = 0
                }
            }
        }
    }

    let rand = function(obj) {
        let res = 0;
        for (var i=0;i<obj.length;i++){
            for (var j=0;j<obj[i].rolls;j++){
                res = res + Math.floor(Math.random() * obj[i].max) + 1;
            }
        }
        return res
    }
</script>