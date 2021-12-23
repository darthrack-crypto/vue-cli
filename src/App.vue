<template>
  <h1>Список задач</h1>
    <div v-if="count() == 0">Вы великолепны!</div>
    <div v-else-if="count() == 1">Осталя последний рывок!</div>
    <div v-else>Осталось сделать задач: <span class="counter">{{count()}}</span></div>
    <div class="list">
      <div class="item" v-bind:class="{done: task.done}" v-for='task in tasks' :key="task">
        <input type="checkbox" v-model="task.done">
        {{task.text}}
      </div>
    </div>
    <div class="form">
      <input v-model="textTask">
      <input type="submit" value="Добавить" @click="addTask">
    </div>
    <transition name="bounce">
      <img src="rob.jpg" alt="#" v-show="count() == 0">
    </transition>
</template>

<script>

export default {
  name: 'App',
  data() {
        return {
            nameForTask: 'Название задачи',
            tasks: [
                {text: 'Развернуть окружение в Codepen', done: true},
                {text: 'Пройти курс по Vue', done: false},
                {text: 'Сделать интернет-магазин на Vue', done: false}
            ]
        }
    },
    methods: {
        addTask() {
            this.tasks.push({text: this.textTask, done: false});
            this.textTask = '';
        },
        count() {
            return this.tasks.filter(task => !task.done).length;
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
