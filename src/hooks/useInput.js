import { useState } from 'react';

export default function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    }

    const bind = { value, onChange: event => setValue(event.target.value) };

    return [value, bind, reset];
}
