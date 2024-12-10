let one = 'aaaaabbbbcdde jjjkk '

const conjugativeStrCount = (str) => {
    let charCount = 0;
    let prev = str[0];
    let resStr = '';
    
    for(let i=0;i<=str.length; i++){
        if(prev == str[i]){
            charCount+=1;
            prev = str[i];
        }
        if(prev != str[i] || i == str.length){
            if(prev !== ' '){
                resStr = resStr+`${charCount}`+str[i-1];
                charCount=1;
            }
            prev = str[i];
        }
    }
    return resStr;
}

console.log(conjugativeStrCount(one))