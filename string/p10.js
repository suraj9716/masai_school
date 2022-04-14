// remove a character

var name = "kakaskhi";
var bag ="";
for(var i =0;i<name.length;i++){
  if(name[i]=="k" && i==0){
    continue;
  }

  bag = bag + name[i];
}
console.log(bag);