export const state = () =>({
    tasks:[],
    taskCount: 0,
    completedTaskCount: 0,
})

function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const mutations = {
    ADD_TASK(state, task) {
      state.tasks = [{ content: task, done: false }, ...state.tasks];
      updateLocalStorage(state.tasks);
      state.taskCount++;
    },
    REMOVE_TASK(state, task) {
      const index = state.tasks.indexOf(task);

      if (index !== -1) {

        const taskToDelete = state.tasks[index];
        const toBeDeletedTaskCount = taskToDelete.done;

        state.tasks.splice(index, 1);
        updateLocalStorage(state.tasks);
        state.taskCount--;

        if (toBeDeletedTaskCount)
        { 
          state.completedTaskCount--; 
        }
      }
    },
    TOGGLE_TASK(state, task) {
      task.done = !task.done;
      if (task.done) {
        updateLocalStorage(state.tasks);
        state.completedTaskCount++;
      } else {
        updateLocalStorage(state.tasks);
        state.completedTaskCount--;
      }
    },
    DELETE_DONE_TASKS(state) {
      const unDoneTask =  state.tasks = state.tasks.filter(task => !task.done);
      const unDoneTaskCount = unDoneTask.length

      state.completedTaskCount = state.tasks.reduce((count, task) => count + (task.done ? 1 : 0), 0);
      state.taskCount = unDoneTaskCount;
      updateLocalStorage(state.tasks);
    },
    REMOVE_ALL_TASKS(state) {
      state.tasks = [];
      state.taskCount = 0;
      state.completedTaskCount = 0;
    },
  };