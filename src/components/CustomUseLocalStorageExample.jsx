import useLocalStorage from "../hooks/useLocalStorage";

function CustomUseLocalStorageExample() {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    // Function to handle form submission.
    const handleSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            title: task,
            completed: false,
            date: new Date().toLocaleDateString(),
        }

        setTasks([...tasks, taskObj]);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-50">
                <div className="mb-3">
                    <label className="form-html">Task</label>
                    <input 
                        className="form-control" 
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                        Submit
                </button>
            </form>

            <hr />

            {tasks.map((task) => (
                <h3 key={task.date}>{task.title}</h3>
            ))}
        </>
    )
}

export default CustomUseLocalStorageExample;