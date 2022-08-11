function countPositivesSumNegatives(input) {
    let positive = input.filter( (x) => {
      return x > 0
    });
    let negative = input.filter( (x) => {
      return x < 0
    })
    return [positive.length, negative.reduce((a, b) => a + b, 0)]
}