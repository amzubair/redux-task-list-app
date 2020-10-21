export const tasks = (state) => state.tasks.data;
export const tasksIsLoading = (state) => state.tasks.isLoading;
export const addTaskIsLoading = (state) => state.tasks.isAddTaskLoading;
export const deleteTaskIsLoading = (state) => state.tasks.isDeleteTaskLoading;
export const completeTaskIsLoading = (state) =>
  state.tasks.isCompleteTaskLoading;
