//put 10 seeds in every farm

for(var father = 1;father<=20;father++){
  var bag = "";
  for(var son=1;son<=10;son++){
    bag = bag + "*";
  }
  console.log("Farm", father,bag);
}