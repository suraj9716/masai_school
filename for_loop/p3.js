//sum from 50-100 but which are only divisible by 5
var sum = 0;
for(var i =50;i<=100;i++){
  if(i%5==0){
    sum = sum +i;
  }
}
console.log(sum);