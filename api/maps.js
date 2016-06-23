const { url, id, token } = require('../config/maps');
const request = require('request');
const addressValidator = require('address-validator');

module.exports = function(req,res) {
  console.log(req.body.address);
  addressValidator.validate(req.body.address, addressValidator.match.unknown, function(err, exact, inexact){
    for(i in exact){
      inexact.unshift(exact[i]);
    }
    res.send(JSON.stringify(inexact));
  });
}
