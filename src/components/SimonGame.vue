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
            <button v-for="btn of btnGame"
                    v-bind:key="btn.id"
                    :class="['blockGame__btn_' + btn.color + ' ' + [btn.active ? 'active' : '']]"
                    :id="btn.id"
                    v-on:click="onclickBtn(btn.id, btn.sound)"
                    :disabled="btnGameActive.isDisabled"/>
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
            <button class="blockGame__info_btn"
                    data-action="start"
                    v-on:click="startGame"
                    :disabled="buttonActive.isDisabled">
              Начать игру
            </button>

            <div class="blockGame__info_end" v-if="status === 'end'">
              Конец игры
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
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
          name: "difficulty",
          interval: 1500
        },
        {
          title: "Средний",
          name: "difficulty",
          interval: 1000
        },
        {
          title: "Сложный",
          name: "difficulty",
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

  methods: {

    startGame() {
      this.lvlActive.isDisabled = true
      this.buttonActive.isDisabled = true
      this.btnGameActive.isDisabled = true
      for (let i = 0; i < this.round; i++) {
        this.simonSet.push(Math.floor(Math.random() * (5 - 1) + 1))
      }
      let i = 1;
      let j = 0;
      for (let elem of this.simonSet) {
        setTimeout(() => {
          this.playSound(this.btnGame[elem - 1].sound)
          this.btnGame[elem - 1].active = true
          setTimeout(() => {
            this.btnGame[elem - 1].active = false
            j++
            if (j === this.simonSet.length) this.btnGameActive.isDisabled = false
          }, 300)

        }, this.interval * i++, j)
      }
      this.status = 'run'
    },

    onclickBtn(btn, song) {
      this.playSound(song)
      if (this.status === 'run') {
        this.userSet.push(btn)
        if (btn === this.simonSet[this.click] && this.userSet.length === this.simonSet.length) {
          this.roundNext()
          this.startGame()
        } else if (btn !== this.simonSet[this.click]) {
          this.gameReset()
        } else {
          this.click++
        }
      }
    },

    roundNext() {
      this.simonSet = []
      this.userSet = []
      this.click = 0
      this.round++
    },

    gameReset() {
      this.round = 1
      this.lvlActive.isDisabled = false
      this.buttonActive.isDisabled = false
      this.status = 'end'
      setTimeout(() => {
        this.status = 'none'
      }, 3000)
    },

    playSound(sound) {
      let audio = new Audio(require(`/src/static/${sound}.mp3`))
      audio.play()
    }
  }
}
</script>

<style scoped lang="scss" src="../style/nullstyle.scss"/>

<style scoped lang="scss" src="../style/simonGame.scss"/>