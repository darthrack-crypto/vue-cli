<template>
  <div class="list">
    <div
      class="item"
      v-bind:class="{ done: task.done }"
      v-for="task in tasks"
      :key="task.text"
    >
      <input type="checkbox" v-model="task.done" />
      {{ task.text }}<like/>
    </div>
  </div>
</template>

<script>
import Like from './Like.vue';

module.exports = {
  data() {
        return {
            
        }
    },
    props: ['task', 'tasks'],
    components: {
        Like
    }
}
</script>

<style>
</style>