//father 1: son 1-10

for(var father=1;father<=5;father++)
{
  var bag = "";
  for(var son = 1;son<=father;son++)
  {
    bag = bag + "*";
  }
  console.log(bag);
}