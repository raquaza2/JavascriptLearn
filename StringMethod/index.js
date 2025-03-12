let phoneNumber = '123-456-7890';

phoneNumber = phoneNumber.padStart(14, '60');

console.log(phoneNumber); // +60-123-456-7890

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf('@'));
let extentions = email.slice(email.indexOf('@') + 1);
console.log(username); // Bro1
console.log(extentions); // @gmail.com
