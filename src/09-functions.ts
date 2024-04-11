// const greeting = (name='World') => `Hello, ${name}!`;

const greeting = (name: string = 'World'): string => `Hello, ${name}!`;

greeting();

// If you have no return / return value, say 'void'
const consoleLogGreeting = (): void => {
    console.log('Greetings and salutations!');
};
