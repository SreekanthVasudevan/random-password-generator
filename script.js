const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
const uppercasechars = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
const numberschars = "1234567890";
const symbolschars = "!@#$%^&*()_+=";
const passwordBox = document.getElementById('password');
const length =12;
const allowedChars =uppercasechars+lowercasechars+numberschars+symbolschars;
function createPassword(){
    let password = "";
    
    password += uppercasechars[Math.floor(Math.random()*uppercasechars.length)];
    password += lowercasechars[Math.floor(Math.random()*lowercasechars.length)];
    password += numberschars[Math.floor(Math.random()*numberschars.length)];
    password += symbolschars[Math.floor(Math.random()*symbolschars.length)];
    while(length > password.length){
        password += allowedChars[Math.floor(Math.random()*allowedChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}