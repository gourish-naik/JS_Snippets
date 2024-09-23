let a = [1,2,3,4,[5,6,1,[1,2],2],9]

const plain = (a) => {
  let flat = []
  for(let i=0; i<a.length; i++){
      if(a[i]?.length > 1){
        // flat = [flat,...plain(a[i])]; // this is my mistake!
        flat.push(...plain(a[i]))
      }else{
         flat.push(a[i])
     }
  }
return flat
}
console.log(plain(a))