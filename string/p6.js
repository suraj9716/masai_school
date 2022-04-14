var name = "Ramlok";
var bag = "";
for(var i=0;i<name.length;i++){
    if(i==0){
      bag = bag + "N";
    }
    else{
      bag = bag +name[i];
    }
}
console.log(bag)