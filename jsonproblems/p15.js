let a=121;
function checkPalindromeNumber(){
    let strNum= a.toString();
    let string=strNum.split('').reverse().join('');
    if(strNum === string){
        console.log(a+"is palindrome");

    }
    else{
        console,log(a+"not palindrome");

    }
}
checkPalindromeNumber();
