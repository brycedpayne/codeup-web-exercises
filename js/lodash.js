const _ = require('lodash');

function onRequest(request, response) {

request.then(()) =>  {
        function pickNum(first, end) {
            return _.random(first, end)
        }

        console.log(pickNum(1, 10));
        console.log(_.random(1, 10));
    };
}

onRequest()