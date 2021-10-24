// ./pact/publish.js
let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
    pactBroker: 'https://codistan.pactflow.io/',
    pactBrokerToken: '-RH20pAZyb7NstAJki9TKA',
    consumerVersion: "2.0.0",
    pactFilesOrDirs:['./pacts']
};

publisher.publishPacts(opts).then(() => console.log("Pacts successfully published")).catch((err)=>{
    console.log(err)
});

