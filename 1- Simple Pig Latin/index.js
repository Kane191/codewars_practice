// Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Solution(5kyu)
str = process.argv.slice(2)[0];
pigIt(str);
function pigIt(str){
    //split the string by space
    str_arr = str.split(" "); 
    final = "";
    // get first letter and add ay, then remove the first letter and append to variable.
    for(i=0; i< str_arr.length ;i++){
        if(str_arr[i] != "!" && str_arr[i] != "?"){
            final += (str_arr[i]+str_arr[i].charAt(0)+"ay ").replace(str_arr[i].charAt(0), "");
        }
        else{
            final += str_arr[i];
        }
    }
    console.log(final.trim());
}