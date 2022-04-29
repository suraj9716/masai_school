// we have a 3x3 matrix

// var arr=[
//    [1,2,3],
//    [5,11,56],
//    [12,45,56]
// ];

// i want to print like
// 1 5 12 step 1 -->    00 01 02        
// 2 11 45              10 11 12
// 3 56 56              20 21 22

// step 2 -->  00,10,20,01,11,21,02,12,22
// here fixed is 000,111,222

// step 3 where is fixed starting or ending
// so here col is fixed and rows are changing

var arr=[
   [1,2,3],
   [5,11,56],
   [12,45,56]
];

var row = arr.length;
var col = arr[0].length;

for(var i =0;i<col;i++){
    var bag = "";
    for(var j =0;j<row;j++){
       bag+= arr[j][i]+" ";
    }
    console.log(bag);
}