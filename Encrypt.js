const encryptThis = function (text) {
const arrayText = text.split(' ')
    for (let i = 0; i < arrayText.length; i++) {
        const arrayWord = arrayText[i].split('')
        arrayWord[0] = arrayWord[0].charCodeAt(0)
        arrayWord.push(...arrayWord.splice(1, 1, arrayWord.pop()))
        arrayText[i] = arrayWord.join('')
    }

    return arrayText.join(' ')
}

console.log(encryptThis('A wise old owl lived in an oak'))