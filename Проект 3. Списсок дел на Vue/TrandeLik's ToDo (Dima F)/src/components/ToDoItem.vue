<template>
    <li style="display: block">
        <input type="checkbox" v-model="task.isDone" placeholder="">
        {{task.taskText}}
        <button @click=" $emit('remove')">Удалить</button>
    </li>
</template>

<script>
    export default {
        name: "ToDoItem",
        props:['task']
    }
</script>

<style scoped>

</style>