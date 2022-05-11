// create an object
// name:ram,age:24;
// hobbies:["coding","reading"]
// print:function(){};

// output
// hello ram
// age is 24
// hobbies are coding,reading

// very long method
var details={
    name:"Ram",
    age:24,
    hobbies:["coding","reading"],
    print :function(){
        console.log("hello",this.name)
        console.log("age is",this.age)
        var bag ="";
        for(var i=0;i<this.hobbies.length;i++){
            if(i==this.hobbies.length-1){
                bag = bag+this.hobbies[i];
            }
            else{
                bag = bag+this.hobbies[i]+", "
            }
        //    bag+=this.hobbies[i]+",";
       }
       console.log("Hobbies are",bag)
    }
}
details.print()