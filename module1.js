var rand = function (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var randNum = function number() {
  return rand(100, 1000000);
};

module.exports = randNum;
// module.exports = randNumGen;
