const { url, id, token } = require('../config/maps');
const request = require('request');

module.exports = function(req,res) {
  console.log(req.body.city);
  request.post({
    url,
    qs:{
      "auth-id":id,
      "auth-token":token
    },
    body:JSON.stringify([{city:req.body.city, state : req.body.state}])
  },(e,r,b) => {
    if(e){
      console.log(e);
    }
    else {
      console.log(b);
      res.send(b);
    }
  });
}
