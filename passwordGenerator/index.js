function generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let characters = '';
    let password = '';

    characters += (includeUpperCase) ? upperCase : '';
    characters += (includeLowerCase) ? lowerCase : '';
    characters += (includeNumbers) ? numbers : '';
    characters += (includeSymbols) ? symbols : '';

    if (characters.length === '') {
        return 'Please select at least one character type';
    }

    if (passwordLength <= 0) {
        return 'Password length must be at least 1 characters';
    }

    for (let i = 0; i < passwordLength; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeUpperCase =  true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);

console.log('Generated password: '+ password);



