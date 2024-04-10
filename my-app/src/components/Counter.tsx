import React, { useState } from 'react';

interface CounterProps {
    heading: string;
};

interface CounterState {
    count: number;
}

const Counter: React.FC<CounterProps> = (props) => {
    const [state, setState] = useState<CounterState>({count: 0});

    const increment = (): void => {
        setState(prevState => ({ count: prevState.count + 1 }));
    };

    return(
        <section>
            <h2>{props.heading}</h2>
            <p>
                The current count is: {state.count}
                <button onClick={increment}>
                    Click to Increase
                </button>
            </p>
        </section>
    );
};

export default Counter;
