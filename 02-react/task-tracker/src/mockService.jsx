const mockFetchTasks = ({ shouldFail = false } = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Mock task request failed."));
        return;
      }

      const tasks = [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
      ];
      resolve(tasks);
    }, 1500);
  });
};

export default mockFetchTasks;