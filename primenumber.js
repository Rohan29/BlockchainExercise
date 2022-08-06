let j = 61;
let isPrime = true
for(let i=2; i<j; i++){
  if(j%i == 0){
   isPrime = false
   console.log(`${i} false`)
   break
  } else {
    console.log(`${i} true`)
    isPrime = true
  }
  }
  if(isPrime == false)
  console.log(`${j} is not prime number`)
  else
  console.log(`${j} is prime number`)