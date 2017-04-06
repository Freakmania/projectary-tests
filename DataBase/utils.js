'use strict';

class Utils {

  // Used to decide if user is a student or a teacher(1-2)
  genType() {
    var rng = Math.random();
    if (rng < 0.5) { return 1;}
    else { return 2;}
  }

  genPass(passLength) {
    var alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var pass = "";
    for (var i = 0; i < passLength; i++) {
      var j = Math.floor(Math.random() * alphaNum.length);
      pass += alphaNum.charAt(j);
    }
    return pass;
  }

}

module.exports = Utils;