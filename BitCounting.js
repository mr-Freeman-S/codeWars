var countBits = function(n) {


    return +n.toString(2).split('').reduce((previousValue,currentValue) => +previousValue + +currentValue)
};
countBits(1234)

console.log(countBits(1234))