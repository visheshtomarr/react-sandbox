import React, { useState, useCallback } from "react";

function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    // 'useCallback' hook works in a similar way as that of 'useMemo',
    // where useMemo returns a memoized value, useCallback returns a memoized function.
    // So, in this case, the new task will be added to the state, but not rendered everytime
    // we click on 'addTask'. 
    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task']);
    }, [setTasks])

    return (
        <div>
            <Button addtask={addTask}/>
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    )
}

const Button = React.memo(({ addtask }) => {
    console.log('Button rendered');
    return (
        <div>
            <button className="btn btn-primary" onClick={addtask}>Add task</button>
        </div>
    )
})

export default UseCallbackExample;
