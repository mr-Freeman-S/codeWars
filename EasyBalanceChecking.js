function balance(book) {
    const regex = /[a-zA-Z /\d/g/./]+/g
    // your code
    // Please use .toFixed(2) to format numbers
    let bookToArray = book.match(regex).filter(el => el!==' ').join('')
    let currentMoney = bookToArray.shift()
    let answer = `Original Balance ${currentMoney}\r\n`
    let totalExpense = 0
    for (let i = 0; i < bookToArray.length; i++) {
        const element = bookToArray[i];
        if (i % 2 === 1) {
            answer += `${bookToArray[i]} Balance: ${(currentMoney -= (+element)).toFixed(2)}\r\n`
            totalExpense += +element
        } else {
            answer += element

        }
    }
    console.log(answer)
    return answer + `Total expense  ${totalExpense.toFixed(2)}\r\nAverage expense  ${(totalExpense / ((bookToArray.length) / 2)).toFixed(2)}`
}

const input = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`
console.log(balance(input));

