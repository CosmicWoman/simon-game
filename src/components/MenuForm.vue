<template>
  <div class="menuForm">
    <div class="menuForm__content">
      <div class="menuForm__title">Выберите сложность</div>
      <div class="menuForm__input"
           v-for="level of lvl"
           :key="level.interval">
        <input type="radio"
               class="menuForm__input_one"
               :value="level.interval"
               :checked="level.interval === interval"
               :disabled="disabled">
        {{ level.title }}
      </div>
    </div>
    <MyButton class="menuForm__btn"
              @click="$emit('start', $event)"
              :disabled="disabled"
    >
      Начать игру
    </MyButton>

    <div class="menuForm__btn-end" v-if="status === 'end'">
      Конец игры
      <div class="menuForm__btn-end__timer">
        начать новую игру через {{ timer() }}...
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "MenuForm",
  components: {MyButton},

  props:{
    disabled: Boolean,
    interval: Number,
    lvl: [{
      title: String,
      inter: Number
    }],
    status: String
  },

  methods:{
    timer(){
      const num = (count) => {
        setTimeout(num, 1000, --count)
      }
      num(3)
    },

    checkedLvl(interval, lvl){
      if(interval===lvl){
        return 'checked'
      } else {
        return ''
      }
    }
  }

}
</script>

<style scoped lang="scss" scr="../style/menuForm.scss">

</style>