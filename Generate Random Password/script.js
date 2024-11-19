const passwordBox = document.getElementById("Password");
const Length = 12;
//Characters that are allowed in the password
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/~`";

const allCharacters = uppercase + lowercase + symbols + numbers ; 

// Function to generate a password

function generatePassword() 
{

    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]

    while (Length > password.length) {
        
            password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
        }

passwordBox.value = password;
}

//Copy Password
function CopyPassword(){
passwordBox.select();
document.execCommand('copy');  
}
