let num=234;
function numReverse(){
    let strNum = num.toString();
    let reverse= strNum.split('').reverse().join('');
    console.log("reversed number is:" +reverse);

}
numReverse();