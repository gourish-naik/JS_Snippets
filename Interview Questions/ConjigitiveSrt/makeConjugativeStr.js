let one = '5a4b1c2d1e';

const makeConjicutiveStr = (str) => {
    let splitedStr = str.match(/\d+[a-z]/g);
    let res = ''
   splitedStr.map((val)=>{
       if(parseInt(val)){
           res = res+val[1].repeat(parseInt(val))
       }
   })
   return res
}

console.log(makeConjicutiveStr(one));