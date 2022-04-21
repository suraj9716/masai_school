// convert string in uppercase

var name = "suraj";
var bag = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i =0;i<name.length;i++){
  
  for(var j =0;j<lower.length;j++){
    if(name[i]==lower[j]){
      bag = bag + upper[j];
    }
  }
}
console.log(bag)