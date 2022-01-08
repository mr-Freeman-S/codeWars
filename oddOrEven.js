function oddOrEven(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum += array[index]
    }
    if (sum % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
 }