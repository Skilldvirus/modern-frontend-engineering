


  useEffect(() => {
    const completedCount = tasks.filter(task => task.completed).length;
    const taskString = JSON.stringify(tasks);
    localStorage.setItem('tasks', taskString);
    console.log("Completed tasks:", completedCount);
  }, [tasks]);

const [tasks, setTasks] = useState(() =>{
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  })