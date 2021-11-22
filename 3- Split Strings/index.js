str = process.argv.slice(2)[0];
solution(str);

function solution(str){
    //if length of string is odd; append underscore. split string in intervals of 2
    str.length%2 > 0 ? str = str + "_" : str;
    console.log(str.length == 0 ? str = [] : str.match(/.{1,2}/g));
}