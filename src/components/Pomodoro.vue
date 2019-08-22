<template>
  <div>
    <h1>{{min}}:{{seconds | secondMask}}</h1>
    <div>
      <button @click="startTimer">Start</button>
      <button @click="stopTimer">Stop</button>
      <button @click="resetTimer">Reset</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Pomodoro',
  data: function () {
    return {
      min: 25,
      seconds: 0,
      intervalTime: null
    }
  },
  methods: {
    startTimer: function () {
      this.intervalTime = window.setInterval(() => {
        if (this.seconds === 0) {
          if (this.min === 0) {
            return false
          } else {
            this.min--
            this.seconds = 60
          }
        }
        this.seconds--
      }, 1000)
    },
    stopTimer: function () {
      clearInterval(this.intervalTime)
    },
    resetTimer: function () {
      this.min = 25
      this.seconds = 0
    }

  },
  filters: {
    secondMask: function (val) {
      if (val === 0) {
        return '00'
      }
      return val
    }
  }

}
</script>

<style scoped>

</style>
