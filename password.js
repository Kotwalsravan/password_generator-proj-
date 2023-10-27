const passwordBox=document.getElementById("password");
const size=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const digits="0123456789";
const symbols="!@#$%^&*()_+{}:";
const allChars=upperCase+lowerCase+digits;
const password="";


function createpassword(){
    
    let password=" ";
    password=password+upperCase[Math.floor(Math.random()*upperCase.length)];
    password=password+lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password=password+digits[Math.floor(Math.random()*digits.length)];
   password=password+symbols[Math.floor(Math.random()*symbols.length)];
  while(size>password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
 }
    
    passwordBox.value=password;
    
}

