import React, { useState } from 'react';

interface ICounterProps {
    heading: string;
};

interface ICounterState {
    count: number;
};

const Counter: React.FC<ICounterProps> = (props) => {
    const [state, setState] = useState<ICounterState>({ count: 0 });

    const increment = (): void => {
        setState(prev => ({count: prev.count + 1}));
    };

    const decrement = (): void => {
        setState(prev => ({count: prev.count - 1}));
    };

    return (
        <section>
            <h2>{props.heading}</h2>
            <p>
                The current count is: {state.count}
            </p>
            <button onClick={increment}>
                Click here to Increment
            </button>
            <button onClick={decrement}>
                Click here to Decrement
            </button>
        </section>
    );
};

export default Counter;