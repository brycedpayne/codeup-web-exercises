const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filterUsers = users.filter(user => user.languages.length >= 3);

console.log(filterUsers);

let mapUsers = users.map(user => user.email);

console.log(mapUsers);

let reduceUsers = users.reduce((acc, user) => acc + user.yearsOfExperience,0);

console.log(reduceUsers);

let longestEmail = users.reduce((acc,user) => user.email.length > acc.length ? user.email : acc,'');

console.log(longestEmail);

let reduceNames = users.reduce((acc,user) => acc + user.name + ', ','');

console.log(`Your Codeup instructors are: ${reduceNames}`);

let allLang = users.reduce((acc, user) => acc.concat(user.languages),[]).reduce((unique, lang) => unique.includes(lang) ? unique : [...unique, lang],[]);

console.log(allLang);
