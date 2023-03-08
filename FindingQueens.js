// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
function queens(n){
    if (n<=2n) return 0n;
    return BigInt((n - 1n)**2n - (n-1n))
}
