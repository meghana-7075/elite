let a=[1,2,,3,4];
let b=[5,6];
function sortNumbers(){
    return a.concat(b).sort((a,b)=>a - b);
}
let sort =sortNumbers();
console.log(sort);
