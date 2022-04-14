//Dinasaurus i only want to print odd position character

var name = "Dinasaurus";
var bag = "";
for(var i = 0;i<name.length;i++){
  if(i%2==1){
    bag = bag + name[i];
  }
}
console.log(bag);