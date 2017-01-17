var module1 = require('./module1');
var module2 = require('./module2');

exports.amount = function() {
  return (module2(module1()));
};

exports.account = function() {
  return ('Account balance:' + '\n');
};
