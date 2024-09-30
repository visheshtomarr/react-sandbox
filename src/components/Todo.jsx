import { useState, useEffect, useRef } from "react";

function Todo() {
    const [todo, setTodo] = useState({});
    const [loading, setLoading] = useState(true);

    // Create a useRef which is a reference to the component being mounted or unmounted.
    const isMounted = useRef(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    // We only want to fetch and set data to our state if the 
                    // component is mounted.
                    if (isMounted.current) {
                        setTodo(data);
                        setLoading(false);
                    }
                }, 3000)
            })
            
        // Runs when the todo component is unmounted.
        return () => {
            isMounted.current = false;
        }
        
        // We want to add 'isMounted' as a dependency so that whenever its value
        // changes, the useEffect runs.
    }, [isMounted])

    return (
        loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
    )
}

export default Todo;
