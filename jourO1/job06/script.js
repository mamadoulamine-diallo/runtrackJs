function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    }
  }
}

fizzbuzz();