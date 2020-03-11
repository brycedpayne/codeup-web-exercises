'use strict'

function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve,number);
    })
}
wait(2000).then(() => console.log(`You'll see this after 2 second`))
wait(4000).then(() => console.log(`You'll see this after 4 second`));

fetch()