var extension = require('lambda-integrator-extension');
var functions = require('./functions');

var options = { diy: functions };
// var options = { connectors: { _connectorId: functions } }; // for connectors
exports.handler = extension.createHandler(options);