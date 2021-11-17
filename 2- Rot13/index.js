str = process.argv.slice(2)[0];
rot13(str);

function rot13(message){
    // A-Z from letter A to Z replace the letter with the letter array on the same index. The letter array has been rearranged to start with the 13th letter
    console.log( message.replace(/[A-Z]/gi, letter =>
    "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(letter) ] ))
}