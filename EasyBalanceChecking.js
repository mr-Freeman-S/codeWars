function balance(book) {
    const regex = /[a-zA-Z /\d/g /./]+/g
    // your code
    // Please use .toFixed(2) to format numbers
    let bookToArray = book.match(regex)
    let balance = bookToArray.shift()
    let answer = `Original Balance: ${balance}\r`
for (let i = 0; i < bookToArray.length; i++) {
    const element = array[i];
    if (i%2 == 0){
        answer += `Balance: `
    }
}
  }
 const input =  `1000.00!=

 125 Market !=:125.45
 126 Hardware =34.95
 127 Video! 7.45
 128 Book :14.32
 129 Gasoline ::16.10
 `
 console.log((input.match(regex)));