function getCount(str) {
    var vowelsCount = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == 'a' || str[index] == "e" || str[index] == "i" || str[index] == "o" || str[index] == "u") {
            vowelsCount++;
        }
        
    }
    
    // enter your majic here
    
    return vowelsCount;
  }