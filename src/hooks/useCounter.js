import { useState } from 'react';

export default function useCounter(initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount);

    const decrement = () => {
        setCount(count - value);
    }

    const reset = () => {
        setCount(initialCount);
    }

    const increment = () => {
        setCount(count + value);
    }

    return [count, decrement, reset, increment];
}
