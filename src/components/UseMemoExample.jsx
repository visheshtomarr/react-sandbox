import { useState, useEffect, useMemo, useRef } from "react";

function UseMemoExample() {
    const [number, setNumber] = useState(1);
    // eslint-disable-next-line
    const [increment, setIncrement] = useState(0);

    // If there is an expensive function in our code which takes up a lot of time to
    // execute, then we can use 'useMemo' hook on that function.
    // 'useMemo' hook performs 'Memoization', the process of storing the result of an 
    // expensive function in cache memory, so that when that funciton is called again with same parameters,
    // it won't take too much time to execute.
    const sqrt = useMemo(() => getSqrt(number), [number]);

    const renders = useRef(1);

    const handleClick = () => {
        setIncrement((prevState) => {
            console.log(prevState + 1);
            return prevState + 1;
        })
    }

    function getSqrt(n) {
        for (let i = 1; i <= 10000; i++) {
            console.log(i);
        }
        console.log("Expensive function called!");
        return Math.sqrt(n);
    }

    useEffect(() => {
        renders.current += 1;
    })

    return (
        <div>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="form-control w-25"    
            />

            <h2 className="my-3">
                The sqrt of {number} is {sqrt}
            </h2>

            <button onClick={handleClick} className="btn btn-primary">
                Re-render
            </button>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

export default UseMemoExample;
