<template>
  <div>
    <button @click="setSortKey('all')">Все</button>
    <button @click="setSortKey(true)">Выполненные</button>
    <button @click="setSortKey(false)">Неволненные</button><br><br>
    <input type="text" placeholder="Введите задачу" v-model="newTask">
    <button @click="append">Добавить</button>
    <ul>
      <ToDoItem @remove="removeTaskfromAllTasks(task.id)" v-for="task in sortedTasks" v-bind:key="task.id" v-bind:task="task"></ToDoItem>
    </ul>
  </div>
</template>

<script>
  import ToDoItem from './ToDoItem.vue'
export default {
  name: 'ToDo',

  components: {
    ToDoItem
  },

  data() {
    return {
      newTask: '',
      allTasks: [],
      sortKey: 'all',
      nextTaskId: 0
    }
  },

  computed:{
    sortedTasks: function () {
      let key = this.sortKey;
      if (key === 'all') return this.allTasks;
      let tasks = [];
      this.allTasks.forEach(function (task) {
        if (task.isDone === key) tasks.push(task)
      });
      return tasks;
    }
  },

  methods: {
    append(){
      this.allTasks.push({'taskText' : this.newTask, 'isDone' : false, 'id' : this.nextTaskId});
      this.nextTaskId++;
    },
    setSortKey(key){
      this.sortKey = key;
    },
    removeTaskfromAllTasks(id){
      this.allTasks.forEach(function (task, i, all) {
          if (task.id === id) all.splice(all.indexOf(task), 1)
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
