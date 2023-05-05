function isOddHeavy(n){
    if (n.length === 1 ){
        return n[0] % 2 === 1
    }
    let oddArr = n.filter(el => el % 2 !== 0).sort((a,b) => a - b)
    let evenArr = n.filter(el => el % 2 === 0)
    if(oddArr.length === 0) {
        return false
    }
    return evenArr.every(el => el < oddArr[0])
}


console.log(isOddHeavy([]) === false);

// Тест №102: массив с одним четным элементом
console.log(isOddHeavy([4]) === false);

// Тест №103: массив с одним нечетным элементом
console.log(isOddHeavy([7]) === true);

// Тест №104: массив с двумя нечетными элементами, которые больше любого четного элемента
console.log(isOddHeavy([9, 5, 2, 3, 8, 7]) === true);

