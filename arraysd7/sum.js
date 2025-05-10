let array = [1, 3, 4];

function sumOfElements() {
    let accumulator=0;
    let sum = array.reduce((accumulator, current) => 
        accumulator + current);
    console.log(sum);  
}

sumOfElements();


