import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true);

    // Funtion to handle onclick event.
    const toggleTodo = () => setShowTodo(!showTodo);

    return (
        <div>
            {showTodo && <Todo />}
            <button 
                className="btn btn-primary" 
                onClick={toggleTodo}
            >
                Toggle Todo!
            </button>
        </div>
    )
}

export default UseRefExample3;
