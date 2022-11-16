function balance(book) {
    const regex = /[a-zA-Z /\d/g/./]+/g
    // your code
    // Please use .toFixed(2) to format numbers
<<<<<<< HEAD
    let bookToArray = book.match(regex).join(' ').split(' ').filter(el => el!==' '&&el!=='' )
    let currentMoney = Number(bookToArray[0]).toFixed(2)
    let answer = `Original Balance: ${currentMoney}\r\n`
    let totalOpeations = 0
    let totalExpense = 0
    for (let i = 1; i < bookToArray.length; i++) {
        const element = bookToArray[i];
        if ((i % 3 === 0)) {
            answer += ` ${(+bookToArray[i]).toFixed(2)} Balance ${(currentMoney -= (+element)).toFixed(2)}\r\n`
            totalExpense += +element
            totalOpeations++
        } else if((i % 3 === 1) ){
            answer += `  ${element}`
        } else{
            answer += ` ${element}`
        }
    }
    return answer + `Total expense  ${totalExpense.toFixed(2)}\r\nAverage expense  ${(totalExpense / totalOpeations).toFixed(2)}`
}



  var b1 = `1000.00!=

  125 Market !=:125.45
  126 Hardware =34.95
  127 Video! 7.45
  128 Book :14.32
  129 Gasoline ::16.10
  `
  var b1sol = `Original Balance: 1000.00\r
  125 Market 125.45 Balance 874.55\r
  126 Hardware 34.95 Balance 839.60\r
  127 Video 7.45 Balance 832.15\r
  128 Book 14.32 Balance 817.83\r
  129 Gasoline 16.10 Balance 801.73\r
  Total expense  198.27\r
  Average expense  39.65`

  var b2=`1233.00
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

  var b2sol = `Original Balance: 1233.00\r
  125 Hardware 24.80 Balance 1208.20\r
  123 Flowers 93.50 Balance 1114.70\r
  127 Meat 120.90 Balance 993.80\r
  120 Picture 34.00 Balance 959.80\r
  124 Gasoline 11.00 Balance 948.80\r
  123 Photos 71.40 Balance 877.40\r
  122 Picture 93.50 Balance 783.90\r
  132 Tyres 19.00 Balance 764.90\r
  129 Stamps 13.60 Balance 751.30\r
  129 Fruits 17.60 Balance 733.70\r
  129 Market 128.00 Balance 605.70\r
  121 Gasoline 13.60 Balance 592.10\r
  Total expense  640.90\r
  Average expense  53.41`

console.log(balance(b2))
=======
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

>>>>>>> 3a12fe7eb2ace1ae1cdfc82202af1395d2d9123d
