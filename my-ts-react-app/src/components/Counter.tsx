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

    return (
        <section>
            <h2>{props.heading}</h2>
            <p>Button was clicked {state.count} times!</p>
            <button onClick={increment}>
                Click to Increment
            </button>
        </section>
    );
};

export default Counter;
