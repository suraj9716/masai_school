// change through character

var name = "Ramlok";
var bag = "";
for(var i=0;i<name.length;i++){
    if(name[i]=="R"){
      bag = bag + "N";
    }
    else if(name[i]=="a"){
      bag = bag + "K";
    }
    else{
      bag = bag +name[i];
    }
}
console.log(bag)