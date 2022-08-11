String.prototype.toJadenCase = function () {
    var s = this.split(" ");
    
    let jadenCased = s.map(function(element){
      return element[0].toUpperCase() + element.substr(1);
    });
    
    return jadenCased.join(' ')
};