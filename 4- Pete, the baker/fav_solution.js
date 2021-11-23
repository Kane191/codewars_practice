//can't understand but i'd like to in the future
function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
}
