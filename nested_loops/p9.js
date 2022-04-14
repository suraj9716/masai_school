// Problem 2: Print Prime Numbers from 1 to given limit
var limit=100;
for(var num=2;num<=limit;num++)
{
var fact = 0;
for(var i =1;i<=num;i++)
{
  if(num%i==0)
  {
    fact++;
  }
}
if(fact==2){
  console.log(num,"is prime no")
}
else{
  console.log(num,"is not a prime no")
}
}