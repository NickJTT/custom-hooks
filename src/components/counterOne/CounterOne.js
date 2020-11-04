import React from 'react';
import useCounter from './../../hooks/useCounter';

export default function CounterOne() {
    const [count, decrement, reset, increment] = useCounter();

    return (
        <React.Fragment>
            <p>Count: { count }</p>
            <button onClick = { decrement }>Decrement</button>
            <button onClick = { reset }>Reset</button>
            <button onClick = { increment }>Increment</button>
        </React.Fragment>
    );
}
