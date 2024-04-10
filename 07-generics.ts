interface Container<T> {
    title: string;
    contents: T; // a dynamic / passed-in type
}

const myContainer: Container<string> = {
    title: 'Hi Mom!',
    contents: 'This is the content!'
};
