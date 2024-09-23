function a(x) {
    let b = setInterval(x, 200);
    let c = setTimeout(() => {
       clearInterval(b);
    }, 100); 
 }
 
 const snip = (() => {
     let acc = 1;
     return () => {
         console.log(acc++);
     }
 })();
 
 a(snip);