function validatePalindrome(str) {
    let str_dup = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = str_dup.split('').reverse().join('')

    console.log(str_dup == reversed);
    
    return str_dup == reversed
}

validatePalindrome('Hello World') //false

validatePalindrome('a man, a plan, a canal: panama') //true

validatePalindrome('!#$%!@#') // true