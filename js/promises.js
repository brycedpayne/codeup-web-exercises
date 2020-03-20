'use strict'

function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    })
}

// wait(2000).then(() => console.log(`You'll see this after 2 second`))
// wait(4000).then(() => console.log(`You'll see this after 4 second`));


// let userSrch = prompt('What is the Username of the account you are looking for? :');

const myPromise = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubKey}`}})
        .then((response) => {
            let events = response.json().then((data) => {
                let lastPush = data;
                console.log(lastPush);
                for (let i = 0; i < lastPush.length; i++) {
                    if (lastPush[i].type === 'PushEvent') {
                        console.log(lastPush[i].created_at);
                        break;
                    }

                }
            })
        })
        .catch(error => console.log(error));
}

myPromise('brycedpayne');

// function githubUser(username) {
//     return new Promise((resolve, reject) => {
//
//         return resolve
//
//     })
// }
//
// fetch(`https://api.github.com/users/:` + username + `/events/public`, {headers: {'Authorization': `${githubKey}`}})
