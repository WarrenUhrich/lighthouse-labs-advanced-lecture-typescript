// Generics have variable types... a type we can define on-the-fly
interface IContainer<T> {
    title: string;
    content: T; // You'll pick the type later when you annotate with this type
};

const myContainer: IContainer<string> = {
    title: 'Hi, Mom!',
    content: 'I\'m doing great! 👍'
};

const secondContainer: IContainer<boolean> = {
    title: 'Error Check',
    content: true
};

secondContainer.content = false;
secondContainer.content = 'hi?';
