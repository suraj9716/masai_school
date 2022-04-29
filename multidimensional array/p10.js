// print in form of snake

// 00 01 02
// 10 11 12
// 20 21 22

// 0 row -->  left to right
// 1 row -->  right to left
//  2 row --> left to right

// odd row --> right to left
// even row --> left to right

// fixed(i)--> 0 to row
// moving(j)-->

// row%2==0 run a loop from 0 column to less then column else from col>=0;
// when row%2!==0 

var arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var row = arr.length;
var col = arr[0].length;
var bag = "";
for(var i =0;i<row;i++){
    if(i%2==0){
        for(var j =0;j<col;j++){
            bag+=arr[i][j]+" ";
        }
    }else{
        for(var j =col-1;j>=0;j--){
            bag+=arr[i][j]+" ";
        }
    }
}
console.log(bag);