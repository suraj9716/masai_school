// get the products name and price whose rating are above and equal to 4

var amazon=[
    {name:"speakers",price:5400,rating:4},
    {name:"Headphones",price:3000,rating:3},
    {name:"playstation",price:50000,rating:5},
    {name:"watch",price:3000,rating:4},
    ];

    for(var i =0;i<amazon.length;i++){
        if(amazon[i].rating>=4){
            console.log(amazon[i].name,amazon[i].price)
        }
    }