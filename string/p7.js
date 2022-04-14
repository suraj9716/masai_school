var name = "Ramlok";
var bag = "";
for(var i=0;i<name.length;i++){
    if(i==0 || i==2){
      bag = bag + "N";
    }
    else if(i==1){
      bag = bag + "K";
    }
    else{
      bag = bag +name[i];
    }
}
console.log(bag)