<template>
  <v-main>
    <v-container class="task-board">
      <div class="todolist">
      <h1 class="todolist-title">Vue ToDo List</h1>
      </div>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container class="main-container">
            <TotalTaskCount
            />
            </v-container>
            <v-card-text>
              <v-container class="tasks-container">
              <Tasks
                v-for="(task, i) in $store.state.tasks"
                :key="i"
                :task="task"
              />
            </v-container>
            <v-container class="input-field">
            <v-text-field 
                v-model="newTask"
                label="Add Task Here"
                @keyup.enter="addTask"
                variant="outlined"
                ></v-text-field>
            </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data(){
    return{
      newTask:''
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
