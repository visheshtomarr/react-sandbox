import { useRef, useState, useEffect } from "react";

function UseRefExample2() {
    const [name, setName] = useState('');

    // We wanted to set a reference to the number of renders. 
    // We set a default value of '1' because when we first load the component,
    // that is the first render.
    const renders = useRef(1);

    // In this, we will be storing the previous state of the 'name' variable.
    const prevName = useRef('');

    // This 'useEffect' will run everytime the state of 'name' changes.
    // The 'renders' hook will be incremented with every render after state change.
    // The 'prevName' hook holds the previous state of 'name'. 
    useEffect(() => {
        renders.current += 1;
        prevName.current = name;
    }, [name])

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Previous name state: {prevName.current}</h2>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
            />
        </div>
    )
}

export default UseRefExample2;
