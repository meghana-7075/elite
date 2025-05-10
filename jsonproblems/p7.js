let num=3;
    function isPrime(num) {
        if (num <= 1) {
            console.log("Not a prime number");
            return;
        }
    
        for (let i=2; i<num; i++) {
            if (num % i === 0) {
                console.log("Not a prime number");
                break;
            }
        }
    
        console.log("Prime number");
    }
    
    isPrime();

    