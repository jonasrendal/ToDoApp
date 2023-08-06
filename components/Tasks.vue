<template> 
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
        <div class="button">
            <button @click="toggleDone">{{ task.done ? 'Undo': 'Done' }}</button>
            <button @click="removeTask">Delete</button>
        </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task);
      this.updateLocalStorage();
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
    },
  },
  watch: {
    task: {
      handler(newTask) {
        this.task = newTask;
      },
      deep: true,
    },
  },
};
</script>

<style>

</style>