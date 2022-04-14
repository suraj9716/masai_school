// print
// 1 
// * 
// 1 2 
// * * 
// 1 2 3 
// * * * 
// 1 2 3 4 
// * * * * 
// 1 2 3 4 5 
// * * * * * 

for(var father=1;father<=5;father++)
{
  var bag1 = "";
  for(var son=1;son<=father;son++)
  {
    bag1 = bag1+son+" ";
  }
  console.log(bag1)

  var bag2 = "";
  for(var son2=1;son2<=father;son2++)
  {
    bag2 = bag2+"*"+" ";
  }
  console.log(bag2)
}