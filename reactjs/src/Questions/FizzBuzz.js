//printing fizz on multiples of 3
//printing buzz on multiples of 5
//printing fizzbuzz on multiples of 15

function FizzBuzz(number){
    for(let i = 1; i<=number; i++){
        if(i % 15 == 0 ){
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
         } else if (i % 5 == 0) {
            console.log("Buzz")
         } else {
            console.log(i)
         }
    }
}

FizzBuzz(100)