// A shape/format expected of an object
// NOT a class
interface IUser {
    name: string;
    favLang?: string; // This can be optional if we add a question mark
    
    // We can allow additional entries if we deem necessary:
    [key: string]: any;
};

// Array of User objects
const users: IUser[] = [];

users.push({
    name: 'Sofia',
    favLang: 'TypeScript'
});

users.push({
    name: 'Sasha',
    favLang: 'SQL',
    school: 'Lighthouse Labs'
});

users.push({
    name: 'Cody',
    favLang: 'TypeScript'
});

users.push({
    name: 'Peter'
});
