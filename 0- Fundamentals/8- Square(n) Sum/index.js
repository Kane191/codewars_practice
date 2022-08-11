function squareSum(numbers){
    let arr = numbers.map(function(element){
      return element * element;
    });
    
    return (arr.reduce((a,b) => a + b, 0))
  }