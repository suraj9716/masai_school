// Create an object with the following functionality
// Ability to add student details and 3 student with marks
// Methods to find the student with the least and highest total

var details={
      
   data:[],
// step 1 method to add 3 student details in the array
 addstudent : function(nam,math,hin,phy){
    //  i have to make object of student detail and add it inside the data array
    // if key not present inside object it added if its added its updated in object

    var obj={};
      obj.name=nam;
      obj.maths=math;
      obj.hindi=hin;
      obj.physics=phy;
      this.data.push(obj);
 },
// lowmarks : function(){
//    var book = Infinity;
//    var lowstudent;
//    for(var i =0;i<this.data.length;i++){
//       var total = this.data[i].maths+this.data[i].hindi+this.data[i].physics;
//       return total;
//    }
// }
}
// details.addstudent("suraj",45,56,87);
// details.addstudent("Ajay",65,59,80);
// details.addstudent("Rohit",49,62,97);
// console.log(details.lowmarks);
console.log(details.addstudent())