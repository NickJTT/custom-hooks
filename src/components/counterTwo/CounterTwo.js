import React from 'react';
import useCounter from './../../hooks/useCounter';

export default function CounterTwo() {
    const [count, decrement, reset, increment] = useCounter(10, 5);

    return (
        <React.Fragment>
            <p>Count: { count }</p>
            <button onClick = { decrement }>Decrement</button>
            <button onClick = { reset }>Reset</button>
            <button onClick = { increment }>Increment</button>
        </React.Fragment>
    );
}
