// Sample Input 1 

// 5
// Sample Output 1

// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

function yourFirstPattern(n) {
    for(var father = 1;father<=n;father++){
  var bag = "";
  for(var son=1;son<=n;son++){
    bag = bag + "*"+" ";
  }
  console.log(bag);
}
}