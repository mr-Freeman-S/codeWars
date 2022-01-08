function cost(mins) {
    if (mins < 65) {
        return 30
    }
    let cost = mins / 30
    if (mins % 30 > 5) {
        return ((Math.ceil(cost) - 2) * 10) + 30
    } else {
        return ((Math.floor(cost) - 2) * 10) + 30
    }

    
}
console.log(cost(84))
