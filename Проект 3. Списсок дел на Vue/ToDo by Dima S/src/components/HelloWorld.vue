<template>
<div>
  <h1>TodoList</h1>
  <nav>
    <button @click="changeShowKey('all')">Все</button>
    <button @click="changeShowKey('done')">Выполненные</button>
    <button @click="changeShowKey('undone')">Невыполненные</button>
  </nav>
  <input type="text" placeholder="Что нужно сделать?" v-model="newTask">
  <button @click="add()">Добавить</button>
  <ul>
      <li :key="i" v-for="(task, i) in tasks">
        <div v-if="(task.done & showDoneTask()) || ((!task.done) & showUndoneTask())" >
          <input type="checkbox" @change="changeStatus(i)" :checked="task.done"/>
          <p v-if="task.done & showDoneTask()"><s>{{task.text}}</s></p>
          <p v-else-if="(!task.done) & showUndoneTask()">{{task.text}}</p>
          <button @click="deleteTask(i)">Удалить</button>
        </div>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    msg: String,
  },
  data(){
    return {
      newTask:'',
      tasks: [],
      show: 'all',
    }
  },
  methods: {
    add() {
      this.tasks.push({text: this.newTask, done: false});
      this.newTask = '';
    },

    changeStatus(i) {
      this.tasks[i].done = !this.tasks[i].done;
    },

    deleteTask(i) {
      this.tasks.splice(i,1);
    },

    showDoneTask() {
      return (this.show == 'all' || this.show == 'done');
    },

    showUndoneTask() {
      return (this.show == 'all' || this.show == 'undone');
    },

    changeShowKey(key) {
      this.show = key;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  text-align: center;
  padding: 0;
}

p{
  display:inline-block;
  margin:0;
}

nav{
  margin-bottom:10px;
}
</style>
