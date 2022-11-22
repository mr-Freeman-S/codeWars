function invert(array) {
    return array.map(el => (el >= 0 ? -Math.abs(el) : Math.abs(el)))
}

console.log(invert([1,-3,0,1]))