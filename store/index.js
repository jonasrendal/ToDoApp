export const state = () =>({
    tasks:[]
})

// export const mutations = {
//     ADD_TASK(state,task){
//         state.tasks = [{content:task,done:false},...state.tasks];
//     },
//     REMOVE_TASK(state,task){
//         state.tasks = splice(state.tasks.indexOf(task),1);
//     },  
//     TOGGLE_TASK(state,task){
//         task.done = !task.done
//     }
// }

function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const mutations = {
    ADD_TASK(state, task) {
      state.tasks = [{ content: task, done: false }, ...state.tasks];
      updateLocalStorage(state.tasks);
    },
    REMOVE_TASK(state, task) {
      const index = state.tasks.indexOf(task);
      if (index !== -1) {
        state.tasks.splice(index, 1);
        updateLocalStorage(state.tasks);
      }
    },
    TOGGLE_TASK(state, task) {
      task.done = !task.done;
      updateLocalStorage(state.tasks);
    },
  };