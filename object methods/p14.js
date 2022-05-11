// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

var rect={
    length:9,
    breadth:8,
    area: function(){
      return  this.length*this.breadth
    },
    peri:function(){
       return 2*(this.length+this.breadth)
    }
}
var area1 = rect.area();
var perim = rect.peri();
console.log(area1);
console.log(perim);