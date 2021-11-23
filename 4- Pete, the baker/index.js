function cakes(recipe, available) {
    matched = ""
    array = []
    for( var key in available){
      if (key in recipe){
        matched='true'
      }
    }
    if (matched !== 'false'){
      for (var key in recipe){
          array.push(available[key]/recipe[key])
      }
    }
    result = Math.floor(Math.min(...array))
    return(isNaN(result)? 0 : result)
}
