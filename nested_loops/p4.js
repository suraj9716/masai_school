//Father : son village
// Father has 20 farms
// in farm 1 put 1 seed farm 2 put 2 seed farm 3 put 3 seed

for(var father =1;father<=5;father++){
  var bag = "";
for(var son= 1;son<=father;son++)
{
  bag = bag + son+" ";
}
console.log("Farm", father,bag);
}