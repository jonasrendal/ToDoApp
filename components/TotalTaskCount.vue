<template>
<v-app>
      <v-container class="main-container">
                <v-col class="text-right">
                <v-btn variant="text" class="task-counter">Tasks: <span class="count">{{ $store.state.taskCount }}</span></v-btn>
                <v-btn @click="deleteDoneTasks"><v-icon>mdi-delete</v-icon>Task Done:{{ $store.state.completedTaskCount }}</v-btn>
                <v-btn @click="deleteAllTasks"><v-icon>mdi-delete</v-icon>Tasks</v-btn>
                </v-col>
      </v-container>
  </v-app>
    
</template>

<script>
export default {
    methods:{
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
      },
    deleteDoneTasks() {
        this.$store.commit('DELETE_DONE_TASKS', this.task);
        this.updateLocalStorage();
      },
    deleteAllTasks() {
        this.$store.commit('REMOVE_ALL_TASKS', this.task);
        this.updateLocalStorage();
      },
    }

}
</script>

<style>

</style>
