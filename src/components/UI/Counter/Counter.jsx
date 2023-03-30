import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function Increment() {
        setCount(count + 1)

    }

    function Decrement() {

        setCount(count - 1)

    }

    return (
        <div>
            <button onClick={Increment}> Like </button>
            <button onClick={Decrement}> Dislike </button>
            <h4>{count}</h4>
        </div>
    )
}

export default Counter;