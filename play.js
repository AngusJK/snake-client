const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput(process.stdout);