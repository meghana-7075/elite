let number=[1,2,3,4,5,6];
function evenOrodd(){
    let even =number.filter(num=>num%2==0);
    let odd =number.filter(num=>num%2!==0);

    console.log(even);
    console.log(odd);
}
    evenOrodd();