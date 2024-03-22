<template>
  <div class="simonGame">
    <div class="simonGame__content">

      <div class="simonGame__title">
        Simon Game
      </div>

      <div class="simonGame__blockGame blockGame">
        <div class="blockGame__title">
          Раунд: {{ round }}
        </div>

        <div class="blockGame__block">
          <div class="blockGame__btn">
            <MyButton v-for="btn of btnGame"
                      :key="btn.id"
                      :id="btn.id"
                      :class="['blockGame__btn_' + btn.color, [btn.active ? 'active' : '']]"
                      @click="onclickBtn(btn.id, btn.sound)"
                      :disabled="btnGameActive.isDisabled"
            />
          </div>
          <div class="blockGame__info">
            <div class="blockGame__info_lvl lvl">
              <div class="lvl__title">Сложность</div>
              <div class="lvl__input" v-for="lvl of level" :key="lvl.interval">
                <input type="radio"
                       class="lvl__input_one"
                       :value="lvl.interval"
                       v-model="interval"
                       :disabled="lvlActive.isDisabled">
                {{ lvl.title }}
              </div>
            </div>
            <MyButton class="blockGame__info_btn btn"
                      v-on:click="startGame"
                      :disabled="buttonActive.isDisabled">
              Начать игру
            </MyButton>

            <div class="blockGame__info_end end" v-if="status === 'end'">
              <div class="end__title">
                Конец игры
                <MyButton class="end__title_btn btn"
                          v-on:click="status = 'none'">
                  Ok
                </MyButton>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  data() {
    return {
      status: 'none',
      simonSet: [],
      userSet: [],
      click: 0,
      interval: 1500,
      level: [
        {
          title: "Легкий",
          interval: 1500
        },
        {
          title: "Средний",
          interval: 1000
        },
        {
          title: "Сложный",
          interval: 400
        }
      ],
      round: 1,
      lvlActive: {
        isDisabled: false
      },
      buttonActive: {
        isDisabled: false
      },
      btnGameActive: {
        isDisabled: false
      },
      audio: {
        src: ""
      },
      btnGame: [
        {
          id: 1,
          color: "red",
          active: false,
          sound: 'simongame_1'
        },
        {
          id: 2,
          color: "blue",
          active: false,
          sound: 'simongame_2'
        },
        {
          id: 3,
          color: "yellow",
          active: false,
          sound: 'simongame_3'
        },
        {
          id: 4,
          color: "green",
          active: false,
          sound: 'simongame_4'
        }
      ],
    }
  },

  mounted() {
    this.$watch('status', function () {
      if (this.status === 'end') this.gameReset()
      if (this.status === 'round') this.roundNext()
    })
  },

  methods: {
    setStatus() {
      this.status = 'none'
    },

    startGame() {
      this.lvlActive.isDisabled = true
      this.buttonActive.isDisabled = true
      this.btnGameActive.isDisabled = true
      for (let i = 0; i < this.round; i++) {
        this.simonSet.push(Math.floor(Math.random() * 4))
      }
      this.runGame()
    },

    runGame() {
      for (let i = 1; i <= this.simonSet.length; i++) {
        let id = i - 1
        let idBtn = this.simonSet[id] - 1
        setTimeout(() => {
          this.playSound(this.btnGame[idBtn].sound)
          this.btnGame[idBtn].active = true
          setTimeout(() => {
            this.btnGame[idBtn].active = false
          }, 300)
        }, this.interval * i, id)
      }
      this.btnGameActive.isDisabled = false
      this.status = 'run'

    },

    onclickBtn(btn, song) {
      this.playSound(song)
      if (this.status === 'run') {
        this.userSet.push(btn)
        if (btn === this.simonSet[this.click] && this.userSet.length === this.simonSet.length) {
          this.status = 'round'
        } else if (btn !== this.simonSet[this.click]) {
          this.status = 'end'
        } else {
          this.click++
        }
      }
    },

    roundNext() {
      this.userSet = []
      this.click = 0
      this.round++
      this.simonSet.push(Math.floor(Math.random() * 4 + 1))
      this.runGame()
    },

    gameReset() {
      this.simonSet = []
      this.userSet = []
      this.round = 1
      this.lvlActive.isDisabled = false
      this.buttonActive.isDisabled = false
    },

    playSound(sound) {
      let audio = new Audio(require(`/src/static/${sound}.mp3`))
      audio.play()
    }
  },

}
</script>

<style scoped lang="scss" src="../style/nullstyle.scss"/>

<style scoped lang="scss" src="../style/simonGame.scss"/>