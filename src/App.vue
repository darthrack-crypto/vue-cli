<template>
  <h1>Список задач</h1>
    <div v-if="count() == 0">Вы великолепны!</div>
    <div v-else-if="count() == 1">Осталя последний рывок!</div>
    <div v-else>Осталось сделать задач: <span class="counter">{{count()}}</span></div>

    
    <div class="list">
      <div class="item" v-bind:class="{done: task.done}" v-for='task in uncompletedTasks()' :key="task.text">
        <input type="checkbox" v-model="task.done">
        {{task.text}}<like/>
      </div>
    </div>

    <div class="form">
      <input v-model="textTask">
      <input type="submit" value="Добавить" @click="addTask">
    </div>
    <transition name="bounce">
      <img src="rob.jpg" alt="#" v-show="count() == 0">
    </transition>

    <div class="list">
      <div class="item" v-bind:class="{done: task.done}" v-for='task in completeTasks()' :key="task.text">
        <input type="checkbox" v-model="task.done">
        {{task.text}}<like/>
      </div>
    </div>

</template>

<script>


import like from './components/Like.vue'

export default {
  name: 'App',
  data() {
        return {
            textTask: '',
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
        },
        completeTasks() {
          return this.tasks.filter(task => task.done);
        },
        uncompletedTasks() {
          return this.tasks.filter(task => !task.done);
        }
    },
    components: {
      like
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
