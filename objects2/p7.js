// four combination of storing data
// 1 - object inside object
// 2- Array inside object
// 3 - object inside arrays
// 4 - array inside array(multidimensional array)

// var user1 ={name:"Suraj",age:20,email:"suraj@gmail.com"};
// var user2 ={name:"Ajay",age:22,email:"ajay@gmail.com"};
// var user3 ={name:"Rohit",age:25,email:"rohit@gmail.com"};

// objects inside array
var data = [
    {name:"Suraj",age:20,email:"suraj@gmail.com"},
    {name:"Ajay",age:22,email:"ajay@gmail.com"},
    {name:"Rohit",age:25,email:"rohit@gmail.com"}
];

for(var i =0;i<data.length;i++){
    console.log(data[i])
}