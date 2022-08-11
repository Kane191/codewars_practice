function openOrSenior(data){
    let arr = data.map(function(element){
      return (element[0] >= 55 && element[1] > 7) ? 'Senior' : 'Open'
    });
    return arr;
}