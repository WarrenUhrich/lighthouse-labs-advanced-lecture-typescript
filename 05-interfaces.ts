// An interface lets us decide the expected properties and their data-types.
interface User {
    name: string;
    favLang?: string;   // ? tells TS that this is an OPTIONAL property.
    [key: string]: any; // Allow any extra properties/types that we'd like.
};

const users: User[] = [];

users.push({
    name: 'Erin',
    favLang: 'Python'
});

users.push({
    name: 'Rylan',
    favLang: 'Ruby',
    school: 'Lighthouse Labs'
});

users.push({
    name: 'Eric',
});

users.push({
    name: 'Victoria',
    favLang: 'Ruby'
});

users.push({
    name: 'Daniel'
});
