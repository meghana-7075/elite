let a=[20,30,40,50,60];
function secondLargest(){
    let number1=Math.max(...a);
    a=a.filter(num=>num!==number1);
    let number2=Math.max(...a);
    console.log(number2);
 }
  secondLargest();