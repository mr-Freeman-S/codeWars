function scramble(str1, str2) {
    const charCount1 = countCharacters(str1);
    const charCount2 = countCharacters(str2);

    for (const char in charCount2) {
        if (!charCount1[char] || charCount1[char] < charCount2[char]) {
            return false;
        }
    }

    return true;
}

function countCharacters(str) {
    const charCount = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}


console.log(scramble('cedewaraaossoqqyt', 'codewars'    ))