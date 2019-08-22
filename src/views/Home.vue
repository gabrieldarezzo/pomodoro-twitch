<template>
  <div class="home">
    <Pomodoro />
  </div>
</template>

<script>
// @ is an alias to /src
import Pomodoro from '@/components/Pomodoro.vue'

export default {
  name: 'home',
  components: {
    Pomodoro
  }
}
</script>
