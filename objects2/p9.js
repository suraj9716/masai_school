// get all the products which are above 5000 & below 10000.

var amazon=[
    {name:"speakers",price:5400,rating:4},
    {name:"Headphones",price:3000,rating:3},
    {name:"playstation",price:50000,rating:5},
    {name:"watch",price:3000,rating:4},
    ];

    for(var i =0;i<amazon.length;i++){
        if(amazon[i].price>5000 && amazon[i].price<10000){
            console.log(amazon[i].name,amazon[i].rating)
        }
    }