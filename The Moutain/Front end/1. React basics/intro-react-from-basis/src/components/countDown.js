import { useState } from "react";

const CountDown = () => {
    // state (état, données)
    const [count, setCount] = useState(0)

    // comportements
    const handleClick = () => {
        setCount(count + 1)
    }

    // affichage (render) -> return
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick} >Increment</button>
        </div>
    )
}

export default CountDown;