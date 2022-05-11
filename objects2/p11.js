// convert this into a object

var product =["macbook", "iphone", "ipad"];
var price = [250000,80000,55000];

// output
// data=[
//     {product:"macbook",price:250000},
//     {product:"iphone",price:80000},
//     {product:"ipad",price:55000}
// ]
var data = [];
for(var i =0;i<product.length;i++){
   var obj={};
   obj["product"]=product[i];
   obj["price"]=price[i];
   data.push(obj);
}
console.log(data)