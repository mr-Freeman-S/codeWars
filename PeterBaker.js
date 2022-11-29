function cakes(recipe, available) {
    let answer = 10000000000000000
    debugger
    for (let key in recipe) {
        let count = Math.floor(available[`${key}`] / recipe[`${key}`]);
        if (isNaN(count)) {
            return 0
        }
        (count <= answer) ? answer = count : null
    }
    return answer
}

const recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available))