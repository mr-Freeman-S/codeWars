function howmuch(m, n) {
    let answer = [];
    if (m <= n) {
        for (m; m <= n; m++) {
            if (m % 7 === 2 && m % 9 === 1) {
                answer.push([`M: ${m}`, `B: ${Math.floor(m / 7)}`, `C: ${Math.floor(m / 9)}`])
            }
        }
    } else {
        for (n; n <= m; n++) {
            if (n % 7 === 2 && n % 9 === 1) {
                answer.push([`M: ${n}`, `B: ${Math.floor(n / 7)}`, `C: ${Math.floor(n / 9)}`])
            }
        }
    }

    return answer
}

debugger
console.log(howmuch(10000, 9950))