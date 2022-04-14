// to change character in string firstly convert it in array and then update
// change character in string
var name = "Ramlok";
var drum = [];

// step1 array is filled
for(var i =0;i<name.length;i++){
  drum.push(name[i]);
}
console.log(drum)

//step 2 update my array
drum[0] = "N";

// step 3 add everything into the bag
var bag = "";
for (var i =0;i<drum.length;i++){
  bag = bag+drum[i];
}
console.log(bag);
