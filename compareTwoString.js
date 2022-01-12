function compare(s1, s2) {
    if (!(/^[a-zA-Z\u00C0-\u00ff]+$/.test(s1)) || s1 == null || s1 == "NULL" || s1 == "Nil" || s1 == "None") {
        s1 = ""
    }
    if (!/^[a-zA-Z\u00C0-\u00ff]+$/.test(s1) ||s1 == null|| s1 == "NULL" || s1 == "Nil" || s1 == "None") {
        s2 = ""
    }

    let sum = 0
    for (let i = 0; i < s1.length; i++) {
        sum += s1.toUpperCase().charCodeAt(i);
    }
    let sum1 = 0
    for (let i = 0; i < s2.length; i++) {
        sum1 += s2.toUpperCase().charCodeAt(i);
    }
    return (sum == sum1)
}

console.log(compare("!!", "121"))

