function sumTwoSmallestNumbers(numbers) { 
    let sortedNumbers = numbers.sort( (a, b) => a - b );
    return (sortedNumbers[0] + sortedNumbers[1])
  }