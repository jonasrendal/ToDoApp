<template>
  <v-app>
    <div :class="`task ${task.done ? 'is-complete' : ''}`">
      <v-container>
        <v-row class="data-column" >
          <v-col class ="data-container" cols="12">
            <v-col cols ="6" class="content">{{ task.content }}</v-col>
            <v-col cols ="6" class="text-right" >
              <button @click="toggleDone">
                <v-icon>{{ task.done ? 'mdi-check-circle' : 'mdi-check-circle' }}</v-icon>
              </button>
              <button @click="removeTask">
                <v-icon>mdi-alpha-x-circle</v-icon>
              </button>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>  
  </v-app>
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
    }
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