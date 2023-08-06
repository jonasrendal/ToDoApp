<template>
     <main>
   <div>
  <p class="text1">Task Board</p>
  <p class="text1">Current Tasks</p>
</div>
<div>
<input type="text" 
v-model="newTask" 
placeholder="Add some task homie" 
@keypress.enter = "addTask"/>
<button @click="addTask">Add</button>
</div>
<div>
  <Tasks
  v-for = "(task,i) in $store.state.tasks"
  :key = "i"
  :task  = "task"/>
</div>

</main>
</template>

<script>
export default {
  data(){
    return{
      newTask:''
  }
  },
  created() {
    // Fetch tasks from local storage and initialize component data
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.$store.commit('SET_TASKS', JSON.parse(tasks));
    }
  },
methods:{
    addTask(){
        if(this.newTask){
          this.$store.commit('ADD_TASK',this.newTask);
          this.newTask = '';
        }
      }
    }

}
</script>
