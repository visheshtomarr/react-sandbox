import { useRef } from "react";

function UseRefExample1() {
    // We use useRef hook when we want to take a value of something and we
    // don't want to associate it with any state.
    //
    // 'useRef' always gives us an object which consist of a property "current".
    // In this 'current' property is the actual DOM element.
    const inputRef = useRef();
    const paraRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        inputRef.current.value = "hello";
        inputRef.current.style.backgroundColor = "lightgreen";
        paraRef.current.innerText = "Hey there!";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                {/* In this case, the inputRef will be the "<input>" element. */}
                <input 
                    type="text" 
                    ref={inputRef} 
                    id="name" 
                    className="form-control mb-2" 
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                {/* In this case, the paraRef will be the "<p>" element. */}
                <p ref={paraRef} onClick={() => inputRef.current.focus()}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample1;
