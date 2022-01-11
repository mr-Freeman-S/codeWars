function oddOrEven(n) {
    let ODD = 0
    let EVEN = 0
    for (let i = 1; i <= n; i++) {
        ODD += i;
        }

    for (let i = 0; i < n; i++) {
        EVEN += i;
        }

    return ((ODD % 2 == 1 && EVEN % 2 == 0) || (ODD % 2 == 0 && EVEN % 2 == 1)) ? "Either" :
    (ODD % 2 == 1) ? "Odd" : "Even";
  }
